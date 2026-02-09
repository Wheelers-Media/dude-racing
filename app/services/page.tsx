"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { useState } from "react";
import ServiceGrid from "@/components/services/ServiceGrid";

export default function ServicesPage() {
    const [modalOpen, setModalOpen] = useState(false);

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
                        style={{ backgroundImage: `url('/DSC08206.jpg')` }}
                    />
                </div>

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-3xl md:text-6xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        Capabilities & Services
                    </h1>
                    <p className="text-stainless text-sm md:text-lg font-mono uppercase tracking-widest">
                        From Routine Repairs to Championship Builds
                    </p>
                </div>
            </section>

            <main>
                <ServiceGrid />

                {/* The "Emergency" CTA */}
                <div className="max-w-[1400px] mx-auto px-6 pb-24">
                    <div className="border border-signal/20 bg-signal/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-xl font-heading text-white uppercase tracking-widest mb-2">Immediate Repair Required?</h3>
                            <p className="text-stainless text-sm font-mono uppercase">Mobile unit response for industrial and agricultural restoration.</p>
                        </div>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-signal text-black font-heading font-bold uppercase px-8 py-4 tracking-widest hover:bg-white transition-colors h-fit"
                        >
                            Request Priority Unit
                        </button>
                    </div>
                </div>

                {/* 4. The "Philosophy" Block */}
                <div className="text-center max-w-2xl mx-auto pb-32 px-6">
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
