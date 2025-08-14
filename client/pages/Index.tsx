import { ArrowRight, Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[343px]">
        <div className="flex justify-between items-center bg-white/30 backdrop-blur-[20px] border border-white rounded-[60px] px-6 py-4 h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg
              width="106"
              height="30"
              viewBox="0 0 106 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_logo)">
                <path
                  d="M4.89422 20.7196V30.0001H0V3.88352H4.89422V5.47389C4.97466 5.5683 5.98936 4.68844 6.1764 4.57261C11.875 1.03662 18.6678 6.02283 19.0535 12.2957C19.5468 20.3128 11.6163 25.8265 4.89325 20.7206L4.89422 20.7196ZM5.86724 9.49848C3.34648 12.1264 4.70232 17.6839 8.66519 18.0674C15.8398 18.7614 15.771 7.2852 8.54598 8.13976C7.65533 8.24487 6.48556 8.85318 5.86724 9.49848Z"
                  fill="#4556A4"
                />
                <path
                  d="M90.9373 14.7532L77.4458 14.8885C78.4837 19.1633 84.2298 19.5691 86.9037 16.6132L89.7385 19.4796C86.7225 23.4575 80.2117 23.5743 76.3458 20.8286C69.7962 16.1782 71.8547 5.58866 79.6457 3.76859C86.7448 2.11009 92.2631 7.66665 90.9373 14.7532ZM86.3086 11.1744C85.7107 6.20573 78.3568 6.61646 77.4458 11.1744H86.3086Z"
                  fill="#4556A4"
                />
                <path
                  d="M43.5045 3.5252C56.8933 2.35919 58.1251 21.9235 45.0503 22.706C32.3622 23.4662 30.8299 4.62795 43.5045 3.5252ZM43.7662 8.16297C38.305 8.79854 38.3118 17.6702 44.1277 18.0663C50.9844 18.5335 50.9767 7.32496 43.7662 8.16297Z"
                  fill="#4556A4"
                />
                <path
                  d="M58.7827 3.88354L63.2147 15.5515L67.8443 3.88354H73.069L64.807 22.3207L61.3617 22.1796L53.3594 3.88354H58.7827Z"
                  fill="#4556A4"
                />
                <path
                  d="M100.821 1.70911V3.91364C100.821 4.85774 101.583 5.62275 102.523 5.62275H104.298C105.238 5.62275 106 6.38776 106 7.33186V7.48175C106 8.42585 105.238 9.19086 104.298 9.19086H102.523C101.583 9.19086 100.821 9.95588 100.821 10.9V13.1045C100.821 14.0486 100.059 14.8136 99.1192 14.8136H98.9622C98.0221 14.8136 97.2604 14.0486 97.2604 13.1045V10.9C97.2604 9.95588 96.4986 9.19086 95.5585 9.19086H93.6755C92.7354 9.19086 91.9736 8.42585 91.9736 7.48175V7.33186C91.9736 6.38776 92.7354 5.62275 93.6755 5.62275H95.5585C96.4986 5.62275 97.2604 4.85774 97.2604 3.91364V1.70911C97.2604 0.765013 98.0221 0 98.9622 0H99.1192C100.059 0 100.821 0.765013 100.821 1.70911Z"
                  fill="#4556A4"
                />
                <path
                  d="M26.3502 3.88342V5.47379C28.525 2.96462 33.2428 2.66679 35.3207 5.40858L32.2369 8.91635C30.7008 7.43012 27.6944 7.82528 26.7631 9.79815C26.6807 9.97237 26.3502 10.8688 26.3502 10.9758V22.3109H21.3232V3.88342H26.3502Z"
                  fill="#4556A4"
                />
              </g>
              <defs>
                <clipPath id="clip0_logo">
                  <rect width="106" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Shop Now Button */}
          <button className="flex items-center gap-1.5 bg-brand-primary-700 text-white px-4 py-1 rounded-full text-base font-bold leading-6 hover:opacity-90 transition-opacity text-outfit">
            Shop now
            <div className="flex items-center justify-center w-5 h-5">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-0">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-[60px] px-0 md:gap-20">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/26fc47f26205ef9b130e457a8a05138cb7eb3622?width=748"
            alt="Prove+ Product"
            className="w-full max-w-[374px] md:max-w-[500px] lg:max-w-[600px] h-auto object-cover"
          />

          {/* Where to Buy Section */}
          <div className="flex flex-col items-center gap-[50px] px-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-1 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-700 leading-[150%] text-outfit">
                Where to Buy
              </h2>
              <p className="text-base md:text-lg text-brand-primary-400 leading-[150%] font-normal text-fc-orbit">
                Once we launch, you'll be able to shop from your favorite
                platforms.
              </p>
            </div>

            {/* Platform Cards */}
            <div className="flex flex-col items-start gap-[44.727px] w-full max-w-[246px]">
              {/* Shopee Card with Glow */}
              <div className="relative w-full">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-[6.578px] opacity-60 blur-[13.155px]"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 63.33%, rgba(255, 70, 64, 0.12) 54.6deg, rgba(255, 70, 64, 0.30) 167.4deg, rgba(255, 70, 64, 0.60) 216deg, rgba(254, 149, 14, 0.60) 236.1deg, rgba(255, 70, 64, 0.30) 260deg, rgba(56, 61, 91, 0.00) 311.1deg)",
                  }}
                />
                {/* Card */}
                <div className="relative flex items-center justify-center w-full h-[118px] bg-gradient-to-b from-white/80 to-white/60 rounded-[15.786px] border border-white/10 backdrop-blur-[6.578px] shadow-[2.631px_2.631px_26.31px_0_rgba(0,0,0,0.04)]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=297"
                    alt="Shopee"
                    className="w-[148px] h-[47px] object-contain"
                  />
                </div>
              </div>

              {/* Lazada Card */}
              <div className="relative w-full">
                <div className="flex items-center justify-center w-full h-[118px] bg-gradient-to-b from-white/80 to-white/60 rounded-[15.786px] border border-white/10 backdrop-blur-[6.578px] shadow-[2.631px_2.631px_26.31px_0_rgba(0,0,0,0.04)]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ab7043a71c040d0d50b5feab93f4b4f2464b9508?width=297"
                    alt="Lazada"
                    className="w-[149px] h-[47px] object-contain opacity-70"
                  />
                </div>
              </div>

              {/* TikTok Card */}
              <div className="relative w-full">
                <div className="flex items-center justify-center w-full h-[118px] bg-gradient-to-b from-white/80 to-white/60 rounded-[15.786px] border border-white/10 backdrop-blur-[6.578px] shadow-[2.631px_2.631px_26.31px_0_rgba(0,0,0,0.04)]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ce421e18c5f4a0e2bad88cf84a04ab2e032bea0b?width=297"
                    alt="TikTok"
                    className="w-[149px] h-[43px] object-contain opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-brand-primary-700 to-brand-primary-400 rounded-t-[40px] shadow-[0_-16px_24px_0_rgba(0,0,0,0.12)] px-10 pt-10 pb-6 mt-16">
        <div className="flex flex-col items-center gap-6 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Footer Logo */}
          <div className="flex flex-col items-center gap-8">
            <svg
              width="295"
              height="84"
              viewBox="0 0 295 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_footer)">
                <path
                  d="M13.6207 57.8719V83.5894H0V11.2163H13.6207V15.6235C13.8446 15.8851 16.6685 13.4468 17.189 13.1259C33.0484 3.32707 51.9528 17.1447 53.0263 34.5279C54.3992 56.7445 32.3283 72.0239 13.618 57.8746L13.6207 57.8719ZM16.3287 26.7762C9.31332 34.0586 13.0867 49.4594 24.1154 50.5221C44.0825 52.4452 43.891 20.6429 23.7836 23.011C21.3049 23.3023 18.0494 24.988 16.3287 26.7762Z"
                  fill="white"
                />
                <path
                  d="M253.08 41.3383L215.533 41.7132C218.422 53.5591 234.413 54.6838 241.855 46.4925L249.744 54.4357C241.35 65.459 223.231 65.7827 212.472 58.174C194.244 45.2869 199.973 15.9417 221.656 10.898C241.413 6.30207 256.77 21.7002 253.08 41.3383ZM240.199 31.4208C238.535 17.6517 218.069 18.7899 215.533 31.4208H240.199Z"
                  fill="white"
                />
                <path
                  d="M121.073 10.2237C158.334 6.9925 161.762 61.2083 125.375 63.3768C90.0635 65.4833 85.7992 13.2796 121.073 10.2237ZM121.801 23.0757C106.602 24.837 106.621 49.4216 122.807 50.5194C141.89 51.814 141.868 20.7535 121.801 23.0757Z"
                  fill="white"
                />
                <path
                  d="M163.594 11.2163L175.928 43.5499L188.812 11.2163H203.353L180.359 62.3087L170.771 61.9176L148.5 11.2163H163.594Z"
                  fill="white"
                />
                <path
                  d="M280.586 5.19081V11.2999C280.586 13.9162 282.706 16.0361 285.323 16.0361H290.264C292.88 16.0361 295 18.1561 295 20.7724V21.1877C295 23.804 292.88 25.9239 290.264 25.9239H285.323C282.706 25.9239 280.586 28.0439 280.586 30.6602V36.7692C280.586 39.3855 278.466 41.5055 275.85 41.5055H275.413C272.797 41.5055 270.677 39.3855 270.677 36.7692V30.6602C270.677 28.0439 268.557 25.9239 265.941 25.9239H260.7C258.084 25.9239 255.964 23.804 255.964 21.1877V20.7724C255.964 18.1561 258.084 16.0361 260.7 16.0361H265.941C268.557 16.0361 270.677 13.9162 270.677 11.2999V5.19081C270.677 2.57456 272.797 0.45459 275.413 0.45459H275.85C278.466 0.45459 280.586 2.57456 280.586 5.19081Z"
                  fill="white"
                />
                <path
                  d="M73.3335 11.2163V15.6235C79.3859 8.67017 92.5157 7.84484 98.2985 15.4428L89.7161 25.1634C85.4411 21.0448 77.0744 22.1398 74.4825 27.607C74.2532 28.0898 73.3335 30.5739 73.3335 30.8706V62.2818H59.3433V11.2163H73.3335Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_footer">
                  <rect
                    width="295"
                    height="83.1348"
                    fill="white"
                    transform="translate(0 0.45459)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* Footer Navigation and Social Icons */}
            <div className="flex justify-between items-start w-full">
              {/* Menu Links */}
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-white text-base font-normal leading-6"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-white text-base font-normal leading-6"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-white text-base font-normal leading-6"
                >
                  Shop now
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px]">
                  <Facebook
                    className="w-5 h-5 text-brand-primary-700"
                    fill="currentColor"
                  />
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px]">
                  <Instagram className="w-5 h-5 text-brand-primary-700" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px]">
                  <svg
                    className="w-5 h-5 text-brand-primary-700"
                    viewBox="0 0 22 23"
                    fill="currentColor"
                  >
                    <path d="M16.4362 6.26399C15.4786 5.63961 14.7874 4.6406 14.5718 3.47602C14.5252 3.2244 14.4996 2.96545 14.4996 2.70049H11.4433L11.4384 14.9493C11.387 16.321 10.258 17.4219 8.87408 17.4219C8.44394 17.4219 8.03892 17.3144 7.68231 17.1267C6.86454 16.6964 6.3049 15.8392 6.3049 14.8528C6.3049 13.436 7.45749 12.2835 8.87408 12.2835C9.13852 12.2835 9.3922 12.3271 9.63215 12.4023V9.28204C9.38383 9.24823 9.13152 9.22709 8.87408 9.22709C5.77209 9.22709 3.24854 11.7508 3.24854 14.8528C3.24854 16.756 4.19943 18.4402 5.65012 19.4587C6.56388 20.1002 7.67536 20.4783 8.87408 20.4783C11.9761 20.4783 14.4996 17.9547 14.4996 14.8528V8.64154C15.6984 9.50193 17.167 10.0089 18.7518 10.0089V6.95258C17.8981 6.95258 17.103 6.69879 16.4362 6.26399Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-2.5 w-full">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-base font-normal leading-6">
                Contact us
              </h3>
              <p className="text-brand-primary-300 text-sm font-normal leading-[150%]">
                222 222/2 222/1 ถนน พุทธมณฑลสาย 1 แขวง
                <br />
                บางระมาด เขตตลิ่งชัน กรุงเทพมหานคร 10170
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-brand-primary-300 text-sm font-normal leading-[150%]">
                0805361019
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-brand-primary-300 text-sm font-normal leading-[150%]">
                shop@proveplus-th.com
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-brand-primary-400 opacity-40" />

          {/* Footer Bottom */}
          <div className="flex flex-col gap-5 items-start w-full">
            <p className="text-brand-primary-300 text-sm font-normal leading-[150%]">
              © proveplus th's 2025
            </p>

            {/* Legal Links */}
            <div className="flex items-center flex-wrap gap-1 text-sm text-brand-primary-300">
              <span>Privacy Notice</span>
              <span>•</span>
              <span>Cookie Notice</span>
              <span>•</span>
              <span>Terms of Use</span>
              <span>•</span>
              <span>Accessibility</span>
              <span>•</span>
              <span>Legal Warning</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
