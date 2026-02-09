"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Mail } from "lucide-react";

export default function ShopPage() {
    const products = [
        {
            id: 1,
            name: "Leather Patch Snapback",
            variant: "Black / Brown",
            price: "$35.00 CAD",
            image: "/Supply/leatherpatchsnapback.jpg",
            badge: "Limited Stock"
        },
        {
            id: 2,
            name: "Shop Logo Tee",
            variant: "Red / Blue / Black",
            price: "$45.00 CAD",
            image: "/Supply/shoplogotee.jpg",
            badge: "In Stock"
        },
        {
            id: 3,
            name: "Decal Pack",
            variant: "Mixed",
            price: "$15.00 CAD",
            image: "/Supply/stickers.jpg",
            badge: "Low Qty"
        },
        {
            id: 4,
            name: "BILLET KEYCHAIN OPENER",
            variant: "Black anodized aluminum bottle opener with laser engraving.",
            price: "$12.00 CAD",
            image: "/Supply/keychains.jpg",
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
                    style={{ backgroundImage: `url('/Supply/shoplogotee.jpg')` }} // Shop Logo Tee
                />

                <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full text-center">
                    <h1 className="text-3xl md:text-7xl font-heading font-bold text-white uppercase tracking-widest leading-normal mb-4">
                        SHOP GOODS // SMALL BATCH
                    </h1>
                    <p className="text-stainless text-sm md:text-lg font-mono uppercase tracking-widest">
                        Printed locally in the Peace Country. <br className="md:hidden" />
                        Available for shop pickup or direct shipping.
                    </p>
                </div>
            </section>

            <main className="max-w-[1400px] mx-auto px-6 py-24">

                {/* 2. Inventory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {products.map((product) => (
                        <div key={product.id} className="group border border-white/10 bg-carbon hover:border-white/30 transition-all duration-300">
                            {/* Image Container - Square */}
                            <div className="aspect-square relative overflow-hidden bg-white/5 border-b border-white/5">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0 grayscale-0"
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

                                {/* Direct Inquiry Link */}
                                <a
                                    href={`mailto:info@duderacing.com?subject=Order Inquiry: ${product.name}`}
                                    className="w-full bg-white text-black font-heading font-bold uppercase py-4 tracking-widest hover:bg-stainless transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Mail className="w-4 h-4" />
                                    Order Direct
                                </a>
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
