import { motion } from 'motion/react';
import { ShieldCheck, Compass, Award, Users } from 'lucide-react';

export default function StatsStrip() {
  const pillars = [
    {
      title: "MULTI-BRAND",
      subtitle: "CAR COLLECTION",
      description: "Carefully curated across leading automotive manufacturers",
      icon: Compass
    },
    {
      title: "PREMIUM",
      subtitle: "PRE-OWNED VEHICLES",
      description: "Presented with high standards of detailing and transparency",
      icon: Award
    },
    {
      title: "RANCHI",
      subtitle: "BASED DEALERSHIP",
      description: "Conveniently located on Ratu Road, Ranchi, Jharkhand",
      icon: ShieldCheck
    },
    {
      title: "CUSTOMER",
      subtitle: "FIRST SERVICE",
      description: "Personalized guidance from enquiry through delivery",
      icon: Users
    }
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl border border-[#E8DFCE] shadow-[0_16px_40px_-10px_rgba(212,175,55,0.15)] divide-y divide-[#E8DFCE] md:divide-y-0 md:divide-x md:divide-[#E8DFCE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden"
      >
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 md:p-7 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#D4AF37]">0{idx + 1}</span>
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E8DFCE] group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-2xs transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-wider text-neutral-950 font-display uppercase">
                  {pillar.title}
                </h2>
                <div className="text-xs font-bold tracking-wider text-[#A07818] uppercase mt-0.5">
                  {pillar.subtitle}
                </div>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
