'use client';

import { Star } from 'lucide-react';
import { cn } from '@/app/lib/utils';

type SocialReviewCardProps = {
  review: string;
  author: string;
  platform: string;
  rating?: number;
  dimmed?: boolean;
  className?: string;
};

export function SocialReviewCard({
  review,
  author,
  platform,
  rating = 5,
  dimmed,
  className,
}: SocialReviewCardProps) {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < safeRating;
    return (
      <Star
        key={index}
        className={cn(
          'size-4 sm:size-5',
          filled ? 'text-[#ffd740] fill-[#ffd740]' : 'text-[#e0e0e0]',
        )}
        aria-hidden="true"
      />
    );
  });

  return (
    <article
      aria-label={`Review by ${author} on ${platform}`}
      className={cn(
        'flex w-[300px] sm:w-[320px] flex-col gap-3 rounded-[12px]',
        'bg-white/95 p-4 shadow-[0_16px_48px_rgba(23,15,73,0.08)]',
        'border border-white/60 backdrop-blur',
        dimmed && 'opacity-50',
        className,
      )}
    >
      <div
        className="flex items-center gap-1 text-[#ffd740]"
        aria-label={`${safeRating} star rating`}
      >
        {stars}
      </div>

      <p className="text-base leading-6 text-[#514f6e]">{review}</p>

      <div className="flex flex-col">
        <p className="text-lg font-semibold text-[#170f49]">{author}</p>
        <p className="text-sm text-[#6f6c90]">{platform}</p>
      </div>
    </article>
  );
}


