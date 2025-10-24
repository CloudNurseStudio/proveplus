export const defaultLocale = 'th' as const;
export const locales = ['th', 'en'] as const;

export type Locale = (typeof locales)[number];

export function getLocaleData(locale: Locale) {
  try {
    return require(`./locales/${locale}.json`);
  } catch {
    return require(`./locales/${defaultLocale}.json`);
  }
}

