import type { Metadata } from "next";
import { Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RS Writing Instruments — Precision Ebonite Feeds & Bespoke Pens",
  description:
    "Handcrafted ebonite feeds and custom fountain pen mechanisms. Engineered with fine capillary grooves for perfect ink control.",
  keywords: "ebonite feed, fountain pen, Parker, Shaffer, writing instruments, ink feed, calligraphy, luxury pen parts",
  openGraph: {
    title: "RS Writing Instruments — Precision Ebonite Feeds",
    description: "Precision-crafted ebonite feeds and bespoke fountain pen mechanisms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ background: "#FDFBF7", color: "#1B2A2A" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
