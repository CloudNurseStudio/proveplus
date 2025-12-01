'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { useModalService } from './ModalServiceProvider';

interface VideoCardProps {
  thumbnailSrc: string;
  customerName: string;
  customerTitle: string;
  videoUrl?: string;
  description?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  className?: string;
}

export function VideoCard({
  thumbnailSrc,
  customerName,
  customerTitle,
  videoUrl,
  description,
  ctaLabel,
  ctaUrl,
  className = '',
}: VideoCardProps) {
  const { openVideoModal } = useModalService();

  const handleSelect = useCallback(() => {
    openVideoModal({
      customerName,
      customerTitle,
      thumbnailSrc,
      videoUrl,
      description,
      ctaLabel,
      ctaUrl,
    });
  }, [
    customerName,
    customerTitle,
    thumbnailSrc,
    videoUrl,
    description,
    ctaLabel,
    ctaUrl,
    openVideoModal,
  ]);

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={`relative w-[240px] sm:w-[260px] md:w-[288px] h-[380px] sm:h-[415px] md:h-[450px] overflow-hidden rounded-2xl sm:rounded-3xl text-left transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white flex-shrink-0 ${className}`}
      aria-label={`Watch testimonial from ${customerName}`}
    >
      <Image
        src={thumbnailSrc}
        alt={customerName}
        fill
        className="object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[180px] sm:h-[200px] md:h-[223px] bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-start gap-2 sm:gap-3 md:gap-3.5 px-5 sm:px-6 md:px-[30px] py-5 sm:py-6 md:py-[30px]">
        <div className="flex-1">
          <p className="mb-1 text-base sm:text-lg font-semibold tracking-tight text-white">
            {customerName}
          </p>
          <p className="text-xs sm:text-sm text-zinc-300">{customerTitle}</p>
        </div>

        <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg border border-white bg-white/10">
          <Image
            src="/images/play-icon.svg"
            alt="Play"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
        </div>
      </div>
    </button>
  );
}

