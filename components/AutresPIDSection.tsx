
import React from 'react';
import { ListChecks, TrendingUp, Search, Pill, Stethoscope, Info } from './icons';
import { Accordion } from './Accordion';

const TableRow: React.FC<{ header?: boolean; cells: string[]; }> = ({ header = false, cells }) => (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3 ${header ? 'bg-slate-100 font-bold text-slate-800' : 'border-t border-slate-200 text-slate-700'}`}>
        {cells.map((cell, index) => (
            <div key={index} className="text-base">
                <strong className="md:hidden font-semibold">{['Type de PID', 'Caractéristiques', 'Pronostic'][index]}: </strong>
                {cell}
            </div>
        ))}
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; color: 'blue' | 'green' | 'orange' | 'purple' }> = ({ title, children, icon, color }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]}`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};


export const AutresPIDSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <ListChecks className="w-7 h-7 mr-3 text-blue-500" />
        Autres PID Fibrosantes
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Cette section couvre les PID fibrosantes hors FPI, PINS, PHS, IPAF et PID associées aux connectivites.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Définition et Cadre Général</h3>
        <p className="text-slate-700 text-base">
            Les pneumopathies interstitielles diffuses (PID) fibrosantes qui ne rentrent pas dans les catégories les plus courantes (FPI, PINS, PHS, IPAF, connectivites) forment un groupe hétérogène. Leur point commun est une tendance à la fibrose progressive du parenchyme pulmonaire. L'identification d'une cause spécifique (exposition, maladie systémique rare) est un enjeu majeur.
        </p>
    </div>

    <div className="space-y-4">
        <Accordion title="Principales Entités" icon={<ListChecks className="w-5 h-5 text-white" />}>
            <div className="p-4">
                <p className="text-slate-600 mb-4 text-base">Le tableau suivant résume les caractéristiques des principales entités fibrosantes restantes.</p>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <TableRow header cells={['Type de PID', 'Caractéristiques principales', 'Aspects pronostiques']} />
                    <TableRow cells={['Pneumoconioses (asbestose, silicose, bérylliose)', 'Fibrose séquellaire d’expositions professionnelles prolongées (particules minérales, amiante, silice, etc.).', 'Progression variable ; risque de complications tumorales (cancer du poumon, mésothéliome).']} />
                    <TableRow cells={['Sarcoïdose fibrosante', '~10-20% des formes prolongées, prédominance de nodules, fibrose médiastino-hilaire, lésions diffuses.', 'Surmortalité liée à l’atteinte respiratoire et aux complications (HTP, infections, aspergillome).']} />
                    <TableRow cells={['PID inclassables', 'Cas indéterminés malgré évaluation complète : discordance clinico-radio-histologique ou absence de biopsie réelle.', 'Mortalité élevée si critère de fibrose extensive.']} />
                    <TableRow cells={['Pneumopathies du fumeur (DIP/BIP)', 'Lésions liées à l’exposition tabagique : DIP (pneumopathie interstitielle desquamative) et BIP (bronchiolite respiratoire avec PID).', 'Généralement meilleur pronostic, meilleure réponse aux corticostéroïdes et à l’arrêt du tabac.']} />
                    <TableRow cells={['Médicamenteuses/toxiques', 'Divers médicaments (amiodarone, méthotrexate…), radiations, gaz toxiques.', 'L’arrêt du toxique peut stabiliser la maladie ; parfois fibrose irréversible.']} />
                    <TableRow cells={['Histiocytose à cellules de Langerhans', 'Surtout chez les jeunes fumeurs, évolution de nodules à kystes puis fibrose.', 'Risque d’insuffisance respiratoire chronique ; possible stabilisation si sevrage tabagique.']} />
                    <TableRow cells={['LAM (Lymphangioléiomyomatose)', 'Maladie rare (surtout femmes), prolifération des cellules musculaires lisses, kystes pulmonaires diffus.', 'Evolution progressive, risque de pneumothorax et d’insuffisance respiratoire.']} />
                    <TableRow cells={['FEPP (Fibroélastose pleuro-parenchymateuse)', 'Fibrose sous-pleurale marquée, prédominance dans les lobes supérieurs.', 'Rare, évolution lentement progressive.']} />
                </div>
            </div>
        </Accordion>

        <Accordion title="Critères de Progression de la Fibrose" icon={<TrendingUp className="w-5 h-5 text-white" />}>
            <div className="p-4 text-slate-700 text-base">
                <p className="mb-3">La progression est définie par au moins un des critères suivants, malgré le traitement ou l'arrêt du facteur causal :</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Déclin de la capacité vitale forcée (CVF) <strong>supérieur à 10%</strong> sur un an.</li>
                    <li>Déclin de la CVF de <strong>5-10%</strong> sur un an, associé à une <strong>aggravation des symptômes</strong> ou à une <strong>extension radiologique</strong> de la fibrose.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Démarche Diagnostique" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <InfoCard title="Scanner thoracique HRCT" icon={<Search className="w-5 h-5"/>} color="blue">
                    <p>Examen clé pour déterminer le pattern de fibrose, sa distribution et rechercher des signes orientant vers une étiologie spécifique.</p>
                </InfoCard>
                <InfoCard title="Recherche de Causes" icon={<Search className="w-5 h-5"/>} color="orange">
                    <p>Anamnèse détaillée sur les expositions environnementales, professionnelles et médicamenteuses.</p>
                </InfoCard>
                <InfoCard title="Tests Spécifiques" icon={<Search className="w-5 h-5"/>} color="purple">
                    <p>En fonction de l'orientation : sérologies, dosage d'auto-anticorps, exploration de l'exposition (amiante, silice).</p>
                </InfoCard>
                <InfoCard title="Biopsie Pulmonaire" icon={<Search className="w-5 h-5"/>} color="green">
                    <p>Réservée aux cas où le diagnostic reste indéterminé ou discordant après l'évaluation non-invasive.</p>
                </InfoCard>
            </div>
        </Accordion>
        
        <Accordion title="Prise en Charge" icon={<Pill className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4">
                <InfoCard title="Arrêt de l'Exposition" icon={<Pill className="w-5 h-5"/>} color="blue">
                    <p>Étape primordiale et indispensable lorsqu'une cause toxique ou médicamenteuse est identifiée.</p>
                </InfoCard>
                <InfoCard title="Traitements Spécifiques" icon={<Pill className="w-5 h-5"/>} color="orange">
                    <p>Corticothérapie et/ou immunosuppresseurs peuvent être indiqués dans certaines entités comme la sarcoïdose ou la DIP.</p>
                </InfoCard>
                <InfoCard title="Traitements Anti-fibrosants" icon={<Pill className="w-5 h-5"/>} color="purple">
                    <p>De plus en plus proposés en cas de phénotype fibrosant progressif (notamment le nintédanib).</p>
                </InfoCard>
                 <InfoCard title="Mesures de Support" icon={<Pill className="w-5 h-5"/>} color="green">
                    <p>Oxygénothérapie, réhabilitation respiratoire et discussion de la transplantation pulmonaire pour les formes évoluées.</p>
                </InfoCard>
            </div>
        </Accordion>
        
        <Accordion title="Suivi" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 text-slate-700 text-base">
                <p>Le suivi est essentiel et doit être régulier. Il repose sur :</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>L'évaluation clinique des symptômes.</li>
                    <li>La surveillance de la fonction respiratoire par <strong>EFR</strong> (CVF, DLCO).</li>
                    <li>L'imagerie thoracique en cas d'évolution ou pour le dépistage de complications.</li>
                </ul>
                <p className="mt-3">Le traitement est adapté en fonction de l'évolution clinique et radiologique.</p>
            </div>
        </Accordion>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-500">
      <h3 className="text-xl font-semibold text-slate-800 mb-2 flex items-center">
        <Info className="w-6 h-6 mr-3" />
        Conclusion
      </h3>
      <p className="text-slate-700 text-base">
        En dehors des grandes entités, les PID fibrosantes représentent un défi diagnostique et thérapeutique. Le point commun est le risque de progression de la fibrose. L'identification d'une cause traitable est primordiale, et une prise en charge spécifique, souvent multidisciplinaire, est nécessaire pour ralentir la dégradation fonctionnelle respiratoire.
      </p>
    </div>

  </div>
);

export default AutresPIDSection;