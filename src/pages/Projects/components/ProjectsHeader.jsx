import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ProjectsHeader() {
    return (
        <header className="mt-4 mb-8">
            {/* LABEL */}

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                <Sparkles size={15} className="text-blue-400" />
                Mis proyectos
            </div>

            {/* TITLE */}

            <h1 className="text-4xl leading-tight font-bold md:text-6xl">
                Proyectos que{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    he desarrollado.
                </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                Una selección de proyectos desarrollados utilizando tecnologías modernas, buenas
                prácticas y diferentes arquitecturas de software.
            </p>
        </header>
    );
}
