import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { FaWhatsapp, FaFeatherAlt, FaCheckCircle, FaAward } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://rswriting.in'),
  title: 'About RS Writing Instruments | Heritage Ebonite Feed Craftsmanship',
  description:
    'Learn about RS Writing Instruments in Lucknow, India. Manufacturing hand-cut ebonite capillary feeds and bespoke hard rubber writing instruments for global nibsmiths.',
  keywords: [
    'about RS Writing Instruments',
    'ebonite feed manufacturer Lucknow',
    'fountain pen atelier India',
    'hand turned hard rubber pens',
    'capillary feed engineering',
  ],
  alternates: {
    canonical: 'https://rswriting.in/about',
  },
  openGraph: {
    title: 'About RS Writing Instruments | Heritage Ebonite Craftsmanship',
    description:
      'Handcrafted ebonite feeds and hard rubber fountain pens manufactured in Lucknow, India.',
    url: 'https://rswriting.in/about',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'RS Writing Instruments Atelier' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RS Writing Instruments | Heritage Ebonite Craftsmanship',
    description: 'Handcrafted ebonite feeds and hard rubber fountain pens manufactured in Lucknow, India.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I would like to learn more about your atelier and custom pen craftsmanship.'
  )}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rswriting.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Atelier',
        item: 'https://rswriting.in/about',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://rswriting.in/#organization',
    name: 'RS Writing Instruments',
    url: 'https://rswriting.in',
    telephone: '+919455664795',
    email: 'fountainpenmechanic@gmail.com',
    description:
      'Handcrafted ebonite fountain pen feeds & bespoke hard rubber writing instruments engineered in Lucknow, India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lucknow',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226401',
      addressCountry: 'India',
    },
  };

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
            <FaWhatsapp size={15} style={{ color: '#25D366' }} /> Contact Us
          </a>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-4">
          <Link href="/" className="hover:text-[#102E29]">Home</Link>
          <span>/</span>
          <span className="text-[#102E29] font-semibold">About Atelier</span>
        </div>

        {/* Hero Section */}
        <div className="mb-16 text-center md:text-left">
          <span className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
            LUCKNOW ATELIER & HERITAGE
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#102E29] tracking-tight">
            Where Precision Meets <span className="italic text-[#B8963E]">Heritage</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#6B6558] mt-4 max-w-3xl leading-relaxed">
            Based in Lucknow, Uttar Pradesh, RS Writing Instruments is dedicated to preserving the art of hand-cut ebonite capillary feeds and bespoke vulcanized hard rubber fountain pens.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-[#E5DFD5]">
            <FaFeatherAlt size={28} className="text-[#B8963E] mb-4" />
            <h2 className="font-serif text-xl font-bold text-[#102E29] mb-2">100% Hand-Cut Ebonite</h2>
            <p className="text-xs text-[#6B6558] leading-relaxed">
              Unlike mass-produced plastic injection feeds, every RS feed is cut from natural hard rubber. Ebonite&apos;s inherent porosity ensures optimal capillary ink attraction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E5DFD5]">
            <FaAward size={28} className="text-[#B8963E] mb-4" />
            <h2 className="font-serif text-xl font-bold text-[#102E29] mb-2">Parker & Sheaffer Fitments</h2>
            <p className="text-xs text-[#6B6558] leading-relaxed">
              We engineer specialized feed shapes compatible with classic Parker 51, Sheaffer geometries, and cartridge-converter friction fit systems trusted by nibsmiths worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E5DFD5]">
            <FaCheckCircle size={28} className="text-[#B8963E] mb-4" />
            <h2 className="font-serif text-xl font-bold text-[#102E29] mb-2">PRAVAH Bespoke Pens</h2>
            <p className="text-xs text-[#6B6558] leading-relaxed">
              Our PRAVAH line represents hand-turned fountain pen craft—combining Caviar Black, Forest Green, Swirl, and Demonstrator acrylic-ebonite hybrid designs.
            </p>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-[#102E29] text-[#FDFBF7] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal">Interested in custom pen crafting or OEM feed orders?</h2>
            <p className="text-xs text-[#D4BC72] mt-2">Connect directly with our master mechanics in Lucknow on WhatsApp.</p>
          </div>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn py-3.5 px-7 font-bold text-xs bg-[#B8963E] text-[#102E29] hover:bg-[#FDFBF7] transition-colors shrink-0"
          >
            Connect on WhatsApp
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
          <span>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
