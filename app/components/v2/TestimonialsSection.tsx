'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';
import { VideoCard } from './VideoCard';
import { ReviewCard } from './ReviewCard';
import { Arrow } from './Arrow';
import Image from 'next/image';

export function TestimonialsSection() {
  const { t } = useLocale();
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviewScreenshots = [
    '/images/testimonials/review-screenshot-1.png',
    '/images/testimonials/review-screenshot-2.png',
    '/images/testimonials/review-screenshot-3.png',
  ];

  const handlePreviousReview = () => {
    setReviewIndex((prev) => (prev === 0 ? reviewScreenshots.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev === reviewScreenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-screen px-20 py-12 flex flex-col gap-9 items-center justify-center">
      {/* Background Pattern - faded */}
      <div className="absolute inset-0 opacity-[0.56] pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-[119px] -translate-x-1/2 w-[731px] h-[1050px]">
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
        className="text-[64px] font-medium text-prove-main text-center h-[71px] flex items-center justify-center relative z-10"
      >
        {t.testimonials.title}
      </motion.h2>

      {/* Video Reviews and Platform Reviews Container */}
      <div className="flex items-center justify-between w-full relative z-10">
        {/* Left - Video Reviews Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="p-[10px]">
            <p className="text-[48px] font-medium text-prove-primary leading-[88px]">
              {t.testimonials.videoReviews.title1}
            </p>
            <p className="text-[48px] font-medium text-prove-primary leading-[88px]">
              {t.testimonials.videoReviews.title2}
            </p>
          </div>
        </motion.div>

        {/* Right - Video Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-12 items-center"
        >
          <VideoCard
            thumbnailSrc="/images/testimonials/customer-video-1.png"
            customerName={t.testimonials.customer1.name}
            customerTitle={t.testimonials.customer1.title}
          />
          <VideoCard
            thumbnailSrc="/images/testimonials/customer-video-2.png"
            customerName={t.testimonials.customer2.name}
            customerTitle={t.testimonials.customer2.title}
          />
        </motion.div>
      </div>

      {/* Platform Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col gap-9 items-end w-full relative z-10"
      >
        <div className="flex gap-[10px] items-center w-full">
          <p className="text-[48px] font-medium text-prove-primary leading-[88px] whitespace-nowrap">
            {t.testimonials.platformReviews.title}
          </p>
        </div>

        {/* Review Cards Carousel */}
        <div className="flex gap-3 items-center w-full overflow-x-auto scrollbar-hide">
          {reviewScreenshots.map((src, index) => (
            <ReviewCard
              key={index}
              imageSrc={src}
              className={index === reviewScreenshots.length - 1 ? 'opacity-56' : ''}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-[10px] items-start">
          <Arrow direction="left" onClick={handlePreviousReview} />
          <Arrow direction="right" onClick={handleNextReview} />
        </div>
      </motion.div>
    </section>
  );
}

