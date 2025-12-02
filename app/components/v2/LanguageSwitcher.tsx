'use client';

import { useLocale } from './LocaleProvider';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`bg-white flex items-start rounded-xl w-fit ${className}`}>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-2 rounded-xl h-9 flex items-center justify-center text-sm font-semibold tracking-wider uppercase transition-colors ${
          locale === 'en'
            ? 'bg-prove-main text-white'
            : 'text-prove-main hover:bg-gray-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('th')}
        className={`px-3 py-2 rounded-xl h-9 flex items-center justify-center text-sm font-semibold tracking-wider uppercase transition-colors ${
          locale === 'th'
            ? 'bg-prove-main text-white'
            : 'text-prove-main hover:bg-gray-50'
        }`}
      >
        TH
      </button>
    </div>
  );
}

