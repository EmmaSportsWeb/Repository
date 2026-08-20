import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Code2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProjectGallery({
    project,
    images,
    activeImage,
    onSelectImage,
    onPrevious,
    onNext,
}) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // ==================================================
    // IMAGE DIMENSIONS
    // ==================================================
    const [imageOrientation, setImageOrientation] = useState('landscape');

    // ==================================================
    // REFS
    // ==================================================
    const lightboxScrollRef = useRef(null);

    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    // ==================================================
    // CURRENT IMAGE
    // ==================================================
    const currentImage = images[activeImage];

    // ==================================================
    // LOAD IMAGE DIMENSIONS
    // ==================================================
    useEffect(() => {
        if (!currentImage) return;

        const image = new Image();

        image.onload = () => {
            if (image.naturalHeight > image.naturalWidth) {
                setImageOrientation('portrait');
            } else {
                setImageOrientation('landscape');
            }
        };

        image.src = currentImage;
    }, [currentImage]);

    // ==================================================
    // RESET LIGHTBOX SCROLL WHEN IMAGE CHANGES
    // ==================================================
    useLayoutEffect(() => {
        if (!isLightboxOpen) return;

        const scrollContainer = lightboxScrollRef.current;

        if (!scrollContainer) return;

        scrollContainer.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [activeImage, isLightboxOpen]);

    // ==================================================
    // KEYBOARD + BODY SCROLL
    // ==================================================
    useEffect(() => {
        if (!isLightboxOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsLightboxOpen(false);
                return;
            }

            if (images.length > 1) {
                if (event.key === 'ArrowLeft') {
                    onPrevious();
                }

                if (event.key === 'ArrowRight') {
                    onNext();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);

            document.body.style.overflow = previousOverflow;
        };
    }, [isLightboxOpen, images.length, onPrevious, onNext]);

    // ==================================================
    // OPEN LIGHTBOX
    // ==================================================
    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    // ==================================================
    // CLOSE LIGHTBOX
    // ==================================================
    const closeLightbox = () => {
        setIsLightboxOpen(false);

        touchStartX.current = null;
        touchStartY.current = null;
    };

    // ==================================================
    // TOUCH START
    // ==================================================
    const handleTouchStart = (event) => {
        const touch = event.touches[0];

        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    // ==================================================
    // TOUCH END
    // ==================================================
    const handleTouchEnd = (event) => {
        if (touchStartX.current === null || touchStartY.current === null) {
            return;
        }

        const touch = event.changedTouches[0];

        const deltaX = touch.clientX - touchStartX.current;

        const deltaY = touch.clientY - touchStartY.current;

        touchStartX.current = null;
        touchStartY.current = null;

        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        // ==================================================
        // VERTICAL
        // ==================================================
        // IMPORTANTE:
        //
        // Si el movimiento es vertical no hacemos nada.
        // El navegador se encarga del scroll.
        //
        if (absY >= absX) {
            return;
        }

        // ==================================================
        // HORIZONTAL
        // ==================================================
        if (absX < 50) {
            return;
        }

        if (images.length <= 1) {
            return;
        }

        if (deltaX < 0) {
            // Swipe izquierda
            onNext();
        } else {
            // Swipe derecha
            onPrevious();
        }
    };

    // ==================================================
    // LIGHTBOX
    // ==================================================
    const lightbox = isLightboxOpen && images.length > 0 && (
        <div className="fixed inset-0 z-[99999] h-[100dvh] w-screen overflow-hidden bg-black/95 backdrop-blur-sm">
            {/* ==================================================
                    COUNTER
                ================================================== */}
            <div className="pointer-events-none fixed top-0 right-0 left-0 z-[100] flex justify-center px-4 pt-3 sm:pt-6">
                <div className="rounded-lg border border-white/10 bg-slate-900/90 px-3 py-1.5 text-xs text-slate-300 shadow-xl backdrop-blur">
                    {activeImage + 1} / {images.length}
                </div>
            </div>

            {/* ==================================================
                    CLOSE
                ================================================== */}
            <button
                type="button"
                onClick={closeLightbox}
                className="fixed top-3 right-3 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/95 text-white shadow-2xl backdrop-blur transition hover:bg-slate-800 active:scale-90 sm:top-6 sm:right-6 sm:h-10 sm:w-10"
                aria-label="Cerrar imagen"
            >
                <X size={23} />
            </button>

            {/* ==================================================
                    SCROLL AREA
                ================================================== */}
            <div
                ref={lightboxScrollRef}
                className="h-[100dvh] w-full touch-pan-y overflow-x-hidden overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* ==================================================
                        IMAGE CONTAINER
                    ================================================== */}
                <div
                    className={`flex w-full justify-center px-3 sm:px-16 ${
                        imageOrientation === 'landscape'
                            ? `min-h-[100dvh] items-center py-20`
                            : `items-start py-20 pb-24`
                    } `}
                >
                    {/* ==================================================
                            IMAGE
                        ================================================== */}
                    <img
                        key={currentImage}
                        src={currentImage}
                        alt={`${project.title} - captura ${activeImage + 1}`}
                        draggable={false}
                        className={`block h-auto w-auto rounded-lg object-contain shadow-2xl select-none ${
                            imageOrientation === 'landscape'
                                ? `max-h-[calc(100dvh-10rem)] max-w-[calc(100vw-6rem)] `
                                : `max-w-[calc(100vw-1.5rem)] `
                        } sm:max-h-[88vh] sm:max-w-[85vw]`}
                    />
                </div>
            </div>

            {/* ==================================================
                    PREVIOUS
                ================================================== */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={onPrevious}
                    className="fixed top-1/2 left-2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/95 text-white shadow-2xl backdrop-blur transition hover:bg-slate-800 active:scale-90 sm:left-6 sm:h-12 sm:w-12"
                    aria-label="Imagen anterior"
                >
                    <ChevronLeft size={25} />
                </button>
            )}

            {/* ==================================================
                    NEXT
                ================================================== */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={onNext}
                    className="fixed top-1/2 right-2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/95 text-white shadow-2xl backdrop-blur transition hover:bg-slate-800 active:scale-90 sm:right-6 sm:h-12 sm:w-12"
                    aria-label="Imagen siguiente"
                >
                    <ChevronRight size={25} />
                </button>
            )}

            {/* ==================================================
                    MOBILE HINT
                ================================================== */}
            {images.length > 1 && (
                <div className="pointer-events-none fixed bottom-3 left-1/2 z-[110] -translate-x-1/2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] whitespace-nowrap text-slate-400 backdrop-blur sm:hidden">
                    ← → cambiar imágenes
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* ==================================================
                GALLERY
            ================================================== */}
            <div className="relative flex min-h-[300px] min-w-0 flex-col border-b border-slate-800 bg-slate-950/70 p-3 sm:min-h-[400px] sm:p-4 md:p-5 lg:min-h-[460px] lg:border-r lg:border-b-0">
                {/* ==================================================
                    GLOW
                ================================================== */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]" />

                {/* ==================================================
                    MAIN IMAGE
                ================================================== */}
                <div className="relative flex min-h-[250px] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950 sm:min-h-[330px] sm:rounded-2xl lg:min-h-0">
                    {images.length > 0 ? (
                        <button
                            type="button"
                            onClick={openLightbox}
                            className="group relative flex h-full w-full cursor-zoom-in items-center justify-center"
                            aria-label="Ampliar imagen"
                        >
                            <img
                                src={currentImage}
                                alt={`${project.title} - captura ${activeImage + 1}`}
                                className="pointer-events-none max-h-[260px] max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-[330px] sm:max-w-[88%]"
                            />

                            {/* ==================================================
                                ZOOM HINT
                            ================================================== */}
                            <div className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 shadow-xl backdrop-blur sm:block">
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

                    {/* ==================================================
                        MAIN NAVIGATION
                    ================================================== */}
                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={onPrevious}
                                className="absolute top-1/2 left-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white active:scale-95"
                                aria-label="Imagen anterior"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={onNext}
                                className="absolute top-1/2 right-2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-slate-300 shadow-xl backdrop-blur transition hover:bg-slate-800 hover:text-white active:scale-95"
                                aria-label="Imagen siguiente"
                            >
                                <ChevronRight size={18} />
                            </button>

                            {/* COUNTER */}
                            <div className="absolute right-2 bottom-2 z-10 rounded-lg border border-white/10 bg-slate-950/80 px-2 py-1 text-[10px] text-slate-400 backdrop-blur sm:px-2.5 sm:text-[11px]">
                                {activeImage + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>

                {/* ==================================================
                    THUMBNAILS
                ================================================== */}
                {images.length > 1 && (
                    <div className="mt-3 max-w-full min-w-0">
                        <div className="flex w-full max-w-full touch-pan-x scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-2 [-webkit-overflow-scrolling:touch]">
                            {images.map((image, index) => (
                                <button
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => onSelectImage(index)}
                                    className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition active:scale-95 ${
                                        activeImage === index
                                            ? 'border-blue-500 ring-2 ring-blue-500/20'
                                            : 'border-slate-800 opacity-50 hover:border-slate-600 hover:opacity-100'
                                    } `}
                                >
                                    <img
                                        src={image}
                                        alt={`Miniatura ${index + 1}`}
                                        className="pointer-events-none h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* ==================================================
                PORTAL
            ================================================== */}
            {typeof document !== 'undefined' && createPortal(lightbox, document.body)}
        </>
    );
}
