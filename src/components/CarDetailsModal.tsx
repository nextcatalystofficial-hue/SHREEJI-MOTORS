import { useState, useEffect } from 'react';
import { X, Calendar, Fuel, Cog, Gauge, ShieldCheck, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Vehicle } from '../data/cars';
import { DEALERSHIP } from '../data/dealership';

interface CarDetailsModalProps {
  car: Vehicle | null;
  onClose: () => void;
  onEnquire: (carName: string) => void;
  onScheduleVisit: (carName: string) => void;
}

export default function CarDetailsModal({
  car,
  onClose,
  onEnquire,
  onScheduleVisit
}: CarDetailsModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [car]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (car) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [car, onClose]);

  if (!car) return null;

  const whatsappNumber =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_WHATSAPP) ||
    import.meta.env.VITE_SHREEJI_WHATSAPP ||
    DEALERSHIP.whatsappNumber;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Shreeji Motors, I am interested in exploring the ${car.brand} ${car.model} (${car.year}, ${car.formattedPrice}). Could you please share more details?`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Dialog */}
        <div className="min-h-full flex items-center justify-center p-3 sm:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-car-title"
            className="relative w-full max-w-5xl bg-[#111111] border border-white/[0.09] rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close vehicle details"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-neutral-300 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B842]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
              {/* Left Column: Visual Gallery (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0a0a0a] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  {/* Active Featured Image */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900 mb-4 border border-white/[0.06]">
                    <img
                      src={car.gallery[activeImageIndex] || car.image}
                      alt={`${car.brand} ${car.model}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-all duration-300"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-neutral-300 border border-white/10">
                      {activeImageIndex + 1} / {car.gallery.length}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  {car.gallery.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                      {car.gallery.map((thumb, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border transition-all ${
                            activeImageIndex === idx
                              ? 'border-[#E5B842] ring-1 ring-[#E5B842]/50 scale-102'
                              : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={thumb}
                            alt={`Thumbnail ${idx + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick specs pill bar */}
                <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-[#141414] p-3 rounded-lg border border-white/[0.05]">
                    <span className="text-[10px] uppercase text-neutral-400 block">Year</span>
                    <span className="text-sm font-bold text-white tabular-numbers">{car.year}</span>
                  </div>
                  <div className="bg-[#141414] p-3 rounded-lg border border-white/[0.05]">
                    <span className="text-[10px] uppercase text-neutral-400 block">Fuel</span>
                    <span className="text-sm font-bold text-white">{car.fuel}</span>
                  </div>
                  <div className="bg-[#141414] p-3 rounded-lg border border-white/[0.05]">
                    <span className="text-[10px] uppercase text-neutral-400 block">Gearbox</span>
                    <span className="text-sm font-bold text-white">{car.transmission}</span>
                  </div>
                  <div className="bg-[#141414] p-3 rounded-lg border border-white/[0.05]">
                    <span className="text-[10px] uppercase text-neutral-400 block">Kilometers</span>
                    <span className="text-sm font-bold text-white tabular-numbers">
                      {car.mileageKm.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Showroom Notice */}
                <div className="mt-4 text-[11px] text-neutral-400 italic">
                  * Vehicle specifications and pricing are placeholders structured for Shreeji Motors inventory catalog.
                </div>
              </div>

              {/* Right Column: Details & Actions (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#E5B842] mb-1">
                    {car.brand} · Pre-Owned
                  </div>
                  <h2
                    id="modal-car-title"
                    className="text-2xl sm:text-3xl font-extrabold text-white font-display"
                  >
                    {car.model}
                  </h2>
                  <p className="text-sm text-neutral-400 mt-1">{car.variant}</p>

                  {/* Price */}
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-[#181818] border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                        Estimated Showroom Price
                      </span>
                      <span className="text-2xl font-extrabold text-[#E5B842] font-display tabular-numbers">
                        {car.formattedPrice}
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-medium">
                      {car.status}
                    </span>
                  </div>

                  {/* Overview */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                      Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {car.overview}
                    </p>
                  </div>

                  {/* Technical Breakdown */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                      Vehicle Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
                      <div>
                        <span className="text-neutral-400 block">Engine</span>
                        <span className="font-medium text-neutral-200">{car.engineCc}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">Ownership</span>
                        <span className="font-medium text-neutral-200">{car.owners}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">Registration</span>
                        <span className="font-medium text-neutral-200">{car.registrationState}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">Insurance</span>
                        <span className="font-medium text-neutral-200">{car.insurance}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">Color</span>
                        <span className="font-medium text-neutral-200">{car.color}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block">Location</span>
                        <span className="font-medium text-neutral-200">{car.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2.5">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {car.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E5B842] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-white/[0.08] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        onClose();
                        onScheduleVisit(`${car.brand} ${car.model}`);
                      }}
                      className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#E5B842] hover:bg-[#F3D06D] transition-colors rounded-sm flex items-center justify-center gap-2"
                    >
                      <span>Schedule a Visit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onEnquire(`${car.brand} ${car.model} (${car.year})`);
                      }}
                      className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] transition-colors rounded-sm flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
                      <span>Enquire Now</span>
                    </button>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/20 rounded-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Us Regarding This Car</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
