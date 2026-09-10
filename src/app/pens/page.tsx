import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProductCatalogGrid from '@/components/ProductCatalogGrid';
import Navbar from '@/components/Navbar';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import FountainPenBlogSection from '@/components/FountainPenBlogSection';
import { catalogProducts } from '@/lib/catalogProducts';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Handcrafted Ebonite Fountain Pens | PRAVAH Collection',
  description:
    'Discover PRAVAH handcrafted natural ebonite fountain pens. Featuring Caviar Black, Forest Green, Swirl, and Demonstrator models with precision hand-cut capillary feeds.',
  keywords: [
    'PRAVAH fountain pen',
    'handcrafted ebonite pen',
    'ebonite pens India',
    'custom fountain pen',
    'hard rubber fountain pen',
    'ebonite demonstrator pen',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/pens',
  },
  openGraph: {
    title: 'Handcrafted Ebonite Fountain Pens | PRAVAH Collection',
    description:
      'Artisan hard rubber fountain pens crafted with precision hand-cut ebonite capillary feeds.',
    url: 'https://www.rswriting.in/pens',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'PRAVAH Handcrafted Ebonite Fountain Pens - RS Writing Instruments' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handcrafted Ebonite Fountain Pens | PRAVAH Collection',
    description: 'Artisan hard rubber fountain pens crafted with precision hand-cut ebonite capillary feeds.',
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
          text: 'PRAVAH fountain pens feature hand-cut natural ebonite capillary feeds engineered by RS Writing Instruments for wet, consistent ink flow.',
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
      {
        '@type': 'Question',
        name: 'How do I refill a PRAVAH fountain pen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PRAVAH fountain pens support a versatile 3-way filling system: standard international cartridges, piston converters for bottled ink, or 3.2ml eyedropper filling with silicone grease.',
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
      <Navbar activeTab="pens" />

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
            Each pen in our PRAVAH series is turned from premium vulcanized ebonite hard rubber, equipped with custom hand-cut capillary feeds for consistent, smooth ink delivery.
          </p>
        </div>

        <ProductCatalogGrid />

        {/* ARTISANAL CRAFTSMANSHIP PHILOSOPHY */}
        <section className="py-14 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <span className="fable-mono-caps text-[#B8963E] block font-medium">
              HERITAGE LATHE TURNING / SOLID VULCANIZED HARD RUBBER
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#102E29] tracking-tight">
              Engineered for <span className="italic text-[#B8963E]">Lifelong Tactile Writing</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
              The PRAVAH series represents a convergence of traditional lathe craftsmanship and precision capillary fluid mechanics. Unlike modern injection-molded acrylic resin pens that feel slick and cold, each PRAVAH fountain pen is meticulously turned from solid vulcanized natural rubber (ebonite).
            </p>
            <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
              Ebonite warms naturally to the touch, absorbing microscopic hand moisture for an ergonomic, fatigue-free grip during hours of writing. Fitted with our signature hand-cut ebonite feeds, ink is delivered through micro-grooves that automatically balance surface tension and atmospheric pressure for instantaneous starts and zero hard-stalls.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs max-w-2xl mx-auto text-left">
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD5]">
                <span className="block font-bold text-[#102E29] mb-1">Zero Plastic Feeds</span>
                <span className="text-[#9C9588] text-[11px]">100% natural ebonite feed ensures superior ink adhesion and wet, consistent flow.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD5]">
                <span className="block font-bold text-[#102E29] mb-1">3-Way Filling System</span>
                <span className="text-[#9C9588] text-[11px]">Supports international standard converter, cartridge, or 3.2ml high-capacity eyedropper.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Master Fountain Pen Guides & FAQs Section */}
        <FountainPenBlogSection />

        <AtelierPoliciesSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-[#E5DFD5] bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#6B6558]">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image src="/logo.png" alt="RS Writing Instruments Logo" fill className="object-contain" sizes="40px" />
            </div>
            <span className="font-serif text-lg font-bold text-[#102E29]">RS Writing Instruments</span>
          </div>
          <div className="flex gap-5 uppercase tracking-wider text-[11px] font-semibold flex-wrap justify-center">
            <Link href="/" className="hover:text-[#B8963E]">Home</Link>
            <Link href="/pens" className="hover:text-[#B8963E]">Pens</Link>
            <Link href="/feeds" className="hover:text-[#B8963E]">Feeds</Link>
            <Link href="/nibs" className="hover:text-[#B8963E]">Nibs</Link>
            <Link href="/blog" className="hover:text-[#B8963E]">Guides &amp; FAQs</Link>
            <Link href="/about" className="hover:text-[#B8963E]">About</Link>
            <Link href="/wholesale" className="hover:text-[#B8963E]">Wholesale</Link>
            <span className="text-[#D1C9BE] hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-[#B8963E]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#B8963E]">Terms</Link>
            <Link href="/acceptable-use" className="hover:text-[#B8963E]">Acceptable Use</Link>
          </div>
          <span suppressHydrationWarning>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
