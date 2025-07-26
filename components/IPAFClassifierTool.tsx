import React, { useState, useMemo } from 'react';
import { IPAF_CLASSIFIER_DATA } from '../data/ipaf_classifier_data';
import type { IPAFDomain, IPAFAnswers, IPAFPrerequisites } from '../types';
import { CheckCircle, RotateCcw, XCircle } from './icons';
import { CheckboxCard } from './AcrGuidelineTool/components/CheckboxCard';

// Component for a single domain
const DomainSection: React.FC<{
    domain: IPAFDomain;
    selectedCriteria: string[];
    onToggleCriterion: (domainId: IPAFDomain['id'], criterionId: string) => void;
}> = ({ domain, selectedCriteria, onToggleCriterion }) => {
    const { icon: Icon, title, criteria, id: domainId } = domain;
    return (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-lg text-slate-800 mb-4 flex items-center">
                <Icon className="w-6 h-6 mr-3 text-blue-600" />
                {title}
            </h4>
            <div className="space-y-3">
                {criteria.map((criterion) => (
                    <CheckboxCard
                        key={criterion.id}
                        id={`ipaf-${criterion.id}`}
                        label={criterion.label}
                        checked={selectedCriteria.includes(criterion.id)}
                        onChange={() => onToggleCriterion(domainId, criterion.id)}
                    />
                ))}
            </div>
        </div>
    );
};

// Component for Prerequisites
const PrerequisitesSection: React.FC<{
    prerequisites: IPAFPrerequisites;
    setPrerequisites: React.Dispatch<React.SetStateAction<IPAFPrerequisites>>;
}> = ({ prerequisites, setPrerequisites }) => {

    const PrereqItem: React.FC<{
        id: keyof IPAFPrerequisites;
        label: string;
        value: boolean | null;
    }> = ({ id, label, value }) => (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-slate-50 border rounded-md gap-2">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            <div className="flex items-center space-x-2 flex-shrink-0">
                <button
                    type="button"
                    onClick={() => setPrerequisites(p => ({ ...p, [id]: true }))}
                    className={`px-3 py-1 text-xs rounded-md transition-colors ${value === true ? 'bg-green-500 text-white shadow' : 'bg-slate-200 hover:bg-slate-300'}`}
                >
                    Oui
                </button>
                <button
                    type="button"
                    onClick={() => setPrerequisites(p => ({ ...p, [id]: false }))}
                    className={`px-3 py-1 text-xs rounded-md transition-colors ${value === false ? 'bg-red-500 text-white shadow' : 'bg-slate-200 hover:bg-slate-300'}`}
                >
                    Non
                </button>
            </div>
        </div>
    );

    return (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-lg text-slate-800 mb-4">Prérequis</h4>
            <div className="space-y-3">
                <PrereqItem id="hasPID" label="Le patient a-t-il une PID (prouvée par TDM/biopsie) ?" value={prerequisites.hasPID} />
                <PrereqItem id="hasDefinedCTD" label="Le patient remplit-il les critères d'une connectivite définie ?" value={prerequisites.hasDefinedCTD} />
                <PrereqItem id="hasOtherCause" label="Y a-t-il une autre cause identifiable pour la PID (ex: PHS, toxicité...) ?" value={prerequisites.hasOtherCause} />
            </div>
        </div>
    );
};

// Main Tool Component
export const IPAFClassifierTool: React.FC = () => {
    const initialAnswers: IPAFAnswers = { clinical: [], serological: [], morphological: [] };
    const initialPrerequisites: IPAFPrerequisites = { hasPID: null, hasDefinedCTD: null, hasOtherCause: null };
    
    const [answers, setAnswers] = useState<IPAFAnswers>(initialAnswers);
    const [prerequisites, setPrerequisites] = useState<IPAFPrerequisites>(initialPrerequisites);

    const handleToggleCriterion = (domainId: IPAFDomain['id'], criterionId: string) => {
        setAnswers(prev => {
            const currentDomainAnswers = prev[domainId];
            const newDomainAnswers = currentDomainAnswers.includes(criterionId)
                ? currentDomainAnswers.filter(id => id !== criterionId)
                : [...currentDomainAnswers, criterionId];
            return { ...prev, [domainId]: newDomainAnswers };
        });
    };
    
    const handleReset = () => {
        setAnswers(initialAnswers);
        setPrerequisites(initialPrerequisites);
    };

    const result = useMemo(() => {
        const { hasPID, hasDefinedCTD, hasOtherCause } = prerequisites;

        if (hasPID === null || hasDefinedCTD === null || hasOtherCause === null) {
            return { conclusion: 'pending', message: 'Veuillez répondre à toutes les questions sur les prérequis pour obtenir une conclusion.' };
        }
        if (hasPID === false) {
            return { conclusion: 'fail', message: "Le patient doit avoir une PID confirmée pour être éligible à la classification IPAF." };
        }
        if (hasDefinedCTD === true) {
            return { conclusion: 'fail', message: "Le patient a une connectivite définie, il s'agit d'une PID-connectivite, pas d'une IPAF." };
        }
        if (hasOtherCause === true) {
            return { conclusion: 'fail', message: "Le patient a une autre cause pour sa PID. La classification IPAF ne s'applique pas." };
        }

        const clinicalCount = answers.clinical.length > 0 ? 1 : 0;
        const serologicalCount = answers.serological.length > 0 ? 1 : 0;
        const morphologicalCount = answers.morphological.length > 0 ? 1 : 0;
        const totalDomainsWithValue = clinicalCount + serologicalCount + morphologicalCount;

        if (totalDomainsWithValue >= 2) {
            return { conclusion: 'success', message: 'Le patient remplit les critères de classification pour une Pneumopathie Interstitielle avec Caractéristiques Auto-immunes (IPAF).' };
        } else {
            return { conclusion: 'fail', message: `Le patient ne remplit pas les critères de classification IPAF. Il manque des critères dans au moins ${2 - totalDomainsWithValue} domaine(s) pour atteindre le seuil requis.` };
        }
    }, [answers, prerequisites]);
    
    const ResultDisplay: React.FC = () => {
        if (result.conclusion === 'pending') {
             return (
                 <div className="p-4 bg-slate-100 text-slate-600 rounded-lg border text-center text-sm font-medium">
                    {result.message}
                 </div>
             );
        }
        
        const isSuccess = result.conclusion === 'success';
        const Icon = isSuccess ? CheckCircle : XCircle;
        const colorClass = isSuccess ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800';
        const title = isSuccess ? 'Critères IPAF REMPLIS' : 'Critères IPAF NON REMPLIS';

        return (
            <div className={`p-5 rounded-lg border-l-4 ${colorClass}`}>
                <h4 className="font-bold text-lg mb-2 flex items-center">
                    <Icon className="w-6 h-6 mr-3" />
                    {title}
                </h4>
                <p className="text-sm">{result.message}</p>
            </div>
        );
    };

    return (
        <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Outil de classification IPAF</h3>
            
            <PrerequisitesSection prerequisites={prerequisites} setPrerequisites={setPrerequisites} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {IPAF_CLASSIFIER_DATA.map(domain => (
                    <DomainSection
                        key={domain.id}
                        domain={domain}
                        selectedCriteria={answers[domain.id]}
                        onToggleCriterion={handleToggleCriterion}
                    />
                ))}
            </div>

            <div className="pt-6 border-t border-slate-300">
                <h4 className="font-semibold text-xl text-slate-800 mb-4 text-center">Conclusion</h4>
                <ResultDisplay />
            </div>

            <div className="flex justify-center mt-6">
                <button 
                    onClick={handleReset}
                    className="flex items-center px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-colors"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Réinitialiser l'outil
                </button>
            </div>
        </div>
    );
};
