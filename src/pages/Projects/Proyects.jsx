import React from 'react';

import BackgroundEffects from '../../components/BackgroundEffects';
import ProjectsHeader from './components/ProjectsHeader';
import ProjectsGrid from './components/ProjectsGrid';

export default function Projects() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
            {/* BACKGROUND */}

            <BackgroundEffects />

            {/* CONTENT */}

            <section className="relative">
                <div className="mx-auto max-w-7xl">
                    <ProjectsHeader />

                    <ProjectsGrid />
                </div>
            </section>
        </main>
    );
}
