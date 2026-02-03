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
                    {/* Gradient Fade to seamless bar */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10" />
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
                            className="flex-1 bg-white text-black font-heading font-bold uppercase h-14 tracking-widest hover:bg-signal hover:text-black hover:border-signal transition-colors rounded-none border border-transparent"
                        >
                            Custom Fabrication
                        </button>
                        <button
                            onClick={() => openModal("service")}
                            className="flex-1 bg-transparent border border-stainless text-stainless font-heading font-bold uppercase h-14 tracking-widest hover:border-arc hover:text-arc transition-colors rounded-none"
                        >
                            Repair & Mobile Welding
                        </button>
                    </div>
                </div>

                {/* Trust Signals - Machined Seam Look */}
                <div className="absolute bottom-6 left-0 w-full z-20 border-y border-white/5 py-3 md:py-4 bg-noise">
                    <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-x-6 gap-y-3 opacity-70 overflow-hidden">
                        <span className="text-xs md:text-sm uppercase tracking-widest font-heading font-bold text-center">BorgWarner</span>
                        <span className="text-xs md:text-sm uppercase tracking-widest font-heading font-bold text-center">Vibrant Performance</span>
                        <span className="text-xs md:text-sm uppercase tracking-widest font-heading font-bold text-center">Everlast Welders</span>
                        <span className="text-xs md:text-sm uppercase tracking-widest font-heading font-bold text-center">Nelson Racing Turbos</span>
                        <span className="text-xs md:text-sm uppercase tracking-widest font-heading font-bold text-center">Garrett</span>
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
