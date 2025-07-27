
import React from 'react';
import { SectionId } from '../types';
import { Footer } from './Footer';

// Static imports to fix module resolution issues in the current environment
import WelcomeScreen from './WelcomeScreen';
import DefinitionSection from './DefinitionSection';
import DiagnosticSection from './DiagnosticSection';
import FPIEvaluationInitialeSection from './FPIEvaluationInitialeSection';
import FPIPathogenieCliniqueSection from './FPIPathogenieCliniqueSection';
import DiagnosticBiopsieSection from './DiagnosticBiopsieSection';
import DiagnosticTDMAlgorithmSection from './DiagnosticTDMAlgorithmSection';
import FPITraitementSection from './FPITraitementSection';
import FPIPronosticSuiviSection from './FPIPronosticSuiviSection';
import ExacerbationAigueSection from './ExacerbationAigueSection';
import ConnectivitesPIDSection from './ConnectivitesPIDSection';
import PINSSection from './PINSSection';
import AutresPIDSection from './AutresPIDSection';
import TherapeutiqueSection from './TherapeutiqueSection';
import SuiviPronosticSection from './SuiviPronosticSection';
import IPAFSection from './IPAFSection';
import PHSSection from './PHSSection';
import FPPSection from './FPPSection';
import ILASection from './ILASection';

interface ContentAreaProps {
  activeSection: SectionId;
}

const sectionComponents: Record<string, React.FC<any>> = {
  welcome: WelcomeScreen,
  definition: DefinitionSection,
  'diagnostic-clinique': DiagnosticSection,
  'diagnostic-fonctionnel': FPIEvaluationInitialeSection,
  'fpi-pathogenie-clinique': FPIPathogenieCliniqueSection,
  'diagnostic-biopsie': DiagnosticBiopsieSection,
  'diagnostic-tdm-algorithme': DiagnosticTDMAlgorithmSection,
  'fpi-traitement': FPITraitementSection,
  'fpi-suivi-pronostic': FPIPronosticSuiviSection,
  'fpi-exacerbation-aigue': ExacerbationAigueSection,
  'pid-connectivites': ConnectivitesPIDSection,
  'fpp': FPPSection,
  'ipaf': IPAFSection,
  'pins-fibrosantes': PINSSection,
  'phs': PHSSection,
  'ila': ILASection,
  'autres-pid': AutresPIDSection,
  therapeutique: TherapeutiqueSection,
  'suivi-pronostic': SuiviPronosticSection,
};

export const ContentArea: React.FC<ContentAreaProps> = ({ activeSection }) => {
  const ComponentToRender = sectionComponents[activeSection] || WelcomeScreen;

  return (
    <div className="flex-1 overflow-auto bg-white rounded-2xl shadow-lg">
      <div className="p-10 max-w-7xl mx-auto">
        <ComponentToRender />
        <Footer />
      </div>
    </div>
  );
};