import Link from "next/link";
import ScrollImage from "../ui/ScrollImage";
import ScrollSpotlight from "../ui/ScrollSpotlight";

const SERVICES = [
    {
        title: "CUSTOM FABRICATION",
        desc: "Turbo systems, exhaust, and chassis work.",
        image: "/Custom Fabrication.jpg",
        link: "/services/fabrication"
    },
    {
        title: "PERFORMANCE EXHAUSTS",
        desc: "Custom stainless systems, headers, and valve integration.",
        image: "/exhaust-systems.jpg",
        link: "/services/exhausts"
    },
    {
        title: "FIELD OPERATIONS",
        desc: "Mobile AC/DC TIG & Hoist. We come to the site.",
        image: "/Mobile-Hoist.jpg",
        link: "/services/mobile-repair"
    },
    {
        title: "PREMIUM TRANSPORT",
        desc: "Enclosed, insured, low-clearance hauling.",
        image: "/transport.jpg",
        link: "/services/transport"
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-24 bg-page-bg">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* The 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.map((service, i) => (
                        <ScrollSpotlight
                            key={i}
                            activeClassName="spotlight-active"
                        >
                            <Link href={service.link} className="group relative h-[450px] overflow-hidden border border-white/5 block">
                                <ScrollImage
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110"
                                    containerClassName="absolute inset-0 w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-wider">{service.title}</h3>
                                    <p className="text-stainless text-sm mb-6 max-w-md font-light leading-relaxed">{service.desc}</p>
                                    <div className="inline-flex items-center gap-2 text-xs font-bold text-signal tracking-[0.2em] uppercase border-b border-signal/30 pb-1 group-hover:border-signal max-md:group-[.spotlight-active]:border-signal transition-colors">
                                        Explore Service
                                    </div>
                                </div>
                            </Link>
                        </ScrollSpotlight>
                    ))}
                </div>

                {/* The "Process" Section - Added Below Grid */}
                <div className="mt-32 border-t border-white/10 pt-20">
                    <h3 className="text-xl font-heading text-white mb-16 tracking-[0.2em] uppercase">THE DUDERACING STANDARD</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { step: "01", title: "CONSULTATION", text: "We assess your goals, timeline, and chassis requirements." },
                            { step: "02", title: "DESIGN & PREP", text: "Material selection, Mockup & Fitment, and precise planning." },
                            { step: "03", title: "FABRICATION", text: "Aerospace-grade welding and assembly in our controlled shop." },
                            { step: "04", title: "DELIVERY", text: "Quality check, final polish, and secure transport to your door." }
                        ].map((item, i) => (
                            <ScrollSpotlight
                                key={i}
                                className="space-y-6 group"
                                activeClassName="text-signal"
                            >
                                <div className="text-5xl font-heading text-neutral-800 group-hover:text-signal max-md:group-[.text-signal]:text-signal transition-colors duration-500">
                                    {item.step}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white tracking-[0.2em] mb-3">{item.title}</h4>
                                    <p className="text-sm text-stainless leading-relaxed font-light">{item.text}</p>
                                </div>
                            </ScrollSpotlight>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
