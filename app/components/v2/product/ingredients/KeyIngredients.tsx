'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useLocale } from '../../LocaleProvider';
import { PRODUCT_INGREDIENTS, type ProductId } from './ingredientData';
import { useIngredientLabels } from './shared';
import { INGREDIENT_VARIANTS } from './variants';

interface KeyIngredientsProps {
  product: ProductId;
}

/**
 * Renders the Key Ingredients section upfront on the product page, plus a
 * floating toggle (review affordance) to switch between candidate designs.
 *
 * When the variant registry holds a single entry the floating toggle
 * disappears and this becomes the final, plain single-design section — no
 * further code changes needed.
 */
export function KeyIngredients({ product }: KeyIngredientsProps) {
  const { t } = useLocale();
  const { labels } = useIngredientLabels();
  const data = PRODUCT_INGREDIENTS[product];
  const [activeId, setActiveId] = useState(INGREDIENT_VARIANTS[0].id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const active = INGREDIENT_VARIANTS.find((v) => v.id === activeId) ?? INGREDIENT_VARIANTS[0];
  const ActiveComponent = active.Component;
  const showToggle = INGREDIENT_VARIANTS.length > 1;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] font-semibold text-[#4554a4]">
        {t.productPage.tabs.ingredients}
      </h2>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <ActiveComponent data={data} />
      </motion.div>

      {showToggle &&
        mounted &&
        createPortal(
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] max-w-[calc(100vw-1rem)]">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#e4e7ec] rounded-full shadow-[0_8px_30px_rgba(16,24,40,0.18)] px-2 py-2">
              <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-[0.1em] text-[#667085] pl-2 pr-1 whitespace-nowrap">
                {labels.previewLabel}
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                {INGREDIENT_VARIANTS.map((v) => {
                  const isActive = v.id === active.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setActiveId(v.id)}
                      className="text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap"
                      style={
                        isActive
                          ? { backgroundColor: data.accent.deep, color: '#fff' }
                          : { backgroundColor: 'transparent', color: '#1d2939' }
                      }
                    >
                      {labels.variants[v.id]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
