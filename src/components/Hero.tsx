import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroShowroom from '../assets/images/hero_showroom_1790518730598.jpg';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Parallax / Slow Zoom & Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroShowroom}
          alt="Shreeji Motors Luxury Showroom"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.05, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center"
        />
        {/* Anti-slop measured dark scrim: strong contrast behind text without muddying the visual */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/85 via-[#080808]/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex items-center gap-2.5 mb-4 sm:mb-6"
          >
            <span className="w-6 h-[1.5px] bg-[#E5B842]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold">
              SHREEJI MOTORS · RANCHI
            </span>
          </motion.div>

          {/* Main Cinematic Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-5">
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
              className="block text-neutral-100"
            >
              SOMETHING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block text-[#E5B842] tracking-tight drop-shadow-[0_2px_20px_rgba(229,184,66,0.25)]"
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
            <p className="text-sm sm:text-base font-semibold text-neutral-200 tracking-wide">
              Premium Pre-Owned Cars · Trusted Service · Ranchi
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Discover carefully selected pre-owned cars across leading automotive brands, backed by
              a customer-first buying experience in Jharkhand.
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
              className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#E5B842] hover:bg-[#F3D06D] transition-all duration-200 rounded-sm shadow-lg shadow-[#E5B842]/10 flex items-center justify-center gap-2 group"
            >
              <span>Explore Cars</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onContact}
              className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] transition-all duration-200 rounded-sm flex items-center justify-center"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#E5B842]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
