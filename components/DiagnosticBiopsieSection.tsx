
import React from 'react';
import { Microscope, CheckCircle, AlertTriangle, FileText, Activity, Info } from './icons';
import { Accordion } from './Accordion';

const ComparisonRow = ({ feature, slb, tblc }: { feature: string, slb: string, tblc: string }) => (
    <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-200 last:border-b-0 text-base">
        <div className="font-semibold text-slate-700">{feature}</div>
        <div className="text-slate-600">{slb}</div>
        <div className="text-slate-600">{tblc}</div>
    </div>
);

export const DiagnosticBiopsieSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Microscope className="w-7 h-7 mr-3 text-blue-500" />
        Biopsie Pulmonaire
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Quand et comment obtenir une confirmation histologique dans le diagnostic de la Fibrose Pulmonaire Idiopathique.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            La biopsie pulmonaire représente une étape diagnostique décisive mais invasive. Elle n'est pas nécessaire pour tous les patients et sa pertinence doit être évaluée au cas par cas. L'objectif est de confirmer histologiquement le pattern de Pneumopathie Interstitielle Commune (PIC/UIP) lorsque les examens non invasifs ne sont pas concluants, et d'exclure formellement d'autres diagnostics traitables différemment.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Quand discuter la biopsie ?</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>La discussion est <strong>essentielle</strong> en cas de pattern TDM "Indéterminé" ou "en faveur d'un diagnostic alternatif".</li>
                    <li>Elle est <strong>inutile</strong> si le scanner montre un pattern d'UIP Certain ou Probable chez un patient au profil clinique typique.</li>
                    <li>Elle est <strong>contre-indiquée</strong> si les risques opératoires sont jugés trop élevés.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Indications de la Biopsie Pulmonaire" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">La biopsie pulmonaire n'est pas systématique. Elle est réservée aux situations où le diagnostic reste incertain après l'évaluation non invasive.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Indication principale :</strong> Patient avec une suspicion clinique de FPI mais un pattern TDM-HR <strong>Indéterminé</strong> ou en faveur d'un <strong>Diagnostic Alternatif</strong>.</li>
                    <li><strong>Objectif :</strong> Confirmer un pattern de Pneumopathie Interstitielle Commune (PIC/UIP) et/ou exclure d'autres diagnostics (ex: PHS fibrosante, sarcoïdose).</li>
                    <li><strong>Décision :</strong> Doit être prise lors d'une <strong>discussion multidisciplinaire (DMD)</strong>, en pesant le bénéfice diagnostique contre les risques opératoires pour le patient.</li>
                </ul>
                <div className="flex items-start bg-red-50 border-l-4 border-red-500 p-3 rounded-r-sm mt-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base text-red-800">
                        La biopsie est <strong>contre-indiquée</strong> si le patient est trop fragile (âge avancé, comorbidités sévères, hypertension pulmonaire sévère, insuffisance respiratoire hypoxémique sévère) ou si le scanner montre un pattern de PIC/UIP Certain ou Probable dans un contexte clinique typique.
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Techniques de Biopsie : Chirurgie vs. Cryobiopsie" icon={<Activity className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700 text-base">
                <p>Deux techniques principales sont disponibles, chacune avec ses avantages et inconvénients. Le choix dépend de l'expertise du centre et du profil du patient.</p>
                <div className="mt-4 border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 gap-2 bg-slate-100 p-2 font-bold text-slate-800 text-base">
                        <div>Caractéristique</div>
                        <div>Biopsie Pulmonaire Chirurgicale (BPC / SLB)</div>
                        <div>Cryobiopsie Transbronchique (CTB / TBLC)</div>
                    </div>
                    <div className="p-2">
                        <ComparisonRow feature="Technique" slb="Vidéothoracoscopie (VATS), anesthésie générale" tblc="Endoscopie bronchique, sédation profonde ou AG" />
                        <ComparisonRow feature="Taille des prélèvements" slb="Grande (plusieurs cm), gold standard pour l'analyse" tblc="Plus petite que la chirurgie mais plus grande que les biopsies à la pince" />
                        <ComparisonRow feature="Rendement diagnostique" slb="Très élevé (plus de 90%)" tblc="Bon (70-85%), mais dépend de l'expérience de l'opérateur" />
                        <ComparisonRow feature="Caractère invasif" slb="Élevé, nécessite un drainage thoracique" tblc="Moins invasif, procédure ambulatoire ou courte hospitalisation" />
                        <ComparisonRow feature="Risques principaux" slb="Mortalité (1-3%), exacerbation aiguë (risque plus élevé), fuite d'air prolongée" tblc="Pneumothorax (7-10%), saignement (souvent modéré)" />
                        <ComparisonRow feature="Recommandation" slb="Le gold standard historique" tblc="Alternative acceptable dans les centres experts (recommandation conditionnelle ATS/ERS 2022)" />
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Caractéristiques Histologiques (Pattern de PIC/UIP)" icon={<FileText className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">Le diagnostic histologique de PIC/UIP repose sur la combinaison de plusieurs critères. La clé est l'hétérogénéité spatiale et temporelle des lésions.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Hétérogénéité architecturale :</strong> Coexistence de zones de poumon quasi-normal, de fibrose dense et de zones de "rayons de miel" microscopiques.</li>
                    <li><strong>Distribution sous-pleurale :</strong> La fibrose prédomine nettement juste sous la plèvre et le long des septa interlobulaires.</li>
                    <li><strong>Foyers fibroblastiques (Fibroblast Foci) :</strong> Lésion élémentaire clé. Il s'agit d'amas de myofibroblastes actifs à l'interface entre le tissu sain et le tissu fibrosant, marquant la progression de la maladie.</li>
                    <li><strong>Remodelage en "rayon de miel" (Honeycombing) :</strong> Espaces kystiques fibrosants bordés par un épithélium bronchiolaire.</li>
                    <li><strong>Absence de signes en faveur d'un autre diagnostic :</strong> Pas de granulomes bien formés (sarcoïdose), pas d'inflammation cellulaire prédominante (PINS cellulaire), pas d'atteinte péribronchiolaire marquée (PHS).</li>
                </ul>
            </div>
        </Accordion>
    </div>
  </div>
);

export default DiagnosticBiopsieSection;
