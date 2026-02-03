import type { Metadata } from 'next';
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: 'Premium Enclosed Car Transport Grande Prairie | Race Car Hauling',
    description: 'Premium enclosed vehicle transport serving Grande Prairie and Alberta. Specialized low-clearance ramps and fully insured hauling for race cars and customs.',
    keywords: 'Enclosed Car Transport Grande Prairie, Race Car Hauling Alberta, Luxury Vehicle Shipping YQU',
};

export default function TransportPage() {
    // 1. The Process (Logistics Timeline)
    const timeline = [
        { title: "Schedule & Quote", description: "Route planning and scheduling via dispatch. Transparent pricing." },
        { title: "Pre-Load Inspection", description: "Detailed 4K photo documentation of vehicle condition prior to loading." },
        { title: "Secure Loading", description: "Winch or drive-on using extended race ramps. Wheel-net tie-down system." },
        { title: "Direct Transport", description: "Your vehicle stays on the same trailer. No terminals, no transfers." },
        { title: "Delivery Handover", description: "Final inspection and white-glove handover at destination." },
    ];

    // 2. The Stats Grid (Adapted for Logistics)
    const specs = [
        { label: "Insurance", value: "Fully Insured Cargo" },
        { label: "Trailer Length", value: "26ft Enclosed" },
        { label: "Climate", value: "Fully Heated" },
        { label: "Region", value: "AB / BC / SK" },
        { label: "Tie-Downs", value: "Full E-Track System" },
        { label: "Winch", value: "Loading Assistance" },
    ];

    // 4. Icons (Logistics Focused)
    const materials = [
        { symbol: "AB", name: "Alberta", number: "Primary" },
        { symbol: "BC", name: "British Columbia", number: "Route" },
        { symbol: "SK", name: "Saskatchewan", number: "Route" },
        { symbol: "$$", name: "Insured", number: "Full Coverage" },
    ];

    return (
        <ServicePageLayout
            title="Premium Transport"
            subtitle="Enclosed / Insured / Low-Clearance"
            heroImage="/transport.jpg" // Porsche/Trailer shot vibe
            heroImagePosition="center 35%"
            timelineSteps={timeline}
            specs={specs}
            materials={materials}
            leadTime="Book Ahead"
            timelineTitle="Logistics Process"
            specsTitle="Transport Stats"
            materialsTitle="Service Area"
        >
            {/* 2. The "Capabilities" Grid (Data Props) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-500 pl-4">
                        Enclosed Hauling
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Protection from Rock Chips</li>
                        <li>• Weather Proof</li>
                        <li>• Privacy (Unmarked Trailer)</li>
                        <li>• Clean Delivery</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-4">
                        Low-Clearance Loading
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Extended Race Ramps</li>
                        <li>• Splitter-Safe Approach</li>
                        <li>• Slammed / Static Cars</li>
                        <li>• Track Width Accomodation</li>
                    </ul>
                </div>
                <div className="md:col-span-2 bg-gradient-to-r from-yellow-900/20 to-transparent p-6 border border-yellow-500/30">
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="text-yellow-400">⚓</span> Non-Running Recovery
                    </h3>
                    <p className="text-stainless mb-4 text-sm max-w-2xl">
                        Bought a shell? Blowing an engine at the track? We have the gear to get it home.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white font-mono">
                        <div className="bg-carbon border border-white/10 p-3">Winch Loading Assistance Available</div>
                        <div className="bg-carbon border border-white/10 p-3">Snatch Blocks / Soft Shackles</div>
                        <div className="bg-carbon border border-white/10 p-3">Rolling Chassis Support</div>
                    </div>
                </div>
            </div>

            {/* 3. The "Technical Deep Dive" (The "Why") */}
            <div className="mb-12">
                <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-6">The White Glove Standard</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-light">
                        <strong className="text-white font-bold">Standard towing creates risk.</strong> Our enclosed transport eliminates it. We use wheel-net tie-downs (never chassis hooks) to ensure your suspension geometry stays true.
                    </p>
                    <p className="text-stainless text-base mt-4">
                        Whether it&apos;s a trip to the paint shop or delivery to a car show in Calgary, we treat the logistics with the same precision as the fabrication. No road debris, no weather exposure, and absolutely no scraping. Your build arrives exactly as it left.
                    </p>
                </div>
            </div>

        </ServicePageLayout>
    );
}
