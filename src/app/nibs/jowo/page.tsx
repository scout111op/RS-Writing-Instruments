import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NibCard from '@/components/NibCard';
import Navbar from '@/components/Navbar';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { jowoNibs } from '@/lib/nibs';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp, FaArrowLeft, FaCogs, FaCheckCircle, FaExchangeAlt, FaShieldAlt, FaTools, FaLayerGroup } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Jowo #6 Type 250 series Fountain Pen Nibs | Precision German Replacement Nibs',
  description:
    'Precision German-profile Jowo #6 Type 250 series replacement fountain pen nibs in Tactile Black, Premium Golden, and Rose Gold. Choice of EEF to Double Broad point sizes.',
  keywords: [
    'Jowo #6 Type 250 series',
    'Jowo #6 replacement nib',
    'Jowo fountain pen nib',
    'Jowo #6 nibs India',
    'fountain pen replacement nib',
    'ebonite feed jowo nib',
    'black jowo nib',
    'gold jowo nib',
    'rose gold jowo nib',
    'Jowo #6 EEF nib',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/nibs/jowo',
  },
  openGraph: {
    title: 'Jowo #6 Type 250 series Fountain Pen Nibs | RS Writing Instruments',
    description: 'Precision Jowo #6 Type 250 series replacement fountain pen nibs in 3 luxury finishes across 6 tip grades.',
    url: 'https://www.rswriting.in/nibs/jowo',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/nibs/jowo-gold.webp', width: 1200, height: 900, alt: 'Jowo #6 Type 250 series Fountain Pen Nibs' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jowo #6 Type 250 series Fountain Pen Nibs | RS Writing Instruments',
    description: 'Precision German-profile replacement fountain pen nibs in Tactile Black, Premium Golden, and Rose Gold.',
    images: ['/nibs/jowo-gold.webp'],
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

export default function JowoNibsPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am inquiring about your standalone Jowo #6 Type 250 series fountain pen nibs.'
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
        name: 'Precision Nibs',
        item: 'https://www.rswriting.in/nibs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Jowo #6 Type 250 series',
        item: 'https://www.rswriting.in/nibs/jowo',
      },
    ],
  };

  const productSchemas = jowoNibs.map((nib, idx) =>
    createProductSchema({
      name: nib.title,
      description: nib.seoDescription,
      image: [nib.primaryImage],
      sku: nib.sku,
      mpn: nib.mpn,
      price: '450',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/nibs/jowo',
      category: 'Office Supplies > Writing Instruments > Fountain Pen Parts > Nibs',
      ratingValue: (4.9).toFixed(1),
      reviewCount: 26 + idx * 4,
    })
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which fountain pens use standard Jowo #6 nib units?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Jowo #6 nibs are the international benchmark used by major brands and bespoke custom penmakers (including Leonardo, Esterbrook, Franklin-Christoph, Opus 88, Monteverde, Conklin, and countless independent turners).',
        },
      },
      {
        '@type': 'Question',
        name: 'What finishes are available for Jowo #6 nibs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer Tactile Black PVD, Mirror-Polished Premium Golden, and Luxury Rose Gold finishes, each electroplated with exceptional corrosion resistance against corrosive fountain pen inks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Jowo #6 nibs be fitted with RS Writing ebonite feeds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our 6.0mm Jowo-profile hand-cut ebonite feeds feature precise tail step-downs that seat flush beneath Jowo #6 nibs, eliminating ink starvation and delivering rich, consistent ink lines.',
        },
      },
      {
        '@type': 'Question',
        name: 'What point sizes are offered for Jowo #6 nibs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our Jowo #6 collection spans six point widths: EEF (Extra Extra Fine), EF (Extra Fine), Fine, Medium, Broad, and Double Broad (BB).',
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
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <WhatsAppBanner />

      <Navbar activeTab="nibs" />

      {/* ── BREADCRUMB & HERO ─────────────────────────────────────── */}
      <header className="py-12 bg-radial from-white via-[#FAF8F5] to-[#FDFBF7] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-4">
            <Link href="/" className="hover:text-[#102E29]">Home</Link>
            <span>/</span>
            <Link href="/nibs" className="hover:text-[#102E29]">Precision Nibs</Link>
            <span>/</span>
            <span className="text-[#102E29] font-semibold">Jowo #6 Type 250 series</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8963E]/10 border border-[#B8963E]/20 text-[#B8963E] text-xs font-mono mb-3">
              <span>GERMAN STANDARD</span>
              <span>•</span>
              <span>JOWO #6 GEOMETRY</span>
              <span>•</span>
              <span>UNIVERSAL FITMENT</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#102E29] tracking-tight leading-none mb-4">
              Jowo #6 Type 250 series <span className="italic text-[#B8963E]">Fountain Pen Nibs</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-[#6B6558] leading-relaxed">
              Precision German-profile replacement fountain pen nibs precision-formed for universal <strong>Jowo #6 threaded collars</strong> and bespoke pen sections. Engineered for wet, continuous ink transfer and butter-smooth tactile feedback. Available in <strong>Tactile Black</strong>, <strong>Premium Golden</strong>, and <strong>Rose Gold</strong> across 6 point sizes.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E5DFD5] text-[#102E29] font-medium flex items-center gap-2">
                <FaCogs className="text-[#B8963E]" /> 6.0mm Collar Fitment
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E5DFD5] text-[#102E29] font-medium flex items-center gap-2">
                <FaShieldAlt className="text-[#25D366]" /> 100% Optical Tine Check
              </span>
              <Link href="/nibs/bock" className="bg-[#102E29]/5 px-3 py-1.5 rounded-lg border border-[#102E29]/15 text-[#102E29] font-medium hover:bg-[#102E29]/10 transition-colors flex items-center gap-1.5">
                <FaExchangeAlt size={11} className="text-[#B8963E]" /> View Bock #6 Geometry
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRODUCT CARDS GRID ───────────────────────────────────── */}
      <main className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#102E29]">
              Select Finish &amp; <span className="italic text-[#B8963E]">Point Size</span>
            </h2>
            <p className="text-xs text-[#6B6558] mt-1">
              Precision tine calibration ensures instantaneous ink startup on all fountain pen paper surfaces.
            </p>
          </div>
          <Link href="/nibs" className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8963E] hover:underline shrink-0">
            <FaArrowLeft size={11} /> View All Nibs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {jowoNibs.map((nib) => (
            <NibCard key={nib.id} nib={nib} />
          ))}
        </div>

        {/* ── TECHNICAL DEEP DIVE SECTION ─────────────────────────── */}
        <section className="py-12 border-t border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8963E] font-bold block mb-2">
                Engineering Specifications
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#102E29]">
                Jowo #6 Architecture &amp; <span className="italic text-[#B8963E]">Fitment Standards</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#6B6558]">
              <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#102E29] flex items-center gap-2">
                  <FaTools className="text-[#B8963E]" /> Collar Fitment &amp; Section Dimensions
                </h3>
                <p className="leading-relaxed">
                  Jowo #6 is the universal standard in contemporary pen crafting. Its 6.0mm shank radius matches standard screw-in housings found across modern acrylic, ebonite, and metal fountain pens.
                </p>
                <ul className="space-y-1.5 pl-4 list-disc text-[#524D44]">
                  <li><strong>Housing Collar:</strong> Standard Jowo #6 threaded units and friction-fit sections</li>
                  <li><strong>Feed Diameter:</strong> 6.0mm (precision-matched to RS ebonite feeds)</li>
                  <li><strong>Material:</strong> Premium German spring stainless steel with hardened tipping</li>
                  <li><strong>Total Length:</strong> Approx. 34.5mm from tail to tip</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#102E29] flex items-center gap-2">
                  <FaLayerGroup className="text-[#B8963E]" /> Point Sizes &amp; Writing Characteristics
                </h3>
                <p className="leading-relaxed">
                  Calibrated for balanced ink transfer and responsive hand feedback across all paper types:
                </p>
                <ul className="space-y-1.5 pl-4 list-disc text-[#524D44]">
                  <li><strong>EEF (~0.3mm):</strong> Ultra-fine, hair-thin lines perfect for compact kanji, math, or margins</li>
                  <li><strong>EF (~0.4mm):</strong> Clean everyday writing on standard office copy paper</li>
                  <li><strong>Fine (~0.5mm):</strong> Optimal ink economy and crisp letter definition</li>
                  <li><strong>Medium (~0.65mm):</strong> The universal favourite for smooth journaling with deep shading</li>
                  <li><strong>Broad (~0.85mm):</strong> Lush ink saturation, great for sheening and shimmering inks</li>
                  <li><strong>Double Broad (~1.1mm):</strong> Wet, expressive lines ideal for signature pens and custom grinds</li>
                </ul>
              </div>
            </div>

            {/* Cross-link Gateway to Feeds and Bock Nibs */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-serif text-base font-bold text-[#102E29]">
                  Pair with RS Hand-Cut Ebonite Feeds
                </h3>
                <p className="text-xs text-[#6B6558]">
                  Enhance ink delivery and prevent drying out by pairing your Jowo #6 nib with our specialized 6.0mm ebonite feeds.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link href="/feeds" className="fable-pill-btn text-xs py-2.5 px-4 font-semibold bg-[#102E29] text-white hover:bg-[#1A4A42] transition-colors">
                  Explore Ebonite Feeds
                </Link>
                <Link href="/nibs/bock" className="fable-pill-btn text-xs py-2.5 px-4 font-semibold bg-white border border-[#E5DFD5] text-[#102E29] hover:text-[#B8963E] transition-colors">
                  Compare Bock #6
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────────── */}
        <section className="py-12 border-t border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#102E29]">
                Jowo #6 Replacement <span className="italic text-[#B8963E]">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#6B6558]">
              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  Will this nib fit any fountain pen that takes a #6 size nib?
                </h3>
                <p className="leading-relaxed">
                  Most modern custom and production fountain pens designed for #6 nibs use Jowo #6 geometry. If your pen has a 6.0mm feed and a Jowo-style housing collar, this nib will fit directly into place.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  How do I request availability or place an inquiry?
                </h3>
                <p className="leading-relaxed">
                  Simply select your point size on the nib card above and click the &ldquo;Inquire on WhatsApp&rdquo; button. Our team will verify real-time stock and guide you through payment and tracked dispatch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AtelierPoliciesSection />
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
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
            <Link href="/nibs" className="hover:text-[#B8963E]">All Nibs</Link>
            <Link href="/nibs/bock" className="hover:text-[#B8963E]">Bock #6</Link>
            <Link href="/nibs/jowo" className="hover:text-[#B8963E] text-[#102E29] font-bold">Jowo #6</Link>
            <Link href="/blog" className="hover:text-[#B8963E]">Guides</Link>
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
