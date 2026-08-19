import React from 'react';

const colors = {
    blue: {
        text: 'text-blue-400',
        badge: 'border-blue-500/20 bg-blue-500/10 text-blue-300 hover:border-blue-400/40 hover:bg-blue-500/15',
    },

    purple: {
        text: 'text-purple-400',
        badge: 'border-purple-500/20 bg-purple-500/10 text-purple-300 hover:border-purple-400/40 hover:bg-purple-500/15',
    },

    cyan: {
        text: 'text-cyan-400',
        badge: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/15',
    },

    slate: {
        text: 'text-slate-400',
        badge: 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600 hover:bg-slate-800',
    },
};

export default function TechSection({ title, technologies, color = 'blue', last = false }) {
    const style = colors[color];

    return (
        <div className={last ? '' : 'mb-4 sm:mb-5'}>
            <p
                className={`mb-2 text-[10px] font-semibold tracking-[0.16em] uppercase ${style.text} sm:text-xs sm:tracking-wider`}
            >
                {title}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className={`cursor-default rounded-lg border px-2.5 py-1 text-xs transition duration-200 hover:-translate-y-0.5 sm:px-3 sm:py-1.5 sm:text-sm ${style.badge} `}
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </div>
    );
}
