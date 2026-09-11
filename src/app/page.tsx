"use client";

import { useRef } from 'react';
import { FaWhatsapp, FaCheckCircle, FaFeatherAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';

import WhatsAppBanner from '@/components/WhatsAppBanner';
import Navbar from '@/components/Navbar';
import ProductCatalogGrid from '@/components/ProductCatalogGrid';
import ProductCard from '@/components/ProductCard';
import NibCatalogSection from '@/components/NibCatalogSection';
import LaserEngravingHeroCard from '@/components/LaserEngravingHeroCard';
import { featuredHeroProduct } from '@/lib/catalogProducts';
import { nibProducts } from '@/lib/nibs';
import { createProductSchema } from '@/lib/schemaHelpers';

const FeedCatalogSection = dynamic(() => import('@/components/FeedCatalogSection'));
const AtelierPoliciesSection = dynamic(() => import('@/components/AtelierPoliciesSection'));
const FountainPenBlogSection = dynamic(() => import('@/components/FountainPenBlogSection'));

export default function Home() {
  const craftsmanshipRef = useRef<HTMLDivElement>(null);

  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent("Hello RS Writing Instruments, I am interested in inquiring about your fountain pen line and custom orders.")}`;

  const productSchemas = [
    createProductSchema({
      name: 'PRAVAH Signature Fountain Pen',
      description: 'Handcrafted artisan ebonite fountain pen with precision capillary feed.',
      image: '/catalog/Caviar Black.jpeg',
      sku: 'RS-PRAVAH-SIG-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '4.9',
      reviewCount: '42',
    }),
    createProductSchema({
      name: 'PRAVAH Forest Green Fountain Pen',
      description: 'Deep forest green ebonite with precision gold & black trims.',
      image: '/catalog/Forest Green BT.jpeg',
      sku: 'RS-PRAVAH-FG-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '4.9',
      reviewCount: '28',
    }),
    createProductSchema({
      name: 'PRAVAH Sparkle White Fountain Pen',
      description: 'Elegant pearl sparkle white cap with demonstrator barrel options.',
      image: '/catalog/Sparkle White.jpeg',
      sku: 'RS-PRAVAH-SW-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '4.8',
      reviewCount: '19',
    }),
    createProductSchema({
      name: 'PRAVAH Pure Orange Demonstrator Pen',
      description: 'Vibrant orange cap with black section and transparent demonstrator barrel.',
      image: '/catalog/Pure Orange Cap, Section Black, Demonstrator Barrel.jpeg',
      sku: 'RS-PRAVAH-PO-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '5.0',
      reviewCount: '15',
    }),
    createProductSchema({
      name: 'PRAVAH Swirl Collection Pen',
      description: 'Hand-turned natural ebonite with intricate organic swirl patterns.',
      image: '/catalog/Swirl Brown.jpeg',
      sku: 'RS-PRAVAH-SWIRL-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '4.9',
      reviewCount: '31',
    }),
    createProductSchema({
      name: 'PRAVAH Red Black Swirl Pen',
      description: 'Rich crimson red marbled swirl ebonite fountain pen.',
      image: '/catalog/Red Black Swirl.jpeg',
      sku: 'RS-PRAVAH-RBS-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '4.9',
      reviewCount: '26',
    }),
    createProductSchema({
      name: 'PRAVAH Caviar Black Pen',
      description: 'Sleek deep black hard rubber ebonite body with high polish finish.',
      image: '/catalog/Caviar Black.jpeg',
      sku: 'RS-PRAVAH-CB-01',
      price: '1490',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/pens',
      ratingValue: '5.0',
      reviewCount: '54',
    }),
  ];

  const nibSchemas = nibProducts.map((nib, idx) => {
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
      ratingValue: '4.9',
      reviewCount: 35 + idx * 4,
    });
  });

  const laserEngravingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.rswriting.in/#laser-engraving',
    name: 'Custom Laser Engraving on Fountain Pen Nibs & Clips',
    serviceType: 'Bespoke Laser Engraving & Personalization',
    provider: {
      '@type': 'Organization',
      name: 'RS Writing Instruments',
      url: 'https://www.rswriting.in',
    },
    description:
      'Artisan fiber laser engraving service for #6 fountain pen nibs, gold/black clips, caps, and ebonite barrels. Personalized custom artwork, monograms, family crests, and calligraphy.',
    image: 'https://www.rswriting.in/custom-laser-engraving.webp',
    areaServed: 'IN',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://www.rswriting.in',
    },
  };

  const allProductSchemas = [...productSchemas, ...nibSchemas, laserEngravingSchema];

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }} suppressHydrationWarning>
      
      {/* Product JSON-LD Schemas */}
      {allProductSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Top CRO WhatsApp Announcement Banner */}
      <WhatsAppBanner />

      {/* STICKY NAVIGATION BAR */}
      <Navbar activeTab="home" />

      {/* HERO SECTION WITH FEATURED PEN COLLECTION CARD & LASER ENGRAVING SPOTLIGHT */}
      <section id="hero-section" className="relative w-full py-8 md:py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Ambient Glow */}
          <div className="ambient-glow w-[500px] h-[500px] top-[10%] left-[5%]" style={{ background: 'radial-gradient(circle, rgba(184, 150, 62, 0.06) 0%, transparent 70%)' }} />

          {/* Left Column: Hero Text + Laser Engraving Showcase Card */}
          <div className="md:col-span-6 z-10 text-left flex flex-col justify-between">
            <div>
              <span className="fable-mono-caps text-[#B8963E] block mb-3 font-medium">
                HAND-CUT EBONITE FEEDS / CUSTOM HARD RUBBER PENS
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-4 leading-[1.08] text-[#102E29] tracking-tight">
                Handcrafted ebonite feeds and <span className="font-serif italic text-[#B8963E]">bespoke</span> fountain pens
              </h1>
              
              <p className="font-sans text-xs md:text-sm leading-relaxed mb-5 max-w-lg text-[#6B6558] font-normal">
                Precision-cut ebonite capillary feeds, Parker &amp; Sheaffer fitment channels, and hand-turned hard rubber fountain pens. Designed for master nibsmiths, custom pen artisans, and discerning collectors.
              </p>

              {/* Dual Pill CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mb-5">
                <Link
                  href="/pens"
                  className="fable-pill-btn min-h-[44px] py-3 px-6 fable-mono-caps font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] shadow-sm hover:bg-[#1A4A42] w-full sm:w-auto"
                >
                  Browse Pen Collection
                </Link>

                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fable-pill-btn min-h-[44px] py-3 px-6 fable-mono-caps font-semibold border border-[#E5DFD5] flex items-center justify-center gap-2 bg-white text-[#102E29] hover:bg-[#FAF8F5] w-full sm:w-auto"
                >
                  <FaWhatsapp size={16} style={{ color: '#25D366' }} /> WhatsApp Enquiry
                </a>
              </div>
            </div>

            {/* Custom Laser Engraving Spotlight Card */}
            <LaserEngravingHeroCard className="mt-1" />
          </div>

          {/* Right Column: Featured Interactive Hero Product Card */}
          <div className="md:col-span-6 z-10">
            <ProductCard product={featuredHeroProduct} isFeatured={true} />
          </div>

        </div>
      </section>



      {/* ═══════════════════════════════════════════
          NEW RESPONSIVE PRODUCT CATALOG GRID
          ═══════════════════════════════════════════ */}
      <ProductCatalogGrid />

      {/* ═══════════════════════════════════════════
          TRUST METRICS & B2B BADGES BAR
          ═══════════════════════════════════════════ */}
      <section className="py-6 px-6 border-y border-[#E5DFD5] bg-[#FAF8F5] relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <FaCheckCircle size={20} className="text-[#B8963E] shrink-0" />
            <div className="text-left">
              <span className="block text-sm font-bold text-[#102E29]">50,000+ Feeds Crafted</span>
              <span className="text-[11px] text-[#9C9588]">Trusted by master nib smiths</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaFeatherAlt size={20} className="text-[#B8963E] shrink-0" />
            <div className="text-left">
              <span className="block text-sm font-bold text-[#102E29]">100% Hand-Cut Ebonite</span>
              <span className="text-[11px] text-[#9C9588]">Natural hard rubber capillary feeds</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp size={22} className="text-[#25D366] shrink-0" />
            <div className="text-left">
              <span className="block text-sm font-bold text-[#102E29]">Instant Custom Quotes</span>
              <span className="text-[11px] text-[#9C9588]">Fast response via WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CRAFTSMANSHIP STATEMENT
          ═══════════════════════════════════════════ */}
      <section className="relative py-12 md:py-16 px-6" style={{ background: '#FDFBF7' }}>
        <div ref={craftsmanshipRef} className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <div className="section-ornament w-full max-w-xs">
            <div className="diamond" />
          </div>
          
          <h3 className="font-serif text-2xl md:text-4xl font-semibold italic leading-snug text-[#102E29]">
            &ldquo;Where Precision Meets Heritage&rdquo;
          </h3>
          
          <p className="text-xs md:text-sm leading-relaxed max-w-xl text-[#6B6558]">
            Each RS ebonite feed is hand-cut from premium hard rubber, inheriting a tradition that predates 
            modern manufacturing. The capillary grooves are precision-shaped to regulate ink flow with a 
            consistency that synthetic materials cannot achieve.
          </p>
          
          <div className="section-ornament w-full max-w-xs mt-2">
            <div className="diamond" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STANDALONE EBONITE FEED CATALOG
          ═══════════════════════════════════════════ */}
      <FeedCatalogSection />

      {/* ═══════════════════════════════════════════
          PRECISION FOUNTAIN PEN NIBS (STANDALONE)
          ═══════════════════════════════════════════ */}
      <section id="nibs-section" className="scroll-mt-20 border-t border-[#E5DFD5] bg-gradient-to-b from-[#FAF8F5] via-[#FDFBF7] to-[#FDFBF7] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8963E]/10 border border-[#B8963E]/20 text-[#B8963E] text-xs font-mono mb-3">
            <span>STANDALONE ATELIER COMPONENT</span>
            <span>•</span>
            <span>GERMAN GEOMETRY #6</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#102E29] tracking-tight">
            Precision Fountain Pen Nibs — <span className="italic text-[#B8963E]">Bock #6 Type 250 series &amp; Jowo #6 Type 250 series</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B6558] max-w-2xl mx-auto mt-3">
            Independent line of replacement fountain pen nibs engineered to exacting German standards. Precision fitment for Bock #6 Type 250 series and Jowo #6 Type 250 series geometries, three curated luxury finishes, and six tip widths.
          </p>
        </div>
        <NibCatalogSection />
      </section>

      {/* ═══════════════════════════════════════════
          FOUNTAIN PEN GUIDES & TOP SEARCH FAQS
          ═══════════════════════════════════════════ */}
      <FountainPenBlogSection />

      {/* ═══════════════════════════════════════════
          ATELIER POLICIES & GUARANTEES
          ═══════════════════════════════════════════ */}
      <AtelierPoliciesSection />

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer id="contact" className="relative py-12 md:py-16 px-6 md:px-12 border-t border-[#E5DFD5]" style={{ background: '#FDFBF7' }}>
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link 
                href="/" 
                className="group flex flex-col items-center md:items-start cursor-pointer"
                aria-label="Refresh home page"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 drop-shadow-md transition-transform duration-500 group-hover:scale-105">
                  <Image src="/logo.png" alt="RS Writing Instruments Logo" fill className="object-contain" sizes="80px" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-extrabold mb-1 text-[#102E29] transition-colors group-hover:text-[#B8963E]">RS WRITING</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3 font-bold text-[#B8963E] transition-colors group-hover:text-[#102E29]">Instruments</p>
              </Link>
              <p className="text-xs leading-relaxed text-[#9C9588]">
                Handcrafted ebonite feeds and custom fountain pen mechanisms for discerning writers, pen collectors, and artisans.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6 text-[#B8963E]">Handcrafted Collection</h4>
              <div className="flex flex-col gap-3 text-xs text-[#6B6558]">
                <Link href="/pens" className="hover:text-[#B8963E] transition-colors">Handcrafted Pens</Link>
                <Link href="/feeds" className="hover:text-[#B8963E] transition-colors">Ebonite Feeds Catalogue</Link>
                <Link href="/nibs" className="hover:text-[#B8963E] transition-colors">Precision Nibs (All)</Link>
                <Link href="/nibs/bock" className="hover:text-[#B8963E] transition-colors">Bock #6 Type 250 Nibs</Link>
                <Link href="/nibs/jowo" className="hover:text-[#B8963E] transition-colors">Jowo #6 Type 250 Nibs</Link>
                <Link href="/blog" className="hover:text-[#B8963E] transition-colors">Guides &amp; FAQs</Link>
                <Link href="/about" className="hover:text-[#B8963E] transition-colors">About Atelier &amp; Founder</Link>
                <Link href="/wholesale" className="hover:text-[#B8963E] transition-colors">B2B Wholesale &amp; OEM</Link>
              </div>
            </div>

            {/* Legal & Policies */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6 text-[#B8963E]">Legal &amp; Policies</h4>
              <div className="flex flex-col gap-3 text-xs text-[#6B6558]">
                <Link href="/privacy" className="hover:text-[#B8963E] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#B8963E] transition-colors">Terms of Service</Link>
                <Link href="/acceptable-use" className="hover:text-[#B8963E] transition-colors">Acceptable Use Policy</Link>
                <Link href="/terms#shipping" className="hover:text-[#B8963E] transition-colors">Shipping &amp; Warranty</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-xs text-[#6B6558] space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4 text-[#B8963E]">RS Writing Contact</h4>
              <p className="pt-2"><span className="text-[#9C9588]">Phone/WhatsApp:</span> <a href="tel:+919455664795" className="font-bold text-[#102E29] hover:underline">+91 94556 64795</a></p>
              <p><span className="text-[#9C9588]">Primary Email:</span> <a href="mailto:contact@rswriting.in" className="font-bold text-[#102E29] hover:underline">contact@rswriting.in</a></p>
              <p><span className="text-[#9C9588]">Direct / Workshop:</span> <a href="mailto:fountainpenmechanic@gmail.com" className="font-bold text-[#102E29] hover:underline">fountainpenmechanic@gmail.com</a></p>
              <p className="text-[11px] text-[#9C9588] pt-1">Handcrafted Artisan Atelier</p>
            </div>

          </div>

          <div className="w-full h-[1px] mb-8 bg-gradient-to-r from-transparent via-[#E5DFD5] to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9C9588]">
            <span suppressHydrationWarning>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
            <div className="flex items-center gap-4 text-[11px]">
              <Link href="/privacy" className="hover:text-[#102E29] transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#102E29] transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/acceptable-use" className="hover:text-[#102E29] transition-colors">Acceptable Use</Link>
            </div>
            <div className="flex gap-5">
              <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors" aria-label="WhatsApp"><FaWhatsapp size={18} /></a>
            </div>
          </div>

        </div>
      </footer>

      {/* ═══════════════════════════════════════════
          FLOATING WHATSAPP FAB
          ═══════════════════════════════════════════ */}
      <a 
        href={generalWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full transition-transform duration-300 hover:scale-110 animate-pulse-glow"
        style={{
          background: '#25D366',
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35)',
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} style={{ color: '#FFFFFF' }} />
      </a>

    </div>
  );
}
