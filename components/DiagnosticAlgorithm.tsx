import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  FileText,
  Stethoscope,
  Search,
  Activity,
} from './icons';

interface Step {
  title: string;
  icon: JSX.Element;
  content?: JSX.Element;
  question?: string;
  subQuestion?: JSX.Element;
  options?: {
    value: string;
    label: string;
    next: string;
    note?: string;
  }[];
  next?: string;
  isEnd?: boolean;
}

export const DiagnosticAlgorithm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('initial');
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [history, setHistory] = useState(['initial']);

  const steps: Record<string, Step> = {
    initial: {
      title: "Évaluation initiale du patient",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Examen clinique et anamnèse</h3>
            <div className="space-y-4 text-slate-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-slate-800 mb-2">Anamnèse</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Début des symptômes (aigu/subaigu/chronique)</li>
                    <li>• Exposition professionnelle/environnementale</li>
                    <li>• Tabagisme</li>
                    <li>• Antécédents de maladie du tissu conjonctif</li>
                    <li>• Antécédents familiaux de FPI</li>
                    <li>• Médications antérieures</li>
                    <li>• Radiations ou malignité</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-slate-800 mb-2">Signes cliniques</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Signes d'inflammation systémique</li>
                    <li>• Autres manifestations extrapulmonaires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Examens complémentaires</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Imagerie</h4>
                <ul className="text-sm space-y-1">
                  <li>• TDM HR thoracique (protocole FPI)</li>
                  <li>• Comparaison avec imageries antérieures</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">EFR</h4>
                <ul className="text-sm space-y-1">
                  <li>• Spirométrie, volumes, DLCO</li>
                  <li>• Test d'effort avec oxymétrie</li>
                  <li>• Comparaison avec EFR antérieures</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Biologie</h4>
                <ul className="text-sm space-y-1">
                  <li>• CBC, panel métabolique</li>
                  <li>• Tests hépatiques, urée, créatinine</li>
                  <li>• ANA, facteur rhumatoïde</li>
                  <li>• Peptides citrullinés anticycliques</li>
                  <li>• Autres sérologies appropriées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      next: 'environmental'
    },
    environmental: {
      title: "Étiologies environnementales ou iatrogènes",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      question: "Y a-t-il des étiologies environnementales ou iatrogènes probables ?",
      options: [
        { value: 'yes', label: 'Oui', next: 'remove_cause' },
        { value: 'no', label: 'Non', next: 'extrapulmonary' }
      ]
    },
    remove_cause: {
      title: "Prise en charge étiologique",
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Actions recommandées</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-600 mt-0.5 flex-shrink-0" />
                Éliminer la cause identifiée
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-600 mt-0.5 flex-shrink-0" />
                Traitement systémique par glucocorticoïdes si approprié selon la sévérité et l'étiologie
              </li>
            </ul>
          </div>
        </div>
      ),
      question: "Y a-t-il une récupération clinique ?",
      options: [
        { value: 'yes', label: 'Oui', next: 'no_further_steps' },
        { value: 'no', label: 'Non', next: 'extrapulmonary' }
      ]
    },
    no_further_steps: {
      title: "Diagnostic établi",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Conclusion</h3>
          <p className="text-slate-700">
            Aucune étape diagnostique supplémentaire n'est nécessaire. 
            Poursuivre le suivi et le traitement approprié.
          </p>
        </div>
      ),
      isEnd: true
    },
    extrapulmonary: {
      title: "Maladie extrapulmonaire suspectée",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      question: "Le patient présente-t-il des signes de maladie extrapulmonaire suspectée (ex: maladie du tissu conjonctif, vascularite, sarcoïdose extrapulmonaire) ?",
      options: [
        { value: 'yes', label: 'Oui', next: 'serology_biopsy' },
        { value: 'no', label: 'Non', next: 'multidisciplinary' }
      ]
    },
    serology_biopsy: {
      title: "Investigations complémentaires",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Examens recommandés</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                Sérologies pour maladies du tissu conjonctif et myosite (si pas déjà effectuées)
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                Biopsie diagnostique du site extrapulmonaire affecté (peau, muscle, sinus, rein, ganglion lymphatique)
              </li>
            </ul>
          </div>
        </div>
      ),
      question: "Le diagnostic d'une maladie systémique spécifique est-il confirmé ?",
      options: [
        { value: 'yes', label: 'Oui', next: 'systemic_disease' },
        { value: 'no', label: 'Non', next: 'multidisciplinary' }
      ]
    },
    systemic_disease: {
      title: "Maladie systémique confirmée",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Prise en charge</h3>
          <p className="text-slate-700">
            Évaluation et prise en charge supplémentaires appropriées pour la maladie sous-jacente.
          </p>
        </div>
      ),
      isEnd: true
    },
    multidisciplinary: {
      title: "Discussion multidisciplinaire",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Approche multidisciplinaire</h3>
            <p className="text-slate-700 mb-4">
              Discussion multidisciplinaire avec radiologie pour évaluer le pattern radiologique et considérer des étapes diagnostiques supplémentaires.
            </p>
          </div>
        </div>
      ),
      question: "Y a-t-il un diagnostic clinico-radiologique relativement confiant ?",
      subQuestion: (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <h4 className="font-medium text-slate-800 mb-2">Patterns considérés :</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• FPI (incluant définitive ou probable UIP à l'imagerie)</li>
            <li>• PH chronique</li>
            <li>• Autres FPI (ex: NSIP, DIP, COP)</li>
          </ul>
        </div>
      ),
      options: [
        { value: 'yes', label: 'Oui', next: 'empiric_therapy' },
        { value: 'no', label: 'Non', next: 'clinical_radiologic' }
      ]
    },
    empiric_therapy: {
      title: "Traitement empirique",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Recommandation</h3>
          <p className="text-slate-700">
            Procéder avec un traitement basé sur le diagnostic empirique établi lors de la discussion multidisciplinaire.
          </p>
        </div>
      ),
      isEnd: true
    },
    clinical_radiologic: {
      title: "Évaluation des signes clinico-radiologiques",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      question: "Les signes cliniques et radiologiques suggèrent-ils une sarcoïdose pulmonaire, bérylliose, pneumonie d'hypersensibilité aiguë, carcinomatose lymphangitique, PLCH ou pneumonie éosinophilique ?",
      options: [
        { value: 'yes', label: 'Oui', next: 'bronchoscopy' },
        { value: 'no', label: 'Non', next: 'surgical_biopsy', note: 'Le différentiel inclut typiquement PH chronique et FPI' }
      ]
    },
    bronchoscopy: {
      title: "Bronchoscopie avec BAL",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Procédure recommandée</h3>
            <p className="text-slate-700">
              Bronchoscopie avec BAL et TBB +/- EBUS
            </p>
          </div>
        </div>
      ),
      question: "Un diagnostic est-il établi basé sur les résultats ?",
      options: [
        { value: 'yes', label: 'Oui', next: 'appropriate_management' },
        { value: 'no', label: 'Non', next: 'surgical_biopsy' }
      ]
    },
    appropriate_management: {
      title: "Prise en charge appropriée",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Conclusion</h3>
          <p className="text-slate-700">
            Évaluation et prise en charge supplémentaires appropriées pour la maladie sous-jacente identifiée.
          </p>
        </div>
      ),
      isEnd: true
    },
    surgical_biopsy: {
      title: "Biopsie chirurgicale",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Indication chirurgicale</h3>
            <p className="text-slate-700">
              Biopsie pulmonaire chirurgicale ou cryo-TBB si le patient est candidat basé sur la sévérité de la maladie et autres comorbidités.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Note :</strong> Diagnostic consensuel basé sur une discussion multidisciplinaire incluant radiologie thoracique et pathologie pulmonaire.
            </p>
          </div>
        </div>
      ),
      isEnd: true
    }
  };

  const handleResponse = (value: string, next: string) => {
    setResponses({ ...responses, [currentStep]: value });
    if (next) {
      setHistory([...history, next]);
      setCurrentStep(next);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentStep(newHistory[newHistory.length - 1]);
    }
  };

  const resetApp = () => {
    setCurrentStep('initial');
    setResponses({});
    setHistory(['initial']);
  };

  const currentStepData = steps[currentStep];

  const getButtonColor = (value: string) => {
    if (value === 'yes') {
      return 'bg-green-500 hover:bg-green-600 focus:ring-green-500';
    }
    if (value === 'no') {
      return 'bg-red-500 hover:bg-red-600 focus:ring-red-500';
    }
    return 'bg-sky-500 hover:bg-sky-600 focus:ring-sky-500';
  };

  return (
    <div>
        <div className="flex justify-end">
            <button
            onClick={resetApp}
            className="mb-4 flex-shrink-0 px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm hover:shadow-md"
            >
            Recommencer l'algorithme
            </button>
        </div>

      <div className="bg-blue-50 border-y border-blue-200">
        <div className="px-6 py-3">
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <span>Étape actuelle :</span>
            <div className="flex items-center space-x-2">
              <span className="p-1 bg-blue-100 rounded-md">{currentStepData.icon}</span>
              <span className="font-medium">{currentStepData.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="p-8">
            {currentStepData.content && (
              <div className="mb-8">
                {currentStepData.content}
              </div>
            )}

            {currentStepData.question && (
              <div className="mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">
                    {currentStepData.question}
                  </h3>
                  {currentStepData.subQuestion && currentStepData.subQuestion}
                </div>
              </div>
            )}

            {currentStepData.options && (
              <div className="space-y-4 mb-8">
                {currentStepData.options.map((option, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleResponse(option.value, option.next)}
                      className={`w-full text-left p-4 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5 ${getButtonColor(option.value)}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">
                          {option.label}
                        </span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </button>
                    {option.note && (
                      <p className="text-sm text-slate-600 mt-2 ml-4 italic">
                        {option.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center pt-6 border-t border-slate-200">
              <button
                onClick={goBack}
                disabled={history.length <= 1}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm ${
                  history.length <= 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 hover:shadow-md'
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Précédent
              </button>

              {currentStepData.isEnd && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Parcours diagnostique terminé</span>
                </div>
              )}

              {currentStepData.next && !currentStepData.question && (
                <button
                  onClick={() => handleResponse('continue', currentStepData.next!)}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};