import React, { useState } from 'react';
import { Copy, AlertTriangle, BrainCircuit } from './icons';

interface AISummaryProps {
    summary: string;
    isLoading: boolean;
    error: string | null;
    title?: string;
}

const FormattedText: React.FC<{ text: string }> = React.memo(({ text }) => {
    return (
        <>
            {text.split('\n').map((line, i) => {
                const parts = line.split(/(\*\*.*?\*\*)/g);
                return (
                    <p key={i} className="mb-2 last:mb-0">
                        {parts.map((part, j) => 
                            part.startsWith('**') && part.endsWith('**') ? 
                            <strong key={j}>{part.slice(2, -2)}</strong> : 
                            <React.Fragment key={j}>{part}</React.Fragment>
                        )}
                    </p>
                );
            })}
        </>
    );
});

export const AISummary: React.FC<AISummaryProps> = ({ summary, isLoading, error, title="Synthèse Clinique (générée par IA)" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!summary) return;
        navigator.clipboard.writeText(summary.replace(/\*\*/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (isLoading) {
        return (
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 animate-pulse">
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mt-4 flex items-center p-4 rounded-xl text-base font-bold border-2 bg-red-100 text-red-700 border-red-200">
                <AlertTriangle className="w-6 h-6 mr-3" />
                <span>{error}</span>
            </div>
        );
    }
    
    if (!summary) return null;

    return (
        <div className="mt-4 space-y-4 animate-fade-in-fast">
             <div className="relative p-5 bg-blue-50/50 rounded-xl border-2 border-blue-200/50">
                <h3 className="font-bold text-lg text-slate-800 flex items-center mb-3">
                    <BrainCircuit className="w-6 h-6 mr-3 text-blue-600" />
                    {title}
                </h3>
                <div className="text-sm max-w-none text-slate-800 leading-relaxed prose prose-sm">
                    <FormattedText text={summary} />
                </div>
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1.5 text-slate-500 hover:bg-blue-100 hover:text-blue-700 rounded-md transition-colors"
                    aria-label="Copier la synthèse"
                >
                    {copied ? <span className="text-xs font-semibold text-blue-700">Copié!</span> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
};