import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar />
      <main className="pb-0">
        <div className="flex flex-col items-center gap-[60px] px-0 md:gap-20">
          <section className="max-w-3xl w-full px-6 py-16">
            <h1 className="text-3xl font-semibold text-brand-primary-700">
              Contact Us
            </h1>
            <div className="mt-6 space-y-3 text-brand-primary-700/80">
              <p>
                We’d love to hear from you. Reach us via phone or email, or
                visit our address below. h
              </p>
              <p>
                222 222/2 222/1 ถนน พุทธมณฑลสาย 1 แขวง บางระมาด เขตตลิ่งชัน
                กรุงเทพมหานคร 10170
              </p>
              <p>Phone: 0805361019</p>
              <p>Email: shop@proveplus-th.com</p>
              <div className="pt-4">
                <h2 className="text-xl font-semibold text-brand-primary-700">
                  Follow us
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/share/14JJxjH6w57/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Facebook"
                  >
                    <Facebook
                      className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105"
                      fill="currentColor"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/proveplus_th/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@proveplus?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="TikTok"
                  >
                    <svg
                      className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105"
                      viewBox="0 0 22 23"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.4362 6.26399C15.4786 5.63961 14.7874 4.6406 14.5718 3.47602C14.5252 3.2244 14.4996 2.96545 14.4996 2.70049H11.4433L11.4384 14.9493C11.387 16.321 10.258 17.4219 8.87408 17.4219C8.44394 17.4219 8.03892 17.3144 7.68231 17.1267C6.86454 16.6964 6.3049 15.8392 6.3049 14.8528C6.3049 13.436 7.45749 12.2835 8.87408 12.2835C9.13852 12.2835 9.3922 12.3271 9.63215 12.4023V9.28204C9.38383 9.24823 9.13152 9.22709 8.87408 9.22709C5.77209 9.22709 3.24854 11.7508 3.24854 14.8528C3.24854 16.756 4.19943 18.4402 5.65012 19.4587C6.56388 20.1002 7.67536 20.4783 8.87408 20.4783C11.9761 20.4783 14.4996 17.9547 14.4996 14.8528V8.64154C15.6984 9.50193 17.167 10.0089 18.7518 10.0089V6.95258C17.8981 6.95258 17.103 6.69879 16.4362 6.26399Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://line.me/R/ti/p/@491uyure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-8 h-8 bg-brand-primary-300 rounded-[20px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Line OA"
                  >
                    <MessageCircle className="w-5 h-5 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


