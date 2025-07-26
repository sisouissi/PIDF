
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { SectionId } from './types';
import { AbbreviationsModal } from './components/AbbreviationsModal';
import { ReferencesModal } from './components/ReferencesModal';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('welcome');
  const [isAbbreviationsModalOpen, setIsAbbreviationsModalOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-slate-100 font-sans p-4 flex gap-4">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          onOpenAbbreviations={() => setIsAbbreviationsModalOpen(true)}
          onOpenReferences={() => setIsReferencesModalOpen(true)}
        />
        <ContentArea activeSection={activeSection} />
      </div>

      {isAbbreviationsModalOpen && <AbbreviationsModal onClose={() => setIsAbbreviationsModalOpen(false)} />}
      {isReferencesModalOpen && <ReferencesModal onClose={() => setIsReferencesModalOpen(false)} />}
    </>
  );
};

export default App;
