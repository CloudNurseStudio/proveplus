'use client';

import { ProductPageLayout } from '@/app/components/v2/product/ProductPageLayout';
import { ProductPageHeader } from '@/app/components/v2/product/ProductPageHeader';
import { ProductCard } from '@/app/components/v2/product/ProductCard';
import { ProductGallery } from '@/app/components/v2/product/ProductGallery';
import { ProductDetails } from '@/app/components/v2/product/ProductDetails';
import { ProductTabs } from '@/app/components/v2/product/ProductTabs';
import { useLocale } from '@/app/components/v2/LocaleProvider';
import { useModalService } from '@/app/components/v2/ModalServiceProvider';

export default function AllerproPage() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();

  const allerproImages = [
    'https://www.figma.com/api/mcp/asset/4d0ae9b9-aef2-4fad-ae52-11caacea69e4',
    'https://www.figma.com/api/mcp/asset/fa62f73a-b1ec-4a61-b461-ac59f9488179',
    'https://www.figma.com/api/mcp/asset/d1cf3d0a-565a-48c9-abba-98562d80c552',
    'https://www.figma.com/api/mcp/asset/c7534154-d17a-4996-afc7-5e1dee2149c7',
  ];

  const ingredientIcons = [
    'https://www.figma.com/api/mcp/asset/aa3f1561-10df-4abd-85be-02c99e94c9a0',
    'https://www.figma.com/api/mcp/asset/cc1a6016-34cb-4141-ae30-a0b3c133a30e',
    'https://www.figma.com/api/mcp/asset/95fd8218-982a-46b4-a9b6-f6db97a2afc2',
  ];

  const handleOrderClick = () => {
    openShopModal({ heading: t.nav.shopNow });
  };

  return (
    <ProductPageLayout>
      <ProductPageHeader />

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 justify-center items-center px-4 sm:px-8 md:px-16">
        <ProductCard
          name={t.productPage.flowpro.name}
          subtitle={t.productPage.flowpro.subtitle}
          flavor={t.productPage.flowpro.flavor}
          size={t.productPage.flowpro.size}
          image="https://www.figma.com/api/mcp/asset/320de9d0-9d0e-4551-9da4-e03e85c8c473"
          href="/products/flowpro"
          isSelected={false}
          bgColor="#e5ecfe"
        />
        <ProductCard
          name={t.productPage.allerpro.name}
          subtitle={t.productPage.allerpro.subtitle}
          flavor={t.productPage.allerpro.flavor}
          size={t.productPage.allerpro.size}
          image="https://www.figma.com/api/mcp/asset/25fb5735-5d54-43a4-82c4-c5c08bd403c2"
          href="/products/allerpro"
          isSelected={true}
          bgColor="#fbf7e2"
        />
      </div>

      <div className="px-4 sm:px-8 md:px-16">
        <div className="bg-white/50 backdrop-blur-sm rounded-[32px] p-6 sm:p-8">
          <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] font-semibold text-[#4554a4] mb-6">
            {t.productPage.detailsTitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15">
            <div className="w-full max-w-[514px] mx-auto lg:mx-0">
              <ProductGallery
                images={allerproImages}
                productName={t.productPage.allerpro.name}
              />
            </div>

            <div className="flex flex-col gap-10">
              <ProductDetails
                productName={t.productPage.allerpro.name}
                fullName={t.productPage.allerpro.fullName}
                rating={4.5}
                reviewCount={288}
                onOrderClick={handleOrderClick}
              />

              <ProductTabs
                description={t.productPage.allerpro.description}
                flavor={t.productPage.allerpro.flavor}
                howToUse={t.productPage.allerpro.howToUse}
                ingredientIcons={ingredientIcons}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
}

