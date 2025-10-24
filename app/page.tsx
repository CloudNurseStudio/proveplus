'use client';

import { LocaleProvider } from './components/v2/LocaleProvider';
import { NavigationBar } from './components/v2/NavigationBar';
import { HeroSection } from './components/v2/HeroSection';
import { ProductFeaturesSection } from './components/v2/ProductFeaturesSection';
import { BenefitsSection } from './components/v2/BenefitsSection';
import { CertificationSection } from './components/v2/CertificationSection';
import { TestimonialsSection } from './components/v2/TestimonialsSection';
import { FooterNav } from './components/v2/FooterNav';
import { ScrollAnimatedElement } from './components/v2/ScrollAnimatedElement';

export default function HomePage() {
  return (
    <LocaleProvider>
      <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa]">
        {/* Scroll-based animated element */}
        <ScrollAnimatedElement />
        
        <NavigationBar />
        
        <main className="flex flex-col items-center gap-1">
          <HeroSection />
          <ProductFeaturesSection />
          <BenefitsSection />
          <CertificationSection />
          <TestimonialsSection />
        </main>
        
        <FooterNav />
      </div>
    </LocaleProvider>
  );
}
