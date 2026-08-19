import React, { useEffect } from 'react';
import { Code2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProjectGallery({
    project,
    images,
    activeImage,
    onSelectImage,
    onPrevious,
    onNext,
}) {
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

    // Cerrar con ESC
    useEffect(() => {
        if (!isLightboxOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false);
            }

            if (event.key === 'ArrowLeft' && images.length > 1) {
                onPrevious();
            }

            if (event.key === 'ArrowRight' && images.length > 1) {
                onNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Evita scroll del body mientras el modal está abierto
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen, images.length, onPrevious, onNext]);

    return (
        <>
            <div className="relative flex min-h-[300px] min-w-0 flex-col border-b border-slate-800 bg-slate-950/70 p-3 sm:min-h-[400px] sm:p-4 md:p-5 lg:min-h-[460px] lg:border-r lg:border-b-0">
                {/* GLOW */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]" />

                {/* IMAGE */}
                <div className="relative flex min-h-[250px] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950 sm:min-h-[330px] sm:rounded-2xl lg:min-h-0">
                    {images.length > 0 ? (
                        <button
                            type="button"
                            onClick={() => setIsLightboxOpen(true)}
                            className="group flex h-full w-full cursor-zoom-in items-center justify-center"
                            aria-label="Ampliar imagen"
                        >
                            <img
                                src={images[activeImage]}
                                alt={`${project.title} - captura ${activeImage + 1}`}
                                className="max-h-[260px] max-w-[90%] object-contain transition-all duration-300 group-hover:scale-[1.02] sm:max-h-[330px] sm:max-w-[88%]"
                            />

                            {/* Indicador de zoom */}
                            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 opacity-0 shadow-xl backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                                Click para ampliar
                            </div>
                        </button>
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
                                className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white sm:h-9 sm:w-9"
                                aria-label="Imagen anterior"
                            >
                                <ChevronLeft size={17} />
                            </button>

                            <button
                                type="button"
                                onClick={onNext}
                                className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white sm:h-9 sm:w-9"
                                aria-label="Imagen siguiente"
                            >
                                <ChevronRight size={17} />
                            </button>

                            {/* COUNTER */}
                            <div className="absolute right-2 bottom-2 z-10 rounded-lg border border-white/10 bg-slate-950/80 px-2 py-1 text-[10px] text-slate-400 backdrop-blur sm:px-2.5 sm:text-[11px]">
                                {activeImage + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>

                {/* THUMBNAILS */}
                {images.length > 1 && (
                    <div className="mt-3 max-w-full min-w-0 overflow-hidden">
                        <div className="flex w-max max-w-none gap-2 overflow-x-auto pr-1 pb-2">
                            {images.map((image, index) => (
                                <button
                                    key={`${image}-${index}`}
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
                    </div>
                )}
            </div>

            {/* LIGHTBOX */}
            {isLightboxOpen && images.length > 0 && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsLightboxOpen(false);
                        }
                    }}
                >
                    {/* CLOSE */}
                    <button
                        type="button"
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white sm:top-6 sm:right-6"
                        aria-label="Cerrar imagen"
                    >
                        <X size={22} />
                    </button>

                    {/* COUNTER */}
                    <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 backdrop-blur sm:top-6">
                        {activeImage + 1} / {images.length}
                    </div>

                    {/* PREVIOUS */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            onClick={onPrevious}
                            className="absolute top-1/2 left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white shadow-xl backdrop-blur transition hover:bg-slate-800 sm:left-6 sm:h-12 sm:w-12"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={25} />
                        </button>
                    )}

                    {/* IMAGE */}
                    <img
                        src={images[activeImage]}
                        alt={`${project.title} - captura ${activeImage + 1}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl sm:max-h-[88vh] sm:max-w-[85vw]"
                    />

                    {/* NEXT */}
                    {images.length > 1 && (
                        <button
                            type="button"
                            onClick={onNext}
                            className="absolute top-1/2 right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white shadow-xl backdrop-blur transition hover:bg-slate-800 sm:right-6 sm:h-12 sm:w-12"
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight size={25} />
                        </button>
                    )}

                    {/* HINT */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-slate-500">
                        ← → para navegar · ESC para cerrar
                    </div>
                </div>
            )}
        </>
    );
}
