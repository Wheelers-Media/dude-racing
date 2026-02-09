"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Wrench, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";
import ScrollImage from "@/components/ui/ScrollImage";
import ScrollSpotlight from "@/components/ui/ScrollSpotlight";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10 bg-noise">
                {/* Minimalist Hero */}
                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-3xl md:text-6xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        Selected Builds
                    </h1>
                    <p className="text-stainless text-sm md:text-lg font-mono uppercase tracking-widest">
                        Fabrication Case Studies & Current Work
                    </p>
                </div>
            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-24 space-y-32">

                {/* 2. Section A: "Signature Builds" */}
                {/* We are replacing generic placeholders with Bob's actual work. */}
                <section>
                    <h2 className="text-sm font-mono text-stainless uppercase tracking-widest mb-8 border-l-2 border-white pl-4">
                        Signature Builds // Archive
                    </h2>
                    <div className="grid grid-cols-1 gap-16">
                        {/* Build 1: Twin-Turbo LS 370Z (The Hero) */}
                        <ScrollSpotlight
                            className="group relative border border-white/10 overflow-hidden bg-carbon grid grid-cols-1 lg:grid-cols-2"
                            activeClassName="max-md:border-signal/50 spotlight-active"
                        >
                            <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                <ScrollImage
                                    src="/LS-370Z.jpg"
                                    alt="Twin-Turbo LS 370Z"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {["Tube Chassis", "LS Swap", "Mirror Turbos"].map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-arc border border-arc/30 bg-arc/5 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white uppercase tracking-tighter mb-2 leading-none transition-colors group-hover:text-signal max-md:group-[.spotlight-active]:text-signal">
                                    Twin-Turbo LS 370Z
                                </h3>
                                <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">
                                    Chromoly Tube Chassis / Nelson Racing Turbos
                                </p>
                                <p className="text-stainless text-sm leading-relaxed mb-8 max-w-lg">
                                    We cut the front clip back to the strut towers to ensure zero airflow limits. The solution: A full removable Chromoly tube chassis housing twin Nelson Racing 62/60 mirror-image turbos. Features custom ducted cooling and a hood-exit exhaust.
                                </p>
                                <span className="self-start flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-transparent pb-1 cursor-not-allowed">
                                    Case Study Coming Soon
                                </span>
                            </div>
                        </ScrollSpotlight>

                        {/* Secondary Grid for S2000 and F-350 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Build 2: K-Swapped S2000 */}
                            <ScrollSpotlight
                                className="group relative border border-white/10 overflow-hidden bg-carbon flex flex-col"
                                activeClassName="max-md:border-signal/50 spotlight-active"
                            >
                                <div className="relative h-[400px] w-full overflow-hidden border-b border-white/5">
                                    <ScrollImage
                                        src="/s2000.jpg"
                                        alt="K-Swapped S2000"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-8 flex-1 flex flex-col justify-center">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {["Fabrication", "Turbo System", "Stainless"].map(tag => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-arc border border-arc/30 bg-arc/5 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tighter mb-2 transition-colors group-hover:text-signal max-md:group-[.spotlight-active]:text-signal">
                                        The K-Swapped S2000
                                    </h3>
                                    <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-4 inline-block">
                                        Turbocharged / Sidewinder Manifold
                                    </p>
                                    <p className="text-stainless text-sm leading-relaxed mb-6 line-clamp-3">
                                        A standard S2000 is balanced; a Turbo K24 is a weapon. We fabricated a complete hot-side solution including a custom 3-inch downpipe.
                                    </p>
                                    <span className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-transparent pb-1 cursor-not-allowed">
                                        Case Study Coming Soon
                                    </span>
                                </div>
                            </ScrollSpotlight>

                            {/* Build 3: Hayabusa Smart Car */}
                            <ScrollSpotlight
                                className="group relative border border-white/10 overflow-hidden bg-carbon flex flex-col"
                                activeClassName="max-md:border-signal/50 spotlight-active"
                            >
                                <div className="relative h-[400px] w-full overflow-hidden border-b border-white/5">
                                    <ScrollImage
                                        src="/projects/smart-main-v2.jpg"
                                        alt="Hayabusa Smart Car"
                                        fill
                                        className="object-cover object-bottom"
                                    />
                                </div>

                                <div className="p-8 flex-1 flex flex-col justify-center">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {["ENGINE SWAP", "CUSTOM SUBFRAME", "CHAIN DRIVE"].map(tag => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-arc border border-arc/30 bg-arc/5 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tighter mb-2 transition-colors group-hover:text-signal max-md:group-[.spotlight-active]:text-signal">
                                        HAYABUSA SMART CAR
                                    </h3>
                                    <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-4 inline-block">
                                        1300cc / Chain Driven / Track Monster
                                    </p>
                                    <p className="text-stainless text-sm leading-relaxed mb-6 line-clamp-3">
                                        The ultimate power-to-weight ratio. We fabricated a custom rear subframe to cradle a 1300cc Hayabusa engine, converting this city commuter into a chain-driven track monster.
                                    </p>
                                    <span className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-transparent pb-1 cursor-not-allowed w-fit">
                                        Case Study Coming Soon
                                    </span>
                                </div>
                            </ScrollSpotlight>
                        </div>
                    </div>
                </section>



                {/* 4. The "Archives" - Responsive Hybrid Layout */}
                <section className="mt-24">
                    <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-8 border-l-2 border-white/20 pl-4">
                        Project Archives
                    </h2>

                    {/* MOBILE VIEW (Cards) - Visible on small screens, hidden on desktop */}
                    <div className="md:hidden space-y-4">
                        {[
                            { year: "1986", project: "Chevrolet Classic", scope: "Single Turbo Kit.", notes: "Custom fitted intercooler kit, full ss true dual exhaust" },
                            { year: "2001", project: "Silverado 1500", scope: "Twin Turbo Kit / full exhaust with cutouts.", notes: "Measuring the alignments for turbos to be perfect was a challenge" },
                            { year: "2001", project: "Honda S2000", scope: "Full K24A2 swap with turbo setup.", notes: "E85 conversion, stand alone race ecu, custom turbo manifold and hood exit exhaust with cutout." },
                            { year: "2016", project: "Nissan 370Z", scope: "LSX Twin turbo build with custom front end.", notes: "Custom fitted turbos/ hood exits, custom electric power steering, dual oil coolers, custom tube frame front end" },
                            { year: "1969", project: "Camaro", scope: "Full dual SS exhaust with cutouts.", notes: "Tucked as close to the body as possible made for a lot of complex areas. Axle dump style exits." },
                        ].map((item, i) => (
                            <ScrollSpotlight
                                key={i}
                                className="group bg-zinc-900/50 border border-white/5 p-6 space-y-3"
                                activeClassName="max-md:border-signal/50 spotlight-active"
                            >
                                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                    <span className="text-white font-display font-bold text-lg transition-colors group-hover:text-signal max-md:group-[.spotlight-active]:text-signal">{item.project}</span>
                                    <span className="text-signal font-mono text-xs">{item.year}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Scope</span>
                                    <p className="text-zinc-300 text-sm leading-relaxed">{item.scope}</p>
                                </div>
                                <div className="pt-2">
                                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Notes</span>
                                    <p className="text-zinc-400 text-xs italic leading-relaxed">"{item.notes}"</p>
                                </div>
                            </ScrollSpotlight>
                        ))}
                    </div>

                    {/* DESKTOP VIEW (Table) - Hidden on mobile, visible on medium+ screens */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-left text-sm font-mono table-fixed">
                            <thead className="border-b border-white/20 text-zinc-500 uppercase tracking-widest text-xs">
                                <tr>
                                    <th className="py-4 w-[10%]">Year</th>
                                    <th className="py-4 w-[20%]">Project</th>
                                    <th className="py-4 w-[30%]">Scope</th>
                                    <th className="py-4 w-[40%] text-left">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-zinc-400">
                                {[
                                    { year: "1986", project: "Chevrolet Classic", scope: "Single Turbo Kit.", notes: "Custom fitted intercooler kit, full ss true dual exhaust" },
                                    { year: "2001", project: "Silverado 1500", scope: "Twin Turbo Kit / full exhaust with cutouts.", notes: "Measuring the alignments for turbos to be perfect was a challenge" },
                                    { year: "2001", project: "Honda S2000", scope: "Full K24A2 swap with turbo setup.", notes: "E85 conversion, stand alone race ecu, custom turbo manifold and hood exit exhaust with cutout." },
                                    { year: "2016", project: "Nissan 370Z", scope: "LSX Twin turbo build with custom front end.", notes: "Custom fitted turbos/ hood exits, custom electric power steering, dual oil coolers, custom tube frame front end" },
                                    { year: "1969", project: "Camaro", scope: "Full dual SS exhaust with cutouts.", notes: "Tucked as close to the body as possible made for a lot of complex areas. Axle dump style exits." },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                        <td className="py-6 pr-4 opacity-50 align-top">{row.year}</td>
                                        <td className="py-6 pr-4 text-white font-bold align-top group-hover:text-signal transition-colors">{row.project}</td>
                                        <td className="py-6 pr-8 align-top leading-relaxed">{row.scope}</td>
                                        <td className="py-6 align-top text-zinc-500 text-xs leading-relaxed italic">{row.notes}</td>
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
