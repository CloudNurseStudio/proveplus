'use client';

import { motion } from 'framer-motion';
import { useLocale } from '../../LocaleProvider';
import { PRODUCT_INGREDIENTS, type ProductId } from './ingredientData';
import { INGREDIENT_VARIANTS } from './variants';

interface KeyIngredientsProps {
  product: ProductId;
}

/**
 * The Key Ingredients section, rendered upfront on the product page. The design
 * is driven by the variant registry (`variants/index.ts`); the chosen final
 * design is the spec-sheet table.
 */
export function KeyIngredients({ product }: KeyIngredientsProps) {
  const { t } = useLocale();
  const data = PRODUCT_INGREDIENTS[product];
  const Design = INGREDIENT_VARIANTS[0].Component;

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] font-semibold text-[#4554a4]">
        {t.productPage.tabs.ingredients}
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >
        <Design data={data} />
      </motion.div>
    </div>
  );
}
