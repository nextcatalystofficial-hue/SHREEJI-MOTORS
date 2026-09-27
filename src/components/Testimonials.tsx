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
    <section id="reviews" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold mb-3">
              <span className="w-5 h-[1.5px] bg-[#E5B842]" />
              <span>AUTHENTIC REPUTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              BUILT AROUND<br />
              <span className="text-neutral-400">CUSTOMER EXPERIENCE.</span>
            </h2>
          </div>

          {/* Google Rating Trust Badge */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#121212] border border-white/[0.08] flex items-center gap-4 shrink-0 shadow-xl">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-white/[0.08]">
              <span className="text-3xl font-extrabold text-white font-display tabular-numbers leading-none">
                {DEALERSHIP.googleRating.toFixed(1)}
              </span>
              <div className="flex items-center gap-0.5 mt-1 text-[#E5B842]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Google Rating
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                Based on <span className="font-semibold text-neutral-200">{DEALERSHIP.reviewCount} verified Google reviews</span>
              </div>
              <a
                href={DEALERSHIP.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#E5B842] hover:underline mt-1"
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
                className="w-full glass-card rounded-2xl p-6 sm:p-10 border border-white/[0.08] relative"
              >
                <Quote className="w-8 h-8 text-[#E5B842]/30 mb-4" />

                <p className="text-lg sm:text-2xl font-medium text-neutral-100 italic leading-relaxed">
                  &ldquo;{VERIFIED_REVIEWS[currentIndex].quote}&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">
                      {VERIFIED_REVIEWS[currentIndex].author}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {VERIFIED_REVIEWS[currentIndex].date}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#E5B842]">
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#E5B842]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#E5B842]/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#E5B842]/40 transition-colors"
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
