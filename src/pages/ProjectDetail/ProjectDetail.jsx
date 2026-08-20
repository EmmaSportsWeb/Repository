import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackgroundEffects from '../../components/BackgroundEffects';

import projects from '../Projects/data/projects';

import ProjectNotFound from './components/ProjectNotFound';
import ProjectHeader from './components/ProjectHeader';
import ViewSelector from './components/ViewSelector';
import ProjectGallery from './components/ProjectGallery';
import ProjectInformation from './components/ProjectInformation';

export default function ProjectDetail() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    const [activeImage, setActiveImage] = useState(0);
    const [view, setView] = useState('web');

    // ==================================================
    // CAMBIO DE PROYECTO
    // ==================================================
    useLayoutEffect(() => {
        // Reset de la galería
        setActiveImage(0);
        setView('web');

        // IMPORTANTE:
        // Se ejecuta antes de que el navegador pinte
        // la nueva posición de la página.
        window.scrollTo(0, 0);

        // Refuerzo para navegadores móviles
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [slug]);

    if (!project) {
        return <ProjectNotFound />;
    }

    const images = view === 'web' ? project.images : project.mobileImages;

    // ==================================================
    // NEXT
    // ==================================================
    const nextImage = () => {
        if (!images.length) return;

        setActiveImage((current) => (current >= images.length - 1 ? 0 : current + 1));
    };

    // ==================================================
    // PREVIOUS
    // ==================================================
    const previousImage = () => {
        if (!images.length) return;

        setActiveImage((current) => (current <= 0 ? images.length - 1 : current - 1));
    };

    // ==================================================
    // CHANGE VIEW
    // ==================================================
    const changeView = (newView) => {
        if (newView === 'mobile' && project.mobileImages.length === 0) {
            return;
        }

        setView(newView);
        setActiveImage(0);
    };

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-[#020617] text-white">
            <BackgroundEffects />

            <section className="relative w-full px-3 py-5 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:py-10">
                <div className="mx-auto w-full max-w-7xl">
                    {/* HEADER */}
                    <div className="mb-4 flex w-full flex-col gap-4 sm:mb-6 md:flex-row md:items-end md:justify-between">
                        <div className="min-w-0 flex-1">
                            <ProjectHeader project={project} />
                        </div>

                        <div className="w-full shrink-0 md:w-auto">
                            <ViewSelector view={view} project={project} onChange={changeView} />
                        </div>
                    </div>

                    {/* PROJECT */}
                    <div className="grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-3xl lg:grid-cols-[0.82fr_1.18fr]">
                        {/* GALLERY */}
                        <ProjectGallery
                            project={project}
                            images={images}
                            activeImage={activeImage}
                            onSelectImage={setActiveImage}
                            onPrevious={previousImage}
                            onNext={nextImage}
                        />

                        {/* INFORMATION */}
                        <ProjectInformation project={project} />
                    </div>
                </div>
            </section>
        </main>
    );
}
