'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';
import { useModalService } from './ModalServiceProvider';

export function HeroSection() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();

  return (
    <section className="relative w-full min-h-screen pt-20 sm:pt-24 md:pt-28 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-52 overflow-hidden">
      {/* Background Pattern - faded */}
      <div className="absolute inset-0 opacity-[0.56] pointer-events-none">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/hero/background-pattern.webp" type="image/webp" />
          <img
            src="/images/hero/background-pattern.jpg"
            alt=""
            className="object-cover opacity-5 w-full h-full"
          />
        </picture>
      </div>

      {/* Decorative Plus Elements with Y Axis Rotation Animation - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 1, rotateY: 50.09, }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ perspective: 800 }}
        className="hidden lg:block absolute right-[15%] xl:right-[298px] top-[35%] md:top-[402px] w-[120px] md:w-[180px] lg:w-[220px] h-[120px] md:h-[180px] lg:h-[220px] pointer-events-none"
      >
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/hero/element-plus-02.webp" type="image/webp" />
          <img
            src="/images/hero/element-plus-02.jpg"
            alt=""
            className="object-contain w-full h-full"
          />
        </picture>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotateZ: 0 }}
        animate={{ opacity: 1, rotateZ: 10.693 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ perspective: 800 }}
        className="hidden lg:block absolute left-[10%] xl:left-[216px] top-[25%] md:top-[269px] w-[100px] md:w-[140px] lg:w-[161px] h-[100px] md:h-[140px] lg:h-[161px] pointer-events-none"
      >
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/hero/element-plus-03.webp" type="image/webp" />
          <img
            src="/images/hero/element-plus-03.jpg"
            alt=""
            className="object-contain w-full h-full"
          />
        </picture>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-0 py-6 sm:py-9 w-full max-w-[90vw] sm:max-w-[605px]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center sm:items-end mb-0 text-prove-primary leading-[1.3] sm:leading-[1.5]"
        >
          <h1 className="text-[clamp(2rem,8vw,5rem)] font-medium text-center whitespace-normal sm:whitespace-nowrap">
            {t.hero.headline1}
          </h1>
          <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-semibold whitespace-normal sm:whitespace-nowrap">
            {t.hero.headline2}
          </h2>
        </motion.div>

        {/* Product Image with Move Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[424px] md:h-[424px]"
        >
          <picture className="absolute inset-0 w-full h-full">
            <source srcSet="/images/hero/sku-gut-re.webp" type="image/webp" />
            <img
              src="/images/hero/sku-gut-re.jpg"
              alt="Prove+ Product"
              className="object-contain w-full h-full"
            />
          </picture>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={() => openShopModal({ heading: t.nav.shopNow })}
          className="bg-prove-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center gap-1 sm:gap-1.5 text-[clamp(1.125rem,3vw,1.625rem)] font-semibold hover:bg-prove-main transition-colors"
        >
          {t.nav.shopNow}
          <Image
            src="/images/testimonials/shopping-cart-icon.svg"
            alt=""
            width={20}
            height={20}
            className="brightness-0 invert sm:w-6 sm:h-6"
          />
        </motion.button>
      </div>
    </section>
  );
}

