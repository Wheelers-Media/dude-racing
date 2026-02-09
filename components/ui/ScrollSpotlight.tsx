"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

// Simple utility 
function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface ScrollSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string; // Base classes
    activeClassName?: string; // Applied when in "Hot Zone" (Mobile)
    inactiveClassName?: string; // Applied when NOT in "Hot Zone" (Mobile)
}

export default function ScrollSpotlight({
    children,
    className,
    activeClassName = "border-signal grayscale-0 opacity-100", // Default Active Defaults
    inactiveClassName = "border-white/10 grayscale opacity-50", // Default Inactive Defaults
    ...props
}: ScrollSpotlightProps) {
    const ref = useRef<HTMLDivElement>(null);

    // "Hot Zone" = Middle 10% of the screen (-45% top, -45% bottom)
    const isInView = useInView(ref, {
        margin: "-45% 0px -45% 0px",
        once: false
    });

    return (
        <div
            ref={ref}
            className={classNames(
                // Base Class (Always Applied)
                className,

                // MOBILE LOGIC (< md)
                // Note: We use `max-md:` prefix to Ensure this logic ONLY touches mobile.
                // On desktop (md+), these classes are ignored, letting :hover take over.

                isInView
                    ? (activeClassName || "")
                    : (inactiveClassName || "")
            )}
            {...props}
        >
            {children}
        </div>
    );
}
