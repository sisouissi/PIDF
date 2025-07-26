
import React from 'react';
import { TrendingUp, Stethoscope, Activity, Image, Heart, Info, AlertTriangle, CheckCircle, Clock, FlaskConical, Lungs, Bug } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; color: 'blue' | 'green' | 'orange' | 'purple' | 'red'; children: React.ReactNode; }> = ({ title, icon, color, children }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
        red: 'border-red-500 bg-red-50 text-red-800',
    };
    
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]} h-full`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};


export const SuiviPronosticSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <TrendingUp className="w-7 h-7 mr-3 text-blue-500" />
        Suivi, Pronostic et Complications
      </h2>
       <p className="text-slate-600 mt-2 text-base">
        Anticiper l'évolution, dépister les complications et adapter la stratégie thérapeutique.
      </p>
    </div>

    <div className="space-y-4">
        <Accordion title="1. Suivi des Fibroses Pulmonaires" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Le suivi régulier des patients est fondamental pour évaluer l’évolution, surveiller l’efficacité des traitements et dépister les complications.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Examen Clinique Régulier" icon={<Stethoscope className="w-5 h-5"/>} color="blue">
                        <ul className="list-disc list-inside text-sm">
                            <li>Suivi des symptômes (dyspnée, toux, asthénie).</li>
                            <li>Recherche de signes d'insuffisance respiratoire ou d'aggravation.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Épreuves Fonctionnelles Respiratoires (EFR)" icon={<Activity className="w-5 h-5"/>} color="green">
                         <ul className="list-disc list-inside text-sm">
                            <li><strong>CVF :</strong> marqueur clé de progression.</li>
                            <li><strong>DLCO :</strong> diminue en cas d’aggravation.</li>
                            <li>Gaz du sang ou oxymétrie au repos et à l'effort (TM6).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Scanner Thoracique (HRCT)" icon={<Image className="w-5 h-5"/>} color="purple">
                        <ul className="list-disc list-inside text-sm">
                           <li>Surveillance de l’extension et du pattern de la fibrose.</li>
                           <li>Détection de complications (cancer, infection).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Biologie" icon={<FlaskConical className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside text-sm">
                           <li>Dépistage de complications (infections).</li>
                           <li>Surveillance de la tolérance des traitements (bilan hépatique).</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="2. Pronostic" icon={<Clock className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                 <p>Le pronostic est variable et dépend de l'étiologie, du pattern radiologique, de la rapidité d'évolution et de la réponse au traitement.</p>
                 <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2"/>Facteurs de Mauvais Pronostic</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                        <li>Déclin rapide de la fonction respiratoire (baisse de la CVF supérieure à 10% sur 6-12 mois).</li>
                        <li>Extension de la fibrose au scanner, notamment l'aspect en <strong>rayon de miel</strong>.</li>
                        <li>Âge avancé (supérieur à 65 ans) et comorbidités (HTP, cancer, etc.).</li>
                        <li>Hypoxémie sévère (désaturation inférieure à 88% à l'effort ou au repos).</li>
                        <li>Non-réponse ou intolérance aux traitements.</li>
                    </ul>
                 </div>
                 <p className="italic text-sm">La survie à 5 ans est très variable : mauvaise dans la FPI (environ 20%), meilleure dans les DIP/BIP. Les autres formes dépendent de la cause et de l'accès à des traitements adaptés.</p>
            </div>
        </Accordion>

        <Accordion title="3. Complications" icon={<AlertTriangle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard title="Insuffisance Respiratoire Chronique" icon={<Lungs className="w-5 h-5"/>} color="blue">
                        <p className="text-sm">La complication la plus fréquente, nécessitant oxygénothérapie ou ventilation non invasive.</p>
                    </InfoCard>
                    <InfoCard title="Hypertension Pulmonaire (HTP)" icon={<Heart className="w-5 h-5"/>} color="red">
                        <p className="text-sm">Fréquente dans l'évolution, aggrave la dyspnée et augmente la mortalité.</p>
                    </InfoCard>
                     <InfoCard title="Infections" icon={<Bug className="w-5 h-5"/>} color="orange">
                        <p className="text-sm">Surinfection bactérienne ou virale, favorisée par l'altération du parenchyme et les immunosuppresseurs.</p>
                    </InfoCard>
                    <InfoCard title="Pneumothorax Spontané" icon={<Lungs className="w-5 h-5"/>} color="purple">
                        <p className="text-sm">Dû à la rupture de kystes ou de zones en rayon de miel.</p>
                    </InfoCard>
                    <InfoCard title="Cancer Bronchopulmonaire" icon={<AlertTriangle className="w-5 h-5"/>} color="red">
                        <p className="text-sm">Sur-risque de cancer primitif du poumon, surtout sur poumon fibrosant.</p>
                    </InfoCard>
                     <InfoCard title="Complications Cardiaques" icon={<Heart className="w-5 h-5"/>} color="red">
                        <p className="text-sm">Insuffisance cardiaque droite (cœur pulmonaire chronique), troubles du rythme.</p>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
    </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
      <h3 className="text-xl font-semibold text-slate-800 mb-2 flex items-center">
        <Info className="w-6 h-6 mr-3" />
        Points Clés
      </h3>
      <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
        <li>Un <strong>suivi multidisciplinaire rapproché</strong> permet une adaptation du traitement et une détection précoce des complications.</li>
        <li>Le pronostic dépend du type de fibrose, du <strong>rythme de progression</strong>, et des complications surajoutées.</li>
        <li>Les complications sont fréquentes et justifient une <strong>anticipation</strong> et une prise en charge spécifique (insuffisance respiratoire, HTP, risque infectieux).</li>
        <li>La prise en charge globale repose sur la surveillance, la prévention, la gestion des complications et un <strong>accompagnement pluridisciplinaire</strong>.</li>
      </ul>
    </div>
  </div>
);

export default SuiviPronosticSection;