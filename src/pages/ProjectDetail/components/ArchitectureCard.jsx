import React from 'react';

export default function ArchitectureCard({ icon: Icon, title, value, color }) {
    const colors = {
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        cyan: 'text-cyan-400',
    };

    return (
        <div className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/50 p-3 transition-colors hover:border-slate-700">
            <Icon size={16} className={colors[color] || 'text-blue-400'} />

            <p className="mt-2 text-[11px] text-slate-500 sm:text-xs">{title}</p>

            <p className="mt-1 text-xs font-medium break-words text-slate-200 sm:text-sm">
                {value}
            </p>
        </div>
    );
}
