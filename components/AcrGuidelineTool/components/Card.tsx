import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'highlight';
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', variant = 'default' }) => {
    
    const variantClasses = {
        default: 'border-slate-200/80',
        highlight: 'border-blue-500 border-2 shadow-blue-100',
    };

    return (
        <div className={`bg-white rounded-xl shadow-sm border ${variantClasses[variant]} p-6 ${className}`}>
            {title && (
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-3 border-b border-slate-200">
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
};