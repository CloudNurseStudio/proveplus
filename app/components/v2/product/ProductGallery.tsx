'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductMainImageProps {
  image: string;
  productName: string;
}

export function ProductMainImage({ image, productName }: ProductMainImageProps) {
  return (
    <motion.div
      key={image}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[60vh] rounded-[24px] overflow-hidden bg-white/50 flex items-center justify-center"
    >
      <img
        src={image}
        alt={productName}
        className="w-auto h-auto max-w-full max-h-full block object-contain rounded-[24px]"
      />
    </motion.div>
  );
}

interface ProductThumbnailGridProps {
  images: string[];
  productName: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function ProductThumbnailGrid({
  images,
  productName,
  selectedIndex,
  onSelect,
}: ProductThumbnailGridProps) {
  return (
    <div className="flex flex-wrap gap-3 w-full">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`relative aspect-square w-[calc(20%-0.6rem)] min-w-[80px] max-w-[120px] rounded-[18px] overflow-hidden transition-all ${
            index === selectedIndex
              ? 'ring-[3px] ring-[#5d6fcd] scale-105'
              : 'opacity-70 hover:opacity-100'
          }`}
        >
          <Image
            src={image}
            alt={`${productName} thumbnail ${index + 1}`}
            fill
            className="object-cover"
            sizes="120px"
          />
        </button>
      ))}
    </div>
  );
}
