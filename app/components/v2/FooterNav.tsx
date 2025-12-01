'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from './LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useModalService } from './ModalServiceProvider';

export function FooterNav() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();

  return (
    <div className="w-full">
      <div className="backdrop-blur-[9.6px] bg-prove-grey rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl px-4 sm:px-5 pt-4 sm:pt-5 pb-3 flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6 lg:gap-3">
          {/* Left side - Logo, Social Media, Language Switcher */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full lg:w-auto">
            <div className="px-2 py-1">
              <Image
                src="/images/hero/logo-primary.svg"
                alt="Prove+"
                width={120}
                height={34}
                className="h-[28px] sm:h-[34px] w-auto"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="backdrop-blur-[32px] bg-prove-grey p-2 rounded-[30px] shadow-[0px_2px_10px_0px_rgba(138,0,75,0.02),0px_4px_60px_0px_rgba(138,0,75,0.04)] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Image src="/images/facebook-icon.svg" alt="Facebook" width={20} height={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="backdrop-blur-[32px] bg-prove-grey p-2 rounded-[30px] shadow-[0px_2px_10px_0px_rgba(138,0,75,0.02),0px_4px_60px_0px_rgba(138,0,75,0.04)] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="backdrop-blur-[32px] bg-prove-grey p-2 rounded-[30px] shadow-[0px_2px_10px_0px_rgba(138,0,75,0.02),0px_4px_60px_0px_rgba(138,0,75,0.04)] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <Image src="/images/tiktok-icon.svg" alt="TikTok" width={20} height={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>

            <LanguageSwitcher />
          </div>

          {/* Right side - Menu and Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="/about"
                className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-sm sm:text-base hover:bg-white/50 transition-colors text-center sm:text-left"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-sm sm:text-base hover:bg-white/50 transition-colors text-center sm:text-left"
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1">
              <div className="h-px w-full bg-prove-secondary" />
              
              <div className="flex items-center gap-1.5 px-3 py-0.5">
                <Image src="/images/phone-icon.svg" alt="" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs text-gray-600">{t.footer.contact.phone}</span>
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-0.5">
                <Image src="/images/email-icon.svg" alt="" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs text-gray-600">{t.footer.contact.email}</span>
              </div>
              
              <div className="flex items-start gap-1.5 px-3 py-0.5">
                <Image src="/images/location-icon.svg" alt="" width={16} height={16} className="mt-0.5 sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs text-gray-600 whitespace-pre-line">
                  {t.footer.contact.address}
                </span>
              </div>
            </div>

            <button
              onClick={() => openShopModal({ heading: t.nav.shopNow })}
              className="bg-white px-3 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-1.5 hover:bg-gray-50 transition-colors h-fit"
            >
              {t.nav.shopNow}
              <Image
                src="/images/testimonials/shopping-cart-icon.svg"
                alt=""
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/12" />

        {/* Bottom row - Copyright and Terms */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
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

