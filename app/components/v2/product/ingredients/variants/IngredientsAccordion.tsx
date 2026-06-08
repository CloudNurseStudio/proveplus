'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { localise, type IngredientCategory } from '../ingredientData';
import { IngredientFooter, IngredientVariantProps, useIngredientLabels } from '../shared';

const CATEGORY_TAG: Record<IngredientCategory, { bg: string; fg: string }> = {
  probiotic: { bg: '#e9edff', fg: '#4554a4' },
  prebiotic: { bg: '#fdf3d6', fg: '#9a7212' },
  vitamin: { bg: '#ffe9df', fg: '#c9522a' },
  immune: { bg: '#e3f0df', fg: '#44793f' },
};

export function IngredientsAccordion({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const { accent } = data;
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-[12px] text-[#667085] italic text-outfit">
        {labels.perServing} · {labels.tapToExpand}
      </p>

      <div className="flex flex-col gap-2">
        {data.ingredients.map((ing, i) => {
          const isOpen = open === i;
          const tag = CATEGORY_TAG[ing.category];
          return (
            <div
              key={i}
              className={`bg-white border border-[#eef1f5] rounded-2xl overflow-hidden transition-shadow ${
                isOpen ? 'shadow-[0_8px_22px_rgba(69,84,164,0.1)]' : ''
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left text-outfit"
              >
                <span
                  className="text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: tag.bg, color: tag.fg }}
                >
                  {labels.categories[ing.category]}
                </span>
                <span className="flex-1 text-[15px] font-semibold text-[#1d2939]">
                  {localise(ing.name, locale)}
                  {ing.detail && (
                    <span className="font-normal text-[#667085]"> {localise(ing.detail, locale)}</span>
                  )}
                </span>
                <span className="text-[14px] font-bold" style={{ color: accent.deep }}>
                  {ing.amount}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#667085] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && ing.blurb && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[13.5px] leading-relaxed text-[#667085] px-4 pb-4 text-outfit">
                      {localise(ing.blurb, locale)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <IngredientFooter data={data} />
    </div>
  );
}
