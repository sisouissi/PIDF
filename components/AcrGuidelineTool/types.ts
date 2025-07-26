import React from 'react';

export type Step = 'patient-info' | 'recommendations';

export interface ConnectiviteType {
    value: string;
    label: string;
    risk: 'faible' | 'modéré' | 'élevé';
}

export interface RiskFactor {
    value: string;
    label: string;
}

export interface Symptom {
    value: string;
    label: string;
}

export interface PatientData {
    connectiviteType: string;
    hasPID: boolean;
    riskFactors: string[];
    currentSymptoms: string[];
}

export interface RiskLevelInfo {
    level: 'faible' | 'modéré' | 'élevé';
    color: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface Recommendation {
    test: string;
    recommendation: string;
    level: 'conditional-for' | 'conditional-against' | 'strong-against';
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    frequency?: string;
}
