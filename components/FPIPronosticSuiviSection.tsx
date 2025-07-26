
import React from 'react';
import { TrendingUp, Stethoscope, Activity, Image, Heart, Info, AlertTriangle, CheckCircle, Clock } from './icons';
import { Accordion } from './Accordion';

const InfoCard = ({ title, icon, content }: { title: string; icon: React.ReactNode; content: string[] }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <ul className="text-base text-slate-600 list-disc list-inside space-y-1">
            {content.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
        </ul>
    </div>
);


export const FPIPronosticSuiviSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <TrendingUp className="w-7 h-7 mr-3 text-blue-500" />
        Pronostic et Suivi de la FPI
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Comprendre la trajectoire de la maladie pour optimiser la prise en charge et anticiper les complications.
      </p>
    </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            L'évolution de la FPI est hétérogène et souvent imprévisible. Si la médiane de survie est un indicateur important, la trajectoire individuelle varie considérablement. Un suivi régulier et structuré est donc fondamental pour évaluer la progression de la maladie, adapter la stratégie thérapeutique et discuter des options futures avec le patient.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Principes Clés</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Hétérogénéité :</strong> La progression peut être lente, rapide ou ponctuée d'exacerbations.</li>
                    <li><strong>Pronostic dynamique :</strong> Le pronostic doit être réévalué régulièrement en fonction de l'évolution clinique et fonctionnelle.</li>
                    <li><strong>Anticipation :</strong> Le suivi permet d'anticiper les besoins en oxygène, la discussion sur la transplantation et les soins palliatifs.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Pronostic et Facteurs Prédictifs" icon={<Clock className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Survie et Hétérogénéité du Parcours</h4>
                    <p className="text-base text-slate-700">La survie médiane après le diagnostic est historiquement de <strong>3 à 5 ans</strong>. Cependant, cette statistique masque une grande variabilité : jusqu'à <strong>20-25% des patients</strong> peuvent survivre au-delà de 10 ans. Le parcours clinique est imprévisible.</p>
                </div>
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">Le Score GAP : Un Outil Pronostique Essentiel</h4>
                    <p className="text-base text-slate-700 mb-2">Le modèle GAP (<strong>G</strong>ender, <strong>A</strong>ge, <strong>P</strong>hysiology) est un index simple et validé pour prédire la mortalité à 1, 2 et 3 ans. Il combine :</p>
                    <ul className="list-disc list-inside space-y-1 text-base text-slate-700 pl-4">
                        <li><strong>Sexe (Gender)</strong></li>
                        <li><strong>Âge (Age)</strong></li>
                        <li><strong>Physiologie :</strong> CVF (% prédite) et DLCO (% prédite)</li>
                    </ul>
                     <p className="text-base text-slate-700 mt-2">Le score total classe les patients en trois stades de sévérité (I, II, III) avec des risques de mortalité croissants. C'est un outil clé pour la discussion pronostique initiale et l'orientation vers la transplantation.</p>
                </div>
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-2">Marqueurs Dynamiques : Le Déclin Fonctionnel est Clé</h4>
                    <p className="text-base text-slate-700">La <strong>trajectoire évolutive</strong> est un prédicteur de survie plus puissant que les valeurs de base. Les signes de progression rapide incluent :</p>
                     <ul className="list-disc list-inside space-y-1 text-base text-slate-700 pl-4">
                        <li>Baisse de la <strong>CVF absolue de ≥ 5-10%</strong> sur 6 à 12 mois.</li>
                        <li>Baisse de la <strong>DLCO absolue de ≥ 15%</strong> sur 6 à 12 mois.</li>
                        <li>Diminution de la distance au <strong>TM6 de plus de 30 mètres</strong> en 6 mois.</li>
                        <li>Aggravation de l'hypoxémie ou augmentation des besoins en oxygène.</li>
                        <li>Hospitalisation pour cause respiratoire.</li>
                    </ul>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Exacerbations Aiguës : Un Tournant Critique" icon={<AlertTriangle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">Une exacerbation aiguë de FPI est une détérioration respiratoire aiguë et cliniquement significative, non expliquée par une autre cause (insuffisance cardiaque, embolie pulmonaire...).</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Incidence :</strong> Concerne <strong>5 à 10%</strong> des patients par an.</li>
                    <li><strong>Diagnostic :</strong> Basé sur une aggravation rapide de la dyspnée et l'apparition de nouvelles opacités en verre dépoli/consolidations au scanner.</li>
                    <li><strong>Pronostic :</strong> Extrêmement sévère, avec une <strong>mortalité hospitalière de plus de 50%</strong> et une survie médiane de seulement <strong>3 à 4 mois</strong> après l'événement.</li>
                    <li><strong>Impact :</strong> Un tel événement doit déclencher une réévaluation immédiate des objectifs de soins.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Stratégie de Suivi Régulier" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Un suivi proactif et régulier, <strong>tous les 3 à 6 mois</strong>, est indispensable pour une prise en charge optimale.</p>
                <div className="grid md:grid-cols-2 gap-4">
                     <InfoCard 
                        title="Évaluation Clinique" 
                        icon={<Stethoscope className="w-5 h-5 text-blue-500"/>}
                        content={[
                            "Évolution de la <strong>dyspnée</strong> (échelle mMRC).",
                            "Tolérance à l'effort, activités quotidiennes.",
                            "Fréquence et sévérité de la <strong>toux</strong>.",
                            "Recherche de signes de comorbidités (œdèmes, etc.)."
                        ]}
                     />
                     <InfoCard 
                        title="Explorations Fonctionnelles" 
                        icon={<Activity className="w-5 h-5 text-green-500"/>}
                        content={[
                            "<strong>CVF et DLCO</strong> : recherche d'un déclin significatif.",
                            "<strong>Test de Marche de 6 Minutes (TM6)</strong> : mesure de la distance et de la désaturation à l'effort.",
                            "<strong>Oxymétrie de pouls</strong> : au repos et à l'effort pour guider l'oxygénothérapie."
                        ]}
                     />
                      <InfoCard 
                        title="Imagerie (TDM-HR)" 
                        icon={<Image className="w-5 h-5 text-purple-500"/>}
                        content={[
                            "Pas en routine, mais <strong>tous les 1 à 2 ans</strong> ou en cas d'aggravation inexpliquée.",
                            "Objectifs : évaluer la progression de la fibrose, dépister un <strong>cancer du poumon</strong> (risque accru)."
                        ]}
                     />
                      <InfoCard 
                        title="Gestion des Comorbidités" 
                        icon={<Heart className="w-5 h-5 text-red-500"/>}
                        content={[
                           "<strong>Dépistage actif</strong> : RGO, SAOS, HTP, maladies cardiovasculaires.",
                           "L'<strong>échocardiographie</strong> est indiquée si la DLCO est très basse ou en cas de dyspnée disproportionnée."
                        ]}
                     />
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPIPronosticSuiviSection;
