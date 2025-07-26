import React, { useState, useRef } from 'react';
import { ChevronRight } from './icons/ChevronRight';

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'danger' | 'success';
  onToggle?: (isOpen: boolean) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ title, icon, children, variant = 'default', onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const headerClasses = {
    default: 'bg-sky-600 hover:bg-sky-700 focus-visible:ring-sky-500',
    danger: 'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500',
  };

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onToggle?.(newIsOpen);
    
    if (newIsOpen) {
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 150);
    }
  };

  return (
    <div ref={accordionRef} className="rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <button
        onClick={handleToggle}
        className={`w-full flex items-center justify-between p-4 text-left font-semibold text-white ${headerClasses[variant]} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 shadow-md transition-all duration-200`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          <span className="text-base">{title}</span>
        </div>
        <ChevronRight
          className={`w-5 h-5 text-white transform transition-transform duration-200 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-slate-600 animate-fade-in bg-white">
          <div className="border-t border-slate-200 pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};