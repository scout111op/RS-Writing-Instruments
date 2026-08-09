import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'B2B Wholesale Ebonite Feeds & Pens | RS Writing Instruments',
  description:
    'Wholesale ebonite feeds and custom fountain pen manufacturing for brands, retailers, and pen turners. Low MOQ 250 Pcs with express global shipping.',
  keywords: [
    'B2B ebonite feed wholesale',
    'fountain pen parts bulk',
    'Parker replacement feed wholesale',
    'custom ebonite pen manufacturing',
    'pen maker supplies India',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/wholesale',
  },
  openGraph: {
    title: 'B2B Wholesale Ebonite Feeds & Pens | RS Writing Instruments',
    description:
      'Wholesale ebonite feeds and custom fountain pen manufacturing for brands, retailers, and pen turners.',
    url: 'https://www.rswriting.in/wholesale',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'B2B Wholesale RS Writing' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Wholesale Ebonite Feeds & Pens | RS Writing Instruments',
    description: 'Wholesale ebonite feeds and custom fountain pen manufacturing.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WholesalePage() {
  const wholesaleWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am interested in inquiring about B2B Wholesale ebonite feeds and custom pen manufacturing.'
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

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <Link href="/feeds" className="text-[#6B6558] hover:text-[#B8963E]">Ebonite Feeds</Link>
            <Link href="/about" className="text-[#6B6558] hover:text-[#B8963E]">About Atelier</Link>
            <Link href="/wholesale" className="text-[#102E29] font-bold relative py-1">
              B2B Wholesale
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
          </div>

          <a
            href={wholesaleWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps text-xs py-2.5 px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42]"
          >
            <FaWhatsapp size={15} style={{ color: '#25D366' }} /> Inquiry
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-4">
          <Link href="/" className="hover:text-[#102E29]">Home</Link>
          <span>/</span>
          <span className="text-[#102E29] font-semibold">B2B Wholesale</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#102E29] tracking-tight mb-6">
          B2B Wholesale <span className="italic text-[#B8963E]">Ebonite Components</span>
        </h1>

        <p className="text-base text-[#6B6558] mb-8 leading-relaxed">
          We partner with pen turners, boutique brands, and pen manufacturers worldwide to supply high-performance hand-cut ebonite feeds and custom pen components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-[#E5DFD5]">
            <span className="text-[10px] uppercase tracking-widest text-[#B8963E] font-bold block mb-2">MOQ</span>
            <h3 className="font-serif text-xl font-bold text-[#102E29] mb-2">250 Pcs Minimum</h3>
            <p className="text-xs text-[#6B6558]">Flexible minimum order quantities tailored for small-batch and volume manufacturing.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5DFD5]">
            <span className="text-[10px] uppercase tracking-widest text-[#B8963E] font-bold block mb-2">Geometries</span>
            <h3 className="font-serif text-xl font-bold text-[#102E29] mb-2">Parker & Sheaffer Fit</h3>
            <p className="text-xs text-[#6B6558]">Precision-engineered feed shapes for seamless integration into standard pen barrels.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5DFD5]">
            <span className="text-[10px] uppercase tracking-widest text-[#B8963E] font-bold block mb-2">Customization</span>
            <h3 className="font-serif text-xl font-bold text-[#102E29] mb-2">Custom Channels</h3>
            <p className="text-xs text-[#6B6558]">Single, double, and music flow triple channel carving to meet exact flow specifications.</p>
          </div>
        </div>

        <div className="p-8 bg-[#102E29] text-[#FDFBF7] rounded-3xl text-center">
          <h2 className="font-serif text-3xl font-normal mb-3">Request Wholesale Catalog & Pricing Sheet</h2>
          <p className="text-xs text-[#E5DFD5] max-w-lg mx-auto mb-6">
            Connect directly with our workshop manager on WhatsApp to discuss custom feed dimensions, line sheets, and volume quotes.
          </p>
          <a
            href={wholesaleWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn inline-flex items-center gap-2 py-3 px-8 text-xs font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D]"
          >
            <FaWhatsapp size={16} /> Contact Wholesale Desk
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
