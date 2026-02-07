"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { useInquiryModal } from "@/context/InquiryModalContext";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
    const [servicesOpen, setServicesOpen] = useState(false); // Dropdown State
    const { openModal } = useInquiryModal();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Dropdown Items
    const serviceItems = [
        { label: "Fabrication", href: "/services/fabrication" },
        { label: "Exhausts", href: "/services/exhausts" },
        { label: "Transport", href: "/services/transport" },
        { label: "Mobile Repair & Hoist", href: "/services/mobile-repair" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-carbon/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between relative z-50">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/dude-racing-logo-white.png" alt="DudeRacing" width={200} height={32} className="h-6 md:h-5 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">

                    <Link href="/projects" className="text-stainless hover:text-white uppercase tracking-wider text-sm transition-colors">
                        Projects
                    </Link>

                    {/* Services with Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <div className="flex items-center gap-1 py-6">
                            <Link
                                href="/services"
                                className="text-stainless hover:text-white uppercase tracking-wider text-sm transition-colors"
                            >
                                Services
                            </Link>
                            <ChevronDown className={`w-3 h-3 text-stainless transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                        </div>

                        {/* The Tactical Dropdown */}
                        <div className="absolute top-[60px] left-0">
                            <DropdownMenu items={serviceItems} isOpen={servicesOpen} />
                        </div>
                    </div>

                    <Link href="/the-shop" className="text-stainless hover:text-signal uppercase tracking-wider text-sm transition-colors">
                        The Shop
                    </Link>

                    <Link href="/shop" className="text-yellow-500 hover:text-signal uppercase tracking-wider text-sm transition-colors font-bold">
                        Supply
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => openModal('build')}
                        className="hidden md:block bg-white text-black font-heading font-bold uppercase px-6 py-3 text-sm tracking-widest hover:bg-stainless transition-colors rounded-none"
                    >
                        Get A Quote
                    </button>

                    <button onClick={toggleMenu} className="md:hidden text-white p-2">
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-xl z-40 transition-all duration-300 md:hidden flex flex-col items-center justify-center ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col items-center gap-8">
                    <Link href="/projects" onClick={() => setIsOpen(false)} className="text-white font-heading text-3xl uppercase tracking-widest hover:text-stainless transition-colors">
                        Projects
                    </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-white font-heading text-3xl uppercase tracking-widest hover:text-stainless transition-colors">
                        Services
                    </Link>
                    <Link href="/the-shop" onClick={() => setIsOpen(false)} className="text-white font-heading text-3xl uppercase tracking-widest hover:text-stainless transition-colors">
                        The Shop
                    </Link>
                    <Link href="/shop" onClick={() => setIsOpen(false)} className="text-yellow-500 font-heading text-3xl uppercase tracking-widest hover:text-white transition-colors">
                        Supply
                    </Link>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            openModal('service');
                        }}
                        className="text-white font-heading text-3xl uppercase tracking-widest hover:text-stainless transition-colors"
                    >
                        Contact
                    </button>

                    <div className="mt-8 flex flex-col items-center gap-6">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openModal('build');
                            }}
                            className="bg-white text-black font-heading font-bold uppercase px-8 py-4 text-lg tracking-widest hover:bg-stainless transition-colors rounded-none w-full"
                        >
                            Get A Quote
                        </button>
                        <a href="tel:5872982222" className="text-stainless hover:text-white font-mono text-sm tracking-wider">
                            (587) 298-2222
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
