import React from 'react';
import type { PatientData } from '../types';
import { connectiviteTypes, riskFactors, symptoms } from '../constants';
import { Card } from './Card';
import { CheckboxCard } from './CheckboxCard';
import { Switch } from './Switch';

interface PatientInfoFormProps {
    patientData: PatientData;
    setPatientData: React.Dispatch<React.SetStateAction<PatientData>>;
    onSubmit: () => void;
}

export const PatientInfoForm: React.FC<PatientInfoFormProps> = ({ patientData, setPatientData, onSubmit }) => {
    const handleCheckboxChange = (field: 'riskFactors' | 'currentSymptoms', value: string) => {
        setPatientData(prev => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value],
        }));
    };
    
    const isFormComplete = patientData.connectiviteType !== '';

    const handleHasPIDChange = (checked: boolean) => {
        setPatientData(prev => ({
            ...prev,
            hasPID: checked,
        }));
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); if (isFormComplete) onSubmit(); }} className="space-y-8 animate-fade-in-fast">
            
            <Card title="Statut du Patient">
                <Switch
                    id="hasPID"
                    label="Le patient a-t-il déjà un diagnostic de PID ?"
                    checked={patientData.hasPID}
                    onChange={handleHasPIDChange}
                />
            </Card>

            <Card title="1. Type de connectivite" variant="highlight">
                 <select
                    id="connectiviteType"
                    value={patientData.connectiviteType}
                    onChange={(e) => setPatientData(prev => ({ ...prev, connectiviteType: e.target.value }))}
                    required
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
                >
                    <option value="" disabled>Sélectionner un type...</option>
                    {connectiviteTypes.map(ct => <option key={ct.value} value={ct.value}>{ct.label}</option>)}
                </select>
            </Card>

            <Card title="2. Facteurs de risque de PID">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {riskFactors.map(factor => (
                        <CheckboxCard
                            key={factor.value}
                            id={`risk-${factor.value}`}
                            label={factor.label}
                            checked={patientData.riskFactors.includes(factor.value)}
                            onChange={() => handleCheckboxChange('riskFactors', factor.value)}
                        />
                    ))}
                </div>
            </Card>

            <Card title="3. Symptômes/Signes de PID">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {symptoms.map(symptom => (
                        <CheckboxCard
                            key={symptom.value}
                            id={`symptom-${symptom.value}`}
                            label={symptom.label}
                            checked={patientData.currentSymptoms.includes(symptom.value)}
                            onChange={() => handleCheckboxChange('currentSymptoms', symptom.value)}
                        />
                    ))}
                </div>
            </Card>

            <div className="text-center pt-4">
                <button
                    type="submit"
                    disabled={!isFormComplete}
                    className="inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                >
                    Générer les Recommandations
                </button>
            </div>
        </form>
    );
};