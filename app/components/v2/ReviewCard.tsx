'use client';

import Image from 'next/image';

interface ReviewCardProps {
  imageSrc: string;
  className?: string;
}

export function ReviewCard({ imageSrc, className = '' }: ReviewCardProps) {
  return (
    <div
      className={`bg-white p-3 rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] flex-shrink-0 ${className}`}
    >
      <div className="relative w-[328px] h-[185px] rounded-3xl overflow-hidden">
        <Image
          src={imageSrc}
          alt="Customer review"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

