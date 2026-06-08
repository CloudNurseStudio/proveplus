'use client';

import { localise } from '../ingredientData';
import { IngredientFooter, IngredientVariantProps, useIngredientLabels } from '../shared';

export function IngredientsTable({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const { accent } = data;

  return (
    <div className="flex flex-col gap-5">
      <p className="text-[14px] text-[#667085] text-outfit">{labels.perServing}</p>

      <div className="overflow-hidden rounded-[18px] bg-white border border-[#eef1f5]">
        <table className="w-full border-collapse text-outfit">
          <thead>
            <tr>
              <th
                className="text-left text-white text-[13px] font-semibold tracking-[0.04em] px-4 py-3.5"
                style={{ backgroundColor: accent.deep }}
              >
                {labels.tableHeadIngredient}
              </th>
              <th
                className="text-right text-white text-[13px] font-semibold tracking-[0.04em] px-4 py-3.5"
                style={{ backgroundColor: accent.deep }}
              >
                {labels.tableHeadAmount}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.ingredients.map((ing, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-[#f8faff]' : ''}>
                <td className="px-4 py-3 text-[14.5px] text-[#1d2939] border-b border-[#eef1f5]">
                  {localise(ing.name, locale)}
                  {(ing.detail || ing.category) && (
                    <span className="block text-[12px] text-[#667085] mt-0.5">
                      {[ing.detail ? localise(ing.detail, locale) : null, labels.categories[ing.category]]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  )}
                </td>
                <td
                  className="px-4 py-3 text-[14.5px] font-semibold text-right whitespace-nowrap border-b border-[#eef1f5]"
                  style={{ color: accent.deep }}
                >
                  {ing.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <IngredientFooter data={data} />
    </div>
  );
}
