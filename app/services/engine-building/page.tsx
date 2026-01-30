import type { Metadata } from 'next';
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: 'Performance Engine Building Grande Prairie | K-Swap & LS Specialists',
    description: 'Performance engine building and swaps in Grande Prairie. K-Series, LS, and JZ specialists. Complete blueprinting and assembly services.',
    keywords: 'Engine Building Grande Prairie, K-Swap Alberta, LS Swap Shop, Performance Engine Rebuild',
};

export default function EngineBuildingPage() {
    // 1. The Process (The "Safety" Timeline)
    const timeline = [
        { title: "Goals & Spec", description: "Defining horsepower targets, usage (Street/Track), and budget constraints." },
        { title: "Teardown & Magnaflux", description: "Complete disassembly and crack checking. No assumption is safe." },
        { title: "Machining & Prep", description: "Decking, line honing, and cylinder boring to exact gasket-matched tolerances." },
        { title: "Assembly Room", description: "The Clean Room. File-fit rings, bearing clearances measured to .0001\"." },
        { title: "Break-In Procedure", description: "First start protocol, detailed break-in oil schedule, and initial datalog." },
    ];

    // 2. Technical Specifications (Blueprinting Focused)
    const specs = [
        { label: "Clearance Tolerance", value: "+/- 0.0001\"" },
        { label: "Piston-to-Wall", value: "Application Specific" },
        { label: "Ring Gaps", value: "File-Fit for Boost/NA" },
        { label: "Balancing", value: "Rotating Assembly Dynamic" },
        { label: "Assembly Lube", value: "Red Line / Torco" },
        { label: "Fasteners", value: "ARP 2000 / CA625+" },
    ];

    // 4. Material Expertise (Adapted for Engines)
    const materials = [
        { symbol: "Al", name: "Forged Al", number: "Pistons & Rods" },
        { symbol: "Cr", name: "4340 Chromoly", number: "Cranks & Studs" },
        { symbol: "Ti", name: "Titanium", number: "Retainers / Valves" },
        { symbol: "Fe", name: "Ductile Iron", number: "Sleeves / Liners" },
    ];

    return (
        <ServicePageLayout
            title="Performance Engine Builds"
            subtitle="Blueprinting / Swaps / Forged Internals"
            heroImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2664&auto=format&fit=crop" // Clean engine bay/block shot
            timelineSteps={timeline}
            specs={specs}
            materials={materials}
            leadTime="4-6 Weeks"
        >
            {/* 2. The "Capabilities" Grid (Data Props) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-4">
                        Full Swaps
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• K-Series (K20/K24)</li>
                        <li>• LS / LT Swaps</li>
                        <li>• 2JZ / RB Packages</li>
                        <li>• Wiring & ECU Integration</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-4">
                        Short Block Assembly
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Forged Pistons & Rods</li>
                        <li>• Dynamic Balancing</li>
                        <li>• Bearing Clearance Blueprinting</li>
                        <li>• Closed Deck Conversions</li>
                    </ul>
                </div>
                <div className="md:col-span-2 bg-gradient-to-r from-red-900/20 to-transparent p-6 border border-red-500/30">
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="text-red-400">⚙️</span> Cylinder Head Games
                    </h3>
                    <p className="text-stainless mb-4 text-sm max-w-2xl">
                        Airflow is power. We unlock efficiency through precision valvetrain work.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white font-mono">
                        <div className="bg-carbon border border-white/10 p-3">Multi-Angle Valve Jobs</div>
                        <div className="bg-carbon border border-white/10 p-3">Camshaft Degreeing</div>
                        <div className="bg-carbon border border-white/10 p-3">Port Matching / Polishing</div>
                    </div>
                </div>
            </div>

            {/* 3. The "Technical Deep Dive" (The Trust Builder) */}
            <div className="mb-12">
                <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-6">The Blueprinting Standard</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-light">
                        <strong className="text-white font-bold">An engine is only as reliable as its measurements.</strong> We don&apos;t just assemble; we blueprint. Every bearing clearance, ring gap, and torque spec is measured and recorded. We define &quot;success&quot; in ten-thousandths of an inch.
                    </p>
                    <p className="text-stainless text-base mt-4">
                        The factory tolerance is &quot;safe for mass production.&quot; Our tolerance is &quot;safe for 8,000 RPM.&quot; By meticulously checking mains, rods, and thrust prior to final assembly, we eliminate the variables that cause premature failure. You aren&apos;t paying for parts installation; you&apos;re paying for peace of mind.
                    </p>
                </div>
            </div>

        </ServicePageLayout>
    );
}
