import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { generateILAmanagementSummary } from '../services/gemini';
import { AISummary } from './AISummary';
import { RotateCcw, ArrowLeft, ChevronRight, CheckCircle, AlertTriangle, Stethoscope, Image } from './icons';
import { ILAAlgorithmAnswers } from '../types';

// --- Types ---
type StepId = 'start' | 'prone_ct' | 'evaluate' | 'recommendation';

type Recommendation = {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
};

// --- Helper Components ---
const CheckboxGroup: React.FC<{ options: { id: string, label: string }[], selected: string[], onChange: (id: string) => void }> = ({ options, selected, onChange }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(opt => (
            <label key={opt.id} className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${selected.includes(opt.id) ? 'bg-blue-50 border-blue-500' : 'bg-white border-slate-300 hover:border-blue-400'}`}>
                <input type="checkbox" checked={selected.includes(opt.id)} onChange={() => onChange(opt.id)} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-3 text-base font-medium text-slate-700">{opt.label}</span>
            </label>
        ))}
    </div>
);

const RadioGroup: React.FC<{ name: string, legend: string, options: { value: string, label: string }[], selected: string, onChange: (value: string) => void }> = ({ name, legend, options, selected, onChange }) => (
    <fieldset className="space-y-3">
        <legend className="text-lg font-semibold text-slate-800">{legend}</legend>
        {options.map(opt => (
             <label key={opt.value} className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${selected === opt.value ? 'bg-blue-50 border-blue-500' : 'bg-white border-slate-300 hover:border-blue-400'}`}>
                <input type="radio" name={name} value={opt.value} checked={selected === opt.value} onChange={e => onChange(e.target.value)} className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"/>
                <span className="ml-3 text-base font-medium text-slate-700">{opt.label}</span>
            </label>
        ))}
    </fieldset>
);


// --- Main Tool ---
export const ILADecisionTool: React.FC = () => {
    const initialAnswers: ILAAlgorithmAnswers = { context: '', patientInfo: [], extent: '', fibrotic: '', distribution: '' };
    const [step, setStep] = useState<StepId>('start');
    const [history, setHistory] = useState<StepId[]>([]);
    const [answers, setAnswers] = useState<ILAAlgorithmAnswers>(initialAnswers);
    const [aiSummary, setAiSummary] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        // Cleanup function to abort request on component unmount
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    const navigateTo = (nextStep: StepId) => {
        setHistory(prev => [...prev, step]);
        setStep(nextStep);
    };

    const goBack = () => {
        const lastStep = history.pop();
        if (lastStep) {
            setStep(lastStep);
            setHistory([...history]);
        }
    };
    
    const handleReset = () => {
        setStep('start');
        setHistory([]);
        setAnswers(initialAnswers);
        setAiSummary('');
        setSummaryError(null);
        abortControllerRef.current?.abort();
    };
    
    const recommendation = useMemo((): Recommendation | null => {
        if (step !== 'recommendation') return null;

        if (answers.fibrotic === 'yes' || answers.extent === '>10') {
            return { title: "Risque Élevé - Discussion Multidisciplinaire (DMD)", description: "Ce patient présente des ILA à haut risque. Une évaluation complète par un pneumologue et une discussion multidisciplinaire sont fortement recommandées. Ces anomalies peuvent représenter une PID à un stade précoce.", icon: AlertTriangle, color: "red" };
        }
        if (answers.distribution === 'basal_peripheral') {
            return { title: "À Risque - Surveillance Individualisée", description: "Ce patient présente des ILA 'à risque'. Une orientation vers un pneumologue pour une surveillance individualisée est recommandée afin de surveiller toute progression.", icon: Stethoscope, color: "orange" };
        }
        return { title: "Faible Risque - Retour au Médecin Traitant", description: "Ce patient présente des ILA à faible risque. Un suivi respiratoire spécifique n'est pas systématiquement requis, mais le médecin traitant doit être informé et les facteurs de risque (comme le tabagisme) doivent être pris en charge.", icon: CheckCircle, color: "green" };
    }, [step, answers]);

    const handleGenerateSummary = useCallback(async () => {
        if (!recommendation) return;
        setIsGenerating(true);
        setAiSummary('');
        setSummaryError(null);

        const controller = new AbortController();
        abortControllerRef.current = controller;
        const timeoutId = setTimeout(() => {
            controller.abort();
        }, 30000); // 30s timeout

        try {
            await generateILAmanagementSummary(
                answers,
                recommendation.title,
                (chunk) => setAiSummary(prev => prev + chunk),
                () => { // onDone
                    clearTimeout(timeoutId);
                    setIsGenerating(false);
                    abortControllerRef.current = null;
                },
                (error) => { // onError
                    clearTimeout(timeoutId);
                    if (error.name !== 'AbortError') {
                        setSummaryError(error.message);
                    }
                    setIsGenerating(false);
                    abortControllerRef.current = null;
                },
                controller.signal
            );
        } catch (err: any) {
            clearTimeout(timeoutId);
            if (err.name !== 'AbortError') {
                setSummaryError(err.message);
            }
            setIsGenerating(false);
            abortControllerRef.current = null;
        }
    }, [answers, recommendation]);


    const renderStep = () => {
        switch(step) {
            case 'start':
                const patientInfoOptions = [
                    { id: 'history', label: 'Antécédents médicaux significatifs (ex: Cancer, Radiothérapie thoracique)' },
                    { id: 'symptoms', label: 'Présence de symptômes respiratoires (Dyspnée, Toux)' },
                    { id: 'sard', label: 'Signes de maladie rhumatismale auto-immune systémique (SARD)' },
                    { id: 'family', label: 'Antécédents familiaux de fibrose pulmonaire' },
                ];
                return (
                    <div className="space-y-6">
                        <RadioGroup name="context" legend="1. Quel est le contexte du scanner ?" options={[
                            { value: 'symptoms', label: 'Évaluation pour des symptômes respiratoires' },
                            { value: 'lcs', label: 'Programme de dépistage du cancer du poumon' },
                            { value: 'incidental', label: 'Découverte fortuite sur un scanner non dédié' },
                        ]} selected={answers.context} onChange={v => setAnswers(p => ({...p, context: v as any}))} />
                        
                        <div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">2. Y a-t-il un contexte patient pertinent ?</h3>
                            <CheckboxGroup options={patientInfoOptions} selected={answers.patientInfo} onChange={id => setAnswers(p => ({...p, patientInfo: p.patientInfo.includes(id) ? p.patientInfo.filter(i => i !== id) : [...p.patientInfo, id]}))} />
                        </div>
                        
                        <div className="text-center">
                            <button onClick={() => navigateTo(answers.context === 'incidental' ? 'prone_ct' : 'evaluate')} disabled={!answers.context} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-slate-400 flex items-center mx-auto text-base font-medium">
                                Étape Suivante <ChevronRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                );
            case 'prone_ct':
                return (
                     <div className="text-center space-y-4">
                        <Image className="w-12 h-12 text-blue-500 mx-auto" />
                        <h3 className="text-xl font-bold text-slate-800">Recommandation : TDM en Procubitus</h3>
                        <p className="text-slate-600 max-w-prose mx-auto text-lg">Pour les découvertes fortuites sur un scanner non dédié en décubitus dorsal, une TDM à haute résolution (HRCT) en procubitus est recommandée pour confirmer que les anomalies ne sont pas dépendantes de la position (atélectasies).</p>
                        <button onClick={() => navigateTo('evaluate')} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center mx-auto text-base font-medium">
                            Procéder à l'Évaluation <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                );
            case 'evaluate':
                 return (
                    <div className="space-y-6">
                        <RadioGroup name="extent" legend="1. L'étendue des anomalies est-elle >10% d'une zone pulmonaire ?" options={[
                            { value: '>10', label: 'Oui, >10%' },
                            { value: '<=10', label: 'Non, <=10%' },
                        ]} selected={answers.extent} onChange={v => setAnswers(p => ({...p, extent: v as any}))} />
                        <RadioGroup name="fibrotic" legend="2. Y a-t-il des signes de fibrose (bronchectasies de traction, rayons de miel) ?" options={[
                            { value: 'yes', label: 'Oui' },
                            { value: 'no', label: 'Non' },
                        ]} selected={answers.fibrotic} onChange={v => setAnswers(p => ({...p, fibrotic: v as any}))} />
                         {answers.fibrotic === 'no' && (
                             <div className="animate-fade-in-fast">
                                 <RadioGroup name="distribution" legend="3. La distribution est-elle à prédominance basale et périphérique ?" options={[
                                    { value: 'basal_peripheral', label: 'Oui' },
                                    { value: 'other', label: 'Non' },
                                ]} selected={answers.distribution} onChange={v => setAnswers(p => ({...p, distribution: v as any}))} />
                             </div>
                         )}
                         <div className="text-center">
                            <button onClick={() => navigateTo('recommendation')} disabled={!answers.extent || !answers.fibrotic || (answers.fibrotic === 'no' && !answers.distribution)} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-slate-400 flex items-center mx-auto text-base font-medium">
                                Obtenir la Recommandation <ChevronRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                );
            case 'recommendation':
                if (!recommendation) return null;
                const recColorClasses = { red: 'bg-red-100 border-red-500 text-red-800', orange: 'bg-orange-100 border-orange-500 text-orange-800', green: 'bg-green-100 border-green-500 text-green-800' };
                return (
                    <div className="space-y-6">
                        <div className={`p-6 rounded-lg border-l-4 text-center ${recColorClasses[recommendation.color as keyof typeof recColorClasses]}`}>
                            <recommendation.icon className="w-12 h-12 mx-auto mb-3" />
                            <h3 className="text-2xl font-bold mb-2">{recommendation.title}</h3>
                            <p className="text-lg">{recommendation.description}</p>
                        </div>
                        <div>
                             <div className="text-center mb-4">
                                <button
                                    onClick={handleGenerateSummary}
                                    disabled={isGenerating}
                                    className="inline-flex items-center justify-center py-2 px-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400"
                                >
                                   Générer un Plan de Prise en Charge par IA
                                </button>
                            </div>
                            <AISummary summary={aiSummary} isLoading={isGenerating} error={summaryError} title="Plan de Prise en Charge Généré par IA"/>
                        </div>
                    </div>
                );
        }
    };
    
    return (
        <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200">
             <div className="min-h-[400px] flex flex-col justify-center">
                {renderStep()}
             </div>
             <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-200">
                <button onClick={goBack} disabled={history.length === 0} className="flex items-center px-4 py-2 text-base font-medium rounded-lg transition-colors shadow-sm bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Précédent
                </button>
                 <button onClick={handleReset} className="flex items-center px-4 py-2 text-base font-medium rounded-lg transition-colors shadow-sm bg-slate-600 text-white hover:bg-slate-700">
                    <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
                </button>
             </div>
        </div>
    );
};