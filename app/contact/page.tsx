'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/client/components/ui/card';
import { Separator } from '@/client/components/ui/separator';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar />
      <main className="pb-0">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 max-w-6xl">
          {/* Social Media Section - First Priority */}
          <Card className="border-brand-primary-200 shadow-lg rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] mb-8 sm:mb-12">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-brand-primary-700 text-center text-xl sm:text-2xl lg:text-3xl">
                Connect With Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-center text-brand-primary-700/80 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg px-2">
                Follow us on social media for the latest updates, products, and news
              </p>
              <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
                <a
                  href="https://www.facebook.com/share/14JJxjH6w57/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-brand-primary-300 rounded-[28px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Facebook"
                >
                  <Facebook className="w-7 h-7 sm:w-6 sm:h-6 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" fill="currentColor" />
                </a>
                <a
                  href="https://www.instagram.com/proveplus_th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-brand-primary-300 rounded-[28px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 sm:w-6 sm:h-6 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" />
                </a>
                <a
                  href="https://www.tiktok.com/@proveplus?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-brand-primary-300 rounded-[28px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="TikTok"
                >
                  <svg className="w-7 h-7 sm:w-6 sm:h-6 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" viewBox="0 0 22 23" fill="currentColor" aria-hidden="true">
                    <path d="M16.4362 6.26399C15.4786 5.63961 14.7874 4.6406 14.5718 3.47602C14.5252 3.2244 14.4996 2.96545 14.4996 2.70049H11.4433L11.4384 14.9493C11.387 16.321 10.258 17.4219 8.87408 17.4219C8.44394 17.4219 8.03892 17.3144 7.68231 17.1267C6.86454 16.6964 6.3049 15.8392 6.3049 14.8528C6.3049 13.436 7.45749 12.2835 8.87408 12.2835C9.13852 12.2835 9.3922 12.3271 9.63215 12.4023V9.28204C9.38383 9.24823 9.13152 9.22709 8.87408 9.22709C5.77209 9.22709 3.24854 11.7508 3.24854 14.8528C3.24854 16.756 4.19943 18.4402 5.65012 19.4587C6.56388 20.1002 7.67536 20.4783 8.87408 20.4783C11.9761 20.4783 14.4996 17.9547 14.4996 14.8528V8.64154C15.6984 9.50193 17.167 10.0089 18.7518 10.0089V6.95258C17.8981 6.95258 17.103 6.69879 16.4362 6.26399Z" />
                  </svg>
                </a>
                <a
                  href="https://line.me/R/ti/p/@491uyure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-brand-primary-300 rounded-[28px] shadow-[0_1.333px_6.667px_0_rgba(138,0,75,0.02),0_2.667px_40px_0_rgba(138,0,75,0.04)] backdrop-blur-[21.333px] hover:bg-brand-primary-400 transition-transform transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Line OA"
                >
                  <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6 text-brand-primary-700 group-hover:text-brand-white transform group-hover:scale-105" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary-700 mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-brand-primary-700/80 max-w-2xl mx-auto px-2">
              We'd love to hear from you. Reach out to us through any of the 
              channels below or visit us at our location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Contact Information Card */}
            <Card className="border-brand-primary-200 shadow-lg rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-brand-primary-700 flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                {/* Address */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-brand-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-primary-700 mb-2 text-base sm:text-lg">Address</h3>
                    <p className="text-brand-primary-700/80 leading-relaxed text-sm sm:text-base">
                      222 222/2 222/1 ถนน พุทธมณฑลสาย 1<br />
                      แขวง บางระมาด เขตตลิ่งชัน<br />
                      กรุงเทพมหานคร 10170
                    </p>
                  </div>
                </div>

                <Separator className="bg-brand-primary-100" />

                {/* Phone */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-brand-primary-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-primary-700 mb-2 text-base sm:text-lg">Phone</h3>
                    <a 
                      href="tel:0805361019" 
                      className="text-brand-primary-700/80 hover:text-brand-primary-600 transition-colors text-sm sm:text-base"
                    >
                      0805361019
                    </a>
                  </div>
                </div>

                <Separator className="bg-brand-primary-100" />

                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-brand-primary-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-brand-primary-700 mb-2 text-base sm:text-lg">Email</h3>
                    <a 
                      href="mailto:shop@proveplus-th.com" 
                      className="text-brand-primary-700/80 hover:text-brand-primary-600 transition-colors text-sm sm:text-base break-all"
                    >
                      shop@proveplus-th.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="border-brand-primary-200 shadow-lg rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-brand-primary-700 flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 gap-1 sm:gap-0">
                  <span className="text-brand-primary-700/80 text-sm sm:text-base">Monday - Friday</span>
                  <span className="text-brand-primary-700 font-medium text-sm sm:text-base">9:00 AM - 6:00 PM</span>
                </div>
                <Separator className="bg-brand-primary-100" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 gap-1 sm:gap-0">
                  <span className="text-brand-primary-700/80 text-sm sm:text-base">Saturday</span>
                  <span className="text-brand-primary-700 font-medium text-sm sm:text-base">9:00 AM - 4:00 PM</span>
                </div>
                <Separator className="bg-brand-primary-100" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 gap-1 sm:gap-0">
                  <span className="text-brand-primary-700/80 text-sm sm:text-base">Sunday</span>
                  <span className="text-brand-primary-700 font-medium text-sm sm:text-base">Closed</span>
                </div>
                
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-brand-primary-50 rounded-[12px] sm:rounded-[16px]">
                  <p className="text-sm sm:text-base text-brand-primary-700/80">
                    <strong>Note:</strong> We're also available through our social media 
                    channels for quick inquiries and support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


