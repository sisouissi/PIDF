import React, { useState, useCallback, useMemo } from 'react';
import { AlertTriangle, CheckCircle, Stethoscope, Activity, Heart, XCircle, Search } from './icons';
import { generateScreeningSummary } from '../services/gemini';
import { AISummary } from './AcrGuidelineTool/components/AISummary';
import { StepIndicator } from './AcrGuidelineTool/components/StepIndicator';
import { PatientInfoForm } from './AcrGuidelineTool/components/PatientInfoForm';
import { RecommendationsDisplay } from './AcrGuidelineTool/components/RecommendationsDisplay';
import { PatientData, Step, RiskLevelInfo, Recommendation } from './AcrGuidelineTool/types';
import { connectiviteTypes } from './AcrGuidelineTool/constants';

const getRiskLevel = (data: PatientData): RiskLevelInfo => {
    let score = 0;

    if (data.hasPID) {
        // If PID is already diagnosed, we are in a monitoring context. Risk is inherently high for progression.
        return { level: 'élevé', color: 'border-red-500', icon: AlertTriangle };
    }

    // Screening context
    const connectivite = connectiviteTypes.find(c => c.value === data.connectiviteType);
    if (connectivite) {
         if (connectivite.risk === 'élevé') score += 2;
         if (connectivite.risk === 'modéré') score += 1;
    }
    
    // Assess risk based on selected factors
    if (data.riskFactors.some(rf => ['anti-scl70', 'anti-synthetase', 'anti-mda5'].includes(rf))) score += 2;
    if (data.riskFactors.includes('age') || data.riskFactors.includes('sexeM')) score += 1;

    if (data.currentSymptoms.includes('crepitants')) score += 2;
    if (data.currentSymptoms.includes('dyspnee')) score += 1;
    if (data.currentSymptoms.length > 2) score +=1;

    if (score >= 3) {
        return { level: 'élevé', color: 'border-red-500', icon: AlertTriangle };
    }
    if (score >= 1) {
        return { level: 'modéré', color: 'border-orange-500', icon: Stethoscope };
    }
    return { level: 'faible', color: 'border-green-500', icon: CheckCircle };
};

const SCREENING_RECOMMENDATIONS: Recommendation[] = [
    { test: 'EFR (Spirométrie + DLCO)', recommendation: 'Recommandé (conditionnel)', level: 'conditional-for', icon: Activity, description: "Évaluation initiale de la fonction pulmonaire. Essentiel pour détecter une atteinte restrictive ou une altération de la diffusion.", frequency: 'Au diagnostic de la connectivite' },
    { test: 'TDM Thoracique Haute Résolution', recommendation: 'Recommandé (conditionnel)', level: 'conditional-for', icon: Search, description: "Examen de référence pour le diagnostic morphologique. À discuter en fonction du niveau de risque et des symptômes.", frequency: 'Si EFR anormales ou symptômes' },
    { test: 'Test de Marche de 6 Minutes (TM6)', recommendation: 'Recommandé (conditionnel)', level: 'conditional-for', icon: Heart, description: "Évalue la tolérance à l'effort et recherche une désaturation, un facteur pronostique important.", frequency: 'Si symptômes ou EFR anormales' },
    { test: 'Échographie Cardiaque', recommendation: 'Déconseillé (conditionnel)', level: 'conditional-against', icon: XCircle, description: "Non recommandé en routine pour le dépistage de la PID. Indiqué si suspicion d'hypertension pulmonaire.", frequency: 'Non applicable en dépistage systématique' },
];

const MONITORING_RECOMMENDATIONS: Recommendation[] = [
    { test: 'EFR (Spirométrie + DLCO)', recommendation: 'Recommandé (fort)', level: 'conditional-for', icon: Activity, description: "Suivi de la progression de la maladie. La fréquence dépend de la sévérité et de la stabilité.", frequency: 'Tous les 3-6 mois si progression, 6-12 mois si stable' },
    { test: 'Test de Marche de 6 Minutes (TM6)', recommendation: 'Recommandé (fort)', level: 'conditional-for', icon: Heart, description: "Évaluation régulière de la capacité fonctionnelle et de l'oxygénation à l'effort.", frequency: 'Tous les 6-12 mois' },
    { test: 'TDM Thoracique Haute Résolution', recommendation: 'Recommandé (conditionnel)', level: 'conditional-for', icon: Search, description: "Pour évaluer la progression radiologique ou en cas d'aggravation inexpliquée. Pas en routine systématique.", frequency: 'Tous les 12-24 mois, ou si aggravation' },
];

export const AcrScreeningTool: React.FC = () => {
    const [step, setStep] = useState<Step>('patient-info');
    const [patientData, setPatientData] = useState<PatientData>({
        connectiviteType: '',
        hasPID: false,
        riskFactors: [],
        currentSymptoms: []
    });
    const [aiSummary, setAiSummary] = useState('');
    const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);

    const riskLevel = useMemo(() => getRiskLevel(patientData), [patientData]);

    const handleSubmit = () => {
        setStep('recommendations');
    };

    const handleBack = () => {
        setStep('patient-info');
    };

    const handleReset = () => {
        setPatientData({
            connectiviteType: '',
            hasPID: false,
            riskFactors: [],
            currentSymptoms: []
        });
        setAiSummary('');
        setSummaryError(null);
        setStep('patient-info');
    };

    const handleGenerateSummary = useCallback(async () => {
        setIsGeneratingSummary(true);
        setAiSummary('');
        setSummaryError(null);
        try {
            const summary = await generateScreeningSummary(patientData, riskLevel.level);
            setAiSummary(summary);
        } catch (e) {
            setSummaryError(e instanceof Error ? e.message : "Une erreur inconnue est survenue.");
        } finally {
            setIsGeneratingSummary(false);
        }
    }, [patientData, riskLevel]);

    return (
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-8">
            <StepIndicator currentStep={step} />

            {step === 'patient-info' && (
                <PatientInfoForm
                    patientData={patientData}
                    setPatientData={setPatientData}
                    onSubmit={handleSubmit}
                />
            )}

            {step === 'recommendations' && (
                <RecommendationsDisplay
                    patientData={patientData}
                    riskLevel={riskLevel}
                    screeningRecs={SCREENING_RECOMMENDATIONS}
                    monitoringRecs={MONITORING_RECOMMENDATIONS}
                    onBack={handleBack}
                    onReset={handleReset}
                    onGenerateSummary={handleGenerateSummary}
                    aiSummary={aiSummary}
                    isGeneratingSummary={isGeneratingSummary}
                    summaryError={summaryError}
                />
            )}
        </div>
    );
};