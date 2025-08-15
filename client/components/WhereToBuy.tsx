import shopeeLogo from "@/assets/images/shopee-logo.png";
import lazadaLogo from "@/assets/images/lazada-logo.png";
import tiktokLogo from "@/assets/images/tiktok-logo.png";

export default function WhereToBuy() {
  return (
    <div
      id="where-to-buy"
      className="flex flex-col items-center gap-[50px] px-6 w-full py-6 justify-center h-[80%]"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-700 leading-[150%] text-outfit">
          Where to Buy
        </h2>
        <p className="text-base md:text-lg text-brand-primary-400 leading-[150%] font-normal text-fc-orbit">
          Once we launch, you'll be able to shop from your favorite platforms.
        </p>
      </div>

      <div className="flex flex-col items-start gap-[44.727px] w-full max-w-[246px]">
        <div className="relative w-full">
          <div
            className="absolute inset-0 rounded-[6.578px] opacity-60 blur-[13.155px]"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 63.33%, rgba(255, 70, 64, 0.12) 54.6deg, rgba(255, 70, 64, 0.30) 167.4deg, rgba(255, 70, 64, 0.60) 216deg, rgba(254, 149, 14, 0.60) 236.1deg, rgba(255, 70, 64, 0.30) 260deg, rgba(56, 61, 91, 0.00) 311.1deg)",
            }}
          />
          <div className="relative flex items-center justify-center w-full h-[118px] bg-gradient-to-b from-white/80 to-white/60 rounded-[15.786px] border border-white/10 backdrop-blur-[6.578px] shadow-[2.631px_2.631px_26.31px_0_rgba(0,0,0,0.04)]">
            <img
              src={(shopeeLogo as unknown as { src: string }).src ?? (shopeeLogo as unknown as string)}
              alt="Shopee"
              className="w-[148px] h-[47px] object-contain"
            />
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex items-center justify-center w-full h-[118px] bg-gradient-to-b from-white/80 to-white/60 rounded-[15.786px] border border-white/10 backdrop-blur-[6.578px] shadow-[2.631px_2.631px_26.31px_0_rgba(0,0,0,0.04)]">
            <img
              src={(lazadaLogo as unknown as { src: string }).src ?? (lazadaLogo as unknown as string)}
              alt="Lazada"
              className="w-[149px] h-[47px] object-contain opacity-70"
            />
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex items-center justify-center w-full h-[118px] bg-gradient-to-b from-white/80 to-white/60 rounded-[15.786px] border border-white/10 backdrop-blur-[6.578px] shadow-[2.631px_2.631px_26.31px_0_rgba(0,0,0,0.04)]">
            <img
              src={(tiktokLogo as unknown as { src: string }).src ?? (tiktokLogo as unknown as string)}
              alt="TikTok"
              className="w-[149px] h-[43px] object-contain opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


