"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function ServicesPage() {
    const [modalOpen, setModalOpen] = useState(false);

    const services = [
        {
            title: "Custom Fabrication",
            description: "Turbo systems, exhaust, and chassis work.",
            href: "/services/fabrication",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", // Fab Hero
            borderColor: "group-hover:border-blue-500",
        },
        {
            title: "Engine Building",
            description: "Blueprinting, swaps, and performance assembly.",
            href: "/services/engine-building",
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2664&auto=format&fit=crop", // Engine Hero
            borderColor: "group-hover:border-red-500",
        },
        {
            title: "Premium Transport",
            description: "Enclosed, insured, low-clearance hauling.",
            href: "/services/transport",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop", // Transport Hero
            borderColor: "group-hover:border-yellow-500",
        },
    ];

    const repairServices = [
        "Aluminum Boat Repair",
        "Cast Iron Restoration",
        "Trailer & Equipment Welding",
        "Structural Reinforcement",
        "Stainless Exhaust Repair",
        "Titanium Crack Repair"
    ];

    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-neutral-900 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    {/* Abstract Shop Background */}
                    <div
                        className="w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2574&auto=format&fit=crop')` }}
                    />
                </div>

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        Capabilities & Services
                    </h1>
                    <p className="text-stainless text-sm md:text-lg font-mono uppercase tracking-widest">
                        From Routine Repairs to Championship Builds
                    </p>
                </div>
            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-24">

                {/* 2. The "Big Three" Portal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className={`group relative h-[400px] md:h-[500px] overflow-hidden border border-white/10 ${service.borderColor} transition-colors duration-300 block`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            />
                            {/* Heavy Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-2 group-hover:text-white transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-stainless text-sm font-mono mb-6 max-w-[90%]">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                    Explore Service <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 3. The "Repair & Utility" Section */}
                <div className="max-w-4xl mx-auto border border-white/10 bg-carbon p-8 md:p-12 mb-32">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                <Wrench className="w-6 h-6 text-stainless" /> General Welding & Repair
                            </h3>
                            <p className="text-stainless mb-8 leading-relaxed">
                                Not every job is a race car. We bring the same aerospace-grade TIG welding processes to repair jobs for local industry and recreation.
                            </p>
                            <button
                                onClick={() => setModalOpen(true)}
                                className="bg-white text-black font-heading font-bold uppercase px-8 py-4 text-sm tracking-widest hover:bg-stainless transition-colors rounded-none"
                            >
                                Request Repair Quote
                            </button>
                        </div>
                        <div className="flex-1 w-full">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {repairServices.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-stainless font-mono border-b border-white/5 pb-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. The "Philosophy" Block */}
                <div className="text-center max-w-2xl mx-auto">
                    <h4 className="text-sm font-heading text-stainless uppercase tracking-widest mb-4">
                        One Standard. Regardless of the Job.
                    </h4>
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                        &quot;Whether we are transporting a supercar or welding a cracked boat hull, the attention to detail remains absolute. We do not cut corners.&quot;
                    </p>
                </div>

            </main>

            <Footer />
            <InquiryModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                initialType="service"
            />
        </div>
    );
}
