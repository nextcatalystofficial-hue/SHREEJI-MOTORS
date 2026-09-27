import { ArrowDown, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import heroWhiteGold from '../assets/images/hero_white_gold_1790521975709.jpg';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 sm:pt-20"
    >
      {/* Background Image with Luminous Light Scrim & Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroWhiteGold}
          alt="Shreeji Motors Luxury Showroom Ranchi"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        {/* Luminous luxury white and gold gradient overlays for razor-sharp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/25 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Small Label Badge in White and Gold */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_2px_12px_rgba(212,175,55,0.15)] mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#A07818] font-bold">
              SHREEJI MOTORS · RANCHI
            </span>
          </motion.div>

          {/* Main Cinematic Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.05] mb-5">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block"
            >
              DRIVE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block text-neutral-900"
            >
              SOMETHING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block gold-gradient-text tracking-tight drop-shadow-[0_2px_20px_rgba(212,175,55,0.25)]"
            >
              EXTRAORDINARY.
            </motion.span>
          </h1>

          {/* Supporting Headline & Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="space-y-3 mb-8 sm:mb-10 max-w-xl"
          >
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900 tracking-wide">
              <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Premium Pre-Owned Cars · Trusted Service · Ranchi</span>
            </div>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Discover carefully selected pre-owned cars across leading automotive brands, backed by
              a customer-first buying experience at Ratu Road, Ranchi.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onExplore}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 border border-[#F3E5AB] transition-all duration-200 rounded-sm shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Cars</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onContact}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:text-[#A07818] bg-white hover:bg-[#FAF8F5] border-2 border-[#D4AF37] transition-all duration-200 rounded-sm flex items-center justify-center shadow-xs cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>

          {/* Quick trust tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-5 text-xs text-stone-600 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Multi-Point Verified</span>
            </div>
            <span className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4AF37] font-bold">★ 5.0</span>
              <span>Google Verified Dealership</span>
            </div>
            <span className="text-stone-300">·</span>
            <div className="text-stone-700 font-semibold">
              Ratu Road, Ranchi
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-semibold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
