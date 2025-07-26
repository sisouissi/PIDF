import React from 'react';
import { Lungs, Microscope, ListChecks, TrendingUp, AlertTriangle, Activity, FlaskConical, RotateCcw } from './icons';
import { Accordion } from './Accordion';

export const DefinitionSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    {/* Header */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Lungs className="w-7 h-7 mr-3 text-blue-500" />
        Définitions, pathogénie et Classification
      </h2>
      <p className="text-slate-600 mt-2">
        Les pneumopathies interstitielles diffuses (PID) fibrosantes regroupent un grand nombre de pathologies caractérisées par une infiltration de la paroi alvéolaire par des cellules inflammatoires et de la fibrose.
      </p>
    </div>

     {/* Epidemiology Card */}
     <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
        <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
        Épidémiologie et Facteurs de Risque
      </h3>
      <div className="grid md:grid-cols-2 gap-8 text-slate-600">
        <div>
            <h4 className="font-semibold text-slate-700 mb-2">Chiffres Clés</h4>
            <ul className="space-y-2 list-disc list-inside">
                <li>Bien que rare, l'incidence et la prévalence de la FPI sont en augmentation.</li>
                <li><strong>Prévalence :</strong> Jusqu'à 76 cas pour 100 000 en Europe.</li>
                <li><strong>Pronostic :</strong> Sans traitement, la survie médiane est de 3 à 5 ans après le diagnostic, comparable à certains cancers.</li>
            </ul>
        </div>
        <div>
            <h4 className="font-semibold text-slate-700 mb-2">Profil du Patient et Facteurs de Risque</h4>
            <ul className="space-y-2 list-disc list-inside">
                <li><strong>Âge :</strong> Affecte principalement les adultes de plus de 60 ans.</li>
                <li><strong>Sexe :</strong> Prédominance masculine (ratio H/F ≈ 7:3).</li>
                <li><strong>Tabagisme :</strong> Facteur de risque majeur, actuel ou passé.</li>
                <li><strong>Génétique :</strong> Des antécédents familiaux de fibrose pulmonaire sont un facteur de risque important.</li>
                <li><strong>Autres :</strong> Reflux gastro-œsophagien (RGO), expositions environnementales/professionnelles, infections virales chroniques.</li>
            </ul>
        </div>
      </div>
    </div>

    {/* Pathogenesis Card */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
        <Microscope className="w-6 h-6 mr-3 text-purple-500" />
        Comprendre la Pathogénie : Une Réparation Qui Déraille
      </h3>
      <p className="text-slate-600 mb-4">
        La vision moderne de la fibrose pulmonaire, en particulier la FPI, s'est éloignée du concept d'une maladie principalement inflammatoire. Elle est maintenant considérée comme une maladie épithéliale-dépendante, résultant d'un processus de réparation tissulaire anormal en réponse à des micro-agressions répétées des cellules épithéliales alvéolaires (AEC) chez un individu prédisposé.
      </p>
      
      <div className="mt-6 space-y-4">
          <h4 className="text-lg font-semibold text-slate-700 mb-2">Explorer la pathogénie en détail</h4>
          <Accordion title="Facteurs d'Initiation : Génétique et Environnement" icon={<AlertTriangle className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>La FPI est initiée par des agressions répétées sur un épithélium alvéolaire rendu vulnérable par une combinaison de facteurs :</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Prédisposition Génétique :</strong> Des variants génétiques augmentent le risque. Les plus importants incluent :
                          <ul className="list-['-_'] list-inside pl-6 mt-1 space-y-1">
                              <li><strong>Promoteur MUC5B :</strong> Le facteur de risque génétique le plus courant, associé à une production anormale de mucus.</li>
                              <li><strong>Protéines du Surfactant :</strong> Des mutations dans les gènes <i>SFTPC</i> et <i>SFTPA2</i> peuvent causer un mauvais repliement des protéines et un stress cellulaire.</li>
                              <li><strong>Gènes des Télomères :</strong> Des mutations dans <i>TERT</i> ou <i>TERC</i> entraînent un raccourcissement prématuré des télomères, conduisant à une sénescence cellulaire accélérée.</li>
                          </ul>
                      </li>
                      <li><strong>Facteurs Environnementaux et Endogènes :</strong>
                          <ul className="list-['-_'] list-inside pl-6 mt-1 space-y-1">
                              <li>Tabagisme (facteur de risque majeur)</li>
                              <li>Expositions professionnelles (poussières de métaux, bois)</li>
                              <li>Infections virales chroniques (ex: virus d'Epstein-Barr)</li>
                              <li>Micro-aspirations gastriques dues au reflux gastro-œsophagien (RGO)</li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </Accordion>
          <Accordion title="Le Rôle Controversé de l'Inflammation" icon={<Activity className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>Initialement considérée comme une maladie inflammatoire chronique, cette vision a évolué :</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Arguments contre un rôle central de l'inflammation :</strong> Les biopsies de FPI montrent peu d'inflammation, et les traitements anti-inflammatoires (comme les corticoïdes) sont inefficaces, voire délétères.</li>
                      <li><strong>Un rôle modulateur :</strong> L'inflammation n'est pas absente, mais elle n'est plus vue comme le moteur principal. Des cellules comme les macrophages alvéolaires peuvent sécréter des cytokines pro-fibrotiques et participer à la perpétuation du processus, mais la cascade fibrotique semble pouvoir s'auto-entretenir sans stimulation inflammatoire continue.</li>
                  </ul>
              </div>
          </Accordion>
          <Accordion title="Mécanismes Cellulaires et Moléculaires" icon={<FlaskConical className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>Au cœur de la FPI se trouve une communication anormale entre les cellules épithéliales et les fibroblastes :</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Réparation Épithéliale Anormale :</strong> Les cellules épithéliales alvéolaires de type II (AEC2), cellules souches de l'alvéole, sont incapables de se régénérer correctement. Elles deviennent sénescentes et libèrent des signaux pro-fibrotiques.</li>
                      <li><strong>Activation des Fibroblastes et Myofibroblastes :</strong> En réponse à ces signaux (notamment le TGF-β), les fibroblastes sont activés, prolifèrent et se différencient en myofibroblastes. Ces derniers sont les "usines" à collagène.</li>
                      <li><strong>Foyers Fibroblastiques (Fibroblastic Foci) :</strong> Il s'agit d'amas de myofibroblastes actifs qui sont le site principal de déposition de matrice extracellulaire. Ils représentent le "front" actif de la maladie et sont une caractéristique histologique de la FPI.</li>
                      <li><strong>Médiateurs Clés :</strong> La voie de signalisation du <strong>Transforming Growth Factor-beta (TGF-β)</strong> est le régulateur principal de ce processus, stimulant la production de collagène et la différenciation des myofibroblastes.</li>
                  </ul>
              </div>
          </Accordion>
          <Accordion title="Progression et Cercle Vicieux Auto-entretenu" icon={<RotateCcw className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>Une fois initiée, la fibrose devient un processus qui s'auto-entretient :</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Rigidification de la Matrice :</strong> La déposition excessive de collagène rend le tissu pulmonaire de plus en plus rigide.</li>
                      <li><strong>Stress Mécanique :</strong> Cette rigidité anormale exerce une tension mécanique sur les alvéoles saines restantes, causant de nouvelles lésions épithéliales.</li>
                      <li><strong>Perpétuation du Signal :</strong> Ces nouvelles lésions libèrent à leur tour des médiateurs pro-fibrotiques, activant encore plus de fibroblastes et créant un cercle vicieux. Ce mécanisme explique la nature progressive et inexorable de la maladie.</li>
                       <li><strong>Biomarqueurs de Progression :</strong> L'activité de ce processus peut être suivie par des biomarqueurs sanguins (ex: KL-6, MMP-7, SP-D) qui reflètent les lésions épithéliales et le remodelage tissulaire.</li>
                  </ul>
              </div>
          </Accordion>
      </div>
    </div>

    {/* Classification Card */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
        <ListChecks className="w-6 h-6 mr-3 text-teal-500" />
        Classification des Pneumopathies Interstitielles Diffuses (PID)
      </h3>
      <p className="text-slate-600 mb-4">
        Les PID sont classées en plusieurs grandes catégories en fonction de leur cause ou de leurs caractéristiques histologiques.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">PID de cause connue ou associée</h4>
          <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Associées aux connectivites (ex: polyarthrite rhumatoïde, sclérodermie)</li>
            <li>Pneumopathies d'hypersensibilité (PHS) dues à l'exposition à des antigènes organiques</li>
            <li>Pneumoconioses (exposition à des poussières minérales)</li>
            <li>Induites par des médicaments ou des traitements (irradiation)</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">Pneumonies Interstitielles Idiopathiques (PII)</h4>
          <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li><strong>Fibrose Pulmonaire Idiopathique (FPI) :</strong> la plus fréquente et la plus sévère.</li>
            <li>Pneumopathie Interstitielle Non Spécifique (PINS) idiopathique</li>
            <li>Pneumopathie organisée cryptogénique (COP)</li>
            <li>Et autres formes plus rares...</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">PID granulomateuses</h4>
           <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Sarcoïdose</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">Autres PID rares</h4>
           <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Lymphangioléiomyomatose (LAM)</li>
            <li>Histiocytose langerhansienne pulmonaire</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Progressive Fibrosing Phenotype Card */}
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
        <TrendingUp className="w-6 h-6 mr-3" />
        Le Phénotype Progressif Fibrosant (PPF)
      </h3>
      <p className="text-slate-600 mb-4">
        Indépendamment de leur diagnostic initial, une proportion de patients (13 à 40%) atteints de PID autres que la FPI peut développer un comportement évolutif similaire à celui de la FPI. C'est ce qu'on appelle le phénotype progressif fibrosant (PPF). Ce concept est crucial car il ouvre la voie à des traitements antifibrosants pour ces patients.
      </p>
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <h4 className="font-medium text-yellow-800 mb-2">Critères de définition du PPF (sur 24 mois, malgré traitement)</h4>
        <p className="text-sm text-yellow-700">Le patient doit présenter une progression de la fibrose et remplir au moins un des critères suivants :</p>
        <ul className="space-y-1 text-sm text-yellow-700 list-disc list-inside mt-2">
            <li><strong>Déclin fonctionnel :</strong> Baisse relative de la CVF supérieure ou égale à 10% de la valeur prédite.</li>
            <li><strong>Déclin fonctionnel et aggravation des symptômes/imagerie :</strong> Baisse relative de la CVF de 5-10% <strong>ET</strong> aggravation des symptômes respiratoires <strong>OU</strong> aggravation des images de fibrose au scanner.</li>
            <li><strong>Aggravation des symptômes et de l'imagerie :</strong> Aggravation des symptômes respiratoires <strong>ET</strong> aggravation significative des images de fibrose au scanner.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default DefinitionSection;