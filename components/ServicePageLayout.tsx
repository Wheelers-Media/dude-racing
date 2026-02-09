"use client";

import { useState } from "react";
import InquiryModal from "./InquiryModal";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollImage from "./ui/ScrollImage";
import ScrollSpotlight from "./ui/ScrollSpotlight";

interface TimelineStep {
    title: string;
    description: string;
}

interface SpecItem {
    label: string;
    value: string;
}

interface MaterialItem {
    symbol: string;
    name: string;
    number: string;
}

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    timelineSteps: TimelineStep[];
    specs: SpecItem[];
    materials: MaterialItem[];
    leadTime: string;
    children?: React.ReactNode;
    heroImagePosition?: string;
    timelineTitle?: string;
    specsTitle?: string;
    materialsTitle?: string;
    overlayClassName?: string;
    ctaText?: string;
}

export default function ServicePageLayout({
    title,
    subtitle,
    heroImage,
    timelineSteps,
    specs,
    materials,
    leadTime,
    children,
    heroImagePosition = "center",
    timelineTitle = "Fabrication Process",
    specsTitle = "Technical Specifications",
    materialsTitle = "Material Expertise",
    overlayClassName = "bg-black/50",
    ctaText = "Book Consultation",
}: ServicePageLayoutProps) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section (Technical) */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-neutral-900 z-0">
                    <div className={`absolute inset-0 ${overlayClassName} z-10`} />
                    {/* Image Texture */}
                    <ScrollImage
                        src={heroImage}
                        alt={title}
                        fill
                        className="opacity-60 mix-blend-overlay contrast-125 object-cover"
                        style={{
                            objectPosition: heroImagePosition
                        }}
                    />
                </div>

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full">
                    <h1 className="text-3xl md:text-7xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        {title}
                    </h1>
                    <p className="text-stainless text-xl font-mono uppercase tracking-widest border-l-2 border-white pl-4">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* 2. The "Stick" Layout */}
            <main className="max-w-[1400px] mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column (65%) - Scrollable Content */}
                    <div className="w-full lg:w-[65%] space-y-24">

                        {/* Intro Content (Children) */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {children}
                        </div>

                        {/* Module A: Process Timeline */}
                        <div>
                            <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-8 border-b border-white/10 pb-4">
                                {timelineTitle}
                            </h3>
                            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-[2px] before:bg-white/10">
                                {timelineSteps.map((step, index) => (
                                    <div key={index} className="flex gap-8 relative">
                                        <div className="w-10 h-10 bg-carbon border border-white/20 flex items-center justify-center flex-shrink-0 z-10 text-xs font-mono font-bold text-stainless">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-heading text-white uppercase tracking-wide mb-2">{step.title}</h4>
                                            <p className="text-stainless/80 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Module B: Technical Specifications */}
                        <div>
                            <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-8 border-b border-white/10 pb-4">
                                {specsTitle}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                                {specs.map((spec, index) => (
                                    <ScrollSpotlight
                                        key={index}
                                        className="bg-carbon p-6 flex justify-between items-center group hover:bg-white/5 transition-colors"
                                        activeClassName="max-md:bg-white/5 max-md:border-l-4 max-md:border-signal"
                                    >
                                        <span className="text-xs uppercase tracking-widest text-stainless mr-4">{spec.label}</span>
                                        <span className="font-mono text-white text-sm text-right flex-1">{spec.value}</span>
                                    </ScrollSpotlight>
                                ))}
                            </div>
                        </div>

                        {/* Module C: Material Science Block */}
                        <div>
                            <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-8 border-b border-white/10 pb-4">
                                {materialsTitle}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {materials.map((mat, index) => (
                                    <ScrollSpotlight
                                        key={index}
                                        className="aspect-square bg-carbon border border-white/10 p-4 flex flex-col justify-between hover:border-stainless transition-colors group"
                                        activeClassName="max-md:border-signal/50 spotlight-active"
                                    >
                                        <span className="text-xs font-mono text-stainless/50">{mat.number}</span>
                                        <span className="text-3xl font-heading font-bold text-white group-hover:text-blue-400 max-md:group-[.spotlight-active]:text-blue-400 transition-colors">{mat.symbol}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-stainless">{mat.name}</span>
                                    </ScrollSpotlight>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column (35%) - Sticky Sidebar */}
                    <div className="w-full lg:w-[35%]">
                        <div className="sticky top-32 bg-carbon border border-stainless p-8">

                            {/* Live Status */}
                            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-xs uppercase tracking-widest text-white font-mono">
                                    Lead Time: <span className="text-green-400">{leadTime}</span>
                                </span>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-heading text-white uppercase tracking-wide mb-2">Ready to start?</h3>
                                <p className="text-stainless text-sm">Secure your spot in the queue. Technical consultation included.</p>
                            </div>

                            <button
                                onClick={() => setModalOpen(true)}
                                className="w-full bg-white text-black font-heading font-bold uppercase py-4 tracking-widest hover:bg-stainless transition-colors rounded-none mb-4 flex items-center justify-center gap-2"
                            >
                                {ctaText}
                                <ArrowRight className="w-4 h-4" />
                            </button>



                        </div>
                    </div>

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
