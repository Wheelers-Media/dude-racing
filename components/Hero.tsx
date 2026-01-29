"use client";

import { useState } from "react";
import InquiryModal from "./InquiryModal";

export default function Hero() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"service" | "build">("service");

    const openModal = (type: "service" | "build") => {
        setModalType(type);
        setModalOpen(true);
    };

    return (
        <>
            <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background Video Placeholder */}
                <div className="absolute inset-0 bg-neutral-900 z-0 h-full w-full">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    {/* Simulating video texture */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                </div>

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-6">
                        Fabrication
                        <br />
                        <span className="text-stainless text-3xl md:text-5xl lg:text-7xl block mt-2 tracking-[0.2em] font-normal">
                            Beyond The Ordinary
                        </span>
                    </h1>

                    <p className="text-stainless text-lg md:text-xl max-w-2xl mb-12 font-light">
                        Precision custom fabrication in Grande Prairie. Engineered for performance, not just display.
                    </p>

                    {/* Dual CTA: Split-Intent Strategy */}
                    <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl">
                        <button
                            onClick={() => openModal("build")}
                            className="flex-1 bg-white text-black font-heading font-bold uppercase h-14 tracking-widest hover:bg-stainless transition-colors rounded-none"
                        >
                            Custom Performance Builds
                        </button>
                        <button
                            onClick={() => openModal("service")}
                            className="flex-1 bg-transparent border border-stainless text-stainless font-heading font-bold uppercase h-14 tracking-widest hover:border-white hover:text-white transition-colors rounded-none"
                        >
                            Regional Services
                        </button>
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="absolute bottom-10 left-0 w-full z-20 border-t border-white/5 pt-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-[1400px] mx-auto px-6 flex justify-center md:justify-between items-center gap-8 opacity-50 overflow-hidden">
                        {/* Placeholder for Logos */}
                        <span className="text-xs uppercase tracking-widest font-heading">BorgWarner</span>
                        <span className="text-xs uppercase tracking-widest font-heading">Vibrant Performance</span>
                        <span className="text-xs uppercase tracking-widest font-heading">Miller Welders</span>
                        <span className="text-xs uppercase tracking-widest font-heading">Garrett</span>
                        <span className="text-xs uppercase tracking-widest font-heading">Holley</span>
                    </div>
                </div>
            </section>

            <InquiryModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                initialType={modalType}
            />
        </>
    );
}
