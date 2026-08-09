import type { Metadata } from "next";
import { Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'RS Writing Instruments | Handcrafted Ebonite Feeds & Fountain Pens - Lucknow',
  description:
    'Hand-cut ebonite feeds (₹75-₹450) and PRAVAH bespoke fountain pens crafted in Lucknow. Parker & Sheaffer fitment. B2B wholesale and custom orders welcome.',
  keywords: [
    'ebonite feed India',
    'fountain pen feeds wholesale',
    'custom ebonite pen',
    'PRAVAH fountain pen',
    'hard rubber pen Lucknow',
    'ebonite fountain pen India',
  ],
  icons: {
    icon: [
      { url: "/assets/rs_logo.svg", type: "image/svg+xml" },
      { url: "/rs_logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/rs_logo.svg",
    apple: "/assets/rs_logo.svg",
  },
  alternates: {
    canonical: 'https://www.rswriting.in',
  },
  openGraph: {
    title: 'RS Writing Instruments | Handcrafted Ebonite Feeds & Fountain Pens - Lucknow',
    description:
      'Hand-cut ebonite feeds (₹75-₹450) and PRAVAH bespoke fountain pens crafted in Lucknow. Parker & Sheaffer fitment. B2B wholesale and custom orders welcome.',
    url: 'https://www.rswriting.in',
    siteName: 'RS Writing Instruments',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'RS Writing Instruments Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RS Writing Instruments | Handcrafted Ebonite Feeds & Fountain Pens - Lucknow',
    description:
      'Hand-cut ebonite feeds (₹75-₹450) and PRAVAH bespoke fountain pens crafted in Lucknow.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.rswriting.in/#organization',
    'name': 'RS Writing Instruments',
    'url': 'https://www.rswriting.in',
    'telephone': '+919455664795',
    'email': 'fountainpenmechanic@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Lucknow',
      'addressLocality': 'Lucknow',
      'addressRegion': 'Uttar Pradesh',
      'addressCountry': 'India'
    },
    'sameAs': []
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.rswriting.in/#website',
    'name': 'RS Writing Instruments',
    'url': 'https://www.rswriting.in',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.rswriting.in/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/svg+xml" href="/assets/rs_logo.svg" />
        <link rel="alternate icon" href="/assets/rs_logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ background: "#FDFBF7", color: "#1B2A2A" }}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
