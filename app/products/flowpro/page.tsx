'use client';

import { useState } from 'react';
import { ProductPageLayout } from '@/app/components/v2/product/ProductPageLayout';
import { ProductCard } from '@/app/components/v2/product/ProductCard';
import { ProductMainImage, ProductThumbnailGrid } from '@/app/components/v2/product/ProductGallery';
import { ProductDetails } from '@/app/components/v2/product/ProductDetails';
import { ProductTabs } from '@/app/components/v2/product/ProductTabs';
import { useLocale } from '@/app/components/v2/LocaleProvider';
import { useModalService } from '@/app/components/v2/ModalServiceProvider';

export default function FlowproPage() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const flowproImages = [
    '/images/products/flowpro/S__6004741_0.webp',
    '/images/products/flowpro/S__6004742_0.webp',
    '/images/products/flowpro/S__6004744_0.webp',
    '/images/products/flowpro/S__6004746_0.webp',
    '/images/products/flowpro/S__79380483.webp',
    '/images/products/flowpro/S__79380484.webp',
  ];

  const ingredientIcons = [
    '/images/badges/badge-fine-granules.svg',
    '/images/badges/badge-encapsulation.svg',
    '/images/badges/badge-cfu.svg',
  ];

  const handleOrderClick = () => {
    openShopModal({ heading: t.nav.shopNow });
  };

  return (
    <ProductPageLayout>
      {/* Banner Image */}
      <div className="px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
        <ProductMainImage
          image={'/images/products/flowpro/primary.webp'}
          productName={t.productPage.flowpro.name}
        />
      </div>

      {/* Product Details Card */}
      <div className="px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-[32px] p-6 sm:p-8">
          <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] font-semibold text-[#4554a4] mb-6">
            {t.productPage.detailsTitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15">
            {/* Left Column: Primary Image + Thumbnails */}
            <div className="w-full flex flex-col gap-4">
              <ProductMainImage
                image={flowproImages[selectedIndex]}
                productName={t.productPage.flowpro.name}
              />
              <ProductThumbnailGrid
                images={flowproImages}
                productName={t.productPage.flowpro.name}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
              />
            </div>

            {/* Right Column: Product Details & Tabs */}
            <div className="flex flex-col gap-10">
              <ProductDetails
                productName={t.productPage.flowpro.name}
                fullName={t.productPage.flowpro.fullName}
                rating={4.5}
                reviewCount={288}
                onOrderClick={handleOrderClick}
              />

              <ProductTabs
                productId="flowpro"
                description={t.productPage.flowpro.description}
                flavor={t.productPage.flowpro.flavor}
                howToUse={t.productPage.flowpro.howToUse}
                ingredientIcons={ingredientIcons}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Selector */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 justify-center items-center px-4 sm:px-8 md:px-16 pb-8">
        <ProductCard
          name={t.productPage.flowpro.name}
          subtitle={t.productPage.flowpro.subtitle}
          flavor={t.productPage.flowpro.flavor}
          size={t.productPage.flowpro.size}
          image="/images/products/flowpro/flowpro-product.webp"
          href="/products/flowpro"
          isSelected={true}
          bgColor="#e5ecfe"
        />
        <ProductCard
          name={t.productPage.allerpro.name}
          subtitle={t.productPage.allerpro.subtitle}
          flavor={t.productPage.allerpro.flavor}
          size={t.productPage.allerpro.size}
          image="/images/products/allerpro/allerpro-product.webp"
          href="/products/allerpro"
          isSelected={false}
          bgColor="#fbf7e2"
        />
      </div>
    </ProductPageLayout>
  );
}
