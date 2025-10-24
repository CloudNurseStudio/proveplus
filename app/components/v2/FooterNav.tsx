'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from './LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';

export function FooterNav() {
  const { t } = useLocale();

  return (
    <div className="w-full">
      <div className="backdrop-blur-[9.6px] bg-prove-grey rounded-tl-3xl rounded-tr-3xl px-5 pt-5 pb-3 flex flex-col gap-3">
        <div className="flex items-start justify-between w-full">
          {/* Left side - Logo, Social Media, Language Switcher */}
          <div className="flex flex-col gap-8">
            <div className="px-2 py-1">
              <Image
                src="/images/hero/logo-primary.svg"
                alt="Prove+"
                width={120}
                height={34}
                className="h-[34px] w-auto"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="backdrop-blur-[32px] bg-prove-grey p-2 rounded-[30px] shadow-[0px_2px_10px_0px_rgba(138,0,75,0.02),0px_4px_60px_0px_rgba(138,0,75,0.04)] w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a
                href="#"
                className="backdrop-blur-[32px] bg-prove-grey p-2 rounded-[30px] shadow-[0px_2px_10px_0px_rgba(138,0,75,0.02),0px_4px_60px_0px_rgba(138,0,75,0.04)] w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="#"
                className="backdrop-blur-[32px] bg-prove-grey p-2 rounded-[30px] shadow-[0px_2px_10px_0px_rgba(138,0,75,0.02),0px_4px_60px_0px_rgba(138,0,75,0.04)] w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <Image src="/images/tiktok-icon.svg" alt="TikTok" width={24} height={24} />
              </a>
            </div>

            <LanguageSwitcher />
          </div>

          {/* Right side - Menu and Contact Info */}
          <div className="flex gap-3">
            <div className="flex gap-3">
              <Link
                href="/about"
                className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/50 transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/50 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1">
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base hover:bg-white/50 transition-colors"
              >
                {t.nav.contact}
              </Link>
              <div className="h-px w-full bg-prove-secondary" />
              
              <div className="flex items-center gap-1.5 px-3 py-0.5">
                <Image src="/images/phone-icon.svg" alt="" width={18} height={18} />
                <span className="text-xs text-gray-600">{t.footer.contact.phone}</span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-0.5">
                <Image src="/images/email-icon.svg" alt="" width={18} height={18} />
                <span className="text-xs text-gray-600">{t.footer.contact.email}</span>
              </div>
              
              <div className="flex items-start gap-1.5 px-3 py-0.5">
                <Image src="/images/location-icon.svg" alt="" width={18} height={18} className="mt-0.5" />
                <span className="text-xs text-gray-600 whitespace-pre-line">
                  {t.footer.contact.address}
                </span>
              </div>
            </div>

            <button className="bg-white px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-base flex items-center gap-1.5 hover:bg-gray-50 transition-colors h-fit">
              {t.nav.shopNow}
              <Image
                src="/images/testimonials/shopping-cart-icon.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/12" />

        {/* Bottom row - Copyright and Terms */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-600 px-3 py-0.5">
            {t.footer.copyright}
          </span>
          <Link
            href="/terms"
            className="text-xs text-gray-600 px-3 py-0.5 hover:text-prove-main transition-colors"
          >
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </div>
  );
}

