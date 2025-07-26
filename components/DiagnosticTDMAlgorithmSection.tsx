
import React, { useState, useEffect, useMemo, useCallback, createRef } from 'react';
import { ClipboardCheck, Users, Microscope, CheckCircle, XCircle, ArrowLeft, RotateCcw, AlertTriangle, ChevronRight } from './icons';
import { UIPClassifierAnswers, UIPClassifierDiagnosis, UIPClassifierSection, UIPClassifierQuestion } from '../types';
import { SECTIONS, TOTAL_QUESTIONS } from './uip_classifier/constants';

// --- Local UI Components for the TDM Classifier ---
const ProgressBar: React.FC<{ completed: number, total: number }> = ({ completed, total }) => {
    const progress = total > 0 ? (completed / total) * 100 : 0;
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="text-base font-semibold text-slate-600">Progression</span>
                <span className="text-base font-bold text-blue-600">{completed} / {total}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

const QuestionGroup: React.FC<{ question: UIPClassifierQuestion, selectedValue: string | undefined, onChange: (name: string, value: string) => void }> = ({ question, selectedValue, onChange }) => (
    <div className="py-4">
        <fieldset>
            <legend className="text-base font-semibold text-slate-800 mb-4">{question.text}</legend>
            <div className="space-y-3">
                {question.options.map(option => (
                    <label key={option.value} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedValue === option.value ? 'bg-blue-100 border-blue-500 shadow-md' : 'bg-white border-slate-300 hover:border-blue-400'}`}>
                        <input
                            type="radio"
                            name={question.name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={(e) => onChange(question.name, e.target.value)}
                            className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-base font-medium text-slate-800">{option.label}</span>
                        {option.helper && <p className="ml-4 text-xs text-slate-500 italic hidden sm:block">{option.helper}</p>}
                    </label>
                ))}
            </div>
        </fieldset>
    </div>
);

const AccordionSection: React.FC<{ section: UIPClassifierSection, isActive: boolean, isCompleted: boolean, isInvalid: boolean, onToggle: () => void, children: React.ReactNode }> = ({ section, isActive, isCompleted, isInvalid, onToggle, children }) => (
    <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${isInvalid ? 'border-red-500' : 'border-slate-300'} ${isActive ? 'shadow-lg' : 'shadow-sm'}`}>
        <button
            className={`w-full flex items-center justify-between p-4 text-left ${isActive ? 'bg-slate-100' : 'bg-white'}`}
            onClick={onToggle}
            aria-expanded={isActive}
        >
            <div className="flex items-center">
                {isCompleted ? <CheckCircle className="w-6 h-6 text-green-500 mr-3" /> : <div className={`w-6 h-6 mr-3 flex items-center justify-center font-bold text-white rounded-full ${isActive ? 'bg-blue-600' : 'bg-slate-400'}`}>{section.id}</div>}
                <span className={`font-semibold ${isActive ? 'text-blue-700' : 'text-slate-800'}`}>{section.title}</span>
            </div>
            <ChevronRight className={`w-5 h-5 text-slate-500 transform transition-transform duration-200 ${isActive ? 'rotate-90' : ''}`} />
        </button>
        {isActive && <div className="p-4 border-t border-slate-200 animate-fade-in-fast">{children}</div>}
    </div>
);

const Results: React.FC<{ result: UIPClassifierDiagnosis, onContinue: (title: string) => void }> = ({ result, onContinue }) => (
    <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200 animate-fade-in">
        <h3 className="text-2xl font-bold text-center text-slate-800 mb-4">{result.title}</h3>
        <p className="text-slate-600 mb-4 text-center text-base">{result.description}</p>
        <div className="bg-white p-4 rounded-md border">
            <h4 className="font-semibold text-slate-700 mb-2">Recommandations Clés :</h4>
            <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                {result.recommendations.map((rec, index) => <li key={index}>{rec}</li>)}
            </ul>
        </div>
        <div className="text-center mt-6">
            <button
                onClick={() => onContinue(result.title)}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:-translate-y-0.5"
            >
                Continuer avec ce Pattern
            </button>
        </div>
    </div>
);

const generateTdmSummary = async (answers: UIPClassifierAnswers): Promise<UIPClassifierDiagnosis> => {
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

    const { honeycombing, reticulation, traction_bronchiectasis, distribution, alternative_signs } = answers;

    if (alternative_signs === 'yes') {
        return {
            title: '⚠️ Pattern en faveur d\'un Diagnostic Alternatif',
            description: 'La présence de signes spécifiques (verre dépoli prédominant, kystes, nodules...) oriente fortement vers un diagnostic autre que la FPI.',
            recommendations: [
                'Éliminer une pneumopathie d\'hypersensibilité, une PINS, ou une pneumopathie organisée.',
                'Discuter une bronchoscopie avec LBA pour rechercher une infection ou des signes de sarcoïdose.',
                'Une biopsie pulmonaire est souvent nécessaire pour confirmer le diagnostic si le LBA n\'est pas contributif.'
            ]
        };
    }

    if (honeycombing === 'yes' && distribution === 'typical') {
        return {
            title: '✅ Pattern de PIC/UIP Certain',
            description: 'La présence de rayons de miel dans une distribution typique (basale et sous-pleurale) est hautement spécifique du pattern UIP.',
            recommendations: [
                'En l\'absence de cause identifiée (connectivite, PHS...), ce pattern est suffisant pour poser le diagnostic de FPI.',
                'Une biopsie pulmonaire n\'est pas recommandée.',
                'Initier une discussion sur le traitement antifibrosant et l\'orientation vers un centre de transplantation.'
            ]
        };
    }
    
    if (honeycombing === 'no' && reticulation === 'reticulation' && traction_bronchiectasis === 'yes' && distribution === 'typical') {
        return {
            title: '🤔 Pattern de PIC/UIP Probable',
            description: 'Les réticulations et bronchectasies de traction dans une distribution typique, sans rayons de miel, rendent le pattern UIP très probable.',
            recommendations: [
                'Chez un patient avec un profil clinique typique (plus de 60 ans, homme, fumeur), ce pattern est très évocateur de FPI.',
                'Une biopsie pulmonaire n\'est généralement pas nécessaire.',
                'Confirmer le diagnostic en discussion multidisciplinaire (DMD).'
            ]
        };
    }

    return {
        title: '❓ Pattern Indéterminé pour la PIC/UIP',
        description: 'Les signes de fibrose sont présents mais ne remplissent pas les critères pour un pattern UIP certain ou probable. La distribution peut être atypique ou les signes de fibrose discrets.',
        recommendations: [
            'Le diagnostic de FPI ne peut être ni confirmé ni infirmé sur le scanner seul.',
            'Une discussion multidisciplinaire est indispensable pour évaluer la balance bénéfice/risque d\'investigations complémentaires.',
            'Discuter une biopsie pulmonaire (chirurgicale ou cryobiopsie) pour obtenir un diagnostic histologique.'
        ]
    };
};

// --- Main Algorithm Component ---
type StepId = 
    'determine_pattern' |
    'mdd_uip' |
    'mdd_other' |
    'biopsy_choice' |
    'biopsy_results' |
    'final_ipf' |
    'final_non_ipf' |
    'final_indeterminate' |
    'final_ipf_no_biopsy';

const DiagnosticTDMAlgorithmSection: React.FC = () => {
    const [step, setStep] = useState<StepId>('determine_pattern');
    const [history, setHistory] = useState<StepId[]>([]);
    
    // State for the TDM pattern helper
    const [answers, setAnswers] = useState<UIPClassifierAnswers>({});
    const [activeSection, setActiveSection] = useState<number | null>(1);
    const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());
    const [invalidSections, setInvalidSections] = useState<Set<number>>(new Set());
    const [diagnosisResult, setDiagnosisResult] = useState<UIPClassifierDiagnosis | null>(null);
    const [showGlobalError, setShowGlobalError] = useState<boolean>(false);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const sectionRefs = useMemo(() => SECTIONS.reduce((acc, section) => {
        acc[section.id] = createRef<HTMLDivElement>();
        return acc;
    }, {} as Record<number, React.RefObject<HTMLDivElement>>), []);

    const completedQuestions = useMemo(() => Object.keys(answers).length, [answers]);
    
    const validateSections = useCallback(() => {
        const newCompletedSections = new Set<number>();
        SECTIONS.forEach(section => {
          const allQuestionsInSectionAnswered = section.questions.every(q => answers[q.name] !== undefined);
          if (allQuestionsInSectionAnswered) {
            newCompletedSections.add(section.id);
          }
        });
        setCompletedSections(newCompletedSections);
        return newCompletedSections;
    }, [answers]);

    useEffect(() => {
        validateSections();
    }, [answers, validateSections]);
    
    const handleOptionChange = useCallback((name: string, value: string) => {
        setAnswers(prev => ({ ...prev, [name]: value }));
        setDiagnosisResult(null);
        setApiError(null);
        if (showGlobalError) {
            setShowGlobalError(false);
            setInvalidSections(new Set());
        }
    }, [showGlobalError]);

    const handleToggleAccordion = useCallback((sectionId: number) => {
        setActiveSection(prev => (prev === sectionId ? null : sectionId));
    }, []);
    
    const calculateDiagnosis = async () => {
        const validated = validateSections();
        if (validated.size < SECTIONS.length) {
            setShowGlobalError(true);
            const newInvalidSections = new Set<number>();
            SECTIONS.forEach(section => {
                if (!validated.has(section.id)) newInvalidSections.add(section.id);
            });
            setInvalidSections(newInvalidSections);
            const firstInvalidId = Math.min(...Array.from(newInvalidSections));
            if (isFinite(firstInvalidId)) setActiveSection(firstInvalidId);
            return;
        }

        setShowGlobalError(false);
        setInvalidSections(new Set());
        setIsAnalyzing(true);
        setApiError(null);
        setDiagnosisResult(null);

        try {
            const resultData = await generateTdmSummary(answers);
            
            const validatedResult: UIPClassifierDiagnosis = {
                title: resultData.title || "Diagnostic Indéterminé",
                description: resultData.description || "La description n'a pas pu être générée. Veuillez vérifier les entrées ou réessayer.",
                recommendations: Array.isArray(resultData.recommendations) ? resultData.recommendations : ["Aucune recommandation spécifique n'a pu être générée."],
            };
            setDiagnosisResult(validatedResult);

        } catch (error) {
            console.error("Error generating local summary:", error);
            if (error instanceof Error) {
                setApiError(error.message);
            } else {
                setApiError("L'analyse des résultats a échoué. Une erreur interne est survenue.");
            }
        } finally {
            setIsAnalyzing(false);
        }
    };
    
    const resetForm = () => {
        setAnswers({});
        setActiveSection(1);
        setCompletedSections(new Set());
        setInvalidSections(new Set());
        setDiagnosisResult(null);
        setShowGlobalError(false);
        setIsAnalyzing(false);
        setApiError(null);
    };

    const goToStep = (nextStep: StepId) => {
        setHistory([...history, step]);
        setStep(nextStep);
    };
    
    const goBack = () => {
        const lastStep = history.pop();
        if (lastStep) {
            setStep(lastStep);
            setHistory([...history]);
        } else {
            // Special case to go back to the questionnaire if we are in a subsequent step
            if(step !== 'determine_pattern') {
                setStep('determine_pattern');
            }
        }
    };
    
    const reset = () => {
        setStep('determine_pattern');
        setHistory([]);
        resetForm();
    };

    const handlePatternDetermined = (resultTitle: string) => {
        if (resultTitle.includes('Certain') || resultTitle.includes('Probable')) {
            goToStep('mdd_uip');
        } else {
            goToStep('mdd_other');
        }
    };
    
    const renderContent = () => {
        switch (step) {
            case 'determine_pattern':
                return (
                    <div className="w-full">
                        <ProgressBar completed={completedQuestions} total={TOTAL_QUESTIONS} />
                        {showGlobalError && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg" role="alert">
                                <p className="font-bold">⚠️ Formulaire Incomplet</p>
                                <p>Veuillez compléter toutes les sections avant de lancer l'analyse.</p>
                            </div>
                        )}
                        {apiError && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg" role="alert">
                                <p className="font-bold">🤖 Erreur d'Analyse IA</p><p>{apiError}</p>
                            </div>
                        )}
                        <div className="space-y-4">
                            {SECTIONS.map(section => (
                                <div key={section.id} ref={sectionRefs[section.id]}>
                                    <AccordionSection section={section} isActive={activeSection === section.id} isCompleted={completedSections.has(section.id)} isInvalid={invalidSections.has(section.id)} onToggle={() => handleToggleAccordion(section.id)}>
                                        {section.questions.map(question => <QuestionGroup key={question.id} question={question} selectedValue={answers[question.name]} onChange={handleOptionChange} />)}
                                    </AccordionSection>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out mx-2 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed" onClick={calculateDiagnosis} disabled={isAnalyzing}>
                                {isAnalyzing && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                                {isAnalyzing ? 'Analyse en cours...' : '🔍 Analyser le Pattern TDM'}
                            </button>
                        </div>
                        {diagnosisResult && <Results result={diagnosisResult} onContinue={handlePatternDetermined} />}
                    </div>
                );
            case 'mdd_uip':
                return (
                     <div className="text-center animate-fade-in-fast">
                        <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Étape Suivante : Discussion Multidisciplinaire (DMD)</h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-base">Pour un pattern TDM d'UIP Certain ou Probable, et en l'absence de cause évidente (connectivite, exposition...), la DMD permet de confirmer le diagnostic de FPI avec une haute confiance, sans nécessiter de biopsie.</p>
                        <div className="flex justify-center">
                           <button onClick={() => goToStep('final_ipf_no_biopsy')} className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Confirmer le diagnostic de FPI</button>
                        </div>
                    </div>
                );
            case 'mdd_other':
                 return (
                    <div className="text-center animate-fade-in-fast">
                        <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Étape Suivante : Discussion Multidisciplinaire (DMD)</h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-base">Face à un pattern TDM non typique, la DMD est cruciale pour évaluer la balance bénéfice/risque d'une biopsie pulmonaire afin de préciser le diagnostic.</p>
                        <div className="flex justify-center">
                            <button onClick={() => goToStep('biopsy_choice')} className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Discuter l'option d'une biopsie</button>
                        </div>
                    </div>
                );
            case 'biopsy_choice':
                 return (
                    <div className="text-center animate-fade-in-fast">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Décision concernant la Biopsie</h3>
                        <p className="text-slate-600 mb-6 max-w-3xl mx-auto text-base">Une biopsie est-elle réalisable et pertinente (après évaluation du risque opératoire et du bénéfice attendu) ?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <button onClick={() => goToStep('biopsy_results')} className="p-4 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">Oui, une biopsie est réalisée</button>
                            <button onClick={() => goToStep('final_indeterminate')} className="p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors">Non (contre-indication / refus)</button>
                        </div>
                    </div>
                );
            case 'biopsy_results':
                 return (
                     <div className="text-center animate-fade-in-fast">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Intégration des Résultats Histologiques</h3>
                        <p className="text-slate-600 mb-6 max-w-3xl mx-auto text-base">Quel est le pattern retrouvé à la biopsie ?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <button onClick={() => goToStep('final_ipf')} className="p-4 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors">Pattern de PIC/UIP Certain ou Probable</button>
                            <button onClick={() => goToStep('final_non_ipf')} className="p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors">Diagnostic Histologique Alternatif</button>
                        </div>
                    </div>
                );
             case 'final_ipf_no_biopsy':
                 return (
                    <div className="text-center bg-green-50 p-8 rounded-lg animate-fade-in">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                        <h3 className="text-2xl font-bold text-green-800 mb-2">Diagnostic Final : Fibrose Pulmonaire Idiopathique (FPI)</h3>
                        <p className="text-slate-600 text-base">Le diagnostic est établi par la combinaison d'un tableau clinico-radiologique typique (Pattern TDM UIP Certain ou Probable) après discussion multidisciplinaire, sans confirmation histologique.</p>
                    </div>
                );
            case 'final_ipf':
                return (
                    <div className="text-center bg-green-50 p-8 rounded-lg animate-fade-in">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                        <h3 className="text-2xl font-bold text-green-800 mb-2">Diagnostic Final : Fibrose Pulmonaire Idiopathique (FPI)</h3>
                        <p className="text-slate-600 text-base">Le diagnostic est confirmé par la concordance entre les données cliniques, radiologiques (TDM indéterminée ou alternative) et histologiques (biopsie montrant un pattern UIP).</p>
                    </div>
                );
            case 'final_non_ipf':
                return (
                    <div className="text-center bg-red-50 p-8 rounded-lg animate-fade-in">
                        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4"/>
                        <h3 className="text-2xl font-bold text-red-800 mb-2">Diagnostic Final : Pas une FPI</h3>
                        <p className="text-slate-600 text-base">Les données convergent vers un autre diagnostic de PID fibrosante (ex: PHS, connectivite...). La prise en charge doit être adaptée à cette étiologie spécifique.</p>
                    </div>
                );
             case 'final_indeterminate':
                return (
                    <div className="text-center bg-amber-50 p-8 rounded-lg animate-fade-in">
                        <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4"/>
                        <h3 className="text-2xl font-bold text-amber-800 mb-2">Diagnostic : PID Fibrosante Inclassable</h3>
                        <p className="text-slate-600 text-base">Malgré une évaluation complète (avec ou sans biopsie), un diagnostic de certitude ne peut être établi. Le suivi se concentrera sur la détection d'un phénotype progressif fibrosant pour guider la thérapie.</p>
                    </div>
                );
        }
    };
    
    return (
        <div className="space-y-6 animate-fade-in">
             <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                    <ClipboardCheck className="w-7 h-7 mr-3 text-blue-500" />
                    Algorithme TDM & Biopsie
                </h2>
                <p className="text-slate-600 mt-2 text-base">
                    Cet outil interactif vous guide à travers l'algorithme diagnostique de la FPI en intégrant les données de la TDM-HR et, si nécessaire, de la biopsie pulmonaire.
                </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <div className="min-h-[400px]">
                    {renderContent()}
                </div>
                
                <div className="flex justify-between items-center pt-6 mt-8 border-t border-slate-200">
                     <button
                        onClick={goBack}
                        disabled={step === 'determine_pattern' && history.length === 0}
                        className={`flex items-center px-4 py-2 text-base font-medium rounded-lg transition-colors shadow-sm ${
                        (step === 'determine_pattern' && history.length === 0)
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Précédent
                    </button>

                    
                    <button
                        onClick={reset}
                        className="flex items-center px-4 py-2 text-base font-medium rounded-lg transition-colors shadow-sm bg-blue-600 text-white hover:bg-blue-700"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Recommencer l'algorithme complet
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default DiagnosticTDMAlgorithmSection;
