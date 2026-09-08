import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service & Atelier Policies',
  description:
    'Terms of Service of RS Writing Instruments. Handcrafted ebonite fountain pen guarantees, 7-day warranty, ebonite feed care, and shipping terms.',
  keywords: [
    'RS Writing Instruments terms of service',
    'fountain pen warranty India',
    'ebonite feed return policy',
    'bespoke pen crafting terms',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/terms',
  },
  openGraph: {
    title: 'Terms of Service & Atelier Policies | RS Writing Instruments',
    description:
      'Atelier terms, 7-day craftsmanship warranty, ebonite care instructions, and shipping guidelines.',
    url: 'https://www.rswriting.in/terms',
    siteName: 'RS Writing Instruments',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'RS Writing Instruments Terms of Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Atelier Policies | RS Writing Instruments',
    description:
      'Atelier terms, 7-day craftsmanship warranty, ebonite care instructions, and shipping guidelines.',
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
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
