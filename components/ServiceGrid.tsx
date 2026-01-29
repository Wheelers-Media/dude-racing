import { Wrench, Flame, Settings } from "lucide-react";

const services = [
    {
        title: "Custom Fabrication",
        items: ["Turbo Manifolds", "Full Exhaust Systems", "Intercooler Piping", "Roll Cages"],
        icon: Flame,
    },
    {
        title: "Welding Repair",
        items: ["Aluminum Specialist", "Stainless Steel", "Cast Iron Repair", "Titanium"],
        icon: Wrench,
    },
    {
        title: "Engine Builds",
        items: ["K-Swaps", "Engine Blueprinting", "Head Porting", "Custom Harnesses"],
        icon: Settings,
    },
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
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-carbon border border-white/10 p-10 hover:border-stainless transition-colors duration-300 relative overflow-hidden"
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
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stainless/30 group-hover:border-white transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
