import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'About Us | 13+ Years of Ebonite Pen Craftsmanship - RS Writing Instruments',
  description:
    'Learn about RS Writing Instruments in Lucknow, India. Over 13 years of expertise in hand-cut natural ebonite feeds, bespoke hard rubber pens, and custom nib turning.',
  keywords: [
    'about RS Writing Instruments',
    'fountain pen maker Lucknow',
    'Sanjay Singh pen maker',
    'ebonite feed history',
    'Indian artisan fountain pens',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/about',
  },
  openGraph: {
    title: 'About RS Writing Instruments | Heritage Ebonite Craftsmanship',
    description:
      'Over 13 years of dedication to hand-cut ebonite capillary feeds and bespoke fountain pens in Lucknow, India.',
    url: 'https://www.rswriting.in/about',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'About RS Writing Instruments' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RS Writing Instruments | Heritage Ebonite Craftsmanship',
    description: 'Over 13 years of dedication to hand-cut ebonite feeds and bespoke pens.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
