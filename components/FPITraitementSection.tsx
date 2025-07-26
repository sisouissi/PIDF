
import React from 'react';
import { Pill, Lungs, Heart, Activity, HandHeart, Info, AlertTriangle, Shield, CheckCircle } from './icons';
import { Accordion } from './Accordion';

const TraitementCard = ({ title, content }: { title: string, content: React.ReactNode }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-700 mb-2">{title}</h4>
        <div className="text-base text-slate-600 space-y-1">{content}</div>
    </div>
);

export const FPITraitementSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Pill className="w-7 h-7 mr-3 text-blue-500" />
        Traitement de la Fibrose Pulmonaire Idiopathique
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Approche thérapeutique globale et multimodale visant à ralentir la progression de la maladie et à améliorer la qualité de vie.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            Le traitement de la FPI a été transformé par l'avènement des thérapies antifibrosantes. L'objectif n'est pas de guérir la maladie, mais de ralentir sa progression inexorable, de gérer les symptômes, de traiter les comorbidités et d'améliorer la qualité de vie des patients. La prise en charge est un parcours complexe qui nécessite une approche holistique et une prise de décision partagée avec le patient.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Les 5 Piliers du Traitement de la FPI</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Traitement antifibrosant :</strong> Ralentir le déclin de la fonction respiratoire.</li>
                    <li><strong>Prise en charge non-pharmacologique :</strong> Gérer l'hypoxémie et améliorer la tolérance à l'effort.</li>
                    <li><strong>Gestion des comorbidités :</strong> Traiter activement les maladies associées pour améliorer le pronostic global.</li>
                    <li><strong>Transplantation pulmonaire :</strong> L'envisager précocement comme seule option curative.</li>
                    <li><strong>Soins de support et palliatifs :</strong> Maîtriser les symptômes pour une meilleure qualité de vie.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Traitement Pharmacologique : les Antifibrosants" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Deux médicaments, le nintedanib et la pirfénidone, ont démontré leur efficacité pour ralentir le déclin de la Capacité Vitale Forcée (CVF) d'environ 50% sur un an. Le choix entre les deux dépend du profil de tolérance et des comorbidités du patient.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <TraitementCard 
                        title="Nintedanib (Ofev®)"
                        content={
                            <>
                                <p><strong>Mécanisme :</strong> Inhibiteur de tyrosine kinases (VEGFR, FGFR, PDGFR).</p>
                                <p><strong>Efficacité :</strong> Ralentit le déclin annuel de la CVF.</p>
                                <p className="font-semibold mt-2">Gestion des effets secondaires :</p>
                                <ul className="list-disc list-inside pl-2 text-base">
                                    <li><strong>Diarrhée (très fréquent) :</strong> Traitement symptomatique (lopéramide), hydratation, adaptation posologique.</li>
                                    <li><strong>Nausées, vomissements.</strong></li>
                                    <li><strong>Élévation des transaminases :</strong> Surveillance biologique hépatique régulière (mensuelle les 3 premiers mois, puis trimestrielle).</li>
                                </ul>
                            </>
                        }
                    />
                    <TraitementCard 
                        title="Pirfénidone (Esbriet®)"
                        content={
                            <>
                                <p><strong>Mécanisme :</strong> Effets antifibrotiques, anti-inflammatoires et antioxydants.</p>
                                <p><strong>Efficacité :</strong> Ralentit le déclin annuel de la CVF.</p>
                                <p className="font-semibold mt-2">Gestion des effets secondaires :</p>
                                <ul className="list-disc list-inside pl-2 text-base">
                                    <li><strong>Troubles digestifs (nausées, anorexie) :</strong> Prise du médicament au milieu ou à la fin des repas.</li>
                                    <li><strong>Photosensibilité et rash cutané :</strong> Éviction solaire stricte, utilisation d'écran total, vêtements couvrants.</li>
                                    <li><strong>Fatigue.</strong></li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                    <h4 className="text-lg font-bold text-amber-900 mb-3">Focus sur le Nintedanib (Ofev®)</h4>
                    <div className="space-y-3 text-base text-amber-800">
                        <div>
                            <h5 className="font-semibold">Mécanisme d'Action</h5>
                            <p className="text-base">Inhibiteur de multiples tyrosines kinases (VEGFR, FGFR, PDGFR) qui bloquent les voies de signalisation impliquées dans la prolifération et la migration des fibroblastes.</p>
                        </div>
                        <div>
                            <h5 className="font-semibold">Efficacité Démontrée</h5>
                            <ul className="list-disc list-inside pl-4 text-base">
                                <li>Ralentit le déclin de la CVF d'environ 50% par rapport au placebo (essais INPULSIS).</li>
                                <li>Réduit le risque d'exacerbations aiguës.</li>
                                <li>Efficace même chez les patients avec une maladie plus sévère (CVF inférieure à 50%) ou un emphysème associé (CPFE).</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold">Posologie et Administration</h5>
                            <ul className="list-disc list-inside pl-4 text-base">
                                <li>150 mg, deux fois par jour, à environ 12 heures d'intervalle.</li>
                                <li>À prendre avec de la nourriture pour améliorer la tolérance digestive.</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold">Gestion Pratique des Effets Indésirables</h5>
                            <ul className="list-disc list-inside pl-4 text-base">
                                <li><strong>Diarrhée :</strong> L'effet secondaire le plus fréquent (plus de 60%). Gestion par hydratation, lopéramide, et si besoin, réduction de la dose à 100 mg x2/jour.</li>
                                <li><strong>Hépatotoxicité :</strong> Élévation des transaminases possible. Surveillance biologique mensuelle les 3 premiers mois, puis trimestrielle.</li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-semibold">Précautions d'Emploi</h5>
                             <ul className="list-disc list-inside pl-4 text-base">
                                <li>Contre-indiqué en cas d'insuffisance hépatique modérée à sévère (Child-Pugh B ou C).</li>
                                <li>Prudence en cas de traitement anticoagulant en raison d'un risque hémorragique potentiellement accru.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Prise en Charge Non-Pharmacologique" icon={<Activity className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Oxygénothérapie :</strong> Essentielle pour corriger l'hypoxémie de repos ou d'effort. Elle vise à maintenir une SpO2 ≥ 90%. L'oxygénothérapie de déambulation améliore la capacité d'exercice et la qualité de vie.</li>
                    <li><strong>Réhabilitation respiratoire :</strong> Un programme d'entraînement à l'effort supervisé, d'éducation thérapeutique et de soutien psychosocial. Démontré pour améliorer la dyspnée, la distance de marche et la qualité de vie.</li>
                    <li><strong>Vaccinations :</strong> Mises à jour recommandées pour la grippe (annuelle), le pneumocoque et le COVID-19 afin de réduire le risque d'exacerbations aiguës infectieuses.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Gestion des Comorbidités" icon={<Shield className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                 <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Reflux Gastro-Œsophagien (RGO) :</strong> Très prévalent. Le traitement par inhibiteurs de la pompe à protons (IPP) est recommandé pour les patients symptomatiques, bien que son impact sur la progression de la FPI reste débattu.</li>
                    <li><strong>Hypertension Pulmonaire (HTP) :</strong> Complication fréquente et de mauvais pronostic. Son dépistage par échocardiographie est recommandé, surtout en cas de DLCO très basse ou de discordance entre la dyspnée et le déclin de la CVF.</li>
                    <li><strong>Syndrome d'Apnées du Sommeil (SAOS) :</strong> À rechercher en cas de symptômes évocateurs. Sa prise en charge peut améliorer la qualité de vie.</li>
                    <li><strong>Emphysème associé (CPFE) :</strong> Modifie la présentation fonctionnelle (volumes pulmonaires sub-normaux) mais aggrave le pronostic.</li>
                 </ul>
            </div>
        </Accordion>
        
        <Accordion title="Transplantation Pulmonaire" icon={<Heart className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">La transplantation pulmonaire est la seule option thérapeutique curative pour la FPI.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Orientation précoce :</strong> Il est crucial d'adresser le patient à un centre de transplantation dès le diagnostic pour une évaluation initiale.</li>
                    <li><strong>Fenêtre de transplantation :</strong> Le but est d'inscrire le patient sur liste d'attente ni trop tôt (risques liés à l'immunosuppression) ni trop tard (décès en liste).</li>
                    <li><strong>Critères d'inscription sur liste :</strong> Généralement discutée en cas de déclin fonctionnel avéré (baisse de la CVF de 10% ou de la DLCO de 15% en 6 mois) ou d'emblée si DLCO est inférieure à 40%.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Soins Palliatifs et Gestion des Symptômes" icon={<HandHeart className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">L'introduction précoce des soins de support est fondamentale pour améliorer la qualité de vie.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Dyspnée :</strong> La prise en charge repose sur l'oxygénothérapie et la réhabilitation. Pour la dyspnée réfractaire, les opiacés à faible dose (morphine orale) sont le traitement le plus efficace et recommandé.</li>
                    <li><strong>Toux chronique :</strong> Souvent réfractaire. Des traitements non spécifiques comme les opiacés (codéine) ou la gabapentine peuvent être essayés. Le traitement du RGO associé est indispensable.</li>
                    <li><strong>Soutien psychologique :</strong> L'anxiété et la dépression sont fréquentes et doivent être prises en charge.</li>
                    <li><strong>Directives anticipées :</strong> Discuter des souhaits du patient concernant la fin de vie est une partie intégrante de la prise en charge.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPITraitementSection;
