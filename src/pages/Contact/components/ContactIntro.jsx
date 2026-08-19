import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';

export default function ContactIntro() {
    const tags = ['Desarrollo Web', 'Full Stack', 'Soluciones Digitales'];

    return (
        <div className="flex flex-col justify-center">
            {/* STATUS */}

            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <Sparkles size={15} className="text-blue-400" />
                Disponible para oportunidades
            </div>

            {/* TITLE */}

            <h1 className="text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
                Hablemos
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text pb-2 text-transparent">
                    de tu próximo proyecto.
                </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Estoy disponible para oportunidades laborales, proyectos de desarrollo y nuevos
                desafíos dentro del mundo tecnológico.
            </p>

            {/* PROFILE */}

            <div className="mt-9 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Code2 size={22} className="text-blue-400" />
                </div>

                <div>
                    <p className="font-semibold text-white">Emmanuel Esteban Escalona Bustos</p>

                    <p className="mt-1 text-sm text-slate-500">Full Stack Developer</p>
                </div>
            </div>

            {/* TAGS */}

            <div className="mt-7 flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs text-slate-400"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
