import { UIPClassifierSection } from '../../types';

export const SECTIONS: UIPClassifierSection[] = [
  {
    id: 1,
    title: "Présence de Rayons de Miel (Honeycombing)",
    questions: [
      {
        id: 1,
        name: 'honeycombing',
        text: 'Y a-t-il des rayons de miel (honeycombing) ?',
        options: [
          { label: 'Oui', value: 'yes', helper: 'Présence de kystes aériques sous-pleuraux, en couches, de taille similaire (3-10mm).' },
          { label: 'Non', value: 'no' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Caractéristiques des Réticulations et Bronchectasies",
    questions: [
        {
            id: 2,
            name: 'reticulation',
            text: 'Quel est le signe prédominant en l\'absence de rayons de miel ?',
            options: [
              { label: 'Réticulations', value: 'reticulation', helper: 'Fines opacités linéaires entrecroisées.' },
              { label: 'Autres signes', value: 'other', helper: 'Verre dépoli, consolidation, nodules...' },
            ],
        },
        {
            id: 3,
            name: 'traction_bronchiectasis',
            text: 'Y a-t-il des bronchectasies ou bronchiolectasies de traction ?',
            options: [
              { label: 'Oui', value: 'yes', helper: 'Dilatation bronchique ou bronchiolaire irrégulière due à la fibrose rétractile.' },
              { label: 'Non', value: 'no' },
            ],
        },
    ]
  },
  {
    id: 3,
    title: "Distribution des Lésions",
    questions: [
      {
        id: 4,
        name: 'distribution',
        text: 'Quelle est la distribution des anomalies fibrosantes ?',
        options: [
          { label: 'Typique (sous-pleurale et basale)', value: 'typical' },
          { label: 'Atypique (péri-bronchovasculaire, supérieure, diffuse)', value: 'atypical' },
        ],
      },
    ],
  },
    {
    id: 4,
    title: "Signes en Faveur d'un Diagnostic Alternatif",
    questions: [
      {
        id: 5,
        name: 'alternative_signs',
        text: 'Existe-t-il des signes fortement en faveur d\'un autre diagnostic ?',
        options: [
          { label: 'Oui', value: 'yes', helper: 'Verre dépoli prédominant, kystes multiples, nodules, piégeage aérique multi-lobaire...' },
          { label: 'Non', value: 'no' },
        ],
      },
    ],
  },
];
export const TOTAL_QUESTIONS = SECTIONS.flatMap(s => s.questions).length;