'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_INGREDIENTS, type ProductId } from './ingredientData';
import { useIngredientLabels } from './shared';
import { INGREDIENT_VARIANTS } from './variants';

interface KeyIngredientsProps {
  product: ProductId;
}

/**
 * Renders the active ingredient design for a product, plus a toggle to switch
 * between the candidate designs during review. When the variant registry holds
 * a single entry the toggle disappears and this becomes the final, plain
 * single-design section — no further code changes needed.
 */
export function KeyIngredients({ product }: KeyIngredientsProps) {
  const { labels } = useIngredientLabels();
  const data = PRODUCT_INGREDIENTS[product];
  const [activeId, setActiveId] = useState(INGREDIENT_VARIANTS[0].id);

  const active = INGREDIENT_VARIANTS.find((v) => v.id === activeId) ?? INGREDIENT_VARIANTS[0];
  const ActiveComponent = active.Component;
  const showToggle = INGREDIENT_VARIANTS.length > 1;

  return (
    <div className="flex flex-col gap-5">
      {showToggle && (
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#667085] text-outfit">
            {labels.previewLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {INGREDIENT_VARIANTS.map((v) => {
              const isActive = v.id === active.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveId(v.id)}
                  className="text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all text-outfit"
                  style={
                    isActive
                      ? { backgroundColor: data.accent.deep, color: '#fff', borderColor: data.accent.deep }
                      : { backgroundColor: '#fff', color: '#1d2939', borderColor: '#d0d5dd' }
                  }
                >
                  {labels.variants[v.id]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <ActiveComponent data={data} />
      </motion.div>
    </div>
  );
}
