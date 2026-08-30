"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import PolicySubNav from "@/components/PolicySubNav";
import { FaWhatsapp, FaShieldAlt, FaLock, FaUserCheck, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import { HiArrowRight, HiOutlineMenuAlt3, HiX, HiOutlineCheckCircle } from "react-icons/hi";

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Hello RS Writing Instruments, I have a query regarding your Privacy Policy and customer data handling."
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
        name: "Privacy Policy",
        item: "https://www.rswriting.in/privacy",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | RS Writing Instruments",
    description:
      "Privacy Policy of RS Writing Instruments. Learn how we safeguard customer data for bespoke PRAVAH fountain pens, custom ebonite feeds, and luxury writing instruments orders.",
    url: "https://www.rswriting.in/privacy",
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
            <FaShieldAlt size={12} />
            <span>Privacy & Client Confidentiality</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#102E29] tracking-tight">
            Privacy <span className="italic font-serif text-[#B8963E]">Policy</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6558] max-w-2xl mx-auto leading-relaxed">
            How RS Writing Instruments safeguards your personal information when commissioning our <span className="font-semibold text-[#102E29]">best fountain pens</span>, purchasing <span className="font-semibold text-[#102E29]">premium fountain pens</span>, and ordering handcrafted ebonite capillary feeds.
          </p>
          <div className="text-[11px] font-mono text-[#9C9588] pt-2">
            Effective Date: March 2026 • Governed by Applicable Laws of India
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow py-12 md:py-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="space-y-12 text-[#3D3A34] text-sm md:text-base leading-relaxed"
        >
          {/* Quick Summary Card */}
          <motion.div
            variants={fadeInUpVariants}
            className="p-6 md:p-8 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-4"
          >
            <h2 className="font-serif text-xl font-bold text-[#102E29] flex items-center gap-3">
              <FaLock className="text-[#B8963E]" size={18} />
              <span>At-A-Glance Atelier Commitment</span>
            </h2>
            <p className="text-xs md:text-sm text-[#6B6558] leading-relaxed">
              At <strong>RS Writing Instruments</strong>, we honor the personal relationship between a writer and their bespoke pen. We respect your confidentiality with the same meticulous integrity we apply when hand-turning natural hard rubber (ebonite) rods into the finest luxury writing instruments. <strong>We do not sell, rent, or trade your personal data to any third-party advertisers or data brokers under any circumstance.</strong>
            </p>
          </motion.div>

          {/* Section 1: Overview & Scope */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              1. Overview & Scope
            </h2>
            <p>
              This Privacy Policy explains how <strong>RS Writing Instruments</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;atelier&rdquo;) collects, processes, stores, and protects personal data when you visit <a href="https://www.rswriting.in" className="text-[#B8963E] hover:underline font-semibold">rswriting.in</a>, interact with our online showcases, request custom nib grinding and tuning, commission custom-engraved <strong>premium fountain pens</strong>, or place orders for precision capillary ebonite feeds.
            </p>
            <p>
              Whether you are an individual pen connoisseur in India seeking the <strong>best fountain pens</strong> for daily journaling, an international collector acquiring our iconic <em>PRAVAH</em> series, or an OEM pen manufacturer sourcing wholesale feeds in bulk, this policy applies to all communications and transactions conducted through our digital platforms and official direct channels.
            </p>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              2. Information We Collect
            </h2>
            <p>
              We only collect information that is strictly necessary to hand-craft, customize, verify, invoice, and safely deliver your writing instruments:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2 flex items-center gap-2">
                  <HiOutlineCheckCircle className="text-[#B8963E]" size={18} />
                  <span>Order & Commission Data</span>
                </h3>
                <ul className="text-xs space-y-1.5 text-[#6B6558] list-disc list-inside">
                  <li>Full name, billing address, and doorstep postal shipping address with pincode.</li>
                  <li>WhatsApp number and mobile contact for courier dispatch and delivery OTPs.</li>
                  <li>Email address for official order summaries and digital invoices.</li>
                  <li>Personalized name engraving text and bespoke custom preferences.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                <h3 className="font-serif text-base font-bold text-[#102E29] mb-2 flex items-center gap-2">
                  <HiOutlineCheckCircle className="text-[#B8963E]" size={18} />
                  <span>B2B Wholesale & Technical Inquiries</span>
                </h3>
                <ul className="text-xs space-y-1.5 text-[#6B6558] list-disc list-inside">
                  <li>Business legal name, GSTIN (for Indian commercial tax invoices), and enterprise location.</li>
                  <li>Technical feed specifications (e.g., Parker 51, Sheaffer, #6 Jowo/Bock fitment requirements).</li>
                  <li>Quantity estimates, custom lathe turning blueprints, and prototyping notes.</li>
                  <li>Authorized purchasing executive contact details.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Purpose & Legal Basis */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              3. How We Use Your Information
            </h2>
            <p>Your details are processed strictly for legitimate operational purposes:</p>
            <ul className="space-y-2 text-sm text-[#524D44] pl-4 list-disc">
              <li>
                <strong>Atelier Handcrafting & Customization:</strong> Creating your chosen <em>PRAVAH</em> luxury pen finish (Caviar Black, Swirl Brown, Forest Green BT, Sparkle White, etc.) and tuning nib flow to your personal writing angle.
              </li>
              <li>
                <strong>Reliable Domestic & Global Shipping:</strong> Generating compliant waybills with speed post and courier services (India Post Speed Post, Blue Dart, DTDC, DHL) for insured door-to-door delivery.
              </li>
              <li>
                <strong>Direct Artisan Support:</strong> Offering live WhatsApp consultations with our master penmaker for nib servicing, feed replacement advice, and care tips for natural ebonite hard rubber.
              </li>
              <li>
                <strong>Statutory Tax & Accounting Compliance:</strong> Generating tax-compliant sales receipts and GST filings mandated by the Government of Uttar Pradesh and the Government of India.
              </li>
            </ul>
          </motion.section>

          {/* Section 4: Payment Security */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              4. Payment & Financial Data Security
            </h2>
            <p>
              To maintain the highest level of security for transactions involving <strong>premium fountain pens</strong> and wholesale feed consignments, <strong>RS Writing Instruments never collects, stores, or processes your sensitive debit/credit card numbers or net banking passwords on our web servers.</strong>
            </p>
            <p>
              All payments are transacted either via RBI-authorized UPI interfaces (Google Pay, PhonePe, BHIM, Paytm), direct NEFT/RTGS bank transfers to our official atelier account, or encrypted PCI-DSS compliant third-party payment gateways. We only retain transaction reference numbers (UTR/Transaction ID) to verify payment settlement.
            </p>
          </motion.section>

          {/* Section 5: Custom Engraving Confidentiality */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              5. Custom Engravings & Intellectual Property Confidentiality
            </h2>
            <p>
              Many of our customers commission the <strong>best fountain pens</strong> as heirloom gifts, wedding commemorations, executive awards, or proprietary brand collaborations. Any bespoke text, personal inscriptions, institutional logos, or proprietary technical drawings submitted to us for precision CNC laser engraving or feed fitment remain the exclusive property of the client.
            </p>
            <p>
              We will never reproduce or photograph a custom monogrammed client pen for marketing purposes without explicit prior consent from the purchaser.
            </p>
          </motion.section>

          {/* Section 6: Analytics & Cookies */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              6. Website Cookies & Analytical Performance
            </h2>
            <p>
              Our website uses privacy-friendly performance telemetry provided by Vercel Analytics. This anonymous telemetry measures basic aggregate data such as page load latencies, geographic regions (country/state level), and browser types to ensure our interactive 3D pen visualizers and digital catalogues load smoothly on all mobile and desktop devices.
            </p>
            <p>
              We do not deploy invasive cross-site tracking cookies, behavioral tracking pixels, or third-party advertising retargeting scripts.
            </p>
          </motion.section>

          {/* Section 7: Data Retention & Disclosure */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              7. Data Retention & Third-Party Disclosure
            </h2>
            <p>
              We retain customer order records for the duration required to service our 7-day atelier warranty, provide post-warranty nib tuning, and satisfy statutory tax record retention obligations under Indian law.
            </p>
            <p>
              Personal data is shared strictly on a need-to-know basis with:
            </p>
            <ul className="space-y-1.5 text-sm text-[#524D44] pl-4 list-disc">
              <li><strong>Insured Courier Services:</strong> Delivering parcel consignments safely to your designated address.</li>
              <li><strong>Government / Law Enforcement Authorities:</strong> Solely if legally obligated under a binding judicial warrant or statutory decree.</li>
            </ul>
          </motion.section>

          {/* Section 8: Your Rights & Contact Details */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              8. Your Rights & Atelier Contact Information
            </h2>
            <p>
              Under Indian data protection frameworks and global privacy principles, you hold the right to review the personal data associated with your orders, request corrections to your delivery details, or ask for the deletion of historical communications once legal retention periods elapse.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-4 mt-4">
              <h3 className="font-serif text-lg font-bold text-[#102E29]">
                Privacy Grievance Officer & Atelier Headquarters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                <div>
                  <p className="font-semibold text-[#102E29]">RS Writing Instruments</p>
                  <p className="text-[#6B6558]">Customer Care & Privacy Compliance Desk</p>
                  <p className="text-[#6B6558]">Dedicated Penmaking Atelier</p>
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#B8963E]" size={12} />
                    <span>WhatsApp / Tel:</span>
                    <a href="tel:+919455664795" className="text-[#102E29] font-bold hover:underline">+91 94556 64795</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRegEnvelope className="text-[#B8963E]" size={12} />
                    <span>Primary Email:</span>
                    <a href="mailto:contact@rswriting.in" className="text-[#102E29] font-bold hover:underline">contact@rswriting.in</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRegEnvelope className="text-[#B8963E]" size={12} />
                    <span>Workshop Direct:</span>
                    <a href="mailto:fountainpenmechanic@gmail.com" className="text-[#102E29] font-bold hover:underline">fountainpenmechanic@gmail.com</a>
                  </p>
                </div>
              </div>
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
                <Link href="/privacy" className="text-[#102E29] font-bold">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-[#B8963E]">Terms of Service</Link>
                <Link href="/acceptable-use" className="hover:text-[#B8963E]">Acceptable Use Policy</Link>
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
