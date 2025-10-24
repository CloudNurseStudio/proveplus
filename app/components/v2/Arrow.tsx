'use client';

import Image from 'next/image';

interface ArrowProps {
  direction?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export function Arrow({ direction = 'right', onClick, className = '' }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-[38px] h-[38px] flex items-center justify-center transition-transform hover:scale-110 ${className}`}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Image
        src="/images/arrow-circle.svg"
        alt=""
        width={38}
        height={38}
        className={`absolute inset-0 ${direction === 'left' ? 'rotate-180' : ''}`}
      />
      <Image
        src="/images/arrow-vector.svg"
        alt=""
        width={18}
        height={16}
        className={`relative z-10 ${direction === 'left' ? 'rotate-180' : ''}`}
      />
    </button>
  );
}

