import ServicePageLayout from "@/components/ServicePageLayout";

export default function CustomFabricationPage() {
    const timeline = [
        { title: "Consultation & Mockup", description: "We define project goals and perform physical mockups to ensure perfect component placement." },
        { title: "Design & Chassis Prep", description: "Material selection and chassis preparation to handle increased power and flow requirements." },
        { title: "Precision Fabrication", description: "TIG welding with 304SS or Titanium, back-purged for sanitary welds. CNC flange surfacing." },
        { title: "Quality Control", description: "Pressure testing, fitment verification, and ultrasonic weld inspection if required." },
    ];

    const specs = [
        { label: "Material Grade", value: "304 / 321 Stainless" },
        { label: "Weld Method", value: "Back-Purged TIG" },
        { label: "Flange Flatness", value: "+/- 0.05mm" },
        { label: "Warranty", value: "Lifetime Crack Flex" },
        { label: "Purge Gas", value: "99.9% Argon" },
        { label: "Finish", value: "Raw / Polished / Cerakote" },
    ];

    const materials = [
        { symbol: "Ti", name: "Titanium", number: "22" },
        { symbol: "Al", name: "Aluminum", number: "13" },
        { symbol: "321", name: "321 Stainless", number: "SS" },
    ];

    return (
        <ServicePageLayout
            title="Custom Fabrication"
            subtitle="Exhausts / Manifolds / Chassis"
            heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
            timelineSteps={timeline}
            specs={specs}
            materials={materials}
            leadTime="3-4 Weeks"
        >
            <p className="text-white text-lg leading-relaxed mb-6 font-light">
                <strong className="text-white font-bold">We don&apos;t do &quot;good enough&quot;.</strong> At DudeRacing, custom fabrication is about solving complex packaging constraints while maximizing flow and durability. Whether it&apos;s a twin-turbo manifold for a K-Swap or a titanium exhaust for a supercar, the process is the same: rigorous development and artistic execution.
            </p>
            <p className="text-stainless text-lg leading-relaxed font-light">
                Our shop is equipped with industry-leading Miller Dynasty welders, extensive fixturing tables, and the material selection to handle any motorsport application.
            </p>
        </ServicePageLayout>
    );
}
