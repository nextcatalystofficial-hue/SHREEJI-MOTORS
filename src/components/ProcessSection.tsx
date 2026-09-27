import { motion } from 'motion/react';
import { Search, MessageSquare, KeyRound, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "EXPLORE",
      subtitle: "Browse available vehicles",
      description: "Review our curated catalog online or filter by brand, fuel, and transmission preference.",
      icon: Search
    },
    {
      number: "02",
      title: "ENQUIRE",
      subtitle: "Talk to the Shreeji Motors team",
      description: "Connect via WhatsApp, phone, or appointment form to confirm availability and discuss details.",
      icon: MessageSquare
    },
    {
      number: "03",
      title: "INSPECT",
      subtitle: "Visit the showroom and inspect",
      description: "Experience the vehicle in person under our high-clarity showroom lights at Ratu Road, Ranchi.",
      icon: Sparkles
    },
    {
      number: "04",
      title: "DRIVE AWAY",
      subtitle: "Complete the purchase process",
      description: "Enjoy a straightforward, transparent transfer and drive home with complete confidence.",
      icon: KeyRound
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A07818] font-bold mb-3">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>HOW IT WORKS</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight">
            A SIMPLE WAY<br />
            <span className="gold-gradient-text">TO FIND YOUR NEXT CAR.</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4">
            Designed for total transparency and peace of mind at every milestone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#E8DFCE] hover:border-[#D4AF37] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.18)] hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#A07818]">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DFCE] group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-2xs transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 font-display tracking-wider uppercase mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#A07818] mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                  <span>Phase {step.number}</span>
                  <div className="w-8 h-[2px] bg-[#D4AF37]/50" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
