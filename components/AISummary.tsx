import React, { useState } from 'react';
import { Copy, AlertTriangle, BrainCircuit } from './icons';

interface AISummaryProps {
    summary: string;
    isLoading: boolean;
    error: string | null;
    title?: string;
}

const FormattedText: React.FC<{ text: string }> = React.memo(({ text }) => {
    const renderInline = (line: string) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? (
                <strong key={j}>{part.slice(2, -2)}</strong>
            ) : (
                <React.Fragment key={j}>{part}</React.Fragment>
            )
        );
    };

    const elements = text.split('\n').map((line, i) => {
        if (line.startsWith('### ')) {
            return <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{renderInline(line.substring(4))}</h3>;
        }
        if (line.startsWith('## ')) {
            return <h2 key={i} className="text-xl font-bold mt-5 mb-3">{renderInline(line.substring(3))}</h2>;
        }
        if (line.startsWith('# ')) {
            return <h1 key={i} className="text-2xl font-extrabold mt-6 mb-4">{renderInline(line.substring(2))}</h1>;
        }
        if (line.trim() === '') {
            return null;
        }
        return <p key={i} className="mb-2 last:mb-0">{renderInline(line)}</p>;
    }).filter(Boolean);

    return <>{elements}</>;
});

export const AISummary: React.FC<AISummaryProps> = ({ summary, isLoading, error, title="Synthèse Clinique (générée par IA)" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!summary) return;
        navigator.clipboard.writeText(summary.replace(/\*\*|### |## |# /g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (isLoading) {
        return (
            <div className="mt-4 p-6 text-center bg-blue-50/50 rounded-xl border-2 border-blue-200/50 animate-fade-in-fast">
                <div className="flex justify-center items-center mb-4">
                    <BrainCircuit className="w-10 h-10 text-blue-500 animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800">Génération en cours...</h3>
                <p className="text-base text-slate-600 mt-2">
                    Merci de patienter, l'assistant IA rédige la synthèse. La conclusion va bientôt être affichée.
                </p>
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
                <h3 className="font-bold text-xl text-slate-800 flex items-center mb-3">
                    <BrainCircuit className="w-6 h-6 mr-3 text-blue-600" />
                    {title}
                </h3>
                <div className="max-w-none text-slate-800 leading-relaxed prose prose-base">
                    <FormattedText text={summary} />
                </div>
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1.5 text-slate-500 hover:bg-blue-100 hover:text-blue-700 rounded-md transition-colors"
                    aria-label="Copier la synthèse"
                >
                    {copied ? <span className="text-xs font-semibold text-blue-700">Copié!</span> : <Copy className="w-4 h-4" />}
                </button>
                 <p className="text-sm text-gray-500 mt-4 pt-3 border-t border-blue-200/60">
                    Avertissement : Cette synthèse est générée par une IA et est destinée à servir de support. Elle ne remplace pas le jugement clinique et doit être vérifiée par un professionnel de santé.
                </p>
            </div>
        </div>
    );
};