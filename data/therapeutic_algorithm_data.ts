import React from 'react';
import { Shield, Pill, PlusCircle, HandHeart, Wind } from '../components/icons';
import { TherapeuticAlgorithmData, TreatmentStep } from '../types';

export const THERAPEUTIC_ALGORITHM_DATA: TherapeuticAlgorithmData = [
    {
        id: 'ipf',
        label: 'Fibrose Pulmonaire Idiopathique (FPI)',
        pathway: [
            {
                title: 'Traitement de Première Ligne',
                treatments: ['Agents antifibrotiques', 'Pirfénidone ou Nintedanib'],
                icon: Pill,
                color: 'red',
                note: 'Le traitement antifibrotique est recommandé dès le diagnostic.'
            },
        ]
    },
    {
        id: 'ssc-ild',
        label: 'PID associée à la Sclérodermie Systémique (SSc-ILD)',
        pathway: [
            {
                title: 'Immunomodulation de Première Ligne',
                treatments: ['MMF, CPM, TCL', '(Alternative : AZA, RTX)'],
                icon: Shield,
                color: 'blue',
            },
            {
                title: 'En Cas de Progression',
                treatments: ['Considérer les agents antifibrotiques', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'ra-ild',
        label: 'PID associée à la Polyarthrite Rhumatoïde (RA-ILD)',
        pathway: [
            {
                title: 'Immunomodulation de Première Ligne',
                treatments: ['Glucocorticoïdes', 'Puis : RTX, ABA, MMF'],
                icon: Shield,
                color: 'blue',
            },
            {
                title: 'En Cas de Progression',
                treatments: ['Considérer les agents antifibrotiques', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'sarcoidosis',
        label: 'Sarcoïdose Fibrosante',
        pathway: [
            {
                title: 'Immunomodulation de Première Ligne',
                treatments: ['Glucocorticoïdes', 'Puis : MTX', '(Alternative : AZA, IFX, ADA)'],
                icon: Shield,
                color: 'blue',
            },
             {
                title: 'En Cas de Progression',
                treatments: ['Considérer les agents antifibrotiques', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'phs',
        label: "Pneumopathie d'Hypersensibilité Chronique Fibrosante",
        pathway: [
            {
                title: "Étape 1 : Éviction de l'Antigène",
                treatments: ["Identification et éviction de l'agent causal"],
                icon: Wind,
                color: 'orange'
            },
            {
                title: 'Immunomodulation',
                treatments: ['Glucocorticoïdes', 'Puis : MMF', '(Alternative : AZA)'],
                icon: Shield,
                color: 'blue',
            },
             {
                title: 'En Cas de Progression',
                treatments: ['Considérer les agents antifibrotiques', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'insip',
        label: 'Pneumopathie Interstitielle Non Spécifique (PINS) Idiopathique',
        pathway: [
            {
                title: 'Immunomodulation',
                treatments: ['Glucocorticoïdes', 'Puis : MMF, AZA, ou autres immunosuppresseurs'],
                icon: Shield,
                color: 'purple',
            },
             {
                title: 'En Cas de Progression',
                treatments: ['Considérer les agents antifibrotiques', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'unclassifiable',
        label: 'PID Inclassable',
        pathway: [
            {
                title: 'Immunomodulation',
                treatments: ['Glucocorticoïdes', 'Puis : MMF, AZA, ou autres immunosuppresseurs'],
                icon: Shield,
                color: 'purple',
            },
             {
                title: 'En Cas de Progression',
                treatments: ['Considérer les agents antifibrotiques', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    }
];

export const NON_PHARMACOLOGIC_TREATMENT: TreatmentStep = {
    title: 'Prise en Charge Non-Pharmacologique (pour toutes les PID)',
    treatments: [
        'Oxygénothérapie supplémentaire',
        'Support psychosocial',
        'Arrêt du tabac',
        'Réhabilitation respiratoire',
        'Soins palliatifs',
        'Soins de fin de vie'
    ],
    icon: HandHeart,
    color: 'teal'
};
