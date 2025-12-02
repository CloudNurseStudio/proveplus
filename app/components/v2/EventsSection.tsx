'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { useLocale } from './LocaleProvider';
import { Arrow } from './Arrow';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/app/components/ui/carousel';
import { useModalService } from './ModalServiceProvider';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  cta: string;
  ctaUrl?: string;
}

function EventCarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  if (!canScrollPrev && !canScrollNext) return null;

  return (
    <div className="flex gap-3 sm:gap-4">
      <Arrow
        direction="right"
        onClick={scrollNext}
        className={!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}
      />
      <Arrow
        direction="left"
        onClick={scrollPrev}
        className={!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  );
}

export function EventsSection() {
  const { t } = useLocale();
  const events: EventCardProps[] = t.events?.cards ?? [];

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col gap-6 sm:gap-9 items-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex w-full max-w-6xl flex-col gap-2 sm:gap-3 text-center"
      >
        <p className="text-[clamp(2rem,6vw,3rem)] font-semibold text-prove-primary">
          {t.events.title}
        </p>
        <p className="text-base sm:text-lg text-prove-primary/80">{t.events.subtitle}</p>
      </motion.div>

      <Carousel
        opts={{
          align: 'start',
          loop: false,
          slidesToScroll: 1,
        }}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="-ml-4 sm:-ml-6">
          {events.map((event) => (
            <CarouselItem key={event.title} className="pl-4 sm:pl-6 basis-auto">
              <EventCard {...event} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <EventCarouselControls />
        </div>
      </Carousel>
    </section>
  );
}

function EventCard({
  title,
  description,
  date,
  location,
  image,
  cta,
  ctaUrl,
}: EventCardProps) {
  const { openEventModal } = useModalService();
  const handleSelect = useCallback(() => {
    openEventModal({
      title,
      description,
      date,
      location,
      imageSrc: image,
      cta,
      ctaUrl,
    });
  }, [
    title,
    description,
    date,
    location,
    image,
    cta,
    ctaUrl,
    openEventModal,
  ]);

  return (
    <div className="flex w-[280px] sm:w-[320px] flex-shrink-0 flex-col gap-3 sm:gap-4 rounded-[32px] sm:rounded-[40px] border border-white/40 bg-white/80 p-4 sm:p-6 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur h-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 280px, 320px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-prove-main/70">
          {date}
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold text-prove-main">{title}</h3>
        <p className="text-sm sm:text-base text-prove-primary/80">{description}</p>
      </div>
      <div className="mt-auto flex flex-col gap-2 sm:gap-3">
        <div className="text-xs sm:text-sm text-prove-primary">
          <span className="font-semibold">{location}</span>
        </div>
        <button
          type="button"
          onClick={handleSelect}
          className="w-full rounded-full bg-prove-main px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-white transition hover:bg-prove-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-prove-primary"
          aria-label={`${cta} for ${title}`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}

