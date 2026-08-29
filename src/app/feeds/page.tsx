import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FeedCatalogSection from '@/components/FeedCatalogSection';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { rawProducts } from '@/lib/products';
import { createProductSchema } from '@/lib/schemaHelpers';
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

  const feedItemSchemas = rawProducts.map((feed) =>
    createProductSchema({
      name: feed.name,
      description: `${feed.model} - ${feed.shape} shape fitment with ${feed.ink} ink channel. ${feed.type}.`,
      image: feed.image,
      sku: `RS-FEED-${feed.id}`,
      mpn: `RS-EBONITE-FEED-${feed.id}`,
      price: feed.basePrice.toString(),
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/feeds',
      category: 'Office Supplies > Fountain Pen Feeds & Components',
      ratingValue: (4.8 + (feed.id % 3) * 0.1).toFixed(1),
      reviewCount: 15 + feed.id * 5,
    })
  );

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
            <Link href="/feeds" className="text-[#102E29] font-bold relative py-1">
              Ebonite Feeds
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
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

        {/* EBONITE CAPILLARY SCIENCE & TECHNICAL FITMENT GUIDE */}
        <section className="py-14 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5DFD5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Fluid Dynamics & Science */}
            <div className="lg:col-span-6 space-y-5">
              <span className="fable-mono-caps text-[#B8963E] block font-medium">
                FLUID MECHANICS / NATURAL HARD RUBBER
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#102E29] tracking-tight">
                Why Ebonite is the <span className="italic text-[#B8963E]">Gold Standard</span> for Ink Feeds
              </h2>
              <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
                Modern injection-molded plastic feeds suffer from a critical flaw: plastic is inherently hydrophobic. Synthetic materials repel water-based fountain pen ink, requiring artificial chemical surfactants and narrow capillary fins to force liquid travel.
              </p>
              <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
                Natural vulcanized ebonite is hydrophilic. The microscopic porosity of sulfur-cured hard rubber creates an organic capillary attraction, pulling ink smoothly from the reservoir directly to the nib tip without railroading or dripping.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] text-center">
                  <span className="block font-bold text-sm text-[#102E29]">Single Channel</span>
                  <span className="text-[10px] text-[#9C9588]">Precise, controlled flow for fine & extra-fine nibs.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] text-center">
                  <span className="block font-bold text-sm text-[#102E29]">Double Channel</span>
                  <span className="text-[10px] text-[#9C9588]">Rich, wet daily flow for medium & broad writers.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] text-center">
                  <span className="block font-bold text-sm text-[#102E29]">Triple Music</span>
                  <span className="text-[10px] text-[#9C9588]">High-volume supply for vintage flex & music nibs.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Geometry & Housing Compatibility Table */}
            <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-[#E5DFD5] shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-[#102E29] mb-4">Feed Fitment & Geometry Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] text-[#102E29] uppercase text-[10px] font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Geometry</th>
                      <th className="py-2.5 px-3">Diameter</th>
                      <th className="py-2.5 px-3">Compatible Pen Models</th>
                      <th className="py-2.5 px-3">Standard Flow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5DFD5]">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-[#102E29]">Parker 51</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">4.8 mm - 5.0 mm</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">Vintage Aerometric & Vacumatic 51s</td>
                      <td className="py-2.5 px-3 text-[#102E29] font-medium">Standard / Wet</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-[#102E29]">Sheaffer</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">5.0 mm / 5.2 mm</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">Snorkel, Touchdown, Imperial</td>
                      <td className="py-2.5 px-3 text-[#102E29] font-medium">Controlled</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-[#102E29]">Standard #6</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">6.0 mm - 6.35 mm (1/4&quot;)</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">PRAVAH, Jowo #6, Bock 250, Custom</td>
                      <td className="py-2.5 px-3 text-[#102E29] font-medium">Wet / Music Triple</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-[#102E29]">Cartridge/Friction</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">5.5 mm - 6.0 mm</td>
                      <td className="py-2.5 px-3 text-[#6B6558]">Universal International Standard Fit</td>
                      <td className="py-2.5 px-3 text-[#102E29] font-medium">Medium-Wet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* NIBSMITH HEAT-SETTING & INSTALLATION INSTRUCTIONS */}
        <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto border-t border-[#E5DFD5]">
          <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E5DFD5] space-y-4">
            <span className="fable-mono-caps text-[#B8963E] block font-medium">WORKSHOP GUIDE</span>
            <h3 className="font-serif text-2xl font-bold text-[#102E29]">How to Heat-Set an Ebonite Feed for Custom Nibs</h3>
            <p className="text-xs text-[#6B6558] leading-relaxed">
              Unlike plastic feeds which melt or distort permanently under thermal stress, ebonite possesses thermal plasticity. Nibsmiths can easily heat-set an RS ebonite feed to eliminate any microscopic gap between the nib underside and feed surface:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-[#6B6558]">
              <li>Dip the nib and feed tip in near-boiling water (85°C–90°C) for 15 to 20 seconds.</li>
              <li>Remove and gently pinch the top of the nib and bottom of the feed together using your fingers or a rubber pad for 20 seconds as it cools.</li>
              <li>The ebonite retains the exact contour of the nib curvature, delivering instantaneous ink flow and eliminating hard starts forever.</li>
            </ol>
          </div>
        </section>
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
