import { MapPin, Clock, Navigation, Phone, ExternalLink } from 'lucide-react';
import { DEALERSHIP } from '../data/dealership';

export default function LocationSection() {
  const phone =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_PHONE) ||
    import.meta.env.VITE_SHREEJI_PHONE ||
    DEALERSHIP.phone;

  return (
    <section id="location" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Location Info & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A07818] font-bold mb-3">
                <span className="w-5 h-[2px] bg-[#D4AF37]" />
                <span>RANCHI SHOWROOM</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight">
                COME VISIT US.
              </h2>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                Experience our curated collection up close in an inviting, high-standard showroom setting.
              </p>
            </div>

            {/* Address Card in White and Gold */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#E8DFCE] shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white border border-[#E8DFCE] text-[#D4AF37] shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-950 font-display">
                    {DEALERSHIP.name}
                  </h3>
                  <div className="text-xs font-bold text-[#A07818] mt-0.5">
                    {DEALERSHIP.tagline}
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-stone-700 mt-2 space-y-0.5 leading-relaxed">
                    <p>{DEALERSHIP.address.line1},</p>
                    <p>{DEALERSHIP.address.area}, {DEALERSHIP.address.colony},</p>
                    <p>{DEALERSHIP.address.city}, {DEALERSHIP.address.state} {DEALERSHIP.address.pincode}</p>
                  </address>
                </div>
              </div>

              {/* Hours / Schedule */}
              <div className="pt-4 border-t border-[#E8DFCE]/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-600 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Visiting Hours:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-emerald-800">{DEALERSHIP.timings}</span>
                </div>
              </div>

              {/* Verified Contact */}
              <div className="pt-3 border-t border-[#E8DFCE]/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-600 font-medium">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Showroom Assistance:</span>
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-mono font-bold text-neutral-950 hover:text-[#A07818] transition-colors"
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
                className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 transition-all rounded shadow-sm flex items-center justify-center gap-2 cursor-pointer border border-[#F3E5AB]"
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
                className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:text-[#A07818] bg-white hover:bg-[#FAF8F5] border-2 border-[#D4AF37] rounded shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8DFCE] bg-stone-100 shadow-md">
              {/* Clean Map Iframe */}
              <iframe
                title="Shreeji Motors Location Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  'Shreeji Motors Panchsheel Nagar Ratu Road Ranchi'
                )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 opacity-95 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DFCE] text-neutral-900 shadow-lg pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-950 font-display">
                    Shreeji Motors
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1 font-medium">
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
