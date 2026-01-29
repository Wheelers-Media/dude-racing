import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";
import { InquiryModalProvider } from "@/context/InquiryModalContext";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DudeRacing | Custom Fabrication & Performance - Grande Prairie",
  description: "Premium custom fabrication, welding repair, and engine building in Grande Prairie, AB. Specializing in Turbo systems, K-Swaps, and LS Swaps.",
  icons: {
    icon: "/Favicon-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable} ${inter.variable} bg-page-bg text-white antialiased`}>
        <InquiryModalProvider>
          {children}
        </InquiryModalProvider>
      </body>
    </html>
  );
}
