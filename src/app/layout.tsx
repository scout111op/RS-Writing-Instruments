import type { Metadata } from "next";
import { Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ProductZoomProvider } from "@/context/ProductZoomContext";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: {
    default: 'RS Writing Instruments | Handcrafted Ebonite Feeds & Fountain Pens',
    template: '%s | RS Writing Instruments',
  },
  description:
    'Hand-cut ebonite feeds (₹75-₹450) and PRAVAH bespoke fountain pens. Parker & Sheaffer fitment. B2B wholesale and custom orders welcome.',
  keywords: [
    'ebonite feed India',
    'fountain pen feeds wholesale',
    'custom ebonite pen',
    'PRAVAH fountain pen',
    'hard rubber pen India',
    'ebonite fountain pen India',
    'Parker 51 ebonite feed',
    'Sheaffer feed replacement',
  ],
  authors: [{ name: 'Sanjay Singh', url: 'https://www.rswriting.in/about' }],
  creator: 'RS Writing Instruments',
  publisher: 'RS Writing Instruments',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  alternates: {
    canonical: 'https://www.rswriting.in',
  },
  openGraph: {
    title: 'RS Writing Instruments | Handcrafted Ebonite Feeds & Fountain Pens',
    description:
      'Hand-cut ebonite feeds (₹75-₹450) and PRAVAH bespoke fountain pens. Parker & Sheaffer fitment. B2B wholesale and custom orders welcome.',
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
    title: 'RS Writing Instruments | Handcrafted Ebonite Feeds & Fountain Pens',
    description:
      'Hand-cut ebonite feeds (₹75-₹450) and PRAVAH bespoke fountain pens crafted with precision capillary action.',
    images: ['/logo.png'],
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
  other: {
    'google-adsense-account': 'ca-pub-3069042669867265',
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
    name: 'RS Writing Instruments',
    url: 'https://www.rswriting.in',
    logo: 'https://www.rswriting.in/logo.png',
    image: 'https://www.rswriting.in/logo.png',
    description:
      'Manufacturer and artisan atelier specializing in handcrafted natural ebonite fountain pens and precision hand-cut capillary feeds.',
    telephone: '+919455664795',
    email: 'contact@rswriting.in',
    foundingDate: '2011',
    founder: {
      '@type': 'Person',
      name: 'Sanjay Singh',
      jobTitle: 'Master Pen Maker & Nibsmith',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Artisan Atelier',
      addressLocality: 'India',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226001',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Ebonite Fountain Pens',
      'Hand-Cut Capillary Feeds',
      'Parker 51 Feed Geometry',
      'Sheaffer Feed Geometry',
      'Hard Rubber Lathe Craftsmanship',
      'PRAVAH Fountain Pens',
    ],
    sameAs: [
      'https://wa.me/919455664795',
    ],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': 'https://www.rswriting.in/#store',
    name: 'RS Writing Instruments',
    url: 'https://www.rswriting.in',
    image: 'https://www.rswriting.in/logo.png',
    priceRange: '₹75 - ₹1490',
    telephone: '+919455664795',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Artisan Atelier',
      addressLocality: 'India',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226001',
      addressCountry: 'IN',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.rswriting.in/#website',
    name: 'RS Writing Instruments',
    url: 'https://www.rswriting.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.rswriting.in/pens?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-3069042669867265" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
        <ProductZoomProvider>
          {children}
        </ProductZoomProvider>
        
        {/* Defer AdSense script via lazyOnload to protect Core Web Vitals (TBT & INP) */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3069042669867265"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        <Analytics />
      </body>
    </html>
  );
}
