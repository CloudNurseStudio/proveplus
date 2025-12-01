'use client';

import Image from 'next/image';
import { Star, StarHalf, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '../LocaleProvider';

interface ProductDetailsProps {
  productName: string;
  fullName: string;
  rating: number;
  reviewCount: number;
  onOrderClick?: () => void;
}

export function ProductDetails({
  productName,
  fullName,
  rating,
  reviewCount,
  onOrderClick,
}: ProductDetailsProps) {
  const { t } = useLocale();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-6 h-6 fill-[#FDB022] text-[#FDB022]" />
      );
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-6 h-6 fill-[#FDB022] text-[#FDB022]" />);
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 sm:gap-10"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold text-[#1d2939] leading-[1.2]">
          {fullName}
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">{renderStars()}</div>
          <span className="text-[18px] font-medium text-[#1d2939]">
            {reviewCount} {t.productPage.reviewsLabel}
          </span>
        </div>

        <div className="h-px bg-[#d0d5dd]" />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOrderClick}
          className="bg-[#5d6fcd] text-white px-6 py-3 rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 text-[clamp(1.25rem,4vw,1.625rem)] font-semibold hover:bg-[#4a5bb5] transition-colors w-full"
        >
          {t.productPage.orderButton}
          <ShoppingCart className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
}

