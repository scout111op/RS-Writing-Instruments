import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { rawProducts, calculateDisplayPrice } from '@/lib/products';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp, FaFilePdf, FaCheckCircle, FaBoxes } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'B2B Wholesale & Custom OEM Ebonite Feeds | RS Writing Instruments',
  description:
    'Bulk wholesale ordering for pen manufacturers and custom nibsmiths. Minimum order quantity 250 pcs. Direct factory quotes from Lucknow, India.',
  keywords: [
    'ebonite feeds wholesale',
    'B2B fountain pen components',
    'custom OEM pen feeds',
    'ebonite feed minimum order quantity',
    'bulk ebonite feed price list',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/wholesale',
  },
  openGraph: {
    title: 'B2B Wholesale & Custom OEM Ebonite Feeds',
    description:
      'Direct factory wholesale ebonite feed supply for pen artisans and nibsmiths. Minimum order quantity 250 pcs.',
    url: 'https://www.rswriting.in/wholesale',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'RS Writing Instruments B2B Wholesale' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Wholesale & Custom OEM Ebonite Feeds',
    description: 'Direct factory wholesale ebonite feed supply for pen artisans and nibsmiths.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WholesalePage() {
  const whatsappCatalogUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am interested in placing a B2B wholesale feed order or requesting custom OEM feed turning.'
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
        name: 'B2B Wholesale',
        item: 'https://www.rswriting.in/wholesale',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity (MOQ) for wholesale ebonite feed orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our standard Minimum Order Quantity (MOQ) for B2B ebonite feed orders is 250 pieces.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer custom OEM channel depth or diameter turning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide custom OEM lathe turning, channel depth customization, and shape modification for orders exceeding 1,000 units.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I request a wholesale quote or PDF line sheet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can request wholesale pricing directly via WhatsApp (+91 94556 64795) or email us at fountainpenmechanic@gmail.com.',
        },
      },
    ],
  };

  const wholesaleProductSchemas = rawProducts.map((feed) =>
    createProductSchema({
      name: `B2B Wholesale ${feed.name}`,
      description: `Wholesale minimum order batch for ${feed.name}. ${feed.model} - ${feed.shape} shape fitment with ${feed.ink} ink channel.`,
      image: feed.image,
      sku: `RS-WHOLESALE-FEED-${feed.id}`,
      mpn: `RS-OEM-FEED-${feed.id}`,
      price: feed.basePrice.toString(),
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/wholesale',
      category: 'Office Supplies > Fountain Pen Feeds & Components',
      ratingValue: (4.9).toFixed(1),
      reviewCount: 24,
    })
  );

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
      {wholesaleProductSchemas.map((s, idx) => (
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
            <Link href="/pens" className="text-[#6B6558] hover:text-[#B8963E]">Pens Catalogue</Link>
            <Link href="/feeds" className="text-[#6B6558] hover:text-[#B8963E]">Ebonite Feeds</Link>
            <Link href="/about" className="text-[#6B6558] hover:text-[#B8963E]">About Us</Link>
            <Link href="/wholesale" className="text-[#102E29] font-bold relative py-1">
              B2B Wholesale
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
          </div>

          <a
            href={whatsappCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps text-xs py-2.5 px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42]"
          >
            <FaWhatsapp size={15} style={{ color: '#25D366' }} /> Enquiry
          </a>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-4">
          <Link href="/" className="hover:text-[#102E29]">Home</Link>
          <span>/</span>
          <span className="text-[#102E29] font-semibold">B2B Wholesale</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <span className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
            FACTORY DIRECT / B2B SUPPLY
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#102E29] tracking-tight">
            Wholesale & Custom <span className="italic text-[#B8963E]">OEM Feeds</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#6B6558] mt-3 max-w-3xl leading-relaxed">
            We partner with fountain pen brands, repair mechanics, and nibsmiths globally to supply precision natural hard rubber ebonite feeds.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD5] text-center">
            <FaBoxes size={28} className="text-[#B8963E] mx-auto mb-2" />
            <span className="block text-2xl font-bold font-serif text-[#102E29]">250 Pcs</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9C9588] mt-1 block">Minimum Order Quantity</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD5] text-center">
            <FaCheckCircle size={28} className="text-[#B8963E] mx-auto mb-2" />
            <span className="block text-2xl font-bold font-serif text-[#102E29]">100% Ebonite</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9C9588] mt-1 block">Natural Vulcanized Rubber</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E5DFD5] text-center">
            <FaFilePdf size={28} className="text-[#B8963E] mx-auto mb-2" />
            <span className="block text-2xl font-bold font-serif text-[#102E29]">Line Sheet</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9C9588] mt-1 block">Specification Sheet Available</span>
          </div>
        </div>

        {/* Wholesale Price Table Preview */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E5DFD5] shadow-xs mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#102E29] mb-4">Ebonite Feeds Line Sheet</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#102E29] text-[#FDFBF7] uppercase text-[10px] sm:text-xs tracking-wider">
                <tr>
                  <th className="p-3">Model</th>
                  <th className="p-3">Shape Fitment</th>
                  <th className="p-3">Ink Channel</th>
                  <th className="p-3">Fitment Type</th>
                  <th className="p-3 text-right">Starting Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5]">
                {rawProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF8F5]">
                    <td className="p-3 font-semibold text-[#102E29]">{p.name}</td>
                    <td className="p-3 text-[#6B6558]">{p.shape}</td>
                    <td className="p-3 text-[#6B6558]">{p.ink}</td>
                    <td className="p-3 text-[#6B6558]">{p.type}</td>
                    <td className="p-3 text-right font-bold text-[#102E29]">{calculateDisplayPrice(p)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#102E29] text-[#FDFBF7] p-8 md:p-12 rounded-3xl text-center">
          <h2 className="font-serif text-3xl font-normal mb-3">Request Wholesale Catalogue & Pricing Sheet</h2>
          <p className="text-xs text-[#D4BC72] mt-2 mb-6 max-w-xl mx-auto">
            Contact our sales team directly on WhatsApp for volume discounts, custom diameter turning, or custom channel depths.
          </p>
          <a
            href={whatsappCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn py-4 px-8 font-bold text-xs bg-[#25D366] text-white hover:bg-[#1A4A42] transition-colors inline-flex items-center gap-2"
          >
            <FaWhatsapp size={18} /> Request Wholesale Quote
          </a>
        </div>
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
