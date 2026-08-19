import React, { useEffect, useState } from 'react';

import {
    ArrowLeft,
    CalendarDays,
    Code2,
    Database,
    Server,
    ShieldCheck,
    Users,
    Clock3,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    Monitor,
    Smartphone,
    ExternalLink,
} from 'lucide-react';

import { Link, useParams } from 'react-router-dom';

import projects from '../Projects/data/projects';

export default function ProjectDetail() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    const [activeImage, setActiveImage] = useState(0);
    const [view, setView] = useState('web');

    useEffect(() => {
        setActiveImage(0);
        setView('web');
    }, [slug]);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-white">
                <div className="text-center">
                    <Code2 size={50} className="mx-auto mb-5 text-slate-700" />

                    <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>

                    <p className="mt-3 text-slate-500">El proyecto que estás buscando no existe.</p>

                    <Link
                        to="/proyectos"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium transition hover:bg-blue-500"
                    >
                        <ArrowLeft size={16} />
                        Volver a proyectos
                    </Link>
                </div>
            </main>
        );
    }

    const images = view === 'web' ? project.images : project.mobileImages;

    const nextImage = () => {
        if (images.length === 0) return;

        setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
    };

    const previousImage = () => {
        if (images.length === 0) return;

        setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
    };

    const changeView = (newView) => {
        if (newView === 'mobile' && project.mobileImages.length === 0) {
            return;
        }

        setView(newView);
        setActiveImage(0);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
            {/* BACKGROUND */}

            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute top-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

                <div className="absolute right-[-200px] bottom-[-250px] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

                <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
            </div>

            <section className="relative min-h-screen px-6 py-8">
                <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center">
                    {/* HEADER */}

                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                                <Sparkles size={15} className="text-blue-400" />
                                Proyecto {project.type}
                            </div>

                            <h1 className="text-4xl leading-tight font-bold md:text-6xl">
                                {project.title}
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                                {project.description}
                            </p>
                        </div>

                        {/* VIEW SELECTOR */}

                        <div className="flex w-fit items-center rounded-xl border border-slate-800 bg-slate-900/60 p-1 backdrop-blur">
                            <button
                                type="button"
                                onClick={() => changeView('web')}
                                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                                    view === 'web'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'text-slate-500 hover:text-slate-300'
                                }`}
                            >
                                <Monitor size={16} />
                                Web
                            </button>

                            <button
                                type="button"
                                disabled={project.mobileImages.length === 0}
                                onClick={() => changeView('mobile')}
                                title={
                                    project.mobileImages.length === 0
                                        ? 'Próximamente'
                                        : 'Ver versión mobile'
                                }
                                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${
                                    project.mobileImages.length === 0
                                        ? 'cursor-not-allowed text-slate-700'
                                        : view === 'mobile'
                                          ? 'bg-blue-600 text-white'
                                          : 'text-slate-500 hover:text-slate-300'
                                }`}
                            >
                                <Smartphone size={16} />
                                Mobile
                                {project.mobileImages.length === 0 && (
                                    <span className="text-[9px] uppercase">Próximamente</span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* PROJECT */}

                    <div className="grid overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-[0.82fr_1.18fr]">
                        {/* GALLERY */}

                        <div className="relative flex min-h-[400px] flex-col border-b border-slate-800 bg-slate-950/70 p-4 md:p-5 lg:min-h-[460px] lg:border-r lg:border-b-0">
                            <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

                            {/* IMAGE */}

                            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                                {images.length > 0 ? (
                                    <img
                                        src={images[activeImage]}
                                        alt={`${project.title} - captura ${activeImage + 1}`}
                                        className="max-h-[330px] max-w-[88%] object-contain transition-all duration-300"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <Code2 size={45} className="mx-auto text-slate-700" />

                                        <p className="mt-3 text-sm text-slate-600">
                                            Sin imágenes disponibles
                                        </p>
                                    </div>
                                )}

                                {images.length > 1 && (
                                    <>
                                        {/* PREVIOUS */}

                                        <button
                                            type="button"
                                            onClick={previousImage}
                                            className="absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white"
                                            aria-label="Imagen anterior"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>

                                        {/* NEXT */}

                                        <button
                                            type="button"
                                            onClick={nextImage}
                                            className="absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white"
                                            aria-label="Imagen siguiente"
                                        >
                                            <ChevronRight size={18} />
                                        </button>

                                        {/* COUNTER */}

                                        <div className="absolute right-2 bottom-2 rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1 text-[11px] text-slate-400 backdrop-blur">
                                            {activeImage + 1} / {images.length}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* THUMBNAILS */}

                            {images.length > 1 && (
                                <div className="relative mt-3 flex gap-2 overflow-x-auto pb-1">
                                    {images.map((image, index) => (
                                        <button
                                            key={image}
                                            type="button"
                                            onClick={() => setActiveImage(index)}
                                            className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition ${
                                                activeImage === index
                                                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                                                    : 'border-slate-800 opacity-50 hover:border-slate-600 hover:opacity-100'
                                            }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Miniatura ${index + 1}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* INFORMATION */}

                        <div className="p-5 md:p-6 lg:p-7">
                            {/* TITLE */}

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">
                                        Proyecto
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                                        {project.title}
                                    </h2>
                                </div>

                                <div className="rounded-xl bg-blue-500/10 p-3">
                                    <Code2 size={22} className="text-blue-400" />
                                </div>
                            </div>

                            {/* DESCRIPTION */}

                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                {project.fullDescription}
                            </p>

                            {/* ARCHITECTURE */}

                            <div className="mt-4 grid grid-cols-3 gap-2">
                                {project.architecture.map((architecture) => (
                                    <ArchitectureCard key={architecture.title} {...architecture} />
                                ))}
                            </div>

                            {/* ARCHITECTURE DESCRIPTION */}

                            <p className="mt-3 text-xs leading-relaxed text-slate-500">
                                {project.architectureDescription}
                            </p>

                            {/* FEATURES */}

                            <div className="mt-4">
                                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                    Funcionalidades
                                </p>

                                <div className="grid grid-cols-2 gap-2">
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

                            <div className="mt-4">
                                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                    Tecnologías
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-lg border border-slate-800 bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* LINKS */}

                            {(project.github || project.demo) && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-xs font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
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
                                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-blue-500"
                                        >
                                            <ExternalLink size={15} />
                                            Ver demo
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* STATUS */}

                            <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-4 py-3">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                <span className="text-xs text-emerald-400">{project.status}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ArchitectureCard({ icon: Icon, title, value, color }) {
    const colors = {
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        cyan: 'text-cyan-400',
    };

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <Icon size={17} className={colors[color]} />

            <p className="mt-2 text-xs text-slate-500">{title}</p>

            <p className="mt-1 text-sm font-medium text-slate-200">{value}</p>
        </div>
    );
}
