import { PatientData } from '../types';
import { connectiviteTypes, riskFactors, symptoms } from '../constants';

export const generateClinicalSummary = async (patientData: PatientData, riskLevel: string): Promise<string> => {
    const connectiviteLabel = connectiviteTypes.find(c => c.value === patientData.connectiviteType)?.label || patientData.connectiviteType;
    const riskFactorsList = patientData.riskFactors.length > 0 ? patientData.riskFactors.map(rf => riskFactors.find(r => r.value === rf)?.label).join(', ') : 'aucun';
    const symptomsList = patientData.currentSymptoms.length > 0 ? patientData.currentSymptoms.map(s => symptoms.find(sym => sym.value === s)?.label).join(', ') : 'aucun';

    const prompt = `Génère une synthèse clinique concise pour un patient avec les caractéristiques suivantes :
- **Connectivite :** ${connectiviteLabel}
- **Facteurs de risque de PID :** ${riskFactorsList}
- **Symptômes de PID présents :** ${symptomsList}
- **PID déjà diagnostiquée :** ${patientData.hasPID ? 'Oui' : 'Non'}
- **Niveau de risque de PID estimé :** ${riskLevel}

La synthèse doit commencer par une phrase résumant le profil du patient. Ensuite, elle doit émettre des recommandations claires et priorisées pour le dépistage ou le suivi, conformément aux directives ACR 2023. Utilise le format markdown avec des titres en gras (**Titre**). La réponse doit être exclusivement en français.`;

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                systemInstruction: "Tu es un assistant expert en pneumologie et rhumatologie, spécialisé dans l'interprétation des directives cliniques. Tu rédiges des synthèses claires et structurées pour les médecins.",
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data.text;
        
    } catch (error) {
        console.error("Error generating summary:", error);
        throw new Error("La génération de la synthèse a échoué. L'API a peut-être rencontré un problème.");
    }
};
