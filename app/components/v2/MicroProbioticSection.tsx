'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';

// Local asset URLs
const imgImage45 = "/images/microprobiotic-image-45.webp";
const imgProduct1 = "/images/microprobiotic-product-1.webp";
const imgProduct2 = "/images/microprobiotic-product-2.webp";
const imgMix1 = "/images/microprobiotic-mix-1.webp";
const imgElementPlus030 = "/images/microprobiotic-element-plus-030.webp";
export const MICRO_SECTION_ID = 'micro-probiotic-section';
export const MICRO_IMAGE_ANCHOR_ID = 'micro-probiotic-anchor';

export function MicroProbioticSection() {
  const { t } = useLocale();

  return (
    <section
      id={MICRO_SECTION_ID}
      className="relative w-full min-h-[600px] sm:min-h-[680px] px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, rotateZ: 0 }}
        whileInView={{ opacity: 1, rotateZ: 351.693 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ perspective: 800 }}
        className="hidden lg:block absolute right-[10%] xl:right-[100px] bottom-[15%] w-[120px] md:w-[153px] h-[120px] md:h-[153px] pointer-events-none"
      >
        <Image
          src={imgElementPlus030}
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 sm:gap-3 text-center lg:text-left max-w-[500px]"
        >
          <h2 className="text-[clamp(2rem,6vw,3rem)] font-medium text-[#8197cd] leading-tight">
            {t.microProbiotic.line1}
          </h2>
          <h3 className="text-[clamp(2.5rem,7vw,3.5rem)] font-semibold text-[#4656a7] leading-tight">
            {t.microProbiotic.line2}
          </h3>
          <p className="text-[clamp(2rem,6vw,3rem)] font-medium text-[#8197cd] leading-tight">
            {t.microProbiotic.line3}
          </p>

          {/* Product cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 sm:gap-5 mt-4 sm:mt-6 justify-center lg:justify-start"
          >
            {/* Product 1 - Flowpro */}
            <Link href="/products/flowpro" className="flex flex-col items-center rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 transition-transform">
              <div className="bg-[#e5ecfe] p-2 rounded-t-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="relative w-[120px] h-[120px]">
                  <Image
                    src={imgProduct1}
                    alt="Prove+ Gut Relief Product"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#f5f5f5] px-6 py-3 rounded-b-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[136px]">
                <p className="text-[#4456a6] text-center font-semibold text-[16px]">
                  Details
                </p>
              </div>
            </Link>

            {/* Product 2 - Allerpro */}
            <Link href="/products/allerpro" className="flex flex-col items-center rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 transition-transform">
              <div className="bg-[#fbf7e2] p-2 rounded-t-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="relative w-[120px] h-[120px]">
                  <Image
                    src={imgProduct2}
                    alt="Prove+ Allergy Relief Product"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#f5f5f5] px-6 py-3 rounded-b-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[136px]">
                <p className="text-[#4456a6] text-center font-semibold text-[16px]">
                  Details
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side - Product image with mask */}
        <motion.div
          id={MICRO_IMAGE_ANCHOR_ID}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[552px] h-[400px] sm:h-[480px] lg:h-[545px]"
        >
          {/* Decorative image overlay */}
          <motion.div
            initial={{ opacity: 0, rotateZ: 0 }}
            whileInView={{ opacity: 1, rotateZ: 11.761 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden sm:block absolute left-[10%] top-[5%] w-[50px] md:w-[62px] h-[52px] md:h-[63px] z-20"
          >
            <Image
              src={imgImage45}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Main product mix image with circular mask */}
          <div className="relative w-full h-full rounded-[40px] sm:rounded-[60px] overflow-hidden bg-[rgba(166,180,220,0.24)]">
            <Image
              src={imgMix1}
              alt="Prove+ Sampling Kit"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 552px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

