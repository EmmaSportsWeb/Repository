import React from 'react';
import { ArrowLeft, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectNotFound() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-[#020617] px-4 text-white">
            <div className="w-full max-w-md text-center">
                <Code2 size={50} className="mx-auto mb-5 text-slate-700" />

                <h1 className="text-2xl font-bold sm:text-3xl">Proyecto no encontrado</h1>

                <p className="mt-3 text-sm text-slate-500">
                    El proyecto que estás buscando no existe.
                </p>

                <Link
                    to="/proyectos"
                    className="mt-6 inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium transition hover:bg-blue-500"
                >
                    <ArrowLeft size={16} />
                    Volver a proyectos
                </Link>
            </div>
        </main>
    );
}
