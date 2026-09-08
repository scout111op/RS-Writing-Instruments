import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy',
  description:
    'Acceptable Use Policy of RS Writing Instruments. Guidelines for fair usage of our digital pen catalogues, technical feed blueprints, and atelier services.',
  keywords: [
    'RS Writing Instruments acceptable use',
    'fountain pen catalogue terms',
    'ebonite feed intellectual property',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/acceptable-use',
  },
  openGraph: {
    title: 'Acceptable Use Policy | RS Writing Instruments',
    description:
      'Fair usage rules for RS Writing Instruments digital catalogues, technical specifications, and intellectual property.',
    url: 'https://www.rswriting.in/acceptable-use',
    siteName: 'RS Writing Instruments',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'RS Writing Instruments Acceptable Use Policy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acceptable Use Policy | RS Writing Instruments',
    description:
      'Fair usage rules for RS Writing Instruments digital catalogues, technical specifications, and intellectual property.',
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

export default function AcceptableUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
