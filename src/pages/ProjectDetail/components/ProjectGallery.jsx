import React from 'react';
import { Code2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectGallery({
    project,
    images,
    activeImage,
    onSelectImage,
    onPrevious,
    onNext,
}) {
    return (
        <div className="relative min-w-0 overflow-hidden border-b border-slate-800 bg-slate-950/70 p-3 sm:p-4 md:p-5 lg:border-r lg:border-b-0">
            {/* GLOW */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[70px] sm:h-64 sm:w-64 sm:blur-[100px]" />

            {/* IMAGE */}
            <div className="relative flex h-[260px] w-full min-w-0 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950 sm:h-[320px] sm:rounded-2xl md:h-[360px] lg:h-[420px]">
                {images.length > 0 ? (
                    <img
                        src={images[activeImage]}
                        alt={`${project.title} - captura ${activeImage + 1}`}
                        className="block h-auto max-h-[90%] w-auto max-w-[calc(100%-4rem)] object-contain select-none sm:max-h-[92%] sm:max-w-[calc(100%-5rem)]"
                    />
                ) : (
                    <div className="px-4 text-center">
                        <Code2 size={40} className="mx-auto text-slate-700" />

                        <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                            Sin imágenes disponibles
                        </p>
                    </div>
                )}

                {/* NAVIGATION */}
                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={onPrevious}
                            className="absolute top-1/2 left-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-slate-950/90 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white active:scale-95 sm:h-10 sm:w-10"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={onNext}
                            className="absolute top-1/2 right-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-slate-950/90 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white active:scale-95 sm:h-10 sm:w-10"
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight size={18} />
                        </button>

                        {/* COUNTER */}
                        <div className="absolute right-2 bottom-2 z-10 rounded-lg border border-white/10 bg-slate-950/90 px-2.5 py-1 text-[10px] text-slate-400 backdrop-blur sm:text-[11px]">
                            {activeImage + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
                <div className="mt-2 flex w-full max-w-full min-w-0 gap-2 overflow-x-auto overflow-y-hidden pb-1 sm:mt-3">
                    {images.map((image, index) => (
                        <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => onSelectImage(index)}
                            className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition sm:h-14 sm:w-[4.5rem] ${
                                activeImage === index
                                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                                    : 'border-slate-800 opacity-60 hover:border-slate-600 hover:opacity-100'
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Miniatura ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
