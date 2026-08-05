"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaWhatsapp, FaCheckCircle, FaFeatherAlt } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiX, HiArrowDown } from 'react-icons/hi';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import WhatsAppBanner from '@/components/WhatsAppBanner';
import FeedCatalogSection from '@/components/FeedCatalogSection';
import ProductCatalogGrid from '@/components/ProductCatalogGrid';
import ProductCard from '@/components/ProductCard';
import PatrioticSaleBanner from '@/components/PatrioticSaleBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { catalogProducts, featuredHeroProduct } from '@/lib/catalogProducts';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const craftsmanshipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Scroll observer for navbar shadow & active link highlight
  useEffect(() => {
    if (!hasMounted) return;
    const onScroll = () => {
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
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMounted]);

  // Lenis smooth scroll configuration
  useEffect(() => {
    if (!hasMounted) return;

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
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [hasMounted]);

  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent("Hello RS Writing Instruments, I am interested in inquiring about your fountain pen line and custom orders.")}`;

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }} suppressHydrationWarning>
      
      {/* Top CRO WhatsApp Announcement Banner */}
      <WhatsAppBanner />

      {/* STICKY NAVIGATION BAR */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${navScrolled ? 'py-3 glass-light shadow-xs' : 'py-5 bg-[#FDFBF7]/90 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:rotate-12">
              <Image src="/logo.png" alt="RS Logo" fill className="object-contain" sizes="40px" priority />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#102E29]">RS WRITING</span>
              <span className="block text-[8px] uppercase tracking-[0.25em] font-semibold text-[#B8963E]">Instruments</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs tracking-wider uppercase font-medium">
            <a 
              href="#hero-section" 
              className={`hover:text-[#B8963E] transition-colors relative py-1 ${activeSection === 'hero-section' ? 'text-[#102E29] font-bold' : 'text-[#6B6558]'}`}
            >
              Featured
              {activeSection === 'hero-section' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />}
            </a>
            <a 
              href="#pen-catalog" 
              className={`hover:text-[#B8963E] transition-colors relative py-1 ${activeSection === 'pen-catalog' ? 'text-[#102E29] font-bold' : 'text-[#6B6558]'}`}
            >
              Pens Catalog
              {activeSection === 'pen-catalog' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />}
            </a>
            <a 
              href="#feed-catalog" 
              className={`hover:text-[#B8963E] transition-colors relative py-1 ${activeSection === 'feed-catalog' ? 'text-[#102E29] font-bold' : 'text-[#6B6558]'}`}
            >
              Ebonite Feeds
              {activeSection === 'feed-catalog' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />}
            </a>
            <a 
              href="#policies-section" 
              className={`hover:text-[#B8963E] transition-colors relative py-1 ${activeSection === 'policies-section' ? 'text-[#102E29] font-bold' : 'text-[#6B6558]'}`}
            >
              Policies
              {activeSection === 'policies-section' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />}
            </a>
            <a 
              href="#contact" 
              className={`hover:text-[#B8963E] transition-colors relative py-1 ${activeSection === 'contact' ? 'text-[#102E29] font-bold' : 'text-[#6B6558]'}`}
            >
              Contact Us
              {activeSection === 'contact' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />}
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
              Pens Catalog
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

      {/* HERO SECTION WITH IMAGE 1 FEATURED LANDING VIEW */}
      <section id="hero-section" className="relative w-full py-8 md:py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Ambient Glow */}
          <div className="ambient-glow w-[500px] h-[500px] top-[10%] left-[5%]" style={{ background: 'radial-gradient(circle, rgba(184, 150, 62, 0.06) 0%, transparent 70%)' }} />

          {/* Left Column: Hero Text */}
          <div className="md:col-span-6 z-10 text-left">
            <span className="fable-mono-caps text-[#B8963E] block mb-3 font-medium">
              ◆ Handcrafted Ebonite Feeds / Custom Pens
            </span>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal mb-5 leading-[1.08] text-[#102E29] tracking-tight">
              Where precision engineering meets <span className="font-serif italic text-[#B8963E]">heritage</span>
            </h1>
            
            <p className="font-sans text-xs md:text-sm leading-relaxed mb-7 max-w-lg text-[#6B6558] font-normal">
              Custom manufactured ebonite feeds and hand-turned fountain pens for discerning pen makers and collectors worldwide. Select any model below to enquire on WhatsApp.
            </p>

            {/* Dual Pill CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mb-4">
              <a
                href="#pen-catalog"
                className="fable-pill-btn min-h-[44px] py-3.5 px-7 fable-mono-caps font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] shadow-sm hover:bg-[#1A4A42] w-full sm:w-auto"
              >
                Browse Pen Catalog <HiArrowDown size={14} />
              </a>

              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fable-pill-btn min-h-[44px] py-3.5 px-7 fable-mono-caps font-semibold border border-[#E5DFD5] flex items-center justify-center gap-2 bg-white text-[#102E29] hover:bg-[#FAF8F5] w-full sm:w-auto"
              >
                <FaWhatsapp size={16} style={{ color: '#25D366' }} /> WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Right Column: Featured Landing View (Image 1) */}
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
              <div className="relative w-16 h-16 mb-4">
                <Image src="/logo.png" alt="RS Logo" fill className="object-contain" sizes="64px" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-[#102E29]">RS Writing Instruments</h3>
              <p className="text-xs uppercase tracking-[0.2em] mb-3 font-bold text-[#B8963E]">Precision Ebonite Feeds</p>
              <p className="text-xs leading-relaxed text-[#9C9588]">
                Handcrafted ebonite feeds and custom fountain pen mechanisms for discerning writers and pen artisans.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6 text-[#B8963E]">Quick Navigation</h4>
              <div className="flex flex-col gap-3 text-xs text-[#6B6558]">
                <a href="#hero-section" className="hover:text-[#B8963E] transition-colors">Pen Anatomy</a>
                <a href="#feed-catalog" className="hover:text-[#B8963E] transition-colors">Feeds Catalog</a>
                <a href="#fountain-pen-catalog" className="hover:text-[#B8963E] transition-colors">Fountain Pen Catalog</a>
                <a href="#contact" className="hover:text-[#B8963E] transition-colors">Contact RS Writing Instruments</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-xs text-[#6B6558] space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4 text-[#B8963E]">RS Writing Contact</h4>
              <p>Latif Nagar, Benti, Harauni</p>
              <p>Uttar Pradesh — 226 401, India</p>
              <p className="pt-2"><span className="text-[#9C9588]">Phone/WhatsApp:</span> <a href="tel:+919455664795" className="font-bold text-[#102E29] hover:underline">+91 94556 64795</a></p>
              <p><span className="text-[#9C9588]">Email:</span> <a href="mailto:fountainpenmechanic@gmail.com" className="font-bold text-[#102E29] hover:underline">fountainpenmechanic@gmail.com</a></p>
            </div>

          </div>

          <div className="w-full h-[1px] mb-8 bg-gradient-to-r from-transparent via-[#E5DFD5] to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9C9588]">
            <span>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
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
