import React from 'react';
import { Image } from './icons';

export const DiagnosticImagerieSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Image className="w-7 h-7 mr-3 text-blue-500" />
        Démarche Diagnostique
      </h2>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <p className="text-slate-600">Ce contenu a été déplacé vers la section des algorithmes interactifs.</p>
    </div>
  </div>
);