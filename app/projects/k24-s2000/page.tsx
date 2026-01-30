import CaseStudyLayout from "@/components/CaseStudyLayout";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Image from "next/image";

export default function K24S2000Page() {
    const specs = [
        { label: "Engine", value: "Honda K24A2 (Built)" },
        { label: "Turbo", value: "BorgWarner EFR 8374" },
        { label: "Manifold", value: "DudeRacing Sidewinder (304SS)" },
        { label: "ECU", value: "Haltech Elite 1500" },
        { label: "Power", value: "704whp @ 24psi" },
        { label: "Fuel", value: "E85 Flex Fuel" },
        { label: "Transmission", value: "BMW ZF 5-Speed" },
    ];

    return (
        <CaseStudyLayout
            title="The K24 S2000"
            subtitle="700WHP Street Build // Custom Sidewinder Manifold"
            heroImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop"
            specs={specs}
        >

            {/* Section A: The Challenge */}
            <section>
                <span className="text-stainless text-xs uppercase tracking-[0.2em] block mb-4">Phase 1</span>
                <h2 className="text-4xl font-heading text-white uppercase mb-8">The Challenge</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        The client approached us with a clear but difficult goal: <strong>700 wheel horsepower</strong> in a street-driven Honda S2000, while retaining full air conditioning and power steering. In the tight confines of the S2000 engine bay, space is the enemy.
                    </p>
                    <p>
                        Standard off-the-shelf turbo kits required sacrificing the A/C compressor or relocating the battery to the trunk—compromises the client wasn&apos;t willing to make. We needed a clean-sheet design.
                    </p>
                </div>
            </section>

            {/* Section B: The Fabrication (Process) */}
            <section>
                <span className="text-stainless text-xs uppercase tracking-[0.2em] block mb-4">Phase 2</span>
                <h2 className="text-4xl font-heading text-white uppercase mb-8">Precision Fabrication</h2>

                {/* Masonry Grid Placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
                    <div className="bg-carbon border border-white/10 h-full relative group overflow-hidden">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-white">Mockup Phase</div>
                    </div>
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 bg-carbon border border-white/10 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-white">Back-Purged TIG</div>
                        </div>
                        <div className="flex-1 bg-carbon border border-white/10 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535136829763-eb5e638d01eb?q=80&w=2056&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-white">3.5&quot; Downpipe</div>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none mt-8">
                    <p>
                        We engineered a custom &quot;Sidewinder&quot; style manifold using SCH10 304 Stainless Steel. By carefully routing the runners forward and mounting the BorgWarner EFR 8374 aside the engine block, we cleared the OEM A/C lines and the frame rail.
                    </p>
                </div>
            </section>

            {/* Section C: The Transformation */}
            <section>
                <span className="text-stainless text-xs uppercase tracking-[0.2em] block mb-4">Phase 3</span>
                <h2 className="text-4xl font-heading text-white uppercase mb-8">The Transformation</h2>

                <BeforeAfterSlider
                    beforeImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2664&auto=format&fit=crop" // Placeholder "Stock"
                    afterImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop"   // Placeholder "Built"
                    beforeLabel="Stock F20C"
                    afterLabel="Turbo K24"
                />
                <p className="text-stainless text-sm mt-4 font-mono text-center">Drag the slider to compare.</p>
            </section>

            {/* Gallery Payoff */}
            <section>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-full aspect-square">
                        <Image src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45f7?q=80&w=1936&auto=format&fit=crop" alt="Gallery 1" fill className="object-cover grayscale hover:grayscale-0 transition-all" unoptimized />
                    </div>
                    <div className="relative w-full aspect-square">
                        <Image src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" alt="Gallery 2" fill className="object-cover grayscale hover:grayscale-0 transition-all" unoptimized />
                    </div>
                </div>
            </section>

        </CaseStudyLayout>
    );
}
