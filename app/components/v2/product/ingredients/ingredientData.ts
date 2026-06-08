/**
 * Bilingual, structured ingredient data for the PROVE+ product pages.
 *
 * This is the single source of truth consumed by every "Key Ingredients"
 * design variant. Keeping the data here (rather than in the i18n JSON) lets
 * each variant render the same facts differently without duplicating content.
 *
 * Thai names for FLOWPRO come verbatim from the official product document.
 * ALLERPRO Thai names are transliterated using the same conventions and
 * should be verified by the client before launch.
 */

export type Locale = 'th' | 'en';

/** A localised string. Pick with `localise(value, locale)`. */
export interface LStr {
  en: string;
  th: string;
}

export function localise(value: LStr, locale: Locale): string {
  return value[locale] ?? value.en;
}

export type IngredientCategory = 'probiotic' | 'prebiotic' | 'vitamin' | 'immune';

export interface Ingredient {
  /** Display name (e.g. genus/species or compound name). */
  name: LStr;
  /** Optional sub-label: strain code, percentage, abbreviation. */
  detail?: LStr;
  /** Amount in grams — numeric, used for sorting and bar scaling. */
  amountG: number;
  /** Pre-formatted amount string for display. */
  amount: string;
  category: IngredientCategory;
  /** Short benefit description, used by the "detailed" (accordion) variant. */
  blurb?: LStr;
}

export interface ProductIngredients {
  /** Ordered (highest amount first) active ingredients per sachet. */
  ingredients: Ingredient[];
  additives: LStr[];
  fdaNumber: string;
  /** Accent colours so each product keeps its own identity in every variant. */
  accent: ProductAccent;
}

export interface ProductAccent {
  /** Primary fill (buttons, table header, bars). */
  solid: string;
  /** Darker shade for hover / emphasis text. */
  deep: string;
  /** Very soft tint for icon chips / hero panels. */
  soft: string;
  /** Tint behind the product gallery, matches the live page. */
  surface: string;
}

const VITAMIN_C: Ingredient = {
  name: { en: 'Ascorbic Acid (Vitamin C)', th: 'กรดแอสคอร์บิก (วิตามินซี)' },
  detail: { en: '100%', th: '100%' },
  amountG: 0, // overridden per product below
  amount: '',
  category: 'vitamin',
  blurb: {
    en: 'Supports normal immune function and acts as an antioxidant.',
    th: 'ช่วยเสริมการทำงานของระบบภูมิคุ้มกันและเป็นสารต้านอนุมูลอิสระ',
  },
};

export const PRODUCT_INGREDIENTS: Record<'flowpro' | 'allerpro', ProductIngredients> = {
  flowpro: {
    accent: { solid: '#5d6fcd', deep: '#4554a4', soft: '#e9edff', surface: '#e5ecfe' },
    fdaNumber: '10-3-11368-5-0001',
    additives: [
      { en: 'Stabilizer (INS 414)', th: 'สารทำให้คงตัว (INS 414)' },
      { en: 'Anti-caking agent (INS 551)', th: 'สารป้องกันการจับเป็นก้อน (INS 551)' },
      { en: 'Acidity regulator (INS 330)', th: 'สารควบคุมความเป็นกรด (INS 330)' },
      { en: 'Synthetic flavoring', th: 'แต่งกลิ่นสังเคราะห์' },
    ],
    ingredients: [
      {
        name: { en: 'Fructooligosaccharide', th: 'ฟรุกโตโอลิโกแซคคาไรด์' },
        detail: { en: 'FOS 45%', th: 'FOS 45%' },
        amountG: 0.1,
        amount: '0.10 g',
        category: 'prebiotic',
        blurb: {
          en: 'A plant-derived soluble fibre that feeds beneficial gut bacteria.',
          th: 'ใยอาหารชนิดละลายน้ำจากพืช ช่วยเป็นอาหารของแบคทีเรียดีในลำไส้',
        },
      },
      {
        name: { en: 'Lactobacillus paracasei', th: 'แลกโตบาซิลลัส พาราคาเซอิ' },
        amountG: 0.06,
        amount: '0.06 g',
        category: 'probiotic',
        blurb: {
          en: 'A resilient strain that supports a balanced intestinal flora.',
          th: 'สายพันธุ์ที่ทนทาน ช่วยรักษาสมดุลของจุลินทรีย์ในลำไส้',
        },
      },
      {
        name: { en: 'Inulin', th: 'อินนูลิน' },
        detail: { en: '90%', th: '90%' },
        amountG: 0.05,
        amount: '0.05 g',
        category: 'prebiotic',
        blurb: {
          en: 'A prebiotic fibre that promotes regularity and nourishes good bacteria.',
          th: 'ใยอาหารพรีไบโอติก ช่วยเรื่องการขับถ่ายและบำรุงแบคทีเรียดี',
        },
      },
      {
        name: { en: 'Bacillus coagulans', th: 'บาซิลลัส โคแอกกูแลนส์' },
        amountG: 0.03,
        amount: '0.03 g',
        category: 'probiotic',
        blurb: {
          en: 'A spore-forming probiotic that survives stomach acid to reach the gut.',
          th: 'โพรไบโอติกชนิดสร้างสปอร์ ทนกรดในกระเพาะจึงเดินทางถึงลำไส้ได้',
        },
      },
      {
        name: { en: 'Galacto-oligosaccharide', th: 'กาแลคโตโอลิโกแซคคาไรด์' },
        detail: { en: 'GOS 80%', th: 'GOS 80%' },
        amountG: 0.015,
        amount: '0.015 g',
        category: 'prebiotic',
        blurb: {
          en: 'A gentle prebiotic that selectively encourages Bifidobacteria.',
          th: 'พรีไบโอติกที่อ่อนโยน ช่วยส่งเสริมการเติบโตของบิฟิโดแบคทีเรีย',
        },
      },
      {
        ...VITAMIN_C,
        amountG: 0.015,
        amount: '0.015 g',
      },
      {
        name: { en: 'Bifidobacterium lactis', th: 'บิฟิโดแบคทีเรียม แลคทิส' },
        amountG: 0.008,
        amount: '0.008 g',
        category: 'probiotic',
        blurb: {
          en: 'A well-studied strain associated with digestive balance.',
          th: 'สายพันธุ์ที่มีงานวิจัยรองรับ ช่วยเรื่องสมดุลการย่อยอาหาร',
        },
      },
      {
        name: { en: 'Bifidobacterium longum', th: 'บิฟิโดแบคทีเรียม ลองกัม' },
        amountG: 0.006,
        amount: '0.006 g',
        category: 'probiotic',
        blurb: {
          en: 'A core resident of a healthy gut, helping maintain microbial harmony.',
          th: 'จุลินทรีย์หลักของลำไส้ที่แข็งแรง ช่วยรักษาสมดุลของจุลินทรีย์',
        },
      },
      {
        name: { en: 'Lactobacillus rhamnosus', th: 'แลกโตบาซิลลัส รามโนซัส' },
        amountG: 0.0015,
        amount: '0.0015 g',
        category: 'probiotic',
        blurb: {
          en: 'A widely researched strain supporting gut and overall wellbeing.',
          th: 'สายพันธุ์ที่มีการศึกษาอย่างกว้างขวาง ช่วยดูแลลำไส้และสุขภาพโดยรวม',
        },
      },
      {
        name: { en: 'Lactobacillus reuteri', th: 'แลกโตบาซิลลัส รอยเทอรี' },
        amountG: 0.0015,
        amount: '0.0015 g',
        category: 'probiotic',
        blurb: {
          en: 'A naturally occurring strain that helps maintain a balanced microbiome.',
          th: 'สายพันธุ์ที่พบตามธรรมชาติ ช่วยรักษาสมดุลของไมโครไบโอม',
        },
      },
    ],
  },

  allerpro: {
    accent: { solid: '#c79a3a', deep: '#b58a2e', soft: '#f6efd8', surface: '#fbf7e2' },
    fdaNumber: '10-3-11368-5-0002',
    additives: [
      { en: 'Stabilizer (INS 414)', th: 'สารทำให้คงตัว (INS 414)' },
      { en: 'Anti-caking agent (INS 551)', th: 'สารป้องกันการจับเป็นก้อน (INS 551)' },
      { en: 'Synthetic flavoring', th: 'แต่งกลิ่นสังเคราะห์' },
    ],
    ingredients: [
      {
        name: { en: 'Yeast Beta-Glucan', th: 'ยีสต์ เบต้ากลูแคน' },
        detail: { en: '75%', th: '75%' },
        amountG: 0.125,
        amount: '0.125 g',
        category: 'immune',
        blurb: {
          en: "A natural fibre from yeast that helps support the body's everyday immune defences.",
          th: 'ใยอาหารธรรมชาติจากยีสต์ ช่วยเสริมการทำงานของระบบภูมิคุ้มกันในแต่ละวัน',
        },
      },
      {
        ...VITAMIN_C,
        amountG: 0.055,
        amount: '0.055 g',
      },
      {
        name: { en: 'Bacillus coagulans', th: 'บาซิลลัส โคแอกกูแลนส์' },
        detail: { en: 'BC198', th: 'BC198' },
        amountG: 0.05,
        amount: '0.050 g',
        category: 'probiotic',
        blurb: {
          en: 'A spore-forming probiotic that survives stomach acid to reach the gut.',
          th: 'โพรไบโอติกชนิดสร้างสปอร์ ทนกรดในกระเพาะจึงเดินทางถึงลำไส้ได้',
        },
      },
      {
        name: { en: 'Bifidobacterium animalis subsp. lactis', th: 'บิฟิโดแบคทีเรียม แอนิมาลิส ซับสปีชีส์ แลคทิส' },
        detail: { en: 'SG105', th: 'SG105' },
        amountG: 0.04,
        amount: '0.040 g',
        category: 'probiotic',
        blurb: {
          en: 'A well-studied strain associated with digestive balance and immune support.',
          th: 'สายพันธุ์ที่มีงานวิจัยรองรับ ช่วยเรื่องสมดุลการย่อยและภูมิคุ้มกัน',
        },
      },
      {
        name: { en: 'Lactobacillus paracasei', th: 'แลกโตบาซิลลัส พาราคาเซอิ' },
        detail: { en: 'LCW23', th: 'LCW23' },
        amountG: 0.0125,
        amount: '0.0125 g',
        category: 'probiotic',
        blurb: {
          en: 'A resilient strain that supports a balanced intestinal flora.',
          th: 'สายพันธุ์ที่ทนทาน ช่วยรักษาสมดุลของจุลินทรีย์ในลำไส้',
        },
      },
      {
        name: { en: 'Lactobacillus rhamnosus', th: 'แลกโตบาซิลลัส รามโนซัส' },
        detail: { en: 'LR1', th: 'LR1' },
        amountG: 0.0003,
        amount: '0.0003 g',
        category: 'probiotic',
        blurb: {
          en: 'A widely researched strain supporting gut and overall wellbeing.',
          th: 'สายพันธุ์ที่มีการศึกษาอย่างกว้างขวาง ช่วยดูแลลำไส้และสุขภาพโดยรวม',
        },
      },
      {
        name: { en: 'Bifidobacterium longum subsp. longum', th: 'บิฟิโดแบคทีเรียม ลองกัม' },
        amountG: 0.0003,
        amount: '0.0003 g',
        category: 'probiotic',
        blurb: {
          en: 'A core resident of a healthy gut, helping maintain microbial harmony.',
          th: 'จุลินทรีย์หลักของลำไส้ที่แข็งแรง ช่วยรักษาสมดุลของจุลินทรีย์',
        },
      },
      {
        name: { en: 'Bifidobacterium infantis', th: 'บิฟิโดแบคทีเรียม อินแฟนทิส' },
        detail: { en: 'B. longum subsp. infantis', th: 'B. longum subsp. infantis' },
        amountG: 0.0003,
        amount: '0.0003 g',
        category: 'probiotic',
        blurb: {
          en: 'An early-life strain that supports a balanced microbiome.',
          th: 'สายพันธุ์ที่พบในช่วงต้นของชีวิต ช่วยรักษาสมดุลของไมโครไบโอม',
        },
      },
    ],
  },
};

export type ProductId = keyof typeof PRODUCT_INGREDIENTS;

/** Group ingredients by category, preserving original (amount-desc) order. */
export function groupByCategory(ingredients: Ingredient[]): Array<{
  category: IngredientCategory;
  items: Ingredient[];
}> {
  const order: IngredientCategory[] = ['immune', 'probiotic', 'prebiotic', 'vitamin'];
  const seen = new Map<IngredientCategory, Ingredient[]>();
  for (const ing of ingredients) {
    if (!seen.has(ing.category)) seen.set(ing.category, []);
    seen.get(ing.category)!.push(ing);
  }
  return order
    .filter((c) => seen.has(c))
    .map((category) => ({ category, items: seen.get(category)! }));
}
