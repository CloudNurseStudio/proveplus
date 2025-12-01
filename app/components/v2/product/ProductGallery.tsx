'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-white/50"
      >
        <Image
          src={images[selectedIndex]}
          alt={`${productName} - view ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 514px"
          priority
        />
      </motion.div>

      <div className="flex gap-4 overflow-x-auto p-1 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative flex-shrink-0 w-[100px] h-[100px] rounded-[24px] overflow-hidden transition-all ${
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
              sizes="100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

