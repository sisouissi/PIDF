
import { GoogleGenAI } from "@google/genai";
import type { PatientData } from '../components/AcrGuidelineTool/types';
import { connectiviteTypes, riskFactors, symptoms } from '../components/AcrGuidelineTool/constants';
import { TREATMENT_DATA, SARD_LABELS } from '../data/acr_treatment_data';
import type { ILAAlgorithmAnswers } from '../types';

const getApiKey = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("Le service AI n'est pas disponible: La variable d'environnement API_KEY doit être configurée.");
    }
    return apiKey;
};

// --- Common function for streaming generation ---
const generateContentStreamWithCallbacks = async (
    prompt: string,
    onChunk: (chunk: string) => void,
    onDone: () => void,
    onError: (error: Error) => void,
    signal: AbortSignal
) => {
    try {
        const apiKey = getApiKey();
        const ai = new GoogleGenAI({ apiKey });

        const responseStream = await ai.models.generateContentStream({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        if (signal.aborted) {
            onDone();
            return;
        }

        for await (const chunk of responseStream) {
            if (signal.aborted) break;
            onChunk(chunk.text);
        }

    } catch (error) {
        console.error("Error in generateContentStreamWithCallbacks:", error);
        onError(error as Error);
    } finally {
        if (!signal.aborted) {
          onDone();
        }
    }
};

// --- API for Screening Tool (REAL Gemini Call) ---
export const generateScreeningSummary = async (
    patientData: PatientData, 
    riskLevel: string,
    onChunk: (chunk: string) => void,
    onDone: () => void,
    onError: (error: Error) => void,
    signal: AbortSignal
) => {
    const connectiviteLabel = connectiviteTypes.find(c => c.value === patientData.connectiviteType)?.label || patientData.connectiviteType;
    const riskFactorsList = patientData.riskFactors.length > 0
        ? patientData.riskFactors
            .map(rf => riskFactors.find(r => r.value === rf)?.label)
            .filter(Boolean)
            .join(', ')
        : 'aucun';
    const symptomsList = patientData.currentSymptoms.length > 0
        ? patientData.currentSymptoms
            .map(s => symptoms.find(sym => sym.value === s)?.label)
            .filter(Boolean)
            .join(', ')
        : 'aucun';

    const prompt = `
Génère une synthèse clinique concise pour un patient avec les caractéristiques suivantes :
- **Connectivite :** ${connectiviteLabel}
- **PID déjà diagnostiquée :** ${patientData.hasPID ? 'Oui' : 'Non'}
- **Facteurs de risque de PID identifiés :** ${riskFactorsList}
- **Symptômes de PID présents :** ${symptomsList}
- **Niveau de risque de PID estimé :** ${riskLevel}

La synthèse doit commencer par une phrase résumant le profil du patient. Ensuite, elle doit émettre des recommandations claires et priorisées pour le dépistage ou le suivi, conformément aux directives ACR 2023. Utilise le format markdown avec des titres (### Titre) et du texte en gras (**gras**). La réponse doit être exclusivement en français et structurée.

**Structure attendue :**
### Synthèse du Profil Patient
### Recommandations Prioritaires
### Plan de Suivi
### Points d'Attention Spécifiques (si pertinent)`;

    await generateContentStreamWithCallbacks(prompt, onChunk, onDone, onError, signal);
};

// --- API for Treatment Tool (REAL Gemini Call) ---
export const generateTreatmentSummary = async (
    sard: string, 
    context: string,
    onChunk: (chunk: string) => void,
    onDone: () => void,
    onError: (error: Error) => void,
    signal: AbortSignal
) => {
    const contextLabels: Record<string, string> = {
        firstLine: "Traitement de première ligne",
        progression: "Progression de la PID sous traitement",
        'rp-ild': "PID Rapidement Progressive (RP-ILD)"
    };
    
    const recommendations = TREATMENT_DATA[context as keyof typeof TREATMENT_DATA][sard as keyof typeof TREATMENT_DATA['firstLine']];

    const prompt = `
Génère une synthèse de la stratégie thérapeutique pour un patient atteint d'une PID associée à une connectivite, en se basant sur les recommandations ACR 2023. La sortie doit être en français et utiliser le format markdown.

**Contexte Clinique :**
- **Type de Connectivite :** ${SARD_LABELS[sard] || sard}
- **Situation :** ${contextLabels[context] || context}

**Recommandations ACR 2023 pour ce contexte :**
- Titre : ${recommendations.title}
- Recommandé : ${recommendations.recommended || 'Aucun'}
- Options conditionnelles : ${recommendations.options?.join(', ') || 'Aucune'}
- Déconseillé conditionnellement : ${recommendations.against?.join(', ') || 'Aucun'}
- Fortement déconseillé : ${recommendations.strong_against || 'Aucun'}
- Note importante : ${recommendations.note || 'Aucune'}

**Instructions :**
1.  **Titre :** Commence par un titre clair comme "### Plan Thérapeutique pour [Connectivite]".
2.  **Résumé :** Résume brièvement la stratégie générale pour ce contexte.
3.  **Détail des options :** Détaille les options thérapeutiques recommandées, en expliquant brièvement le rationnel.
4.  **Points de vigilance :** Mentionne les traitements déconseillés et explique pourquoi.
5.  **Conclusion :** Termine par une note sur l'importance de la discussion multidisciplinaire et de la surveillance.
`;
    await generateContentStreamWithCallbacks(prompt, onChunk, onDone, onError, signal);
};

// --- API for ILA Decision Tool (Real Gemini Call) ---
export const generateILAmanagementSummary = async (
  answers: ILAAlgorithmAnswers,
  recommendationTitle: string,
  onChunk: (chunk: string) => void,
  onDone: () => void,
  onError: (error: Error) => void,
  signal: AbortSignal
) => {
    const contextMap = {
      symptoms: 'Évaluation pour des symptômes respiratoires',
      lcs: 'Programme de dépistage du cancer du poumon',
      incidental: 'Découverte fortuite sur un scanner non dédié',
      '': 'Non spécifié'
    };
    
    const patientInfoMap = {
        'history': 'Antécédents médicaux significatifs (ex: Cancer, Radiothérapie thoracique)',
        'symptoms': 'Présence de symptômes respiratoires (Dyspnée, Toux)',
        'sard': 'Signes de maladie rhumatismale auto-immune systémique (SARD)',
        'family': 'Antécédents familiaux de fibrose pulmonaire',
    };

    const patientInfoText = answers.patientInfo.length > 0
        ? answers.patientInfo
            .map(pi => patientInfoMap[pi as keyof typeof patientInfoMap])
            .filter(Boolean)
            .join(', ')
        : 'Aucun';

    const prompt = `
Génère un plan de prise en charge clinique concis et bien structuré pour un patient présentant des Anomalies Pulmonaires Interstitielles (ILA), basé sur les recommandations de la Fleischner Society et d'autres directives pertinentes. La sortie doit être en français et utiliser le format Markdown (titres avec ###, gras avec **).

### Données du patient
- **Contexte du scanner :** ${contextMap[answers.context]}
- **Antécédents pertinents :** ${patientInfoText}
- **Étendue des ILA :** ${answers.extent === '>10' ? '>10% de n\'importe quelle zone pulmonaire' : '<=10% de n\'importe quelle zone pulmonaire'}
- **Caractéristiques fibrosantes :** ${answers.fibrotic === 'yes' ? 'Présentes' : 'Absentes'}
- **Distribution (si non-fibrosante) :** ${answers.fibrotic === 'no' ? (answers.distribution === 'basal_peripheral' ? 'Prédominance basale et périphérique' : 'Autre') : 'N/A'}

### Recommandation de l'algorithme
- ${recommendationTitle}

### Instructions
1.  **Résumé du Profil de Risque :** Synthétise le profil du patient.
2.  **Rationnel de la Recommandation :** Explique pourquoi cette recommandation a été choisie.
3.  **Plan de Prise en Charge Détaillé :** Liste les étapes concrètes (Orientations, Imagerie de suivi, Tests fonctionnels, Mesures générales).
4.  **Ton :** Professionnel, clinique, et directif.
`;
    
    await generateContentStreamWithCallbacks(prompt, onChunk, onDone, onError, signal);
};
