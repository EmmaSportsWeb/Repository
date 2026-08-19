import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        setActiveImage(0);
        setView('web');
    }, [slug]);

    if (!project) {
        return <ProjectNotFound />;
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
        <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
            {/* BACKGROUND */}

            <BackgroundEffects />

            {/* CONTENT */}

            <section className="relative min-h-screen px-6 py-8">
                <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center">
                    {/* HEADER */}

                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <ProjectHeader project={project} />

                        <ViewSelector view={view} project={project} onChange={changeView} />
                    </div>

                    {/* PROJECT */}

                    <div className="grid overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-[0.82fr_1.18fr]">
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
