import GutSymbol from '@/assets/images/gut_symbol.svg';

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
       <div className="absolute bottom-0 right-0 z-10">
          <img
            src={GutSymbol}
            alt="Gut Symbol"
            className="w-full h-full object-contain"
          />
        </div>
      <div className="relative mx-auto max-w-[1200px] px-6 pt-16 pb-12 md:pt-24 md:pb-16">
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


