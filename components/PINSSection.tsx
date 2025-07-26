
import React from 'react';
import { ClipboardList, AlertTriangle, Activity, Stethoscope, Search, Pill, CheckCircle, Image, Users, HandHeart, History, FlaskConical, Lungs, Microscope, FileText } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; }> = ({ title, children, icon }) => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <div className="text-base text-slate-700 space-y-2">
            {children}
        </div>
    </div>
);

const ClinicalFeatureCard: React.FC<{ title: string; icon: React.ReactNode; color: 'blue' | 'purple' | 'teal'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colorClasses = {
        blue: 'bg-blue-50 border-blue-500 text-blue-800',
        purple: 'bg-purple-50 border-purple-500 text-purple-800',
        teal: 'bg-teal-50 border-teal-500 text-teal-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color]}`}>
            <h5 className={`font-semibold mb-2 flex items-center ${colorClasses[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h5>
            <div className="text-slate-700 text-base space-y-1">{children}</div>
        </div>
    );
};

const EvaluationStepCard: React.FC<{ number: string; title: string; icon: React.ReactNode; color: 'blue' | 'orange' | 'green' | 'indigo'; children: React.ReactNode }> = ({ number, title, icon, color, children }) => {
     const colorClasses = {
        blue: 'border-blue-500',
        orange: 'border-orange-500',
        green: 'border-green-500',
        indigo: 'border-indigo-500',
    };
    return (
         <div className={`p-4 bg-slate-50 rounded-lg border-l-4 ${colorClasses[color]}`}>
            <h5 className="font-bold text-slate-800 flex items-center mb-2">
                <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold mr-4`}>{number}</span>
                <span className="flex items-center">{icon} <span className="ml-2">{title}</span></span>
            </h5>
            <div className="pl-12 text-base text-slate-700 space-y-2">{children}</div>
        </div>
    )
}


export const PINSSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <ClipboardList className="w-7 h-7 mr-3 text-blue-500" />
        Pneumopathies interstitielles non spécifiques (PINS)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        La PINS est une pneumopathie interstitielle chronique d'aspect homogène, combinant inflammation et fibrose. Elle est dite "non spécifique" car elle ne présente pas les caractéristiques distinctives d'autres PII.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction et Définition</h3>
        <p className="text-slate-700 mb-4 text-base">
            La Pneumopathie Interstitielle Non Spécifique (PINS), ou <i>Nonspecific Interstitial Pneumonia (NSIP)</i>, est une des principales formes de pneumopathies interstitielles idiopathiques (PII), au même titre que la pneumopathie interstitielle commune (PIC/FPI), la pneumopathie interstitielle desquamative (PID), et d'autres entités plus rares.
        </p>
        <p className="text-slate-700 text-base">
            Elle est qualifiée de « non spécifique » car son aspect histologique, bien que distinct, ne présente pas les caractéristiques spécifiques des autres PII (par ex: hétérogénéité de la FPI, accumulation de macrophages dans la PID, etc.). Le diagnostic de PINS repose sur une image histologique <strong>homogène</strong>, montrant une inflammation chronique et/ou une fibrose de l'interstitium pulmonaire qui semble avoir le même 'âge' partout.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h4 className="text-base font-semibold text-blue-800 mb-2">Points Clés sur la Définition</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li><strong>Un diagnostic d'exclusion histologique :</strong> La PINS est définie par l'absence des signes caractéristiques des autres PII.</li>
                <li><strong>Homogénéité temporelle :</strong> Son trait histologique majeur est un aspect uniforme (homogène dans le temps) de l'inflammation et/ou de la fibrose.</li>
                <li><strong>Dualité étiologique :</strong> Peut être idiopathique ou, plus fréquemment, secondaire à une maladie systémique (surtout les connectivites), une prise médicamenteuse ou une infection (VIH).</li>
            </ul>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Étiologie" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <p>La PINS peut être idiopathique, mais elle est le plus souvent associée à diverses conditions, même si le lien de causalité n'est pas toujours formellement identifié.</p>
                
                <div className="pt-4">
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">1. Connectivites</h4>
                    <p className="mb-4">La PINS est le pattern histologique le plus fréquemment retrouvé dans le cadre des pneumopathies interstitielles associées aux connectivites.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                            <h5 className="font-bold text-blue-800">Sclérodermie Systémique (SSc)</h5>
                            <p className="mt-1">Pattern le plus fréquent de PID dans la SSc (jusqu'à 78% des cas biopsiés).</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-md border border-purple-200">
                            <h5 className="font-bold text-purple-800">Polymyosite-Dermatomyosite (MII)</h5>
                            <p className="mt-1">Très fréquent (81% des cas biopsiés dans une étude). La PID peut se manifester comme une pneumonie résistante aux antibiotiques.</p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-md border border-teal-200">
                            <h5 className="font-bold text-teal-800">Syndrome de Sjögren</h5>
                            <p className="mt-1">Le pattern le plus fréquent de PID dans le Sjögren (près de 50% des cas).</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-md border border-red-200">
                            <h5 className="font-bold text-red-800">Polyarthrite Rhumatoïde (PR)</h5>
                            <p className="mt-1">Moins fréquent que le pattern de PIC/UIP, mais représente environ 14% des PID associées à la PR.</p>
                        </div>
                        <div className="bg-slate-100 p-3 rounded-md border border-slate-300 col-span-1 md:col-span-2">
                            <h5 className="font-bold text-slate-800">Vascularites associées aux ANCA</h5>
                            <p className="mt-1">Un pattern de PINS est décrit, notamment dans la polyangéite microscopique, bien que le pattern de PIC/UIP soit plus courant.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t mt-4">
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">2. Pneumopathie Interstitielle avec Caractéristiques Auto-immunes (IPAF)</h4>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="mb-3">Certains patients présentent une PINS (ou une autre PID) avec des signes d'auto-immunité, mais sans remplir les critères d'une connectivite définie. Ces patients sont classés comme IPAF.</p>
                        <p className="font-bold text-amber-800 mb-2">Critères pour l'IPAF (au moins 1 critère dans au moins 2 des 3 domaines) :</p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <div className="bg-white p-2 rounded border">
                                <h6 className="font-semibold">Domaine Clinique</h6>
                                <ul className="list-disc list-inside pl-2">
                                    <li>Fissurations digitales</li>
                                    <li>Œdème digital inexpliqué</li>
                                    <li>Arthrite inflammatoire</li>
                                    <li>Télangiectasies palmaires</li>
                                    <li>Phénomène de Raynaud</li>
                                    <li>Signe de Gottron</li>
                                </ul>
                            </div>
                            <div className="bg-white p-2 rounded border">
                                <h6 className="font-semibold">Domaine Sérologique</h6>
                                <ul className="list-disc list-inside pl-2">
                                    <li>AAN ≥1:320 (ou nucléolaire/centromère)</li>
                                    <li>FR {'>'} 2x LSN</li>
                                    <li>Anti-CCP, anti-ADNdb, anti-Ro, anti-La</li>
                                    <li>Anti-RNP, anti-Smith, anti-Scl-70</li>
                                    <li>Anti-synthétase (Jo-1...), anti-MDA5</li>
                                </ul>
                            </div>
                            <div className="bg-white p-2 rounded border">
                                <h6 className="font-semibold">Domaine Morphologique</h6>
                                <ul className="list-disc list-inside pl-2">
                                    <li>Pattern PINS (ou autre PII) à la TDM ou biopsie</li>
                                    <li>Atteinte multi-compartiments (plèvre, péricarde, voies aériennes, vasculaire)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t mt-4">
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">3. Autres Étiologies</h4>
                    <ul className="list-disc list-inside space-y-2 text-base">
                        <li>
                            <strong>Pneumopathie d'hypersensibilité (PHS) :</strong> Certaines formes chroniques sans granulomes bien formés peuvent mimer une PINS à la biopsie.
                        </li>
                        <li>
                            <strong>PINS d'origine médicamenteuse :</strong> De nombreux médicaments peuvent être en cause (Amiodarone, Méthotrexate, Statines, Nitrofurantoïne, etc.).
                        </li>
                        <li>
                            <strong>Infection par le VIH :</strong> Devenue rare depuis les thérapies antirétrovirales, mais reste une cause possible.
                        </li>
                        <li>
                            <strong>Causes diverses :</strong> Maladie systémique liée aux IgG4, pneumopathies interstitielles familiales, réaction du greffon contre l'hôte (GVH), et possiblement le tabagisme.
                        </li>
                    </ul>
                </div>
            </div>
        </Accordion>

        <Accordion title="Épidémiologie" icon={<Activity className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                <p>
                    La pneumopathie interstitielle non spécifique (PINS) est une maladie pulmonaire relativement rare, et sa prévalence n'est pas clairement établie. On estime qu'elle représente 14% à 36% des cas de pneumopathies interstitielles idiopathiques. La PINS est la deuxième pneumopathie interstitielle idiopathique la plus fréquente, après la pneumopathie interstitielle commune (PIC/FPI). Elle a tendance à toucher des patients plus jeunes (par exemple, &lt;50 ans) par rapport à la FPI. La plupart des patients atteints de PINS sont des femmes, et la majorité n'a pas d'antécédents de tabagisme.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Caractéristiques Épidémiologiques Clés</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                        <li><strong>Rareté :</strong> La PINS est une pathologie relativement rare.</li>
                        <li><strong>Deuxième PII la plus fréquente :</strong> C'est la deuxième PII la plus courante après la FPI.</li>
                        <li><strong>Âge d'apparition :</strong> Se manifeste généralement chez les adultes d'âge moyen (40-50 ans).</li>
                        <li><strong>Sexe :</strong> Plus fréquente chez les femmes, surtout en cas de connectivite associée.</li>
                        <li><strong>Tabagisme :</strong> La plupart des patients sont non-fumeurs.</li>
                        <li><strong>Association forte :</strong> Très souvent liée à une maladie du tissu conjonctif.</li>
                        <li><strong>Pronostic :</strong> Généralement meilleur que celui de la FPI.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-800 mt-4 mb-2">Autres Considérations Épidémiologiques</h4>
                    <div className="space-y-2 text-sm">
                        <div className="p-3 bg-slate-100 rounded-md border">
                            <strong>Variation Géographique :</strong> Il pourrait exister une prévalence plus élevée dans la population blanche européenne.
                        </div>
                        <div className="p-3 bg-slate-100 rounded-md border">
                            <strong>Conditions sous-jacentes :</strong> Peut être associée aux connectivites, PHS, ou à des toxicités médicamenteuses.
                        </div>
                        <div className="p-3 bg-slate-100 rounded-md border">
                            <strong>Idiopathique vs. Secondaire :</strong> La PINS peut être idiopathique (sans cause retrouvée) ou secondaire à une autre pathologie.
                        </div>
                    </div>
                </div>
                
                <p className="pt-4 border-t border-slate-200 italic text-slate-600">
                    En résumé, bien que la PINS ne soit pas une pathologie courante, elle constitue un sous-type important de pneumopathie interstitielle, notamment en raison de son association avec les maladies du tissu conjonctif et de son pronostic généralement meilleur par rapport à la FPI.
                </p>
            </div>
        </Accordion>

        <Accordion title="Physiopathologie et Histopathologie" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base">
                 <InfoCard title="Physiopathologie" icon={<Activity className="w-4 h-4 mr-2" />}>
                     <p>La physiopathologie implique des lésions épithéliales, une réparation dérégulée, une implication du système immunitaire (lymphocytes) et une fonction anormale des fibroblastes/myofibroblastes menant à un dépôt excessif de collagène.</p>
                </InfoCard>
                 <InfoCard title="Histopathologie" icon={<Stethoscope className="w-4 h-4 mr-2" />}>
                    <p>Le diagnostic histologique repose sur l'homogénéité temporelle du processus inflammatoire et fibrosant, contrairement à l'hétérogénéité de la FPI. On distingue trois sous-groupes :</p>
                    <ul className="list-decimal list-inside space-y-1 mt-2">
                        <li><strong>Groupe 1 :</strong> Inflammation prédominante.</li>
                        <li><strong>Groupe 2 :</strong> Inflammation et fibrose mixtes.</li>
                        <li><strong>Groupe 3 :</strong> Fibrose prédominante.</li>
                    </ul>
                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-2 text-sm">
                        Le gold standard pour le diagnostic est la biopsie chirurgicale (VATS ou thoracotomie). La cryobiopsie est une alternative.
                    </div>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="Présentation Clinique et Évaluation" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-8">
                <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Caractéristiques Cliniques</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ClinicalFeatureCard title="Profil Patient Typique" icon={<Users className="w-5 h-5"/>} color="blue">
                            <ul className="list-disc list-inside">
                                <li>Femme d'âge moyen (40-50 ans)</li>
                                <li>Non-fumeuse</li>
                                <li>Souvent associée à une connectivite</li>
                            </ul>
                        </ClinicalFeatureCard>
                        <ClinicalFeatureCard title="Symptômes" icon={<Stethoscope className="w-5 h-5"/>} color="purple">
                             <ul className="list-disc list-inside">
                                <li>Dyspnée et toux d'apparition subaiguë</li>
                                <li>Fièvre ou symptômes grippaux (1/3 des cas)</li>
                                <li>Signes extra-pulmonaires si connectivite</li>
                            </ul>
                        </ClinicalFeatureCard>
                        <ClinicalFeatureCard title="Examen Physique" icon={<HandHeart className="w-5 h-5"/>} color="teal">
                             <ul className="list-disc list-inside">
                                <li>Râles crépitants "velcro" aux bases</li>
                                <li>Hippocratisme digital (10-35%)</li>
                                <li>Rechercher stigmates de maladie rhumatismale</li>
                            </ul>
                        </ClinicalFeatureCard>
                    </div>
                </div>

                <div className="pt-8 border-t">
                     <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Démarche d'Évaluation</h4>
                     <div className="space-y-4">
                        <EvaluationStepCard number="1" title="Anamnèse Ciblée" icon={<History className="w-5 h-5"/>} color="blue">
                            <p>Une anamnèse détaillée est cruciale pour explorer les diagnostics différentiels :</p>
                            <ul className="list-disc list-inside text-sm">
                                <li><strong>Expositions :</strong> Antigènes organiques (oiseaux, moisissures), poussières minérales.</li>
                                <li><strong>Médicaments :</strong> Liste complète des traitements (actuels et passés).</li>
                                <li><strong>Connectivite :</strong> Symptômes extra-pulmonaires.</li>
                            </ul>
                        </EvaluationStepCard>
                        <EvaluationStepCard number="2" title="Bilan Biologique" icon={<FlaskConical className="w-5 h-5"/>} color="orange">
                             <p>Vise à exclure d'autres causes et à rechercher une auto-immunité sous-jacente.</p>
                             <ul className="list-disc list-inside text-sm">
                                <li><strong>Bilan de base :</strong> NFS, bilan hépatique et rénal.</li>
                                <li><strong>Bilan auto-immun :</strong> AAN, FR, anti-CCP systématiques. Panel étendu si suspicion.</li>
                                <li><strong>Autres :</strong> Précipitines (si suspicion de PHS), sérologie VIH si facteurs de risque.</li>
                            </ul>
                        </EvaluationStepCard>
                        <EvaluationStepCard number="3" title="Explorations Fonctionnelles (EFR)" icon={<Activity className="w-5 h-5"/>} color="green">
                            <p>Confirme le trouble ventilatoire restrictif et quantifie la sévérité de l'atteinte.</p>
                             <ul className="list-disc list-inside text-sm">
                                <li><strong>Profil typique :</strong> Baisse de la CVF et CPT, rapport VEMS/CVF normal/augmenté.</li>
                                <li><strong>DLCO :</strong> Baisse souvent précoce, marqueur de sévérité et de pronostic.</li>
                                <li><strong>TM6 :</strong> Recherche d'une désaturation à l'effort.</li>
                            </ul>
                        </EvaluationStepCard>
                         <EvaluationStepCard number="4" title="Lavage Broncho-Alvéolaire (LBA)" icon={<Lungs className="w-5 h-5"/>} color="indigo">
                             <p>Non spécifique pour le diagnostic de PINS, mais son rôle principal est d'exclure d'autres diagnostics.</p>
                             <ul className="list-disc list-inside text-sm">
                                <li><strong>Exclure :</strong> Infection, hémorragie alvéolaire, malignité.</li>
                                <li><strong>Orientation :</strong> Une lymphocytose élevée peut orienter vers une PHS ou une PINS, mais reste non spécifique.</li>
                            </ul>
                        </EvaluationStepCard>
                     </div>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Imagerie des PINS" icon={<Image className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Radiographie Thoracique</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Peut être normale aux stades précoces.</li>
                        <li>Opacités en verre dépoli ou mal définies, à prédominance basale.</li>
                        <li>Peut présenter un pattern réticulo-nodulaire, en plage, ou mixte.</li>
                        <li>Dans les formes avancées : infiltrats pulmonaires bilatéraux avec perte de volume des lobes inférieurs.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Tomodensitométrie (TDM-HR)</h4>
                    <p className="mb-3">
                        L'atteinte est typiquement symétrique, affectant l'interstitium péribronchovasculaire des lobes inférieurs. L'<strong className="text-blue-600">épargne sous-pleurale</strong> relative est un signe distinctif très utile lorsqu'il est présent. Le verre dépoli peut indiquer une PINS cellulaire ou une fibrose fine non visible au scanner. Il est essentiel de comparer avec les scanners antérieurs car le pattern PINS peut évoluer vers un pattern de PIC/UIP.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                            <h5 className="font-bold text-blue-800">Signes Fréquents</h5>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                                <li><strong>Opacités en verre dépoli :</strong> Souvent le signe dominant.</li>
                                <li><strong>Réticulations.</strong></li>
                                <li>Épaississement des axes bronchovasculaires.</li>
                                <li><strong>Bronchectasies de traction.</strong></li>
                                <li>Perte de volume pulmonaire (lobes inférieurs).</li>
                                <li>Rayons de miel microkystiques (rares).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                            <h5 className="font-bold text-amber-800">Signes Évoquant un Diagnostic Alternatif</h5>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                                <li>Nodules centrolobulaires.</li>
                                <li>Atténuation en mosaïque.</li>
                                <li>Kystes à parois fines.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Démarche Diagnostique" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6 text-base text-slate-700">
                <p>Le diagnostic de certitude de la PINS repose sur une analyse histopathologique, idéalement intégrée dans une discussion multidisciplinaire. Cependant, une biopsie n'est pas toujours nécessaire pour guider la prise en charge.</p>

                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                        <h4 className="font-semibold text-blue-800 flex items-center mb-2">
                            <Users className="w-5 h-5 mr-2"/>
                            1. Discussion Multidisciplinaire (DMD) : L'Étape Clé
                        </h4>
                        <p className="text-sm">Un diagnostic clinique confiant peut souvent être atteint grâce à la DMD, qui synthétise les données cliniques, sérologiques, radiologiques et d'exposition. C'est essentiel pour optimiser la précision diagnostique.</p>
                    </div>

                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                        <h4 className="font-semibold text-green-800 flex items-center mb-2">
                            <CheckCircle className="w-5 h-5 mr-2"/>
                            2. Scénarios où la biopsie peut être évitée
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Connectivite connue :</strong> Un tableau clinique et TDM typique de PINS ne nécessite généralement pas de biopsie.</li>
                            <li><strong>Suspicion de PINS médicamenteuse :</strong> Arrêt du médicament suspect et observation de la réponse.</li>
                            <li><strong>Suspicion de PHS :</strong> Évaluation par sérologies, LBA et test d'éviction avant d'envisager une biopsie.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                        <h4 className="font-semibold text-orange-800 flex items-center mb-2">
                            <Microscope className="w-5 h-5 mr-2"/>
                            3. La Biopsie Pulmonaire : Quand et Comment ?
                        </h4>
                        <p className="text-sm mb-2">Elle est discutée lorsque le diagnostic reste incertain après la DMD, en pesant les risques et bénéfices.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Gold standard :</strong> Biopsie chirurgicale (VATS).</li>
                            <li><strong>Alternative :</strong> La cryobiopsie transbronchique est une option dans les centres experts.</li>
                        </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
                        <h4 className="font-semibold text-purple-800 flex items-center mb-2">
                            <FileText className="w-5 h-5 mr-2"/>
                            4. L'Histopathologie : Ce qu'il faut chercher
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Homogénéité temporelle :</strong> Le critère majeur. L'atteinte inflammatoire et/ou fibrosante semble avoir le même "âge" partout.</li>
                            <li><strong>Architecture préservée :</strong> Contrairement à la FPI.</li>
                            <li><strong>Absence de signes d'autres PII :</strong> Pas de foyers fibroblastiques proéminents, pas de granulomes, etc.</li>
                            <li><strong>Types :</strong> PINS cellulaire (meilleur pronostic) vs PINS fibrosante.</li>
                        </ul>
                    </div>
                    
                    <div className="p-4 bg-slate-100 border-l-4 border-slate-500 rounded-lg">
                        <h4 className="font-semibold text-slate-800 flex items-center mb-2">
                            <ClipboardList className="w-5 h-5 mr-2"/>
                            5. Diagnostic Différentiel
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>PIC/FPI :</strong> La distinction est cruciale en raison des implications pronostiques et thérapeutiques.</li>
                            <li><strong>PHS chronique :</strong> Peut être histologiquement très proche.</li>
                            <li>Autres : Sarcoïdose, PID médicamenteuse, maladie liée aux IgG4.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Traitement et Prise en Charge" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <p>Le traitement dépend de la cause et de la sévérité.</p>
                <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                        <h4 className="font-semibold text-green-800">Maladie légère</h4>
                        <p className="mt-1">Surveillance rapprochée et observation peuvent être suffisantes.</p>
                    </div>
                     <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Maladie modérée à sévère</h4>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                           <li><strong>Corticoïdes systémiques (Prednisone) :</strong> 0.5 à 1 mg/kg/j (max 60mg/j) pour 1 mois, puis décroissance lente sur 6-12 mois.</li>
                           <li><strong>Agents immunosuppresseurs :</strong> Azathioprine ou Mycophenolate peuvent être ajoutés d'emblée dans les formes sévères, ou après 3-6 mois d'évaluation sous corticoïdes.</li>
                        </ul>
                    </div>
                     <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <h4 className="font-semibold text-red-800">Maladie sévère ou réfractaire</h4>
                         <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Hospitalisation :</strong> Peut nécessiter des bolus de méthylprednisolone (1g/j pendant 3 jours).</li>
                            <li><strong>Maladie réfractaire :</strong> Cyclophosphamide, Rituximab ou inhibiteurs de la calcineurine peuvent être envisagés.</li>
                            <li><strong>Transplantation pulmonaire :</strong> Option pour les patients non répondeurs.</li>
                        </ul>
                    </div>
                </div>
                 <div className="flex items-start bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-sm mt-4">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-blue-800">
                        Penser à une prophylaxie de la pneumocystose (PJP) pour les patients sous corticoïdes {'>'} 20mg/j pendant plus d'un mois, ou sous immunosuppresseurs multiples.
                    </p>
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default PINSSection;
