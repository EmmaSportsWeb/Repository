import React from 'react';
import { Rocket } from 'lucide-react';

import technologies from '../data/technologies';
import TechSection from './TechSection';

export default function TechStackCard() {
    return (
        <div className="relative flex w-full items-center justify-center">
            {/* CARD GLOW */}

            <div className="absolute h-56 w-56 rounded-full bg-blue-600/20 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />

            {/* CARD */}

            <div className="relative w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-3xl sm:p-7">
                {/* HEADER */}

                <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
                    <div className="shrink-0 rounded-xl border border-blue-400/10 bg-blue-500/10 p-3 sm:rounded-2xl sm:p-4">
                        <Rocket
                            size={22}
                            className="animate-[pulse_3s_ease-in-out_infinite] text-blue-400 sm:h-[25px] sm:w-[25px]"
                        />
                    </div>

                    <div className="min-w-0">
                        <p className="text-[10px] font-medium tracking-[0.16em] text-blue-400 uppercase sm:text-xs sm:tracking-[0.18em]">
                            Mi stack principal
                        </p>

                        <h3 className="mt-0.5 truncate text-lg font-bold sm:mt-1 sm:text-xl">
                            Full Stack Developer
                        </h3>
                    </div>
                </div>

                {/* STACK */}

                <TechSection title="Frontend" technologies={technologies.frontend} color="blue" />

                <TechSection title="Backend" technologies={technologies.backend} color="purple" />

                <TechSection title="Database" technologies={technologies.database} color="cyan" />

                <TechSection title="Tools" technologies={technologies.tools} color="slate" last />
            </div>
        </div>
    );
}
