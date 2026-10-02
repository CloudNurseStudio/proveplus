'use client';

import { useState } from 'react';
import { ProductPageLayout } from './ProductPageLayout';
import { ProductCard } from './ProductCard';
import { ProductMainImage, ProductThumbnailGrid } from './ProductGallery';
import { ProductDetails } from './ProductDetails';
import { ProductTabs } from './ProductTabs';
import { KeyIngredients } from './ingredients/KeyIngredients';
import type { ProductId } from './ingredients/ingredientData';
import { PRODUCTS, getProduct } from './products';
import { useLocale } from '../LocaleProvider';
import { useModalService } from '../ModalServiceProvider';

interface ProductPageProps {
  productId: ProductId;
}

export function ProductPage({ productId }: ProductPageProps) {
  const { t } = useLocale();
  const { openShopModal } = useModalService();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const product = getProduct(productId);
  const copy = t.productPage[productId];

  const handleOrderClick = () => {
    openShopModal({ heading: t.nav.shopNow });
  };

  return (
    <ProductPageLayout>
      {/* Banner Image */}
      <div className="px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
        <ProductMainImage image={product.banner} productName={copy.name} />
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
                image={product.gallery[selectedIndex]}
                productName={copy.name}
              />
              {product.gallery.length > 1 && (
                <ProductThumbnailGrid
                  images={product.gallery}
                  productName={copy.name}
                  selectedIndex={selectedIndex}
                  onSelect={setSelectedIndex}
                />
              )}
            </div>

            {/* Right Column: Product Details & Tabs */}
            <div className="flex flex-col gap-10">
              <ProductDetails
                productName={copy.name}
                fullName={copy.fullName}
                rating={product.rating?.value}
                reviewCount={product.rating?.count}
                onOrderClick={handleOrderClick}
              />

              <ProductTabs
                description={copy.description}
                flavor={copy.flavor}
                howToUse={copy.howToUse}
                ingredientIcons={product.badges}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Ingredients (upfront section) */}
      <div className="px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-[32px] p-6 sm:p-8">
          <KeyIngredients product={productId} />
        </div>
      </div>

      {/* Product Selector */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-9 justify-center items-center px-4 sm:px-8 md:px-16 pb-8">
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            name={t.productPage[p.id].name}
            subtitle={t.productPage[p.id].subtitle}
            flavor={t.productPage[p.id].flavor}
            size={t.productPage[p.id].size}
            image={p.cardImage}
            href={p.href}
            isSelected={p.id === productId}
            bgColor={p.surface}
          />
        ))}
      </div>
    </ProductPageLayout>
  );
}
