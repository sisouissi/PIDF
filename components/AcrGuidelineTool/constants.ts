import { ConnectiviteType, RiskFactor, Symptom } from './types';

export const connectiviteTypes: ConnectiviteType[] = [
  { value: 'RA', label: 'Polyarthrite Rhumatoïde (PR)', risk: 'modéré' },
  { value: 'SSc', label: 'Sclérodermie Systémique (SSc)', risk: 'élevé' },
  { value: 'IIM', label: 'Myopathies Inflammatoires Idiopathiques (MII)', risk: 'élevé' },
  { value: 'MCTD', label: 'Connectivite Mixte (MCTD)', risk: 'modéré' },
  { value: 'SjD', label: 'Syndrome de Sjögren (SjD)', risk: 'modéré' },
  { value: 'autre', label: 'Autre connectivite', risk: 'faible' },
];

export const riskFactors: RiskFactor[] = [
  { value: 'anti-scl70', label: 'Anti-Scl-70 (topoisomerase I) positif' },
  { value: 'anti-synthetase', label: 'Anticorps anti-synthetase (ex: anti-Jo1)' },
  { value: 'anti-mda5', label: 'Anticorps anti-MDA5 positif' },
  { value: 'age', label: 'Âge > 60 ans' },
  { value: 'sexeM', label: 'Sexe masculin' },
  { value: 'tabac', label: 'Tabagisme (actuel ou passé)' },
  { value: 'rgo', label: 'Reflux gastro-œsophagien (RGO)' },
  { value: 'exposition', label: 'Exposition professionnelle (poussières)' },
  { value: 'familiaux', label: 'Antécédents familiaux de fibrose pulmonaire' },
];

export const symptoms: Symptom[] = [
    { value: 'dyspnee', label: "Dyspnée d'effort progressive" },
    { value: 'toux', label: 'Toux sèche persistante' },
    { value: 'crepitants', label: 'Crépitants "velcro" à l\'auscultation' },
    { value: 'hippocratisme', label: 'Hippocratisme digital' },
    { value: 'desaturation', label: "Désaturation à l'effort" },
    { value: 'faiblesse', label: 'Faiblesse musculaire proximale' },
    { value: 'arthralgies', label: 'Arthralgies ou arthrite' },
    { value: 'raynaud', label: 'Phénomène de Raynaud' },
    { value: 'rash', label: 'Rash cutané (Gottron, héliotrope)' },
    { value: 'fatigue', label: 'Fatigue inhabituelle' },
    { value: 'douleur-thoracique', label: 'Douleur thoracique' },
];
