import React from 'react';
import { Pill, Shield, Activity, Heart, HandHeart, Info, Users, CheckCircle, AlertTriangle } from './icons';
import { Accordion } from './Accordion';
import { TherapeuticAlgorithmTool } from './TherapeuticAlgorithmTool';

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; color: 'blue' | 'green' | 'purple' | 'orange'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]} h-full shadow-sm`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const TherapeutiqueSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Pill className="w-7 h-7 mr-3 text-blue-500" />
        Prise en Charge Thérapeutique des PID Fibrosantes
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Une approche individualisée et multidisciplinaire pour ralentir la progression, gérer les symptômes et améliorer la qualité de vie.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            La prise en charge des PID fibrosantes a considérablement évolué. L'objectif n'est plus seulement de traiter l'inflammation mais de cibler les mécanismes de la fibrose, surtout en cas de progression. La stratégie thérapeutique repose sur une évaluation précise du diagnostic, du phénotype évolutif, et des comorbidités du patient, dans le cadre d'une prise de décision partagée.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h3 className="text-base font-semibold text-blue-800 mb-2 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Principes Fondamentaux de la Prise en Charge
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li><strong>Approche multidisciplinaire (DMD) :</strong> Essentielle pour le diagnostic, le traitement et le suivi.</li>
                <li><strong>Traiter la cause sous-jacente :</strong> Priorité au traitement de la connectivite, à l'éviction de l'antigène en cas de PHS, etc.</li>
                <li><strong>Identifier et traiter le phénotype progressif fibrosant (PPF) :</strong> Cible principale des thérapies antifibrosantes.</li>
                <li><strong>Gestion holistique :</strong> Inclure la prise en charge non-pharmacologique, les comorbidités et les soins de support.</li>
            </ul>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Arsenal Thérapeutique Pharmacologique" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Traitements Immunomodulateurs" icon={<Shield className="w-5 h-5"/>} color="blue">
                        <p>Visent à contrôler l'inflammation, surtout dans les PID associées aux connectivites, la sarcoïdose et certaines PHS.</p>
                        <ul className="list-disc list-inside text-sm mt-2">
                            <li><strong>Glucocorticoïdes :</strong> Souvent en première ligne, mais leur utilisation au long cours doit être limitée.</li>
                            <li><strong>Immunosuppresseurs :</strong> Mycophénolate (MMF), Azathioprine, Rituximab. Leur choix dépend de la maladie sous-jacente.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Traitements Antifibrosants" icon={<Activity className="w-5 h-5"/>} color="green">
                        <p>Visent à ralentir la progression de la fibrose. Indiqués dans la FPI d'emblée, et dans les autres PID en cas de phénotype progressif (PPF).</p>
                         <ul className="list-disc list-inside text-sm mt-2">
                            <li><strong>Nintedanib :</strong> Approuvé pour la FPI, la PID-SSc et le PPF. Ralentit le déclin de la CVF.</li>
                            <li><strong>Pirfénidone :</strong> Approuvé pour la FPI. Son efficacité dans le PPF est en cours d'évaluation (étude RELIEF).</li>
                        </ul>
                    </InfoCard>
                </div>
                 <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded-r-lg">
                    <p className="text-sm text-amber-800">
                       <strong className="font-semibold flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>Attention :</strong> L'association de Prednisone, Azathioprine et N-acetylcysteine est <strong>délétère et contre-indiquée</strong> dans la FPI (étude PANTHER-IPF).
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Prise en Charge Non-Pharmacologique et de Support" icon={<HandHeart className="w-5 h-5 text-white" />}>
            <div className="p-4 grid md:grid-cols-2 gap-4">
                 <InfoCard title="Oxygénothérapie" icon={<Activity className="w-5 h-5"/>} color="purple">
                    <p>Indiquée pour corriger l'hypoxémie de repos (SpO2 inférieure à 90%) ou d'effort. Améliore la qualité de vie et la tolérance à l'exercice.</p>
                </InfoCard>
                <InfoCard title="Réhabilitation Respiratoire" icon={<Heart className="w-5 h-5"/>} color="orange">
                    <p>Programme essentiel pour lutter contre le déconditionnement, réduire la dyspnée, améliorer la capacité d'exercice et la qualité de vie.</p>
                </InfoCard>
                <InfoCard title="Gestion des Comorbidités" icon={<Shield className="w-5 h-5"/>} color="blue">
                    <p>Le RGO, l'HTP, le SAOS, les maladies cardiovasculaires doivent être activement recherchés et traités.</p>
                </InfoCard>
                <InfoCard title="Soins Palliatifs et de Support" icon={<HandHeart className="w-5 h-5"/>} color="green">
                    <p>Introduction précoce pour la gestion des symptômes (dyspnée, toux), le soutien psychosocial et la discussion des directives anticipées.</p>
                </InfoCard>
            </div>
        </Accordion>
        
        <Accordion title="Algorithme Stratégique de Prise en Charge" icon={<Users className="w-5 h-5 text-white" />}>
            <div className="p-4 text-slate-700 text-base">
                <p className="mb-4">Cette approche intègre le diagnostic, le phénotype évolutif et les options thérapeutiques disponibles.</p>
                <div className="space-y-4">
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                        <h4 className="font-bold text-blue-800">1. Diagnostic Précis en DMD</h4>
                        <p className="text-sm mt-1">Établir le diagnostic le plus précis possible (FPI, PID-connectivite, PHS, etc.). Si impossible, retenir le diagnostic de "PID inclassable".</p>
                    </div>
                     <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                        <h4 className="font-bold text-purple-800">2. Traitement de la Cause</h4>
                        <p className="text-sm mt-1">Si une cause est identifiée (connectivite, PHS, médicament), le traitement de première ligne vise cette cause (immunosuppresseurs, éviction de l'antigène).</p>
                    </div>
                     <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                        <h4 className="font-bold text-green-800">3. Traitement Antifibrosant d'Emblée</h4>
                        <p className="text-sm mt-1">Pour les patients avec un diagnostic de <strong>FPI</strong>, un traitement antifibrosant (Nintedanib ou Pirfénidone) doit être initié dès le diagnostic, quelle que soit la sévérité.</p>
                    </div>
                     <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                        <h4 className="font-bold text-orange-800">4. Surveillance et Détection du Phénotype Progressif (PPF)</h4>
                        <p className="text-sm mt-1">Pour les PID <strong>non-FPI</strong>, une surveillance rapprochée (clinique, EFR, TDM) est cruciale. Si des critères de progression sont remplis malgré un traitement approprié, le patient est considéré comme ayant un PPF.</p>
                    </div>
                     <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                        <h4 className="font-bold text-red-800">5. Introduction d'un Traitement Antifibrosant dans le PPF</h4>
                        <p className="text-sm mt-1">Chez les patients avec un PPF, l'ajout du <strong>Nintedanib</strong> est recommandé pour ralentir le déclin fonctionnel. Ce traitement est souvent associé au traitement immunomodulateur.</p>
                    </div>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Lancer l'algorithme de prise en charge thérapeutique (NEJM 2020)" icon={<Users className="w-5 h-5 text-white" />} variant="danger">
            <div className="p-2 md:p-4">
                <TherapeuticAlgorithmTool />
            </div>
        </Accordion>
    </div>
  </div>
);

export default TherapeutiqueSection;