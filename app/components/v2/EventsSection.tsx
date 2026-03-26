'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from './LocaleProvider';
import { Arrow } from './Arrow';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/app/components/ui/carousel';
import { blogPosts, type BlogPost } from '@/app/lib/blog-data';

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
  const { t, locale } = useLocale();
  const blogT = (t as any).blog;

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
          {blogPosts.map((post) => (
            <CarouselItem key={post.slug} className="pl-4 sm:pl-6 basis-[280px] sm:basis-[320px]">
              <BlogPostCard post={post} locale={locale} readLabel={blogT?.readArticle ?? 'Read Article'} />
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

function BlogPostCard({ post, locale, readLabel }: { post: BlogPost; locale: string; readLabel: string }) {
  const title = locale === 'th' && post.title_th ? post.title_th : post.title;
  const excerpt = locale === 'th' && post.excerpt_th ? post.excerpt_th : post.excerpt;
  const date = locale === 'th' && post.date_th ? post.date_th : post.date;

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div className="bg-white flex w-full flex-shrink-0 cursor-pointer flex-col gap-[12px] items-center overflow-clip p-[20px] rounded-[16px] h-full hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-square relative rounded-[16px] shrink-0 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={title}
            fill
            sizes="320px"
            className="object-cover rounded-[16px] transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-bold text-white bg-[#5d6fcd] rounded-full shadow-sm">
              {post.category}
            </span>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-[8px] items-start w-full text-[#333333]">
          <p className="text-xs text-gray-400 font-medium">{date}</p>
          <p className="font-medium leading-[1.4] text-[20px] w-full line-clamp-2">
            {title}
          </p>
          <div className="font-normal leading-[1.4] opacity-80 text-[12px] tracking-[0.18px] w-full line-clamp-2">
            {excerpt}
          </div>
          <span className="text-sm font-semibold text-[#5d6fcd] mt-1">
            {readLabel} →
          </span>
        </div>
      </div>
    </Link>
  );
}

