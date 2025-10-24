import shopeeLogo from "@/assets/images/shopee-logo.png";
// Lazada SVG served from public folder
import { motion } from "motion/react";

export default function WhereToBuy() {
  return (
    <div
      id="where-to-buy"
      className="flex flex-col items-center gap-[50px] px-6 w-full pt-36 pb-6 md:pt-6 justify-center h-[80%]"
    >
      <motion.div
        className="flex flex-col items-center gap-1 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-700 leading-[150%] text-outfit">
          Where to Buy
        </h2>
        <p className="text-base md:text-lg text-brand-primary-400 leading-[150%] font-normal text-fc-orbit">
        Shop from your favorite platforms.
        </p>
      </motion.div>

      <div className="flex flex-col items-start gap-[44.727px] w-full max-w-[246px]">
        <motion.a
          href="https://shopee.co.th/proveplusthailand?entryPoint=ShopBySearch&searchKeyword=prove%20plus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy on Shopee"
          className="relative w-full block group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative flex items-center justify-center w-full h-[118px] bg-white rounded-[15.786px] border border-white/10 shadow-md transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(238,77,45,0.35)] transition-colors active:bg-[rgba(238,77,45,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(238,77,45,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            <img
              src={(shopeeLogo as unknown as { src: string }).src ?? (shopeeLogo as unknown as string)}
              alt="Shopee"
              className="w-[149px] h-[47px] object-contain"
            />
          </div>
        </motion.a>

        <motion.a
          href="https://www.lazada.co.th/shop/nvjcwykx?spm=a2o4m.homepage.search.12.11255e89wCBz6p"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy on Lazada"
          className="relative w-full block group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center w-full h-[118px] bg-white rounded-[15.786px] border border-white/10 shadow-md transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(45,70,229,0.35)] transition-colors active:bg-[rgba(45,70,229,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(45,70,229,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            <img
              src="/lazada-logo.svg"
              alt="Lazada"
              className="w-[149px] h-[47px] object-contain"
            />
          </div>
        </motion.a>

        <motion.a
          href="https://vt.tiktok.com/ZSAP2XWNX/?page=TikTokShop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy on TikTok Shop"
          className="relative w-full block group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center justify-center w-full h-[118px] bg-white rounded-[15.786px] border border-white/10 shadow-md transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(105,201,208,0.35)] transition-colors active:bg-[rgba(105,201,208,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(105,201,208,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            <img
              src="/tiktok-logo.svg"
              alt="TikTok"
              className="w-[175px] h-auto object-contain opacity-70"
            />
          </div>
        </motion.a>
      </div>
    </div>
  );
}


