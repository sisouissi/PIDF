import { PHSScoreVariable, PHSScoreResult } from '../types';

export const PHS_SCORE_VARIABLES: PHSScoreVariable[] = [
    {
        id: 'exposure',
        label: '1. Exposition à un antigène',
        options: [
            { label: 'Identifiée', value: 'identified', points: 1 },
            { label: 'Indéterminée', value: 'intermediate', points: 0.5 },
            { label: 'Non identifiée', value: 'unidentified', points: 0 },
        ],
    },
    {
        id: 'hrct',
        label: '2. Tomodensitométrie (TDM-HR)',
        options: [
            { label: 'Typique pour PHS', value: 'typical', points: 1 },
            { label: 'Compatible avec PHS', value: 'compatible', points: 0.5 },
            { label: 'Indéterminée pour PHS', value: 'indeterminate', points: 0 },
        ],
    },
    {
        id: 'bal',
        label: '3. Lavage Broncho-Alvéolaire (LBA)',
        options: [
            { label: 'Lymphocytose présente', value: 'yes', points: 1 },
            { label: 'Lymphocytose absente', value: 'no', points: 0 },
        ],
    },
];

export const getPHSScoreResult = (score: number): PHSScoreResult => {
    if (score >= 2) {
        return {
            evaluation: 'Haute confiance pour une PHS',
            recommendation: 'Le diagnostic de PHS est probable. Confirmer en discussion multidisciplinaire (DMD).',
            color: 'green',
        };
    }
    if (score >= 1) {
        return {
            evaluation: 'Faible confiance pour une PHS',
            recommendation: 'Le diagnostic de PHS est possible mais incertain. Une biopsie pulmonaire est à discuter en DMD pour affiner le diagnostic.',
            color: 'yellow',
        };
    }
    return {
        evaluation: 'PHS peu probable',
        recommendation: "Le diagnostic de PHS est peu probable. Envisager d'autres diagnostics. Une biopsie peut être discutée si l'incertitude persiste.",
        color: 'red',
    };
};
