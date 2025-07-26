import React, { useState, useMemo } from 'react';
import { PHS_SCORE_VARIABLES, getPHSScoreResult } from '../data/phs_diagnostic_data';
import type { PHSScoreAnswers, PHSScoreOptionValue, PHSScoreVariable } from '../types';
import { RotateCcw, CheckCircle, AlertTriangle, XCircle } from './icons';

const VariableSelector: React.FC<{
    variable: PHSScoreVariable;
    selectedValue: PHSScoreOptionValue;
    onChange: (variableId: PHSScoreVariable['id'], value: PHSScoreOptionValue) => void;
}> = ({ variable, selectedValue, onChange }) => (
    <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <label className="text-base font-semibold text-slate-800 block mb-3">{variable.label}</label>
        <div className="space-y-2">
            {variable.options.map(option => (
                <label
                    key={option.value}
                    className={`flex items-center p-3 border rounded-md cursor-pointer transition-all duration-200 ${
                        selectedValue === option.value
                            ? 'bg-blue-100 border-blue-500 shadow'
                            : 'bg-slate-50 hover:bg-slate-100'
                    }`}
                >
                    <input
                        type="radio"
                        name={variable.id}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(variable.id, option.value)}
                        className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium text-slate-800">{option.label}</span>
                    <span className="ml-auto text-sm font-bold text-blue-600">({option.points} pts)</span>
                </label>
            ))}
        </div>
    </div>
);

export const PHSDiagnosticTool: React.FC = () => {
    const [answers, setAnswers] = useState<PHSScoreAnswers>({
        exposure: 'identified',
        hrct: 'typical',
        bal: 'yes',
    });

    const handleAnswerChange = (variableId: PHSScoreVariable['id'], value: PHSScoreOptionValue) => {
        setAnswers(prev => ({ ...prev, [variableId]: value }));
    };

    const totalScore = useMemo(() => {
        const exposurePoints = PHS_SCORE_VARIABLES.find(v => v.id === 'exposure')?.options.find(o => o.value === answers.exposure)?.points || 0;
        const hrctPoints = PHS_SCORE_VARIABLES.find(v => v.id === 'hrct')?.options.find(o => o.value === answers.hrct)?.points || 0;
        const balPoints = PHS_SCORE_VARIABLES.find(v => v.id === 'bal')?.options.find(o => o.value === answers.bal)?.points || 0;
        return exposurePoints + hrctPoints + balPoints;
    }, [answers]);

    const result = useMemo(() => getPHSScoreResult(totalScore), [totalScore]);

    const handleReset = () => {
        setAnswers({ exposure: 'identified', hrct: 'typical', bal: 'yes' });
    };

    const ResultDisplay: React.FC = () => {
        const colorClasses = {
            green: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800', icon: CheckCircle },
            yellow: { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800', icon: AlertTriangle },
            red: { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800', icon: XCircle },
        };
        const { bg, border, text, icon: Icon } = colorClasses[result.color];
        
        return (
            <div className={`p-5 rounded-lg border-l-4 ${bg} ${border}`}>
                <h4 className={`font-bold text-lg mb-2 flex items-center ${text}`}>
                    <Icon className="w-6 h-6 mr-3" />
                    {result.evaluation} (Score : {totalScore})
                </h4>
                <p className={`text-sm ${text.replace('-800', '-700')}`}>{result.recommendation}</p>
            </div>
        );
    };

    return (
        <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 text-center">Calculateur de Score Diagnostique PHS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PHS_SCORE_VARIABLES.map(variable => (
                    <VariableSelector
                        key={variable.id}
                        variable={variable}
                        selectedValue={answers[variable.id]}
                        onChange={handleAnswerChange}
                    />
                ))}
            </div>

            <div className="pt-6 border-t border-slate-300">
                <h4 className="font-semibold text-xl text-slate-800 mb-4 text-center">Évaluation Finale</h4>
                <ResultDisplay />
            </div>

             <div className="flex justify-center mt-4">
                <button 
                    onClick={handleReset}
                    className="flex items-center px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-colors"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Réinitialiser
                </button>
            </div>
        </div>
    );
};
