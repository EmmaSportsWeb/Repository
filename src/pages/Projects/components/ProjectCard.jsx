import React from 'react';
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    const firstImage = project.images?.[0];

    return (
        <Link
            to={`/proyectos/${project.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-950/20"
        >
            {/* IMAGE */}

            <div className="relative h-52 overflow-hidden bg-slate-950">
                {firstImage ? (
                    <img
                        src={firstImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-90"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <Code2 size={48} className="text-slate-700" />
                    </div>
                )}

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* TYPE */}

                <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-blue-300 backdrop-blur">
                    {project.type}
                </div>

                {/* ARROW */}

                <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 text-slate-300 opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ArrowRight size={18} />
                </div>
            </div>

            {/* CONTENT */}

            <div className="p-5">
                {/* HEADER */}

                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-400 uppercase">
                            {project.category}
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-white">{project.title}</h2>
                    </div>

                    <div className="rounded-xl bg-blue-500/10 p-2.5">
                        <Code2 size={19} className="text-blue-400" />
                    </div>
                </div>

                {/* DESCRIPTION */}

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-slate-800 bg-slate-800/50 px-2.5 py-1 text-[11px] text-slate-400"
                        >
                            {technology}
                        </span>
                    ))}

                    {project.technologies.length > 4 && (
                        <span className="rounded-lg border border-slate-800 bg-slate-800/50 px-2.5 py-1 text-[11px] text-slate-500">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* FOOTER */}

                <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-4">
                    <span className="flex items-center gap-2 text-xs text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        {project.status}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 transition group-hover:text-white">
                        Ver proyecto
                        <ExternalLink size={13} />
                    </span>
                </div>
            </div>
        </Link>
    );
}
