'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  subtitle: string;
  flavor: string;
  size: string;
  image: string;
  href: string;
  isSelected?: boolean;
  bgColor: string;
}

export function ProductCard({
  name,
  subtitle,
  flavor,
  size,
  image,
  href,
  isSelected = false,
  bgColor,
}: ProductCardProps) {
  const CardWrapper = isSelected ? 'div' : Link;
  const wrapperProps = isSelected ? {} : { href };

  return (
    <CardWrapper
      {...wrapperProps}
      className="flex flex-col items-start w-full sm:w-[234px] rounded-[24px] transition-transform hover:scale-105"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col w-full rounded-[24px] ${
          isSelected ? 'border-[3px] border-[#5d6fcd]' : ''
        }`}
      >
        <div
          className="flex flex-col items-center p-2 rounded-t-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          style={{ backgroundColor: bgColor }}
        >
          <div className="relative w-full aspect-square max-w-[208px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 234px"
            />
          </div>
        </div>

        <div className="bg-[#f5f5f5] flex flex-col items-center p-3 rounded-b-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <div className="flex flex-col gap-1 w-full">
            <p className="font-semibold text-[18px] text-[#4456a6] leading-[1.5]">
              {name}
            </p>
            <div className="flex items-center justify-between text-[14px] text-[#616161] font-medium leading-[1.5]">
              <span>{flavor}</span>
              <span>{size}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </CardWrapper>
  );
}

