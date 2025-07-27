import React from 'react';
import { ClipboardPlus, Info, Search, Image, TrendingUp, Stethoscope, AlertTriangle } from './icons';
import { Accordion } from './Accordion';
import { ILADecisionTool } from './ILADecisionTool';

const InfoCard: React.FC<{
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'purple';
}> = ({ title, children, icon, color }) => {
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

export const ILASection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <ClipboardPlus className="w-7 h-7 mr-3 text-blue-500" />
        Anomalies Pulmonaires Interstitielles (ILA)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Découvertes fortuites en imagerie thoracique qui peuvent préfigurer une maladie pulmonaire interstitielle.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction</h3>
        <p className="text-slate-700 mb-4 text-base">
            Les anomalies pulmonaires interstitielles (ILA) sont des opacités interstitielles découvertes fortuitement sur des tomodensitométries (TDM) thoraciques réalisées pour d'autres indications (dépistage du cancer du poumon, bilan cardiaque, etc.) chez des individus sans suspicion de maladie pulmonaire interstitielle (PID).
        </p>
        <p className="text-slate-700 text-base">
            Bien qu'asymptomatiques pour la plupart des patients au moment de la découverte, les ILA sont associées à une augmentation de la mortalité toutes causes confondues, à un déclin de la fonction respiratoire et à un risque de progression vers une PID fibrosante cliniquement significative. Leur identification et leur gestion appropriée sont donc des enjeux cliniques croissants.
        </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
            <Info className="w-6 h-6 mr-3" />
            Points Clés
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            <li>Les ILA sont des <strong>découvertes radiologiques fortuites</strong>, pas une maladie en soi.</li>
            <li>Leur prévalence <strong>augmente avec l'âge et le tabagisme</strong>, atteignant 4 à 9% chez les fumeurs.</li>
            <li>Elles sont associées à une <strong>surmortalité</strong> et un risque de <strong>progression vers une fibrose pulmonaire</strong>.</li>
            <li>La présence de <strong>signes de fibrose</strong> (réticulations, bronchectasies de traction) est le principal facteur de risque de progression.</li>
            <li>La gestion repose sur une <strong>stratification du risque</strong>, une surveillance adaptée (clinique, EFR, TDM) et une discussion multidisciplinaire.</li>
        </ul>
    </div>

    <div className="space-y-4">
        <Accordion title="Définition et Prévalence" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <InfoCard title="Définition Radiologique (Fleischner Society)" icon={<Image className="w-5 h-5"/>} color="blue">
                    <p>Les ILA sont des anomalies non-dépendantes affectant <strong>plus de 5% d'une zone pulmonaire</strong>, incluant :</p>
                    <ul className="list-disc list-inside text-base mt-2">
                        <li>Opacités en verre dépoli</li>
                        <li>Réticulations</li>
                        <li>Kystes non emphysémateux</li>
                        <li>Bronchectasies de traction</li>
                        <li>Rayons de miel (honeycombing)</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Critères d'Exclusion" icon={<AlertTriangle className="w-5 h-5"/>} color="orange">
                    <p>Ne sont pas considérés comme des ILA :</p>
                     <ul className="list-disc list-inside text-base mt-2">
                        <li>Les anomalies dépendant de la position (atélectasies déclives).</li>
                        <li>Les nodules centrolobulaires diffus seuls.</li>
                        <li>Les modifications liées à la fibrose péri-fissurale ou adjacente à des ostéophytes.</li>
                        <li>Les anomalies focales ou unilatérales.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Prévalence" icon={<TrendingUp className="w-5 h-5"/>} color="green">
                     <ul className="list-disc list-inside text-base">
                        <li>Varie de <strong>4% à 9%</strong> chez les fumeurs.</li>
                        <li>De <strong>2% à 7%</strong> chez les non-fumeurs.</li>
                        <li>Augmente significativement avec l'âge (jusqu'à 7% dans la population générale de plus de 75 ans).</li>
                    </ul>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="Sous-types et Aspects Radiologiques" icon={<Image className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <p>La classification des ILA en sous-types est cruciale car elle a des implications pronostiques majeures.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
                        <h4 className="font-semibold text-green-800">ILA non-fibrosantes</h4>
                        <ul className="list-disc list-inside mt-2 text-base">
                            <li>Se manifestent principalement par des <strong>opacités en verre dépoli</strong>.</li>
                            <li>Sont associées à un risque de progression plus faible.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
                        <h4 className="font-semibold text-red-800">ILA fibrosantes</h4>
                        <ul className="list-disc list-inside mt-2 text-base">
                            <li>Définies par la présence de <strong>réticulations</strong>, <strong>bronchectasies/bronchiolectasies de traction</strong>, ou de <strong>rayons de miel</strong>.</li>
                            <li>Associées à un risque de progression et de mortalité significativement plus élevé.</li>
                            <li>La distribution est souvent <strong>sous-pleurale et basale</strong>, mimant un pattern de PIC/UIP.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Progression et Pronostic" icon={<TrendingUp className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                 <p>Les ILA ne sont pas des anomalies bénignes. Elles sont associées à un pronostic plus défavorable que l'absence de telles anomalies.</p>
                 <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Mortalité :</strong> Les ILA sont un facteur de risque indépendant de mortalité toutes causes confondues (Hazard Ratio ~1.3-1.5). Le risque est plus élevé pour les ILA fibrosantes.</li>
                    <li><strong>Progression :</strong> Environ 20% des ILA progressent sur 2 ans, et jusqu'à 40% sur 5 ans. La progression est définie par une augmentation de l'étendue des anomalies au scanner ou un déclin de la fonction respiratoire.</li>
                    <li><strong>Déclin fonctionnel :</strong> Les patients avec ILA ont un déclin accéléré de la fonction pulmonaire (CVF) par rapport aux témoins.</li>
                    <li><strong>Facteurs de risque de progression :</strong> Les plus importants sont la présence de <strong>signes de fibrose</strong> (surtout les bronchectasies de traction) et une <strong>distribution sous-pleurale</strong>.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Prise en Charge et Suivi" icon={<Stethoscope className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4 text-base text-slate-700">
                <p>Il n'existe pas encore de consensus international formalisé. La prise en charge doit être individualisée après une discussion multidisciplinaire.</p>
                 <div className="space-y-3">
                     <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800">Évaluation Initiale</h4>
                        <ul className="list-disc list-inside mt-1 text-base">
                            <li>Confirmer qu'il s'agit bien d'ILA (relecture par un radiologue thoracique expérimenté).</li>
                            <li>Rechercher des causes potentielles (anamnèse d'exposition, signes de connectivite).</li>
                            <li>Réaliser des EFR complètes (avec DLCO) et un test de marche de 6 minutes.</li>
                        </ul>
                     </div>
                     <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                        <h4 className="font-semibold text-orange-800">Stratégie de Suivi (proposée)</h4>
                         <ul className="list-disc list-inside mt-1 text-base">
                            <li><strong>ILA non-fibrosantes :</strong> Si les EFR sont normales, un suivi clinique simple peut être envisagé. Une TDM de contrôle à 24-36 mois peut être discutée.</li>
                             <li><strong>ILA fibrosantes :</strong> Un suivi plus rapproché est nécessaire. Proposer une TDM et des EFR à 12 mois, puis adapter le rythme (annuel ou bisannuel) en fonction de l'évolution.</li>
                        </ul>
                     </div>
                     <div className="p-3 bg-green-50 border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800">Mesures Générales</h4>
                         <ul className="list-disc list-inside mt-1 text-base">
                            <li><strong>Arrêt du tabac</strong> impératif.</li>
                            <li>Éducation du patient sur les symptômes d'alerte (dyspnée, toux).</li>
                            <li>Vaccinations (grippe, pneumocoque).</li>
                        </ul>
                     </div>
                 </div>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-base text-red-800">
                    <p><strong className="font-semibold">Traitement :</strong> Actuellement, aucun traitement pharmacologique n'est recommandé pour les ILA elles-mêmes. Les traitements antifibrosants sont réservés aux patients qui progressent vers une PID fibrosante avérée avec un phénotype progressif.</p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Outil d'aide à la décision pour les ILA" icon={<AlertTriangle className="w-5 h-5 text-white" />} variant="danger">
            <div className="p-2 md:p-4">
                <ILADecisionTool />
            </div>
        </Accordion>
    </div>
  </div>
);

export default ILASection;