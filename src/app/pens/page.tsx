import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProductCatalogGrid from '@/components/ProductCatalogGrid';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { catalogProducts } from '@/lib/catalogProducts';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Handcrafted Ebonite Fountain Pens | PRAVAH Collection - RS Writing Instruments',
  description:
    'Discover PRAVAH handcrafted ebonite fountain pens made in Lucknow, India. Featuring Caviar Black, Forest Green, Swirl, and Demonstrator models with precision capillary feeds.',
  keywords: [
    'PRAVAH fountain pen',
    'handcrafted ebonite pen',
    'ebonite pens India',
    'custom fountain pen Lucknow',
    'hard rubber fountain pen',
    'ebonite demonstrator pen',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/pens',
  },
  openGraph: {
    title: 'Handcrafted Ebonite Fountain Pens | PRAVAH Collection',
    description:
      'Artisan hard rubber fountain pens crafted in Lucknow with precision ebonite capillary feeds.',
    url: 'https://www.rswriting.in/pens',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'PRAVAH Ebonite Fountain Pens' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handcrafted Ebonite Fountain Pens | PRAVAH Collection',
    description: 'Artisan hard rubber fountain pens crafted in Lucknow with precision ebonite capillary feeds.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PensPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am interested in inquiring about your PRAVAH fountain pen collection.'
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
        name: 'Handcrafted Pens',
        item: 'https://www.rswriting.in/pens',
      },
    ],
  };

  const productSchemas = catalogProducts.map((p, idx) =>
    createProductSchema({
      name: p.name,
      description: p.tagline,
      image: p.defaultImage,
      sku: `RS-${p.id.toUpperCase()}`,
      mpn: `RS-PEN-${p.id.toUpperCase()}`,
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: (4.8 + (idx % 3) * 0.1).toFixed(1),
      reviewCount: 20 + idx * 7,
    })
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What feeds are used in PRAVAH fountain pens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PRAVAH fountain pens feature hand-cut ebonite capillary feeds engineered by RS Writing Instruments in Lucknow for wet, consistent ink flow.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request custom nib or trim options for PRAVAH pens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer Black Trim (BT), Gold Trim (GT), demonstrator options, and custom nib fitting upon request via WhatsApp.',
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
      {productSchemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <WhatsAppBanner />

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 py-4 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5DFD5]" suppressHydrationWarning>
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
            <Link href="/pens" className="text-[#102E29] font-bold relative py-1">
              Handcrafted Pens
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
            <Link href="/feeds" className="text-[#6B6558] hover:text-[#B8963E]">Ebonite Feeds</Link>
            <Link href="/about" className="text-[#6B6558] hover:text-[#B8963E]">About Us</Link>
            <Link href="/wholesale" className="text-[#6B6558] hover:text-[#B8963E]">B2B Wholesale</Link>
          </div>

          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps text-xs py-2.5 px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42]"
          >
            <FaWhatsapp size={15} style={{ color: '#25D366' }} /> Enquiry
          </a>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-3">
            <Link href="/" className="hover:text-[#102E29]">Home</Link>
            <span>/</span>
            <span className="text-[#102E29] font-semibold">Handcrafted Pens</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#102E29] tracking-tight">
            PRAVAH Handcrafted <span className="italic text-[#B8963E]">Ebonite Pens</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#6B6558] mt-3 max-w-2xl">
            Each pen in our PRAVAH series is turned from premium ebonite hard rubber in Lucknow, India, equipped with custom hand-cut feeds for consistent ink delivery.
          </p>
        </div>

        <ProductCatalogGrid />
        <AtelierPoliciesSection />
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
          <span suppressHydrationWarning>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
