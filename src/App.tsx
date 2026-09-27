/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import FeaturedCars from './components/FeaturedCars';
import CarDetailsModal from './components/CarDetailsModal';
import BrandSection from './components/BrandSection';
import WhyChooseUs from './components/WhyChooseUs';
import ShowroomGallery from './components/ShowroomGallery';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import { Vehicle } from './data/cars';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Vehicle | null>(null);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);
  const [interestedCarName, setInterestedCarName] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandSelect = (brandName: string) => {
    setBrandFilter(brandName);
    scrollToSection('inventory');
  };

  const handleEnquireCar = (carName: string) => {
    setInterestedCarName(carName);
    scrollToSection('contact');
  };

  const handleScheduleVisit = (carName: string) => {
    setInterestedCarName(`Showroom Inspection: ${carName}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 flex flex-col selection:bg-[#E5B842]/30 selection:text-white">
      {/* Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Thin Gold Scroll Progress */}
      <ScrollProgress />

      {/* Subtle Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Top Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onExplore={() => scrollToSection('inventory')}
          onContact={() => scrollToSection('contact')}
        />

        {/* Floating Trust Strip */}
        <StatsStrip />

        {/* Inventory Section */}
        <FeaturedCars
          onSelectCar={(car) => setSelectedCar(car)}
          selectedBrandFilter={brandFilter}
          onClearBrandFilter={() => setBrandFilter(null)}
        />

        {/* Multi-Brand Showcase */}
        <BrandSection onBrandClick={handleBrandSelect} />

        {/* Editorial: Why Shreeji Motors */}
        <WhyChooseUs />

        {/* Showroom Experience & Lightbox */}
        <ShowroomGallery />

        {/* 4-Step Buying Process */}
        <ProcessSection />

        {/* Trust & Google Customer Reviews */}
        <Testimonials />

        {/* Showroom Location & Map */}
        <LocationSection />

        {/* High-Conversion Contact Form */}
        <ContactSection initialCarInterest={interestedCarName} />
      </main>

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Full-screen Car Details Modal */}
      <CarDetailsModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        onEnquire={handleEnquireCar}
        onScheduleVisit={handleScheduleVisit}
      />
    </div>
  );
}
