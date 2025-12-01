'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationBar } from '../components/v2/NavigationBar';
import { FooterNav } from '../components/v2/FooterNav';
import { useLocale } from '../components/v2/LocaleProvider';
import { useModalService } from '../components/v2/ModalServiceProvider';

export default function AboutPage() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa] overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-2 sm:top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-2 sm:px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <NavigationBar />
        </div>
      </div>

      <main className="relative w-full mx-auto pt-24 sm:pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative flex flex-col items-center sm:items-start">
              <h1 className="font-fc-orbit font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.5] text-center sm:text-left">
                <span className="text-[#5d6fcd]">{t.about.hero.line1}</span>
              </h1>
              <h1 className="font-fc-orbit font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.5] text-center sm:text-left mt-1 sm:mt-2">
                <span className="text-[#5d6fcd]">{t.about.hero.line2}</span>
              </h1>
              
              {/* Decorative line - hidden on mobile */}
              <div className="hidden sm:block absolute -top-8 md:-top-12 lg:-top-16 left-16 md:left-24 lg:left-32 w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 opacity-40 rotate-[14.835deg] pointer-events-none -z-10">
                <Image 
                  src="/about-decorative-line.svg" 
                  alt="" 
                  width={326}
                  height={256}
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Company Introduction Section */}
        <section className="relative px-6 sm:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Overlapping masked images */}
              <motion.div
                className="relative w-full lg:w-1/2 flex justify-center order-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square">
                  {/* Background layer with tinted frame */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[80%] sm:w-[85%] aspect-square">
                      <div className="absolute inset-0 bg-[rgba(166,180,220,0.24)] rounded-[24px] transform scale-110" />
                      <Image 
                        src="/about-founder-photo.png"
                        alt="Company Representative"
                        width={431}
                        height={421}
                        className="relative rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  
                  {/* Top overlay layer */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image 
                      src="/about-founder-photo-overlay.png"
                      alt=""
                      width={595}
                      height={581}
                      className="object-cover w-full h-full rounded-[24px]"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right: Text content */}
              <motion.div
                className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 items-center lg:items-start order-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <p className="font-fc-orbit font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.5] text-[#424242] text-center lg:text-left">
                  {t.about.intro.heading}
                </p>

                {/* Three Pillars */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                  {t.about.intro.pillars.map((pillar, index) => (
                    <motion.div
                      key={pillar}
                      className="flex-1 bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] py-2 px-3 sm:px-4 flex items-center justify-center min-h-[44px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="font-fc-orbit font-medium text-sm sm:text-base md:text-lg leading-[1.5] text-[#4456a6] text-center">
                        {pillar}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <p className="font-fc-orbit font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.5] text-[#424242] text-center lg:text-left">
                  {t.about.intro.description}
                </p>

                <div className="bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center w-full">
                  <p className="font-fc-orbit font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.5] text-[#4456a6] text-center">
                    "{t.about.intro.tagline}"
                  </p>
                </div>
              </motion.div>

              {/* Decorative plus icon - mobile version */}
              <div className="block sm:hidden absolute top-8 right-4 opacity-40">
                <Image 
                  src="/about-decorative-plus.png"
                  alt=""
                  width={55}
                  height={55}
                  className="rotate-[355.09deg]"
                />
              </div>
              
              {/* Decorative plus icon - desktop version */}
              <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 opacity-50">
                <Image 
                  src="/about-decorative-plus.png"
                  alt=""
                  width={81}
                  height={81}
                  className="rotate-[355.09deg]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="relative px-6 sm:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Partnership Details */}
              <motion.div
                className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-9 order-2 lg:order-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="font-fc-orbit font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.5] text-[#424242] text-center lg:text-left">
                    {t.about.partnership.collaboration.title}
                  </p>
                  <p className="font-fc-orbit font-medium text-base sm:text-lg md:text-xl leading-[1.5] text-[#424242] text-center lg:text-left">
                    {t.about.partnership.collaboration.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="font-fc-orbit font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.5] text-[#424242] text-center lg:text-left">
                    {t.about.partnership.heading}
                  </p>

                  {/* Company Cards */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    <div className="flex-1 bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] p-4 sm:p-5 md:p-6 flex items-center justify-center min-h-[140px] sm:min-h-[160px]">
                      <div className="text-center">
                        <p className="font-fc-orbit font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-[#4456a6] mb-2">
                          {t.about.partnership.unionMedical.title}
                        </p>
                        <p className="font-fc-orbit font-medium text-sm sm:text-base md:text-lg text-[#424242]">
                          {t.about.partnership.unionMedical.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] p-4 sm:p-5 md:p-6 flex items-center justify-center min-h-[140px] sm:min-h-[160px]">
                      <div className="text-center">
                        <p className="font-fc-orbit font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-[#4456a6] mb-2">
                          {t.about.partnership.standardPharma.title}
                        </p>
                        <p className="font-fc-orbit font-medium text-sm sm:text-base md:text-lg text-[#424242]">
                          {t.about.partnership.standardPharma.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(255,255,255,0.56)] rounded-[16px] sm:rounded-[24px] p-4 sm:p-5 md:p-6 flex items-center justify-center">
                  <p className="font-fc-orbit font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.5] text-[#424242] text-center">
                    "{t.about.partnership.quote}"
                  </p>
                </div>
              </motion.div>

              {/* Right: Team Photos with masked frames */}
              <motion.div
                className="relative w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square">
                  {/* Background layer with tinted frame */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[80%] sm:w-[85%] aspect-square">
                      <div className="absolute inset-0 bg-[#e5ecff] rounded-[24px] transform scale-110" />
                      <Image 
                        src="/about-team-photo.png"
                        alt="Team"
                        width={501}
                        height={489}
                        className="relative object-cover w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Top overlay layer */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image 
                      src="/about-team-photo.png"
                      alt=""
                      width={547}
                      height={584}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative plus icon - mobile */}
              <div className="block sm:hidden absolute top-32 left-4 opacity-40">
                <Image 
                  src="/about-decorative-plus.png"
                  alt=""
                  width={40}
                  height={40}
                  className="rotate-[355.09deg]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Product Showcase Section */}
        <section className="relative px-6 sm:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col gap-8 sm:gap-10 md:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <motion.div 
                  className="bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 md:p-8 flex items-center justify-center min-h-[100px] sm:min-h-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-fc-orbit font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4456a6] text-center">
                    {t.about.stats.countries}
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 md:p-8 flex items-center justify-center min-h-[100px] sm:min-h-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="font-fc-orbit font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4456a6] text-center">
                    {t.about.stats.rd}
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-[rgba(255,255,255,0.5)] rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 md:p-8 flex items-center justify-center min-h-[100px] sm:min-h-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-fc-orbit font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4456a6] text-center">
                    {t.about.stats.licenses}
                  </p>
                </motion.div>
              </div>

              {/* Product Heading */}
              <h2 className="font-fc-orbit font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal text-[#4554a4] text-center px-4">
                {t.about.product.heading}
              </h2>

              {/* Product Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <motion.div 
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full aspect-[500/325] max-w-md">
                    <Image
                      src="/about-product-mascot.png"
                      alt="Prove+ Product"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <motion.button
                    onClick={() => openShopModal({ heading: t.nav.shopNow })}
                    className="bg-white flex gap-1.5 items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-[32px] hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-outfit font-bold text-sm sm:text-base leading-[24px] text-[#4456a6] whitespace-nowrap">
                      {t.about.product.button}
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-[#4456a6]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full aspect-[500/325] max-w-md">
                    <Image
                      src="/about-product-mascot.png"
                      alt="Prove+ Product"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <motion.button
                    onClick={() => openShopModal({ heading: t.nav.shopNow })}
                    className="bg-white flex gap-1.5 items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-[32px] hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-outfit font-bold text-sm sm:text-base leading-[24px] text-[#4456a6] whitespace-nowrap">
                      {t.about.product.button}
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-[#4456a6]">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-8 sm:mt-12 md:mt-16">
        <FooterNav />
      </footer>
    </div>
  );
}
