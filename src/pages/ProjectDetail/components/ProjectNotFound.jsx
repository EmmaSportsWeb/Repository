import React from 'react';
import { ArrowLeft, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectNotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#020617] px-5 text-white sm:px-6">
            <div className="w-full max-w-md text-center">
                <Code2 size={45} className="mx-auto mb-5 text-slate-700 sm:size-[50px]" />

                <h1 className="text-2xl font-bold sm:text-3xl">Proyecto no encontrado</h1>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    El proyecto que estás buscando no existe.
                </p>

                <Link
                    to="/proyectos"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium transition hover:bg-blue-500 sm:w-auto"
                >
                    <ArrowLeft size={16} />
                    Volver a proyectos
                </Link>
            </div>
        </main>
    );
}
