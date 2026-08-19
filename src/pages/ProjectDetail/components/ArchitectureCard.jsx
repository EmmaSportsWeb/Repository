import React from 'react';

export default function ArchitectureCard({ icon: Icon, title, value, color }) {
    const colors = {
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        cyan: 'text-cyan-400',
    };

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <Icon size={17} className={colors[color] ?? 'text-slate-400'} />

            <p className="mt-2 text-xs text-slate-500">{title}</p>

            <p className="mt-1 text-sm font-medium break-words text-slate-200">{value}</p>
        </div>
    );
}
