import React, { useState } from 'react';
import { THERAPEUTIC_ALGORITHM_DATA, NON_PHARMACOLOGIC_TREATMENT } from '../data/therapeutic_algorithm_data';
import { ChevronRight } from './icons';
import type { DiseasePathway, TreatmentStep } from '../types';

const TreatmentStepCard: React.FC<{ step: TreatmentStep }> = ({ step }) => {
    const { title, treatments, icon: Icon, color, note } = step;
    const colors = {
        blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-800' },
        purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-800' },
        green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800' },
        red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-800' },
        orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-800' },
        teal: { bg: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-800' }
    };

    return (
        <div className={`p-4 rounded-lg border-l-4 shadow-sm w-full max-w-md ${colors[color].bg} ${colors[color].border}`}>
            <h4 className={`font-semibold text-lg mb-3 flex items-center ${colors[color].text}`}>
                <Icon className="w-5 h-5 mr-3" />
                {title}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2 text-base">
                {treatments.map((treatment, index) => <li key={index}>{treatment}</li>)}
            </ul>
            {note && <p className="text-xs italic text-slate-500 mt-3 pt-2 border-t border-slate-200">{note}</p>}
        </div>
    );
};

export const TherapeuticAlgorithmTool: React.FC = () => {
    const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>(THERAPEUTIC_ALGORITHM_DATA[0].id);

    const selectedDisease = THERAPEUTIC_ALGORITHM_DATA.find(d => d.id === selectedDiseaseId) as DiseasePathway;

    return (
        <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 text-center">Algorithme de Prise en Charge Thérapeutique</h3>
            
            <div>
                <label htmlFor="disease-select" className="block text-sm font-medium text-slate-700 mb-2 text-center">
                    **1. Sélectionnez la pathologie pour voir le parcours de soin recommandé**
                </label>
                <select 
                    id="disease-select"
                    value={selectedDiseaseId}
                    onChange={(e) => setSelectedDiseaseId(e.target.value)}
                    className="w-full max-w-lg mx-auto block p-3 border-gray-300 rounded-md shadow-sm text-base focus:ring-blue-500 focus:border-blue-500"
                >
                    {THERAPEUTIC_ALGORITHM_DATA.map(disease => (
                        <option key={disease.id} value={disease.id}>{disease.label}</option>
                    ))}
                </select>
            </div>

            <div className="animate-fade-in-fast">
                <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">Parcours Thérapeutique pour : <span className="text-blue-600">{selectedDisease.label}</span></h4>
                <div className="flex flex-col items-center space-y-4">
                    {selectedDisease.pathway.map((step, index) => (
                        <React.Fragment key={index}>
                            <TreatmentStepCard step={step} />
                            {index < selectedDisease.pathway.length && (
                                <div className="text-slate-400 transform rotate-90">
                                    <ChevronRight className="w-8 h-8" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                     <TreatmentStepCard step={NON_PHARMACOLOGIC_TREATMENT} />
                </div>
            </div>
        </div>
    );
};
