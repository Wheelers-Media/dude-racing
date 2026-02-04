"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Wrench, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10 bg-noise">
                {/* Minimalist Hero */}
                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        Selected Builds
                    </h1>
                    <p className="text-stainless text-sm md:text-lg font-mono uppercase tracking-widest">
                        Engineering Case Studies & Current Work
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
                        <div className="group relative border border-white/10 overflow-hidden bg-carbon grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('/LS-370Z.jpg')` }} // LS 370Z
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {["Tube Chassis", "LS Swap", "Mirror Turbos"].map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-arc border border-arc/30 bg-arc/5 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white uppercase tracking-tighter mb-2 leading-none">
                                    Twin-Turbo LS 370Z
                                </h3>
                                <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">
                                    Chromoly Tube Chassis / Nelson Racing Turbos
                                </p>
                                <p className="text-stainless text-sm leading-relaxed mb-8 max-w-lg">
                                    We cut the front clip back to the strut towers to engineer zero airflow limits. The solution: A full removable Chromoly tube chassis housing twin Nelson Racing 62/60 mirror-image turbos. Features custom ducted cooling and a hood-exit exhaust.
                                </p>
                                <button className="self-start flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                    View Case Study <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        {/* Secondary Grid for S2000 and F-350 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Build 2: K-Swapped S2000 */}
                            <div className="group relative h-[500px] border border-white/10 overflow-hidden bg-carbon flex flex-col justify-end">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('/s2000.jpg')` }} // K-Swapped S2000
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                                <div className="relative z-20 p-8">
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        {["Fabrication", "Turbo System", "Stainless"].map(tag => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-signal border border-signal/30 bg-signal/5 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tighter mb-1">
                                        The K-Swapped S2000
                                    </h3>
                                    <p className="text-yellow-400 font-mono text-xs uppercase tracking-widest mb-4">
                                        Turbocharged / Sidewinder Manifold
                                    </p>
                                    <p className="text-stainless/80 text-sm mb-6 line-clamp-3">
                                        A standard S2000 is balanced; a Turbo K24 is a weapon. We fabricated a complete hot-side solution including a custom 3-inch downpipe.
                                    </p>
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                        View Case Study <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Build 3: Winterized F-350 */}
                            <div className="group relative h-[500px] border border-white/10 overflow-hidden bg-carbon flex flex-col justify-end">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('/Winterized-F-350.jpg')` }} // Winterized F-350
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                                <div className="relative z-20 p-8">
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        {["Industrial", "Heating", "Custom Tank"].map(tag => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-stainless border border-white/20 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tighter mb-1">
                                        Winterized F-350
                                    </h3>
                                    <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">
                                        Diesel Heater / Slip Tank Integration
                                    </p>
                                    <p className="text-stainless/80 text-sm mb-6 line-clamp-3">
                                        We integrated a diesel-fired engine and coolant heater directly into a custom DudeRacing slip tank fuel supply for -40°C starts.
                                    </p>
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                                        View Case Study <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Section B: "On The Lift" (WIP) - Authentic Data */}
                <section>
                    <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-sm font-mono text-stainless uppercase tracking-widest border-l-2 border-yellow-500 pl-4">
                            On The Lift // Live Status
                        </h2>
                        <span className="flex items-center gap-2 text-xs text-green-400 uppercase tracking-widest animate-pulse">
                            <div className="w-2 h-2 bg-green-400 rounded-full" /> Shop Active
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1619623724330-8d4cb23f37b1?q=80&w=2670&auto=format&fit=crop", // Placeholder
                                project: "Sport Bike",
                                task: "Header Mod",
                                status: "Port Matching",
                                color: "bg-orange-500" // Moved from Sig to WIP
                            },
                            {
                                img: "https://images.unsplash.com/photo-1552176625-e47ff529b595?q=80&w=2669&auto=format&fit=crop", // Placeholder
                                project: "Aluminum Boat",
                                task: "Hull Repair",
                                status: "Welding",
                                color: "bg-blue-500"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1608611100220-41315513d804?q=80&w=2670&auto=format&fit=crop", // Placeholder
                                project: "Custom",
                                task: "Parts Tray",
                                status: "Finished",
                                color: "bg-green-500"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1616788494707-ec7637d77059?q=80&w=2487&auto=format&fit=crop", // Placeholder
                                project: "R32 GTR",
                                task: "Manifold Fab",
                                status: "Fabrication",
                                color: "bg-yellow-500"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-carbon border border-white/10 p-4 hover:border-white/30 transition-colors">
                                <div className="aspect-square bg-neutral-800 mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${item.img}')` }}
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                    <span className="text-[10px] uppercase tracking-widest text-stainless">{item.status}</span>
                                </div>
                                <h4 className="text-lg font-heading text-white uppercase tracking-wide leading-none mb-1">{item.project}</h4>
                                <p className="text-xs text-stainless/50 font-mono uppercase">{item.task}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. The "Archives" */}
                <section>
                    <h2 className="text-sm font-mono text-stainless uppercase tracking-widest mb-8 border-l-2 border-white/20 pl-4">
                        Project Archives
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm font-mono">
                            <thead className="border-b border-white/20 text-stainless uppercase tracking-widest text-xs">
                                <tr>
                                    <th className="py-4 font-normal">Year</th>
                                    <th className="py-4 font-normal">Project</th>
                                    <th className="py-4 font-normal">Scope</th>
                                    <th className="py-4 font-normal text-right">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-stainless/80">
                                {[
                                    { year: "2025", project: "Nissan S13", scope: "Roll Cage & Tubed Front", notes: "Formula Drift Spec" },
                                    { year: "2025", project: "Toyota Supra MK4", scope: "Turbo Manifold", notes: "1000hp Support" },
                                    { year: "2024", project: "Dodge Viper", scope: "Custom Exhaust", notes: "Titanium System" },
                                    { year: "2024", project: "BMW E46 M3", scope: "Subframe Reinforce", notes: "Track Prep" },
                                    { year: "2023", project: "Audi R8", scope: "Twin Turbo Kit", notes: "Fabrication Only" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 opacity-50">{row.year}</td>
                                        <td className="py-4 text-white font-bold">{row.project}</td>
                                        <td className="py-4">{row.scope}</td>
                                        <td className="py-4 text-right opacity-50">{row.notes}</td>
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
