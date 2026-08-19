import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function ViewSelector({ view, project, onChange }) {
    const hasMobileImages = project.mobileImages.length > 0;

    return (
        <div className="flex w-full items-center rounded-xl border border-slate-800 bg-slate-900/60 p-1 backdrop-blur md:w-fit">
            {/* WEB */}
            <button
                type="button"
                onClick={() => onChange('web')}
                className={`flex min-h-[40px] flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm md:flex-none ${
                    view === 'web'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                        : 'text-slate-500 hover:text-slate-300'
                }`}
            >
                <Monitor size={15} />

                <span>Web</span>
            </button>

            {/* MOBILE */}
            <button
                type="button"
                disabled={!hasMobileImages}
                onClick={() => onChange('mobile')}
                title={!hasMobileImages ? 'Próximamente' : 'Ver versión mobile'}
                className={`flex min-h-[40px] flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm md:flex-none ${
                    !hasMobileImages
                        ? 'cursor-not-allowed text-slate-700'
                        : view === 'mobile'
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                          : 'text-slate-500 hover:text-slate-300'
                }`}
            >
                <Smartphone size={15} />

                <span>Mobile</span>

                {!hasMobileImages && (
                    <span className="hidden text-[9px] uppercase sm:inline">Próximamente</span>
                )}
            </button>
        </div>
    );
}
