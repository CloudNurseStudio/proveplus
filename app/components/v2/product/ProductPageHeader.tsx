'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLocale } from '../LocaleProvider';

export function ProductPageHeader() {
  const { t } = useLocale();

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-8 md:px-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/10 transition-colors w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.productPage.backButton}
      </Link>

      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-[clamp(2.5rem,6vw,3rem)] font-semibold text-[#4554a4] leading-tight">
          {t.productPage.pageTitle}
        </h1>
        <p className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold text-[#4554a4]">
          {t.productPage.pageSubtitle}
        </p>
      </div>
    </div>
  );
}

