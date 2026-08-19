import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ children }) {
    return (
        <section className="relative flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-0">
            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* LEFT */}

                <div className="flex min-w-0 flex-col justify-center">
                    {/* STATUS */}

                    <div className="mb-5 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 shadow-lg shadow-blue-950/10 backdrop-blur sm:mb-6 sm:px-4 sm:text-sm">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>

                        <Sparkles
                            size={14}
                            className="shrink-0 text-blue-400 sm:h-[15px] sm:w-[15px]"
                        />

                        <span className="truncate">Disponible para oportunidades laborales</span>
                    </div>

                    {/* TITLE */}

                    <h1 className="text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                        Desarrollo
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text pb-2 text-transparent">
                            aplicaciones digitales
                        </span>
                        modernas.
                    </h1>

                    {/* DESCRIPTION */}

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
                        Soy Emmanuel, Full Stack Developer enfocado en crear soluciones web
                        escalables, seguras y con excelente experiencia de usuario.
                    </p>

                    {/* ACTIONS */}

                    <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
                        {/* PROJECTS */}

                        <Link
                            to="/projects"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30 sm:w-auto sm:px-7 sm:text-base"
                        >
                            Ver proyectos
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        {/* CONTACT */}

                        <Link
                            to="/contact"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/30 px-6 py-3.5 text-sm font-semibold backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900 sm:w-auto sm:px-7 sm:text-base"
                        >
                            <Mail
                                size={18}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                            Contactarme
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="min-w-0">{children}</div>
            </div>
        </section>
    );
}
