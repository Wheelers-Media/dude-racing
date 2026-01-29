"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
}: BeforeAfterSliderProps) {
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
            x.set(containerRef.current.offsetWidth / 2); // Start at 50%
        }
    }, [x]);

    const clipPathParams = useTransform(x, (item) => {
        return `inset(0 ${width - item}px 0 0)`;
    });

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video bg-carbon border border-white/10 overflow-hidden select-none group touch-none"
            onMouseMove={(e) => {
                if (!containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                x.set(Math.max(0, Math.min(width, e.clientX - rect.left)));
            }}
            onTouchMove={(e) => {
                if (!containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                x.set(Math.max(0, Math.min(width, e.touches[0].clientX - rect.left)));
            }}
        >
            {/* Background Image (Before - Visible by default, hidden by After) */}
            <Image
                src={beforeImage}
                alt="Before"
                fill
                className="object-cover grayscale contrast-125"
                draggable={false}
                unoptimized
            />

            <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-heading uppercase tracking-widest px-3 py-1 border border-white/20">
                {beforeLabel}
            </div>

            {/* Foreground Image (After - Clipped) */}
            <motion.div
                style={{ clipPath: clipPathParams }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    draggable={false}
                    unoptimized
                />
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-heading uppercase tracking-widest px-3 py-1 font-bold">
                    {afterLabel}
                </div>
            </motion.div>

            {/* Handle */}
            <motion.div
                style={{ x }}
                className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-10 flex items-center justify-center -ml-[1px]"
            >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg text-black">
                    <MoveHorizontal className="w-4 h-4" />
                </div>
            </motion.div>
        </div>
    );
}
