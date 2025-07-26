import React from 'react';
import {
  Activity,
  Image,
  Search,
} from './icons';
import { Accordion } from './Accordion';
import { DiagnosticAlgorithm } from './DiagnosticAlgorithm';
import { DiagnosticProcessAlgorithm } from './DiagnosticProcessAlgorithm';

export const DiagnosticSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Search className="w-7 h-7 mr-3 text-blue-500" />
        Diagnostic des PID fibrosantes
      </h2>
      <p className="text-slate-600 mt-2">
        Cette section fournit des outils interactifs pour guider la démarche diagnostique, de l'évaluation initiale à l'intégration des résultats complexes.
      </p>
    </div>

    <div className="space-y-4">
       <Accordion 
          title="Lancer l'algorithme d'orientation diagnostique"
          icon={<Activity className="w-6 h-6 text-white" />}
        >
          <DiagnosticAlgorithm />
        </Accordion>

        <Accordion 
          title="Lancer l'algorithme : Démarche diagnostique détaillée"
          icon={<Image className="w-6 h-6 text-white" />}
        >
          <DiagnosticProcessAlgorithm />
        </Accordion>
    </div>
  </div>
);

export default DiagnosticSection;