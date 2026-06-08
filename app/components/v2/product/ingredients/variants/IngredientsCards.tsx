'use client';

import { groupByCategory, localise, type IngredientCategory } from '../ingredientData';
import { IngredientFooter, IngredientVariantProps, useIngredientLabels } from '../shared';

const CATEGORY_ICON: Record<IngredientCategory, string> = {
  probiotic: '🦠',
  prebiotic: '🌾',
  vitamin: '🍋',
  immune: '🛡️',
};
const CATEGORY_CHIP: Record<IngredientCategory, { bg: string; fg: string }> = {
  probiotic: { bg: '#e9edff', fg: '#5d6fcd' },
  prebiotic: { bg: '#fdf3d6', fg: '#c79318' },
  vitamin: { bg: '#ffe9df', fg: '#e2683c' },
  immune: { bg: '#e3f0df', fg: '#4f8c4c' },
};

export function IngredientsCards({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const groups = groupByCategory(data.ingredients);

  return (
    <div className="flex flex-col gap-6">
      {groups.map(({ category, items }) => {
        const chip = CATEGORY_CHIP[category];
        return (
          <div key={category} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#1d2939] text-outfit">
                {labels.categories[category]}
              </h4>
              {category === 'probiotic' && (
                <span className="text-[11px] text-[#667085] bg-white border border-[#d0d5dd] rounded-full px-2.5 py-0.5 text-outfit">
                  {items.length} {labels.liveStrains}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {items.map((ing, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[18px] p-3.5 flex flex-col gap-2 border border-[#eef1f5] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(69,84,164,0.12)]"
                >
                  <span
                    className="w-9 h-9 rounded-xl grid place-items-center text-[18px]"
                    style={{ backgroundColor: chip.bg }}
                  >
                    {CATEGORY_ICON[category]}
                  </span>
                  <span className="text-[13px] font-semibold leading-tight text-[#1d2939] text-outfit">
                    {localise(ing.name, locale)}
                    {ing.detail && (
                      <span className="font-normal text-[#667085]"> {localise(ing.detail, locale)}</span>
                    )}
                  </span>
                  <span className="text-[15px] font-bold text-outfit" style={{ color: chip.fg }}>
                    {ing.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <IngredientFooter data={data} />
    </div>
  );
}
