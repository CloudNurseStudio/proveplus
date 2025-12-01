'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocale } from './LocaleProvider';

type FeatureCard = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export function ProductFeaturesSection() {
  const { t } = useLocale();
  const cards: FeatureCard[] = t.productFeatures.cards ?? [];
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center gap-6 sm:gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[clamp(2rem,6vw,3rem)] font-medium text-prove-primary text-center"
      >
        {t.productFeatures.title}
      </motion.h2>

      <div className="flex w-full max-w-6xl flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-row">
        {cards.map((card, index) => (
          <FeatureCardTile
            key={card.title}
            card={card}
            isActive={index === activeCard}
            onActivate={() => setActiveCard(index)}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCardTile({
  card,
  isActive,
  onActivate,
}: {
  card: FeatureCard;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={false}
      animate={{ flex: isActive ? 1.4 : 0.9 }}
      transition={{ type: 'spring', stiffness: 200, damping: 32 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      className="group relative flex min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] w-full flex-1 overflow-hidden rounded-[48px] sm:rounded-[60px] lg:rounded-[72px] border border-white/40 bg-white/80 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-prove-main/40"
    >
      <div className="relative z-10 flex flex-col gap-2 sm:gap-3 p-5 sm:p-7 lg:p-9 lg:max-w-xs">
        <p className="text-[clamp(2rem,5vw,3rem)] font-semibold text-prove-main leading-tight">
          {card.title}
        </p>
        <p className="text-[clamp(1.125rem,3vw,1.5rem)] font-medium text-prove-primary">
          {card.subtitle}
        </p>
        <p className="text-sm sm:text-base text-prove-primary/80">
          {card.description}
        </p>
      </div>

      <motion.div
        className="absolute inset-0 transition-opacity duration-500"
        animate={{ opacity: isActive ? 0.45 : 0.2 }}
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(143,218,250,0.35))',
        }}
      />

      <motion.div
        initial={{ scale: 0.9, rotate: -4 }}
        animate={{ scale: isActive ? 1.05 : 0.9, rotate: isActive ? 0 : -4 }}
        transition={{ type: 'spring', stiffness: 180, damping: 26 }}
        className="absolute bottom-0 right-0 h-[65%] sm:h-[70%] lg:h-[75%] w-[65%] sm:w-[70%] lg:w-[75%] min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]"
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 60vw, (max-width: 1024px) 50vw, 400px"
          className="object-contain"
        />
      </motion.div>
    </motion.button>
  );
}

