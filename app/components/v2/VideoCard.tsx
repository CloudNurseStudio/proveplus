'use client';

import Image from 'next/image';
import { useState } from 'react';

interface VideoCardProps {
  thumbnailSrc: string;
  customerName: string;
  customerTitle: string;
  className?: string;
}

export function VideoCard({
  thumbnailSrc,
  customerName,
  customerTitle,
  className = '',
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`relative w-[288px] h-[450px] rounded-3xl overflow-hidden ${className}`}
    >
      <Image
        src={thumbnailSrc}
        alt={customerName}
        fill
        className="object-cover"
      />
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[223px] bg-gradient-to-t from-black/80 to-transparent" />
      
      {/* Customer details and play button */}
      <div className="absolute bottom-0 left-0 right-0 px-[30px] py-[30px] flex items-start gap-3.5 z-10">
        <div className="flex-1">
          <p className="font-semibold text-lg text-white mb-1 tracking-tight">
            {customerName}
          </p>
          <p className="text-sm text-zinc-300">
            {customerTitle}
          </p>
        </div>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-lg border border-white flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <Image
            src={isPlaying ? '/images/pause-icon.svg' : '/images/play-icon.svg'}
            alt={isPlaying ? 'Pause' : 'Play'}
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}

