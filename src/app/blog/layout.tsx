import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fountain Pen Guides, Maintenance & FAQs | RS Writing Instruments',
  description:
    'Comprehensive fountain pen master guide: how to refill cartridges/converters/eyedroppers, ebonite feed science, nib tuning, and top fountain pen FAQs.',
  keywords: [
    'how to refill fountain pen',
    'how to store fountain pen',
    'ebonite feed vs plastic feed',
    'fountain pen maintenance India',
    'heat set ebonite feed',
    'how to clean fountain pen',
    'best fountain pen care guide',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/blog',
  },
  openGraph: {
    title: 'Fountain Pen Guides, Maintenance & FAQs | RS Writing Instruments',
    description:
      'Master nibsmith guide: how to refill fountain pens, ebonite feed capillary dynamics, proper pen storage, and expert fountain pen maintenance.',
    url: 'https://www.rswriting.in/blog',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'RS Writing Instruments Fountain Pen Guides' }],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fountain Pen Guides, Maintenance & FAQs | RS Writing Instruments',
    description: 'Master nibsmith guide: how to refill fountain pens, ebonite feed care, and pen maintenance.',
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
