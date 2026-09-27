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
    <footer className="bg-[#050505] border-t border-white/[0.08] text-neutral-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-extrabold text-white tracking-wider font-display">
              {DEALERSHIP.name}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B842]">
              {DEALERSHIP.tagline}
            </p>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Curated pre-owned automotive showroom in Ranchi, Jharkhand. Delivering exceptional
              vehicles, distinguished showroom presentation, and genuine customer care.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-neutral-300 font-medium">
                {DEALERSHIP.timings}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-white transition-colors"
                >
                  Explore Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="hover:text-white transition-colors"
                >
                  Brand Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Shreeji Motors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('showroom')}
                  className="hover:text-white transition-colors"
                >
                  Showroom Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors"
                >
                  Google Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Makes */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Vehicle Categories
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-white transition-colors"
                >
                  Premium Pre-Owned SUVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-white transition-colors"
                >
                  Executive Luxury Sedans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-white transition-colors"
                >
                  Toyota Fortuner & Innova
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-white transition-colors"
                >
                  Hyundai Creta Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inventory')}
                  className="hover:text-white transition-colors"
                >
                  Diesel & Automatic Vehicles
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Support */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Showroom Visit
            </div>
            <address className="not-italic text-xs text-neutral-400 space-y-1.5 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5B842] shrink-0 mt-0.5" />
                <span>
                  {DEALERSHIP.address.line1}, {DEALERSHIP.address.area}, {DEALERSHIP.address.city}, Jharkhand {DEALERSHIP.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-mono hover:text-[#E5B842] transition-colors"
                >
                  {phone}
                </a>
              </div>
            </address>

            <a
              href={DEALERSHIP.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#E5B842] hover:underline pt-2 font-medium"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Shreeji Motors. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy & Legal
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-neutral-400 transition-colors"
            >
              Terms of Visit
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
