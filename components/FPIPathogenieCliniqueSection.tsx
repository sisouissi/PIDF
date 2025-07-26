
import React from 'react';
import { Lungs, AlertTriangle, Stethoscope, FlaskConical, RotateCcw, Info, Image } from './icons';
import { Accordion } from './Accordion';

const InfoCard = ({ title, content }: { title: string, content: string[] }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-700 mb-2">{title}</h4>
        <ul className="text-base text-slate-600 list-disc list-inside space-y-1">
            {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

export const FPIPathogenieCliniqueSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Lungs className="w-7 h-7 mr-3 text-blue-500" />
        Pathogénie et manifestations cliniques
      </h2>
       <p className="text-slate-600 mt-2 text-base">
        Comprendre les mécanismes sous-jacents et les signes cliniques de la Fibrose Pulmonaire Idiopathique (FPI).
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            Notre compréhension de la FPI a radicalement évolué. Autrefois considérée comme une maladie inflammatoire chronique, elle est aujourd'hui reconnue comme une affection complexe liée à l'âge, résultant d'un processus de réparation tissulaire aberrant en réponse à des micro-agressions répétées chez des individus génétiquement prédisposés. Cette section explore les mécanismes complexes et les signes cliniques qui définissent la FPI.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Points Clés à Retenir</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>La FPI est une maladie de la <strong>réparation anormale</strong>, pas de l'inflammation primaire.</li>
                    <li>Elle touche un <strong>terrain prédisposé</strong> (génétique, vieillissement cellulaire).</li>
                    <li>Les manifestations cliniques sont souvent <strong>insidieuses</strong>, entraînant un retard diagnostique.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
      <Accordion title="Pathogénie de la FPI : Le Modèle Actuel" icon={<FlaskConical className="w-5 h-5 text-white" />}>
        <div className="p-4 space-y-4">
            <p className="text-slate-700 text-base">
                La FPI est désormais comprise comme le résultat d'un processus de réparation tissulaire aberrant suite à des micro-agressions répétées de l'épithélium alvéolaire chez un individu génétiquement prédisposé. Ce processus s'auto-entretient et mène à une fibrose progressive.
            </p>
            <div className="space-y-3">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 flex items-center mb-2">
                        1. Micro-agressions et Réparation Anormale
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                        <li><strong>Lésions Épithéliales Répétées :</strong> Des facteurs externes (tabac, polluants, virus) et internes (RGO) endommagent les cellules épithéliales alvéolaires (AEC).</li>
                        <li><strong>Sénescence et Dysfonction Épithéliale :</strong> Sur un terrain prédisposé (génétique MUC5B, télomères courts), les AEC de type II (cellules progénitrices) ne parviennent pas à régénérer un épithélium normal. Elles entrent en sénescence et sécrètent un phénotype sécrétoire pro-fibrotique (SASP).</li>
                        <li><strong>Stress Cellulaire :</strong> Le stress du réticulum endoplasmique et le dysfonctionnement mitochondrial au sein des AEC contribuent à l'apoptose et à la libération de médiateurs pro-fibrotiques.</li>
                    </ul>
                </div>
                 <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 flex items-center mb-2">
                        2. Activation Fibroblastique et Voies de Signalisation
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                        <li><strong>Activation des Fibroblastes :</strong> Les signaux des AEC sénescentes activent les fibroblastes qui se différencient en <strong>myofibroblastes</strong>, des cellules contractiles produisant massivement du collagène.</li>
                        <li><strong>Foyers Fibroblastiques (Fibroblastic Foci) :</strong> Ces myofibroblastes s'accumulent dans des "foyers fibroblastiques", sites actifs de la fibrogenèse et marqueurs histologiques de la FPI.</li>
                        <li><strong>Médiateurs Clés :</strong> La voie <strong>TGF-β</strong> est le régulateur central. D'autres voies comme les kinases (p38 MAPK, JNK, ERK5) et les signaux de développement (Wnt, Notch) sont aussi impliquées.</li>
                    </ul>
                </div>
                 <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <h4 className="font-semibold text-teal-800 flex items-center mb-2">
                        <RotateCcw className="w-5 h-5 mr-2"/>
                        3. Le Cercle Vicieux de la Fibrose
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                        <li><strong>Rigidification de la Matrice :</strong> La déposition excessive de matrice extracellulaire (MEC) rend le tissu pulmonaire de plus en plus rigide.</li>
                        <li><strong>Stress Mécanique :</strong> Cette rigidité anormale exerce une tension mécanique (traction) sur les alvéoles, causant de nouvelles lésions épithéliales. Les <strong>bronchectasies de traction</strong> sont un signe radiologique de ce phénomène.</li>
                        <li><strong>Auto-entretien :</strong> Ces nouvelles lésions libèrent des médiateurs pro-fibrotiques, activant encore plus de fibroblastes et créant un cercle vicieux inexorable.</li>
                    </ul>
                </div>
            </div>
        </div>
      </Accordion>

      <Accordion title="Manifestations Cliniques et Radiologiques" icon={<Stethoscope className="w-5 h-5 text-white" />}>
         <div className="p-4 space-y-4">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <InfoCard title="Profil Patient Typique" content={[
                     "Homme (plus de 70% des cas)",
                     "Âge supérieur à 60 ans",
                     "Ancien ou actuel fumeur"
                 ]}/>
                 <InfoCard title="Symptômes Cardinaux" content={[
                     "Dyspnée d'effort d'apparition insidieuse et progressive (plus de 6 mois)",
                     "Toux sèche, chronique et persistante (~85% des cas)",
                     "Fatigue, perte de poids dans les stades avancés"
                 ]}/>
                 <InfoCard title="Examen Physique" content={[
                     "Râles crépitants secs, fins, inspiratoires, aux deux bases : 'Velcro crackles' (plus de 80% des cas)",
                     "Hippocratisme digital (25-50% des cas), souvent tardif",
                     "Signes d'hypertension pulmonaire et d'insuffisance cardiaque droite dans les formes évoluées"
                 ]}/>
             </div>
             <div className="mt-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2 flex items-center"><Image className="w-5 h-5 mr-2" /> Signes Clés à la TDM-HR</h4>
                <p className="text-base text-slate-600">Le scanner thoracique est fondamental et révèle des signes caractéristiques :</p>
                <ul className="list-disc list-inside space-y-2 text-base text-slate-700 mt-2 pl-4">
                    <li><strong>Réticulations :</strong> Fines opacités linéaires entrecroisées, prédominant en sous-pleural et aux bases.</li>
                    <li><strong>Rayons de miel (Honeycombing) :</strong> Kystes aériques en couches, de taille similaire, signe pathognomonique de pattern UIP certain.</li>
                    <li><strong>Bronchectasies et bronchiolectasies de traction :</strong> Dilatation irrégulière des bronches et bronchioles, étirées par la fibrose environnante. C'est un signe majeur de fibrose et un <strong>facteur pronostique important</strong>.</li>
                </ul>
             </div>
        </div>
      </Accordion>
    </div>
  </div>
);

export default FPIPathogenieCliniqueSection;