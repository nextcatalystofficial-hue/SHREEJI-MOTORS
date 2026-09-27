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
      setIsScrolled(window.scrollY > 40);
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
            ? 'py-3.5 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80'
            : 'py-5 bg-gradient-to-b from-[#080808]/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="text-lg md:text-xl font-bold tracking-wider font-display text-white hover:text-[#E5B842] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5B842]"
          >
            SHREEJI MOTORS
          </a>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.target);
                }}
                className="relative py-1 text-neutral-300 hover:text-white transition-colors duration-200 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5B842] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('inventory')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-neutral-900 bg-[#E5B842] hover:bg-[#F3D06D] transition-colors duration-200 rounded-sm shadow-sm whitespace-nowrap"
            >
              <span>View Cars</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5B842]"
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
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[#111111] border-l border-white/[0.08] p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <span className="font-display font-bold text-base text-white tracking-wider">
                    SHREEJI MOTORS
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-neutral-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-4">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.target}
                      href={`#${link.target}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.target);
                      }}
                      className="text-base font-medium text-neutral-300 hover:text-[#E5B842] py-1 transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-4">
                <button
                  onClick={() => handleLinkClick('inventory')}
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-[#E5B842] hover:bg-[#F3D06D] transition-colors rounded-sm flex items-center justify-center gap-1.5"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-neutral-400">
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
