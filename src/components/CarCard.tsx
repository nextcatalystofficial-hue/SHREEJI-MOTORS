import { useState } from 'react';
import { ArrowUpRight, Gauge, Fuel, Cog, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Vehicle } from '../data/cars';

interface CarCardProps {
  car: Vehicle;
  onSelect: (car: Vehicle) => void;
}

export default function CarCard({ car, onSelect }: CarCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-900">
        {!imageError ? (
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Zero-broken-image fallback container */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 text-center">
            <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold mb-1">
              {car.brand}
            </span>
            <span className="text-lg font-bold text-white">{car.model}</span>
          </div>
        )}

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

        {/* Status / Availability subtle text marker */}
        <div className="absolute top-3.5 left-3.5">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-500/20">
            {car.status}
          </span>
        </div>

        {/* Location tag */}
        <div className="absolute top-3.5 right-3.5">
          <span className="text-[11px] font-medium text-neutral-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
            {car.location}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Brand & Model */}
          <div className="text-xs font-semibold tracking-wider uppercase text-[#E5B842] mb-1">
            {car.brand}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-neutral-100 transition-colors">
            {car.model}{' '}
            <span className="text-xs font-normal text-neutral-400">
              {car.variant}
            </span>
          </h3>

          {/* Unboxed Metadata with Typographic Separator (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-neutral-400 mt-3 pt-3 border-t border-white/[0.06]">
            <span className="inline-flex items-center gap-1 text-neutral-300">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              <span>{car.year}</span>
            </span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-neutral-300">
              <Fuel className="w-3.5 h-3.5 text-neutral-500" />
              <span>{car.fuel}</span>
            </span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-neutral-300">
              <Cog className="w-3.5 h-3.5 text-neutral-500" />
              <span>{car.transmission}</span>
            </span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 text-neutral-300">
              <Gauge className="w-3.5 h-3.5 text-neutral-500" />
              <span className="tabular-numbers">{car.mileageKm.toLocaleString('en-IN')} km</span>
            </span>
          </div>
        </div>

        {/* Footer: Price & View Details Action */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">
              Estimated Price
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tabular-numbers font-display text-gradient">
              {car.formattedPrice}
            </div>
          </div>

          <button
            onClick={() => onSelect(car)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#E5B842] bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/[0.1] group-hover:border-[#E5B842]/40 rounded transition-all duration-200"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
