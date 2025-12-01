'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useLocale } from './LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useModalService } from './ModalServiceProvider';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/app/components/ui/sheet';

export function NavigationBar() {
  const { t, locale } = useLocale();
  const { openShopModal } = useModalService();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <div className="w-full px-4 py-3">
      <nav className="backdrop-blur-[9.6px] bg-[rgba(70,86,167,0.2)] border border-white/36 rounded-[60px] px-5 py-3 flex items-center justify-between">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="px-3 py-1.5 rounded-[32px] hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-brand-primary-700" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] bg-white/95 backdrop-blur-md"
            >
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-brand-primary-700/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Language Switcher */}
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - Left on desktop, center on mobile */}
        <Link
          href="/"
          className="flex items-center px-2 py-1 md:order-none order-2"
        >
          <Image
            src="/images/hero/logo-primary.svg"
            alt="Prove+"
            width={120}
            height={34}
            className="h-[34px] w-auto"
          />
        </Link>

        {/* Desktop Navigation Items - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <LanguageSwitcher className="flex-shrink-0" />

          <button
            onClick={() => openShopModal({ heading: t.nav.shopNow })}
            className="bg-white px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
          >
            {t.nav.shopNow}
            <Image
              src="/images/testimonials/shopping-cart-icon.svg"
              alt="shopping cart"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Shop Button - Only visible on mobile */}
        <div className="md:hidden order-3">
          <button
            onClick={() => openShopModal({ heading: t.nav.shopNow })}
            className="bg-white px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base flex items-center gap-1.5 hover:bg-gray-50 transition-colors"
          >
            {t.nav.shopNow}
            <Image
              src="/images/testimonials/shopping-cart-icon.svg"
              alt="shopping cart"
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>
    </div>
  );
}

