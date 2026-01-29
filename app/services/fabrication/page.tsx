import type { Metadata } from 'next';
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: 'Custom Fabrication Grande Prairie | TIG Welding & Turbo Manifolds',
    description: 'Precision TIG welding and custom fabrication in Grande Prairie. Specializing in turbo manifolds, stainless exhausts, and aluminum repair.',
    keywords: 'Custom Fabrication Grande Prairie, TIG Welding Alberta, Aluminum Boat Repair, Turbo Manifold Fabrication',
};

export default function FabricationPage() {
    // 1. The Process Timeline
    const timeline = [
        { title: "Consultation & Scan", description: "Measurement / 3D Scanning to define packaging constraints." },
        { title: "CAD & Material Selection", description: "Design validation. Choosing Schedule 10/40 vs. Thin Wall." },
        { title: "Precision TIG Welding", description: "Strict back-purging protocols. Sanitary welds. Void-free penetration." },
        { title: "Finish & QC", description: "Pressure testing, surfacing flanges, and Cerakote options." },
    ];

    // 2. Technical Specifications (Expanded for Authority)
    const specs = [
        { label: "Weld Process", value: "GTAW (TIG) Only" },
        { label: "Exhaust Material", value: "304 / 321 Stainless (Sch 10/40)" },
        { label: "Purge Gas", value: "99.998% Argon" },
        { label: "Intake Material", value: "6061-T6 Aluminum" },
        { label: "Tolerance", value: "+/- 0.030\"" },
        { label: "Filler Rod", value: "ER308L / ER4043 / ER70S-2" },
    ];

    // 4. Material Expertise (The Icons)
    const materials = [
        { symbol: "SS", name: "304/321 Stainless", number: "Exhaust Systems" },
        { symbol: "Al", name: "6061 Aluminum", number: "Intake & Cooling" },
        { symbol: "Ti", name: "Titanium", number: "Exotic Exhausts" },
        { symbol: "In", name: "Inconel 625", number: "High-Heat Turbo" },
    ];

    return (
        <ServicePageLayout
            title="Custom Fabrication"
            subtitle="Exhausts / Manifolds / Chassis"
            heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
            timelineSteps={timeline}
            specs={specs}
            materials={materials}
            leadTime="3-4 Weeks"
        >
            {/* 2. The "Capabilities" Grid (Data Props) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-4">
                        Turbo Systems
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Schedule 10/40 Manifolds</li>
                        <li>• Custom Downpipes (3" - 5")</li>
                        <li>• Wastegate Dump Tubes</li>
                        <li>• V-Band Conversions</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-green-500 pl-4">
                        Intake & Cooling
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Aluminum Intercooler Piping</li>
                        <li>• Custom End Tanks</li>
                        <li>• Bead Rolling & Vanjen Clamps</li>
                        <li>• Pie-Cut Titanium Intakes</li>
                    </ul>
                </div>
                <div className="md:col-span-2 bg-gradient-to-r from-blue-900/20 to-transparent p-6 border border-blue-500/30">
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="text-blue-400">⚡</span> Welding Repair Services
                    </h3>
                    <p className="text-stainless mb-4 text-sm max-w-2xl">
                        We serve the local industrial and recreational market with the same precision we apply to race cars.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white font-mono">
                        <div className="bg-carbon border border-white/10 p-3">Aluminum Boat Hulls</div>
                        <div className="bg-carbon border border-white/10 p-3">Cast Iron Restoration</div>
                        <div className="bg-carbon border border-white/10 p-3">Structural Steel / Chromoly</div>
                    </div>
                </div>
            </div>

            {/* 3. The "Technical Deep Dive" (The Science) */}
            <div className="mb-12">
                <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-6">Why We Back-Purge</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-light">
                        <strong className="text-white font-bold">Oxidation is the enemy.</strong> At DudeRacing, all stainless steel exhaust components are back-purged with argon. This prevents "sugaring" (internal crystallization) inside the pipe, ensuring laminar flow and preventing structural cracking under thermal cycling.
                    </p>
                    <p className="text-stainless text-base mt-4">
                        Many shops skip this step to save gas and time. We don't. A weld that looks good on the outside but is crystallized on the inside creates turbulence and weak points. Whether it's a 700hp manifold or a simple exhaust repair, the atmosphere is purged before the arc is struck.
                    </p>
                </div>
            </div>

        </ServicePageLayout>
    );
}
