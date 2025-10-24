'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import thTranslations from '@/i18n/locales/th.json';
import enTranslations from '@/i18n/locales/en.json';

type Locale = 'th' | 'en';
type Translations = typeof thTranslations;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = {
  th: thTranslations,
  en: enTranslations,
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('th');

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

