import React from 'react';
import { Step } from '../types';
import { FileText, ListChecks } from '../../icons';

export const StepIndicator: React.FC<{ currentStep: Step }> = ({ currentStep }) => {
  const steps = [
    { id: 'patient-info', title: 'Informations Patient', icon: FileText },
    { id: 'recommendations', title: 'Recommandations', icon: ListChecks },
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <nav aria-label="Progress">
      <ol role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200 md:flex md:divide-y-0 shadow-sm">
        {steps.map((step, stepIdx) => (
          <li key={step.title} className="relative md:flex-1 md:flex">
            {stepIdx < currentStepIndex ? (
              <div className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                    <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">{step.title}</span>
                </span>
              </div>
            ) : step.id === currentStep ? (
              <div className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-full">
                  <step.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </span>
                <span className="ml-4 text-sm font-medium text-blue-600">{step.title}</span>
              </div>
            ) : (
              <div className="group flex items-center">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                    <step.icon className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500">{step.title}</span>
                </span>
              </div>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0H21.5L8.5 40L21.5 80H0.5L13.5 40L0.5 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};