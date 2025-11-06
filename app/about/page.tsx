'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Language = 'en' | 'th';

const content: Record<Language, {
  hero: {
    line1: string;
    line2: string;
  };
  intro: {
    heading: string;
    pillars: [string, string, string];
    description: string;
    tagline: string;
  };
  partnership: {
    heading: string;
    unionMedical: {
      title: string;
      description: string;
    };
    standardPharma: {
      title: string;
      description: string;
    };
    collaboration: string;
    quote: string;
  };
  product: {
    heading: string;
    button: string;
  };
}> = {
  en: {
    hero: {
      line1: 'Prove in every dose',
      line2: 'Plus in every need',
    },
    intro: {
      heading: 'At Standard Union Medical Thailand we believe that healthcare must start with confidence',
      pillars: ['Confidence in Quality', 'Confidence in Safety', 'Confidence in Results'],
      description: 'We therefore bring Prove+ premium quality probiotic brand from world-leading manufacturer Syngen to Thai people to take care of intestinal health, strengthen immunity and help you have good health every day. Ready to uphold our promise',
      tagline: '"Prove in every dose, Plus in every need"',
    },
    partnership: {
      heading: 'We were born from a joint venture between...',
      unionMedical: {
        title: 'Union Medical (Thailand)',
        description: 'Leader in drug import and distribution who has been by Thai people\'s side since 1976',
      },
      standardPharma: {
        title: 'Standard Pharma (Thailand)',
        description: 'Expert in the production of probiotics and health supplements',
      },
      collaboration: 'This collaboration builds on over 20 years of experience through Standard Chem and Pharma Taiwan (headquarters)',
      quote: '"We combine market understanding with internationally standardized manufacturing technology"',
    },
    product: {
      heading: 'This is our first product',
      button: 'Shop now',
    },
  },
  th: {
    hero: {
      line1: 'Prove in every dose',
      line2: 'Plus in every need',
    },
    intro: {
      heading: 'ที่ Standard Union Medical Thailand เราเชื่อว่าการดูแลสุขภาพต้องเริ่มจากความมั่นใจ',
      pillars: ['มั่นใจในคุณภาพ', 'มั่นใจในความปลอดภัย', 'มั่นใจในผลลัพธ์'],
      description: 'เราจึงนำ Prove+ แบรนด์โพรไบโอติกส์คุณภาพพรีเมียมจากผู้ผลิตชั้นนำระดับโลกอย่าง Syngen มาสู่คนไทย เพื่อดูแลสุขภาพลำไส้ เสริมภูมิคุ้มกันและช่วยให้คุณมีสุขภาพที่ดีในทุกวัน พร้อมยึดมั่นในสัญญาของเรา',
      tagline: '"Prove in every dose, Plus in every need"',
    },
    partnership: {
      heading: 'เราเกิดจากการร่วมทุนระหว่าง...',
      unionMedical: {
        title: 'Union Medical (Thailand)',
        description: 'ผู้นำด้านการนำเข้าและจัดจำหน่ายยา ที่อยู่เคียงข้างคนไทย มาตั้งแต่ปี 1976',
      },
      standardPharma: {
        title: 'Standard Pharma (Thailand)',
        description: 'ผู้เชี่ยวชาญด้านการผลิตโพรไบโอติกส์และอาหารเสริมเพื่อสุขภาพ',
      },
      collaboration: 'ความร่วมมือนี้ต่อยอดจากประสบการณ์มากกว่า 20 ปี ผ่าน Standard Chem and Pharma Taiwan (สำนักงานใหญ่)',
      quote: '"เราผสมผสานความเข้าใจตลาดเข้ากับเทคโนโลยีการผลิตที่ได้มาตรฐานสากล"',
    },
    product: {
      heading: 'นี่คือผลิตภัณฑ์แรกของเรา',
      button: 'Shop now',
    },
  },
};

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>('th');
  const t = content[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff] from-[4.238%] via-[#fef0ca] via-[47.881%] to-[#8fdafa] relative">
      <Navbar />

      {/* Language Toggle Button */}
      <div className="fixed top-24 right-8 z-40">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-brand-primary-700 text-white rounded-full shadow-lg hover:bg-brand-primary-400 transition-colors duration-200 text-sm font-semibold"
          aria-label={`Switch to ${language === 'en' ? 'Thai' : 'English'}`}
        >
          {language === 'en' ? '🇹🇭 ไทย' : '🇬🇧 EN'}
        </button>
      </div>

      <main className="relative w-full max-w-[1280px] mx-auto">
        {/* Hero Section - Absolute positioned text as in Figma */}
        <section className="relative h-[467px]">
          <motion.div
            className="absolute left-[213px] top-[86px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="absolute left-[432.62px] top-[82px] -translate-x-1/2 font-fc-orbit font-medium text-[72px] leading-[1.5] text-[#4456a6] text-center whitespace-nowrap">
              <span>Prove </span>
              <span className="text-[#5d6fcd]">in every dose</span>
            </p>
            <p className="absolute left-[124.62px] top-[146px] font-fc-orbit font-medium text-[72px] leading-[1.5] text-[#4456a6] whitespace-nowrap">
              <span>Plus </span>
              <span className="text-[#5d6fcd]">in every need</span>
            </p>
            
            {/* Decorative line rotated */}
            <div className="absolute left-0 top-0 w-[305.809px] h-[246.933px] rotate-[14.835deg]">
              <img 
                src="/about-decorative-line.svg" 
                alt="" 
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </section>

        {/* Company Introduction Section - Following Figma structure */}
        <section className="relative h-screen px-12 flex items-end">
          {/* Left: Overlapping masked images */}
          <div className="relative h-full shrink-0" style={{ width: '670px' }}>
            {/* Background layer with tinted frame */}
            <div className="absolute top-[170.433px] left-[82px]">
              <div 
                className="absolute bg-[rgba(166,180,220,0.24)] rounded-[24px]"
                style={{ 
                  width: '537px',
                  height: '527.726px',
                  left: '-34px',
                  top: '-35.935px'
                }}
              />
              <img 
                src="/about-founder-photo.png"
                alt="Company Representative"
                className="relative rounded-[24px] object-cover"
                style={{
                  width: '430.889px',
                  height: '420.567px'
                }}
              />
            </div>
            
            {/* Top overlay layer */}
            <div className="absolute top-0 left-0">
              <img 
                src="/about-founder-photo-overlay.png"
                alt=""
                className="object-cover"
                style={{
                  width: '595px',
                  height: '581.115px',
                  clipPath: 'inset(0 0 0 0 round 24px)'
                }}
              />
            </div>
          </div>

          {/* Right: Text content */}
          <motion.div
            className="flex-1 flex flex-col gap-6 items-center justify-center py-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="font-fc-orbit font-medium text-[24px] leading-[1.5] text-[#424242] w-full">
              {language === 'th' ? (
                <>
                  <span>ที่ </span>
                  <span className="text-[#4456a6]">Standard Union Medical Thailand</span>
                  <span> เราเชื่อว่าการดูแลสุขภาพต้องเริ่มจากความมั่นใจ</span>
                </>
              ) : (
                <>
                  <span>At </span>
                  <span className="text-[#4456a6]">Standard Union Medical Thailand</span>
                  <span> we believe that healthcare must start with confidence</span>
                </>
              )}
            </p>

            {/* Three Pillars */}
            <div className="flex gap-3 w-full">
              {t.intro.pillars.map((pillar, index) => (
                <motion.div
                  key={pillar}
                  className="flex-1 bg-[rgba(255,255,255,0.5)] rounded-[24px] py-1 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="font-fc-orbit font-medium text-[18px] leading-[1.5] text-[#4456a6] text-center">
                    {pillar}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="font-fc-orbit font-medium text-[24px] leading-[1.5] text-[#424242] w-[589px]">
              {language === 'th' ? (
                <>
                  <p className="mb-0">
                    <span>เราจึงนำ </span>
                    <span className="text-[#4456a6]">Prove+</span>
                    <span> แบรนด์โพรไบโอติกส์คุณภาพพรีเมียม</span>
                  </p>
                  <p>
                    จากผู้ผลิตชั้นนำระดับโลกอย่าง Syngen มาสู่คนไทย
                    <br />
                    <br />
                    เพื่อดูแลสุขภาพลำไส้ เสริมภูมิคุ้มกันและช่วยให้คุณ
                    <br />
                    มีสุขภาพที่ดีในทุกวัน พร้อมยึดมั่นในสัญญาของเรา
                  </p>
                </>
              ) : (
                <p>{t.intro.description}</p>
              )}
            </div>

            <div className="bg-[rgba(255,255,255,0.5)] rounded-[24px] py-0.5 flex items-center justify-center w-full">
              <div className="font-fc-orbit font-medium text-[28px] leading-[1.5] text-[#4456a6] text-center w-[612px]">
                <p className="mb-0">"Prove in every dose,</p>
                <p>Plus in every need"</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative plus icon */}
          <img 
            src="/about-decorative-plus.png"
            alt=""
            className="absolute rotate-[355.09deg]"
            style={{
              width: '81.164px',
              height: '81.164px',
              left: '1131px',
              top: '435px'
            }}
          />
        </section>

        {/* Partnership Section - Following Figma structure */}
        <section className="relative h-auto w-full px-14 flex gap-9 items-center">
          {/* Left: Partnership Details */}
          <motion.div
            className="flex-1 flex flex-col gap-9 h-full items-center justify-center py-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 w-full">
              <p className="font-fc-orbit font-medium text-[24px] leading-[1.5] text-[#424242] w-full">
                {t.partnership.heading}
              </p>

              {/* Company Cards */}
              <div className="flex gap-6 h-[160px] w-full">
                <div className="bg-[rgba(255,255,255,0.5)] rounded-[24px] p-3 flex items-center justify-center">
                  <p className="font-fc-orbit font-medium text-center h-full w-[295.5px] text-[#424242] flex flex-col justify-center">
                    <span className="font-fc-orbit font-semibold text-[#4456a6] text-[24px]">
                      {t.partnership.unionMedical.title}
                      <br />
                    </span>
                    <span className="text-[18px]">
                      {t.partnership.unionMedical.description}
                    </span>
                  </p>
                </div>

                <div className="flex-1 bg-[rgba(255,255,255,0.5)] rounded-[24px] p-1 flex items-center justify-center">
                  <p className="flex-1 font-fc-orbit font-medium text-center h-full text-[#424242] flex flex-col justify-center">
                    <span className="font-fc-orbit font-semibold text-[#4456a6] text-[24px]">{t.partnership.standardPharma.title} </span>
                    <span className="text-[18px]">
                      {t.partnership.standardPharma.description}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <p className="font-fc-orbit font-medium leading-[1.5] text-[#424242] w-full">
              <span className="font-fc-orbit font-semibold text-[24px]">
                {language === 'th' ? 'ความร่วมมือนี้ต่อยอดจากประสบการณ์มากกว่า 20 ปี ' : 'This collaboration builds on over 20 years of experience '}
              </span>
              <span className="text-[24px]">
                <br />
              </span>
              <span className="text-[20px]">
                {language === 'th' ? 'ผ่าน Standard Chem and Pharma Taiwan (สำนักงานใหญ่)' : 'through Standard Chem and Pharma Taiwan (headquarters)'}
              </span>
            </p>

            <div className="bg-[rgba(255,255,255,0.56)] rounded-[24px] p-3 flex items-center justify-center w-full">
              <p className="flex-1 font-fc-orbit font-medium leading-[1.5] text-[#424242] text-[32px] text-center">
                {t.partnership.quote}
              </p>
            </div>
          </motion.div>

          {/* Right: Team Photos with masked frames */}
          <motion.div
            className="relative shrink-0"
            style={{ width: '579.874px', height: '539.12px' }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Background layer with tinted frame */}
            <div className="absolute top-[85px] left-[23px]">
              <div 
                className="absolute bg-[#e5ecff] rounded-[24px]"
                style={{ 
                  width: '576.809px',
                  height: '514.184px',
                  left: '-33.009px',
                  top: '-29.664px'
                }}
              />
              <img 
                src="/about-team-photo.png"
                alt="Team"
                className="relative object-cover rounded-full"
                style={{
                  width: '501px',
                  height: '489.464px'
                }}
              />
            </div>
            
            {/* Top overlay layer */}
            <div className="absolute top-0 left-0">
              <img 
                src="/about-team-photo.png"
                alt=""
                className="object-cover rounded-full"
                style={{
                  width: '547px',
                  height: '584px',
                  clipPath: 'circle(50% at 50% 50%)'
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Product Showcase Section */}
        <section className="relative flex flex-col items-center gap-6 px-6 py-24">
          <motion.div
            className="flex flex-col items-center gap-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="font-fc-orbit font-medium text-[#4554a4] text-[48px] leading-normal text-center">
              {t.product.heading}
            </p>

            {/* Product Image */}
            <div className="flex flex-col items-center">
              <div className="relative" style={{ width: '500px', height: '325px' }}>
                <img
                  src="/about-product-mascot.png"
                  alt="Prove+ Product"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* Shop Now Button */}
              <motion.a
                href="/#where-to-buy"
                className="bg-white flex gap-1.5 items-center justify-center pl-3.5 pr-2.5 py-1 rounded-[32px] hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-bold text-[16px] leading-[24px] text-[#4456a6] whitespace-nowrap">
                  {t.product.button}
                </span>
                <div className="w-[16.667px] h-[16.667px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-[#4456a6]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
