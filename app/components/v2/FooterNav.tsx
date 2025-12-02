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

function SocialLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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

function NavPills({ links }: { links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-4 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-sm hover:bg-white transition-colors"
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
}: {
  contact: { phone: string; email: string; address: string };
  heading: string;
}) {
  const contactItems = [
    {
      icon: '/images/phone-icon.svg',
      alt: 'phone icon',
      value: contact.phone,
    },
    {
      icon: '/images/email-icon.svg',
      alt: 'email icon',
      value: contact.email,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <span className="px-4 py-1.5 rounded-[32px] text-brand-primary-700 font-semibold text-sm">
        {heading}
      </span>
      <div className="h-px w-full bg-prove-secondary" />
      {contactItems.map((item) => (
        <div key={item.alt} className="flex items-center gap-2 px-3 py-1">
          <Image src={item.icon} alt={item.alt} width={18} height={18} />
          <span className="text-xs text-[#546e7a]">{item.value}</span>
        </div>
      ))}
      <div className="flex items-start gap-2 px-3 py-1">
        <Image
          src="/images/location-icon.svg"
          alt="location icon"
          width={18}
          height={18}
          className="mt-0.5"
        />
        <span className="text-xs text-[#546e7a] whitespace-pre-line">
          {contact.address}
        </span>
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
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
      <span className="text-xs text-[#546e7a] px-3 py-0.5">{copyright}</span>
      <Link
        href="/terms-of-use"
        className="text-xs text-[#546e7a] px-3 py-0.5 hover:text-prove-main transition-colors"
      >
        {termsLabel}
      </Link>
    </div>
  );
}

export function FooterNav() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();

  const navLinks: FooterLink[] = [
    { href: '/', label: t.nav.home },
    { href: '/#products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
    { href: '/#why-prove', label: t.nav.whyProve },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="w-full">
      <div className="backdrop-blur-[9.6px] bg-prove-grey rounded-t-3xl px-5 sm:px-8 pt-6 pb-4 flex flex-col gap-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex flex-col gap-6 lg:w-2/5">
            <div className="px-2 py-1">
              <Image
                src="/images/hero/logo-primary.svg"
                alt="Prove+"
                width={120}
                height={34}
                className="h-[34px] w-auto"
              />
            </div>
            <SocialLinks />
            <LanguageSwitcher className="shadow-[0_2px_10px_rgba(138,0,75,0.02),0_4px_60px_rgba(138,0,75,0.04)]" />
          </div>

          <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-start lg:justify-between">
            <NavPills links={navLinks} />

            <ContactInfo contact={t.footer.contact} heading={t.nav.contact} />

            <button
              onClick={() => openShopModal({ heading: t.nav.shopNow })}
              className="bg-white px-5 py-2 rounded-[32px] text-brand-primary-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors self-start"
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
        </div>

        <div className="h-px w-full bg-black/10" />

        <FooterBottomRow
          copyright={t.footer.copyright}
          termsLabel={t.footer.terms}
        />
      </div>
    </footer>
  );
}

