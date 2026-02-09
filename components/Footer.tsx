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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 transition-all">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block relative group">
                            <Image
                                src="/dude-racing-logo-white.png"
                                alt="DudeRacing"
                                width={150}
                                height={28}
                                className="h-7 w-auto group-hover:opacity-0 transition-opacity duration-300"
                            />
                            <Image
                                src="/dude-racing-logo-yellow.png"
                                alt="DudeRacing"
                                width={150}
                                height={28}
                                className="h-7 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
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

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Projects", href: "/projects" },
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
                                <button
                                    onClick={() => openModal('service')}
                                    className="text-stainless hover:text-white text-sm uppercase tracking-wider transition-colors text-left"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Mobile Repair", href: "/services/mobile-repair" },
                                { name: "Custom Fabrication", href: "/services/fabrication" },
                                { name: "Exhaust Systems", href: "/services/exhausts" },
                                { name: "Transport", href: "/services/transport" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-stainless hover:text-white text-sm uppercase tracking-wider transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
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
                    <p>© 2026 DudeRacing. All Rights Reserved.</p>
                    <p>BUILT FOR SPEED</p>
                </div>
            </div>
        </footer>
    );
}
