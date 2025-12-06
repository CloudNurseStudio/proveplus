'use client';

import { NavigationBar } from './components/v2/NavigationBar';
import { FooterNav } from './components/v2/FooterNav';
import { HeroSection } from './components/v2/HeroSection';
import { MicroProbioticSection } from './components/v2/MicroProbioticSection';
import { ProductFeaturesSection } from './components/v2/ProductFeaturesSection';
import { GutSupportSection } from './components/v2/GutSupportSection';
import { BenefitsSection } from './components/v2/BenefitsSection';
import { CertificationSection } from './components/v2/CertificationSection';
import { TestimonialsSection } from './components/v2/TestimonialsSection';
import { EventsSection } from './components/v2/EventsSection';
import { ScrollAnimatedElement } from './components/v2/ScrollAnimatedElement';
import { PopupModal } from './components/v2/PopupModal';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa]">
      <PopupModal />
      {/* <div className="hidden sm:block">
        <ScrollAnimatedElement />
      </div> */}

      <div className="fixed inset-x-0 top-2 sm:top-4 z-50 pointer-events-none">
        <div className="pointer-events-auto mx-auto w-full max-w-6xl px-2 sm:px-4">
          <NavigationBar />
        </div>
      </div>

      <main className="flex flex-col items-center gap-1 pt-24 sm:pt-28 md:pt-32" aria-label="Featured product">
        <HeroSection />
        <MicroProbioticSection />
        <GutSupportSection />

        <ProductFeaturesSection />

        
       
        
        <CertificationSection />
        <TestimonialsSection />
        <EventsSection />
      </main>

      <footer className="w-full mt-8 sm:mt-12 md:mt-16">
        <FooterNav />
      </footer>
    </div>
  );
}
