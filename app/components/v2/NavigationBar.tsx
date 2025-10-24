'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from './LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';

export function NavigationBar() {
  const { t } = useLocale();

  return (
    <div className="w-full px-4 py-3">
      <nav className="backdrop-blur-[9.6px] bg-[rgba(70,86,167,0.2)] border border-white/36 rounded-[60px] px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center px-2 py-1">
          <Image
            src="/images/hero/logo-primary.svg"
            alt="Prove+"
            width={120}
            height={34}
            className="h-[34px] w-auto"
          />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/10 transition-colors"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/10 transition-colors"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/10 transition-colors"
          >
            {t.nav.contact}
          </Link>

          <LanguageSwitcher className="flex-shrink-0" />

          <button className="bg-white px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base flex items-center gap-1.5 hover:bg-gray-50 transition-colors">
            {t.nav.shopNow}
            <Image
              src="/images/testimonials/shopping-cart-icon.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>
    </div>
  );
}

