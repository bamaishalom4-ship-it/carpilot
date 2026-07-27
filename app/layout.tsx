import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carpilot — Professional Drivers. Trusted Journeys. Complete Peace of Mind.",
  description:
    "Carpilot connects vehicle owners, families, businesses, and organizations with background-screened professional drivers in Nigeria. Serving Abuja first. Your journey. Our destination.",
  keywords: [
    "Carpilot",
    "Professional driver Nigeria",
    "Driver on demand Abuja",
    "Private chauffeur Nigeria",
    "Verified drivers Abuja",
    "Executive driver service",
    "Vehicle owner driver hire",
  ],
  metadataBase: new URL("https://carpilotng.online"),
  openGraph: {
    title: "Carpilot — Professional Drivers. Trusted Journeys.",
    description:
      "A premium, technology-driven platform connecting vehicle owners with vetted professional drivers in Nigeria. Serving Abuja first.",
    url: "https://carpilotng.online",
    siteName: "Carpilot Nigeria",
    images: [
      {
        url: "/images/carpilot-hero-driver.jpg",
        width: 1200,
        height: 630,
        alt: "Carpilot Professional Driver with Luxury Sedan in Abuja",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpilot — Professional Drivers. Trusted Journeys.",
    description:
      "Connecting vehicle owners with background-screened professional drivers in Nigeria. Your journey. Our destination.",
    images: ["/images/carpilot-hero-driver.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} scroll-smooth`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-gold selection:text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
