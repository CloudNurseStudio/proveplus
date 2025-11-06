'use client';

import Navbar from '@/client/components/Navbar';
import Footer from '@/client/components/Footer';
import { LocaleProvider } from './components/v2/LocaleProvider';
import { HeroSection } from './components/v2/HeroSection';
import { ProductFeaturesSection } from './components/v2/ProductFeaturesSection';
import { BenefitsSection } from './components/v2/BenefitsSection';
import { CertificationSection } from './components/v2/CertificationSection';
import { TestimonialsSection } from './components/v2/TestimonialsSection';
import { ScrollAnimatedElement } from './components/v2/ScrollAnimatedElement';

export default function HomePage() {
  return (
    <LocaleProvider>
      <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa]">
        {/* Scroll-based animated element */}
        <ScrollAnimatedElement />
        
        {/* Use existing Navbar with color change on scroll */}
        <Navbar />
        
        <main className="flex flex-col items-center gap-1 pt-20" aria-label="Featured product">
          <HeroSection />
          <ProductFeaturesSection />
          <BenefitsSection />
          <CertificationSection />
          <TestimonialsSection />
        </main>
        
        {/* Use existing Footer */}
        <Footer />
      </div>
    </LocaleProvider>
  );
}
