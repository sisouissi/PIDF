
import React from 'react';
import { AlertTriangle } from './icons';

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
        
        <div className="text-left bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Les Pneumopathies Interstitielles Diffuses Fibrosantes</h1>
          <h2 className="text-xl font-semibold text-slate-600 mt-2">L'essentiel pour tout retenir !</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 text-slate-700 space-y-4 text-base">
          <h3 className="text-xl font-semibold text-slate-800 border-b pb-2">Bienvenue sur cette application pédagogique</h3>
          <p>
            Cette application a été conçue pour accompagner les professionnels de santé dans l'approche diagnostique et thérapeutique de la fibrose pulmonaire sous ses différents aspects et variantes cliniques.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 pt-4 border-b pb-2">Objectif pédagogique</h3>
          <p>
            Cette application a été développée à des fins strictement pédagogiques pour faciliter la compréhension et l'application des approches modernes de la fibrose pulmonaire, couvrant l'ensemble du spectre des pneumopathies interstitielles diffuses fibrosantes.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 pt-4 border-b pb-2">Contenu scientifique</h3>
          <p>
            L'ensemble du contenu présenté a été élaboré à partir des dernières recommandations internationales et nationales concernant la prise en charge de la fibrose pulmonaire, en s'appuyant sur les guidelines de référence (ATS/ERS/JRS/ALAT, HAS, sociétés savantes) et les données probantes les plus récentes.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-red-800">Avertissement important</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    <strong>Cet outil pédagogique ne remplace en aucun cas la décision du praticien.</strong>
                  </p>
                  <p className="mt-1">
                    L'utilisation de ce site et de son contenu doit toujours s'accompagner d'un jugement clinique approprié. Chaque patient nécessite une évaluation individuelle et personnalisée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 italic py-4">
            <p>Explorez les différentes sections à l'aide du menu pour commencer votre apprentissage.</p>
        </div>
      </div>
  );
};

export default WelcomeScreen;