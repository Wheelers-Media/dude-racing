import Image from "next/image";

export default function Philosophy() {
    return (
        <section className="py-32 bg-page-bg border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-stainless text-sm tracking-[0.2em] uppercase mb-4 block">The Code</span>
                        <h2 className="text-4xl md:text-6xl font-heading text-white uppercase leading-tight mb-8">
                            We Don't Just Build Cars; <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stainless">
                                We Engineer Solutions.
                            </span>
                        </h2>
                        <p className="text-stainless/80 text-lg leading-relaxed max-w-xl mb-12">
                            Whether it’s a TIG-welded 304 stainless exhaust or a critical aluminum repair, the approach remains the same: <strong className="text-white font-normal">Craftsmanship First</strong>. We believe that every weld, every bend, and every bracket serves a purpose beyond aesthetics.
                        </p>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-2xl font-heading text-white mb-2">100%</h4>
                                <span className="text-xs text-stainless uppercase tracking-wider">In-House Fabrication</span>
                            </div>
                            <div>
                                <h4 className="text-2xl font-heading text-white mb-2">Lifetime</h4>
                                <span className="text-xs text-stainless uppercase tracking-wider">Weld Warranty</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full bg-carbon border border-white/5 p-2">
                        {/* Visual: Use a "Dime Stack" macro weld image placeholder */}
                        <div className="w-full h-full relative bg-neutral-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Placeholder for weld image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur px-6 py-3 border-l-2 border-white">
                                <span className="text-white text-xs font-heading tracking-widest uppercase">Precision TIG Welding</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
