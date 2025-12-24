import { useState } from 'react';
import Container from '../components/common/Container';
import Reveal from '../components/common/Reveal';

const images = Array.from({ length: 24 }).map(
    (_, i) => `https://picsum.photos/seed/gallery-${i}/600/400`
);

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const closeModal = () => setActiveIndex(null);

    const showPrev = () => {
        if (activeIndex !== null && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const showNext = () => {
        if (activeIndex !== null && activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    return (
        <>
            {/* PAGE HEADER */}
            <section className="bg-white dark:bg-slate-700 py-10">
                <Container>
                    <Reveal>
                        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
                            Gallery
                        </h1>
                    </Reveal>
                </Container>
            </section>

            {/* IMAGE GRID */}
            <section className="bg-gray-50 dark:bg-slate-700 py-6">
                <Container>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {images.map((src, index) => (
                            <Reveal key={src} delay={index * 80}>
                                <button
                                    key={src}
                                    onClick={() => setActiveIndex(index)}
                                    className="group relative overflow-hidden rounded-lg focus:outline-none"
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${index + 1}`}
                                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                                </button>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* PREVIEW MODAL */}
            {activeIndex !== null && (
                <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center">
                    {/* Close */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white text-2xl hover:opacity-80"
                        aria-label="Close preview"
                    >
                        ✕
                    </button>

                    {/* Prev */}
                    <button
                        onClick={showPrev}
                        disabled={activeIndex === 0}
                        className={`absolute left-6 text-4xl text-white px-4 py-2 rounded-full
              ${activeIndex === 0
                                ? 'opacity-30 cursor-not-allowed'
                                : 'hover:bg-white/20'
                            }`}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <img
                        src={images[activeIndex]}
                        alt={`Preview ${activeIndex + 1}`}
                        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                    />

                    {/* Next */}
                    <button
                        onClick={showNext}
                        disabled={activeIndex === images.length - 1}
                        className={`absolute right-6 text-4xl text-white px-4 py-2 rounded-full
              ${activeIndex === images.length - 1
                                ? 'opacity-30 cursor-not-allowed'
                                : 'hover:bg-white/20'
                            }`}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            )}
        </>
    );
};

export default Gallery;
