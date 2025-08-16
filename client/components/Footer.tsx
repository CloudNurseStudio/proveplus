import { Facebook, Instagram, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-primary-700 to-brand-primary-400 rounded-t-[40px] shadow-[0_-16px_24px_0_rgba(0,0,0,0.12)] px-6 sm:px-8 lg:px-10 pt-10 pb-8 mt-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-8 md:items-start">
          <div className="flex justify-center md:justify-start h-full items-center">
            {/* logo */}
            <a href="/" aria-label="Home" className="inline-block">
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
            </a>
          </div>

          <div className="flex flex-col gap-8 w-full items-center md:items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2 items-center sm:items-start text-center sm:text-left">
                {/* <a href="#" className="text-white text-base font-normal leading-6">About us</a> */}
                <a href="/contact" className="text-white text-base font-normal leading-6">Contact Us</a>
                <a href="/#where-to-buy" className="text-white text-base font-normal leading-6">Shop now</a>
              </div>

              <div className="flex flex-row sm:flex-col items-center justify-center sm:justify-end sm:items-end gap-3">
                <a href="https://www.facebook.com/share/14JJxjH6w57/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/proveplus_th/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" />
                </a>
                <a href="https://www.tiktok.com/@proveplus?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="TikTok">
                  <svg className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" viewBox="0 0 22 23" fill="currentColor" aria-hidden="true">
                    <path d="M16.4362 6.26399C15.4786 5.63961 14.7874 4.6406 14.5718 3.47602C14.5252 3.2244 14.4996 2.96545 14.4996 2.70049H11.4433L11.4384 14.9493C11.387 16.321 10.258 17.4219 8.87408 17.4219C8.44394 17.4219 8.03892 17.3144 7.68231 17.1267C6.86454 16.6964 6.3049 15.8392 6.3049 14.8528C6.3049 13.436 7.45749 12.2835 8.87408 12.2835C9.13852 12.2835 9.3922 12.3271 9.63215 12.4023V9.28204C9.38383 9.24823 9.13152 9.22709 8.87408 9.22709C5.77209 9.22709 3.24854 11.7508 3.24854 14.8528C3.24854 16.756 4.19943 18.4402 5.65012 19.4587C6.56388 20.1002 7.67536 20.4783 8.87408 20.4783C11.9761 20.4783 14.4996 17.9547 14.4996 14.8528V8.64154C15.6984 9.50193 17.167 10.0089 18.7518 10.0089V6.95258C17.8981 6.95258 17.103 6.69879 16.4362 6.26399Z" />
                  </svg>
                </a>
                <a href="https://line.me/R/ti/p/@491uyure" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" aria-label="Line OA">
                  <MessageCircle className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" />
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>

        <div className="w-full h-px bg-brand-primary-400 opacity-40 mt-10 mb-3" />

        {/* bottom: copyright and legal links */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 w-full">
          <p className="text-brand-primary-300 text-sm font-normal leading-[150%] text-center md:text-left">
            © proveplus th's 2025
          </p>

          <div className="flex items-center flex-wrap justify-center md:justify-end gap-x-2 gap-y-1 text-sm text-brand-primary-300">
            <a href="/privacy-notice" className="hover:underline">Privacy Notice</a>
            <span>•</span>
            <a href="/cookie-notice" className="hover:underline">Cookie Notice</a>
            <span>•</span>
            <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
            <span>•</span>
            <a href="/accessibility" className="hover:underline">Accessibility</a>
            <span>•</span>
            <a href="/legal-warning" className="hover:underline">Legal Warning</a>
          </div>
        </div>
    </footer>
  );
}


