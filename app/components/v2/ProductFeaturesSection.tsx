'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';

export function ProductFeaturesSection() {
  const { t } = useLocale();

  return (
    <section className="relative w-full h-[681px] flex items-center px-20 gap-3">
      {/* Left side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start pb-5 font-medium leading-[1.5]"
      >
        <p className="text-[72px] text-prove-secondary whitespace-nowrap">
          {t.productFeatures.title1}
        </p>
        <p className="text-[72px] text-prove-main w-[499px]">
          {t.productFeatures.title2}
        </p>
        <p className="text-[52px] text-prove-secondary w-[447px]">
          {t.productFeatures.subtitle}
        </p>
      </motion.div>

      {/* Right side - Product Image with Mask */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-shrink-0"
      >
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-[rgba(166,180,220,0.24)] rounded-full blur-3xl" />
        
        {/* Product image */}
        <div className="relative w-[638px] h-[465px]">
          <Image
            src="/images/hero/sampling-kit.png"
            alt="Prove+ Sampling Kit"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-[663px] top-[180px] w-[52px] h-[54px] pointer-events-none"
        style={{ transform: 'rotate(11.761deg)' }}
      >
        <Image
          src="/images/hero/image-45-decoration.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 351.693 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-[7px] bottom-[437px] w-[232px] h-[232px] pointer-events-none"
      >
        <Image
          src="/images/hero/element-plus-03.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}

