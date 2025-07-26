type RecommendationDetails = {
    title: string;
    recommended?: string;
    options?: string[];
    against?: string[];
    strong_against?: string;
    note?: string;
};

type SARDType = 'SSc' | 'RA' | 'MII' | 'SjD' | 'MCTD' | 'Autre';
type TreatmentContext = 'firstLine' | 'progression' | 'rp-ild';

export const SARD_LABELS: Record<string, string> = {
    SSc: 'Sclérodermie Systémique (SSc)',
    RA: 'Polyarthrite Rhumatoïde (PR)',
    MII: 'Myopathies Inflammatoires (MII)',
    SjD: "Syndrome de Sjögren (SjD)",
    MCTD: 'Connectivite Mixte (MCTD)',
    Autre: 'Autre SARD-PID'
};

export const TREATMENT_DATA: Record<TreatmentContext, Record<SARDType, RecommendationDetails>> = {
    firstLine: {
        SSc: {
            title: "Traitement de 1ère ligne pour la SSc-PID",
            options: ["Mycophénolate (MMF)", "Tocilizumab", "Rituximab", "Nintedanib"],
            strong_against: "Glucocorticoïdes (risque de crise rénale)",
            note: "Le MMF est souvent préféré. Le Nintedanib est une option, surtout si le pattern est fibrotique."
        },
        RA: {
            title: "Traitement de 1ère ligne pour la PR-PID",
            options: ["Mycophénolate (MMF)", "Azathioprine", "Rituximab"],
            against: ["Léflunomide, Méthotrexate, anti-TNF", "Pirfénidone"],
            note: "Le consensus n'a pas été atteint pour recommander le Nintedanib en 1ère ligne."
        },
        MII: {
            title: "Traitement de 1ère ligne pour la PID des MII",
            options: ["Mycophénolate (MMF)", "Azathioprine", "Rituximab", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Nintedanib"],
        },
        SjD: {
            title: "Traitement de 1ère ligne pour la PID du Sjögren",
            options: ["Mycophénolate (MMF)", "Azathioprine", "Rituximab", "Glucocorticoïdes"],
             against: ["Nintedanib"],
        },
        MCTD: {
            title: "Traitement de 1ère ligne pour la PID de la Connectivite Mixte",
            options: ["Mycophénolate (MMF)", "Azathioprine", "Rituximab", "Tocilizumab", "Glucocorticoïdes"],
            against: ["Nintedanib"],
        },
        Autre: {
            title: "Traitement de 1ère ligne pour les autres SARD-PID",
            recommended: "Glucocorticoïdes",
            options: ["Mycophénolate (MMF)", "Azathioprine", "Rituximab", "Cyclophosphamide"],
            against: ["Léflunomide, Méthotrexate, anti-TNF", "Inhibiteurs de JAK (sauf MII)", "Pirfénidone"],
        }
    },
    progression: {
        SSc: {
            title: "Progression de la SSc-PID sous traitement",
            options: ["Mycophénolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Tocilizumab"],
            strong_against: "Glucocorticoïdes au long cours",
            note: "Un switch ou un ajout de traitement est recommandé. Une orientation en transplantation doit être discutée."
        },
        RA: {
            title: "Progression de la PR-PID sous traitement",
            options: ["Mycophénolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Tocilizumab", "Pirfénidone (ajout)"],
            against: ["Glucocorticoïdes au long cours"],
        },
        MII: {
            title: "Progression de la PID des MII sous traitement",
            options: ["Mycophénolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)", "IVIG"],
            against: ["Glucocorticoïdes au long cours"],
        },
        SjD: {
            title: "Progression de la PID du Sjögren sous traitement",
            options: ["Mycophénolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib"],
            against: ["Glucocorticoïdes au long cours", "Tocilizumab"],
        },
        MCTD: {
            title: "Progression de la PID de la MCTD sous traitement",
            options: ["Mycophénolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Tocilizumab", "IVIG"],
            against: ["Glucocorticoïdes au long cours"],
        },
        Autre: {
            title: "Progression des autres SARD-PID sous traitement",
            options: ["Mycophénolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib"],
            against: ["Glucocorticoïdes au long cours", "Pirfénidone (ajout)", "Tocilizumab (sauf SSc, MCTD, RA)"],
        }
    },
    'rp-ild': {
        SSc: {
            title: "PID Rapidement Progressive (RP-ILD) dans la SSc",
            recommended: "Traitement combiné (double ou triple thérapie)",
            options: ["Pulse IV de Méthylprednisolone (avec prudence)", "Rituximab", "Cyclophosphamide", "IVIG", "Mycophénolate", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Méthotrexate, Léflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfénidone"],
            note: "L'usage des corticoïdes est très controversé (risque de crise rénale). Une discussion en centre expert est indispensable."
        },
        RA: {
             title: "PID Rapidement Progressive (RP-ILD) dans la PR",
            recommended: "Pulse IV de Méthylprednisolone",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophénolate", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Méthotrexate, Léflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfénidone"],
        },
        MII: {
             title: "PID Rapidement Progressive (RP-ILD) dans les MII",
            recommended: "Pulse IV de Méthylprednisolone",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophénolate", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Méthotrexate, Léflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfénidone"],
             note: "La trithérapie est recommandée si suspicion ou confirmation d'Ac anti-MDA5."
        },
        SjD: {
             title: "PID Rapidement Progressive (RP-ILD) dans le Sjögren",
            recommended: "Pulse IV de Méthylprednisolone",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophénolate", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Méthotrexate, Léflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfénidone"],
        },
        MCTD: {
             title: "PID Rapidement Progressive (RP-ILD) dans la MCTD",
            recommended: "Pulse IV de Méthylprednisolone",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophénolate", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Méthotrexate, Léflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfénidone"],
        },
        Autre: {
             title: "PID Rapidement Progressive (RP-ILD) dans les autres SARD",
            recommended: "Pulse IV de Méthylprednisolone",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophénolate", "Inhibiteurs de Calcineurine (CNI)", "Inhibiteurs de JAK (JAKi)"],
            against: ["Méthotrexate, Léflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfénidone"],
        }
    }
};