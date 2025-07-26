import React from 'react';

interface SwitchProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ id, label, checked, onChange }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label htmlFor={id} className="font-medium text-gray-800">
                {label}
            </label>
            <button
                type="button"
                id={id}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    checked ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
            >
                <span
                    aria-hidden="true"
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        checked ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
        </div>
    );
};