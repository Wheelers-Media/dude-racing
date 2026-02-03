import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import MacroStrip from "@/components/MacroStrip";
import FreshFromBench from "@/components/FreshFromBench";
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

      {/* Mobile Service Banner */}
      <section className="bg-white text-black py-16 border-y border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest mb-2">
              We Come To You
            </h3>
            <p className="text-neutral-600 font-mono text-sm uppercase tracking-wide">
              Mobile TIG Welding & Hoist Service available for heavy equipment and immovable projects.
            </p>
          </div>
          <a
            href="/services/mobile-repair"
            className="bg-black text-white font-heading font-bold uppercase px-8 py-4 tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Request Mobile Unit
          </a>
        </div>
      </section>

      <FreshFromBench />
      <Philosophy />
      <Footer />
    </main>
  );
}
