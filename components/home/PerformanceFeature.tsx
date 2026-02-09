"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ScrollImage from "@/components/ui/ScrollImage";

const features = [
    "Stainless & Titanium Construction",
    "Valvetronic & Custom Headers"
];

export default function PerformanceFeature() {
    return (
        <section className="bg-carbon border-y border-white/10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
                {/* Column 1: Content */}
                <div className="flex-1 px-6 py-16 md:py-24 md:pr-12">
                    <span className="text-signal font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                        PERFORMANCE FABRICATION // HAND-BUILT
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-wider leading-none mb-8">
                        BESPOKE EXHAUST <br /> SYSTEMS.
                    </h2>
                    <p className="text-stainless text-lg mb-10 max-w-xl font-light leading-relaxed">
                        Hand-built stainless and titanium systems designed for maximum flow and aggressive sound. From valvetronic upgrades to full custom headers, we build what you can't buy off the shelf.
                    </p>

                    <ul className="space-y-4 mb-12">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-white uppercase tracking-widest text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-signal" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/services/exhausts"
                        className="inline-block bg-white text-black font-heading font-bold uppercase py-4 px-8 tracking-widest hover:bg-signal transition-colors group"
                    >
                        START YOUR BUILD
                    </Link>
                </div>

                {/* Column 2: Visual */}
                <div className="flex-1 relative min-h-[400px] md:min-h-auto group border-l border-white/10">
                    <ScrollImage
                        src="/LandingPage/550358950_1233636105469327_3989912168816956869_n.jpg"
                        alt="Twin-Turbo LS Fabrication"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
