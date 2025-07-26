
import React from 'react';
import { Activity, History, FlaskConical, Image, ClipboardList, AlertTriangle, Info } from './icons';
import { Accordion } from './Accordion';

const TDMCard = ({ title, characteristics, confidence, borderColorClass }: { title: string, characteristics: string[], confidence: string, borderColorClass: string }) => (
    <div className={`p-4 rounded-lg border-l-4 ${borderColorClass} bg-slate-50`}>
        <h4 className={`font-bold text-lg mb-2 ${borderColorClass.replace('border-', 'text-').replace('-500', '-800')}`}>{title}</h4>
        <ul className="list-disc list-inside space-y-1 text-base text-slate-700">
            {characteristics.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p className={`mt-3 text-base font-semibold ${borderColorClass.replace('border-', 'text-').replace('-500', '-700')}`}>Confiance pour un pattern de PIC/UIP : {confidence}</p>
    </div>
);

export const FPIEvaluationInitialeSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Activity className="w-7 h-7 mr-3 text-blue-500" />
        Evaluation initiale
      </h2>
       <p className="text-slate-600 mt-2 text-base">
        Démarche structurée pour l'évaluation initiale d'un patient suspect de Fibrose Pulmonaire Idiopathique (FPI).
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            L'évaluation initiale de la FPI est une étape cruciale qui repose sur une approche multidisciplinaire. L'objectif n'est pas seulement de suspecter la FPI, mais surtout d'éliminer avec rigueur toutes les autres causes possibles de pneumopathie interstitielle fibrosante. Une démarche méthodique est essentielle pour éviter les erreurs diagnostiques et orienter correctement la prise en charge.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Objectifs de l'Évaluation Initiale</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Écarter les diagnostics différentiels</strong> (connectivites, PHS, toxicités...).</li>
                    <li><strong>Évaluer la probabilité d'une FPI</strong> en se basant sur la clinique et la TDM-HR.</li>
                    <li><strong>Quantifier la sévérité</strong> de l'atteinte fonctionnelle respiratoire.</li>
                    <li>Déterminer la nécessité d'une <strong>confirmation histologique</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Anamnèse et Examen Clinique" icon={<History className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">La première étape est de confirmer la suspicion clinique de FPI et d'exclure les autres causes de PID fibrosantes.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Confirmer le tableau clinique :</strong> Dyspnée d'effort, toux sèche, âge supérieur à 60 ans, tabagisme, râles crépitants type "velcro".</li>
                    <li><strong>Éliminer les diagnostics différentiels :</strong>
                        <ul className="list-['-_'] list-inside pl-6 mt-1 space-y-1">
                            <li><strong>Expositions :</strong> Recherche minutieuse d'expositions professionnelles (amiante, silice) ou domestiques (oiseaux, moisissures) pour écarter une pneumoconiose ou une PHS fibrosante.</li>
                            <li><strong>Connectivites :</strong> Interrogatoire et examen clinique complets à la recherche de signes extra-pulmonaires (arthralgies, Raynaud, rash cutané, sécheresse oculaire/buccale...).</li>
                            <li><strong>Médicaments :</strong> Revue de tous les traitements passés et actuels connus pour leur toxicité pulmonaire.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Examens Biologiques" icon={<FlaskConical className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">Le bilan biologique vise principalement à rechercher une cause sous-jacente à la PID. Il n'existe pas de marqueur sanguin spécifique de la FPI.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Bilan standard :</strong> NFS, bilan métabolique complet, tests hépatiques.</li>
                    <li><strong>Bilan auto-immun de base :</strong> Anticorps antinucléaires (AAN), Facteur Rhumatoïde (FR), anticorps anti-peptides citrullinés (anti-CCP).</li>
                    <li><strong>Bilan étendu (si suspicion) :</strong> Anticorps spécifiques des myosites (anti-Jo1, etc.), Sclérodermie (anti-Scl70, etc.), ANCA.</li>
                    <li><strong>Précipitines :</strong> À discuter si une PHS est suspectée.</li>
                </ul>
                <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-sm mt-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base text-amber-800">Un bilan auto-immun faiblement positif (AAN, FR à bas titre) peut se voir chez les patients avec FPI sans signifier une connectivite. L'interprétation doit être prudente et intégrée au contexte clinique.</p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Explorations Fonctionnelles Respiratoires (EFR)" icon={<ClipboardList className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">Les EFR confirment la nature restrictive de l'atteinte et quantifient sa sévérité.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Profil typique :</strong> Syndrome restrictif avec une diminution de la Capacité Vitale Forcée (CVF) et de la Capacité Pulmonaire Totale (CPT).</li>
                    <li><strong>Rapport VEMS/CVF :</strong> Normal ou augmenté.</li>
                    <li><strong>Transfert du CO (DLCO) :</strong> Diminution précoce et souvent disproportionnée par rapport à la baisse des volumes. C'est un marqueur important de la sévérité et du pronostic.</li>
                    <li><strong>Test de marche de 6 minutes (TM6) :</strong> Évalue la tolérance à l'effort et recherche une désaturation en oxygène, un critère pronostique majeur.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Imagerie par Tomodensitométrie à Haute Résolution (TDM-HR)" icon={<Image className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">La TDM-HR est l'examen clé. L'analyse par un radiologue expérimenté permet de classer l'aspect de la fibrose en 4 patterns, qui déterminent la probabilité du diagnostic de FPI et la nécessité d'une biopsie.</p>
                <div className="space-y-4">
                    <TDMCard 
                        title="Pattern de PIC/UIP Certain"
                        characteristics={[
                            "Distribution sous-pleurale et basale prédominante.",
                            "Rayons de miel (honeycombing), avec ou sans bronchectasies de traction.",
                            "Présence de réticulations.",
                            "Absence d'aspects atypiques."
                        ]}
                        confidence="Très élevée (plus de 90%)"
                        borderColorClass="border-green-500"
                    />
                     <TDMCard 
                        title="Pattern de PIC/UIP Probable"
                        characteristics={[
                            "Distribution sous-pleurale et basale prédominante.",
                            "Réticulations fines à grossières.",
                            "Bronchectasies/bronchiolectasies de traction.",
                            "Absence de rayons de miel et d'aspects atypiques."
                        ]}
                        confidence="Élevée (70-89%)"
                        borderColorClass="border-yellow-500"
                    />
                     <TDMCard 
                        title="Pattern Indéterminé pour la PIC/UIP"
                        characteristics={[
                            "Fibrose de distribution variable (p.ex. diffuse ou péribronchovasculaire).",
                            "Présence de réticulations, mais sans les critères d'UIP certain/probable.",
                            "Peut présenter des aspects subtils suggérant une autre maladie, mais non concluants."
                        ]}
                        confidence="Basse (51-69%)"
                        borderColorClass="border-orange-500"
                    />
                     <TDMCard 
                        title="Pattern en faveur d'un Diagnostic Alternatif"
                        characteristics={[
                            "Kystes multiples, nodules diffus, verre dépoli prédominant, consolidations.",
                            "Distribution péri-lymphatique ou péri-bronchovasculaire marquée.",
                            "Piégeage aérique important (signe des 3 densités dans la PHS)."
                        ]}
                        confidence="Très basse (≤50%)"
                        borderColorClass="border-red-500"
                    />
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPIEvaluationInitialeSection;
