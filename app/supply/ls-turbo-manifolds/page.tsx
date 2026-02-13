"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useInquiryModal } from "@/context/InquiryModalContext";
import { Mail, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LsTurboManifoldsPage() {
    const { openModal } = useInquiryModal();
    const productName = "Gen III/IV LS Turbo Manifolds";

    // Image paths - ensure these match your public folder structure
    const images = [
        "/Supply/ls-turbo-manifolds/DSC07250.jpg",
        "/Supply/ls-turbo-manifolds/DSC07253.jpg",
        "/Supply/ls-turbo-manifolds/DSC07256.jpg",
        "/Supply/ls-turbo-manifolds/DSC07258.jpg",
        "/Supply/ls-turbo-manifolds/DSC07261.jpg"
    ];

    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            <main className="max-w-[1400px] mx-auto px-6 pt-32 pb-24">

                {/* Breadcrumbs / Back Link */}
                <div className="mb-8">
                    <Link href="/shop" className="inline-flex items-center gap-2 text-stainless hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Shop
                    </Link>
                </div>

                {/* 1. Shop Interface (Split View) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">

                    {/* Left Column: Visuals (Gallery) */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square w-full bg-carbon border border-white/10 rounded-sm overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                                style={{ backgroundImage: `url('${images[activeImage]}')` }}
                            />
                            {/* Overlay texture or sheen */}
                            <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-5 gap-2">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative aspect-square bg-carbon border ${activeImage === idx ? 'border-signal' : 'border-white/10 hover:border-white/50'} transition-all overflow-hidden`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    />
                                    {activeImage !== idx && <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Purchase Flow */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2">
                            <span className="text-signal font-mono text-xs uppercase tracking-widest">Fabrication Supply // Exhaust</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide leading-tight mb-4">
                            Gen III/IV LS Turbo Manifolds <br />
                            <span className="text-stainless text-2xl md:text-3xl">(Schedule 10)</span>
                        </h1>

                        <div className="flex items-baseline gap-4 mb-6 border-b border-white/10 pb-6">
                            <span className="text-4xl font-bold text-signal font-mono">$3,950.00 CAD</span>
                            <span className="text-sm text-stainless font-mono uppercase tracking-widest">Built to Order</span>
                        </div>

                        {/* UPDATED DESCRIPTION BLOCK */}
                        <div className="prose prose-invert max-w-none text-stainless mb-8">
                            <p className="leading-relaxed">
                                Fabricated for maximum flow and durability. These are <strong>Custom High-Mount</strong> manifolds designed to fit <strong>all LS Platforms</strong>.
                            </p>
                            <p className="leading-relaxed mt-4 border-l-2 border-signal pl-4 bg-white/5 p-3 rounded-r-sm">
                                <strong className="text-white block mb-1">⚠️ Fitment Note:</strong> 
                                This is a custom installation. The high-mount design positions the turbos level with the valve covers, which <strong>will require hood trimming</strong> on most applications.
                            </p>
                            <p className="text-sm mt-4 text-white/80">
                                <span className="text-signal">*</span> Jig-fixtured for precise fitment and back-purged for clean, strong internal welds.
                            </p>
                        </div>

                        {/* Key Features */}
                        <ul className="space-y-3 mb-10">
                            {[
                                "304 Stainless Schedule 10 (USA Sourced)",
                                "1/2\" Billet Flanges (Warp-Free)",
                                "Lifetime Repair Warranty",
                                "Fits All LS Platforms (Custom Install)",
                                "T4 or V-Band Entry Options"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-mono text-white uppercase tracking-wider">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-signal">
                                        <Check className="w-3 h-3" />
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                <p className="text-xs text-stainless font-mono uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                                    Current Lead Time: 3-4 Weeks
                                </p>
                            </div>

                            <button
                                onClick={() => openModal('product', productName)}
                                className="w-full bg-white text-black font-heading font-bold uppercase py-5 text-lg tracking-widest hover:bg-stainless transition-colors flex items-center justify-center gap-3 cursor-pointer"
                            >
                                <Mail className="w-5 h-5" />
                                Request Build Slot
                            </button>
                        </div>

                    </div>
                </div>

                {/* 2. Deep Dive (Technical Specs) */}
                <section className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl font-heading text-white uppercase tracking-wider mb-8">Technical Specifications</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 px-6 text-xs font-mono text-stainless uppercase tracking-widest w-1/3">Specification</th>
                                    <th className="py-4 px-6 text-xs font-mono text-stainless uppercase tracking-widest">Detail</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { label: "Fitment", value: "All Gen III/IV LS Platforms (Requires Custom Install)" },
                                    { label: "Turbo Position", value: "High Mount (Level with Valve Covers)" },
                                    { label: "Material", value: "304 Stainless Steel (Schedule 10)" },
                                    { label: "Flange Type", value: "T4 Open/Divided or V-Band (Selectable)" },
                                    { label: "Wastegate Port", value: "Dual 44mm / 45mm / 50mm (Configurable)" },
                                    { label: "Primary Size", value: "1-3/4\" Nominal Pipe Size" },
                                    { label: "Collector", value: "Merge Collector with slip-fit crossover" },
                                    { label: "Warranty", value: "Lifetime Repair Warranty against cracking" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-sm font-bold text-white uppercase tracking-wide">{row.label}</td>
                                        <td className="py-4 px-6 text-sm font-mono text-stainless">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}