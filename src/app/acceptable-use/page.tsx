"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import PolicySubNav from "@/components/PolicySubNav";
import { FaWhatsapp, FaBalanceScale, FaBan, FaCheck, FaDraftingCompass, FaRegFileAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";

export default function AcceptableUsePolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Hello RS Writing Instruments, I have a question regarding your Acceptable Use Policy and digital resources."
  )}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rswriting.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Acceptable Use Policy",
        item: "https://www.rswriting.in/acceptable-use",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Acceptable Use Policy | RS Writing Instruments",
    description:
      "Acceptable Use Policy of RS Writing Instruments. Fair usage guidelines for our website, digital catalogs, proprietary feed blueprints, and communications for the best fountain pens.",
    url: "https://www.rswriting.in/acceptable-use",
    publisher: {
      "@type": "Organization",
      name: "RS Writing Instruments",
      url: "https://www.rswriting.in",
      logo: "https://www.rswriting.in/logo.png",
    },
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div
      id="main-wrapper"
      className="overflow-x-hidden min-h-screen relative flex flex-col"
      style={{ background: "#FDFBF7", color: "#1B2A2A" }}
      suppressHydrationWarning
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <WhatsAppBanner />

      {/* Sticky Navigation Bar */}
      <nav
        className="sticky top-0 w-full z-50 py-4 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5DFD5]"
        suppressHydrationWarning
      >
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
            <Link href="/" className="text-[#6B6558] hover:text-[#B8963E] transition-colors">Home</Link>
            <Link href="/pens" className="text-[#6B6558] hover:text-[#B8963E] transition-colors">Handcrafted Pens</Link>
            <Link href="/feeds" className="text-[#6B6558] hover:text-[#B8963E] transition-colors">Ebonite Feeds</Link>
            <Link href="/about" className="text-[#6B6558] hover:text-[#B8963E] transition-colors">About Us</Link>
            <Link href="/wholesale" className="text-[#6B6558] hover:text-[#B8963E] transition-colors">B2B Wholesale</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn py-2 px-5 text-xs font-bold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#B8963E] transition-all shadow-xs"
            >
              <FaWhatsapp size={14} className="text-[#25D366]" />
              <span>Contact Atelier</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#102E29] p-2 focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-[#E5DFD5] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#102E29]">Home</Link>
            <Link href="/pens" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#102E29]">Handcrafted Pens</Link>
            <Link href="/feeds" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#102E29]">Ebonite Feeds</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#102E29]">About Us</Link>
            <Link href="/wholesale" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#102E29]">B2B Wholesale</Link>
            <div className="pt-2">
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fable-pill-btn py-3 px-6 text-xs font-bold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] w-full"
              >
                <FaWhatsapp size={16} className="text-[#25D366]" />
                <span>Contact Atelier on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Policy SubNav */}
      <PolicySubNav />

      {/* Hero Header */}
      <header className="py-12 md:py-16 px-6 md:px-12 bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7] border-b border-[#E5DFD5]/60 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8963E]/10 border border-[#B8963E]/30 text-[#B8963E] text-xs font-mono tracking-widest uppercase">
            <FaDraftingCompass size={12} />
            <span>Digital Atelier Integrity</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#102E29] tracking-tight">
            Acceptable <span className="italic font-serif text-[#B8963E]">Use Policy</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6558] max-w-2xl mx-auto leading-relaxed">
            Standards for interacting with our digital atelier, protecting technical feed blueprints, and engaging with our collection of <span className="font-semibold text-[#102E29]">best fountain pens</span> and <span className="font-semibold text-[#102E29]">premium fountain pens</span>.
          </p>
          <div className="text-[11px] font-mono text-[#9C9588] pt-2">
            Effective Date: March 2026 • RS Writing Instruments Digital Atelier Standards
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow py-12 md:py-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="space-y-12 text-[#3D3A34] text-sm md:text-base leading-relaxed"
        >
          {/* Summary Box */}
          <motion.div
            variants={fadeInUpVariants}
            className="p-6 md:p-8 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-4"
          >
            <h2 className="font-serif text-xl font-bold text-[#102E29] flex items-center gap-3">
              <HiOutlineShieldCheck className="text-[#B8963E]" size={22} />
              <span>Preserving Artisanal Heritage & Digital Fair Play</span>
            </h2>
            <p className="text-xs md:text-sm text-[#6B6558] leading-relaxed">
              This Acceptable Use Policy outlines the standards governing access to <a href="https://www.rswriting.in" className="text-[#B8963E] font-semibold hover:underline">rswriting.in</a>, our digital catalogues, technical sizing guides for ebonite feeds, and our communication channels. By using our website and services, you agree to engage in fair, lawful, and honest conduct.
            </p>
          </motion.div>

          {/* Section 1: Permitted Usage */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              1. Permitted Use of Digital Atelier Resources
            </h2>
            <p>
              Visitors, fountain pen enthusiasts, calligraphers, and commercial retail partners are welcomed and authorized to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#102E29]">
                  <FaCheck className="text-[#25D366]" size={14} />
                  <span>Personal Study & Collectors</span>
                </div>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  Browse our curated catalogue of the <strong>best fountain pens</strong>, study ebonite finishes, examine 3D interactive sequences, and place bespoke orders for personal collection or gifting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#102E29]">
                  <FaCheck className="text-[#25D366]" size={14} />
                  <span>B2B OEM & Nibsmith Partners</span>
                </div>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  Consult published technical dimensions (diameter, fin depth, ink channel dimensions) to assess fitment for Parker 51, Sheaffer, or custom barrel housings, and request genuine wholesale quotes.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Intellectual Property Rights */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              2. Intellectual Property & Atelier Craftsmanship Rights
            </h2>
            <p>
              All assets published on this website—including the <strong>RS Writing Instruments</strong> brand name, <em>PRAVAH</em> trademark, high-resolution product photography, 3D render sequences, interactive UI designs, and technical capillary feed diagrams—are the exclusive intellectual property of RS Writing Instruments.
            </p>
            <div className="p-5 rounded-xl bg-white border border-[#E5DFD5] text-xs md:text-sm space-y-2 text-[#524D44]">
              <p>
                <strong>Proprietary Feed Slot Geometry:</strong> Our proprietary ink-air exchange slit widths and capillary compensation chambers represent over a decade of empirical nibsmith development. Copying or reverse-engineering our feed blueprints for unauthorized commercial mass replication is strictly prohibited.
              </p>
              <p>
                <strong>Photography & Media:</strong> You may not harvest, rebrand, or republish our original studio photographs of pens and feeds onto third-party e-commerce marketplaces without prior written licensing agreement.
              </p>
            </div>
          </motion.section>

          {/* Section 3: Prohibited Activities */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              3. Strictly Prohibited Activities
            </h2>
            <p>Users are expressly prohibited from engaging in the following actions:</p>
            <div className="space-y-3">
              {[
                {
                  title: "Automated Data Scraping & Bot Harvesting",
                  desc: "Deploying automated scrapers, headless crawlers, or data-mining bots to harvest customer reviews, pricing tables, or technical feed specifications without explicit written consent.",
                },
                {
                  title: "Inquiry Channel Abuse & Spamming",
                  desc: "Flooding our direct WhatsApp consultation lines, email dispatch desks, or quotation forms with spam, automated promotional messages, or deceptive solicitations.",
                },
                {
                  title: "Fraudulent Orders & Falsified Credentials",
                  desc: "Submitting counterfeit delivery addresses, invalid payment slips, or falsified GST registration numbers during B2B wholesale negotiations.",
                },
                {
                  title: "System Tampering & Security Breaches",
                  desc: "Attempting to bypass security perimeters, inject malicious scripts (XSS/SQLi), reverse-engineer API endpoints, or conduct denial-of-service (DoS) attacks on our web infrastructure.",
                },
                {
                  title: "Defamatory Impersonation",
                  desc: "Impersonating an authorized atelier representative, craftsman, or official reseller of RS Writing Instruments in domestic or overseas trade forums.",
                },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-white border border-[#E5DFD5] flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0 mt-0.5">
                    <FaBan size={14} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#102E29] text-sm">{item.title}</h3>
                    <p className="text-xs text-[#6B6558] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: B2B Wholesale Conduct */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              4. B2B Wholesale & Commercial Inquiries Standard
            </h2>
            <p>
              We proudly supply leading penmakers, boutique retailers, and international distributors with precision feeds and custom <strong>premium fountain pens</strong>. To maintain professional efficiency:
            </p>
            <ul className="space-y-2 text-sm text-[#524D44] pl-4 list-disc">
              <li>
                <strong>Legitimate Commercial Intent:</strong> Wholesale inquiries must originate from established businesses, pen restorers, or authentic craft initiatives with verifiable contact details.
              </li>
              <li>
                <strong>Respect for Minimum Order Quantities (MOQ):</strong> Sourcing inquiries must observe our published atelier batch constraints (typically 50 units for feeds) to preserve production quality.
              </li>
              <li>
                <strong>Nondisclosure of Custom Feed Prototyping:</strong> Custom lathe tooling specifications developed mutually between RS Writing Instruments and OEM clients shall remain confidential trade secrets.
              </li>
            </ul>
          </motion.section>

          {/* Section 5: Enforcement & Remedies */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              5. Monitoring, Suspension & Legal Redress
            </h2>
            <p>
              RS Writing Instruments reserves the full right to investigate suspected violations of this Acceptable Use Policy. In the event of confirmed abuse, we may take immediate action including:
            </p>
            <ul className="space-y-1.5 text-sm text-[#524D44] pl-4 list-disc">
              <li>Blocking offending IP ranges, email domains, and WhatsApp accounts from contacting our workshop.</li>
              <li>Cancelling fraudulent or bad-faith pending orders with forfeiture of administrative costs where legally permissible.</li>
              <li>Initiating civil litigation or criminal complaints under the Information Technology Act and Copyright Act of India.</li>
            </ul>
          </motion.section>

          {/* Section 6: Contact & Reporting */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              6. Reporting Violations & Inquiries
            </h2>
            <p>
              If you discover any misuse of our trademarks, unauthorized republishing of our technical catalog assets, or suspicious solicitations claiming affiliation with RS Writing Instruments, please inform us directly:
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] text-xs md:text-sm space-y-2">
              <p className="font-bold text-[#102E29]">RS Writing Instruments — Legal & Compliance Desk</p>
              <p className="text-[#6B6558]">Atelier Compliance & Rights Administration</p>
              <p>Email: <a href="mailto:contact@rswriting.in" className="font-bold text-[#102E29] hover:underline">contact@rswriting.in</a></p>
              <p>WhatsApp: <a href="https://wa.me/919455664795" target="_blank" rel="noopener noreferrer" className="font-bold text-[#25D366] hover:underline">+91 94556 64795</a></p>
            </div>
          </motion.section>
        </motion.article>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-6 md:px-12 border-t border-[#E5DFD5] bg-[#FDFBF7] mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <Link href="/" className="inline-block mb-3">
                <span className="font-serif text-xl font-bold text-[#102E29]">RS WRITING</span>
                <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-[#B8963E]">Instruments • Artisan Atelier</span>
              </Link>
              <p className="text-xs text-[#6B6558] leading-relaxed">
                Hand-turning natural ebonite into the best fountain pens, precision capillary feeds, and heirloom writing instruments since 2011.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4 text-[#B8963E]">Navigation</h4>
              <div className="flex flex-col gap-2 text-xs text-[#6B6558]">
                <Link href="/" className="hover:text-[#B8963E]">Home Page</Link>
                <Link href="/pens" className="hover:text-[#B8963E]">Handcrafted Fountain Pens</Link>
                <Link href="/feeds" className="hover:text-[#B8963E]">Ebonite Capillary Feeds</Link>
                <Link href="/about" className="hover:text-[#B8963E]">About Master Penmaker</Link>
                <Link href="/wholesale" className="hover:text-[#B8963E]">B2B Wholesale & OEM Supply</Link>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4 text-[#B8963E]">Legal & Policies</h4>
              <div className="flex flex-col gap-2 text-xs text-[#6B6558]">
                <Link href="/privacy" className="hover:text-[#B8963E]">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#B8963E]">Terms of Service</Link>
                <Link href="/acceptable-use" className="text-[#102E29] font-bold">Acceptable Use Policy</Link>
                <Link href="/#policies-section" className="hover:text-[#B8963E]">Atelier Guarantees</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E5DFD5] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9C9588]">
            <span suppressHydrationWarning>© {new Date().getFullYear()} RS Writing Instruments. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-[#102E29]">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#102E29]">Terms</Link>
              <span>•</span>
              <Link href="/acceptable-use" className="hover:text-[#102E29]">Acceptable Use</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp FAB */}
      <a
        href={generalWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg"
        style={{
          background: "#25D366",
          boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
        }}
        aria-label="Chat with RS Writing Instruments on WhatsApp"
      >
        <FaWhatsapp size={26} style={{ color: "#FFFFFF" }} />
      </a>
    </div>
  );
}
