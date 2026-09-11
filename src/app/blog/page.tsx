import Image from 'next/image';
import Link from 'next/link';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import Navbar from '@/components/Navbar';
import FountainPenBlogSection from '@/components/FountainPenBlogSection';
import { FaWhatsapp, FaFeatherAlt, FaTint, FaShieldAlt, FaTools, FaCheck } from 'react-icons/fa';

export default function BlogPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I have a question regarding fountain pen maintenance, refilling, or ebonite feeds.'
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
        name: 'Fountain Pen Guides & FAQs',
        item: 'https://www.rswriting.in/blog',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Fountain Pen Guide: Refilling, Storage, Ebonite Feeds & Maintenance',
    description:
      'A masterclass on how to refill, clean, store, and maintain fountain pens, plus the fluid physics of natural ebonite feeds by RS Writing Instruments.',
    image: 'https://www.rswriting.in/logo.png',
    author: {
      '@type': 'Person',
      name: 'Sanjay Singh',
      jobTitle: 'Master Pen Maker & Nibsmith',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RS Writing Instruments',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.rswriting.in/logo.png',
      },
    },
    mainEntityOfPage: 'https://www.rswriting.in/blog',
    datePublished: '2026-01-15T08:00:00+05:30',
    dateModified: new Date().toISOString(),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I refill a fountain pen with a converter or eyedropper?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To refill via piston converter, immerse the nib into the ink bottle, rotate the piston knob to draw ink, and blot excess. For eyedropper filling, grease the barrel threads with 100% silicone grease, fill 80% full with ink, and seal tightly for 3.2ml capacity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should a fountain pen be stored to prevent drying or leaking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Store inked fountain pens horizontally or with the nib pointing slightly upwards. Never store nib-down in bags. If storing unused for more than two weeks, flush with clean water.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do hand-cut ebonite feeds provide better ink flow than plastic feeds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ebonite is naturally hydrophilic and porous, holding liquid ink effortlessly and maintaining capillary pressure. Plastic feeds are hydrophobic and prone to ink starvation and hard starts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you fix a dry or skipping fountain pen nib?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ensure the nib is flushed. If using an ebonite feed, heat-set by dipping the nib and feed in 85°C water for 15 seconds, then gently pinch the nib and feed together while cooling to establish complete capillary contact.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <WhatsAppBanner />

      {/* Navigation */}
      <Navbar activeTab="guides" />

      {/* Main Page Hero */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs text-[#9C9588] mb-2">
            <Link href="/" className="hover:text-[#102E29]">Home</Link>
            <span>/</span>
            <span className="text-[#102E29] font-semibold">Guides &amp; Knowledge Base</span>
          </div>

          <span className="fable-mono-caps text-[#B8963E] block font-medium">
            ARTISAN CRAFT / FLUID DYNAMICS / COLLECTOR CARE
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#102E29] tracking-tight leading-tight">
            The Complete <span className="italic text-[#B8963E]">Fountain Pen Master Guide</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#6B6558] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about refilling ink, daily storage routines, cleaning cycles, troubleshooting dry nibs, and why natural ebonite feeds are the gold standard for fluid ink delivery.
          </p>
        </div>

        {/* In-depth Article Cards */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Article 1 */}
          <article className="bg-white p-8 rounded-3xl border border-[#E5DFD5] shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-[#B8963E] text-xs font-mono uppercase tracking-wider">
              <FaTint />
              <span>Step-by-Step Refill Tutorial</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#102E29]">
              How to Refill Fountain Pens: Converter vs. Cartridge vs. Eyedropper
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6558] leading-relaxed">
              Choosing the right ink filling mechanism depends on your writing habits:
            </p>
            <ul className="space-y-2 text-xs text-[#6B6558]">
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#B8963E] shrink-0 mt-0.5" />
                <span><strong>Piston Converter:</strong> Offers ultimate ink freedom with bottled fountain pen inks and shading characteristics.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#B8963E] shrink-0 mt-0.5" />
                <span><strong>International Cartridge:</strong> Snap-in convenience ideal for travel, flights, and boardrooms.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#B8963E] shrink-0 mt-0.5" />
                <span><strong>Eyedropper Conversion:</strong> Provides an enormous 3.2ml ink capacity inside solid ebonite barrels for marathon writing sessions.</span>
              </li>
            </ul>
          </article>

          {/* Article 2 */}
          <article className="bg-white p-8 rounded-3xl border border-[#E5DFD5] shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-[#B8963E] text-xs font-mono uppercase tracking-wider">
              <FaShieldAlt />
              <span>Longevity &amp; Storage</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#102E29]">
              How to Store, Clean, and Preserve Ebonite Fountain Pens
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6558] leading-relaxed">
              Preserving your fine writing instruments requires simple habits:
            </p>
            <ul className="space-y-2 text-xs text-[#6B6558]">
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#B8963E] shrink-0 mt-0.5" />
                <span><strong>Horizontal or Nib-Up:</strong> Balances ink pressure against the feed channel to prevent burping or dried nibs.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#B8963E] shrink-0 mt-0.5" />
                <span><strong>Room Temperature Flushing:</strong> Use plain distilled or tap water every 4 to 6 weeks. Never use boiling water or alcohol on natural ebonite.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#B8963E] shrink-0 mt-0.5" />
                <span><strong>UV Protection:</strong> Store in pen cases away from direct scorching sunlight to maintain deep ebonite luster.</span>
              </li>
            </ul>
          </article>

        </section>

        {/* Interactive Master Guide & FAQ Component */}
        <FountainPenBlogSection />

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
            <Link href="/nibs" className="hover:text-[#B8963E]">All Nibs</Link>
            <Link href="/nibs/bock" className="hover:text-[#B8963E]">Bock #6</Link>
            <Link href="/nibs/jowo" className="hover:text-[#B8963E]">Jowo #6</Link>
            <Link href="/blog" className="hover:text-[#B8963E] text-[#102E29] font-bold">Guides &amp; FAQs</Link>
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
