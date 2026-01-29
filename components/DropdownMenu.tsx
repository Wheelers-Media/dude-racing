"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownMenuProps {
    items: DropdownItem[];
    isOpen: boolean;
}

export default function DropdownMenu({ items, isOpen }: DropdownMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scaleY: 0.9, y: -10 }}
                    animate={{ opacity: 1, scaleY: 1, y: 0 }}
                    exit={{ opacity: 0, scaleY: 0.9, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }} // Sharp/Mechanical
                    style={{ originY: 0 }}
                    className="absolute top-full left-0 w-48 bg-carbon border-x border-b border-stainless z-50 shadow-xl"
                >
                    {items.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors border-b border-white/5 last:border-0"
                        >
                            {item.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
