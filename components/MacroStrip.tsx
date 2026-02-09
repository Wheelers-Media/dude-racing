"use client";

import React from 'react';
import ScrollImage from './ui/ScrollImage';

interface MacroStripProps {
    images: string[];
}

export default function MacroStrip({ images }: MacroStripProps) {
    const [shuffledImages, setShuffledImages] = React.useState<string[]>([]);

    // Shuffle on mount to avoid hydration mismatch
    React.useEffect(() => {
        const shuffled = [...images];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledImages(shuffled);
    }, [images]);

    // Show nothing until mounted/shuffled to prevent layout shift or flash
    if (shuffledImages.length === 0) return null;

    return (
        <section className="w-full relative overflow-hidden border-b border-white/5 bg-carbon">
            {/* Speed up animation on mobile (10s), Keep desktop "perfect" (20s) */}
            {/* w-max ensures the width is based on CONTENT, so -33.33% transform is exactly 1/3 of the strip length */}
            <div className="flex w-max animate-marquee [animation-duration:60s] md:[animation-duration:120s]">
                {[...shuffledImages, ...shuffledImages, ...shuffledImages].map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-[300px] h-[300px] relative overflow-hidden">
                        <ScrollImage
                            src={img}
                            alt="Gallery Image"
                            fill
                            className="object-cover contrast-125"
                        />
                        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
}
