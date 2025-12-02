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
        className="flex w-full max-w-5xl flex-col gap-6 md:flex-row md:gap-4 lg:gap-6"
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
      className="group relative flex h-[320px] sm:h-[400px] lg:h-[480px] w-full md:w-auto md:min-w-0 overflow-hidden rounded-[48px] sm:rounded-[60px] lg:rounded-[72px] bg-gradient-to-br from-white/90 to-[#8FDAFA]/20 backdrop-blur-lg cursor-pointer"
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

      {/* Text content */}
      <div
        className={`relative z-10 flex flex-col items-center w-full p-6 sm:p-8 lg:p-9 transition-all duration-300 ${
          isHovered ? 'justify-center' : 'justify-start pt-8 sm:pt-10 lg:pt-12'
        }`}
      >
        <motion.p
          animate={{
            fontSize: isHovered ? 'clamp(2.5rem, 5vw, 4.5rem)' : 'clamp(2rem, 4vw, 3rem)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="font-bold text-black text-center leading-tight"
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
          className="text-[clamp(1rem, 2vw, 1.5rem)] font-medium text-black text-center overflow-hidden"
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
              className="mt-4 text-base sm:text-lg lg:text-xl text-prove-primary text-center max-w-md leading-relaxed"
            >
              {card.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Images - only visible when not hovered */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[55%] pointer-events-none"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0.8 : 1,
          y: isHovered ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Primary image */}
        <div className="relative w-full h-full">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 300px"
            className="object-contain object-bottom"
          />
        </div>
        
        {/* Secondary image (for fruit card) */}
        {card.image2 && (
          <div className="absolute -left-[15%] bottom-0 w-[60%] h-[80%]">
            <Image
              src={card.image2}
              alt={`${card.title} secondary`}
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 180px"
              className="object-contain object-bottom"
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
