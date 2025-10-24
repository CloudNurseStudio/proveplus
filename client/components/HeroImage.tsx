import GutSymbol from '@/assets/images/gut_symbol.svg';
import Product from '@/assets/images/product.png';

import HeroContent from './HeroContent';
import HeroText from '@/assets/images/heroText.svg';
import { motion } from 'motion/react';

export default function HeroImage() {
  return (
    <section
      aria-label="Featured product"
      className="relative w-full overflow-hidden min-h-screen"
      style={{
        background:
          "radial-gradient(62.54% 62.53% at 24.97% 47.65%, #FFF 0%, #8DD6F7 81.24%, #31A1E6 100%)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 h-[calc(100vh-10rem)] overflow-hidden">
          {/* Hero Text */}
          <div className="flex-2 min-w-0 min-h-0 flex items-center justify-center">
            <motion.img
              src={(HeroText as unknown as { src: string }).src ?? (HeroText as unknown as string)}
              alt="Prove+ Text"
              className="z-20 h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(20,66,87,0.25)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            />
          </div>

          {/* Hero Product */}
          <div className="flex-3 min-w-0 min-h-0 flex items-center justify-center">
            <motion.img
              src={(Product as unknown as { src: string }).src ?? (Product as unknown as string)}
              alt="Prove+ Product"
              className="z-20 h-full w-full object-contain"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
        </div>
      </div>

       <div className="absolute bottom-0 right-0 z-10">
          <img
            src={(GutSymbol as unknown as { src: string }).src ?? (GutSymbol as unknown as string)}
            alt="Gut Symbol"
            className="w-full h-full object-contain"
          />
        </div>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(255,255,255,0.85), rgba(49,161,230,0.35), rgba(141,214,247,0.25), rgba(255,255,255,0.85))",
          }}
        />
       
        <div className="relative flex items-center justify-center">
          {/* <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/26fc47f26205ef9b130e457a8a05138cb7eb3622?width=748"
            alt="Prove+ Product"
            className="w-full max-w-[374px] md:max-w-[560px] lg:max-w-[640px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(20,66,87,0.25)]"
          /> */}
        </div>
      </div>
    </section>
  );
}


