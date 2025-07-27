import React from 'react';

export type SectionId = 'welcome' | 'definition' | 'diagnostic-clinique' | 'diagnostic-fonctionnel' | 'fpi-pathogenie-clinique' | 'diagnostic-biopsie' | 'fpi' | 'autres-pid' | 'therapeutique' | 'suivi-pronostic' | 'diagnostic-tdm-algorithme' | 'fpi-traitement' | 'fpi-suivi-pronostic' | 'fpi-exacerbation-aigue' | 'pid-connectivites' | 'fpp' | 'pins-fibrosantes' | 'ipaf' | 'phs' | 'ila';

export interface MenuItem {
  id: SectionId;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: MenuItem[];
}

// Types for the interactive UIP Classifier tool
export interface UIPClassifierOption {
  label: string;
  value: string;
  helper?: string;
}

export interface UIPClassifierQuestion {
  id: number;
  name: string;
  text: string;
  options: UIPClassifierOption[];
}

export interface UIPClassifierSection {
  id: number;
  title: string;
  questions: UIPClassifierQuestion[];
}

export interface UIPClassifierAnswers {
  [key: string]: string;
}

export interface UIPClassifierDiagnosis {
  title: string;
  description: string;
  recommendations: string[];
}

// Types for IPAF Classifier Tool
export interface IPAFCriterion {
    id: string;
    label: string;
}

export interface IPAFDomain {
    id: 'clinical' | 'serological' | 'morphological';
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    criteria: IPAFCriterion[];
}

export interface IPAFAnswers {
    clinical: string[];
    serological: string[];
    morphological: string[];
}

export interface IPAFPrerequisites {
    hasPID: boolean | null;
    hasDefinedCTD: boolean | null;
    hasOtherCause: boolean | null;
}

// Types for PHS Diagnostic Tool (Score-based)
export type PHSScoreOptionValue = 'identified' | 'intermediate' | 'unidentified' | 'typical' | 'compatible' | 'indeterminate' | 'yes' | 'no';

export interface PHSScoreOption {
    label: string;
    value: PHSScoreOptionValue;
    points: number;
}

export interface PHSScoreVariable {
    id: 'exposure' | 'hrct' | 'bal';
    label: string;
    options: PHSScoreOption[];
}

export interface PHSScoreAnswers {
    exposure: PHSScoreOptionValue;
    hrct: PHSScoreOptionValue;
    bal: PHSScoreOptionValue;
}

export interface PHSScoreResult {
    evaluation: string;
    recommendation: string;
    color: 'green' | 'yellow' | 'red';
}

// Types for Therapeutic Algorithm Tool
export interface TreatmentStep {
  title: string;
  treatments: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'teal';
  note?: string;
}

export interface DiseasePathway {
  id: string;
  label: string;
  pathway: TreatmentStep[];
}

export type TherapeuticAlgorithmData = DiseasePathway[];

// Types for ILA Algorithm Tool
export interface ILAAlgorithmAnswers {
    context: 'symptoms' | 'lcs' | 'incidental' | '';
    patientInfo: string[];
    extent: '>10' | '<=10' | '';
    fibrotic: 'yes' | 'no' | '';
    distribution: 'basal_peripheral' | 'other' | '';
}
