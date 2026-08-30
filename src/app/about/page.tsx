"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import { FaWhatsapp, FaFeatherAlt } from 'react-icons/fa';
import { HiArrowRight, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        name: 'About Us',
        item: 'https://www.rswriting.in/about',
      },
    ],
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div id="main-wrapper" className="overflow-x-hidden min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }} suppressHydrationWarning>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <Link href="/feeds" className="text-[#6B6558] hover:text-[#B8963E]">Ebonite Feeds</Link>
            <Link href="/about" className="text-[#102E29] font-bold relative py-1">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8963E] rounded-full" />
            </Link>
            <Link href="/wholesale" className="text-[#6B6558] hover:text-[#B8963E]">B2B Wholesale</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn fable-mono-caps text-xs py-2.5 px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42]"
            >
              <FaWhatsapp size={15} style={{ color: '#25D366' }} /> Enquiry
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
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Home
            </Link>
            <Link 
              href="/pens" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Pens Catalogue
            </Link>
            <Link 
              href="/feeds" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-medium"
            >
              Ebonite Feeds
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] text-sm uppercase tracking-wider text-[#102E29] font-bold text-[#B8963E]"
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

      {/* Hero Header Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto text-left relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
          className="space-y-4"
        >
          <motion.div variants={fadeInUpVariants} className="flex items-center gap-2 text-xs text-[#9C9588] mb-2">
            <Link href="/" className="hover:text-[#102E29]">Home</Link>
            <span>/</span>
            <span className="text-[#102E29] font-semibold">About Us</span>
          </motion.div>

          <motion.span variants={fadeInUpVariants} className="fable-mono-caps text-[#B8963E] block font-medium">
            HERITAGE ATELIER / 13+ YEARS OF CRAFTSMANSHIP
          </motion.span>

          <motion.h1 variants={fadeInUpVariants} className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-[#102E29] tracking-tight leading-[1.08]">
            About <span className="italic font-serif text-[#B8963E]">RS Writing Instruments</span>
          </motion.h1>

          <motion.p variants={fadeInUpVariants} className="font-serif text-xl md:text-2xl italic text-[#102E29] leading-relaxed max-w-3xl pt-2">
            Welcome to a space where the timeless art of writing is preserved, celebrated, and elevated.
          </motion.p>
        </motion.div>
      </section>

      {/* Legacy of Craftsmanship Section */}
      <section className="pb-16 md:pb-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainerVariants}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.span variants={fadeInUpVariants} className="fable-mono-caps text-[#B8963E] block font-medium">
              EST. LUCKNOW / ARTISAN TRADITION
            </motion.span>
            <motion.h2 variants={fadeInUpVariants} className="font-serif text-3xl md:text-5xl font-normal text-[#102E29] tracking-tight">
              Our Legacy of <span className="italic font-serif text-[#B8963E]">Craftsmanship</span>
            </motion.h2>

            <motion.p variants={fadeInUpVariants} className="font-sans text-sm md:text-base leading-relaxed text-[#6B6558] font-normal">
              With over 13 years of deep-rooted experience in the fountain pen industry, we have spent more than a decade perfecting the delicate balance between traditional artisanship and modern precision. What started as a profound appreciation for fine writing instruments has evolved into a relentless pursuit of engineering the perfect writing experience. Over the past 13 years, we have studied the mechanics of ink flow, the nuances of nib tuning, and the ergonomics of a well-balanced barrel. This extensive industry experience allows us to craft instruments that do not merely write, but glide effortlessly across the page.
            </motion.p>
          </div>

          {/* Founder Workshop Image Frame */}
          <motion.div variants={fadeInUpVariants} className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-[#B8963E]/30 bg-[#FAF8F5] p-6 flex items-center justify-center group">
            <Image
              src="/logo.png"
              alt="Founder Sanjay Singh working on a bespoke fountain pen"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FAF8F5] border-y border-[#E5DFD5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainerVariants}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto">
              <motion.span variants={fadeInUpVariants} className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
                THE RS DIFFERENCE
              </motion.span>
              <motion.h2 variants={fadeInUpVariants} className="font-serif text-3xl md:text-5xl font-normal text-[#102E29] tracking-tight">
                What Sets <span className="italic font-serif text-[#B8963E]">Us Apart</span>
              </motion.h2>
              <motion.p variants={fadeInUpVariants} className="font-sans text-xs md:text-sm text-[#6B6558] mt-3 leading-relaxed">
                We understand that a fountain pen is not just a tool—it is a deeply personal extension of the writer&apos;s thoughts. Our expertise lies in the meticulous details that true aficionados value:
              </motion.p>
            </div>

            {/* 3-Column Elegant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Card 1 */}
              <motion.div variants={fadeInUpVariants} className="bg-white rounded-2xl p-6 md:p-8 hairline-card flex flex-col justify-between gpu-accelerated">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#102E29]/10 text-[#102E29] flex items-center justify-center mb-6">
                    <FaFeatherAlt size={20} className="text-[#B8963E]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#102E29] mb-3 leading-snug">
                    Bespoke Fountain Pens
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
                    Custom-tailored instruments crafted to reflect your personal aesthetic and grip, ensuring a uniquely comfortable and luxurious writing session every time.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E5DFD5]/60 mt-6 fable-mono-caps text-[9px] text-[#B8963E]">
                  HAND-TURNED / BESPOKE FITMENT
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUpVariants} className="bg-white rounded-2xl p-6 md:p-8 hairline-card flex flex-col justify-between gpu-accelerated">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#102E29]/10 text-[#102E29] flex items-center justify-center mb-6">
                    <HiOutlineSparkles size={22} className="text-[#B8963E]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#102E29] mb-3 leading-snug">
                    Handcrafted Ebonite Feeds
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
                    We specialise in machining premium ebonite feeds. Ebonite is universally celebrated for its superior, consistent capillary action and ink flow, breathing life and responsiveness into every nib it pairs with.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E5DFD5]/60 mt-6 fable-mono-caps text-[9px] text-[#B8963E]">
                  HARD RUBBER / CAPILLARY FEED
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUpVariants} className="bg-white rounded-2xl p-6 md:p-8 hairline-card flex flex-col justify-between gpu-accelerated">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#102E29]/10 text-[#102E29] flex items-center justify-center mb-6">
                    <HiOutlineShieldCheck size={22} className="text-[#B8963E]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#102E29] mb-3 leading-snug">
                    Uncompromising Quality
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
                    Every component that leaves our workshop is rigorously inspected and tested, drawing on our technical mastery to ensure flawless, skip-free performance.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E5DFD5]/60 mt-6 fable-mono-caps text-[9px] text-[#B8963E]">
                  TECHNICAL MASTERY / SKIP-FREE
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainerVariants}
          className="space-y-8"
        >
          <div className="text-left space-y-2">
            <motion.span variants={fadeInUpVariants} className="fable-mono-caps text-[#B8963E] block font-medium">
              DEVOTION TO THE TACTILE JOY
            </motion.span>
            <motion.h2 variants={fadeInUpVariants} className="font-serif text-3xl md:text-5xl font-normal text-[#102E29] tracking-tight">
              Our <span className="italic font-serif text-[#B8963E]">Philosophy</span>
            </motion.h2>
          </div>

          {/* Blockquote Quote Box */}
          <motion.blockquote 
            variants={fadeInUpVariants}
            className="border-l-4 border-[#B8963E] bg-[#FAF8F5] p-6 sm:p-10 rounded-r-2xl shadow-xs space-y-4"
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#102E29] leading-snug tracking-tight">
              &ldquo;A great pen doesn&apos;t just write; it inspires the writer.&rdquo;
            </p>
          </motion.blockquote>

          <motion.p variants={fadeInUpVariants} className="font-sans text-sm md:text-base leading-relaxed text-[#6B6558] font-normal space-y-4">
            In an increasingly fast-paced, digital world, we remain devoted to the tactile, deliberate joy of pen meeting paper. Whether you are a lifelong collector, an everyday journaler, or someone seeking a meaningful heirloom piece, our mission is to provide you with a handcrafted instrument that makes every single word feel significant. Thank you for being a part of our journey. Let&apos;s write the next chapter together.
          </motion.p>

          {/* Prominent CTA */}
          <motion.div variants={fadeInUpVariants} className="pt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/pens"
              className="fable-pill-btn min-h-[48px] py-3.5 px-8 fable-mono-caps text-xs font-bold flex items-center justify-center gap-3 bg-[#102E29] text-[#FDFBF7] shadow-md hover:bg-[#B8963E] transition-all w-full sm:w-auto"
            >
              <span>Explore Our Catalogue</span>
              <HiArrowRight size={16} />
            </Link>

            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn min-h-[48px] py-3.5 px-8 fable-mono-caps text-xs font-bold border border-[#E5DFD5] flex items-center justify-center gap-2 bg-white text-[#102E29] hover:bg-[#FAF8F5] transition-all w-full sm:w-auto"
            >
              <FaWhatsapp size={18} style={{ color: '#25D366' }} />
              <span>Connect on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

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
