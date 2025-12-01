'use client';

import { ProductPageLayout } from '@/app/components/v2/product/ProductPageLayout';
import { ProductPageHeader } from '@/app/components/v2/product/ProductPageHeader';
import { ProductCard } from '@/app/components/v2/product/ProductCard';
import { ProductGallery } from '@/app/components/v2/product/ProductGallery';
import { ProductDetails } from '@/app/components/v2/product/ProductDetails';
import { ProductTabs } from '@/app/components/v2/product/ProductTabs';
import { useLocale } from '@/app/components/v2/LocaleProvider';
import { useModalService } from '@/app/components/v2/ModalServiceProvider';

export default function FlowproPage() {
  const { t } = useLocale();
  const { openShopModal } = useModalService();

  const flowproImages = [
    'https://www.figma.com/api/mcp/asset/876f3bf5-465c-48dc-9f8a-9c94c92c2cfa',
    'https://www.figma.com/api/mcp/asset/25c4611f-eb5a-4c23-95ce-8223c7d4a93d',
    'https://www.figma.com/api/mcp/asset/5d9cc881-5d4f-45b7-a099-82934c48d6aa',
    'https://www.figma.com/api/mcp/asset/320de9d0-9d0e-4551-9da4-e03e85c8c473',
  ];

  const ingredientIcons = [
    'https://www.figma.com/api/mcp/asset/3bca5214-afd4-4f69-b30f-3bcbb73c19ed',
    'https://www.figma.com/api/mcp/asset/d5256eb5-1253-4463-8c9e-004de73a079a',
    'https://www.figma.com/api/mcp/asset/2417a896-fd27-482a-bc3b-02b8370923a9',
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
          isSelected={true}
          bgColor="#e5ecfe"
        />
        <ProductCard
          name={t.productPage.allerpro.name}
          subtitle={t.productPage.allerpro.subtitle}
          flavor={t.productPage.allerpro.flavor}
          size={t.productPage.allerpro.size}
          image="https://www.figma.com/api/mcp/asset/25fb5735-5d54-43a4-82c4-c5c08bd403c2"
          href="/products/allerpro"
          isSelected={false}
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
                images={flowproImages}
                productName={t.productPage.flowpro.name}
              />
            </div>

            <div className="flex flex-col gap-10">
              <ProductDetails
                productName={t.productPage.flowpro.name}
                fullName={t.productPage.flowpro.fullName}
                rating={4.5}
                reviewCount={288}
                onOrderClick={handleOrderClick}
              />

              <ProductTabs
                description={t.productPage.flowpro.description}
                flavor={t.productPage.flowpro.flavor}
                howToUse={t.productPage.flowpro.howToUse}
                ingredientIcons={ingredientIcons}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
}

