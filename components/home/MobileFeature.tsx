import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Aluminum & Stainless TIG on-site",
    "Mobile Hoist & Fabrication Services"
];

export default function MobileFeature() {
    return (
        <section className="bg-carbon border-y border-white/10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
                {/* Column 1: Content */}
                <div className="flex-1 px-6 py-16 md:py-24 md:pr-12">
                    <span className="text-signal font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                        FIELD OPERATIONS // 200KM RADIUS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase tracking-wider leading-none mb-8">
                        WE BRING THE <br /> SHOP TO YOU.
                    </h2>
                    <p className="text-stainless text-lg mb-10 max-w-xl font-light leading-relaxed">
                        Don't haul broken equipment. Our mobile unit is equipped with on-board power,
                        AC/DC TIG capabilities, and a 5,000lb mobile hoist for on-site fabrication.
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
                        href="/services/mobile-repair"
                        className="inline-block bg-white text-black font-heading font-bold uppercase py-4 px-8 tracking-widest hover:bg-signal transition-colors group"
                    >
                        VIEW MOBILE CAPABILITIES
                    </Link>
                </div>

                {/* Column 2: Visual */}
                <div className="flex-1 relative min-h-[400px] md:min-h-auto group overflow-hidden">
                    <Image
                        src="/Mobile-Hoist.jpg"
                        alt="DudeRacing Mobile Field Operations"
                        fill
                        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
            </div>
        </section>
    );
}
