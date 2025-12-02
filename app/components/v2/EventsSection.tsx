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
        {/* <p className="text-base sm:text-lg text-prove-primary/80">{t.events.subtitle}</p> */}
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
            <CarouselItem key={event.title} className="pl-4 sm:pl-6 basis-[280px] sm:basis-[320px]">
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
    <div 
      onClick={handleSelect}
      className="bg-white flex w-full flex-shrink-0 cursor-pointer flex-col gap-[12px] items-center overflow-clip p-[20px] rounded-[16px] h-full"
    >
      <div className="aspect-square relative rounded-[16px] shrink-0 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="320px"
          className="object-cover rounded-[16px]"
        />
      </div>
      <div className="bg-white flex flex-col gap-[8px] items-start w-full text-[#333333]">
        <p className="font-medium leading-[1.4] text-[20px] w-full whitespace-pre-wrap">
          {title}
        </p>
        <div className="font-normal leading-[1.4] opacity-80 text-[12px] tracking-[0.18px] w-full whitespace-pre-wrap">
          {description}
        </div>
      </div>
    </div>
  );
}

