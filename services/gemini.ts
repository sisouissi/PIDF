import type { PatientData } from '../components/AcrGuidelineTool/types';
import { connectiviteTypes, riskFactors, symptoms } from '../components/AcrGuidelineTool/constants';
import { TREATMENT_DATA, SARD_LABELS } from '../data/acr_treatment_data';

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