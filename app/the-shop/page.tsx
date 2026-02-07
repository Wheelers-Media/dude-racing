"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DarkMap from "@/components/ui/DarkMap";
import { MapPin, Clock, Truck, Instagram } from "lucide-react";
import Image from "next/image";


export default function TheShopPage() {
    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section (The HQ) */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-neutral-900 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    {/* Industrial Cathedral Image */}
                    <div
                        className="w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay grayscale contrast-125"
                        style={{ backgroundImage: `url('/HQ-Hero.jpg')` }}
                    />
                </div>

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-5xl md:text-8xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        Headquarters
                    </h1>
                    <p className="text-stainless text-lg md:text-xl font-mono uppercase tracking-widest border-t border-white/20 pt-4 mt-4 inline-block">
                        Est. 2018 // Grande Prairie, AB
                    </p>
                </div>
            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-24 space-y-32">

                {/* 2. The Founder's Profile */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-heading text-white uppercase tracking-wider mb-8">
                            Built By A Racer.
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-stainless font-light space-y-6">
                            <p>
                                <strong className="text-white font-bold">DudeRacing wasn&apos;t founded by a businessman; it was founded by a passion.</strong>
                            </p>
                            <p>
                                With a background in competitive motorsports, Bob Dudenhoeffer understands that a weld isn&apos;t just structural - it&apos;s safety. We build cars that perform on the track, not just the trailer.
                            </p>
                            <p>
                                Every chassis we jig, every engine we blueprint, and every cage we weld is executed with the understanding that it will be pushed to the limit. We don&apos;t just fabricate; we engineer for speed.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[600px] border border-white/10 group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                        <div
                            className="w-full h-full bg-cover bg-center contrast-110 transition-all duration-700"
                            style={{ backgroundImage: `url('/headshot.jpg')` }}
                        />
                        <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur px-4 py-2 border border-white/10">
                            <span className="text-xs font-mono text-stainless uppercase tracking-widest">Bob Dudenhoeffer // Founder</span>
                        </div>
                    </div>
                </section>

                {/* 3. The "Arsenal" (Equipment List) */}
                <section>
                    <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-12">
                        <h2 className="text-4xl font-heading text-white uppercase tracking-wider">The Arsenal</h2>
                        <span className="hidden md:block text-xs font-mono text-stainless uppercase tracking-widest">Asset Inventory // Updated 2026</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                category: "Welding & Alloy",
                                items: ["Everlast EXT 255 (AC/DC TIG)", "Everlast 253 DPI", "Back-Purge Flow Meters", "Mobile Hoist & TIG Setup"]
                            },
                            {
                                category: "Fabrication",
                                items: ["JD Squared Model 32 Tube Bender", "Vertical Bandsaw (Hydraulic Feed)"]
                            },
                            {
                                category: "Prep & Finishing",
                                items: ["Precision Tube Notcher", "Abrasive Cut-Off Saws", "2x72 Belt Grinder (Fitment)", "Exhaust Pressure Testers", "Ultrasonic Parts Cleaner"]
                            }
                        ].map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl font-heading text-white uppercase tracking-wide border-l-2 border-white pl-4">
                                    {category.category}
                                </h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-mono text-stainless border-b border-white/5 pb-2 last:border-0 hover:text-white transition-colors cursor-default group">
                                            <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-blue-500 transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. The "Garage Diary" Grid */}
                <section>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-heading text-white uppercase tracking-wider">Shop Floor Live</h2>
                        <a href="https://www.instagram.com/duderacing" target="_blank" className="flex items-center gap-2 text-stainless hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" /> <span className="text-sm font-mono uppercase tracking-widest">@duderacing</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {[
                            "/Shop Floor Live/DSC07256.jpg",
                            "/Shop Floor Live/DSC07230.jpg",
                            "/Shop Floor Live/569184263_1259522549547349_8536754707826462352_n.jpg",
                            "/Shop Floor Live/594200037_1296749179158019_4495136581949991320_n.jpg",
                            "/Shop Floor Live/614758521_1327588456074091_6438086883897970748_n.jpg",
                            "/Shop Floor Live/IMG_5497.jpg" // Converted HEIC replacement
                        ].map((src, idx) => (
                            <div key={idx} className="relative aspect-square bg-carbon overflow-hidden group">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 md:grayscale md:group-hover:grayscale-0"
                                    style={{ backgroundImage: `url('${src}')` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Location & Logistics */}
                <section className="bg-carbon border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Map */}
                        <div className="relative h-[400px] lg:h-auto bg-neutral-800 overflow-hidden min-h-[500px]">
                            <DarkMap />
                        </div>

                        {/* Data */}
                        <div className="p-12 lg:p-16 flex flex-col justify-center space-y-12">
                            <div>
                                <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-2">Operations</h3>
                                <p className="text-stainless text-sm font-mono uppercase tracking-widest">Grande Prairie, Alberta</p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-stainless shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide">Serving Peace Country</h4>
                                        <p className="text-stainless/70 text-sm mt-1">
                                            Located in the heart of the region&apos;s industrial sector. Easy access for transport haulers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-stainless shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide">By Appointment Only</h4>
                                        <p className="text-stainless/70 text-sm mt-1">
                                            To maintain focus on active builds, shop visits are scheduled in advance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Truck className="w-6 h-6 text-stainless shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide">Secure Logistics</h4>
                                        <p className="text-stainless/70 text-sm mt-1">
                                            24/7 Secure drop-off and pickup available for confirmed clients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
