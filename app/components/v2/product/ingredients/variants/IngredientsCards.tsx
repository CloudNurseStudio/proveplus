'use client';

import { groupByCategory, localise } from '../ingredientData';
import {
  CATEGORY_COLOR,
  CategoryBadge,
  IngredientFooter,
  IngredientVariantProps,
  useIngredientLabels,
} from '../shared';

export function IngredientsCards({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const groups = groupByCategory(data.ingredients);

  return (
    <div className="flex flex-col gap-6">
      {groups.map(({ category, items }) => (
        <div key={category} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#1d2939]">
              {labels.categories[category]}
            </h4>
            {category === 'probiotic' && (
              <span className="text-[11px] text-[#667085] bg-white border border-[#d0d5dd] rounded-full px-2.5 py-0.5">
                {items.length} {labels.liveStrains}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {items.map((ing, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] p-4 flex flex-col gap-2.5 border border-[#eef1f5] shadow-[0_2px_8px_rgba(69,84,164,0.05)] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(69,84,164,0.12)]"
              >
                <CategoryBadge category={category} />
                <span className="text-[13px] font-semibold leading-tight text-[#1d2939]">
                  {localise(ing.name, locale)}
                  {ing.detail && (
                    <span className="font-normal text-[#667085]"> {localise(ing.detail, locale)}</span>
                  )}
                </span>
                <span className="text-[15px] font-bold" style={{ color: CATEGORY_COLOR[category] }}>
                  {ing.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <IngredientFooter data={data} />
    </div>
  );
}
