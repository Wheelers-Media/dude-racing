import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                carbon: "#1A1A1A",
                "carbon-light": "#222222",
                stainless: "#B0B3B5",
                "page-bg": "#0f0f0f",
                signal: "#eab308",
                arc: "#3b82f6",
            },
            fontFamily: {
                heading: ["var(--font-chakra-petch)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0px",
                sm: "0px",
                md: "0px",
                lg: "0px",
                xl: "0px",
                "2xl": "0px",
                "3xl": "0px",
                full: "0px",
                none: "0px",
            },
        },
    },
    plugins: [],
};
export default config;
