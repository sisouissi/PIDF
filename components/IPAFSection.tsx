
import React from 'react';
import { BrainCircuit, Info, CheckCircle, AlertTriangle, Stethoscope, FlaskConical, Image, Search, Clock, Pill, ClipboardPlus } from './icons';
import { Accordion } from './Accordion';
import { IPAFClassifierTool } from './IPAFClassifierTool';

const CriteriaCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; color: 'blue' | 'purple' | 'teal' }> = ({ title, items, icon, color }) => {
    const colorClasses = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800' },
        teal: { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-800' },
    };

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color].border} ${colorClasses[color].bg} h-full`}>
            <h4 className={`font-semibold ${colorClasses[color].text} mb-2 flex items-center`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export const IPAFSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <BrainCircuit className="w-7 h-7 mr-3 text-blue-500" />
        PID avec manifestations auto-immunes (IPAF)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Une catégorie de recherche pour les patients à la frontière entre les PID idiopathiques et celles associées aux connectivites.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-base">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Pourquoi le concept d'IPAF a-t-il été proposé ?</h3>
        <p className="text-slate-700 mb-4">
            Une proportion non négligeable de patients atteints de PID présente des caractéristiques cliniques, sérologiques ou radiologiques qui évoquent une maladie auto-immune, sans pour autant remplir les critères stricts d'une connectivite définie (comme la polyarthrite rhumatoïde ou la sclérodermie).
        </p>
        <p className="text-slate-700 mb-4">
            Avant 2015, cette "zone grise" était décrite par une multitude de termes ("connectivite indifférenciée", "PID à dominante pulmonaire", etc.), ce qui freinait la recherche. Les critères de classification de l'IPAF ont été proposés par un groupe de travail ERS/ATS pour unifier la terminologie et stimuler la recherche sur ce groupe de patients.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h4 className="text-base font-semibold text-blue-800 mb-2 flex items-center"><Info className="w-5 h-5 mr-2" />Points Clés</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li>L'IPAF n'est <strong>pas un diagnostic</strong>, mais une <strong>catégorie de classification pour la recherche</strong>.</li>
                <li>Elle identifie les patients avec une PID qui ont des arguments pour une auto-immunité sous-jacente.</li>
                <li>L'objectif est d'étudier leur évolution, leur pronostic et leur réponse au traitement de manière standardisée.</li>
            </ul>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Critères de Classification (ERS/ATS 2015)" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700">
                <div className="p-4 bg-slate-100 rounded-lg border border-slate-300 text-center">
                    <p className="font-bold text-slate-800">La classification IPAF nécessite la présence d'une PID (prouvée par TDM ou biopsie) chez un patient sans autre cause identifiée et qui ne remplit pas les critères d'une connectivite définie, <strong>ET</strong> :</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">Au moins 1 critère dans au moins 2 des 3 domaines suivants</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <CriteriaCard 
                        title="Domaine Clinique"
                        icon={<Stethoscope className="w-5 h-5" />}
                        color="blue"
                        items={[
                            "Mains de mécanicien",
                            "Ulcérations digitales",
                            "Arthrite inflammatoire / raideur matinale ≥60 min",
                            "Télangiectasies palmaires",
                            "Phénomène de Raynaud",
                            "Œdème digital inexpliqué",
                            "Signe de Gottron"
                        ]}
                    />
                     <CriteriaCard 
                        title="Domaine Sérologique"
                        icon={<FlaskConical className="w-5 h-5" />}
                        color="purple"
                        items={[
                            "AAN ≥1:320 (diffus, moucheté, homogène)",
                            "AAN (tout titre, aspect nucléolé ou centromère)",
                            "Facteur Rhumatoïde ≥2x LSN",
                            "Anti-CCP, anti-ADNdb, anti-Ro, anti-La",
                            "Anti-RNP, anti-Smith",
                            "Anti-Scl-70, anti-synthétase, anti-MDA5"
                        ]}
                    />
                     <CriteriaCard 
                        title="Domaine Morphologique"
                        icon={<Image className="w-5 h-5" />}
                        color="teal"
                        items={[
                           "Pattern TDM ou histologique de PINS, PO, LIP",
                           "Atteinte histologique spécifique (agrégats lymphoïdes, etc.)",
                           "Atteinte multi-compartiments (plèvre, péricarde, voies aériennes, vasculaire inexpliquée)"
                        ]}
                    />
                </div>
            </div>
        </Accordion>

        <Accordion title="Évaluation Initiale et Rôle de la Biopsie" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700 text-base">
                 <p>Actuellement, il n'existe pas de consensus sur les meilleures pratiques pour l'investigation et la gestion initiale des patients répondant aux critères de l'IPAF.</p>
                 <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Pronostic du pattern UIP :</strong> Un pattern UIP (certain ou probable) à la TDM ou à la biopsie dans un contexte d'IPAF est associé à une mortalité similaire à celle de la FPI.
                    </li>
                     <li>
                        <strong>Indication de la biopsie :</strong> Le seuil pour une biopsie est plus bas chez un patient jeune, surtout si c'est une femme, même avec un pattern TDM d'UIP probable. Chez un patient plus âgé avec un profil typique de FPI, une biopsie n'est pas forcément nécessaire.
                    </li>
                     <li>
                        <strong>Importance de l'histologie :</strong> Une PINS histologique supporterait une approche immunosuppressive, tandis qu'une UIP histologique inciterait à la prudence avec les immunosuppresseurs et à une considération plus précoce des antifibrosants en cas de progression.
                    </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                       La discussion en <strong>équipe multidisciplinaire</strong> (pneumologue, radiologue, pathologiste, rhumatologue) est indispensable pour tous les cas complexes d'IPAF afin de peser le pour et le contre d'investigations invasives.
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Suivi et Évolution dans le Temps" icon={<Clock className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700 text-base">
                <p>La PID peut être la première manifestation d'une connectivite. Il est donc crucial de surveiller l'évolution des patients classés IPAF.</p>
                 <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Évolution vers une connectivite définie :</strong> Des études montrent que jusqu'à 13.5% des patients IPAF peuvent développer une connectivite définie (Sjögren, PR, myosite) dans un délai moyen de 31 mois.
                    </li>
                     <li>
                        <strong>Surveillance continue :</strong> Tous les patients avec une PID doivent être réévalués à chaque visite pour des signes ou symptômes de connectivite.
                    </li>
                     <li>
                        <strong>Évaluation rhumatologique :</strong> Une évaluation formelle par un rhumatologue doit être envisagée pour les cas d'IPAF afin de ne pas manquer un diagnostic de connectivite qui pourrait orienter le traitement.
                    </li>
                     <li>
                        <strong>Répétition des examens :</strong> Répéter le bilan d'anticorps étendu (pas seulement les AAN) doit être considéré, surtout en cas de pattern TDM de PINS/PO ou de nouveaux signes cliniques.
                    </li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Prise en Charge Thérapeutique de l'IPAF" icon={<Pill className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700 text-base">
                <p>Il n'y a pas d'essais contrôlés randomisés spécifiques à l'IPAF. La prise en charge est donc individualisée et largement extrapolée des études sur les PID des connectivites.</p>
                 <ul className="list-disc list-inside space-y-2">
                     <li>
                        <strong>Mesures générales :</strong> La réhabilitation respiratoire, l'oxygénothérapie si nécessaire, le traitement du RGO, et la prévention des infections sont indiqués.
                    </li>
                     <li>
                        <strong>Immunosuppresseurs :</strong> C'est l'approche la plus courante. La majorité des patients dans les cohortes reçoivent des glucocorticoïdes et/ou des immunosuppresseurs (mycophénolate, azathioprine, rituximab...).
                    </li>
                     <li>
                        <strong>Antifibrotiques :</strong> Historiquement peu utilisés, leur place est en cours d'évaluation. Ils pourraient être pertinents pour les patients IPAF avec un phénotype progressif fibrosant, surtout si le pattern radiologique ou histologique est de type UIP.
                    </li>
                     <li>
                        <strong>Transplantation pulmonaire :</strong> Doit être considérée pour les patients avec une maladie avancée et progressive.
                    </li>
                </ul>
                 <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded-lg">
                    <p className="text-sm text-amber-800">
                        La stratégie thérapeutique est décidée au cas par cas en DMD, en tenant compte du profil clinique, sérologique, radiologique et surtout de l'évolution de la maladie.
                    </p>
                </div>
            </div>
        </Accordion>

        <div className="mt-8">
            <Accordion title="Outil d'aide à la classification de l'IPAF (ERS/ATS 2015)" icon={<ClipboardPlus className="w-5 h-5 text-white" />} variant="danger">
                <div className="p-2 md:p-4">
                    <IPAFClassifierTool />
                </div>
            </Accordion>
        </div>
    </div>
  </div>
);

export default IPAFSection;