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
    <section id="why-us" className="py-24 sm:py-32 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5B842] font-semibold mb-3">
              <span className="w-5 h-[1.5px] bg-[#E5B842]" />
              <span>THE SHREEJI STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              WHY SHREEJI?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
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
                className="glass-card rounded-xl p-7 flex flex-col justify-between hover:border-[#E5B842]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-bold font-display text-white/30">
                      {point.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E5B842]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-display tracking-wide uppercase mb-3">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E5B842]" />
                  <span className="text-[11px] text-neutral-400 tracking-wider uppercase font-medium">
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
