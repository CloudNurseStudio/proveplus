'use client';

import { useLocale } from '../../LocaleProvider';
import {
  type IngredientCategory,
  type ProductIngredients,
  localise,
} from './ingredientData';

/**
 * Every design variant receives exactly this. Keeping the contract tiny means
 * variants are interchangeable and trivial to add or remove.
 */
export interface IngredientVariantProps {
  data: ProductIngredients;
}

/** Convenience hook for the ingredient-section label dictionary. */
export function useIngredientLabels() {
  const { locale, t } = useLocale();
  return { locale, labels: t.productPage.ingredients };
}

export function categoryLabel(
  category: IngredientCategory,
  labels: ReturnType<typeof useIngredientLabels>['labels'],
): string {
  return labels.categories[category];
}

/**
 * Perceptual (square-root) bar width so trace strains measured in ten-thousandths
 * of a gram stay visible next to the dominant fibre. Returns a percentage.
 */
export function barWidth(amountG: number, maxG: number): number {
  if (maxG <= 0) return 0;
  const pct = Math.sqrt(amountG / maxG) * 100;
  return Math.max(8, Math.round(pct));
}

/** Additives + FDA registration — identical across every variant. */
export function IngredientFooter({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const { accent } = data;

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 items-start pt-1">
      <div className="flex-1 min-w-[200px]">
        <p className="text-[16px] font-medium text-[#1d2939] mb-2.5 text-outfit">
          {labels.additivesLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.additives.map((additive, i) => (
            <span
              key={i}
              className="text-[13px] text-[#1d2939] bg-white border border-[#d0d5dd] rounded-full px-3.5 py-1.5 text-outfit"
            >
              {localise(additive, locale)}
            </span>
          ))}
        </div>
      </div>

      <div className="min-w-[200px]">
        <p className="text-[16px] font-medium text-[#1d2939] mb-2.5 text-outfit">
          {labels.fdaLabel}
        </p>
        <span
          className="inline-flex items-center gap-2.5 text-white rounded-2xl px-4 py-3 text-outfit"
          style={{ backgroundColor: accent.deep }}
        >
          <span className="text-[11px] uppercase tracking-[0.12em] opacity-80">อย. / FDA No.</span>
          <span className="text-[18px] font-bold tracking-[0.04em]">{data.fdaNumber}</span>
        </span>
      </div>
    </div>
  );
}
