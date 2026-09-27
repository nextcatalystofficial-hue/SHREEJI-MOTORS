import { useState, useEffect } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroShowroom from '../assets/images/hero_showroom_1790518730598.jpg';
import showroomInterior from '../assets/images/showroom_interior_1790518741878.jpg';
import carFortuner from '../assets/images/car_fortuner_dark_1790518783346.jpg';
import carCreta from '../assets/images/car_creta_dark_1790518754015.jpg';

export default function ShowroomGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    {
      src: heroShowroom,
      title: "Main Display Floor",
      caption: "Atmospheric multi-vehicle exhibition bay at Ratu Road, Ranchi."
    },
    {
      src: showroomInterior,
      title: "Showroom Interior & Staging",
      caption: "Spotless glass architecture and focused vehicle inspection bay."
    },
    {
      src: carFortuner,
      title: "Commanding Flagship SUVs",
      caption: "Pre-owned SUVs detailed and presented in pristine delivery condition."
    },
    {
      src: carCreta,
      title: "Executive Lineup",
      caption: "Curated modern urban sedans and crossovers for discerning buyers."
    }
  ];

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % images.length);
      if (e.key === 'ArrowLeft')
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <section id="showroom" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-[#E5B842]" />
            <span>THE SHOWROOM EXPERIENCE</span>
            <span className="w-5 h-[1.5px] bg-[#E5B842]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            COME SEE IT<br />
            <span className="text-neutral-400">FOR YOURSELF.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4">
            Step into our premium showroom at Panchsheel Nagar, Ratu Road. Every vehicle is showcased
            under dedicated lighting in an immaculate, welcoming atmosphere.
          </p>
        </div>

        {/* Gallery Grid: 1 large primary + 2 smaller + 1 wide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Primary large image (7 cols) */}
          <div
            onClick={() => setLightboxIndex(0)}
            className="md:col-span-7 group relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] bg-neutral-900"
          >
            <img
              src={images[0].src}
              alt={images[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-2 rounded bg-black/70 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#E5B842] border border-[#E5B842]/40 flex items-center gap-1.5 shadow-xl">
                <Eye className="w-4 h-4" />
                <span>View Showroom</span>
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold block mb-1">
                Shreeji Motors
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                {images[0].title}
              </h3>
            </div>
          </div>

          {/* Two stacked smaller images (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 sm:gap-6">
            <div
              onClick={() => setLightboxIndex(1)}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] bg-neutral-900"
            >
              <img
                src={images[1].src}
                alt={images[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3.5 py-1.5 rounded bg-black/70 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#E5B842] border border-[#E5B842]/40 flex items-center gap-1.5 shadow-xl">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  {images[1].title}
                </h3>
              </div>
            </div>

            <div
              onClick={() => setLightboxIndex(2)}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] bg-neutral-900"
            >
              <img
                src={images[2].src}
                alt={images[2].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3.5 py-1.5 rounded bg-black/70 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#E5B842] border border-[#E5B842]/40 flex items-center gap-1.5 shadow-xl">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  {images[2].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Wide bottom image (12 cols) */}
          <div
            onClick={() => setLightboxIndex(3)}
            className="md:col-span-12 group relative aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] bg-neutral-900"
          >
            <img
              src={images[3].src}
              alt={images[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-2 rounded bg-black/70 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#E5B842] border border-[#E5B842]/40 flex items-center gap-1.5 shadow-xl">
                <Eye className="w-4 h-4" />
                <span>View Showroom</span>
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 sm:flex sm:items-center sm:justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold block mb-1">
                  Panchsheel Nagar, Ratu Road, Ranchi
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white font-display">
                  {images[3].title}
                </h3>
              </div>
              <p className="text-xs text-neutral-300 mt-2 sm:mt-0 max-w-sm">
                {images[3].caption}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close full view"
              className="absolute top-5 right-5 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
              }
              aria-label="Previous image"
              className="absolute left-4 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
              aria-label="Next image"
              className="absolute right-4 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full flex flex-col items-center"
            >
              <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-white font-display">
                  {images[lightboxIndex].title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 max-w-lg mx-auto">
                  {images[lightboxIndex].caption}
                </p>
                <span className="text-[11px] font-mono text-neutral-400 mt-2 block">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
