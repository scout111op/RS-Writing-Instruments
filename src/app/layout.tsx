import type { Metadata } from "next";
import { Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL('https://rs-writing-instruments.vercel.app'),
  title: {
    default: 'RS Writing Instruments — Handcrafted Ebonite Feeds & Bespoke Pens',
    template: '%s | RS Writing Instruments',
  },
  description:
    'Hand-cut ebonite fountain pen feeds & handcrafted hard rubber pens made in Lucknow, India. Engineered with precision capillary grooves for wet, consistent ink control. Trusted by master nibsmiths worldwide.',
  keywords: [
    'ebonite feed',
    'fountain pen feed',
    'hand cut ebonite feed',
    'Parker 51 ebonite feed',
    'Sheaffer feed replacement',
    'PRAVAH fountain pen',
    'ebonite pens India',
    'capillary ink feed',
    'custom fountain pen feed',
    'luxury writing instruments',
    'triple channel ebonite feed',
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
    canonical: 'https://rs-writing-instruments.vercel.app',
  },
  openGraph: {
    title: 'RS Writing Instruments — Handcrafted Ebonite Feeds & Bespoke Pens',
    description:
      'Precision hard rubber capillary feeds & bespoke ebonite fountain pens. Engineered in Lucknow, India with fine capillary grooves for perfect ink control.',
    url: 'https://rs-writing-instruments.vercel.app',
    siteName: 'RS Writing Instruments',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'RS Writing Instruments Handcrafted Ebonite Feeds Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RS Writing Instruments — Precision Ebonite Feeds',
    description: 'Precision hard rubber ebonite feeds & artisan fountain pens.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://rs-writing-instruments.vercel.app/#organization',
        'name': 'RS Writing Instruments',
        'url': 'https://rs-writing-instruments.vercel.app',
        'logo': 'https://rs-writing-instruments.vercel.app/logo.png',
        'description': 'Manufacturer of hand-cut ebonite fountain pen feeds and bespoke hard rubber writing instruments in Lucknow, India.',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Lucknow',
          'addressLocality': 'Lucknow',
          'addressRegion': 'Uttar Pradesh',
          'postalCode': '226401',
          'addressCountry': 'IN'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91-9455664795',
          'contactType': 'sales',
          'availableLanguage': ['English', 'Hindi']
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://rs-writing-instruments.vercel.app/#localbusiness',
        'name': 'RS Writing Instruments Atelier',
        'image': 'https://rs-writing-instruments.vercel.app/logo.png',
        'telephone': '+919455664795',
        'email': 'fountainpenmechanic@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Lucknow',
          'addressLocality': 'Lucknow',
          'addressRegion': 'Uttar Pradesh',
          'postalCode': '226401',
          'addressCountry': 'IN'
        },
        'priceRange': '₹₹'
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/rs_logo.svg" />
        <link rel="alternate icon" href="/assets/rs_logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
