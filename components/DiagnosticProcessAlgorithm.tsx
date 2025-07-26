import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  Stethoscope,
  Activity,
  History,
  ClipboardList,
  Image,
  Users,
  Microscope,
  Heart,
  FileText,
  AlertTriangle,
  Search
} from './icons';

export const DiagnosticProcessAlgorithm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('assessment');
  const [patientData, setPatientData] = useState({});
  const [history, setHistory] = useState<string[]>([]);

  const navigateToStep = (nextStep: string) => {
    if (nextStep && nextStep !== currentStep) {
      setHistory(prev => [...prev, currentStep]);
      setCurrentStep(nextStep);
    }
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousStep = newHistory.pop() as string;
      setHistory(newHistory);
      setCurrentStep(previousStep);
    }
  };

  const resetApp = () => {
    setCurrentStep('assessment');
    setPatientData({});
    setHistory([]);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'assessment':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2" />
                Évaluation initiale - Anamnèse et examen physique
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">Évaluation clinique :</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Début aigu des symptômes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Début subaigu des symptômes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Début chronique des symptômes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Exposition professionnelle/environnementale</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Antécédents de tabagisme</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Antécédents de maladie du tissu conjonctif</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Antécédents familiaux de FPI</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">Examens complémentaires :</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>TDM HR thoracique (protocole FPI)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Comparaison avec imageries antérieures</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Spirométrie, volumes, DLCO</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Test d'effort avec oxymétrie</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>CBC, panel métabolique</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>ANA, facteur rhumatoïde</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => navigateToStep('environmental')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                Continuer l'évaluation
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        );

      case 'environmental':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Étiologies environnementales ou iatrogènes
              </h3>
              <p className="text-slate-700 mb-4">Y a-t-il des étiologies environnementales ou iatrogènes probables ?</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-2 text-slate-800">Étiologies à considérer :</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Pneumonie d'hypersensibilité</li>
                  <li>• Pneumoconioses (silice, amiante)</li>
                  <li>• Médicaments pneumotoxiques</li>
                  <li>• Radiothérapie thoracique</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToStep('removeCause')}
                className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="font-medium text-green-700">Oui</div>
                <div className="text-sm text-slate-600">Étiologie identifiée</div>
              </button>
              <button
                onClick={() => navigateToStep('extrapulmonary')}
                className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <div className="font-medium text-red-700">Non</div>
                <div className="text-sm text-slate-600">Aucune étiologie évidente</div>
              </button>
            </div>
          </div>
        );

      case 'removeCause':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Prise en charge étiologique
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Actions immédiates :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Éliminer la cause identifiée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Considérer glucocorticoïdes systémiques</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Y a-t-il une récupération clinique ?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('noFurtherSteps')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Oui</div>
                  <div className="text-sm text-slate-600">Amélioration clinique</div>
                </button>
                <button
                  onClick={() => navigateToStep('extrapulmonary')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">Non</div>
                  <div className="text-sm text-slate-600">Pas d'amélioration</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'noFurtherSteps':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Diagnostic établi
            </h3>
            <p className="text-slate-700 mb-4">Aucune étape diagnostique supplémentaire nécessaire.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-slate-800 mb-2">Recommandations :</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Poursuivre l'éviction de la cause</li>
                <li>• Suivi clinique régulier</li>
                <li>• Adaptation du traitement</li>
              </ul>
            </div>
          </div>
        );

      case 'extrapulmonary':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Maladie extrapulmonaire suspectée
              </h3>
              <p className="text-slate-700 mb-4">Le patient présente-t-il des signes de maladie extrapulmonaire ?</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">À considérer :</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Maladie du tissu conjonctif</li>
                  <li>• Vascularites</li>
                  <li>• Sarcoïdose extrapulmonaire</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToStep('serologyBiopsy')}
                className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="font-medium text-green-700">Oui</div>
                <div className="text-sm text-slate-600">Signes présents</div>
              </button>
              <button
                onClick={() => navigateToStep('multidisciplinary')}
                className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <div className="font-medium text-red-700">Non</div>
                <div className="text-sm text-slate-600">Aucun signe évident</div>
              </button>
            </div>
          </div>
        );

      case 'serologyBiopsy':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                <Microscope className="w-5 h-5 mr-2" />
                Investigations complémentaires
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Examens recommandés :</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Sérologies pour maladies du tissu conjonctif</li>
                  <li>• Biopsie du site extrapulmonaire affecté</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Maladie systémique confirmée ?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('systemicManagement')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Oui</div>
                  <div className="text-sm text-slate-600">Maladie confirmée</div>
                </button>
                <button
                  onClick={() => navigateToStep('multidisciplinary')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">Non</div>
                  <div className="text-sm text-slate-600">Pas de diagnostic confirmé</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'systemicManagement':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Prise en charge de la maladie systémique
            </h3>
            <p className="text-slate-700 mb-4">Évaluation et prise en charge appropriées pour la maladie sous-jacente.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-slate-800 mb-2">Prochaines étapes :</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Collaboration avec spécialiste</li>
                <li>• Traitement spécifique</li>
                <li>• Surveillance pulmonaire</li>
              </ul>
            </div>
          </div>
        );

      case 'multidisciplinary':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Discussion multidisciplinaire
              </h3>
              <p className="text-slate-700 mb-4">Évaluation du pattern radiologique avec l'équipe.</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Patterns à évaluer :</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• FPI (UIP définitive ou probable)</li>
                  <li>• Pneumonie d'hypersensibilité chronique</li>
                  <li>• Autres FPI (NSIP, DIP, COP)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Diagnostic clinico-radiologique confiant ?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('empiricTherapy')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Oui</div>
                  <div className="text-sm text-slate-600">Diagnostic confiant</div>
                </button>
                <button
                  onClick={() => navigateToStep('clinicalRadiologic')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">Non</div>
                  <div className="text-sm text-slate-600">Investigations nécessaires</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'empiricTherapy':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Traitement empirique
            </h3>
            <p className="text-slate-700 mb-4">Procéder avec le traitement basé sur le diagnostic empirique.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-slate-800 mb-2">Recommandations :</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Initier le traitement approprié</li>
                <li>• Surveillance étroite</li>
                <li>• Réévaluation régulière</li>
              </ul>
            </div>
          </div>
        );

      case 'clinicalRadiologic':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Signes clinico-radiologiques spécifiques
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Pathologies suggérées :</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Sarcoïdose pulmonaire</li>
                  <li>• Bérylliose</li>
                  <li>• Pneumonie d'hypersensibilité aiguë</li>
                  <li>• Carcinomatose lymphangitique</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToStep('bronchoscopy')}
                className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="font-medium text-green-700">Oui</div>
                <div className="text-sm text-slate-600">Signes évocateurs</div>
              </button>
              <button
                onClick={() => navigateToStep('surgicalBiopsy')}
                className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <div className="font-medium text-red-700">Non</div>
                <div className="text-sm text-slate-600">PH chronique/FPI probable</div>
              </button>
            </div>
          </div>
        );

      case 'bronchoscopy':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Bronchoscopie avec BAL et TBB
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Examens :</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Lavage broncho-alvéolaire (BAL)</li>
                  <li>• Biopsies transbronchiques (TBB)</li>
                  <li>• EBUS si indiqué</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Diagnostic établi ?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('appropriateManagement')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Oui</div>
                  <div className="text-sm text-slate-600">Diagnostic établi</div>
                </button>
                <button
                  onClick={() => navigateToStep('surgicalBiopsy')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">Non</div>
                  <div className="text-sm text-slate-600">Pas de diagnostic</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'appropriateManagement':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Prise en charge appropriée
            </h3>
            <p className="text-slate-700">Évaluation et prise en charge selon la maladie identifiée.</p>
          </div>
        );

      case 'surgicalBiopsy':
        return (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Biopsie chirurgicale
            </h3>
            <p className="text-slate-700 mb-4">Biopsie pulmonaire chirurgicale ou cryo-TBB si candidat approprié.</p>
            <div className="bg-white p-4 rounded-lg border">
              <p className="text-sm text-slate-600">
                Diagnostic consensuel basé sur discussion multidisciplinaire incluant radiologie et pathologie pulmonaire.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const titles: Record<string, string> = {
      assessment: 'Évaluation initiale',
      environmental: 'Étiologies environnementales',
      removeCause: 'Élimination de la cause',
      noFurtherSteps: 'Diagnostic établi',
      extrapulmonary: 'Maladie extrapulmonaire',
      serologyBiopsy: 'Investigations complémentaires',
      systemicManagement: 'Prise en charge systémique',
      multidisciplinary: 'Discussion multidisciplinaire',
      empiricTherapy: 'Traitement empirique',
      clinicalRadiologic: 'Signes clinico-radiologiques spécifiques',
      bronchoscopy: 'Bronchoscopie avec BAL et TBB',
      appropriateManagement: 'Prise en charge appropriée',
      surgicalBiopsy: 'Biopsie chirurgicale',
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">
            Démarche diagnostique détaillée
        </h2>
        <button
            onClick={resetApp}
            className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
        >
            Recommencer
        </button>
      </div>

      <div className="bg-blue-50 border-y border-blue-200 p-3">
        <div className="text-sm text-blue-700">
          <span className="font-semibold">Étape actuelle :</span> {titles[currentStep] || ''}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
        <div className="animate-fade-in-fast min-h-[300px]">
          {renderContent()}
        </div>
        <div className="flex justify-between items-center pt-6 mt-8 border-t border-slate-200">
          <button
              onClick={goBack}
              disabled={history.length === 0}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm ${
                  history.length === 0
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
          >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Précédent
          </button>
          {['noFurtherSteps', 'systemicManagement', 'empiricTherapy', 'appropriateManagement', 'surgicalBiopsy'].includes(currentStep) && (
              <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Parcours diagnostique terminé</span>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};
