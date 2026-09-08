import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy of RS Writing Instruments. Learn how we safeguard your personal data, client orders, and custom bespoke fountain pen requests.',
  keywords: [
    'RS Writing Instruments privacy policy',
    'customer data protection fountain pen',
    'artisan fountain pen privacy',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | RS Writing Instruments',
    description:
      'How RS Writing Instruments protects client data, delivery details, and bespoke fountain pen orders.',
    url: 'https://www.rswriting.in/privacy',
    siteName: 'RS Writing Instruments',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'RS Writing Instruments Privacy Policy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | RS Writing Instruments',
    description:
      'How RS Writing Instruments protects client data, delivery details, and bespoke fountain pen orders.',
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

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
