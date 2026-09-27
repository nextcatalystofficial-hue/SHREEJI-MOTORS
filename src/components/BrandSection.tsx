import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOWROOM_BRANDS } from '../data/dealership';

interface BrandSectionProps {
  onBrandClick: (brandName: string) => void;
}

export default function BrandSection({ onBrandClick }: BrandSectionProps) {
  return (
    <section id="brands" className="py-24 sm:py-32 bg-[#090909] border-t border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold mb-3">
            <span className="w-5 h-[1.5px] bg-[#E5B842]" />
            <span>MULTI-BRAND COLLECTION</span>
            <span className="w-5 h-[1.5px] bg-[#E5B842]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            BRANDS YOU KNOW.<br />
            <span className="text-neutral-400">CARS YOU&apos;LL LOVE.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Explore carefully selected pre-owned cars from leading automotive manufacturers.
            Each vehicle is presented with transparency and premium care.
          </p>
        </div>

        {/* Brands Grid (Desktop) & Swipeable Scroll (Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {SHOWROOM_BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              onClick={() => onBrandClick(brand.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onBrandClick(brand.name);
                }
              }}
              className="glass-card rounded-xl p-5 sm:p-6 cursor-pointer group flex flex-col justify-between hover:border-[#E5B842]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-neutral-400">0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-[#E5B842] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E5B842] transition-colors font-display">
                  {brand.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {brand.tagline}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] text-neutral-400">
                <span className="text-neutral-400 block mb-0.5">Popular Models:</span>
                <span className="text-neutral-300 font-medium">{brand.popularModels}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Non-Affiliation / Multi-Brand Compliance Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 max-w-xl mx-auto">
            Shreeji Motors is an independent multi-brand pre-owned automotive showroom in Ranchi.
            Brand names and trademarks belong to their respective manufacturers and are referenced solely for vehicle identification.
          </p>
        </div>
      </div>
    </section>
  );
}
