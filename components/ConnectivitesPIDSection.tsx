
import React from 'react';
import { FileMedical, Search, Pill, Stethoscope, TrendingUp, CheckCircle, AlertTriangle, Heart, Users } from './icons';
import { Accordion } from './Accordion';
import { AcrScreeningTool } from './AcrScreeningTool';
import { AcrTreatmentTool } from './AcrTreatmentTool';
import { ImmunologyWorkupSection } from './ImmunologyWorkupSection';

const SubSectionTitle: React.FC<{children: React.ReactNode}> = ({children}) => <h5 className="font-semibold text-slate-700 mt-3 mb-1">{children}</h5>

const TherapeuticCard: React.FC<{ title: string; icon: React.ReactNode; color: 'green' | 'blue' | 'red' | 'orange'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colorClasses = {
        green: 'border-green-500 bg-green-50',
        blue: 'border-blue-500 bg-blue-50',
        red: 'border-red-500 bg-red-50',
        orange: 'border-orange-500 bg-orange-50'
    };
    const textColor = {
        green: 'text-green-800',
        blue: 'text-blue-800',
        red: 'text-red-800',
        orange: 'text-orange-800'
    }
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color]} shadow-sm`}>
            <h4 className={`font-semibold text-lg mb-3 flex items-center ${textColor[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-base text-slate-700 space-y-2">{children}</div>
        </div>
    );
};

const ClinicalPresentationCard: React.FC<{ title: string; icon: React.ReactNode; color: 'red' | 'blue' | 'purple' | 'green'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colorClasses = {
        red: { border: 'border-l-red-400', icon: 'text-red-600' },
        blue: { border: 'border-l-blue-400', icon: 'text-blue-600' },
        purple: { border: 'border-l-purple-400', icon: 'text-purple-600' },
        green: { border: 'border-l-teal-400', icon: 'text-teal-600' }
    };

    return (
        <div className={`bg-slate-50 p-4 rounded-lg shadow-sm border ${colorClasses[color].border} border-l-4 h-full`}>
            <h4 className={`font-semibold text-slate-800 flex items-center mb-3`}>
                <span className={colorClasses[color].icon}>{icon}</span>
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-base text-slate-600 space-y-2">
                {children}
            </div>
        </div>
    );
};


export const ConnectivitesPIDSection: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                    <FileMedical className="w-7 h-7 mr-3 text-blue-500" />
                    PID associées aux Connectivites (CTD-ILD)
                </h2>
                <p className="text-slate-600 mt-2 text-base">
                   Approche diagnostique et thérapeutique des atteintes pulmonaires interstitielles dans le cadre des maladies systémiques auto-immunes.
                </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                 <p className="text-slate-600 mb-4 text-base">
                   Les PID associées aux connectivites sont la manifestation pulmonaire la plus fréquente de ces maladies systémiques et une cause majeure de morbidité et de mortalité. Leur prise en charge nécessite une collaboration étroite entre pneumologues et rhumatologues.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2" />
                        Principes Clés
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                        <li><strong>Maladie Systémique :</strong> L'atteinte pulmonaire s'intègre dans une maladie plus large.</li>
                        <li><strong>Approche Multidisciplinaire :</strong> La collaboration pneumo-rhumatologique est indispensable.</li>
                        <li><strong>Pronostic Variable :</strong> Généralement meilleur que la FPI, mais hétérogène.</li>
                        <li><strong>Cible Thérapeutique :</strong> Vise à la fois l'inflammation (immunosuppresseurs) et la fibrose (antifibrosants).</li>
                    </ul>
                </div>
            </div>

            <Accordion title="Présentations Cliniques par Connectivite" icon={<Stethoscope className="w-5 h-5 text-white" />}>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ClinicalPresentationCard title="Polyarthrite Rhumatoïde (PR)" icon={<Users className="w-6 h-6"/>} color="red">
                        <div>
                            <p><strong>Profil :</strong> Souvent des hommes, plus âgés, fumeurs, avec une maladie articulaire ancienne et séropositive (FR, anti-CCP élevés).</p>
                            <SubSectionTitle>Patterns TDM :</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>UIP (PIC) :</strong> Le plus fréquent et le plus sévère, souvent indiscernable de la FPI.</li>
                                <li><strong>PINS :</strong> Second pattern le plus fréquent, de meilleur pronostic.</li>
                                <li><strong>Autres :</strong> Pneumopathie organisée (PO), atteinte des voies aériennes.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                    <ClinicalPresentationCard title="Sclérodermie Systémique (SSc)" icon={<Users className="w-6 h-6"/>} color="blue">
                        <div>
                            <p><strong>Profil :</strong> La PID est une cause majeure de mortalité. Elle apparaît souvent précocement dans l'évolution de la maladie.</p>
                            <SubSectionTitle>Patterns TDM :</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>PINS fibrosante :</strong> Le pattern le plus fréquent.</li>
                                <li><strong>UIP (PIC) :</strong> Moins fréquent (jusqu'à 40%) mais de pronostic plus sombre.</li>
                            </ul>
                             <SubSectionTitle>Signes et Auto-anticorps clés :</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Anti-Scl70 (topoisomérase I) :</strong> Fortement associé à la PID dans les formes diffuses.</li>
                                <li>Dilatation de l'œsophage visible sur la TDM.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                    <ClinicalPresentationCard title="Myopathies Inflammatoires (MII)" icon={<Users className="w-6 h-6"/>} color="purple">
                        <div>
                            <p><strong>Profil :</strong> La PID peut précéder, accompagner ou suivre l'atteinte musculaire. Elle est parfois la seule manifestation (dermatomyosite amyopathique).</p>
                            <SubSectionTitle>Patterns TDM :</SubSectionTitle>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>PINS et/ou Pneumopathie Organisée (PO)</strong> sont les plus typiques.</li>
                            </ul>
                             <SubSectionTitle>Signes et Auto-anticorps clés :</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Syndrome des anti-synthétases (anti-Jo1, etc.) :</strong> PID quasi-constante, mains de mécanicien, arthrites.</li>
                                <li><strong>Anti-MDA5 :</strong> Associé à une PID rapidement progressive et des atteintes cutanées spécifiques.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                    <ClinicalPresentationCard title="Syndrome de Sjögren (SjS)" icon={<Users className="w-6 h-6"/>} color="green">
                       <div>
                            <p><strong>Profil :</strong> La PID est une des manifestations systémiques les plus communes.</p>
                            <SubSectionTitle>Patterns TDM :</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>PINS</strong> est le pattern le plus fréquent.</li>
                                <li><strong>Autres :</strong> Atteinte kystique (Pneumopathie Interstitielle Lymphoïde - PIL), atteinte des voies aériennes.</li>
                            </ul>
                            <SubSectionTitle>Signes et Auto-anticorps clés :</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li>Syndrome sec (oculaire, buccal).</li>
                                <li>Anticorps anti-SSA (Ro) et anti-SSB (La).</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                </div>
            </Accordion>
            
            <Accordion title="Démarche Diagnostique : Une Approche Intégrée" icon={<Search className="w-5 h-5 text-white" />}>
                 <div className="p-4 space-y-4">
                    <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                        <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">1</span>
                            Suspicion Clinique
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                             <p>Toute PID fibrosante sans cause évidente doit faire suspecter une connectivite sous-jacente. Il faut systématiquement rechercher des signes extra-pulmonaires, même minimes (examen cutané, articulaire, capillaroscopie).</p>
                        </div>
                    </div>

                    <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                        <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">2</span>
                            Bilan Biologique Ciblé
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                            <p>Un bilan auto-immun large est essentiel, incluant au minimum : AAN, Facteur Rhumatoïde, anti-CCP. En fonction de l'orientation clinique, il sera étendu (anti-Scl70, anti-synthétases, anti-MDA5, anti-SSA/SSB...).</p>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                         <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">3</span>
                            Imagerie (TDM-HR) : Chercher les 'Drapeaux Rouges' de Connectivite
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                             <p>Certains signes radiologiques, bien que non spécifiques, augmentent la probabilité d'une CTD-ILD par rapport à une FPI :</p>
                             <ul className="list-disc list-inside pl-4 mt-2">
                                <li>Pattern de PINS prédominant : Respect sous-pleural, verre dépoli important.</li>
                                <li>Atteinte multilobaire symétrique et étendue.</li>
                                <li>Signes associés : Dilatation de l'œsophage (SSc), épanchements pleuraux/péricardiques, adénopathies.</li>
                                <li>"Straight Edge Sign", "Exuberant Honeycombing" sont des indices évocateurs.</li>
                            </ul>
                        </div>
                    </div>

                     <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                         <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">4</span>
                            Discussion Multidisciplinaire (DMD)
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                           <p>Étape cruciale et obligatoire. La confrontation des données cliniques, sérologiques, radiologiques (et parfois histologiques) entre pneumologue, rhumatologue, radiologue et pathologiste permet de poser le diagnostic le plus probable et de décider de la stratégie thérapeutique.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-amber-800">Et si les critères ne sont pas remplis ? Le concept d'IPAF</h4>
                        <p className="mt-2 text-base text-amber-700">Les patients avec une PID et des arguments pour une auto-immunité (cliniques ou sérologiques) mais ne remplissant pas les critères d'une connectivite définie sont classés comme ayant une Pneumopathie Interstitielle avec Caractéristiques Auto-immunes (IPAF). C'est une entité de recherche qui nécessite une surveillance rapprochée et une discussion experte pour la décision thérapeutique.</p>
                    </div>
                </div>
            </Accordion>

            <ImmunologyWorkupSection />
            
            <Accordion title="Prise en Charge Thérapeutique (basée sur les recommandations ACR 2023)" icon={<Pill className="w-5 h-5 text-white" />}>
                 <div className="p-4 space-y-4">
                    <TherapeuticCard title="Traitement de Première Ligne" icon={<CheckCircle />} color="green">
                        <div>
                            <h5 className="font-bold">Immunosuppresseurs</h5>
                            <p><strong>Mycophenolate (MMF)</strong> est souvent préféré. Alternatives : Azathioprine, Rituximab, Cyclophosphamide.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mt-2">
                             <div className="p-3 bg-orange-50 border border-orange-200 rounded-md">
                                <h6 className="font-semibold text-orange-800 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>Glucocorticoïdes</h6>
                                <p>Recommandés conditionnellement (sauf SSc). <strong className="text-red-700">Fortement déconseillés en 1ère ligne dans la SSc</strong> (risque de crise rénale sclérodermique).</p>
                            </div>
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                                <h6 className="font-semibold text-blue-800 flex items-center"><Pill className="w-4 h-4 mr-2"/>Nintedanib</h6>
                                <p>Optionnel en 1ère ligne pour la <strong>SSc-PID</strong>. Conditionnellement déconseillé pour Sjögren, MII et MCTD.</p>
                            </div>
                        </div>
                    </TherapeuticCard>
                    <TherapeuticCard title="Gestion de la Progression sous Traitement" icon={<TrendingUp />} color="blue">
                        <div>
                            <h5 className="font-bold">Options de 2ème Ligne</h5>
                            <p>En cas de progression, un switch ou un ajout d'un traitement est recommandé : <strong>MMF, Rituximab, Cyclophosphamide, ou Nintedanib.</strong></p>
                        </div>
                        <div>
                             <h5 className="font-bold">Cas Spécifiques</h5>
                             <ul className="list-disc list-inside pl-4">
                               <li><strong>PR-PID :</strong> Ajout de <strong>Pirfénidone</strong> est une option.</li>
                               <li><strong>SSc/PR/MCTD :</strong> <strong>Tocilizumab</strong> est une option.</li>
                            </ul>
                        </div>
                    </TherapeuticCard>
                    <TherapeuticCard title="Formes Rapidement Progressives (RP-ILD)" icon={<AlertTriangle />} color="red">
                        <div>
                            <h5 className="font-bold">Traitement d'Induction Agressif</h5>
                            <ol className="list-decimal list-inside pl-2 mt-1">
                                <li><strong>Corticoïdes à haute dose :</strong> Pulses IV de méthylprednisolone en première intention.</li>
                                <li><strong>Traitements combinés :</strong> Association de 2 ou 3 agents : Rituximab, Cyclophosphamide, IVIG, MMF, inhibiteurs de calcineurine, ou inhibiteurs de JAK (surtout si anti-MDA5+).</li>
                            </ol>
                            <p className="mt-2"><strong>Antifibrotiques (Nintedanib, Pirfenidone) :</strong> Déconseillés en phase aiguë de RP-ILD.</p>
                        </div>
                    </TherapeuticCard>
                </div>
            </Accordion>
            
            <Accordion title="Suivi et Pronostic" icon={<TrendingUp className="w-5 h-5 text-white" />}>
                 <div className="p-4 grid md:grid-cols-2 gap-4">
                    <TherapeuticCard title="Modalités de Suivi" icon={<Stethoscope />} color="blue">
                        <div>
                            <h5 className="font-bold">Rythme :</h5>
                            <p>EFR tous les <strong>3-6 mois</strong> la première année pour SSc et MII, tous les <strong>3-12 mois</strong> pour PR, Sjögren et MCTD, puis espacement si stable.</p>
                        </div>
                         <div>
                            <h5 className="font-bold">Outils :</h5>
                            <p><strong>EFR (CVF, DLCO)</strong> est la clé. Le <strong>TM6</strong> avec oxymétrie est utile. La <strong>TDM-HR</strong> est indiquée en cas de dégradation clinique ou fonctionnelle inexpliquée.</p>
                        </div>
                    </TherapeuticCard>
                    <TherapeuticCard title="Facteurs Pronostiques" icon={<Heart />} color="orange">
                         <div>
                            <h5 className="font-bold">Général :</h5>
                            <p>Généralement meilleur que la FPI.</p>
                        </div>
                        <div>
                            <h5 className="font-bold">Mauvais pronostic :</h5>
                            <p>Âge avancé, sexe masculin, pattern TDM d'UIP, DLCO de base basse, étendue de la fibrose sur la TDM-HR.</p>
                        </div>
                        <div className="mt-2 p-2 bg-red-100 border border-red-200 rounded-md">
                            <h5 className="font-bold text-red-800 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>Déclin fonctionnel :</h5>
                            <p className="text-red-700">Une baisse de <strong>10% de la CVF</strong> ou de <strong>15% de la DLCO</strong> est un marqueur majeur de progression et de mortalité accrue.</p>
                        </div>
                    </TherapeuticCard>
                </div>
            </Accordion>
            
            <Accordion title="Algorithme d'aide au dépistage et suivi des PID associées aux connectivites (ACR 2023)" icon={<Search className="w-5 h-5 text-white" />} variant="danger">
                 <div className="p-2 md:p-4">
                    <AcrScreeningTool />
                </div>
            </Accordion>
            
            <Accordion title="Algorithme d'aide à la décision thérapeutique des PID associées aux connectivites (ACR 2023)" icon={<Pill className="w-5 h-5 text-white" />} variant="danger">
                 <div className="p-2 md:p-4">
                    <AcrTreatmentTool />
                </div>
            </Accordion>
        </div>
    );
};

export default ConnectivitesPIDSection;