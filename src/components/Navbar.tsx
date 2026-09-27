import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Inventory', target: 'inventory' },
    { label: 'Brands', target: 'brands' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Showroom', target: 'showroom' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#E8DFCE] shadow-[0_4px_24px_rgba(212,175,55,0.08)]'
            : 'py-4.5 bg-white/85 backdrop-blur-md border-b border-[#E8DFCE]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Gold Tag */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-neutral-950 font-display font-extrabold flex items-center justify-center text-sm shadow-xs border border-[#F3E5AB]">
              SM
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold tracking-wider font-display text-neutral-950 group-hover:text-[#B8860B] transition-colors whitespace-nowrap">
                SHREEJI MOTORS
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#B8860B] -mt-1 hidden sm:block">
                PREMIUM SHOWROOM
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.target);
                }}
                className="relative py-1 text-neutral-700 hover:text-[#B8860B] transition-colors duration-200 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary CTA Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('inventory')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 border border-[#F3E5AB] transition-all duration-200 rounded-sm shadow-sm hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)] whitespace-nowrap cursor-pointer"
            >
              <span>View Cars</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-neutral-900 hover:text-[#B8860B] transition-colors rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs bg-white border-l border-[#E8DFCE] p-6 flex flex-col justify-between shadow-2xl text-neutral-900"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#E8DFCE]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-neutral-950 font-display font-extrabold flex items-center justify-center text-xs shadow-xs">
                      SM
                    </div>
                    <span className="font-display font-bold text-base text-neutral-950 tracking-wider">
                      SHREEJI MOTORS
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 text-stone-500 hover:text-neutral-950 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-3.5">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.target}
                      href={`#${link.target}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.target);
                      }}
                      className="text-sm font-semibold uppercase tracking-wider text-neutral-800 hover:text-[#B8860B] py-2 transition-colors flex items-center justify-between border-b border-stone-100"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-stone-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8DFCE] space-y-4">
                <button
                  onClick={() => handleLinkClick('inventory')}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-105 transition-colors rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-stone-500 font-medium">
                  Ratu Road · Ranchi, Jharkhand
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
