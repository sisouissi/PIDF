import React, { useState, useCallback } from 'react';
import { TREATMENT_DATA, SARD_LABELS } from '../data/acr_treatment_data';
import { Pill, CheckCircle, XCircle, AlertTriangle } from './icons';
import { generateTreatmentSummary } from '../services/gemini';
import { AISummary } from './AISummary';

// --- Types (local to this tool) ---
type SARDType = 'SSc' | 'RA' | 'MII' | 'SjD' | 'MCTD' | 'Autre';
type TreatmentContext = 'firstLine' | 'progression' | 'rp-ild';

// --- Helper Components ---
const RecommendationItem: React.FC<{ item: string, level: 'for' | 'against' | 'strong-against' }> = ({ item, level }) => {
    const classes = {
        'for': 'text-green-700',
        'against': 'text-orange-700',
        'strong-against': 'text-red-700'
    };
    const Icon = {
        'for': CheckCircle,
        'against': XCircle,
        'strong-against': AlertTriangle
    }[level];
    return (
        <li className={`flex items-start ${classes[level]}`}>
            <Icon className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
        </li>
    );
};

// --- Main Component ---
export const AcrTreatmentTool: React.FC = () => {
    const [sard, setSard] = useState<SARDType>('SSc');
    const [context, setContext] = useState<TreatmentContext>('firstLine');
    const [aiSummary, setAiSummary] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);

    const recommendations = TREATMENT_DATA[context][sard] || TREATMENT_DATA[context]['Autre'];
    
    const handleGenerateSummary = useCallback(async () => {
        setIsGenerating(true);
        setAiSummary('');
        setSummaryError(null);
        try {
            const summary = await generateTreatmentSummary(sard, context);
            setAiSummary(summary);
        } catch (e) {
            setSummaryError(e instanceof Error ? e.message : "Une erreur inconnue est survenue.");
        } finally {
            setIsGenerating(false);
        }
    }, [sard, context]);

    return (
        <div className="bg-slate-50 p-4 rounded-lg border text-slate-800">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Outil d'Aide au Traitement</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label htmlFor="sard-treatment-select" className="block text-sm font-medium text-slate-700 mb-1">1. Connectivite :</label>
                    <select id="sard-treatment-select" value={sard} onChange={e => setSard(e.target.value as SARDType)} className="w-full p-2 border-gray-300 rounded-md shadow-sm">
                        {Object.keys(TREATMENT_DATA.firstLine).map(key => <option key={key} value={key}>{SARD_LABELS[key] || key}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="context-select" className="block text-sm font-medium text-slate-700 mb-1">2. Contexte Clinique :</label>
                    <select id="context-select" value={context} onChange={e => setContext(e.target.value as TreatmentContext)} className="w-full p-2 border-gray-300 rounded-md shadow-sm">
                        <option value="firstLine">Traitement de 1ère ligne</option>
                        <option value="progression">Progression sous traitement</option>
                        <option value="rp-ild">PID Rapidement Progressive (RP-ILD)</option>
                    </select>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 animate-fade-in-fast">
                <h4 className="font-bold text-slate-800 mb-3">{recommendations.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {recommendations.recommended && (
                        <div className="space-y-2">
                            <h5 className="font-semibold text-green-800">Recommandé</h5>
                            <ul className="space-y-1 text-sm"><RecommendationItem item={recommendations.recommended} level="for" /></ul>
                        </div>
                    )}
                     {recommendations.options && (
                        <div className="space-y-2">
                            <h5 className="font-semibold text-green-800">Options Conditionnelles</h5>
                            <ul className="space-y-1 text-sm">
                                {recommendations.options.map((opt, i) => <RecommendationItem key={i} item={opt} level="for" />)}
                            </ul>
                        </div>
                    )}
                    {recommendations.against && (
                        <div className="space-y-2">
                            <h5 className="font-semibold text-orange-800">Déconseillé Conditionnellement</h5>
                             <ul className="space-y-1 text-sm">
                                {recommendations.against.map((opt, i) => <RecommendationItem key={i} item={opt} level="against" />)}
                            </ul>
                        </div>
                    )}
                    {recommendations.strong_against && (
                         <div className="space-y-2">
                            <h5 className="font-semibold text-red-800">Fortement Déconseillé</h5>
                            <ul className="space-y-1 text-sm"><RecommendationItem item={recommendations.strong_against} level="strong-against" /></ul>
                        </div>
                    )}
                </div>
                {recommendations.note && <p className="text-xs italic text-slate-500 mt-4 pt-2 border-t">{recommendations.note}</p>}
            </div>

            <div className="mt-6">
                <button
                    onClick={handleGenerateSummary}
                    disabled={isGenerating}
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400"
                >
                    Générer une Synthèse IA
                </button>
                <AISummary summary={aiSummary} isLoading={isGenerating} error={summaryError} />
            </div>
        </div>
    );
};