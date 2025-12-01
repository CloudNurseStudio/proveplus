'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocale } from './LocaleProvider';

const cardMedia = [
  {
    imageSrc: '/images/benefits/benefit-easy-to-eat.png',
    imageAlt: 'Easy to take illustration',
    gradient: 'from-[#fef6e7] via-[#fde6f3] to-[#f6f7ff]',
  },
  {
    imageSrc: '/images/benefits/powder.png',
    imageAlt: 'BC 198 sachet',
    gradient: 'from-[#f4f8ff] via-[#e6f4ff] to-[#fef5e7]',
  },
  {
    imageSrc: '/images/benefits/taste-graphic.png',
    imageAlt: 'Great taste fruits',
    gradient: 'from-[#fff3f3] via-[#fde6f3] to-[#f4f9ff]',
  },
];

export function BenefitsSection() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = t.benefits.cards.map((card, index) => ({
    ...card,
    ...cardMedia[index % cardMedia.length],
  }));

  const handleActivate = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col gap-6 sm:gap-9 items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[clamp(2rem,6vw,3rem)] font-medium text-prove-primary text-center"
      >
        {t.benefits.title}
      </motion.h2>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row w-full max-w-6xl gap-4 sm:gap-6">
        {cards.map((card, index) => (
          <motion.button
            key={card.title}
            type="button"
            layout
            onMouseEnter={() => handleActivate(index)}
            onFocus={() => handleActivate(index)}
            onClick={() => handleActivate(index)}
            aria-pressed={activeIndex === index}
            className={`relative flex h-[380px] sm:h-[420px] lg:h-[480px] flex-col overflow-hidden rounded-[48px] sm:rounded-[60px] lg:rounded-[72px] p-5 sm:p-7 lg:p-9 text-left shadow-[0_25px_80px_rgba(70,86,167,0.15)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-prove-main ${
              activeIndex === index ? 'bg-white' : 'bg-white/70'
            }`}
            animate={{
              flex: activeIndex === index ? 1.4 : 0.9,
            }}
            transition={{ type: 'spring', stiffness: 140, damping: 25 }}
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              <p className="text-[clamp(2rem,5vw,3rem)] font-semibold text-prove-main leading-[1.2]">
                {card.title}
              </p>
              <p className="text-[clamp(1.125rem,3vw,1.5rem)] text-prove-primary leading-[1.2]">
                {card.subtitle}
              </p>
            </div>

            <div className="relative mt-auto flex-1">
              <div
                className={`absolute inset-0 rounded-[40px] sm:rounded-[56px] bg-gradient-to-br opacity-70 blur-3xl ${card.gradient}`}
              />
              <div className="relative mx-auto mt-4 sm:mt-6 h-[200px] sm:h-[240px] lg:h-[260px] w-full max-w-[280px] sm:max-w-[320px]">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 320px"
                />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

