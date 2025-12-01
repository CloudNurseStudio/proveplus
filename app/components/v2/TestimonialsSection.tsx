'use client';

import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';
import { VideoCard } from './VideoCard';
import { SocialReviewCard } from './SocialReviewCard';
import { Arrow } from './Arrow';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/app/components/ui/carousel';

function VideoCarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  if (!canScrollPrev && !canScrollNext) return null;

  return (
    <div className="flex gap-3 sm:gap-4 mt-4">
      <Arrow
        direction="left"
        onClick={scrollPrev}
        className={!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}
      />
      <Arrow
        direction="right"
        onClick={scrollNext}
        className={!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  );
}

function ReviewCarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  if (!canScrollPrev && !canScrollNext) return null;

  return (
    <div className="flex gap-[10px] items-start">
      <Arrow
        direction="left"
        onClick={scrollPrev}
        className={!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}
      />
      <Arrow
        direction="right"
        onClick={scrollNext}
        className={!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLocale();

  const platformReviews =
    t.testimonials.platformReviews.cards ?? [];

  const videoTestimonials = [
    {
      thumbnailSrc: '/images/testimonials/customer-video-1.png',
      customerName: t.testimonials.customer1.name,
      customerTitle: t.testimonials.customer1.title,
      description: t.testimonials.customer1.description,
      videoUrl: t.testimonials.customer1.videoUrl,
      ctaUrl: 'https://www.instagram.com/proveplus_th/',
    },
    {
      thumbnailSrc: '/images/testimonials/customer-video-2.png',
      customerName: t.testimonials.customer2.name,
      customerTitle: t.testimonials.customer2.title,
      description: t.testimonials.customer2.description,
      videoUrl: t.testimonials.customer2.videoUrl,
      ctaUrl: 'https://www.tiktok.com/@proveplus',
    },
  ];

  return (
    <section className="relative w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-6 sm:gap-9 items-center justify-center">
      {/* Background Pattern - faded */}
      <div className="absolute inset-0 opacity-[0.56] pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-[119px] -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[731px] h-[600px] sm:h-[900px] lg:h-[1050px]">
          <Image
            src="/images/hero/background-pattern.png"
            alt=""
            fill
            className="object-cover opacity-12"
          />
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[clamp(2.5rem,7vw,4rem)] font-medium text-prove-main text-center flex items-center justify-center relative z-10"
      >
        {t.testimonials.title}
      </motion.h2>

      {/* Video Reviews and Platform Reviews Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-8 lg:gap-12 max-w-7xl">
        {/* Left - Video Reviews Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="p-[10px]">
            <p className="text-[clamp(1.75rem,5vw,3rem)] font-medium text-prove-primary leading-tight sm:leading-[1.8]">
              {t.testimonials.videoReviews.title1}
            </p>
            <p className="text-[clamp(1.75rem,5vw,3rem)] font-medium text-prove-primary leading-tight sm:leading-[1.8]">
              {t.testimonials.videoReviews.title2}
            </p>
          </div>
        </motion.div>

        {/* Right - Video Cards Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-auto"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-6 sm:-ml-8 lg:-ml-12">
              {videoTestimonials.map((video) => (
                <CarouselItem key={video.customerName} className="pl-6 sm:pl-8 lg:pl-12 basis-auto">
                  <VideoCard
                    thumbnailSrc={video.thumbnailSrc}
                    customerName={video.customerName}
                    customerTitle={video.customerTitle}
                    videoUrl={video.videoUrl}
                    description={video.description ?? t.testimonials.videoModal.fallback}
                    ctaUrl={video.ctaUrl}
                    ctaLabel={t.testimonials.videoModal.cta}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center lg:hidden">
              <VideoCarouselControls />
            </div>
          </Carousel>
        </motion.div>
      </div>

      {/* Platform Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col gap-6 sm:gap-9 items-center w-full relative z-10 max-w-7xl"
      >
        <div className="flex gap-[10px] items-center w-full justify-center">
          <p className="text-[clamp(1.75rem,5vw,3rem)] font-medium text-prove-primary leading-tight sm:leading-[1.8] text-center">
            {t.testimonials.platformReviews.title}
          </p>
        </div>

        {/* Review Cards Carousel */}
        {platformReviews.length > 0 && (
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {platformReviews.map((review, index) => (
                <CarouselItem
                  key={`${review.author}-${index}`}
                  className="pl-3 sm:pl-4 basis-auto"
                >
                  <SocialReviewCard
                    review={review.review}
                    author={review.author}
                    platform={review.platform}
                    rating={review.rating}
                    dimmed={review.dimmed}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-4 flex justify-center">
              <ReviewCarouselControls />
            </div>
          </Carousel>
        )}
      </motion.div>
    </section>
  );
}

