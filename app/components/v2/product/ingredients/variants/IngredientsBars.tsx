'use client';

import { groupByCategory, localise, type IngredientCategory } from '../ingredientData';
import {
  IngredientFooter,
  IngredientVariantProps,
  barWidth,
  useIngredientLabels,
} from '../shared';

const CATEGORY_BAR: Record<IngredientCategory, string> = {
  probiotic: 'linear-gradient(90deg, #5d6fcd, #8fa3ff)',
  prebiotic: 'linear-gradient(90deg, #f2c14e, #f6d98a)',
  vitamin: 'linear-gradient(90deg, #f2784b, #f9a784)',
  immune: 'linear-gradient(90deg, #5a9e57, #8fce8b)',
};
const CATEGORY_DOT: Record<IngredientCategory, string> = {
  probiotic: '#5d6fcd',
  prebiotic: '#f2c14e',
  vitamin: '#f2784b',
  immune: '#5a9e57',
};

export function IngredientsBars({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const { accent } = data;
  const maxG = Math.max(...data.ingredients.map((i) => i.amountG));
  const groups = groupByCategory(data.ingredients);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-[12px] text-[#667085] italic">{labels.scaleNote}</p>

      {groups.map(({ category, items }) => (
        <div key={category}>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: CATEGORY_DOT[category] }}
            />
            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#1d2939]">
              {labels.categories[category]}
            </h4>
            {category === 'probiotic' && (
              <span className="ml-auto text-[12px] text-[#667085]">
                {items.length} {labels.liveStrains}
              </span>
            )}
          </div>

          {items.map((ing, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-baseline mb-3.5">
              <span className="text-[14.5px] font-medium text-[#1d2939]">
                {localise(ing.name, locale)}
                {ing.detail && (
                  <span className="text-[#667085] font-normal"> ({localise(ing.detail, locale)})</span>
                )}
              </span>
              <span
                className="text-[14px] font-bold whitespace-nowrap"
                style={{ color: accent.deep }}
              >
                {ing.amount}
              </span>
              <div className="col-span-2 h-[9px] rounded-full bg-[#edf0f6] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${barWidth(ing.amountG, maxG)}%`, background: CATEGORY_BAR[category] }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      <IngredientFooter data={data} />
    </div>
  );
}
