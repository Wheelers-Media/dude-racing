import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import MacroStrip from "@/components/MacroStrip";
import FreshFromBench from "@/components/FreshFromBench";

export default function Home() {
  return (
    <main className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <MacroStrip />
      <ServiceGrid />
      <FreshFromBench />
      <Philosophy />
      <Footer />
    </main>
  );
}
