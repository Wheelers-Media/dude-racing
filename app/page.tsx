import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import MacroStrip from "@/components/MacroStrip";
import FreshFromBench from "@/components/FreshFromBench";
import MobileFeature from "@/components/home/MobileFeature";
import fs from "fs";
import path from "path";

export default async function Home() {
  const landingPageDir = path.join(process.cwd(), "public", "LandingPage");
  let images: string[] = [];

  try {
    if (fs.existsSync(landingPageDir)) {
      const files = fs.readdirSync(landingPageDir);
      images = files
        .filter((file) => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
        .map((file) => `/LandingPage/${file}`);
    }
  } catch (error) {
    console.error("Error reading LandingPage images:", error);
  }

  return (
    <main className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <MacroStrip images={images} />
      <ServiceGrid />

      <MobileFeature />

      <FreshFromBench />
      <Philosophy />
      <Footer />
    </main>
  );
}
