import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import WhereToBuy from "../components/WhereToBuy";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="h-screen overflow-y-auto snap-y snap-mandatory pb-0 scroll-smooth">
        <div className="flex flex-col items-center gap-[60px] px-0 md:gap-20">
          <section className="snap-start w-full h-screen">
            <HeroImage />
          </section>
          <section className="snap-start w-full h-screen">
            <WhereToBuy />
          </section>
          <section className="snap-start w-full">
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}
