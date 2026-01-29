import { ArrowRight } from "lucide-react";

export default function FreshFromBench() {
    return (
        <section className="py-32 bg-noise border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">

                    {/* Left: Large Visual */}
                    <div className="relative min-h-[600px] bg-neutral-900 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-80" />
                        <div className="absolute top-6 left-6 bg-white text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                            Latest Build
                        </div>
                    </div>

                    {/* Right: Spec Sheet */}
                    <div className="bg-carbon p-12 flex flex-col justify-center">
                        <div className="mb-8">
                            <span className="text-stainless text-xs uppercase tracking-[0.2em] mb-2 block">Fresh From The Bench</span>
                            <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-wider mb-8">
                                K24 S2000 Swap
                            </h2>
                            <div className="w-12 h-1 bg-stainless mb-12" />
                        </div>

                        <div className="space-y-8 mb-12">
                            <div>
                                <span className="block text-xs text-stainless/50 uppercase tracking-widest mb-1">Status</span>
                                <span className="text-white text-xl font-heading uppercase tracking-wide">Fabrication Phase</span>
                            </div>
                            <div>
                                <span className="block text-xs text-stainless/50 uppercase tracking-widest mb-1">Parts</span>
                                <span className="text-stainless text-lg font-light">304SS Manifold, 3.5in Downpipe, Custom Mounts</span>
                            </div>
                            <div>
                                <span className="block text-xs text-stainless/50 uppercase tracking-widest mb-1">Platform</span>
                                <span className="text-stainless text-lg font-light">Honda S2000 (AP1)</span>
                            </div>
                        </div>

                        <button className="group flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold hover:text-stainless transition-colors">
                            View Case Study
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
