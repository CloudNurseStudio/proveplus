import type { ComponentType } from 'react';
import type { IngredientVariantProps } from '../shared';
import { IngredientsTable } from './IngredientsTable';
import { IngredientsCards } from './IngredientsCards';
import { IngredientsInfographic } from './IngredientsInfographic';
import { IngredientsAccordion } from './IngredientsAccordion';

/** Keys into `t.productPage.ingredients.variants` for the toggle labels. */
export type VariantId = 'table' | 'cards' | 'infographic' | 'detailed';

export interface IngredientVariant {
  id: VariantId;
  Component: ComponentType<IngredientVariantProps>;
}

/**
 * The registry that drives both the toggle and the rendered design.
 *
 * To collapse down to the chosen final design once the client decides:
 *   1. Delete the other entries from this array.
 *   2. Delete their component files in this folder.
 * The toggle in <KeyIngredients> hides itself automatically when one entry
 * remains, leaving a clean single-design implementation.
 */
export const INGREDIENT_VARIANTS: IngredientVariant[] = [
  { id: 'table', Component: IngredientsTable },
  { id: 'cards', Component: IngredientsCards },
  { id: 'infographic', Component: IngredientsInfographic },
  { id: 'detailed', Component: IngredientsAccordion },
];
