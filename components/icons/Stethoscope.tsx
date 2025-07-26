import React from 'react';

export const Stethoscope = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.8 2.3A.3.3 0 1 0 5.4 2a3.4 3.4 0 0 1 5.1 1.6l.9 1.5c.3.5.9.8 1.5.8h.1c.6 0 1.2-.3 1.5-.8l.9-1.5a3.4 3.4 0 0 1 5.1-1.6.3.3 0 1 0 .6.5 4 4 0 0 0-5.9-1.9l-.9 1.5c-.3.5-1 .8-1.7.8h-.1c-.7 0-1.4-.3-1.7-.8l-.9-1.5A4 4 0 0 0 4.8 2.3Z" />
        <path d="M8 15v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1" />
        <path d="M8 9v2" />
        <path d="M16 9v2" />
        <path d="M12 9v1.5" />
        <path d="M9 12h6" />
        <circle cx="12" cy="12" r="7" />
    </svg>
);