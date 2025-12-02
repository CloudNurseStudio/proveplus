'use client';

import Image from 'next/image';

interface ShopModalContentProps {
  heading: string;
}

export function ShopModalContent({ heading }: ShopModalContentProps) {
  return (
    <div className="flex flex-col gap-6 sm:gap-9 items-center w-full px-2 sm:px-0">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-semibold text-[#4456a6] text-center leading-[1.5]">
        {heading}
      </h2>

      {/* Platform Buttons */}
      <div className="flex flex-col gap-6 sm:gap-9 items-center w-full max-w-[297px]">
        {/* Shopee */}
        <a
          href="https://shopee.co.th/proveplusthailand?entryPoint=ShopBySearch&searchKeyword=prove%20plus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy on Shopee"
          className="w-full"
        >
          <div className="bg-[rgba(255,255,255,0.56)] border border-white rounded-[56px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[80px] sm:h-[97px] flex items-center justify-center px-3 sm:px-[14px] py-1 hover:bg-white transition-colors">
            <picture>
                <source srcSet="/images/shopee-logo.webp" type="image/webp" />
                <img
                  src="/images/shopee-logo.jpg"
                  alt="Shopee"
                  width={183}
                  height={59}
                  className="object-contain w-full max-w-[140px] sm:max-w-[183px] h-auto"
                />
            </picture>
          </div>
        </a>

        {/* Lazada */}
        <a
          href="https://www.lazada.co.th/shop/nvjcwykx?spm=a2o4m.homepage.search.12.11255e89wCBz6p"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy on Lazada"
          className="w-full"
        >
          <div className="bg-[rgba(255,255,255,0.56)] border border-white rounded-[56px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[80px] sm:h-[97px] flex items-center justify-center px-3 sm:px-[14px] py-1 hover:bg-white transition-colors">
            <Image
              src="/lazada-logo.svg"
              alt="Lazada"
              width={183}
              height={48}
              className="object-contain w-full max-w-[140px] sm:max-w-[183px] h-auto"
            />
          </div>
        </a>

        {/* TikTok */}
        <a
          href="https://vt.tiktok.com/ZSAP2XWNX/?page=TikTokShop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy on TikTok Shop"
          className="w-full"
        >
          <div className="bg-[rgba(255,255,255,0.56)] border border-white rounded-[56px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[80px] sm:h-[97px] flex items-center justify-center px-3 sm:px-[14px] py-1 hover:bg-white transition-colors">
            <Image
              src="/tiktok-logo.svg"
              alt="TikTok"
              width={183}
              height={54}
              className="object-contain w-full max-w-[140px] sm:max-w-[183px] h-auto"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

