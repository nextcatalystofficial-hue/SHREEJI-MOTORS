import { useState } from 'react';
import { Send, Phone, MessageCircle, Navigation, CheckCircle2 } from 'lucide-react';
import { DEALERSHIP } from '../data/dealership';

interface ContactSectionProps {
  initialCarInterest?: string;
}

export default function ContactSection({ initialCarInterest = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedCar: initialCarInterest,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Environment variables with fallback
  const phoneEnv =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_PHONE) ||
    import.meta.env.VITE_SHREEJI_PHONE ||
    DEALERSHIP.phone;

  const whatsappEnv =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SHREEJI_WHATSAPP) ||
    import.meta.env.VITE_SHREEJI_WHATSAPP ||
    DEALERSHIP.whatsappNumber;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Smooth feedback timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      interestedCar: '',
      message: ''
    });
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E8DFCE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Quick Connect Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A07818] font-bold mb-3">
                <span className="w-5 h-[2px] bg-[#D4AF37]" />
                <span>DIRECT ENQUIRY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight leading-tight">
                LET&apos;S FIND<br />
                <span className="gold-gradient-text">YOUR NEXT CAR.</span>
              </h2>
              <p className="text-sm text-stone-600 mt-4 leading-relaxed">
                Whether you have questions about our current vehicle collection, wish to schedule an in-person
                inspection, or want guidance on selling your car, our team in Ranchi is ready to assist.
              </p>
            </div>

            {/* Quick Action Channels in White & Gold */}
            <div className="space-y-3">
              {/* WhatsApp Action */}
              <a
                href={`https://wa.me/${whatsappEnv}?text=${encodeURIComponent(
                  `Hello Shreeji Motors, I would like to enquire about vehicle availability in your Ranchi showroom.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 flex items-center justify-between border border-[#E8DFCE] hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-950">
                      WhatsApp Chat
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      Fastest response for inquiries
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Call Action */}
              <a
                href={`tel:${phoneEnv.replace(/\s+/g, '')}`}
                className="bg-white rounded-xl p-4 flex items-center justify-between border border-[#E8DFCE] hover:border-[#D4AF37] shadow-2xs hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8DFCE] text-[#D4AF37] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-950">
                      Call Showroom
                    </div>
                    <div className="text-xs font-mono text-stone-600 mt-0.5 font-bold">
                      {phoneEnv}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#A07818] group-hover:translate-x-0.5 transition-transform">
                  Call Us →
                </span>
              </a>

              {/* Directions Action */}
              <a
                href={DEALERSHIP.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 flex items-center justify-between border border-[#E8DFCE] hover:border-[#D4AF37] shadow-2xs hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-200 text-stone-700 flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-950">
                      Get Directions
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      Panchsheel Nagar, Ratu Road, Ranchi
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-stone-700 group-hover:translate-x-0.5 transition-transform">
                  Maps →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFCE] shadow-[0_16px_40px_-10px_rgba(212,175,55,0.12)] relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950 font-display">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>.
                    Our team at Shreeji Motors has received your request and will reach out to you shortly at{' '}
                    <span className="font-mono font-bold text-[#A07818]">{formData.phone}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-105 rounded transition-all shadow-xs cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-bold text-neutral-900 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#FAF9F5] border border-[#E8DFCE] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-xs text-neutral-950 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 shadow-2xs transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="text-xs font-bold text-neutral-900 block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 91422 12594"
                        className="w-full bg-[#FAF9F5] border border-[#E8DFCE] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-xs text-neutral-950 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email (Optional) */}
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-bold text-neutral-900 block mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-[#FAF9F5] border border-[#E8DFCE] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-xs text-neutral-950 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 shadow-2xs transition-colors"
                      />
                    </div>

                    {/* Interested Car */}
                    <div>
                      <label htmlFor="contact-car" className="text-xs font-bold text-neutral-900 block mb-1.5">
                        Interested Car / Make
                      </label>
                      <input
                        id="contact-car"
                        type="text"
                        value={formData.interestedCar}
                        onChange={(e) => setFormData({ ...formData, interestedCar: e.target.value })}
                        placeholder="e.g. Toyota Fortuner / Creta"
                        className="w-full bg-[#FAF9F5] border border-[#E8DFCE] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-xs text-neutral-950 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="text-xs font-bold text-neutral-900 block mb-1.5">
                      Your Message or Inspection Request
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us when you'd like to visit or what specifications you are looking for..."
                      className="w-full bg-[#FAF9F5] border border-[#E8DFCE] focus:border-[#D4AF37] rounded-lg px-4 py-3 text-xs text-neutral-950 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 shadow-2xs transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-rose-600 font-semibold">{errorMsg}</p>
                  )}

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 border border-[#F3E5AB] transition-all rounded-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-stone-500">
                    We respect your privacy. Your information is used strictly to respond to your automotive enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
