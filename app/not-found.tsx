"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Wrench } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black flex flex-col">
            <Header />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden">
                {/* Atmosphere */}
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

                {/* Spotlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 text-center max-w-2xl px-6">
                    {/* The "Socket" Visual */}
                    <div className="mx-auto w-32 h-32 mb-8 relative group">
                        <div className="absolute inset-0 bg-stainless/20 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors duration-500" />
                        <div className="relative border-4 border-white/20 w-full h-full rounded-full flex items-center justify-center animate-spin-slow">
                            <Wrench className="w-16 h-16 text-stainless opacity-50" />
                        </div>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                            10mm
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-heading font-bold text-white uppercase tracking-tighter mb-4">
                        404
                    </h1>
                    <h2 className="text-xl md:text-2xl font-mono text-stainless uppercase tracking-widest mb-6 border-b border-white/10 pb-6 inline-block">
                        {"//"} Lost The 10mm?
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
                        Just like that socket, the page you&apos;re looking for is gone. It might be under the workbench, or it simply never existed.
                    </p>

                    <Link
                        href="/"
                        className="inline-block bg-white text-black font-heading font-bold uppercase px-8 py-4 text-lg tracking-widest hover:bg-stainless transition-colors rounded-none"
                    >
                        Back to The Shop
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
