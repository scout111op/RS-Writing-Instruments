import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FeedCatalogSection from '@/components/FeedCatalogSection';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { rawProducts } from '@/lib/products';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Hand-Cut Ebonite Fountain Pen Feeds Wholesale | RS Writing Instruments',
  description:
    'Precision hand-cut natural hard rubber ebonite feeds for Parker & Sheaffer geometries. Single, double, and triple music ink channels starting at ₹75.',
  keywords: [
    'ebonite feed wholesale',
    'fountain pen feed India',
    'Parker 51 ebonite feed',
    'Sheaffer feed replacement',
    'music flow triple channel feed',
    'cartridge ebonite feed',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/feeds',
  },
  openGraph: {
    title: 'Hand-Cut Ebonite Fountain Pen Feeds Wholesale',
    description:
      'Precision hard rubber feeds crafted in Lucknow for Parker and Sheaffer geometries. Single, double, and triple music ink channels.',
    url: 'https://www.rswriting.in/feeds',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'RS Hand-Cut Ebonite Feeds' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hand-Cut Ebonite Fountain Pen Feeds Wholesale',
    description: 'Precision hard rubber feeds crafted in Lucknow for Parker and Sheaffer geometries.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeedsPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am interested in inquiring about your hand-cut ebonite feeds.'
  )}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.rswriting.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ebonite Feeds',
        item: 'https://www.rswriting.in/feeds',
      },
    ],
  };

  const feedItemSchemas = rawProducts.map((feed) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: feed.name,
    description: `${feed.model} - ${feed.shape} shape fitment with ${feed.ink} ink channel. ${feed.type}.`,
    image: `https://www.rswriting.in${feed.image}`,
    brand: {
      '@type': 'Brand',
      name: 'RS Writing Instruments',
    },
    offers: {
      '@type': 'Offer',
      price: feed.basePrice.toString(),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'RS Writing Instruments',
      },
    },
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why choose hand-cut ebonite feeds over plastic feeds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ebonite is naturally porous and hydrophilic, allowing superior ink adhesion and precise capillary flow that eliminates dry writes and hard starts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What geometries do your ebonite feeds support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We manufacture ebonite feeds tailored for Parker and Sheaffer pen geometries, as well as cartridge-compatible friction fit models.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Minimum Order Quantity (MOQ) for wholesale feed orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our standard Minimum Order Quantity (MOQ) for wholesale ebonite feed batches is 250 pieces.',
        },
      },
    ],
  };

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {feedItemSchemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <WhatsAppBanner />

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 py-4 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3.5 group" aria-label="RS Writing Instruments Home">
            <div className="relative w-12 h-12 shrink-0">
              <Image src="/logo.png" alt="RS Writing Instruments Logo" fill className="object-contain" sizes="48px" priority />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl font-extrabold tracking-tight leading-none text-[#102E29]">RS WRITING</span>
              <span className="block text-[9px] uppercase tracking-[0.32em] font-bold text-[#B8963E] mt-0.5">Instruments</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-xs tracking-wider uppercase font-medium">
            <Link href="/" className="text-[#6B6558] hover:text-[#B8963E]">Home</Link>
            <Link href="/pens" className="text-[#6B6558] hover:text-[#B8963E]">Pens Catalog</Link>
            <Link href="/feeds" className="text-[#102E29] font-bold relative py-1">
              Ebonite Feeds
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
            <Link href="/about" className="text-[#6B6558] hover:text-[#B8963E]">About Atelier</Link>
            <Link href="/wholesale" className="text-[#6B6558] hover:text-[#B8963E]">B2B Wholesale</Link>
          </div>

          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps text-xs py-2.5 px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42]"
          >
            <FaWhatsapp size={15} style={{ color: '#25D366' }} /> Inquiry
          </a>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-3">
            <Link href="/" className="hover:text-[#102E29]">Home</Link>
            <span>/</span>
            <span className="text-[#102E29] font-semibold">Ebonite Feeds</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#102E29] tracking-tight">
            Hand-Cut <span className="italic text-[#B8963E]">Ebonite Feeds</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#6B6558] mt-3 max-w-2xl">
            Precision-cut ebonite feeds for Parker & Sheaffer geometries. Engineered with fine single, double, and triple capillary grooves for wet, consistent ink control.
          </p>
        </div>

        <FeedCatalogSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-[#E5DFD5] bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#6B6558]">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="RS Writing Instruments Logo" width={40} height={40} className="object-contain" />
            <span className="font-serif text-lg font-bold text-[#102E29]">RS Writing Instruments</span>
          </div>
          <div className="flex gap-6 uppercase tracking-wider text-[11px] font-semibold">
            <Link href="/" className="hover:text-[#B8963E]">Home</Link>
            <Link href="/pens" className="hover:text-[#B8963E]">Pens</Link>
            <Link href="/feeds" className="hover:text-[#B8963E]">Feeds</Link>
            <Link href="/about" className="hover:text-[#B8963E]">About</Link>
            <Link href="/wholesale" className="hover:text-[#B8963E]">Wholesale</Link>
          </div>
          <span>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
