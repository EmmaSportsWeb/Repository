import React from 'react';

import BackgroundEffects from '../../components/BackgroundEffects';
import ContactIntro from './components/ContactIntro';
import ContactCard from './components/ContactCard';

export default function Contact() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
            {/* BACKGROUND */}

            <BackgroundEffects variant="contact" />

            {/* CONTENT */}

            <section className="relative flex min-h-screen items-center px-6">
                <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* LEFT */}

                    <ContactIntro />

                    {/* RIGHT */}

                    <ContactCard />
                </div>
            </section>
        </main>
    );
}
