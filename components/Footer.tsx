"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useInquiryModal } from "@/context/InquiryModalContext";

export default function Footer() {
    const { openModal } = useInquiryModal();
    return (
        <footer className="bg-carbon pt-24 pb-12 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 transition-all">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <Image src="/dude-racing-logo-white.png" alt="DudeRacing" width={150} height={28} className="h-7 w-auto" />
                        </Link>
                        <p className="text-stainless text-sm">
                            Est. 2018
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/duderacing" target="_blank" className="p-2 border border-white/10 text-stainless hover:text-black hover:bg-white hover:border-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/Duderacing" target="_blank" className="p-2 border border-white/10 text-stainless hover:text-black hover:bg-white hover:border-white transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Projects", href: "/projects" },
                                { name: "Services", href: "/services" },
                                { name: "The Shop", href: "/the-shop" },
                                { name: "Supply", href: "/shop" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-stainless hover:text-white text-sm uppercase tracking-wider transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services/mobile-repair" className="text-stainless hover:text-white text-sm uppercase tracking-wider transition-colors">
                                    Mobile Welding Available
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => openModal('service')}
                                    className="text-stainless hover:text-white text-sm uppercase tracking-wider transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Local Data */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Location</h4>
                        <address className="not-italic text-stainless space-y-2">
                            <p className="text-white text-lg font-heading">Grande Prairie, Alberta</p>
                            <p className="text-sm">Serving the Peace Country Region</p>
                            <p className="text-sm mt-6 text-stainless/50">By Appointment Only</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stainless/40 uppercase tracking-widest">
                    <p>© 2026 DudeRacing Identity System.</p>
                    <p>Engineered for Speed.</p>
                </div>
            </div>
        </footer>
    );
}
