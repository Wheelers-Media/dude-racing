import { Wrench, Flame, Truck } from "lucide-react";

const CAPABILITIES = [
    {
        title: "CUSTOM FABRICATION",
        icon: Flame,
        items: [
            "Turbo Manifolds & Hot Parts",
            "Full Titanium/Stainless Exhausts",
            "Intercooler & Intake Piping",
            "Roll Cages & Chassis Work"
        ]
    },
    {
        title: "SPECIALIZED WELDING",
        icon: Wrench,
        items: [
            "Aluminum Hull & Cast Restoration",
            "Exotic Alloys (Titanium, Nickel)",
            "Cast Iron Block Repair",
            "Magnesium Valve Covers"
        ]
    },
    {
        title: "SECURE LOGISTICS",
        icon: Truck,
        items: [
            "Enclosed Trailer Transport",
            "Door-to-Door Chassis Pickup",
            "Non-Running Vehicle Recovery",
            "Regional Peace Country Service"
        ]
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-24 bg-carbon-pattern relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
                    <h2 className="text-xl font-heading text-stainless uppercase tracking-widest">
                        01 / Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CAPABILITIES.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-carbon border border-white/10 p-10 hover:border-signal/50 transition-all duration-300 relative overflow-hidden"
                        >
                            <service.icon className="w-12 h-12 text-stainless mb-8 stroke-1" />
                            <h3 className="text-2xl font-heading text-white uppercase mb-6 tracking-wide">
                                {service.title}
                            </h3>
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="text-stainless/70 text-sm font-light flex items-center gap-2">
                                        <span className="w-1 h-1 bg-stainless rounded-none" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stainless/30 group-hover:border-signal/50 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
