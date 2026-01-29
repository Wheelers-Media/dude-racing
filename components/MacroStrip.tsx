export default function MacroStrip() {
    const images = [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", // Placeholder TIG
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45f7?q=80&w=1936&auto=format&fit=crop", // Placeholder CNC
        "https://images.unsplash.com/photo-1535136829763-eb5e638d01eb?q=80&w=2056&auto=format&fit=crop", // Placeholder Exhaust
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Placeholder Metal
    ];

    return (
        <section className="w-full relative overflow-hidden border-y border-white/5 bg-carbon">
            <div className="flex w-full animate-marquee">
                {[...images, ...images, ...images].map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-[400px] h-[300px] relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                ))}
            </div>
        </section>
    );
}
