'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '../LocaleProvider';

interface ProductTabsProps {
  description: string;
  flavor: string;
  howToUse: string;
  ingredientIcons?: string[];
}

export function ProductTabs({
  description,
  flavor,
  howToUse,
  ingredientIcons = [],
}: ProductTabsProps) {
  const { t } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6 w-full"
    >
      <p className="text-[16px] leading-[24px] text-[#1d2939]">{description}</p>

      {ingredientIcons.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {ingredientIcons.map((icon, index) => (
            <div key={index} className="relative w-[77px] h-[77px] rounded-full overflow-hidden">
              <Image src={icon} alt={`Ingredient ${index + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[18px] font-medium leading-[28px] text-[#1d2939]">
            {t.productPage.flavorLabel}
          </p>
          <p className="text-[18px] leading-[28px] text-[#667085]">{flavor}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[18px] font-medium leading-[28px] text-[#1d2939]">
          {t.productPage.howToUseLabel}
        </p>
        <p className="text-[16px] leading-[24px] text-[#667085]">{howToUse}</p>
      </div>
    </motion.div>
  );
}
