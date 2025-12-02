'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from './LocaleProvider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useModalService } from './ModalServiceProvider';

type FooterLink = {
  href: string;
  label: string;
};

const socialLinks = [
  {
    href: 'https://www.facebook.com/share/14JJxjH6w57/?mibextid=wwXIfr',
    icon: '/images/facebook-icon.svg',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/proveplus_th/',
    icon: '/images/instagram-icon.svg',
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@proveplus?is_from_webapp=1&sender_device=pc',
    icon: '/images/tiktok-icon.svg',
    label: 'TikTok',
  },
];

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="backdrop-blur-[32px] bg-white border border-[#bcc5dc] shadow-[0_2px_10px_rgba(138,0,75,0.02),0_4px_60px_rgba(138,0,75,0.04)] rounded-[30px] w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform"
          aria-label={social.label}
        >
          <Image src={social.icon} alt={social.label} width={24} height={24} />
        </a>
      ))}
    </div>
  );
}

function NavLinks({ links }: { links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-3 py-1.5 text-base font-semibold text-brand-primary-700 transition-colors hover:text-prove-main"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function ContactInfo({
  contact,
  heading,
  companyName,
}: {
  contact: { phone: string; email: string; address: string };
  heading: string;
  companyName: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      {/* <span className="px-3 py-1.5 text-base font-semibold text-brand-primary-700">
        {heading}
      </span> */}
      <div className="h-px w-full bg-prove-secondary" />
      <div className="flex flex-col">
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center gap-1.5 px-3 py-0.5 text-xs text-[#546e7a] hover:text-prove-main transition-colors"
        >
          <Image
            src="/images/phone-icon.svg"
            alt="phone"
            width={18}
            height={18}
            className="shrink-0"
          />
          <span>{contact.phone}</span>
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-1.5 px-3 py-0.5 text-xs text-[#546e7a] hover:text-prove-main transition-colors"
        >
          <Image
            src="/images/email-icon.svg"
            alt="email"
            width={18}
            height={18}
            className="shrink-0"
          />
          <span>{contact.email}</span>
        </a>
        <div className="flex items-start gap-1.5 px-3 py-0.5">
          <Image
            src="/images/location-icon.svg"
            alt="location"
            width={18}
            height={18}
            className="mt-0.5 shrink-0"
          />
          <div className="flex flex-col gap-1.5 text-[#546e7a]">
            <span className="text-xs leading-normal">{companyName}</span>
            <span className="text-[10px] leading-normal whitespace-pre-line">
              {contact.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterBottomRow({
  copyright,
  termsLabel,
}: {
  copyright: string;
  termsLabel: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="px-3 py-0.5 text-xs text-[#546e7a]">{copyright}</span>
      <Link
        href="/terms-of-use"
        className="px-3 py-0.5 text-xs text-[#546e7a] hover:text-prove-main transition-colors"
      >
        {termsLabel}
      </Link>
    </div>
  );
}

export function FooterNav() {
  const { t, locale } = useLocale();
  const { openShopModal } = useModalService();

  const navLinks: FooterLink[] = [
    { href: '/', label: t.nav.home },
    { href: '/products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const companyName =
    locale === 'th'
      ? 'บริษัท สแตนดาร์ด ยูเนี่ยน เมดิคอล (ประเทศไทย) จํากัด'
      : 'Standard Union Medical (Thailand) Co., Ltd.';

  return (
    <footer className="w-full">
      <div className="flex flex-col gap-3 rounded-t-3xl bg-prove-grey px-5 pb-3 pt-5">
        {/* Main content */}
        <div className="flex flex-col gap-3">
          {/* Top row: Logo + Shop button */}
          <div className="flex items-start justify-between">
            <div className="px-2 py-1">
              <Image
                src="/images/hero/logo-primary.svg"
                alt="Prove+"
                width={120}
                height={34}
                className="h-[34px] w-auto"
              />
            </div>
            <button
              onClick={() => openShopModal({ heading: t.nav.shopNow })}
              className="flex items-center justify-center gap-1.5 rounded-[32px] bg-white px-3 py-1.5 text-base font-semibold text-brand-primary-700 transition-colors hover:bg-gray-50"
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

          {/* Two column layout: social/lang on left, nav/contact on right */}
          <div className="flex items-start">
            {/* Left column: social icons + language switcher */}
            <div className="flex flex-col justify-between self-stretch pr-6">
              <SocialLinks />
              <LanguageSwitcher className="shadow-[0_2px_10px_rgba(138,0,75,0.02),0_4px_60px_rgba(138,0,75,0.04)]" />
            </div>

            {/* Right column: nav links + contact info */}
            <div className="flex flex-col gap-2">
              <NavLinks links={navLinks} />
              <ContactInfo
                contact={t.footer.contact}
                heading={t.nav.contact}
                companyName={companyName}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/10" />

        {/* Bottom row */}
        <FooterBottomRow
          copyright={t.footer.copyright}
          termsLabel={t.footer.terms}
        />
      </div>
    </footer>
  );
}

