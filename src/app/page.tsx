"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaWhatsapp, FaCheckCircle, FaFeatherAlt } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX, HiArrowDown } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';

import WhatsAppBanner from '@/components/WhatsAppBanner';
import ProductCatalogGrid from '@/components/ProductCatalogGrid';
import ProductCard from '@/components/ProductCard';
import { featuredHeroProduct } from '@/lib/catalogProducts';
import { createProductSchema } from '@/lib/schemaHelpers';

const FeedCatalogSection = dynamic(() => import('@/components/FeedCatalogSection'), {
  loading: () => <div className="py-16 text-center text-xs text-[#9C9588]">Loading ebonite feeds...</div>,
});

const AtelierPoliciesSection = dynamic(() => import('@/components/AtelierPoliciesSection'), {
  loading: () => <div className="py-16 text-center text-xs text-[#9C9588]">Loading atelier specifications...</div>,
});

const PatrioticSaleBanner = dynamic(() => import('@/components/PatrioticSaleBanner'), {
  loading: () => <div className="py-8" />,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export default function Home() {
  const hasMounted = useMounted();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');

  const craftsmanshipRef = useRef<HTMLDivElement>(null);

  // Scroll observer for navbar shadow & active link highlight using requestAnimationFrame
  useEffect(() => {
    if (!hasMounted) return;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setNavScrolled(window.scrollY > 50);

          const sections = ['hero-section', 'pen-catalog', 'feed-catalog', 'policies-section', 'contact'];
          for (const secId of sections) {
            const el = document.getElementById(secId);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 250 && rect.bottom >= 250) {
                setActiveSection(secId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMounted]);

  // Lenis smooth scroll configuration (desktop only for performance)
  useEffect(() => {
    if (!hasMounted) return;
    if (typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window)) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [hasMounted]);

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

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }} suppressHydrationWarning>
      
      {/* Product JSON-LD Schemas */}
      {productSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Top CRO WhatsApp Announcement Banner */}
      <WhatsAppBanner />

      {/* STICKY NAVIGATION BAR */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${navScrolled ? 'py-3 glass-light shadow-xs' : 'py-5 bg-[#FDFBF7]/90 backdrop-blur-md'}`} suppressHydrationWarning>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 md:gap-4 group py-1 cursor-pointer"
            aria-label="Refresh home page"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 transition-transform duration-500 group-hover:scale-108 group-hover:rotate-6 drop-shadow-md">
              <Image src="/logo.png" alt="RS Writing Instruments Logo" fill className="object-contain" sizes="(max-width: 768px) 48px, 64px" priority />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-none text-[#102E29] transition-colors group-hover:text-[#B8963E]">
                RS WRITING
              </span>
              <span className="block text-[9px] sm:text-[11px] md:text-xs uppercase tracking-[0.32em] font-bold text-[#B8963E] mt-1 group-hover:text-[#102E29] transition-colors">
                Instruments
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs tracking-wider uppercase font-medium">
            <Link 
              href="/pens" 
              className="hover:text-[#B8963E] transition-colors relative py-1 text-[#6B6558]"
            >
              Handcrafted Pens
            </Link>
            <Link 
              href="/feeds" 
              className="hover:text-[#B8963E] transition-colors relative py-1 text-[#6B6558]"
            >
              Ebonite Feeds
            </Link>
            <Link 
              href="/about" 
              className="hover:text-[#B8963E] transition-colors relative py-1 text-[#6B6558]"
            >
              About Us
            </Link>
            <Link 
              href="/wholesale" 
              className="hover:text-[#B8963E] transition-colors relative py-1 text-[#6B6558]"
            >
              B2B Wholesale
            </Link>
            <a 
              href="#contact" 
              className={`hover:text-[#B8963E] transition-colors relative py-1 ${activeSection === 'contact' ? 'text-[#102E29] font-bold' : 'text-[#6B6558]'}`}
            >
              Contact Us
            </a>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn fable-mono-caps text-xs py-2.5 px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42]"
            >
              <FaWhatsapp size={15} style={{ color: '#25D366' }} /> WhatsApp RS Writing Instruments
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#102E29] p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-[#E5DFD5] px-6 py-6 space-y-2">
            <a 
              href="#hero-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Featured
            </a>
            <a 
              href="#pen-catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Pens Catalogue
            </a>
            <a 
              href="#feed-catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Ebonite Feeds
            </a>
            <a 
              href="#policies-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Policies & Guarantees
            </a>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/wholesale" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              B2B Wholesale
            </Link>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Contact Us
            </a>
            <div className="pt-2 border-t border-[#E5DFD5]">
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fable-pill-btn fable-mono-caps w-full min-h-[44px] text-center text-xs py-3 font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7]"
              >
                <FaWhatsapp size={16} style={{ color: '#25D366' }} /> WhatsApp RS Writing Instruments
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION WITH FEATURED PEN COLLECTION CARD */}
      <section id="hero-section" className="relative w-full py-8 md:py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Ambient Glow */}
          <div className="ambient-glow w-[500px] h-[500px] top-[10%] left-[5%]" style={{ background: 'radial-gradient(circle, rgba(184, 150, 62, 0.06) 0%, transparent 70%)' }} />

          {/* Left Column: Hero Text */}
          <div className="md:col-span-6 z-10 text-left">
            <span className="fable-mono-caps text-[#B8963E] block mb-3 font-medium">
              HAND-CUT EBONITE FEEDS / CUSTOM HARD RUBBER PENS
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal mb-5 leading-[1.08] text-[#102E29] tracking-tight">
              Handcrafted ebonite feeds and <span className="font-serif italic text-[#B8963E]">bespoke</span> fountain pens
            </h1>
            
            <p className="font-sans text-xs md:text-sm leading-relaxed mb-7 max-w-lg text-[#6B6558] font-normal">
              Precision-cut ebonite capillary feeds, Parker & Sheaffer fitment channels, and hand-turned hard rubber fountain pens. Designed for master nibsmiths, custom pen artisans, and discerning collectors.
            </p>

            {/* Dual Pill CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mb-4">
              <a
                href="#pen-catalog"
                className="fable-pill-btn min-h-[44px] py-3.5 px-7 fable-mono-caps font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] shadow-sm hover:bg-[#1A4A42] w-full sm:w-auto"
              >
                Browse Pen Catalogue <HiArrowDown size={14} />
              </a>

              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fable-pill-btn min-h-[44px] py-3.5 px-7 fable-mono-caps font-semibold border border-[#E5DFD5] flex items-center justify-center gap-2 bg-white text-[#102E29] hover:bg-[#FAF8F5] w-full sm:w-auto"
              >
                <FaWhatsapp size={16} style={{ color: '#25D366' }} /> WhatsApp Enquiry
              </a>
            </div>
          </div>

          {/* Right Column: Featured Interactive Hero Product Card */}
          <div className="md:col-span-6 z-10">
            <ProductCard product={featuredHeroProduct} isFeatured={true} />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PATRIOTIC SALE BANNER (15th August & Republic Day Special Offer)
          ═══════════════════════════════════════════ */}
      <PatrioticSaleBanner />

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
          ATELIER POLICIES & GUARANTEES
          ═══════════════════════════════════════════ */}
      <AtelierPoliciesSection />

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer id="contact" className="relative py-12 md:py-16 px-6 md:px-12 border-t border-[#E5DFD5]" style={{ background: '#FDFBF7' }}>
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
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
                Handcrafted ebonite feeds and custom fountain pen mechanisms for discerning writers and pen artisans.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6 text-[#B8963E]">Quick Navigation</h4>
              <div className="flex flex-col gap-3 text-xs text-[#6B6558]">
                <Link href="/pens" className="hover:text-[#B8963E] transition-colors">Handcrafted Pens</Link>
                <Link href="/feeds" className="hover:text-[#B8963E] transition-colors">Ebonite Feeds Catalogue</Link>
                <Link href="/about" className="hover:text-[#B8963E] transition-colors">About Us</Link>
                <Link href="/wholesale" className="hover:text-[#B8963E] transition-colors">B2B Wholesale & OEM</Link>
                <a href="#contact" className="hover:text-[#B8963E] transition-colors">Contact RS Writing Instruments</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-xs text-[#6B6558] space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4 text-[#B8963E]">RS Writing Contact</h4>
              <p className="pt-2"><span className="text-[#9C9588]">Phone/WhatsApp:</span> <a href="tel:+919455664795" className="font-bold text-[#102E29] hover:underline">+91 94556 64795</a></p>
              <p><span className="text-[#9C9588]">Email:</span> <a href="mailto:fountainpenmechanic@gmail.com" className="font-bold text-[#102E29] hover:underline">fountainpenmechanic@gmail.com</a></p>
            </div>

          </div>

          <div className="w-full h-[1px] mb-8 bg-gradient-to-r from-transparent via-[#E5DFD5] to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9C9588]">
            <span suppressHydrationWarning>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
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
