import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DEALERSHIP } from '../data/dealership';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_WHATSAPP) ||
    import.meta.env.VITE_SHREEJI_WHATSAPP ||
    DEALERSHIP.whatsappNumber;

  const defaultMessage = encodeURIComponent(
    'Hello Shreeji Motors, I am visiting your website and would like to enquire about available pre-owned cars.'
  );

  const href = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:block bg-[#161616] text-white text-xs font-medium py-1.5 px-3 rounded-lg border border-white/10 shadow-xl whitespace-nowrap pointer-events-none"
          >
            Chat with Shreeji Motors
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-2xl shadow-emerald-500/25 border border-emerald-300/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-neutral-950 text-emerald-500" />
      </motion.a>
    </div>
  );
}
