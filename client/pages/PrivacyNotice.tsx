import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pb-0">
        <div className="flex flex-col items-center gap-[60px] px-0 md:gap-20">
          <section className="max-w-3xl w-full px-6 py-16">
            <h1 className="text-3xl font-semibold text-brand-primary-700">
              Privacy Notice
            </h1>
            <p className="mt-4 text-brand-primary-700/70">
              This page is under construction.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


