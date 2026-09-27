import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      number: "01",
      title: "MULTI-BRAND COLLECTION",
      description: "Explore pre-owned vehicles across a wide range of leading automotive brands.",
      icon: Compass
    },
    {
      number: "02",
      title: "CUSTOMER-FIRST SERVICE",
      description: "From your first enquiry to your purchase, our focus is on a smooth buying experience.",
      icon: HeartHandshake
    },
    {
      number: "03",
      title: "PREMIUM PRESENTATION",
      description: "Every vehicle deserves to be presented with attention to detail and authentic showroom care.",
      icon: Sparkles
    },
    {
      number: "04",
      title: "RANCHI LOCATION",
      description: "Visit us at Ratu Road, Ranchi, easily accessible from across the capital city.",
      icon: MapPin
    }
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A07818] font-bold mb-3">
              <span className="w-5 h-[2px] bg-[#D4AF37]" />
              <span>THE SHREEJI STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight">
              WHY SHREEJI?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            Built to redefine the pre-owned vehicle buying journey in Ranchi with genuine courtesy,
            honest guidance, and an upscale showroom environment.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAF9F5] rounded-2xl p-7 flex flex-col justify-between border border-[#E8DFCE] hover:border-[#D4AF37] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(212,175,55,0.16)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-extrabold font-display text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                      {point.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E8DFCE] group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-2xs transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 font-display tracking-wide uppercase mb-3">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[11px] text-stone-500 tracking-wider uppercase font-semibold">
                    Shreeji Motors Ranchi
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
