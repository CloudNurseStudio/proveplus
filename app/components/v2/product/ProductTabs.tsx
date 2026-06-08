'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '../LocaleProvider';
import { KeyIngredients } from './ingredients/KeyIngredients';
import type { ProductId } from './ingredients/ingredientData';

interface ProductTabsProps {
  productId: ProductId;
  description: string;
  flavor: string;
  howToUse: string;
  ingredientIcons?: string[];
}

export function ProductTabs({
  productId,
  description,
  flavor,
  howToUse,
  ingredientIcons = [],
}: ProductTabsProps) {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients'>('details');

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="bg-[#eaecf0] p-1 rounded-[60px] flex gap-3">
        <button
          onClick={() => setActiveTab('details')}
          className={`flex-1 px-3 py-1 rounded-[60px] text-[16px] font-medium leading-[28px] transition-all ${
            activeTab === 'details'
              ? 'bg-white text-[#1d2939] shadow-[0px_0px_3px_0px_rgba(16,24,40,0.1),0px_2px_5px_0px_rgba(16,24,40,0.06)]'
              : 'bg-transparent text-[#1d2939]'
          }`}
        >
          {t.productPage.tabs.details}
        </button>
        <button
          onClick={() => setActiveTab('ingredients')}
          className={`flex-1 px-3 py-1 rounded-[60px] text-[16px] font-medium leading-[28px] transition-all ${
            activeTab === 'ingredients'
              ? 'bg-white text-[#1d2939] shadow-[0px_0px_3px_0px_rgba(16,24,40,0.1),0px_2px_5px_0px_rgba(16,24,40,0.06)]'
              : 'bg-transparent text-[#1d2939]'
          }`}
        >
          {t.productPage.tabs.ingredients}
        </button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-6"
      >
        {activeTab === 'details' && (
          <>
            <p className="text-[16px] leading-[24px] text-[#1d2939]">{description}</p>

            {ingredientIcons.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {ingredientIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="relative w-[77px] h-[77px] rounded-full overflow-hidden"
                  >
                    <Image
                      src={icon}
                      alt={`Ingredient ${index + 1}`}
                      fill
                      className="object-contain"
                    />
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
          </>
        )}

        {activeTab === 'ingredients' && <KeyIngredients product={productId} />}
      </motion.div>
    </div>
  );
}

