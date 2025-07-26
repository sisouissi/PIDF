import React from 'react';
import { CheckCircle } from '../../icons';

interface CheckboxCardProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

export const CheckboxCard: React.FC<CheckboxCardProps> = ({ id, label, checked, onChange }) => {
    return (
        <label
            htmlFor={id}
            className={`relative flex items-center justify-center text-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 shadow-sm ${
                checked
                    ? 'bg-blue-50 border-blue-500 text-blue-900'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400'
            }`}
        >
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only" // Hide the default checkbox
            />
            <span className="text-sm font-medium">{label}</span>
            {checked && (
                <div className="absolute -top-2 -right-2">
                    <CheckCircle className="w-5 h-5 text-white bg-blue-600 rounded-full" />
                </div>
            )}
        </label>
    );
};