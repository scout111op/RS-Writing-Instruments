import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NibCard from '@/components/NibCard';
import Navbar from '@/components/Navbar';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { bockNibs } from '@/lib/nibs';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp, FaArrowLeft, FaCogs, FaCheckCircle, FaExchangeAlt, FaShieldAlt, FaTools, FaLayerGroup } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Bock Compatible Nibs #6 Type 250 | Precision Fountain Pen Replacement Nibs',
  description:
    'Buy precision Bock compatible nibs (#6 Type 250 series) in Stealth Black PVD, Premium Golden, and Rose Gold. 6 point sizes (EEF to Double Broad) with dual-view front and back inspection.',
  keywords: [
    'Bock compatible nibs',
    'Bock compatable nibs',
    'Bock #6 Type 250 series',
    'Bock 250 replacement nib',
    'Bock fountain pen nib',
    'Bock compatible nib India',
    'Bock nib unit',
    'Bock #6 nibs',
    'Bock 250 housing nib',
    'ebonite feed bock nib pairing',
    'black bock nib',
    'gold bock nib',
    'rose gold bock nib',
    'Bock EEF nib',
    'Bock EF nib',
    'Bock Medium nib',
    'Bock Broad nib',
    'Bock Double Broad nib',
    'German replacement nibs',
    'fountain pen replacement nibs',
    'custom pen maker nibs',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/nibs/bock',
  },
  openGraph: {
    title: 'Bock Compatible Nibs #6 Type 250 | RS Writing Instruments',
    description: 'Precision Bock compatible fountain pen nibs with interactive dual-view front and reverse inspection in 3 luxury finishes.',
    url: 'https://www.rswriting.in/nibs/bock',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/nibs/bock-gold-front.webp', width: 1200, height: 900, alt: 'Bock Compatible Nibs #6 Type 250 Series' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bock Compatible Nibs #6 Type 250 | RS Writing Instruments',
    description: 'Triple-inspected Bock compatible replacement nibs in 3 finishes and 6 tip widths.',
    images: ['/nibs/bock-gold-front.webp'],
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

export default function BockNibsPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am inquiring about your standalone Bock #6 Type 250 series fountain pen nibs.'
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
        name: 'Bock #6 Type 250 series',
        item: 'https://www.rswriting.in/nibs/bock',
      },
    ],
  };

  const productSchemas = bockNibs.map((nib, idx) =>
    createProductSchema({
      name: nib.title,
      description: nib.seoDescription,
      image: [nib.primaryImage, nib.secondaryImage || ''],
      sku: nib.sku,
      mpn: nib.mpn,
      price: '450',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/nibs/bock',
      category: 'Office Supplies > Writing Instruments > Fountain Pen Parts > Nibs',
      ratingValue: (4.9).toFixed(1),
      reviewCount: 28 + idx * 4,
    })
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What pens and housings are compatible with Bock #6 Type 250 nibs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These nibs fit standard Bock Type 250 screw-in collar assemblies, custom bespoke ebonite/acrylic pen sections threaded for Bock units (such as Karas Kustoms, Namisu, Conid, bespoke artisan pens), and pens paired with 6.0mm Bock-profile ebonite feeds.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does dual-view inspection mean for Bock nibs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every Bock nib card includes interactive front-face and reverse-angle photography, allowing penmakers and collectors to inspect both the aesthetic engraving and the reverse curvature shank that seats against the ebonite feed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I pair a Bock #6 nib with an RS Writing ebonite feed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our hand-cut natural ebonite feeds are available in dedicated 6.0mm Bock profiles. When aligned and inserted into a Type 250 housing collar, the capillary ink channel perfectly matches the nib slit for steady, leak-free ink flow.',
        },
      },
      {
        '@type': 'Question',
        name: 'What nib tip grades are available in the Bock Type 250 series?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide six German tip widths: Extra Extra Fine (EEF ~0.3mm), Extra Fine (EF ~0.4mm), Fine (F ~0.5mm), Medium (M ~0.65mm), Broad (B ~0.85mm), and Double Broad (BB ~1.1mm).',
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
            <span className="text-[#102E29] font-semibold">Bock #6 Type 250 series</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8963E]/10 border border-[#B8963E]/20 text-[#B8963E] text-xs font-mono mb-3">
              <span>GERMAN ENGINEERING</span>
              <span>•</span>
              <span>BOCK TYPE 250 PROFILE</span>
              <span>•</span>
              <span>DUAL-VIEW INSPECTION</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#102E29] tracking-tight leading-none mb-4">
              Bock #6 Type 250 series <span className="italic text-[#B8963E]">Fountain Pen Nibs</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-[#6B6558] leading-relaxed">
              Precision German-profile replacement fountain pen nibs precision-formed for standard <strong>Bock #6 Type 250 series housings</strong> and custom bespoke fountain pen sections. Every piece undergoes optical tine alignment and microscopic slit inspection. Choose from <strong>PVD Stealth Black</strong>, <strong>Premium Golden</strong>, and <strong>Rose Gold</strong> finishes across 6 point sizes.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E5DFD5] text-[#102E29] font-medium flex items-center gap-2">
                <FaCogs className="text-[#B8963E]" /> 6.0mm Shank Fitment
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E5DFD5] text-[#102E29] font-medium flex items-center gap-2">
                <FaShieldAlt className="text-[#25D366]" /> 100% Optical Tine Check
              </span>
              <Link href="/nibs/jowo" className="bg-[#102E29]/5 px-3 py-1.5 rounded-lg border border-[#102E29]/15 text-[#102E29] font-medium hover:bg-[#102E29]/10 transition-colors flex items-center gap-1.5">
                <FaExchangeAlt size={11} className="text-[#B8963E]" /> View Jowo #6 Geometry
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
              Toggle front/back view on any card to examine tine geometry and reverse feed contact surface.
            </p>
          </div>
          <Link href="/nibs" className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8963E] hover:underline shrink-0">
            <FaArrowLeft size={11} /> View All Nibs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {bockNibs.map((nib, index) => (
            <NibCard key={nib.id} nib={nib} priority={index === 0} />
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
                Bock Type 250 Architecture &amp; <span className="italic text-[#B8963E]">Fitment Standards</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#6B6558]">
              <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#102E29] flex items-center gap-2">
                  <FaTools className="text-[#B8963E]" /> Housing &amp; Feed Collar Fitment
                </h3>
                <p className="leading-relaxed">
                  The Bock Type 250 nib unit is one of the most widely adopted standards in luxury and bespoke fountain pen making. The nib shank has a calibrated arc designed to wrap securely around a <strong>6.0mm diameter feed</strong> with the distinctive Bock tail contour.
                </p>
                <ul className="space-y-1.5 pl-4 list-disc text-[#524D44]">
                  <li><strong>Housing Collar:</strong> Bock Type 250 threaded assemblies</li>
                  <li><strong>Feed Diameter:</strong> 6.0mm (standard &amp; high-flow ebonite)</li>
                  <li><strong>Material:</strong> Premium German spring stainless steel with hard tipping pellet</li>
                  <li><strong>Total Length:</strong> Approx. 35mm from tail to tip</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#102E29] flex items-center gap-2">
                  <FaLayerGroup className="text-[#B8963E]" /> Point Sizes &amp; Writing Characteristics
                </h3>
                <p className="leading-relaxed">
                  Every nib point size is calibrated for smooth ink release and responsive feedback on standard fountain pen paper:
                </p>
                <ul className="space-y-1.5 pl-4 list-disc text-[#524D44]">
                  <li><strong>EEF (~0.3mm):</strong> Ultra-crisp hairlines for microscopic writing and technical sketching</li>
                  <li><strong>EF (~0.4mm):</strong> Precise everyday journaling with quick-dry fountain pen inks</li>
                  <li><strong>Fine (~0.5mm):</strong> Balanced wetness for signatures and general office notes</li>
                  <li><strong>Medium (~0.65mm):</strong> Rich shading and smooth glide across all paper grades</li>
                  <li><strong>Broad (~0.85mm):</strong> Expressive character, highlighting sheen and shimmering inks</li>
                  <li><strong>Double Broad (~1.1mm):</strong> Wet calligraphy strokes, bold signatures, and stub conversions</li>
                </ul>
              </div>
            </div>

            {/* Cross-link Gateway to Feeds and Jowo Nibs */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-serif text-base font-bold text-[#102E29]">
                  Pair with RS Hand-Cut Ebonite Feeds
                </h3>
                <p className="text-xs text-[#6B6558]">
                  Maximize ink buffer capacity and capillary control by pairing your Bock nib with our 6.0mm ebonite feeds.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link href="/feeds" className="fable-pill-btn text-xs py-2.5 px-4 font-semibold bg-[#102E29] text-white hover:bg-[#1A4A42] transition-colors">
                  Explore Ebonite Feeds
                </Link>
                <Link href="/nibs/jowo" className="fable-pill-btn text-xs py-2.5 px-4 font-semibold bg-white border border-[#E5DFD5] text-[#102E29] hover:text-[#B8963E] transition-colors">
                  Compare Jowo #6
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
                Bock #6 Replacement <span className="italic text-[#B8963E]">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#6B6558]">
              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  Can I swap this nib into my existing pen without buying a new housing?
                </h3>
                <p className="leading-relaxed">
                  Yes. If your fountain pen uses a Bock #6 or Type 250 housing unit, you can easily friction-fit this replacement nib with your current feed and collar. Our nibs follow strict German curvature specifications for seamless friction fitment.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  How do I order or check live stock on WhatsApp?
                </h3>
                <p className="leading-relaxed">
                  Select your desired point size on the nib card above and click the &ldquo;Inquire on WhatsApp&rdquo; button. This connects you directly with our workshop technician who can verify stock, advise on feed pairing, and provide direct dispatch tracking.
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
            <Link href="/nibs/bock" className="hover:text-[#B8963E] text-[#102E29] font-bold">Bock #6</Link>
            <Link href="/nibs/jowo" className="hover:text-[#B8963E]">Jowo #6</Link>
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
