import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

import ArchitectureCard from './ArchitectureCard';

export default function ProjectInformation({ project }) {
    return (
        <div className="min-w-0 p-4 sm:p-5 md:p-6 lg:p-7">
            {/* TITLE */}

            <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                    <p className="text-[10px] font-medium tracking-[0.2em] text-blue-400 uppercase sm:text-xs">
                        Proyecto
                    </p>

                    <h2 className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl">
                        {project.title}
                    </h2>
                </div>

                <div className="shrink-0 rounded-xl bg-blue-500/10 p-2.5 sm:p-3">
                    <Code2 size={20} className="text-blue-400 sm:size-[22px]" />
                </div>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.fullDescription}</p>

            {/* ARCHITECTURE */}

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {project.architecture.map((architecture) => (
                    <ArchitectureCard key={architecture.title} {...architecture} />
                ))}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {project.architectureDescription}
            </p>

            {/* FEATURES */}

            <div className="mt-5">
                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    Funcionalidades
                </p>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-xl border border-slate-800 bg-slate-950/40 p-3"
                            >
                                <Icon size={17} className="text-blue-400" />

                                <p className="mt-2 text-xs font-semibold text-slate-200">
                                    {feature.title}
                                </p>

                                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* TECHNOLOGIES */}

            <div className="mt-5">
                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    Tecnologías
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-slate-800 bg-slate-800/50 px-2.5 py-1 text-[11px] text-slate-300 sm:text-xs"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            {/* LINKS */}

            {(project.github || project.demo) && (
                <div className="mt-5 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 sm:w-auto sm:py-2.5"
                        >
                            GitHub
                            <ExternalLink size={12} />
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-medium text-white transition hover:bg-blue-500 sm:w-auto sm:py-2.5"
                        >
                            <ExternalLink size={15} />
                            Ver demo
                        </a>
                    )}
                </div>
            )}

            {/* STATUS */}

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-3 py-3 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

                <span className="text-xs text-emerald-400">{project.status}</span>
            </div>
        </div>
    );
}
