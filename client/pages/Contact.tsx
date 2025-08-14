import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                visit our address below.
              </p>
              <p>
                222 222/2 222/1 ถนน พุทธมณฑลสาย 1 แขวง บางระมาด เขตตลิ่งชัน
                กรุงเทพมหานคร 10170
              </p>
              <p>Phone: 0805361019</p>
              <p>Email: shop@proveplus-th.com</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


