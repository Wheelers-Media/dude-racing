import React, { useMemo } from 'react';

interface MacroStripProps {
    images: string[];
}

export default function MacroStrip({ images }: MacroStripProps) {
    const shuffledImages = useMemo(() => {
        return [...images].sort(() => Math.random() - 0.5);
    }, [images]);

    return (
        <section className="w-full relative overflow-hidden border-b border-white/5 bg-carbon">
            <div className="flex w-full animate-marquee">
                {[...shuffledImages, ...shuffledImages, ...shuffledImages].map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-[300px] h-[300px] relative overflow-hidden md:grayscale contrast-125 md:hover:grayscale-0 transition-all duration-500">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                ))}
            </div>
        </section>
    );
}
