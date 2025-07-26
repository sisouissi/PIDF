import React from 'react';
import { Wind, Info, Bug, Stethoscope, Search, Image, Lungs, Microscope, Activity, FlaskConical, History, FileText, TrendingUp, Pill, HandHeart } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  icon: React.ReactNode; 
  color: 'blue' | 'green' | 'orange' | 'purple' 
}> = ({ title, children, icon, color }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
    };
    
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]} overflow-hidden`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]} break-words`}>
                <span className="flex-shrink-0">{icon}</span>
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base break-words">{children}</div>
        </div>
    );
};

export const PHSSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Wind className="w-7 h-7 mr-3 text-blue-500" />
        Pneumopathies d'hypersensibilité (PHS)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Une maladie immuno-médiée complexe résultant d'une exposition à un large éventail d'antigènes inhalés.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction</h3>
        <p className="text-slate-700 mb-4 text-base">
            La pneumopathie d'hypersensibilité (PHS) est une maladie pulmonaire interstitielle diffuse (PID) qui survient chez des individus susceptibles après une exposition répétée à un ou plusieurs antigènes inhalés. Historiquement classée en formes aiguë, subaiguë et chronique, la compréhension moderne a évolué. En raison du manque de consensus et des difficultés diagnostiques, les sociétés savantes (ATS/JRS/ALAT) ont récemment proposé des lignes directrices pour standardiser l'approche.
        </p>
        <p className="text-slate-700 text-base">
            La PHS fibrosante chronique peut être difficile à distinguer de la FPI, soulignant l'importance d'une anamnèse minutieuse et d'une approche diagnostique multidisciplinaire pour identifier l'antigène causal, ce qui est crucial pour le pronostic.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h4 className="text-base font-semibold text-blue-800 mb-2 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Points Clés (ATS/JRS/ALAT 2020)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li>La PHS est maintenant classée en deux phénotypes : <strong>PHS non-fibrosante</strong> (principalement inflammatoire) et <strong>PHS fibrosante</strong>.</li>
                <li>Le diagnostic est intégratif et repose sur une combinaison de trois piliers :
                    <ol className="list-decimal list-inside pl-6 mt-1 text-sm">
                        <li><strong>Exposition</strong> à un antigène compatible (anamnèse, IgGs spécifiques).</li>
                        <li><strong>Imagerie TDM-HR</strong> typique.</li>
                        <li><strong>Lymphocytose</strong> au Lavage Broncho-Alvéolaire (LBA).</li>
                    </ol>
                </li>
                <li>La <strong>Discussion Multidisciplinaire (DMD)</strong> est essentielle pour établir un diagnostic confiant.</li>
                <li>L'<strong>éviction de l'antigène</strong> est la pierre angulaire du traitement, lorsque c'est possible.</li>
            </ul>
        </div>
    </div>
    
    <div className="space-y-4">
        <Accordion title="Agents Causals et Sources d'Exposition" icon={<Bug className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Des centaines d'antigènes peuvent causer une PHS. Voici les plus courants :</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <InfoCard title="Moisissures et Champignons" icon={<Bug className="w-5 h-5"/>} color="green">
                        <ul className="list-disc list-inside">
                            <li><strong>Poumon de fermier :</strong> Actinomycètes thermophiles dans le foin moisi.</li>
                            <li><strong>Poumon des climatiseurs/humidificateurs :</strong> Contamination par des moisissures.</li>
                            <li><strong>Subérose :</strong> Poussière de liège moisi.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Protéines Aviaires" icon={<Bug className="w-5 h-5"/>} color="blue">
                        <ul className="list-disc list-inside">
                            <li><strong>Maladie des éleveurs d'oiseaux :</strong> Exposition aux déjections, sérum et plumes de pigeons, perruches, canaris, etc.</li>
                            <li><strong>Poumon des duvets :</strong> Antigènes dans les oreillers et couettes en plumes.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Bactéries" icon={<Bug className="w-5 h-5"/>} color="purple">
                         <ul className="list-disc list-inside">
                            <li><strong>Poumon des bains à remous (Hot tub lung) :</strong> Exposition aux aérosols de <i>Mycobacterium avium complex</i>.</li>
                            <li><strong>Poumon des travailleurs de scierie :</strong> Contamination bactérienne du bois.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Agents Chimiques" icon={<Bug className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside">
                            <li><strong>Poumon des peintres :</strong> Exposition aux isocyanates dans les peintures et mousses de polyuréthane.</li>
                            <li><strong>Fluides d'usinage contaminés.</strong></li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="Manifestations Cliniques" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg overflow-hidden">
                    <h4 className="font-semibold text-orange-800 text-lg mb-2 break-words">PHS Non-Fibrosante</h4>
                    <div className="space-y-3 text-base text-slate-700">
                        <div>
                            <h5 className="font-medium break-words">Symptômes</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li className="break-words">Apparition subaiguë (jours/semaines) après exposition : toux, dyspnée.</li>
                                <li className="break-words">Syndrome pseudo-grippal fréquent : fièvre, frissons, malaise, perte de poids.</li>
                                <li className="break-words">Parfois oppression thoracique.</li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-medium break-words">Examen Physique</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li className="break-words">Crépitants fins bilatéraux.</li>
                                <li className="break-words">"Piaulements" ou "squeaks" mi-inspiratoires très caractéristiques.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg overflow-hidden">
                    <h4 className="font-semibold text-red-800 text-lg mb-2 break-words">PHS Fibrosante</h4>
                    <div className="space-y-3 text-base text-slate-700">
                        <div>
                            <h5 className="font-medium break-words">Symptômes</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li className="break-words">Dyspnée d'effort et toux sèche d'installation insidieuse et progressive.</li>
                                <li className="break-words">Le lien temporel avec l'exposition est souvent absent ou difficile à établir.</li>
                                <li className="break-words">Perte de poids et fatigue possibles.</li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-medium break-words">Examen Physique</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li className="break-words">Crépitants de type "velcro", similaires à la FPI.</li>
                                <li className="break-words">Hippocratisme digital possible dans les formes avancées.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Évaluation Initiale" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6">
                <div className="p-4 bg-slate-100 border border-slate-300 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">Objectifs principaux de l'évaluation</h4>
                    <ul className="list-disc list-inside space-y-1 text-base text-slate-700">
                        <li>Identifier les <strong>expositions potentielles</strong>.</li>
                        <li>Déterminer la <strong>sévérité</strong> de l'atteinte respiratoire.</li>
                        <li>Identifier les <strong>caractéristiques typiques</strong> à l'imagerie et au LBA.</li>
                        <li>Guider la décision en <strong>discussion multidisciplinaire</strong>.</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="md:col-span-1 space-y-4">
                        <InfoCard title="1. Anamnèse d'exposition détaillée" icon={<History className="w-5 h-5"/>} color="blue">
                            <p>C'est l'<strong>étape cruciale</strong>. Interrogatoire systématique sur les expositions potentielles (domestiques, professionnelles, loisirs). L'antigène n'est pas identifié dans près de 60% des cas.</p>
                        </InfoCard>
                   </div>
                   <div className="md:col-span-1 space-y-4">
                        <InfoCard title="2. Bilan Biologique" icon={<FlaskConical className="w-5 h-5"/>} color="purple">
                            <p><strong>Sérologies (IgG spécifiques) :</strong> Leur positivité prouve une exposition, pas la maladie. Leur utilité est controversée en raison de nombreux faux positifs et négatifs.</p>
                        </InfoCard>
                         <InfoCard title="3. Explorations Fonctionnelles Respiratoires (EFR)" icon={<Activity className="w-5 h-5"/>} color="green">
                           <p>Profil typiquement <strong>restrictif</strong>, mais peut être obstructif ou mixte. La <strong>baisse de la DLCO</strong> est quasi constante. Le TM6 recherche une désaturation à l'effort.</p>
                        </InfoCard>
                   </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Évaluation Secondaire" icon={<Microscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6">
                <p className="text-slate-700 text-base">
                    Lorsque l'évaluation initiale ne permet pas d'établir un diagnostic confiant de PHS, des examens complémentaires peuvent être nécessaires. La décision est prise au cas par cas, idéalement après discussion multidisciplinaire.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoCard title="1. Lavage Broncho-Alvéolaire (LBA)" icon={<Lungs className="w-5 h-5"/>} color="blue">
                        <p><strong>Rôle :</strong> Outil le plus sensible pour détecter une alvéolite, mais non spécifique.</p>
                        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li><strong>Résultat clé :</strong> Une <strong>lymphocytose marquée</strong> (souvent {'>'} 30-40%) est un argument diagnostique majeur.</li>
                            <li><strong>Limites :</strong> Peut être normale dans les formes fibrosantes chroniques ou chez les fumeurs (seuil {'>'} 20%). Peut se voir dans d'autres PID.</li>
                            <li><strong>Utilité principale :</strong> Très utile pour différencier une PID fibrosante indéterminée (ex: suspicion de FPI vs PHS fibrosante).</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="2. Biopsie Pulmonaire" icon={<Microscope className="w-5 h-5"/>} color="orange">
                        <p><strong>Objectif :</strong> Obtenir une preuve histologique lorsque le diagnostic est incertain.</p>
                        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li><strong>Biopsies transbronchiques (BTTB) :</strong> Rendement faible (11-40%), souvent insuffisant pour un diagnostic de certitude. Un résultat négatif n'exclut pas la PHS.</li>
                            <li><strong>Cryobiopsie transbronchique (Cryo-TBB) :</strong> Échantillons plus grands. Précision diagnostique proche de la biopsie chirurgicale dans les centres experts, mais données limitées dans la PHS. Risques de pneumothorax et saignement.</li>
                            <li><strong>Biopsie pulmonaire chirurgicale (VATS) :</strong> Le gold standard lorsque l'histologie est nécessaire, permettant des prélèvements de grande taille dans plusieurs lobes.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="3. Histopathologie" icon={<FileText className="w-5 h-5"/>} color="purple">
                         <div className="space-y-2">
                            <div>
                                <h5 className="font-semibold text-purple-700">PHS Non-Fibrosante (Triade classique)</h5>
                                <ul className="list-disc list-inside text-sm">
                                    <li>Pneumopathie interstitielle cellulaire, à prédominance lymphocytaire et bronchiolocentrique.</li>
                                    <li>Bronchiolite cellulaire chronique.</li>
                                    <li>Granulomes épithélioïdes mal formés, non nécrosants.</li>
                                </ul>
                            </div>
                             <div>
                                <h5 className="font-semibold text-purple-700">PHS Fibrosante</h5>
                                <ul className="list-disc list-inside text-sm">
                                   <li>Peut mimer un pattern de PIC/UIP ou de PINS fibrosante.</li>
                                   <li>La présence de signes évocateurs (inflammation lymphocytaire péribronchiolaire, granulomes isolés) est la clé du diagnostic.</li>
                                </ul>
                            </div>
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="4. Test de Provocation par Inhalation" icon={<Wind className="w-5 h-5"/>} color="green">
                        <p><strong>Principe :</strong> Ré-exposer le patient à l'antigène suspecté en milieu contrôlé pour confirmer le lien de causalité.</p>
                         <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li><strong>Indication :</strong> Réservé aux cas où le diagnostic reste incertain et où l'identification de l'agent causal est cruciale (ex: maintien au poste de travail).</li>
                            <li><strong>Limites :</strong> Non standardisé, risque d'induire une réaction sévère, réalisé uniquement dans des centres très spécialisés.</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="Suivi et Pronostic des PHS" icon={<TrendingUp className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6">
                <InfoCard title="Suivi Régulier" icon={<Stethoscope className="w-5 h-5"/>} color="blue">
                    <p className="break-words">Un suivi régulier et structuré est fondamental pour évaluer la progression de la maladie, l'efficacité du traitement et dépister les complications.</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li className="break-words"><strong>Évaluation clinique :</strong> Revue régulière des symptômes (dyspnée, toux) et de l'exposition.</li>
                        <li className="break-words"><strong>Épreuves Fonctionnelles Respiratoires (EFR) :</strong> CVF et DLCO tous les 3 à 6 mois pour détecter un déclin.</li>
                        <li className="break-words"><strong>Imagerie (TDM-HR) :</strong> Répétée au besoin en cas de progression clinique ou fonctionnelle pour réévaluer l'étendue de la fibrose.</li>
                    </ul>
                </InfoCard>
        
                <div className="p-4 rounded-lg border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold flex items-center mb-2 text-purple-800">
                        <TrendingUp className="w-5 h-5 flex-shrink-0" />
                        <span className="ml-2 break-words">Facteurs Pronostiques</span>
                    </h4>
                    <p className="text-slate-700 text-base break-words">Le pronostic de la PHS est très variable et dépend principalement de la présence de fibrose et de la possibilité d'éviter l'antigène.</p>
                    <div className="mt-4 space-y-4">
                        <div className="p-3 bg-white border border-green-300 rounded-md shadow-sm overflow-hidden">
                            <h5 className="font-semibold text-green-800 break-words">Bon Pronostic (PHS non-fibrosante)</h5>
                            <ul className="list-disc list-inside text-sm mt-1 text-slate-700 space-y-1">
                                <li className="break-words">Absence de fibrose à la TDM.</li>
                                <li className="break-words">Éviction complète de l'antigène causal.</li>
                                <li className="break-words">Stabilisation ou récupération de la fonction respiratoire.</li>
                            </ul>
                        </div>
                        <div className="p-3 bg-white border border-red-300 rounded-md shadow-sm overflow-hidden">
                            <h5 className="font-semibold text-red-800 break-words">Mauvais Pronostic (PHS fibrosante)</h5>
                            <ul className="list-disc list-inside text-sm mt-1 text-slate-700 space-y-1">
                                <li className="break-words">Présence et étendue de la fibrose (pattern UIP-like).</li>
                                <li className="break-words">Incapacité à identifier/éviter l'antigène.</li>
                                <li className="break-words">Âge avancé, sexe masculin, tabagisme.</li>
                                <li className="break-words">CVF et DLCO de base basses.</li>
                                <li className="break-words">Déclin continu de la fonction respiratoire (phénotype FPP).</li>
                                <li className="break-words">Faible lymphocytose au LBA.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-xs italic text-slate-500 mt-4 pt-3 border-t border-purple-200 break-words">Les exacerbations aiguës peuvent survenir et sont associées à une mortalité élevée.</p>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Prise en Charge des PHS" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6">
                <InfoCard title="1. Éviction de l'Antigène" icon={<Wind className="w-5 h-5"/>} color="orange">
                    <p className="break-words"><strong>C'est la pierre angulaire du traitement.</strong> L'identification et l'élimination de l'antigène causal sont critiques pour améliorer le pronostic.</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li className="break-words">L'intervention d'un hygiéniste du travail ou de l'environnement peut être nécessaire.</li>
                        <li className="break-words">Même si l'éviction est partielle, elle reste bénéfique.</li>
                    </ul>
                </InfoCard>
                
                <div className="p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 overflow-hidden">
                    <h4 className="font-semibold flex items-center mb-2 text-blue-800">
                        <Pill className="w-5 h-5 flex-shrink-0" />
                        <span className="ml-2 break-words">2. Approche Pharmacologique (selon le phénotype)</span>
                    </h4>
                    <p className="text-slate-700 text-base break-words">Il n'y a pas d'algorithme de traitement établi, l'approche dépend du phénotype et de la progression.</p>
                    <div className="mt-4 space-y-4">
                        <div className="p-3 bg-white border border-green-300 rounded-md shadow-sm overflow-hidden">
                            <h5 className="font-semibold text-green-800 break-words">PHS Non-Fibrosante</h5>
                            <ul className="list-disc list-inside text-sm mt-1 text-slate-700 space-y-1">
                                <li className="break-words">Si l'antigène est évité et que la fonction est peu altérée, une surveillance simple peut suffire.</li>
                                <li className="break-words"><strong>Corticostéroïdes (ex: Prednisone) :</strong> Envisagés si les symptômes sont sévères ou si la maladie progresse malgré l'éviction.</li>
                            </ul>
                        </div>
                        <div className="p-3 bg-white border border-red-300 rounded-md shadow-sm overflow-hidden">
                            <h5 className="font-semibold text-red-800 break-words">PHS Fibrosante</h5>
                            <ul className="list-disc list-inside text-sm mt-1 text-slate-700 space-y-1">
                                <li className="break-words"><strong>Immunosuppresseurs :</strong> Souvent utilisés (ex: Mycophénolate, Azathioprine), mais les preuves de leur efficacité à long terme sur la fibrose sont faibles.</li>
                                <li className="break-words"><strong>Traitements Antifibrotiques (Nintedanib) :</strong> Indiqués si la maladie évolue vers un <strong>phénotype fibrosant progressif (FPP)</strong>, malgré le traitement standard.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        
                <InfoCard title="3. Prise en Charge Non-Pharmacologique et de Support" icon={<HandHeart className="w-5 h-5"/>} color="purple">
                    <p className="break-words">Ces mesures sont essentielles, en particulier dans les formes fibrosantes.</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li className="break-words"><strong>Oxygénothérapie :</strong> Pour corriger l'hypoxémie de repos ou d'effort.</li>
                        <li className="break-words"><strong>Réhabilitation respiratoire :</strong> Pour améliorer la tolérance à l'effort et la qualité de vie.</li>
                        <li className="break-words"><strong>Vaccinations :</strong> Grippe, pneumocoque, COVID-19.</li>
                        <li className="break-words"><strong>Transplantation pulmonaire :</strong> À envisager précocement chez les patients avec une maladie progressive et sévère.</li>
                    </ul>
                </InfoCard>
            </div>
        </Accordion>
    </div>
  </div>
);

export default PHSSection;