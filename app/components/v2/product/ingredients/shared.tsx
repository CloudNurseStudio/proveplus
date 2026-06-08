'use client';

import { Citrus, Dna, ShieldCheck, Wheat, type LucideIcon } from 'lucide-react';
import { useLocale } from '../../LocaleProvider';
import {
  type IngredientCategory,
  type ProductIngredients,
  localise,
} from './ingredientData';

/** Line icon per category — echoes the homepage benefit badges. */
export const CATEGORY_ICON: Record<IngredientCategory, LucideIcon> = {
  probiotic: Dna,
  prebiotic: Wheat,
  vitamin: Citrus,
  immune: ShieldCheck,
};

/** Accent colour for the category icon / amount text. */
export const CATEGORY_COLOR: Record<IngredientCategory, string> = {
  probiotic: '#5d6fcd',
  prebiotic: '#c79318',
  vitamin: '#e2683c',
  immune: '#4f8c4c',
};

/**
 * Circular gradient icon badge in the brand style (soft lavender→pink fill,
 * thin ring), as used by the homepage "prove+ ช่วยเรื่อง" section.
 */
export function CategoryBadge({
  category,
  size = 36,
}: {
  category: IngredientCategory;
  size?: number;
}) {
  const Icon = CATEGORY_ICON[category];
  return (
    <span
      className="rounded-full grid place-items-center bg-gradient-to-br from-[#eaeefe] to-[#f7ebf2] ring-1 ring-[#cdd3f2] shrink-0"
      style={{ width: size, height: size }}
    >
      <Icon style={{ width: size * 0.5, height: size * 0.5, color: CATEGORY_COLOR[category] }} strokeWidth={2} />
    </span>
  );
}

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

/** Additives + FDA registration — identical across every variant. */
export function IngredientFooter({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const { accent } = data;

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 items-start pt-1">
      <div className="flex-1 min-w-[200px]">
        <p className="text-[16px] font-medium text-[#1d2939] mb-2.5">
          {labels.additivesLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.additives.map((additive, i) => (
            <span
              key={i}
              className="text-[13px] text-[#1d2939] bg-white border border-[#d0d5dd] rounded-full px-3.5 py-1.5"
            >
              {localise(additive, locale)}
            </span>
          ))}
        </div>
      </div>

      <div className="min-w-[200px]">
        <p className="text-[16px] font-medium text-[#1d2939] mb-2.5">
          {labels.fdaLabel}
        </p>
        <span
          className="inline-flex items-center gap-2.5 text-white rounded-2xl px-4 py-3"
          style={{ backgroundColor: accent.deep }}
        >
          <span className="text-[11px] uppercase tracking-[0.12em] opacity-80">อย. / FDA No.</span>
          <span className="text-[18px] font-bold tracking-[0.04em]">{data.fdaNumber}</span>
        </span>
      </div>
    </div>
  );
}
