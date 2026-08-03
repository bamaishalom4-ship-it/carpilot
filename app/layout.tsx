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
    "Carpilot connects vehicle owners, families, businesses, and organizations with background-screened professional drivers in Nigeria. Serving Abuja first. Every journey in safe hands.",
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
      "Connecting vehicle owners with background-screened professional drivers in Nigeria. Every journey in safe hands.",
    images: ["/images/carpilot-hero-driver.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%230A0A0A'/><rect x='52' y='14' width='34' height='34' rx='8' fill='%23C49D00'/><path d='M14 52 C14 71.8823 30.1177 88 50 88 L86 88 C88.2091 88 90 86.2091 90 84 L90 66 C90 63.7909 88.2091 62 86 62 L50 62 C44.4772 62 40 57.5228 40 52 L14 52 Z' fill='%23FFFFFF'/></svg>", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
