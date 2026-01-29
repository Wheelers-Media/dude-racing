"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Package, ShoppingBag } from "lucide-react";

export default function ShopPage() {
    const products = [
        {
            id: 1,
            name: "DudeRacing Snapback",
            variant: "Black / Grey",
            price: "$35.00 CAD",
            image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2574&auto=format&fit=crop", // Hat Placeholder
            badge: "Limited Stock"
        },
        {
            id: 2,
            name: "Fabricator Tee",
            variant: "Heavyweight Cotton // V1",
            price: "$45.00 CAD",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop", // Tee Placeholder
            badge: "In Stock"
        },
        {
            id: 3,
            name: "Transfer Die-Cut Pack",
            variant: "White / Holo / Matte Black",
            price: "$15.00 CAD",
            image: "https://images.unsplash.com/photo-1621245781440-42bc3715c0d2?q=80&w=2670&auto=format&fit=crop", // Sticker Placeholder
            badge: "Low Qty"
        },
        {
            id: 4,
            name: "TIG Dime Sticker",
            variant: "Holographic",
            price: "$5.00 CAD",
            image: "https://images.unsplash.com/photo-1616406432452-92134329a744?q=80&w=2574&auto=format&fit=crop", // Welding visual placeholder
            badge: "In Stock"
        }
    ];

    return (
        <div className="min-h-screen bg-page-bg text-white selection:bg-white selection:text-black">
            <Header />

            {/* 1. Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10 bg-carbon">
                {/* Gritty Context Image - Overlay opacity high to keep it dark */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-multiply"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629814467261-71fb331349d7?q=80&w=2572&auto=format&fit=crop')` }} // Welding table context
                />

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold text-white uppercase tracking-widest leading-none mb-4">
                        Official Goods
                    </h1>
                    <p className="text-stainless text-sm md:text-lg font-mono uppercase tracking-widest">
                        Workwear / Decals / Limited Drops
                    </p>
                </div>
            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-24">

                {/* 2. Inventory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {products.map((product) => (
                        <div key={product.id} className="group border border-white/10 bg-carbon hover:border-white/30 transition-all duration-300">
                            {/* Image Container - Square */}
                            <div className="aspect-square relative overflow-hidden bg-white/5 border-b border-white/5">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url('${product.image}')` }}
                                />

                                {/* Scarcity Badge */}
                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-white/20 px-3 py-1">
                                    <span className="text-[10px] font-mono text-stainless uppercase tracking-widest">
                                        {product.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Details & Actions */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-heading text-xl uppercase tracking-wide text-white leading-tight mb-1">
                                            {product.name}
                                        </h3>
                                        <p className="font-mono text-xs text-stainless uppercase tracking-wider">
                                            {product.variant}
                                        </p>
                                    </div>
                                    <span className="font-mono text-lg text-white tracking-widest">
                                        {product.price}
                                    </span>
                                </div>

                                {/* Placeholder for Shopify Buy Button */}
                                <div id={`product-component-${product.id}`} className="mt-4">
                                    <button className="w-full bg-white text-black font-heading font-bold uppercase py-4 tracking-widest hover:bg-stainless transition-colors rounded-none flex items-center justify-center gap-2">
                                        <ShoppingBag className="w-4 h-4" />
                                        Add To Crate
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Shipping Note (Managing Expectations) */}
                <div className="max-w-2xl mx-auto border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                    <div className="flex justify-center mb-4 text-yellow-500">
                        <Package className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-xl uppercase tracking-wide text-white mb-2">
                        Shipping Manifesto
                    </h3>
                    <p className="font-mono text-sm text-stainless leading-relaxed uppercase tracking-wide">
                        We are a fabrication shop, not Amazon. <br />
                        <span className="text-white">Orders ship every Friday.</span>
                    </p>
                </div>

            </main>

            <Footer />
        </div>
    );
}
