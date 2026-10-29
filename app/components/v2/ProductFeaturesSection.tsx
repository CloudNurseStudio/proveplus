'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLocale } from './LocaleProvider';

type FeatureCard = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  image2?: string;
};

export function ProductFeaturesSection() {
  const { t } = useLocale();
  const cards: FeatureCard[] = t.productFeatures.cards ?? [];
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

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

      <div
        className="flex w-full flex-col gap-6 md:flex-row md:gap-4 lg:gap-6"
        onMouseLeave={handleMouseLeave}
      >
        {cards.map((card, index) => (
          <FeatureCardTile
            key={card.title}
            card={card}
            isHovered={index === hoveredCard}
            hasHoveredCard={hoveredCard !== null}
            onHover={() => setHoveredCard(index)}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCardTile({
  card,
  isHovered,
  hasHoveredCard,
  onHover,
}: {
  card: FeatureCard;
  isHovered: boolean;
  hasHoveredCard: boolean;
  onHover: () => void;
}) {
  // Determine flex value based on hover state
  const getFlexValue = () => {
    if (!hasHoveredCard) return 1; // All equal when none hovered
    return isHovered ? 2.2 : 0.7; // Expanded or shrunk
  };

  return (
    <motion.div
      initial={false}
      animate={{ flex: getFlexValue() }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group relative flex h-[340px] w-full flex-col overflow-hidden rounded-[36px] bg-gradient-to-br from-white/90 to-[#8FDAFA]/20 backdrop-blur-lg cursor-pointer sm:h-[380px] sm:rounded-[48px] md:h-[420px] md:w-auto md:min-w-0 lg:h-[460px] lg:rounded-[60px]"
    >
      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 0.3 : 0.15 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(143,218,250,0.4))',
        }}
      />

      {/* White overlay to boost text contrast */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-white"
        animate={{ opacity: isHovered ? 0 : 0.35 }}
        transition={{ duration: 0.3 }}
      />

      {/* Keep headings in a dedicated area above the product photography. */}
      <div
        className={`relative z-10 flex w-full flex-col items-center px-5 pt-5 text-center transition-all duration-300 sm:px-7 sm:pt-7 md:px-5 md:pt-6 lg:px-7 lg:pt-8 ${
          isHovered ? 'h-full shrink-0 justify-center bg-white/90' : 'h-[38%] shrink-0 justify-start'
        }`}
      >
        <motion.p
          animate={{
            fontSize: isHovered ? 'clamp(1.8rem, 3vw, 2.8rem)' : 'clamp(1.35rem, 2.2vw, 2rem)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="max-w-full font-bold leading-tight text-[#293d91]"
          style={{
            WebkitTextStroke: '0.35px rgba(255, 255, 255, 0.8)',
            textShadow: '0 1px 3px rgba(255, 255, 255, 0.95), 0 0 8px rgba(255, 255, 255, 0.72)',
          }}
        >
          {card.title}
        </motion.p>
        
        <motion.p
          animate={{
            opacity: isHovered ? 0 : 1,
            height: isHovered ? 0 : 'auto',
            marginTop: isHovered ? 0 : 8,
          }}
          transition={{ duration: 0.2 }}
          className="mt-1 max-w-full overflow-hidden text-[clamp(0.9rem,1.35vw,1.15rem)] font-semibold leading-snug text-[#243047]"
          style={{
            WebkitTextStroke: '0.2px rgba(255, 255, 255, 0.82)',
            textShadow: '0 1px 3px rgba(255, 255, 255, 0.95), 0 0 7px rgba(255, 255, 255, 0.68)',
          }}
        >
          {card.subtitle}
        </motion.p>

        <AnimatePresence>
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-prove-primary sm:text-base lg:text-lg"
            >
              {card.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Images stay in the lower portion so they cannot sit behind the text. */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%]"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.8 : 1,
          y: isHovered ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Primary image */}
        <div className={`relative h-full ${card.image2 ? 'ml-auto w-[78%]' : 'w-full'}`}>
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-contain object-[center_bottom]"
          />
        </div>
        
        {/* Secondary image (for fruit card) */}
        {card.image2 && (
          <div className="absolute left-0 top-1/2 h-full w-[48%] -translate-y-1/2">
            <Image
              src={card.image2}
              alt={`${card.title} secondary`}
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 180px"
              className="object-contain object-center"
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
