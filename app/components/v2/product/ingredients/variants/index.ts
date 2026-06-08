import type { ComponentType } from 'react';
import type { IngredientVariantProps } from '../shared';
import { IngredientsTable } from './IngredientsTable';

/** Keys into `t.productPage.ingredients.variants` for the toggle labels. */
export type VariantId = 'table';

export interface IngredientVariant {
  id: VariantId;
  Component: ComponentType<IngredientVariantProps>;
}

/**
 * The registry that drives the rendered design. The "spec-sheet table" was
 * chosen as the final design after the variant review; the others have been
 * removed. To add candidates again, append entries here and re-introduce the
 * toggle in <KeyIngredients>.
 */
export const INGREDIENT_VARIANTS: IngredientVariant[] = [
  { id: 'table', Component: IngredientsTable },
];
