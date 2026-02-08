"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";
import { useInView } from "framer-motion";
// Simple utility since we are self-contained here
function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface ScrollImageProps extends ImageProps {
    containerClassName?: string;
}

export default function ScrollImage({
    src,
    alt,
    className,
    containerClassName,
    ...props
}: ScrollImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    // "amount: 0.5" means 50% of the element must be visible
    // We can also use margin similar to "-20%" to focus on the center. 
    // The user asked for "enter the center of the viewport".
    // "center" usually implies a margin-based approach in intersection observer, 
    // but useInView with amount:0.5 is a good proxy for "substantial visibility".
    // To strictly track "center of viewport", margin is better: "0px 0px -50% 0px" starts when top hits center? 
    // Let's stick to standard `amount: 0.5` for "50% visible" as requested.
    const isInView = useInView(ref, { amount: 0.5, once: false });

    return (
        <div
            ref={ref}
            className={classNames("relative overflow-hidden", containerClassName)}
        >
            <Image
                src={src}
                alt={alt}
                className={classNames(
                    // Base transition
                    "transition-all duration-700 ease-out",

                    // Desktop Behavior (md+):
                    // Default: Grayscale, Scale 100
                    // Hover: Color, Scale 1.02
                    "md:grayscale md:scale-100 md:hover:grayscale-0 md:hover:scale-[1.02]",

                    // Mobile Behavior (max-md):
                    // We use the `isInView` state to toggle classes specifically for mobile
                    isInView
                        ? "max-md:grayscale-0 max-md:scale-[1.02]" // Active (In Center)
                        : "max-md:grayscale max-md:scale-100",    // Inactive

                    className
                )}
                {...props}
            />
        </div>
    );
}
