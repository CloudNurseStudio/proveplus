'use client';

import { NavigationBar } from '../components/v2/NavigationBar';
import { FooterNav } from '../components/v2/FooterNav';
import { useLocale } from '../components/v2/LocaleProvider';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const { t } = useLocale();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa]">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-2 sm:top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-2 sm:px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <NavigationBar />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center pt-20 sm:pt-24" role="main">
        {/* Hero Section with Video Background */}
        <section 
          className="relative w-full min-h-[600px] sm:h-[799px] flex items-end justify-center px-4 sm:px-6 md:px-12 pb-6 sm:pb-9 overflow-hidden"
          aria-label="Contact information"
        >
          {/* Background Video/Image */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 overflow-hidden bg-[#b7eaff]">
              <video
                src="/contact_background.mp4"
                autoPlay
                muted
                loop
                className="absolute w-full h-full object-cover"
                style={{
                  background: '#b7eaff'
                }}
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 w-full max-w-5xl">
            {/* Title */}
            <h1 className="text-white text-[clamp(2.5rem,10vw,4rem)] font-['FC_Orbit_Rounded',sans-serif] font-medium leading-[1.5] text-center px-4">
              {t.contactPage.hero.title}
            </h1>

            {/* Contact Info Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 md:gap-6 w-full max-w-full sm:max-w-fit">
              {/* Phone */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/30 transition-colors">
                <div className="flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                  <Phone className="w-[18px] h-[18px] text-[#546e7a]" />
                </div>
                <a
                  href={`tel:${t.contactPage.info.phone.replace(/\s/g, '')}`}
                  className="text-[#546e7a] text-base sm:text-lg font-['FC_Orbit_Rounded',sans-serif] font-medium hover:text-prove-main transition-colors focus:outline-none focus:ring-2 focus:ring-prove-main focus:ring-offset-2 rounded"
                  aria-label={`Call us at ${t.contactPage.info.phone}`}
                >
                  {t.contactPage.info.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/30 transition-colors">
                <div className="flex items-center justify-center w-6 h-6 flex-shrink-0" aria-hidden="true">
                  <Mail className="w-[18px] h-[18px] text-[#546e7a]" />
                </div>
                <a
                  href={`mailto:${t.contactPage.info.email}`}
                  className="text-[#546e7a] text-base sm:text-lg font-['FC_Orbit_Rounded',sans-serif] font-medium hover:text-prove-main transition-colors break-all sm:break-normal focus:outline-none focus:ring-2 focus:ring-prove-main focus:ring-offset-2 rounded"
                  aria-label={`Email us at ${t.contactPage.info.email}`}
                >
                  {t.contactPage.info.email}
                </a>
          </div>

                {/* Address */}
              <div className="flex items-start sm:items-center gap-3 px-3 py-2 rounded-xl">
                <div className="flex items-center justify-center w-6 h-6 flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true">
                  <MapPin className="w-[18px] h-[18px] text-[#546e7a]" />
                </div>
                <address className="text-[#546e7a] text-base sm:text-lg font-['FC_Orbit_Rounded',sans-serif] font-medium not-italic whitespace-pre-line">
                  {t.contactPage.info.address}
                </address>
                  </div>
                </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-0">
        <FooterNav />
      </footer>
    </div>
  );
}
