import { GoogleGenAI } from "@google/genai";
import type { PatientData } from '../components/AcrGuidelineTool/types';
import { connectiviteTypes, riskFactors, symptoms } from '../components/AcrGuidelineTool/constants';
import { TREATMENT_DATA, SARD_LABELS } from '../data/acr_treatment_data';
import type { ILAAlgorithmAnswers } from '../types';

// --- API for Screening Tool (Mocked) ---
export const generateScreeningSummary = async (patientData: PatientData, riskLevel: string): Promise<string> => {
    // Simuler un délai d'API pour l'expérience utilisateur
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const connectiviteLabel = connectiviteTypes.find(c => c.value === patientData.connectiviteType)?.label || 'Non spécifiée';
    const riskFactorsList = patientData.riskFactors.length > 0 ? 
        patientData.riskFactors.map(rf => riskFactors.find(r => r.value === rf)?.label).filter(Boolean).join(', ') : 
        'aucun';
    const symptomsList = patientData.currentSymptoms.length > 0 ? 
        patientData.currentSymptoms.map(s => symptoms.find(sym => sym.value === s)?.label).filter(Boolean).join(', ') : 
        'aucun';

    let summary = "**Synthèse Clinique**\n\n";
    
    // Profil du patient
    summary += "**Profil du Patient**\n\n";
    if (patientData.hasPID) {
        summary += `Patient avec pneumopathie interstitielle diffuse confirmée dans le contexte d'une ${connectiviteLabel}. `;
        if (patientData.currentSymptoms.length > 0) {
            summary += `Symptômes actuels : ${symptomsList}. `;
        }
    } else {
        summary += `Patient avec ${connectiviteLabel} présentant un risque **${riskLevel}** de développer une PID. `;
        if (patientData.riskFactors.length > 0) {
            summary += `Facteurs de risque identifiés : ${riskFactorsList}. `;
        }
        if (patientData.currentSymptoms.length > 0) {
            summary += `Symptômes évocateurs : ${symptomsList}. `;
        }
    }
    summary += "\n";

    // Recommandations
    summary += "**Recommandations Prioritaires (ACR 2023)**\n\n";
    
    if (patientData.hasPID) {
        // Suivi d'une PID confirmée
        if (patientData.connectiviteType === 'IIM' || patientData.connectiviteType === 'SSc') {
            summary += "• EFR de suivi tous les **3-6 mois** la première année\n";
        } else {
            summary += "• EFR de suivi tous les **3-12 mois** la première année\n";
        }
        summary += "• TDM-HR de suivi selon indication clinique\n";
        summary += "• Test de désaturation ambulatoire tous les 3-12 mois\n";
        summary += "• Suivi multidisciplinaire pneumo-rhumatologique\n";
    } else {
        // Dépistage
        if (riskLevel === 'élevé') {
            summary += "• **EFR + TDM-HR combinés** (approche recommandée)\n";
            summary += "• Réévaluation tous les **3-6 mois**\n";
        } else if (riskLevel === 'modéré') {
            summary += "• **EFR de dépistage** (recommandé conditionnellement)\n";
            summary += "• TDM-HR si EFR anormales\n";
            summary += "• Réévaluation tous les **6-12 mois**\n";
        } else {
            summary += "• Surveillance clinique de routine\n";
            summary += "• EFR si symptômes respiratoires\n";
        }
    }

    // Surveillance
    summary += "\n**Surveillance et Suivi**\n\n";
    summary += "• Approche multidisciplinaire pneumo-rhumatologique\n";
    summary += "• Éducation sur les signes d'alarme (dyspnée, toux persistante)\n";
    
    if (patientData.hasPID) {
        summary += "• Surveillance progression : baisse CVF ≥10% = signe majeur\n";
    }

    // Points d'attention spécifiques
    if (patientData.connectiviteType === 'SSc') {
        summary += "\n**⚠️ Attention Particulière**\n\n";
        summary += "• Sclérodermie : risque élevé de PID précoce et progressive\n";
        summary += "• Rechercher anticorps anti-Scl70 si non fait\n";
    } else if (patientData.connectiviteType === 'IIM') {
        summary += "\n**⚠️ Attention Particulière**\n\n";
        summary += "• Myopathie inflammatoire : PID peut précéder l'atteinte musculaire\n";
        summary += "• Vigilance pour formes rapidement progressives\n";
    }

    return summary;
};


// --- API for Treatment Tool (Mocked) ---
export const generateTreatmentSummary = async (sard: string, context: string): Promise<string> => {
     await new Promise(resolve => setTimeout(resolve, 1500));

    const contextLabels: Record<string, string> = {
        firstLine: "Traitement de première ligne",
        progression: "Progression de la PID sous traitement",
        'rp-ild': "PID Rapidement Progressive (RP-ILD)"
    };
    
    const recommendations = TREATMENT_DATA[context as keyof typeof TREATMENT_DATA][sard as keyof typeof TREATMENT_DATA['firstLine']];
    
    let summary = `**Synthèse Thérapeutique pour ${SARD_LABELS[sard] || sard}**\n\n`;
    summary += `**Contexte :** ${contextLabels[context] || context}\n\n`;
    
    if (recommendations.recommended) {
        summary += `**Recommandé :**\n• ${recommendations.recommended}\n\n`;
    }
    if (recommendations.options) {
        summary += `**Options Conditionnelles :**\n${recommendations.options.map(o => `• ${o}`).join('\n')}\n\n`;
    }
    if (recommendations.against) {
        summary += `**Déconseillé Conditionnellement :**\n${recommendations.against.map(o => `• ${o}`).join('\n')}\n\n`;
    }
    if (recommendations.strong_against) {
        summary += `**Fortement Déconseillé :**\n• ${recommendations.strong_against}\n\n`;
    }
    if (recommendations.note) {
        summary += `**Note importante :**\n${recommendations.note}\n`;
    }
    return summary;
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
  try {
    if (!process.env.API_KEY) {
        throw new Error('Le service AI n\'est pas disponible: Une clé API doit être fournie.');
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

    const patientInfoText = answers.patientInfo.length > 0 ? answers.patientInfo.map(pi => patientInfoMap[pi as keyof typeof patientInfoMap]).join(', ') : 'Aucun';

    const prompt = `
Génère un plan de prise en charge clinique concis et bien structuré pour un patient présentant des Anomalies Pulmonaires Interstitielles (ILA), basé sur les recommandations de la Fleischner Society et d'autres directives pertinentes. La sortie doit être en français et utiliser le format Markdown pour la mise en forme (texte en gras avec **).

**Données du patient :**
- **Contexte du scanner :** ${contextMap[answers.context]}
- **Antécédents pertinents du patient :** ${patientInfoText}
- **Étendue des ILA :** ${answers.extent === '>10' ? '>10% de n\'importe quelle zone pulmonaire' : '<=10% de n\'importe quelle zone pulmonaire'}
- **Caractéristiques fibrosantes :** ${answers.fibrotic === 'yes' ? 'Présentes' : 'Absentes'}
- **Distribution (si non-fibrosante) :** ${answers.fibrotic === 'no' ? (answers.distribution === 'basal_peripheral' ? 'Prédominance basale et périphérique' : 'Autre') : 'N/A'}

**Recommandation basée sur l'algorithme :** ${recommendationTitle}

**Instructions :**
1.  **Résumé :** Commence par un bref résumé du profil de risque du patient en fonction des données fournies.
2.  **Rationnel :** Explique brièvement le rationnel derrière la recommandation "${recommendationTitle}", en le reliant aux caractéristiques spécifiques des ILA (fibrosante, étendue, distribution).
3.  **Plan de prise en charge :** Fournis des étapes claires et réalisables. Cela devrait inclure :
    -   Orientations (ex: vers la pneumologie, réunion de concertation pluridisciplinaire).
    -   Imagerie de suivi recommandée (ex: type de scanner, calendrier).
    -   Tests fonctionnels recommandés (ex: EFR, Test de Marche de 6 minutes).
    -   Conseils de prise en charge générale (ex: sevrage tabagique, éducation du patient).
4.  **Ton :** Professionnel, clinique et directif.

La réponse doit être structurée et facile à lire pour un clinicien.
`;
    
    const responseStream = await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    if (signal.aborted) {
        onDone();
        return;
    };
    
    for await (const chunk of responseStream) {
        if (signal.aborted) {
            onDone();
            return;
        }
        onChunk(chunk.text);
    }
    
    onDone();

  } catch (error) {
    console.error("Error generating ILA management summary:", error);
    onError(error as Error);
  }
};
