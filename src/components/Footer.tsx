import { ArrowUp, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { DEALERSHIP } from '../data/dealership';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phone =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_PHONE) ||
    import.meta.env.VITE_SHREEJI_PHONE ||
    DEALERSHIP.phone;

  return (
    <footer className="bg-white border-t border-[#E8DFCE] text-stone-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#E8DFCE]">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-neutral-950 font-display font-extrabold flex items-center justify-center text-sm shadow-xs border border-[#F3E5AB]">
                SM
              </div>
              <h3 className="text-xl font-extrabold text-neutral-950 tracking-wider font-display">
                {DEALERSHIP.name}
              </h3>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#A07818]">
              {DEALERSHIP.tagline}
            </p>
            <p className="text-xs text-stone-600 max-w-sm leading-relaxed">
              Curated pre-owned automotive showroom in Ranchi, Jharkhand. Delivering exceptional
              vehicles, distinguished showroom presentation, and genuine customer care.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-stone-700 font-semibold">
                {DEALERSHIP.timings}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Explore Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Brand Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Why Shreeji Motors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('showroom')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Showroom Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Google Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Makes */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
              Vehicle Categories
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Premium Pre-Owned SUVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Executive Luxury Sedans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Toyota Fortuner & Innova
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Hyundai Creta Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Diesel & Automatic Vehicles
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
              Showroom Visit
            </div>
            <address className="not-italic text-xs text-stone-600 space-y-1.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {DEALERSHIP.address.line1}, {DEALERSHIP.address.area}, {DEALERSHIP.address.city}, Jharkhand {DEALERSHIP.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-400" />
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-mono font-bold text-neutral-900 hover:text-[#A07818] transition-colors"
                >
                  {phone}
                </a>
              </div>
            </address>

            <a
              href={DEALERSHIP.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#A07818] hover:underline pt-2 font-semibold"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Shreeji Motors. All rights reserved. Ratu Road, Ranchi.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              Privacy & Legal
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              Terms of Visit
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#D4AF37] border border-[#E8DFCE] hover:border-[#D4AF37] text-stone-700 hover:text-neutral-950 transition-colors cursor-pointer shadow-2xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
