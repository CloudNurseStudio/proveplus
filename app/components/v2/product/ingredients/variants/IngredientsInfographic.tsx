'use client';

import { localise, type Ingredient } from '../ingredientData';
import { IngredientFooter, IngredientVariantProps, useIngredientLabels } from '../shared';

export function IngredientsInfographic({ data }: IngredientVariantProps) {
  const { locale, labels } = useIngredientLabels();
  const { accent } = data;

  const hero = data.ingredients.filter((i) => i.category === 'immune');
  const probiotics = data.ingredients.filter((i) => i.category === 'probiotic');
  const rightColumn = data.ingredients.filter(
    (i) => i.category === 'prebiotic' || i.category === 'vitamin',
  );

  const Row = ({ ing }: { ing: Ingredient }) => (
    <div className="flex justify-between items-baseline gap-2.5 py-2.5 border-b border-dashed border-[#e2e6ee] last:border-b-0 text-outfit">
      <span className="text-[14px] font-medium text-[#1d2939]">
        {localise(ing.name, locale)}
        {ing.detail && <span className="text-[#667085] font-normal"> {localise(ing.detail, locale)}</span>}
      </span>
      <span className="text-[14px] font-bold whitespace-nowrap" style={{ color: accent.deep }}>
        {ing.amount}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col gap-5">
      <div
        className="rounded-[24px] p-5 sm:p-6 border border-white"
        style={{ background: `linear-gradient(135deg, ${accent.soft} 0%, #ffffff 100%)` }}
      >
        <div className="text-center mb-4">
          <h3 className="text-[22px] font-bold" style={{ color: accent.deep }}>
            {labels.whatsInside}
          </h3>
          <p className="text-[13px] text-[#667085] mt-0.5 text-outfit">{labels.whatsInsideSub}</p>
        </div>

        {hero.map((ing, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 bg-white rounded-[18px] p-4 mb-4 border border-[#eef1f5]"
          >
            <span
              className="w-12 h-12 rounded-[14px] grid place-items-center text-[26px]"
              style={{ backgroundColor: accent.soft }}
            >
              🛡️
            </span>
            <span className="text-outfit">
              <span className="block text-[15px] font-bold text-[#1d2939]">
                {localise(ing.name, locale)}
                {ing.detail && <span> {localise(ing.detail, locale)}</span>}
              </span>
              <span className="block text-[12.5px] text-[#667085]">{labels.heroIngredient}</span>
            </span>
            <span className="ml-auto text-[20px] font-bold" style={{ color: accent.deep }}>
              {ing.amount}
            </span>
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {probiotics.length > 0 && (
            <div>
              <h4 className="inline-flex items-center gap-1.5 text-white text-[12px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-3 text-outfit bg-[#5d6fcd]">
                🦠 {labels.categories.probiotic}
              </h4>
              {probiotics.map((ing, i) => (
                <Row key={i} ing={ing} />
              ))}
            </div>
          )}
          {rightColumn.length > 0 && (
            <div>
              <h4 className="inline-flex items-center gap-1.5 text-white text-[12px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-3 text-outfit bg-[#d9a521]">
                ✨ {labels.categories.prebiotic} / {labels.categories.vitamin}
              </h4>
              {rightColumn.map((ing, i) => (
                <Row key={i} ing={ing} />
              ))}
            </div>
          )}
        </div>
      </div>

      <IngredientFooter data={data} />
    </div>
  );
}
