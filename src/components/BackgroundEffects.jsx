import React from 'react';

export default function BackgroundEffects({ variant = 'default' }) {
    const variants = {
        default: (
            <>
                {/* BLUE GLOW */}
                <div className="absolute top-[-180px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px] sm:top-[-220px] sm:h-[450px] sm:w-[450px] lg:top-[-250px] lg:h-[600px] lg:w-[600px] lg:blur-[140px]" />

                {/* PURPLE GLOW */}
                <div className="absolute right-[-150px] bottom-[-180px] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[100px] sm:h-[450px] sm:w-[450px] lg:right-[-200px] lg:bottom-[-250px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />
            </>
        ),

        contact: (
            <>
                {/* BLUE GLOW */}
                <div className="absolute top-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

                {/* PURPLE GLOW */}
                <div className="absolute right-[-200px] bottom-[-250px] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

                {/* CYAN GLOW */}
                <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
            </>
        ),
    };

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {variants[variant]}
        </div>
    );
}
