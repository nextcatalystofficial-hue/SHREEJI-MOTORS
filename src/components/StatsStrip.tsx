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
        className="glass-panel rounded-xl shadow-2xl shadow-black/80 divide-y divide-white/[0.06] md:divide-y-0 md:divide-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 md:p-7 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-neutral-400">0{idx + 1}</span>
                <Icon className="w-5 h-5 text-[#E5B842]/70" />
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-wider text-white font-display uppercase">
                  {pillar.title}
                </h2>
                <div className="text-xs font-semibold tracking-wider text-[#E5B842] uppercase mt-0.5">
                  {pillar.subtitle}
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
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
