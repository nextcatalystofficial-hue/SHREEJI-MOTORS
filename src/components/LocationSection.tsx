import { MapPin, Clock, Navigation, Phone, ExternalLink } from 'lucide-react';
import { DEALERSHIP } from '../data/dealership';

export default function LocationSection() {
  const phone =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_PHONE) ||
    import.meta.env.VITE_SHREEJI_PHONE ||
    DEALERSHIP.phone;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#0a0a0a] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Location Info & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold mb-3">
                <span className="w-5 h-[1.5px] bg-[#E5B842]" />
                <span>RANCHI SHOWROOM</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                COME VISIT US.
              </h2>
              <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                Experience our curated collection up close in an inviting, high-standard showroom setting.
              </p>
            </div>

            {/* Address Card */}
            <div className="glass-card rounded-xl p-6 border border-white/[0.08] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#E5B842]/10 border border-[#E5B842]/20 text-[#E5B842] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {DEALERSHIP.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#E5B842] mt-0.5">
                    {DEALERSHIP.tagline}
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-neutral-300 mt-2 space-y-0.5 leading-relaxed">
                    <p>{DEALERSHIP.address.line1},</p>
                    <p>{DEALERSHIP.address.area}, {DEALERSHIP.address.colony},</p>
                    <p>{DEALERSHIP.address.city}, {DEALERSHIP.address.state} {DEALERSHIP.address.pincode}</p>
                  </address>
                </div>
              </div>

              {/* Hours / Schedule */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock className="w-4 h-4 text-[#E5B842]" />
                  <span>Visiting Hours:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-emerald-400">{DEALERSHIP.timings}</span>
                </div>
              </div>

              {/* Verified Contact */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <span>Showroom Assistance:</span>
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-mono text-neutral-300 hover:text-[#E5B842] transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={DEALERSHIP.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#E5B842] hover:bg-[#F3D06D] transition-colors rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E5B842]/10"
              >
                <Navigation className="w-3.5 h-3.5 fill-current" />
                <span>Get Directions</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  DEALERSHIP.address.full
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Interactive Map Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.09] bg-[#121212] shadow-2xl">
              {/* Map Iframe with dark theme styling */}
              <iframe
                title="Shreeji Motors Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  'Shreeji Motors Panchsheel Nagar Ratu Road Ranchi'
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%] opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-white shadow-xl pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5B842] animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Shreeji Motors
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Ratu Road, Panchsheel Nagar, Ranchi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
