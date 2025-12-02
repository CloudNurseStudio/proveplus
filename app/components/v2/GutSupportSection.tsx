'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';
import { useLocale } from './LocaleProvider';

const iconPaths = [
  '/images/gut/gut-balance.svg',
  '/images/gut/less-bloating.svg',
  '/images/gut/better-digestion.svg',
  '/images/gut/immune-support.svg',
  '/images/gut/lower-inflammation.svg',
  '/images/gut/metabolism.svg',
  '/images/gut/healthy-skin.svg',
  '/images/gut/better-mood.svg',
];

const buttonAuras = [
  'from-[#f8f2ff] to-[#e0e8ff]',
  'from-[#fff4ee] to-[#ffe6fb]',
  'from-[#f0f9ff] to-[#e6fff5]',
];

export function GutSupportSection() {
  const { t } = useLocale();
  const supportItems = t.gutSupport.items;

  return (
    <section
      className={cn(
        'w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20',
        ' overflow-y-hidden flex flex-col items-center gap-8 sm:gap-10',
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          'text-[clamp(2rem,6vw,4.25rem)] font-medium',
          'text-prove-primary text-center',
        )}
      >
        {t.gutSupport.title}
      </motion.h2>

      <div className="w-full max-w-6xl px-8 sm:px-10 py-4 overflow-y-hidden" >
        <div
          className={cn(
            'flex gap-5 sm:gap-6 overflow-x-auto overflow-y-hidden',
            'scrollbar-hide scroll-smooth snap-x snap-mandatory',
          )}
        >
          {supportItems.map((label, index) => {
            const iconPath = iconPaths[index % iconPaths.length];
            const aura = buttonAuras[index % buttonAuras.length];

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="flex-shrink-0 snap-start"
              >
                <Link
                  href="/blog"
                  aria-label={label}
                  className={cn(
                    'group flex w-[140px] sm:w-[150px] md:w-[168px]',
                    'flex-col items-center gap-4 focus-visible:outline-none',
                    'focus-visible:ring-4 focus-visible:ring-[#bcc9ff]/70',
                  )}
                >
                  <span
                    className={cn(
                      'relative flex size-[88px]',
                      'items-center justify-center rounded-full',
                      'border-[3px] border-[#5d6fcd]',
                      'bg-white shadow-[0_14px_40px_rgba(93,111,205,0.14)]',
                      'transition-transform duration-300 group-hover:-translate-y-1',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-[76px] items-center',
                        'justify-center rounded-full bg-gradient-to-br',
                        aura,
                      )}
                    >
                      <Image
                        src={iconPath}
                        alt={label}
                        width={64}
                        height={64}
                        className="size-16"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span
                    className={cn(
                      'text-center text-lg font-semibold',
                      'text-[#1e3497] leading-tight',
                    )}
                  >
                    {label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


