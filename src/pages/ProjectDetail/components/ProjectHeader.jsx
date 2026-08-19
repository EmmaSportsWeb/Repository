import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ProjectHeader({ project }) {
    return (
        <div className="min-w-0">
            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles size={14} className="shrink-0 text-blue-400" />

                <span className="truncate">Proyecto {project.type}</span>
            </div>

            <h1 className="max-w-full text-3xl leading-[1.1] font-bold break-words sm:text-4xl md:text-5xl lg:text-6xl">
                {project.title}
            </h1>

            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
                {project.description}
            </p>
        </div>
    );
}
