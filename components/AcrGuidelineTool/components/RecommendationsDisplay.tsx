import React from 'react';
import type { PatientData, RiskLevelInfo, Recommendation } from '../types';
import { AISummary } from './AISummary';
import { ArrowLeft, RotateCcw } from '../../icons';
import { Card } from './Card';

interface RecommendationsDisplayProps {
    patientData: PatientData;
    riskLevel: RiskLevelInfo;
    screeningRecs: Recommendation[];
    monitoringRecs: Recommendation[];
    onBack: () => void;
    onReset: () => void;
    onGenerateSummary: () => void;
    aiSummary: string;
    isGeneratingSummary: boolean;
    summaryError: string | null;
}

const RecommendationCard: React.FC<{ rec: Recommendation }> = ({ rec }) => {
    const levelColorClasses = {
        'conditional-for': 'border-green-500 bg-green-50 text-green-800',
        'conditional-against': 'border-orange-500 bg-orange-50 text-orange-800',
        'strong-against': 'border-red-500 bg-red-50 text-red-800',
    };
    const iconColorClasses = {
        'conditional-for': 'text-green-600',
        'conditional-against': 'text-orange-600',
        'strong-against': 'text-red-600',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${levelColorClasses[rec.level]} transition-all duration-200 hover:shadow-md`}>
            <div className="flex items-start">
                <rec.icon className={`w-6 h-6 mr-4 mt-1 flex-shrink-0 ${iconColorClasses[rec.level]}`} />
                <div>
                    <h4 className="font-semibold text-slate-800">{rec.test}</h4>
                    <p className={`text-sm font-semibold ${levelColorClasses[rec.level]}`}>{rec.recommendation}</p>
                    <p className="text-xs text-slate-500 mt-1">{rec.description}</p>
                    {rec.frequency && <p className="text-xs text-blue-700 font-bold mt-2 bg-blue-100 inline-block px-2 py-1 rounded">Fréquence : {rec.frequency}</p>}
                </div>
            </div>
        </div>
    );
};

export const RecommendationsDisplay: React.FC<RecommendationsDisplayProps> = (props) => {
    const {
        patientData, riskLevel, screeningRecs, monitoringRecs,
        onBack, onReset, onGenerateSummary,
        aiSummary, isGeneratingSummary, summaryError
    } = props;
    
    const title = patientData.hasPID ? "Recommandations de Suivi" : "Recommandations de Dépistage";
    
    return (
        <div className="space-y-10 animate-fade-in-fast">
            <div className="flex justify-between items-center">
                <button onClick={onBack} className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                </button>
                <button onClick={onReset} className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md transition-colors">
                    <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
                </button>
            </div>
            
            {!patientData.hasPID && (
              <Card title="Profil du Patient et Niveau de Risque">
                  <div className={`flex items-center p-3 rounded-lg border-2 ${riskLevel.color}`}>
                      <riskLevel.icon className="w-6 h-6 mr-3"/>
                      <span className="font-bold">Niveau de risque de développer une PID : {riskLevel.level.charAt(0).toUpperCase() + riskLevel.level.slice(1)}</span>
                  </div>
              </Card>
            )}

            <Card title={`${title} (ACR 2023)`}>
                <div className="space-y-4">
                    {(patientData.hasPID ? monitoringRecs : screeningRecs).map(rec => 
                        <RecommendationCard key={rec.test} rec={rec} />
                    )}
                </div>
            </Card>

            
            <div className="pt-6 border-t border-slate-200/80">
                 <div className="text-center mb-6">
                    <button
                        onClick={onGenerateSummary}
                        disabled={isGeneratingSummary}
                        className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                    >
                       Générer une Synthèse Clinique par IA
                    </button>
                </div>
                <Card>
                  <AISummary summary={aiSummary} isLoading={isGeneratingSummary} error={summaryError} />
                </Card>
            </div>
        </div>
    );
};