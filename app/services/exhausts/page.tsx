import type { Metadata } from 'next';
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: 'Performance Exhaust Systems | Custom Stainless Headers & Downpipes',
    description: 'Custom 304/321 stainless steel exhaust systems, turbo manifolds, and downpipes. TIG welded and back-purged for maximum durability and performance.',
    keywords: 'Custom Exhaust Grande Prairie, Stainless Headers, Turbo Downpipe, Valved Exhaust',
};

export default function ExhaustsPage() {
    // 1. Process Timeline
    const timeline = [
        { title: "Mockup & Routing", description: "3D scanning or physical tack-up to ensure perfect fitment and ground clearance." },
        { title: "Sanitary TIG Welding", description: "100% Back-purged with Argon to prevent oxidation (sugaring) inside the pipe." },
        { title: "Installation & Hangers", description: "Polyeurethane hangers and V-Band clamps for a rattle-free, serviceable system." },
        { title: "Valve Integration", description: "Optional electronic cutouts for 'Street' and 'Race' modes." },
    ];

    // 2. Technical Specifications
    const specs = [
        { label: "Material", value: "304 / 321 Stainless Steel" },
        { label: "Weld Process", value: "TIG (GTAW) w/ Back-Purge" },
        { label: "Tube Sizing", value: "2.5\" / 3.0\" / 3.5\" / 4.0\"" },
        { label: "Flanges", value: "V-Band Clamps (No Gaskets)" },
        { label: "Finish", value: "Raw Brushed or Cerakote" },
        { label: "Warranty", value: "Lifetime on Welds" },
    ];

    // 4. Material Expertise
    const materials = [
        { symbol: "304", name: "304 Stainless", number: "Standard Street" },
        { symbol: "321", name: "321 Stainless", number: "High Heat Turbo" },
        { symbol: "Ti", name: "Titanium", number: "Race Lightweight" },
    ];

    return (
        <ServicePageLayout
            title="Performance Exhaust Systems"
            subtitle="TIG WELDED / BACK-PURGED / 304 STAINLESS"
            heroImage="/exhaust-systems.jpg"
            overlayClassName="bg-black/70"
            heroImagePosition="center 25%"
            timelineSteps={timeline}
            specs={specs}
            materials={materials}
            leadTime="2-3 Weeks"
        >
            {/* 2. Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-500 pl-4">
                        Custom Systems
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Cat-Back & Axle-Back Systems</li>
                        <li>• Valved Exhausts (Quiet/Loud)</li>
                        <li>• 3.5" - 4" Diesel Exhausts</li>
                        <li>• Pie-Cut / Mandrel Bent</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-4">
                        Turbo Components
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• 3" - 5" Downpipes</li>
                        <li>• Screamer Pipes / Dump Tubes</li>
                        <li>• Wastegate Recirculation</li>
                        <li>• Up-Pipes & Crossovers</li>
                    </ul>
                </div>
                <div className="md:col-span-2 bg-gradient-to-r from-neutral-800 to-transparent p-6 border border-white/10">
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4">
                        Pricing Guide
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-mono">
                        <div className="bg-carbon border border-white/10 p-4">
                            <span className="block text-stainless text-xs mb-1">Axle-Back</span>
                            <span className="text-white text-lg">$1,200+</span>
                        </div>
                        <div className="bg-carbon border border-white/10 p-4 bg-white/5 border-white/20">
                            <span className="block text-stainless text-xs mb-1">Cat-Back</span>
                            <span className="text-white text-lg">$2,000 - $3,500</span>
                        </div>
                        <div className="bg-carbon border border-white/10 p-4">
                            <span className="block text-stainless text-xs mb-1">Turbo Back</span>
                            <span className="text-white text-lg">$3,500+</span>
                        </div>
                        <div className="bg-carbon border border-white/10 p-4">
                            <span className="block text-stainless text-xs mb-1">Headers/Manifold</span>
                            <span className="text-white text-lg">$2,500+</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Technical Deep Dive */}
            <div className="mb-12">
                <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-6">Why 304 Stainless?</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-light">
                        We don't use unexpected aluminized steel that rots out in 2 years. We exclusively build with <strong>304 and 321 Stainless Steel</strong>.
                    </p>
                    <p className="text-stainless text-base mt-4">
                        Combined with our strict back-purging process, this ensures your exhaust system will likely outlast the vehicle itself. Corrosion resistance, thermal stability, and a sound that simply cannot be replicated by cheaper materials.
                    </p>
                </div>
            </div>
        </ServicePageLayout>
    );
}
