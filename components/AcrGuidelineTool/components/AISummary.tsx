import React, { useState } from 'react';
import { Copy, AlertTriangle, BrainCircuit } from '../../icons';

interface AISummaryProps {
    summary: string;
    isLoading: boolean;
    error: string | null;
}

// A simple markdown-to-React component to handle bold text and newlines
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index}>{part.slice(2, -2)}</strong>;
                }
                return <React.Fragment key={index}>{part.split('\n').map((line, i) => <span key={i}>{line}{i !== part.split('\n').length - 1 && <br />}</span>)}</React.Fragment>;
            })}
        </>
    );
};

export const AISummary: React.FC<AISummaryProps> = ({ summary, isLoading, error }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!summary) return;
        navigator.clipboard.writeText(summary.replace(/\*\*/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (isLoading) {
        return (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center p-4 rounded-xl text-base font-bold border-2 bg-red-100 text-red-700 border-red-200">
                <AlertTriangle className="w-6 h-6 mr-3" />
                <span>{error}</span>
            </div>
        );
    }
    
    if (!summary) return null;

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-800 flex items-center">
                <BrainCircuit className="w-6 h-6 mr-3 text-blue-600" />
                Synthèse Clinique (générée par IA)
            </h3>
            <div className="relative p-5 bg-blue-50/50 rounded-xl border-2 border-blue-200/50">
                <div className="text-sm max-w-none text-gray-800 leading-relaxed">
                    <FormattedText text={summary} />
                </div>
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1.5 text-gray-500 hover:bg-blue-100 hover:text-blue-700 rounded-md transition-colors"
                    aria-label="Copier la synthèse"
                >
                    {copied ? <span className="text-xs font-semibold text-blue-700">Copié!</span> : <Copy className="w-4 h-4" />}
                </button>
                 <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-blue-200/60">
                    Avertissement : Cette synthèse est générée par une IA et est destinée à servir de support. Elle ne remplace pas le jugement clinique et doit être vérifiée par un professionnel de santé.
                </p>
            </div>
        </div>
    );
};