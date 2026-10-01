import type { ProductId } from './ingredients/ingredientData';

/**
 * Per-product assets and settings for the PROVE+ product pages. Copy (names,
 * flavours, descriptions) lives in the i18n JSON under `productPage.<id>`;
 * ingredient facts live in `ingredients/ingredientData.ts`.
 */
export interface ProductConfig {
  id: ProductId;
  /** Label used where space is tight, e.g. the homepage product cards. */
  shortName: string;
  href: string;
  /** Full-width banner at the top of the product page. */
  banner: string;
  /** Gallery images in the details card. */
  gallery: string[];
  /** Packshot used on the product selector cards. */
  cardImage: string;
  /** Smaller packshot used on the homepage micro-probiotic section. */
  homeCardImage: string;
  /** Round feature badges shown under the product description. */
  badges: string[];
  /** Soft tint behind packshots. */
  surface: string;
  /** Omitted until the product has real reviews. */
  rating?: { value: number; count: number };
}

// LUMIPRO images are still being collected; every LUMIPRO slot points here
// until the packshots and banners are added.
const LUMIPRO_PLACEHOLDER = '/images/products/lumipro/placeholder.svg';

const BADGE_FINE_GRANULES = '/images/badges/badge-fine-granules.svg';
const BADGE_ENCAPSULATION = '/images/badges/badge-encapsulation.svg';
const BADGE_CFU = '/images/badges/badge-cfu.svg';

export const PRODUCTS: ProductConfig[] = [
  {
    id: 'flowpro',
    shortName: 'FLOWPRO',
    href: '/products/flowpro',
    banner: '/images/products/flowpro/primary.webp',
    gallery: [
      '/images/products/flowpro/S__6004741_0.webp',
      '/images/products/flowpro/S__6004742_0.webp',
      '/images/products/flowpro/S__6004744_0.webp',
      '/images/products/flowpro/S__6004746_0.webp',
      '/images/products/flowpro/S__79380483.webp',
      '/images/products/flowpro/S__79380484.webp',
    ],
    cardImage: '/images/products/flowpro/flowpro-product.webp',
    homeCardImage: '/images/microprobiotic-product-1.webp',
    badges: [BADGE_FINE_GRANULES, BADGE_ENCAPSULATION, BADGE_CFU],
    surface: '#e5ecfe',
    rating: { value: 4.5, count: 288 },
  },
  {
    id: 'allerpro',
    shortName: 'ALLERPRO',
    href: '/products/allerpro',
    banner: '/images/products/allerpro/primary.webp',
    gallery: [
      '/images/products/allerpro/S__79380490_0.webp',
      '/images/products/allerpro/S__79380492_0.webp',
      '/images/products/allerpro/S__79380493_0.webp',
      '/images/products/allerpro/S__79380494_0.webp',
      '/images/products/allerpro/S__79380495_0.webp',
      '/images/products/allerpro/S__79380496_0.webp',
      '/images/products/allerpro/S__79380497_0.webp',
      '/images/products/allerpro/S__79380498_0.webp',
    ],
    cardImage: '/images/products/allerpro/allerpro-product.webp',
    homeCardImage: '/images/microprobiotic-product-2.webp',
    // TODO: swap the CFU badge for ALLERPRO's "1,000 million CFU + β-glucan &
    // Vit C" badge once the artwork is supplied (Canva rollout deck, slide 6).
    badges: [BADGE_FINE_GRANULES, BADGE_ENCAPSULATION, BADGE_CFU],
    surface: '#fbf7e2',
    rating: { value: 4.5, count: 288 },
  },
  {
    id: 'lumipro',
    shortName: 'LUMIPRO',
    href: '/products/lumipro',
    banner: LUMIPRO_PLACEHOLDER,
    gallery: [LUMIPRO_PLACEHOLDER],
    cardImage: LUMIPRO_PLACEHOLDER,
    homeCardImage: LUMIPRO_PLACEHOLDER,
    // The CFU badge is product-specific, so it is left out until LUMIPRO's
    // own badge is supplied.
    badges: [BADGE_FINE_GRANULES, BADGE_ENCAPSULATION],
    surface: '#fdeef5',
  },
];

export function getProduct(id: ProductId): ProductConfig {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) throw new Error(`Unknown product: ${id}`);
  return product;
}
