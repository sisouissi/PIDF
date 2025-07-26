
import React from 'react';
import { TrendingUp, Info, CheckCircle, AlertTriangle, Stethoscope, Pill, Search, HandHeart, Activity, ChevronRight } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal';
}> = ({ title, children, icon, color }) => {
    const colors = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
        green: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-800' },
        orange: { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-800' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800' },
        red: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-800' },
        teal: { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-800' },
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color].border} ${colors[color].bg} shadow-sm h-full`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color].text}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const StepCard: React.FC<{
  stepNumber: string;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'orange';
}> = ({ stepNumber, title, children, icon, color }) => {
    const colors = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800', bgDark: 'bg-blue-500' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800', bgDark: 'bg-purple-500' },
        orange: { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-800', bgDark: 'bg-orange-500' },
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color].border} ${colors[color].bg} w-full shadow-sm`}>
            <div className="flex items-center mb-3">
                <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${colors[color].bgDark} text-white font-bold text-lg mr-4`}>
                    {stepNumber}
                </div>
                <h4 className={`font-semibold text-lg flex items-center ${colors[color].text}`}>
                    {icon}
                    <span className="ml-2">{title}</span>
                </h4>
            </div>
            <div className="pl-14 text-slate-700 space-y-2 text-base">
                {children}
            </div>
        </div>
    );
};


export const FPPSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <TrendingUp className="w-7 h-7 mr-3 text-blue-500" />
        Fibroses Pulmonaires Progressives (FPP)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Comprendre le phénotype évolutif commun à de nombreuses pneumopathies interstitielles diffuses (PID).
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction au Concept de FPP</h3>
        <p className="text-slate-700 mb-4 text-base">
            Le concept de Fibrose Pulmonaire Progressive (FPP) ne désigne pas une maladie unique, mais un **phénotype clinique**, c'est-à-dire un comportement évolutif observé dans diverses PID. Indépendamment de leur diagnostic initial, certains patients développent une aggravation auto-entretenue de la fibrose, menant à un déclin fonctionnel, une dégradation de la qualité de vie et une mortalité accrue, de manière similaire à la Fibrose Pulmonaire Idiopathique (FPI).
        </p>
        <p className="text-slate-700 text-base">
            La reconnaissance de ce phénotype est cruciale car elle a ouvert la voie à l'utilisation de traitements antifibrosants pour des patients atteints de PID autres que la FPI.
        </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
            <Info className="w-6 h-6 mr-3" />
            Principes Clés
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            <li>La FPP est un <strong>phénotype clinique évolutif</strong>, pas une maladie distincte, qui peut survenir dans diverses PID fibrosantes.</li>
            <li>Elle se caractérise par une <strong>aggravation auto-entretenue de la fibrose</strong>, similaire à la FPI.</li>
            <li>Le principal marqueur est le <strong>déclin de la fonction respiratoire</strong> (en particulier la CVF) malgré un traitement standard de la maladie sous-jacente.</li>
            <li>L'identification de ce phénotype est <strong>cruciale</strong> car elle justifie l'introduction d'un <strong>traitement antifibrosant</strong> pour ralentir la progression.</li>
        </ul>
    </div>

    <div className="space-y-4">
        <Accordion title="Définition et Critères de Progression" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                 <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Qu'est-ce que le phénotype FPP ?" icon={<Info className="w-5 h-5"/>} color="blue">
                        <p>La FPP décrit une évolution progressive, où la fibrose s'aggrave avec le temps. Elle peut être constatée dès la présentation initiale du patient (symptômes et imagerie qui s'aggravent).</p>
                        <p className="text-base italic mt-2">Environ 18 à 32% des patients atteints de PID non-FPI développent ce phénotype.</p>
                    </InfoCard>
                    <InfoCard title="FPP 'Malgré Traitement' : La Cible Thérapeutique" icon={<Pill className="w-5 h-5"/>} color="teal">
                        <p>Le terme **FPP (malgré traitement)** est utilisé pour désigner la progression qui survient **malgré un traitement initial jugé approprié** (ex: immunosuppresseurs pour une connectivite).</p>
                        <p className="text-base font-semibold mt-2">Cette distinction est cruciale car c'est cette entité qui est la cible des traitements antifibrosants.</p>
                    </InfoCard>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <h4 className="font-semibold text-red-800 text-lg mb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Critères de Progression (définis sur 24 mois)
                    </h4>
                    <p className="text-slate-700 mb-2 text-base">Le patient doit présenter au moins un des critères suivants, en l'absence d'autre explication :</p>
                    <ul className="space-y-2 text-base text-slate-700">
                        <li className="p-2 bg-white border border-red-200 rounded-md">
                            <strong className="block text-red-700">1. Déclin fonctionnel significatif :</strong><br/>
                            Baisse relative de la Capacité Vitale Forcée (CVF) ≥ 10% de la valeur prédite.
                        </li>
                         <li className="p-2 bg-white border border-red-200 rounded-md">
                            <strong className="block text-red-700">2. Déclin fonctionnel modéré + Aggravation :</strong><br/>
                            Baisse relative de la CVF de 5 à 10% <strong>ET</strong> aggravation des symptômes respiratoires <strong>OU</strong> aggravation des signes de fibrose au scanner.
                        </li>
                         <li className="p-2 bg-white border border-red-200 rounded-md">
                            <strong className="block text-red-700">3. Aggravation symptomatique et radiologique :</strong><br/>
                            Aggravation des symptômes respiratoires <strong>ET</strong> aggravation significative des signes de fibrose au scanner.
                        </li>
                    </ul>
                </div>
            </div>
        </Accordion>

        <Accordion title="Pathologies sous-jacentes et Facteurs de Risque" icon={<Stethoscope className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4">
                 <p className="text-slate-700 text-base">De nombreuses PID peuvent évoluer vers un phénotype FPP. Certains facteurs de risque augmentent cette probabilité.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <InfoCard title="Principales PID Concernées" icon={<CheckCircle className="w-5 h-5"/>} color="green">
                         <ul className="list-disc list-inside">
                             <li>Pneumopathie d'Hypersensibilité (PHS) chronique</li>
                             <li>PID associées aux connectivites (PR, SSc, etc.)</li>
                             <li>PID inclassables</li>
                             <li>Sarcoïdose fibrosante</li>
                             <li>Pneumoconioses</li>
                         </ul>
                     </InfoCard>
                     <InfoCard title="Facteurs de Risque de Progression" icon={<AlertTriangle className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Facteurs Généraux :</strong>
                                <ul className="list-['-_'] list-inside pl-4 mt-1 text-sm">
                                    <li>Pattern de <strong>Pneumopathie Interstitielle Commune (PIC/UIP)</strong> à la TDM ou à la biopsie.</li>
                                    <li>Étendue de la fibrose sur la TDM-HR initiale.</li>
                                    <li>Fonction respiratoire de base altérée (CVF et/ou DLCO basses).</li>
                                    <li>Désaturation en oxygène durant le test de marche de 6 minutes.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Facteurs Spécifiques à la Maladie :</strong>
                                <ul className="list-['-_'] list-inside pl-4 mt-1 text-sm">
                                    <li><strong>Polyarthrite Rhumatoïde (PR) :</strong> Pattern TDM de PIC/UIP, sexe masculin, âge avancé, taux élevés d'anticorps anti-CCP.</li>
                                    <li><strong>Sclérodermie Systémique (SSc) :</strong> Atteinte cutanée diffuse, présence d'anticorps anti-Scl70, étendue importante de la fibrose sur la TDM-HR.</li>
                                    <li><strong>Pneumopathie d'Hypersensibilité (PHS) :</strong> Non-identification de l'antigène causal, présence de fibrose extensive.</li>
                                </ul>
                            </li>
                        </ul>
                     </InfoCard>
                 </div>
            </div>
        </Accordion>

        <Accordion title="Approche Thérapeutique de la FPP" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 flex flex-col items-center space-y-4">
                <StepCard stepNumber="1" title="Traitement Initial Individualisé" icon={<Search className="w-6 h-6"/>} color="blue">
                    <p>La prise en charge initiale n'est pas standardisée et doit être adaptée à la maladie sous-jacente. L'objectif est de contrôler l'inflammation et/ou d'éliminer le facteur déclenchant.</p>
                    <ul className="list-disc list-inside text-base mt-2">
                        <li><strong>PID-Connectivites :</strong> Immunosuppresseurs (ex: mycophénolate, rituximab).</li>
                        <li><strong>PHS Chronique :</strong> Éviction de l'antigène et/ou corticoïdes/immunosuppresseurs.</li>
                        <li><strong>Sarcoïdose :</strong> Corticoïdes ou autres immunosuppresseurs.</li>
                    </ul>
                </StepCard>

                <div className="text-slate-400 transform rotate-90">
                    <ChevronRight className="w-8 h-8" />
                </div>

                <StepCard stepNumber="2" title="Surveillance et Détection de la Progression" icon={<Activity className="w-6 h-6"/>} color="orange">
                    <p>Après l'initiation du traitement de fond, une période d'observation et de surveillance rapprochée est essentielle pour identifier les patients qui continuent de progresser.</p>
                    <p className="font-semibold mt-2">Période d'observation : au moins 3 à 6 mois.</p>
                    <p className="text-base">Surveiller l'évolution des symptômes, de la fonction respiratoire (EFR tous les 3-6 mois) et de l'imagerie (TDM-HR selon indication) pour appliquer les critères de FPP.</p>
                </StepCard>
                
                <div className="text-slate-400 transform rotate-90">
                    <ChevronRight className="w-8 h-8" />
                </div>

                <StepCard stepNumber="3" title="Traitement de la Progression (FPP avérée)" icon={<Pill className="w-6 h-6"/>} color="purple">
                     <p>Si la fibrose progresse **malgré le traitement initial** (si les critères de FPP sont remplis), l'ajout séquentiel d'un **traitement antifibrosant** est indiqué.</p>
                     <ul className="list-disc list-inside text-base mt-2">
                         <li><strong>Nintedanib :</strong> A démontré son efficacité pour ralentir le déclin de la CVF chez les patients avec FPP (étude INBUILD). Il peut être utilisé en association avec les immunosuppresseurs.</li>
                         <li><strong>Pirfénidone :</strong> Son efficacité est en cours d'évaluation dans cette indication.</li>
                         <li>Dans certains cas, les immunosuppresseurs peuvent être diminués ou arrêtés lors de l'introduction de l'antifibrosant, si leur bénéfice n'est pas démontré.</li>
                     </ul>
                </StepCard>
            </div>
        </Accordion>

         <Accordion title="Fibroses Pulmonaires Progressives et Nintedanib" icon={<Pill className="w-5 h-5 text-white" />} variant="success">
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">L'étude INBUILD a été un essai pivot qui a validé le concept de FPP et a démontré l'efficacité du Nintedanib dans cette population hétérogène de patients.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard title="L'Étude INBUILD" icon={<Info className="w-5 h-5"/>} color="blue">
                        <ul className="list-disc list-inside">
                            <li><strong>Population :</strong> Patients avec diverses PID (hors FPI) présentant des critères de progression.</li>
                            <li><strong>Résultat principal :</strong> Le Nintedanib a significativement réduit le taux annuel de déclin de la CVF par rapport au placebo, que le pattern TDM soit de type UIP ou non.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Efficacité du Nintedanib" icon={<CheckCircle className="w-5 h-5"/>} color="green">
                        <ul className="list-disc list-inside">
                            <li>Ralentit la progression de la maladie.</li>
                            <li>Bénéfice observé dans les principaux sous-groupes de PID (PHS, PID-connectivites, PID inclassables).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Profil de Tolérance" icon={<AlertTriangle className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside">
                            <li>Similaire à celui observé dans la FPI.</li>
                            <li><strong>Diarrhée :</strong> Effet secondaire le plus fréquent, généralement gérable par des traitements symptomatiques et des adaptations de dose.</li>
                            <li><strong>Élévation des enzymes hépatiques :</strong> Nécessite une surveillance biologique régulière.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Questions et Perspectives" icon={<Search className="w-5 h-5"/>} color="purple">
                        <ul className="list-disc list-inside">
                            <li>Quel est le meilleur moment pour initier le Nintedanib ?</li>
                            <li>Faut-il privilégier les antifibrosants ou les immunosuppresseurs dans les maladies inflammatoires ?</li>
                            <li>Quelle est la place des antifibrosants dans les phases aiguës/subaiguës de certaines PID ?</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Suivi et Prise en Charge de Support" icon={<HandHeart className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <InfoCard title="Suivi Régulier" icon={<Activity className="w-5 h-5"/>} color="green">
                        <p>Un suivi rapproché est essentiel pour détecter la progression précocement.</p>
                        <ul className="list-disc list-inside text-base mt-2">
                            <li><strong>EFR (CVF, DLCO) :</strong> Tous les 3 à 6 mois.</li>
                            <li><strong>Évaluation clinique :</strong> Dyspnée, toux, tolérance à l'effort.</li>
                            <li><strong>TDM-HR :</strong> Pas en routine, mais si une aggravation est suspectée ou pour le suivi à long terme.</li>
                        </ul>
                    </InfoCard>
                     <InfoCard title="Prise en Charge de Support" icon={<HandHeart className="w-5 h-5"/>} color="teal">
                         <p>Elle est identique à celle de la FPI et vise à améliorer la qualité de vie :</p>
                         <ul className="list-disc list-inside text-base mt-2">
                            <li>Oxygénothérapie pour corriger l'hypoxémie.</li>
                            <li>Réhabilitation respiratoire.</li>
                            <li>Gestion des comorbidités.</li>
                            <li>Orientation précoce pour la transplantation pulmonaire.</li>
                            <li>Soins palliatifs et de support pour la gestion des symptômes.</li>
                         </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPPSection;
