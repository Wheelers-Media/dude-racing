"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import InquiryModal from "./InquiryModal"; // Assuming we want the modal triggered here too
import { useState } from "react";

interface SpecItem {
    label: string;
    value: string;
}

interface CaseStudyLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    specs: SpecItem[];
    children: React.ReactNode;
}

export default function CaseStudyLayout({
    title,
    subtitle,
    heroImage,
    specs,
    children,
}: CaseStudyLayoutProps) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section (Cinematic) */}
            <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-neutral-900 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center opacity-80"
                        style={{ backgroundImage: `url('${heroImage}')` }}
                    />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-20 max-w-[1400px] mx-auto px-6 text-center"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white uppercase tracking-tighter leading-none mb-6">
                        {title}
                    </h1>
                    <div className="inline-block border-y border-white/20 py-4 px-8">
                        <span className="text-xl md:text-2xl font-mono uppercase tracking-widest text-stainless">
                            {subtitle}
                        </span>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-stainless/70">Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-6 h-6 text-white" />
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. The Build Narrative */}
            <main className="max-w-[1400px] mx-auto px-6 py-32">
                <div className="flex flex-col lg:flex-row gap-24">

                    {/* Center Content (Narrative Flow) */}
                    <div className="w-full lg:w-[65%] space-y-32">
                        {children}
                    </div>

                    {/* Sticky Sidebar (Build Sheet) */}
                    <div className="w-full lg:w-[35%] hidden lg:block">
                        <div className="sticky top-32">
                            <div className="bg-carbon border border-white/10 p-8">
                                <h3 className="text-xl font-heading text-white uppercase tracking-wider mb-8 border-b border-white/10 pb-4">
                                    Build Specifications
                                </h3>
                                <div className="space-y-4 font-mono text-sm">
                                    {specs.map((spec, i) => (
                                        <div key={i} className="flex justify-between items-starts border-b border-white/5 pb-2 last:border-0">
                                            <span className="text-stainless/60 uppercase tracking-wider">{spec.label}</span>
                                            <span className="text-white text-right font-bold ml-4">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 p-8 border border-white/10 bg-noise flex flex-col items-center text-center">
                                <h4 className="font-heading text-lg uppercase mb-2">Inspired by this build?</h4>
                                <p className="text-xs text-stainless mb-6">Start your custom project today.</p>
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="w-full bg-white text-black font-heading font-bold uppercase py-4 tracking-widest hover:bg-stainless transition-colors rounded-none flex items-center justify-center gap-2"
                                >
                                    Start a Build
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Mobile Footer CTA (Visible only on small screens where sidebar is hidden/stacked) */}
            <section className="lg:hidden border-t border-white/10 bg-carbon py-24 text-center">
                <div className="max-w-md mx-auto px-6">
                    <h2 className="text-3xl font-heading uppercase mb-4">Ready to build yours?</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="w-full bg-blue-600 text-white font-heading font-bold uppercase py-4 tracking-widest hover:bg-blue-500 transition-colors rounded-none mt-8 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                        Start Build Application
                    </button>
                </div>
            </section>

            <Footer />
            <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialType="build" />
        </div>
    );
}
