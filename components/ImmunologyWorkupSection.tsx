
import React from 'react';
import { Accordion } from './Accordion';
import { FlaskConical } from './icons';
import { connectivitesData } from './connectivites_data';

export const ImmunologyWorkupSection: React.FC = () => (
    <Accordion title={connectivitesData.immunologyWorkup.title} icon={<FlaskConical className="w-5 h-5 text-white" />}>
        <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <div className="space-y-8">
                    {/* Steps */}
                    {connectivitesData.immunologyWorkup.steps.map((step) => (
                        <div key={step.id}>
                            <h3 className={`font-bold text-lg ${step.textColor} mb-3 flex items-center`}>
                                <span className={`flex items-center justify-center w-6 h-6 rounded-full ${step.bgColor} text-white font-bold mr-3`}>{step.id}</span>
                                {step.title}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4 pl-8">
                                {step.sections.map((section, sIndex) => (
                                    <div key={sIndex} className={`${step.bgColor} p-4 rounded-md border ${step.borderColor.replace('500','200')}`}>
                                        <h4 className="font-semibold text-slate-700">{section.title}</h4>
                                        <ul className="list-disc list-inside pl-2 text-base text-slate-600 space-y-1 mt-1">
                                            {section.items.map((item, iIndex) => <li key={iIndex} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br />') }}></li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Interpretation */}
                    <div>
                        <h3 className={`font-bold text-lg ${connectivitesData.immunologyWorkup.interpretation.textColor} mb-3 border-t pt-6`}>{connectivitesData.immunologyWorkup.interpretation.title}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {connectivitesData.immunologyWorkup.interpretation.presentations.map((pres, index) => (
                                <div key={index} className={`${connectivitesData.immunologyWorkup.interpretation.bgColor} p-3 rounded-md border ${connectivitesData.immunologyWorkup.interpretation.borderColor.replace('500','200')}`}>
                                    <h4 className="font-semibold text-slate-700">{pres.title}</h4>
                                    <p className="text-sm italic text-slate-500">{pres.context}</p>
                                    <ul className="list-disc list-inside pl-2 text-base text-slate-600 space-y-1 mt-1">
                                        {pres.items.map((item, iIndex) => <li key={iIndex} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br />') }}></li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Special Cases */}
                    <div>
                        <h3 className={`font-bold text-lg ${connectivitesData.immunologyWorkup.specialCases.textColor} mb-3 border-t pt-6`}>{connectivitesData.immunologyWorkup.specialCases.title}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {connectivitesData.immunologyWorkup.specialCases.cases.map((scase, index) => (
                                <div key={index} className={`${scase.isUrgent ? 'bg-red-50 border-red-200' : `${connectivitesData.immunologyWorkup.specialCases.bgColor} border-amber-200`} p-3 rounded-md border`}>
                                    <h4 className={`font-semibold ${scase.isUrgent ? 'text-red-800' : 'text-slate-700'}`}>{scase.title}</h4>
                                    <ul className={`list-disc list-inside pl-2 text-base ${scase.isUrgent ? 'text-red-700' : 'text-slate-600'} space-y-1 mt-1`}>
                                        {scase.items.map((item, iIndex) => <li key={iIndex} dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br />') }}></li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Follow-up */}
                    <div>
                        <h3 className={`font-bold text-lg ${connectivitesData.immunologyWorkup.followUp.textColor} mb-3 border-t pt-6`}>{connectivitesData.immunologyWorkup.followUp.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {connectivitesData.immunologyWorkup.followUp.sections.map((section, sIndex) => (
                                <div key={sIndex} className={`${connectivitesData.immunologyWorkup.followUp.bgColor} p-4 rounded-md border ${connectivitesData.immunologyWorkup.followUp.borderColor.replace('500','200')}`}>
                                    <h4 className="font-semibold text-slate-700">{section.title}</h4>
                                    <ul className="list-disc list-inside pl-2 text-base text-slate-600 space-y-1 mt-1">
                                        {section.items.map((item, iIndex) => <li key={iIndex}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Accordion>
);