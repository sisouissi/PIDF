
import React from 'react';
import { AlertTriangle, TrendingUp, Activity, Search, Pill, Heart, Info, Stethoscope, Image, Bug, CheckCircle, XCircle, PlusCircle, HandHeart } from './icons';
import { Accordion } from './Accordion';

const InfoCard = ({ title, icon, content, bgColorClass, borderColorClass, textColorClass }: { title: string; icon: React.ReactNode; content: React.ReactNode; bgColorClass: string; borderColorClass: string; textColorClass: string; }) => (
    <div className={`${bgColorClass} p-4 rounded-md border-l-4 ${borderColorClass} h-full shadow-sm`}>
        <h4 className={`font-semibold ${textColorClass} mb-2 flex items-center`}>
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <div className="text-base text-slate-700 space-y-1">{content}</div>
    </div>
);

export const ExacerbationAigueSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <AlertTriangle className="w-7 h-7 mr-3 text-red-500" />
        Exacerbation Aiguë de la FPI (EA-FPI)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Un événement critique et potentiellement mortel dans l'évolution de la FPI, nécessitant une reconnaissance et une prise en charge rapides.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            L'exacerbation aiguë est définie comme une détérioration respiratoire aiguë, cliniquement significative, qui marque un tournant dans la maladie. Comprendre sa définition, ses déclencheurs et sa prise en charge est fondamental pour tout clinicien suivant des patients atteints de FPI.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
            <InfoCard 
                title="Incidence"
                icon={<TrendingUp className="w-5 h-5"/>}
                content={<p className="text-base">Touche <strong>5 à 10%</strong> des patients avec FPI par an.</p>}
                bgColorClass="bg-blue-50"
                borderColorClass="border-blue-500"
                textColorClass="text-blue-800"
            />
            <InfoCard 
                title="Pronostic"
                icon={<Heart className="w-5 h-5"/>}
                content={<p className="text-base">Extrêmement sévère : mortalité hospitalière <strong>supérieure à 50%</strong>, survie médiane de <strong>3 à 4 mois</strong> post-événement.</p>}
                bgColorClass="bg-red-50"
                borderColorClass="border-red-500"
                textColorClass="text-red-800"
            />
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Définition et Critères Diagnostiques (International Working Group 2016)" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">La définition a évolué pour être plus inclusive et cliniquement pertinente. L'infection n'est plus un critère d'exclusion mais un déclencheur possible.</p>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Les 4 critères diagnostiques cumulatifs :</h4>
                    <ul className="list-decimal list-inside space-y-2 text-base">
                        <li>Diagnostic antérieur ou concomitant de FPI.</li>
                        <li>Aggravation ou développement d'une dyspnée, typiquement <strong>en moins d'un mois</strong>.</li>
                        <li><strong>TDM thoracique :</strong> Nouvelles opacités bilatérales en verre dépoli et/ou consolidations surajoutées à un pattern de PIC/UIP préexistant.</li>
                        <li>Détérioration non entièrement expliquée par une insuffisance cardiaque ou une surcharge liquidienne.</li>
                    </ul>
                </div>
                <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-sm mt-3">
                    <Info className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base text-amber-800">
                        L'EA-FPI peut être classée comme <strong>"déclenchée"</strong> (infection, post-procédure, toxique...) ou <strong>"idiopathique"</strong> si aucun déclencheur n'est retrouvé.
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Facteurs de Risque et Déclencheurs" icon={<Bug className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">L'EA-FPI est souvent considérée comme une réponse anormale du poumon fibrosant à une agression.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Facteurs liés au patient :</strong> Maladie plus avancée (CVF et DLCO basses), hypertension pulmonaire, désaturation à l'effort.</li>
                    <li><strong>Infections :</strong> Virales (grippe, CMV, etc.) ou bactériennes sont des déclencheurs fréquents.</li>
                    <li><strong>Microaspiration :</strong> Le RGO est un facteur de risque suspecté.</li>
                    <li><strong>Procédures thoraciques :</strong> Chirurgie pulmonaire, bronchoscopie ou biopsie peuvent déclencher une EA.</li>
                    <li><strong>Médicaments :</strong> Certains médicaments peuvent être pneumotoxiques.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Démarche Diagnostique" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">La démarche est une course contre la montre pour éliminer les diagnostics différentiels traitables et confirmer l'EA-FPI.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Imagerie (TDM-HR) :</strong> Examen clé. Doit être réalisé en urgence, idéalement avec injection de produit de contraste pour éliminer une embolie pulmonaire. Montre les nouvelles opacités bilatérales.</li>
                    <li><strong>Biologie :</strong> NFS, CRP, procalcitonine, BNP (pour éliminer l'OAP), D-dimères (embolie), troponine.</li>
                    <li><strong>Prélèvements microbiologiques :</strong> Hémocultures, antigénuries, PCR virales sur prélèvement nasopharyngé.</li>
                    <li><strong>Bronchoscopie avec LBA :</strong> À discuter si le patient est stable. Vise à rechercher une infection (bactérienne, virale, opportuniste) ou une hémorragie alvéolaire.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Prise en Charge Thérapeutique" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6 text-slate-700">
                
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">1. Mesures de Support : La Base du Traitement</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InfoCard 
                            title="Oxygénothérapie"
                            icon={<CheckCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Objectif :</strong> Maintenir SpO2 ≥ 90%.</p>
                                <p className="text-base"><strong>Moyens :</strong> Souvent oxygénothérapie à haut débit (Optiflow) nécessaire en raison de l'hypoxémie sévère et du haut débit inspiratoire des patients.</p>
                            </>}
                            bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                         <InfoCard 
                            title="Ventilation Mécanique"
                            icon={<AlertTriangle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Ventilation Non Invasive (VNI) :</strong> Peut améliorer le confort et réduire la mortalité à court terme par rapport à la ventilation invasive.</p>
                                <p className="text-base"><strong>Ventilation Mécanique Invasive (VMI) :</strong> Mortalité extrêmement élevée (supérieure à 90%). À n'envisager que comme un <strong>pont vers une transplantation pulmonaire</strong> chez un patient déjà listé, et après discussion collégiale et accord du patient.</p>
                            </>}
                            bgColorClass="bg-amber-50"
                            borderColorClass="border-amber-500"
                            textColorClass="text-amber-800"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">2. Traitements Pharmacologiques de Première Ligne</h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        <InfoCard 
                            title="Glucocorticoïdes"
                            icon={<CheckCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base">Traitement de première intention malgré l'absence d'essais contrôlés randomisés.</p>
                                <p className="text-base"><strong>Schéma usuel :</strong> Bolus de <strong>méthylprednisolone 500mg à 1g/jour pendant 3 jours</strong>, suivi par une corticothérapie orale (e.g., prednisone 0.5-1 mg/kg/jour) avec décroissance progressive.</p>
                            </>}
                             bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                         <InfoCard 
                            title="Antibiothérapie"
                            icon={<CheckCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base">Quasi-systématique en raison de la difficulté à exclure une infection.</p>
                                <p className="text-base"><strong>Spectre :</strong> Large, couvrant les germes communautaires. Des études rétrospectives suggèrent un bénéfice potentiel des <strong>macrolides (Azithromycine)</strong>.</p>
                                <p className="text-base"><strong>Prophylaxie PJP :</strong> Penser au Co-trimoxazole chez les patients sous corticothérapie prolongée.</p>
                            </>}
                             bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">3. Thérapies Controversées ou en Cours d'Évaluation</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InfoCard 
                            title="Antifibrotiques (Nintedanib/Pirfénidone)"
                            icon={<PlusCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Recommandation :</strong> Ne pas initier durant l'épisode aigu.</p>
                                <p className="text-base"><strong>Si le patient est déjà sous traitement :</strong> La tendance est de le <strong>poursuivre</strong> si la tolérance digestive et hépatique le permet, car des données suggèrent que cela est bénéfique.</p>
                            </>}
                            bgColorClass="bg-amber-50"
                            borderColorClass="border-amber-500"
                            textColorClass="text-amber-800"
                        />
                        <InfoCard 
                            title="Immunosuppresseurs"
                            icon={<XCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Cyclophosphamide :</strong> <strong>À NE PAS UTILISER.</strong> L'essai EXAFIP a montré une <strong>augmentation de la mortalité</strong>.</p>
                                <p className="text-base"><strong>Autres (Cyclosporine, Tacrolimus) :</strong> Pas de preuve de bénéfice. Leur utilisation n'est pas recommandée en dehors de protocoles de recherche.</p>
                            </>}
                            bgColorClass="bg-red-50"
                            borderColorClass="border-red-500"
                            textColorClass="text-red-800"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">4. Stratégies Avancées et de Support</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                         <InfoCard 
                            title="Thérapies Expérimentales"
                            icon={<Pill className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base">Des approches sont à l'étude dans des centres experts :</p>
                                <ul className="list-disc list-inside pl-2 text-base">
                                    <li><strong>Echanges plasmatiques + Rituximab +/- IgIV :</strong> Des séries de cas suggèrent un bénéfice sur la survie.</li>
                                    <li><strong>Hémoperfusion sur colonne de Polymyxine-B :</strong> Utilisée au Japon, des données rétrospectives montrent une amélioration de la survie.</li>
                                </ul>
                            </>}
                            bgColorClass="bg-slate-50"
                            borderColorClass="border-slate-500"
                            textColorClass="text-slate-800"
                        />
                         <InfoCard 
                            title="Soins Palliatifs et Directives Anticipées"
                            icon={<HandHeart className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Essentiel et précoce.</strong></p>
                                <p className="text-base">L'EA-FPI est un moment clé pour (ré)aborder les objectifs de soins, les limitations thérapeutiques (notamment la VMI) et se concentrer sur le confort du patient (gestion de la dyspnée avec des opiacés à faible dose).</p>
                            </>}
                            bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                    </div>
                </div>

            </div>
        </Accordion>
    </div>
  </div>
);

export default ExacerbationAigueSection;
