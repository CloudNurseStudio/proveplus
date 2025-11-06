'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative w-full h-screen pt-20 flex items-center justify-center px-52 overflow-hidden">
      {/* Background Pattern - faded */}
      <div className="absolute inset-0 opacity-[0.56] pointer-events-none">
        <Image
          src="/images/hero/background-pattern.png"
          alt=""
          fill
          className="object-cover opacity-5"
        />
      </div>

      {/* Decorative Plus Elements with Y Axis Rotation Animation */}
      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 1, rotateY: 50.09, }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ perspective: 800 }}
        className="absolute right-[298px] top-[402px] w-[220px] h-[220px] pointer-events-none"
      >
        <Image
          src="/images/hero/element-plus-02.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotateZ: 0 }}
        animate={{ opacity: 1, rotateZ: 10.693 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ perspective: 800 }}
        className="absolute left-[216px] top-[269px] w-[161px] h-[161px] pointer-events-none"
      >
        <Image
          src="/images/hero/element-plus-03.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-0 py-9 w-[605px]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-end mb-0 text-prove-primary leading-[1.5]"
        >
          <h1 className="text-[80px] font-medium text-center whitespace-nowrap">
            {t.hero.headline1}
          </h1>
          <h2 className="text-[48px] font-semibold whitespace-nowrap">
            {t.hero.headline2}
          </h2>
        </motion.div>

        {/* Product Image with Move Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-[424px] h-[424px]"
        >
          <Image
            src="/images/hero/sku-gut-re.png"
            alt="Prove+ Product"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-prove-primary text-white px-4 py-2 rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center gap-1.5 text-[26px] font-semibold hover:bg-prove-main transition-colors"
        >
          {t.nav.shopNow}
          <Image
            src="/images/testimonials/shopping-cart-icon.svg"
            alt=""
            width={24}
            height={24}
            className="brightness-0 invert"
          />
        </motion.button>
      </div>
    </section>
  );
}

