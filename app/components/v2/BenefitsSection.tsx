'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';

function BenefitCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="flex-1 bg-prove-grey rounded-[72px] p-9 flex flex-col gap-3 items-center h-[480px] relative overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col items-center text-center z-10">
        <h3 className="text-[40px] font-bold text-prove-main leading-[1.5]">
          {title}
        </h3>
        <p className="text-[24px] font-medium text-prove-primary leading-[1.5]">
          {subtitle}
        </p>
      </div>

      <div className="relative flex-1 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

export function BenefitsSection() {
  const { t } = useLocale();

  return (
    <section className="w-full h-screen px-20 py-6 flex flex-col gap-6 items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[36px] font-medium text-prove-primary text-center w-full h-[71px] flex items-center justify-center"
      >
        {t.benefits.title}
      </motion.h2>

      <div className="flex gap-6 w-[1064px]">
        <BenefitCard
          title={t.benefits.card1.title}
          subtitle={t.benefits.card1.subtitle}
          imageSrc="/images/benefits/benefit-easy-to-eat.png"
          imageAlt="Easy to eat"
          delay={0.1}
        />
        <BenefitCard
          title={t.benefits.card2.title}
          subtitle={t.benefits.card2.subtitle}
          imageSrc="/images/benefits/bacteria-image.png"
          imageAlt="Good bacteria"
          delay={0.2}
        />
        <BenefitCard
          title={t.benefits.card3.title}
          subtitle={t.benefits.card3.subtitle}
          imageSrc="/images/benefits/taste-graphic.png"
          imageAlt="Great taste"
          delay={0.3}
        />
      </div>
    </section>
  );
}

