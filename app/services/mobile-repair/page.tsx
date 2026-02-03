import type { Metadata } from 'next';
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
    title: 'Mobile Welding & Repair Grande Prairie | Heavy Equipment & Structural',
    description: 'We come to you. Mobile TIG/Stick welding for heavy equipment, aluminum boat repair, and structural steel fixes in Grande Prairie and the Peace Country.',
    keywords: 'Mobile Welding Grande Prairie, Heavy Equipment Repair, Aluminum Boat Welding, Field Service',
};

export default function MobileRepairPage() {
    // 1. Process Timeline
    const timeline = [
        { title: "Dispatch & Assessment", description: "Quick response to your site with our mobile unit." },
        { title: "Site Prep & Safety", description: "Establishing a safe hot-work zone and cleaning the repair area." },
        { title: "Arc Time", description: "Precision TIG or heavy-duty Stick welding depending on the material." },
        { title: "In-Field QC", description: "Dye penetrant testing (if required) and stress-relief verification." },
    ];

    // 2. Technical Specifications
    const specs = [
        { label: "Service Area", value: "Grande Prairie + 100km" },
        { label: "Processes", value: "AC/DC TIG / Stick / Mig" },
        { label: "Power", value: "On-Board Generator" },
        { label: "Capabilities", value: "Aluminum / Carbon / Stainless" },
        { label: "Rate", value: "$150/hr (Port-to-Port)" },
        { label: "Emergency", value: "24/7 Availability" },
    ];

    // 4. Material Expertise
    const materials = [
        { symbol: "Al", name: "Aluminum", number: "Boat Hulls / Tanks" },
        { symbol: "Fe", name: "Cast Iron", number: "Engine Blocks" },
        { symbol: "Cr", name: "Chromoly", number: "Roll Cages" },
        { symbol: "St", name: "Structural", number: "Heavy Equipment" },
    ];

    return (
        <ServicePageLayout
            title="Mobile Welding & Repair"
            subtitle="WE COME TO YOU / INDUSTRIAL & AUTOMOTIVE"
            heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
            timelineSteps={timeline}
            specs={specs}
            materials={materials}
            leadTime="Same Day / On-Call"
        >
            {/* 2. Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-yellow-500 pl-4">
                        Heavy Equipment
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Bucket & Boom Crack Repair</li>
                        <li>• Hardfacing & Wear Protection</li>
                        <li>• Hydraulic Cylinder Mounts</li>
                        <li>• Frame Reinforcement</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-4">
                        Recreational & Structural
                    </h3>
                    <ul className="space-y-2 text-stainless font-light">
                        <li>• Aluminum Jet Boat Hulls</li>
                        <li>• Trailer Frame Repair</li>
                        <li>• Gate & Fence Repair</li>
                        <li>• on-site Fabrication</li>
                    </ul>
                </div>
                <div className="md:col-span-2 bg-gradient-to-r from-red-900/20 to-transparent p-6 border border-red-500/30">
                    <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="text-red-500">🚨</span> Emergency Service
                    </h3>
                    <p className="text-stainless mb-4 text-sm max-w-2xl">
                        Breakdowns don't strictly happen between 9 and 5. We offer after-hours and weekend emergency call-out services for critical repairs.
                    </p>
                    <div className="inline-block bg-carbon border border-white/10 p-3 text-white font-mono text-sm">
                        Call-Out Fee: $350 + Hourly Rate
                    </div>
                </div>
            </div>

            {/* 3. Technical Deep Dive */}
            <div className="mb-12">
                <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-6">Process Quality In The Field</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg leading-relaxed font-light">
                        Mobile welding often gets a reputation for being "rough." We bring our shop standards to the field.
                    </p>
                    <p className="text-stainless text-base mt-4">
                        Our mobile rig is equipped with high-frequency AC/DC TIG machines, meaning we can perform surgical aluminum repairs on a riverbank just as well as we can in the bay. No shortcuts, even when it's -30°C.
                    </p>
                </div>
            </div>
        </ServicePageLayout>
    );
}
