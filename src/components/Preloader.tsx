import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 300 : 1200;

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-neutral-900 select-none pointer-events-none"
        >
          {/* Subtle background warm champagne ambient light */}
          <div className="absolute w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-neutral-950 font-display font-extrabold flex items-center justify-center text-lg shadow-md border border-[#F3E5AB] mb-4"
            >
              SM
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="text-xs uppercase tracking-[0.35em] text-[#A07818] font-bold mb-2"
            >
              PREMIUM CAR & ACCESSORIES SHOWROOM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-3xl md:text-5xl font-extrabold tracking-widest font-display text-neutral-950"
            >
              SHREEJI MOTORS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xs text-stone-500 uppercase tracking-[0.25em] mt-2 font-semibold"
            >
              RATU ROAD · RANCHI
            </motion.p>

            {/* Animated metallic gold line */}
            <div className="relative w-48 h-[2.5px] bg-[#E8DFCE] mt-6 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.0,
                  ease: 'easeInOut'
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
