import { Stethoscope, FlaskConical, Image } from '../components/icons';
import { IPAFDomain } from '../types';

export const IPAF_CLASSIFIER_DATA: IPAFDomain[] = [
    {
        id: 'clinical',
        title: 'Domaine Clinique',
        icon: Stethoscope,
        criteria: [
            { id: 'mechanic_hands', label: 'Mains de mécanicien (fissurations digitales)' },
            { id: 'ulceration', label: 'Ulcérations digitales' },
            { id: 'arthritis', label: 'Arthrite inflammatoire ou raideur matinale ≥60 min' },
            { id: 'telangiectasia', label: 'Télangiectasies palmares' },
            { id: 'raynaud', label: 'Phénomène de Raynaud' },
            { id: 'edema', label: 'Œdème digital inexpliqué' },
            { id: 'gottron', label: 'Signe de Gottron (rash sur les extenseurs des doigts)' },
        ],
    },
    {
        id: 'serological',
        title: 'Domaine Sérologique',
        icon: FlaskConical,
        criteria: [
            { id: 'ana_high', label: 'AAN ≥ 1:320 (diffus, moucheté, homogène)' },
            { id: 'ana_specific', label: 'AAN (tout titre, aspect nucléolé ou centromère)' },
            { id: 'rf_high', label: 'Facteur Rhumatoïde ≥ 2x LSN' },
            { id: 'anti_ccp', label: 'Anti-CCP' },
            { id: 'anti_dsdna', label: 'Anti-ADN double brin (dsDNA)' },
            { id: 'anti_ssa_ssb', label: 'Anti-Ro (SS-A) ou Anti-La (SS-B)' },
            { id: 'anti_rnp', label: 'Anti-RNP' },
            { id: 'anti_smith', label: 'Anti-Smith' },
            { id: 'anti_scl70', label: 'Anti-Scl-70 (topoisomerase)' },
            { id: 'anti_synthetase', label: 'Anti-synthétase (ex: Jo-1, PL-7, PL-12)' },
            { id: 'anti_pmscl', label: 'Anti-PM-Scl' },
            { id: 'anti_mda5', label: 'Anti-MDA-5' },
        ],
    },
    {
        id: 'morphological',
        title: 'Domaine Morphologique',
        icon: Image,
        criteria: [
            { id: 'pattern_nsip_op_lip', label: 'Pattern TDM ou histologique de PINS, PO, ou LIP' },
            { id: 'histology_specific', label: 'Histologie : agrégats lymphoïdes avec centres germinatifs' },
            { id: 'histology_infiltrate', label: 'Histologie : infiltration lymphoplasmocytaire diffuse' },
            { id: 'multicompartment_pleural', label: 'Atteinte multicompartiments : épanchement/épaississement pleural inexpliqué' },
            { id: 'multicompartment_pericardial', label: 'Atteinte multicompartiments : épanchement/épaississement péricardique inexpliqué' },
            { id: 'multicompartment_airways', label: 'Atteinte multicompartiments : maladie des voies aériennes intrinsèque inexpliquée' },
            { id: 'multicompartment_vascular', label: 'Atteinte multicompartiments : vasculopathie pulmonaire inexpliquée' },
        ],
    },
];
