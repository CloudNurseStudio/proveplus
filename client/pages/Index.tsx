import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import WhereToBuy from "../components/WhereToBuy";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="pb-0">
        <div className="flex flex-col items-center gap-[60px] px-0 md:gap-20">
          <HeroImage />
          <WhereToBuy />
        </div>
      </main>

      <Footer />
    </div>
  );
}
