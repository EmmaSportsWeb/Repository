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
        <div className="relative flex min-h-[300px] flex-col border-b border-slate-800 bg-slate-950/70 p-3 sm:min-h-[400px] sm:p-4 md:p-5 lg:min-h-[460px] lg:border-r lg:border-b-0">
            {/* GLOW */}

            <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]" />

            {/* IMAGE */}

            <div className="relative flex min-h-[250px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950 sm:min-h-[330px] sm:rounded-2xl lg:min-h-0">
                {images.length > 0 ? (
                    <img
                        src={images[activeImage]}
                        alt={`${project.title} - captura ${activeImage + 1}`}
                        className="max-h-[260px] max-w-[90%] object-contain transition-all duration-300 sm:max-h-[330px] sm:max-w-[88%]"
                    />
                ) : (
                    <div className="px-4 text-center">
                        <Code2 size={40} className="mx-auto text-slate-700 sm:size-[45px]" />

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
                            className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white sm:h-9 sm:w-9"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={17} />
                        </button>

                        <button
                            type="button"
                            onClick={onNext}
                            className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white sm:h-9 sm:w-9"
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight size={17} />
                        </button>

                        {/* COUNTER */}

                        <div className="absolute right-2 bottom-2 rounded-lg border border-white/10 bg-slate-950/80 px-2 py-1 text-[10px] text-slate-400 backdrop-blur sm:px-2.5 sm:text-[11px]">
                            {activeImage + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>

            {/* THUMBNAILS */}

            {images.length > 1 && (
                <div className="relative mt-3 flex gap-2 overflow-x-auto pb-1">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => onSelectImage(index)}
                            className={`relative h-11 w-14 shrink-0 overflow-hidden rounded-lg border transition sm:h-12 sm:w-16 ${
                                activeImage === index
                                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                                    : 'border-slate-800 opacity-50 hover:border-slate-600 hover:opacity-100'
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
