import React from 'react';

import BackgroundEffects from '../../components/BackgroundEffects';
import Hero from './components/Hero';
import TechStackCard from './components/TechStackCard';

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
            {/* BACKGROUND */}

            <BackgroundEffects />

            {/* HERO */}

            <Hero>
                <TechStackCard />
            </Hero>
        </main>
    );
}
