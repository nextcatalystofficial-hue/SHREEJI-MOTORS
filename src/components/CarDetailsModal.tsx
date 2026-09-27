import { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
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
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md transition-opacity"
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
            className="relative w-full max-w-5xl bg-white border border-[#E8DFCE] rounded-2xl shadow-2xl overflow-hidden text-neutral-900"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close vehicle details"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/95 hover:bg-white text-stone-600 hover:text-neutral-950 border border-[#E8DFCE] shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
              {/* Left Column: Visual Gallery (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FAF9F5] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8DFCE]">
                <div>
                  {/* Active Featured Image */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-200 mb-4 border border-[#E8DFCE] shadow-2xs">
                    <img
                      src={car.gallery[activeImageIndex] || car.image}
                      alt={`${car.brand} ${car.model}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-all duration-300"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-stone-800 border border-[#E8DFCE] shadow-2xs">
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
                          className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                            activeImageIndex === idx
                              ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-102'
                              : 'border-[#E8DFCE] opacity-70 hover:opacity-100'
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
                <div className="mt-6 pt-6 border-t border-[#E8DFCE] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white p-3 rounded-lg border border-[#E8DFCE] shadow-2xs">
                    <span className="text-[10px] uppercase text-stone-500 font-semibold block">Year</span>
                    <span className="text-sm font-bold text-neutral-900 tabular-numbers">{car.year}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#E8DFCE] shadow-2xs">
                    <span className="text-[10px] uppercase text-stone-500 font-semibold block">Fuel</span>
                    <span className="text-sm font-bold text-neutral-900">{car.fuel}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#E8DFCE] shadow-2xs">
                    <span className="text-[10px] uppercase text-stone-500 font-semibold block">Gearbox</span>
                    <span className="text-sm font-bold text-neutral-900">{car.transmission}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#E8DFCE] shadow-2xs">
                    <span className="text-[10px] uppercase text-stone-500 font-semibold block">Kilometers</span>
                    <span className="text-sm font-bold text-neutral-900 tabular-numbers">
                      {car.mileageKm.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Showroom Notice */}
                <div className="mt-4 text-[11px] text-stone-500 italic">
                  * Vehicle specifications and pricing are structured for Shreeji Motors inventory catalog.
                </div>
              </div>

              {/* Right Column: Details & Actions (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#A07818] mb-1">
                    {car.brand} · Pre-Owned
                  </div>
                  <h2
                    id="modal-car-title"
                    className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-display"
                  >
                    {car.model}
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">{car.variant}</p>

                  {/* Price Banner */}
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#FAF8F5] via-[#FFFDF7] to-[#FAF8F5] border border-[#E8DFCE] flex items-center justify-between shadow-2xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block">
                        Estimated Showroom Price
                      </span>
                      <span className="text-2xl font-extrabold text-neutral-950 font-display tabular-numbers">
                        {car.formattedPrice}
                      </span>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded font-bold">
                      {car.status}
                    </span>
                  </div>

                  {/* Overview */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                      Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {car.overview}
                    </p>
                  </div>

                  {/* Technical Breakdown */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                      Vehicle Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
                      <div>
                        <span className="text-stone-500 block">Engine</span>
                        <span className="font-semibold text-neutral-900">{car.engineCc}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Ownership</span>
                        <span className="font-semibold text-neutral-900">{car.owners}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Registration</span>
                        <span className="font-semibold text-neutral-900">{car.registrationState}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Insurance</span>
                        <span className="font-semibold text-neutral-900">{car.insurance}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Color</span>
                        <span className="font-semibold text-neutral-900">{car.color}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block">Location</span>
                        <span className="font-semibold text-neutral-900">{car.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2.5">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {car.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-stone-200 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        onClose();
                        onScheduleVisit(`${car.brand} ${car.model}`);
                      }}
                      className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 transition-all rounded shadow-sm flex items-center justify-center gap-2 cursor-pointer border border-[#F3E5AB]"
                    >
                      <span>Schedule a Visit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onEnquire(`${car.brand} ${car.model} (${car.year})`);
                      }}
                      className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-white hover:bg-[#FAF8F5] border-2 border-[#D4AF37] transition-colors rounded shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#A07818]" />
                      <span>Enquire Now</span>
                    </button>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
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
