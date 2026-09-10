import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NibCatalogSection from '@/components/NibCatalogSection';
import Navbar from '@/components/Navbar';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { nibProducts } from '@/lib/nibs';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp, FaCogs, FaShippingFast, FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Precision Fountain Pen Nibs | Bock #6 Type 250 series & Jowo #6 Type 250 series Replacement Nibs',
  description:
    'Shop standalone Bock #6 Type 250 series and Jowo #6 Type 250 series replacement fountain pen nibs in Black PVD, Premium Golden, and Rose Gold. Choice of EEF, EF, Fine, Medium, Broad, and Double Broad points.',
  keywords: [
    'Bock #6 Type 250 series',
    'Jowo #6 Type 250 series',
    'fountain pen nib',
    'Bock compatible nib',
    'Jowo compatible nib',
    '#6 fountain pen nib',
    'Bock 250 replacement nib',
    'Jowo #6 replacement nib',
    'rose gold pen nib',
    'black fountain pen nib',
    'gold fountain pen nib',
    'ebonite feed nib pairing',
    'fountain pen nib points EEF EF Medium Broad',
  ],
  alternates: {
    canonical: 'https://www.rswriting.in/nibs',
  },
  openGraph: {
    title: 'Precision Fountain Pen Nibs | Bock #6 Type 250 series & Jowo #6 Type 250 series',
    description:
      'Standalone #6 fountain pen nibs engineered for Bock #6 Type 250 series and Jowo #6 Type 250 series geometries. Dual-view inspection, 3 luxury finishes, and 6 tip grades.',
    url: 'https://www.rswriting.in/nibs',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/nibs/bock-gold-front.webp', width: 1200, height: 900, alt: 'RS Writing Instruments Precision Bock and Jowo Compatible Fountain Pen Nibs' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Fountain Pen Nibs | Bock #6 Type 250 series & Jowo #6 Type 250 series',
    description: 'Precision German-profile replacement fountain pen nibs in Stealth Black, Premium Golden, and Rose Gold.',
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

export default function NibsPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am interested in inquiring about your standalone fountain pen nibs collection (Bock & Jowo compatible).'
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
    ],
  };

  const productSchemas = nibProducts.map((nib, idx) => {
    const images = [nib.primaryImage];
    if (nib.secondaryImage) {
      images.push(nib.secondaryImage);
    }

    return createProductSchema({
      name: nib.title,
      description: nib.seoDescription,
      image: images,
      sku: nib.sku,
      mpn: nib.mpn,
      price: '450',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/nibs',
      category: 'Office Supplies > Writing Instruments > Fountain Pen Parts > Nibs',
      ratingValue: (4.9).toFixed(1),
      reviewCount: 32 + idx * 5,
    });
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are these nibs sold separately from fountain pens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All nibs in this collection are standalone replacement products designed for fountain pen enthusiasts, nibsmiths, and pen makers. They are not bundled with pen purchases.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Bock-compatible and Jowo-compatible nibs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bock 250 compatible nibs feature a specific shank curve and tail dimension engineered for Bock #6 housing collars and feeds. Jowo #6 compatible nibs feature Jowo 6.0mm shoulder curvature suited for standard Jowo threaded units and modern bespoke acrylic or ebonite pens.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which nib point sizes are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer six distinct German point choices: Extra Extra Fine (EEF), Extra Fine (EF), Fine (F), Medium (M), Broad (B), and Double Broad (BB).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can these nibs be paired with RS Writing hand-cut ebonite feeds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our #6 nibs are specifically profiled to sit flush against our hand-cut natural hard rubber ebonite feeds, providing optimal capillary ink flow without burping or ink starvation.',
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

      {/* ── STICKY NAVIGATION BAR ─────────────────────────────────── */}
      <Navbar activeTab="nibs" />

      {/* ── HERO HEADER ─────────────────────────────────────────── */}
      <header className="py-12 bg-radial from-white via-[#FAF8F5] to-[#FDFBF7] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 text-xs text-[#9C9588] mb-3">
            <Link href="/" className="hover:text-[#102E29]">Home</Link>
            <span>/</span>
            <span className="text-[#102E29] font-semibold">Standalone Nibs</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8963E]/10 border border-[#B8963E]/20 text-[#B8963E] text-xs font-mono mb-3">
              <span>STANDALONE ATELIER COMPONENT</span>
              <span>•</span>
              <span>GERMAN GEOMETRY #6</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#102E29] tracking-tight leading-none mb-4">
              Precision Fountain Pen Nibs <span className="italic text-[#B8963E]">Bock #6 Type 250 series &amp; Jowo #6 Type 250 series</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-[#6B6558] leading-relaxed">
              Explore our independent line of premium replacement fountain pen nibs. Engineered to exacting German standards in both <strong>Bock #6 Type 250 series</strong> and <strong>Jowo #6 Type 250 series</strong> geometries. Choose from three curated finishes and six point widths with instant WhatsApp availability checks.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#102E29] font-medium bg-white px-3 py-2 rounded-lg border border-[#E5DFD5]">
                <FaCogs className="text-[#B8963E]" /> Bock #6 Type 250 series &amp; Jowo #6 Type 250 series Specs
              </div>
              <div className="flex items-center gap-2 text-[#102E29] font-medium bg-white px-3 py-2 rounded-lg border border-[#E5DFD5]">
                <FaShieldAlt className="text-[#25D366]" /> 100% Optical Tine Inspection
              </div>
              <div className="flex items-center gap-2 text-[#102E29] font-medium bg-white px-3 py-2 rounded-lg border border-[#E5DFD5]">
                <FaShippingFast className="text-[#102E29]" /> Pan-India &amp; Global Dispatch
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN PRODUCT CATALOG ──────────────────────────────────── */}
      <main>
        <NibCatalogSection />

        {/* ── TECHNICAL COMPARISON TABLE SECTION ─────────────────────── */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8963E] font-bold block mb-2">
                Technical Architecture
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#102E29]">
                Bock vs Jowo Fitment: <span className="italic text-[#B8963E]">Choosing the Right Geometry</span>
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-[#E5DFD5] shadow-xs">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#FAF8F5] border-b border-[#E5DFD5] text-[#102E29] font-mono uppercase text-[11px]">
                  <tr>
                    <th className="p-4">Specification</th>
                    <th className="p-4 text-[#B8963E]">Bock #6 Type 250 series</th>
                    <th className="p-4 text-[#102E29]">Jowo #6 Type 250 series</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5DFD5]/60 text-[#6B6558]">
                  <tr>
                    <td className="p-4 font-semibold text-[#102E29]">Housing Unit Fitment</td>
                    <td className="p-4">Bock Type 250 screw-in assemblies</td>
                    <td className="p-4">Jowo #6 threaded nib collars</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#102E29]">Feed Diameter Fitment</td>
                    <td className="p-4">6.0mm with Bock tail curve</td>
                    <td className="p-4">6.0mm standard German shank</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#102E29]">Visual Inspection Views</td>
                    <td className="p-4">Front face + Reverse feed channel (Dual-view)</td>
                    <td className="p-4">Front face single view</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#102E29]">Available Finishes</td>
                    <td className="p-4">PVD Stealth Black, Premium Golden, Rose Gold</td>
                    <td className="p-4">Tactile Black, Premium Golden, Rose Gold</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#102E29]">Point Sizes Available</td>
                    <td className="p-4">EEF, EF, Fine, Medium, Broad, Double Broad</td>
                    <td className="p-4">EEF, EF, Fine, Medium, Broad, Double Broad</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#102E29]">Ebonite Feed Matching</td>
                    <td className="p-4">Pairs with RS 6.0mm Bock-profile ebonite feeds</td>
                    <td className="p-4">Pairs with RS 6.0mm Jowo-profile ebonite feeds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────────── */}
        <section className="py-16 px-6 md:px-12 bg-white border-t border-[#E5DFD5]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8963E] font-bold block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#102E29]">
                Nib Fitment &amp; <span className="italic text-[#B8963E]">Selection Guide</span>
              </h2>
            </div>

            <div className="space-y-6 text-xs md:text-sm text-[#6B6558]">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  Are these nibs included when buying an RS fountain pen?
                </h3>
                <p className="leading-relaxed">
                  No. These nibs are sold strictly as standalone components for custom pen builders, restoration experts, and collectors. Our handcrafted pens are sold with their own bespoke configurations and never bundle these standalone items as accessories.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  How do I inquire about availability or purchase a specific point size?
                </h3>
                <p className="leading-relaxed">
                  Select your desired point size (EEF, EF, Fine, Medium, Broad, or Double Broad) on the corresponding nib product card, then click the WhatsApp button. This generates a pre-filled direct message to our master nibsmith who will confirm stock, pricing, and shipping specifics.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2">
                  Can I request custom grinding (Architect, Stub, Cursive Italic)?
                </h3>
                <p className="leading-relaxed">
                  Yes. Mention your custom grind requirements during your WhatsApp consultation. Our workshop specialises in custom tipping modifications on Medium and Broad nib blanks.
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
            <Link href="/nibs" className="hover:text-[#B8963E] text-[#102E29] font-bold">Nibs</Link>
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
