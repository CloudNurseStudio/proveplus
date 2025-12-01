'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  Activity,
  Flame,
  HeartPulse,
  Laugh,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wind,
} from 'lucide-react';
import { useLocale } from './LocaleProvider';

const iconSequence = [
  HeartPulse,
  Wind,
  Activity,
  ShieldCheck,
  Flame,
  Sparkles,
  SunMedium,
  Laugh,
];

const tileGradients = [
  'from-white via-[#fdf5e6] to-[#ffe4f3]',
  'from-white via-[#f7f0ff] to-[#e0f2ff]',
  'from-white via-[#f6fbff] to-[#e5f8f5]',
  'from-white via-[#fff2f2] to-[#ffe7d9]',
];

export function GutSupportSection() {
  const { t } = useLocale();
  const supportItems = t.gutSupport.items;
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full flex flex-col items-center gap-6 sm:gap-9 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[clamp(2rem,6vw,4.5rem)] font-medium text-prove-primary text-center"
      >
        {t.gutSupport.title}
      </motion.h2>

      <div className="w-full max-w-7xl">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
        >
          {supportItems.map((label, index) => {
            const Icon = iconSequence[index % iconSequence.length];
            const gradient = tileGradients[index % tileGradients.length];

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] snap-start rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-4 sm:p-5 shadow-[0_10px_60px_rgba(0,0,0,0.08)] backdrop-blur"
              >
                <div
                  className={`mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradient}`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-prove-main" strokeWidth={1.75} />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-prove-main leading-snug">
                  {label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


