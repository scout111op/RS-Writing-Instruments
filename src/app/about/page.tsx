import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'About Atelier & Artisan Craftsmen | RS Writing Instruments Lucknow',
  description:
    'Learn about RS Writing Instruments in Lucknow, India. Artisan craftsmen specializing in precision hand-cut ebonite feeds and custom hard rubber fountain pens.',
  keywords: [
    'RS Writing Instruments about',
    'Lucknow pen maker',
    'ebonite feed artisan',
    'hard rubber pen crafting',
    'fountain pen mechanic Lucknow',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/about',
  },
  openGraph: {
    title: 'About Atelier & Artisan Craftsmen | RS Writing Instruments',
    description: 'Artisan craftsmen in Lucknow crafting precision ebonite feeds and bespoke hard rubber fountain pens.',
    url: 'https://www.rswriting.in/about',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'RS Writing Instruments Atelier' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Atelier & Artisan Craftsmen | RS Writing Instruments',
    description: 'Artisan craftsmen in Lucknow crafting precision ebonite feeds and bespoke fountain pens.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am interested in learning more about your atelier and custom crafting capabilities.'
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
        name: 'About Atelier',
        item: 'https://www.rswriting.in/about',
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
            <Link href="/about" className="text-[#102E29] font-bold relative py-1">
              About Atelier
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
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

      {/* Main Content */}
      <main className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-4">
          <Link href="/" className="hover:text-[#102E29]">Home</Link>
          <span>/</span>
          <span className="text-[#102E29] font-semibold">About Atelier</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#102E29] tracking-tight mb-6">
          The Art of <span className="italic text-[#B8963E]">Ebonite Craftsmanship</span>
        </h1>

        <div className="prose prose-stone max-w-none text-[#6B6558] text-sm md:text-base leading-relaxed space-y-6">
          <p className="text-lg text-[#102E29] font-serif italic">
            Based in Lucknow, Uttar Pradesh, RS Writing Instruments is dedicated to preserving and perfecting the heritage art of natural hard rubber ebonite fountain pen and feed manufacturing.
          </p>

          <div className="my-8 p-6 bg-[#FAF8F5] rounded-2xl border border-[#E5DFD5]">
            <h3 className="font-serif text-xl text-[#102E29] mb-3">Our Core Specialties</h3>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
              <li><strong>Precision Hand-Cut Ebonite Feeds:</strong> Engineered for Parker & Sheaffer geometries with fine capillary single, double, and music flow ink channels.</li>
              <li><strong>PRAVAH Bespoke Pens:</strong> Hand-turned ebonite fountain pens featuring Caviar Black, Swirl, and Demonstrator models.</li>
              <li><strong>B2B Wholesale Supply:</strong> Supplying pen turners, ateliers, and collectors globally with high-grade ebonite feeds.</li>
            </ul>
          </div>

          <p>
            Every feed and pen is hand-inspected for wet, consistent ink distribution. Ebonite’s natural hydrophilic properties ensure skip-free writing and superior ink flow control compared to synthetic plastic feeds.
          </p>
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
