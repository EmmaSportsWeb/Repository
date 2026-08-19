import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

import ArchitectureCard from './ArchitectureCard';

export default function ProjectInformation({ project }) {
    return (
        <div className="w-full min-w-0 p-4 sm:p-5 md:p-6 lg:p-7">
            {/* HEADER */}
            <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium tracking-[0.2em] text-blue-400 uppercase sm:text-xs">
                        Proyecto
                    </p>

                    <h2 className="mt-1.5 text-xl leading-tight font-bold break-words text-white sm:mt-2 sm:text-2xl md:text-3xl">
                        {project.title}
                    </h2>
                </div>

                <div className="shrink-0 rounded-xl bg-blue-500/10 p-2.5 sm:p-3">
                    <Code2 size={20} className="text-blue-400 sm:h-[22px] sm:w-[22px]" />
                </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-3 text-xs leading-relaxed break-words text-slate-400 sm:text-sm">
                {project.fullDescription}
            </p>

            {/* ARCHITECTURE */}
            <div className="mt-4 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
                {project.architecture.map((architecture) => (
                    <ArchitectureCard key={architecture.title} {...architecture} />
                ))}
            </div>

            <p className="mt-3 text-[11px] leading-relaxed break-words text-slate-500 sm:text-xs">
                {project.architectureDescription}
            </p>

            {/* FEATURES */}
            <div className="mt-5 min-w-0">
                <p className="mb-3 text-[10px] font-semibold tracking-wider text-slate-500 uppercase sm:text-xs">
                    Funcionalidades
                </p>

                <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/40 p-3 transition-colors hover:border-slate-700"
                            >
                                <Icon size={17} className="text-blue-400" />

                                <p className="mt-2 text-xs font-semibold break-words text-slate-200 sm:text-sm">
                                    {feature.title}
                                </p>

                                <p className="mt-1 text-[11px] leading-relaxed break-words text-slate-500 sm:text-xs">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-5 min-w-0">
                <p className="mb-3 text-[10px] font-semibold tracking-wider text-slate-500 uppercase sm:text-xs">
                    Tecnologías
                </p>

                <div className="flex max-w-full min-w-0 flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="max-w-full rounded-lg border border-slate-800 bg-slate-800/50 px-2 py-1 text-[11px] break-words text-slate-300 sm:px-2.5 sm:text-xs"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            {/* LINKS */}
            {(project.github || project.demo) && (
                <div className="mt-5 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
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
                            className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-blue-500 sm:w-auto"
                        >
                            <ExternalLink size={15} />
                            Ver demo
                        </a>
                    )}
                </div>
            )}

            {/* STATUS */}
            <div className="mt-4 flex min-w-0 items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-3 py-2.5 sm:px-4 sm:py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

                <span className="min-w-0 text-[11px] break-words text-emerald-400 sm:text-xs">
                    {project.status}
                </span>
            </div>
        </div>
    );
}
