import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 400 : 1300;

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
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
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-white select-none pointer-events-none"
        >
          {/* Subtle background ambient light */}
          <div className="absolute w-96 h-96 rounded-full bg-[#E5B842]/5 blur-3xl" />

          <div className="relative flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-xs uppercase tracking-[0.35em] text-[#C9A227] font-medium mb-3"
            >
              PREMIUM CAR & ACCESSORIES SHOWROOM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-widest font-display text-white"
            >
              SHREEJI MOTORS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs text-neutral-400 uppercase tracking-[0.25em] mt-2"
            >
              RATU ROAD · RANCHI
            </motion.p>

            {/* Subtle animated metallic line */}
            <div className="relative w-48 h-[1.5px] bg-neutral-800 mt-6 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: 'easeInOut'
                }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#E5B842] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
