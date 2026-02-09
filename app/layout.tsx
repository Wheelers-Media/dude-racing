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
  metadataBase: new URL('https://duderacing.ca'),
  title: {
    default: "Dude Racing | Custom Fabrication & Mobile Welding",
    template: "%s | Dude Racing"
  },
  description: "Premier custom fabrication, TIG welding, and high-performance turbo builds in Grande Prairie, Alberta. 24/7 Mobile welding and aluminum repair services.",
  keywords: [
    "Fabrication Grande Prairie",
    "Mobile Welding",
    "Aluminum Welding",
    "Turbo Kits",
    "Roll Cages",
    "TIG Welding",
    "Custom Exhaust",
    "Grande Prairie",
    "Peace Country"
  ],
  authors: [{ name: "Dude Racing" }],
  creator: "Dude Racing",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://duderacing.ca",
    title: "Dude Racing | Built for Speed",
    description: "Custom fabrication, turbo systems, and mobile welding in Grande Prairie, AB.",
    siteName: "Dude Racing",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Dude Racing Custom Fabrication & Mobile Welding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dude Racing | Built for Speed",
    description: "Custom fabrication, turbo systems, and mobile welding in Grande Prairie, AB.",
    images: ["/thumbnail.png"],
    creator: "@DudeRacing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/Favicon-black.png",
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
