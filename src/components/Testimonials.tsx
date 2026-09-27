import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VERIFIED_REVIEWS, DEALERSHIP } from '../data/dealership';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % VERIFIED_REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + VERIFIED_REVIEWS.length) % VERIFIED_REVIEWS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-b border-[#E8DFCE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A07818] font-bold mb-3">
              <span className="w-5 h-[2px] bg-[#D4AF37]" />
              <span>AUTHENTIC REPUTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight">
              BUILT AROUND<br />
              <span className="gold-gradient-text">CUSTOMER EXPERIENCE.</span>
            </h2>
          </div>

          {/* Google Rating Trust Badge in White and Gold */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DFCE] flex items-center gap-4 shrink-0 shadow-sm">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-[#E8DFCE]">
              <span className="text-3xl font-extrabold text-neutral-950 font-display tabular-numbers leading-none">
                {DEALERSHIP.googleRating.toFixed(1)}
              </span>
              <div className="flex items-center gap-0.5 mt-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                Google Rating
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Based on <span className="font-semibold text-neutral-800">{DEALERSHIP.reviewCount} verified Google reviews</span>
              </div>
              <a
                href={DEALERSHIP.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#A07818] hover:underline mt-1"
              >
                <span>View all Google reviews</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative min-h-[220px] sm:min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFCE] shadow-[0_12px_36px_-8px_rgba(212,175,55,0.15)] relative"
              >
                <Quote className="w-9 h-9 text-[#D4AF37]/40 mb-4" />

                <p className="text-lg sm:text-2xl font-medium text-stone-800 italic leading-relaxed">
                  &ldquo;{VERIFIED_REVIEWS[currentIndex].quote}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-neutral-950">
                      {VERIFIED_REVIEWS[currentIndex].author}
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      {VERIFIED_REVIEWS[currentIndex].date}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(VERIFIED_REVIEWS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev / Next / Dots */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {VERIFIED_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl bg-white border border-[#E8DFCE] text-stone-700 hover:text-neutral-950 hover:border-[#D4AF37] shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl bg-white border border-[#E8DFCE] text-stone-700 hover:text-neutral-950 hover:border-[#D4AF37] shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
