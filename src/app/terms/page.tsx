"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import PolicySubNav from "@/components/PolicySubNav";
import { FaWhatsapp, FaBalanceScale, FaAward, FaTools, FaShippingFast, FaCheckCircle } from "react-icons/fa";
import { HiArrowRight, HiOutlineMenuAlt3, HiX, HiOutlineShieldCheck, HiOutlineSparkles } from "react-icons/hi";

export default function TermsOfServicePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Hello RS Writing Instruments, I have a question regarding your Terms of Service and ordering terms."
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
        name: "Terms of Service",
        item: "https://www.rswriting.in/terms",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service | RS Writing Instruments",
    description:
      "Terms of Service of RS Writing Instruments. Craftsmanship standards, 7-day warranty, ebonite care, shipping policies, and ordering conditions for the best fountain pens in India.",
    url: "https://www.rswriting.in/terms",
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
            <FaBalanceScale size={12} />
            <span>Atelier Standards & Legal Terms</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#102E29] tracking-tight">
            Terms of <span className="italic font-serif text-[#B8963E]">Service</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-[#6B6558] max-w-2xl mx-auto leading-relaxed">
            Transparent guidelines governing custom commissions, craftsmanship tolerances, shipping policies, and 7-day warranties for our <span className="font-semibold text-[#102E29]">best fountain pens</span> and hand-cut ebonite feeds.
          </p>
          <div className="text-[11px] font-mono text-[#9C9588] pt-2">
            Last Updated: March 2026 • Registered Atelier Standards
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
          {/* Key Principles Card */}
          <motion.div
            variants={fadeInUpVariants}
            className="p-6 md:p-8 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-4"
          >
            <h2 className="font-serif text-xl font-bold text-[#102E29] flex items-center gap-3">
              <FaAward className="text-[#B8963E]" size={20} />
              <span>The RS Writing Instruments Promise</span>
            </h2>
            <p className="text-xs md:text-sm text-[#6B6558] leading-relaxed">
              When you purchase from <strong>RS Writing Instruments</strong>, you are not buying an anonymous mass-produced plastic item. You are investing in artisanal heritage: genuine vulcanized natural hard rubber (ebonite), lathe-turned barrels, hand-tuned stainless steel nibs, and hand-slotted capillary feeds adjusted individually in our workshop atelier. These Terms set forth our commitments and mutual expectations.
            </p>
          </motion.div>

          {/* Section 1: Handcrafted Writing Instruments & Catalogue Offerings */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              1. Atelier Craftsmanship & Products
            </h2>
            <p>
              These Terms of Service govern the purchase, customization, and supply of writing products produced by RS Writing Instruments, including:
            </p>
            <ul className="space-y-2 text-sm text-[#524D44] pl-4 list-disc">
              <li>
                <strong>PRAVAH Collection:</strong> Our flagship series of <strong>premium fountain pens</strong> hand-machined from high-grade natural ebonite in classic mottled, ripple, swirl, and mirror-polished solid finishes (Caviar Black, Swirl Brown, Forest Green BT, Sparkle White, etc.).
              </li>
              <li>
                <strong>Hand-Cut Ebonite Capillary Feeds:</strong> Precision hand-machined and slotted hard rubber feeds (₹75–₹450) engineered for optimal ink buffer control, offering superior thermal stability compared to injection-molded plastic.
              </li>
              <li>
                <strong>Vintage & Contemporary Fitments:</strong> Specialist replacement feeds designed specifically for iconic geometries including Parker 51, Sheaffer, standard #6, and custom penmaker barrel sections.
              </li>
              <li>
                <strong>B2B Wholesale & OEM Components:</strong> Bulk consignments of customized feed geometries and semi-finished pen components for penmakers and retailers across India and worldwide.
              </li>
            </ul>
          </motion.section>

          {/* Section 2: Artisanal Variations & Ebonite Characteristics */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              2. Artisanal Tolerances & Natural Ebonite Variations
            </h2>
            <p>
              Natural hard rubber (ebonite) is a revered historical polymer made from natural rubber vulcanized with sulfur. Because each pen rod is blended, cured, and hand-turned individually on vintage lathes:
            </p>
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-xs md:text-sm space-y-2.5 text-[#524D44]">
              <p>
                <strong>Marbling & Swirl Uniqueness:</strong> No two marbled pens (such as Swirl Brown or Red Black Swirl) are identical. Swirl patterns, mottling depth, and color contrast differ organically on every single piece.
              </p>
              <p>
                <strong>Hand-Machined Dimensional Tolerances:</strong> While our thread pitches and section tenons are calibrated with micrometer precision, tiny microscopic nuances attest to human craftsmanship rather than robotic injection molds.
              </p>
              <p>
                <strong>Natural Characteristic Scent:</strong> Authentic vulcanized ebonite possesses a faint, pleasant characteristic sulfurous warmth when warmed in the palm—the unmistakable hallmark of authentic hard rubber.
              </p>
            </div>
          </motion.section>

          {/* Section 3: Commissioning & Custom Engravings */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              3. Bespoke Orders, Custom Engravings & Nibs
            </h2>
            <p>
              We offer bespoke options to create the <strong>best fountain pens</strong> personalized to your exact handwriting preferences:
            </p>
            <ul className="space-y-2 text-sm text-[#524D44] pl-4 list-disc">
              <li>
                <strong>Personalized Name Engraving:</strong> We provide micro-laser or diamond drag engraving on the barrel or cap band. Clients are responsible for verifying spelling and character casing before confirming the order.
              </li>
              <li>
                <strong>Nib Point Selection & Tuning:</strong> Each PRAVAH pen is supplied with your chosen nib width (Fine, Medium, Broad). Every nib is dip-tested with water/washable ink and hand-smoothed on micro-mesh prior to packaging to guarantee wet, skip-free ink delivery.
              </li>
              <li>
                <strong>Non-Cancellable Customizations:</strong> Once custom engraving or specialized non-standard nib grinding commences, personalized orders cannot be cancelled or returned for a cash refund, except under our 7-day manufacturing defect guarantee.
              </li>
            </ul>
          </motion.section>

          {/* Section 4: Pricing, Invoicing & B2B Terms */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              4. Pricing, Taxes & B2B Wholesale Conditions
            </h2>
            <p>
              All retail prices listed on our website are denominated in Indian Rupees (INR ₹).
            </p>
            <ul className="space-y-2 text-sm text-[#524D44] pl-4 list-disc">
              <li>
                <strong>Price Transparency:</strong> Standard PRAVAH fountain pens are listed transparently at ₹1,490, and precision feeds range from ₹75 to ₹450 depending on fitment complexity and fluting channels.
              </li>
              <li>
                <strong>B2B Wholesale Minimums:</strong> Wholesale feed orders require an opening MOQ of 50 units (mixed models allowed). Commercial GST tax invoices are provided upon submission of a valid GSTIN.
              </li>
              <li>
                <strong>Price Adjustments:</strong> We reserve the right to revise catalog prices for future orders based on raw ebonite rod import costs and metal component rates without retrospective liability.
              </li>
            </ul>
          </motion.section>

          {/* Section 5: Shipping, Dispatch & Delivery */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              5. Shipping, Dispatch Timelines & Insurance
            </h2>
            <p>
              We treat the dispatch of our <strong>premium fountain pens</strong> and delicate feeds with utmost caution:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5]">
                <div className="flex items-center gap-2 font-serif text-base font-bold text-[#102E29] mb-2">
                  <FaShippingFast className="text-[#B8963E]" />
                  <span>Domestic Shipments (India)</span>
                </div>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  In-stock pens and feeds are dispatched within 24 to 48 working hours from our workshop atelier via India Post Speed Post or premium courier (Blue Dart, DTDC). Standard domestic transit averages 3 to 6 business days. Tracking details are shared directly over WhatsApp and email.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5]">
                <div className="flex items-center gap-2 font-serif text-base font-bold text-[#102E29] mb-2">
                  <FaShippingFast className="text-[#B8963E]" />
                  <span>International Orders (Global)</span>
                </div>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  We ship worldwide to collectors and penmakers via tracked international registered air mail or DHL Express. Import duties, customs clearance tariffs, or local VAT imposed by destination customs are the responsibility of the recipient.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: 7-Day Guarantee & Returns */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              6. Official 7-Day Craftsmanship Warranty & Replacements
            </h2>
            <p>
              Every RS Writing instrument is backed by our direct <strong>7-Day Atelier Craftsmanship Warranty</strong>:
            </p>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B8963E]/40 space-y-3">
              <div className="flex items-center gap-3">
                <HiOutlineShieldCheck className="text-[#B8963E]" size={24} />
                <h3 className="font-serif text-lg font-bold text-[#102E29]">
                  7-Day Direct Replacement Guarantee
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#524D44] leading-relaxed">
                If your writing instrument or feed arrives with an indisputable manufacturing defect (such as defective section threading, feed capillary starvation, or barrel fissure), contact us within <strong>7 days of confirmed delivery</strong> on WhatsApp with a short video and clear photographs. We will replace the defective part or pen promptly at zero additional cost.
              </p>
              <div className="text-xs text-[#9C9588] pt-1">
                *Warranty covers manufacturing defects. It does not cover user damage, drops onto nib tines, exposure to boiling water or harsh solvents, or disassembly by uncertified third parties.
              </div>
            </div>
          </motion.section>

          {/* Section 7: Care & Preservation Guide */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              7. Care & Maintenance of Natural Ebonite
            </h2>
            <p>
              To ensure your pen provides a lifetime of writing pleasure and matures gracefully into an heirloom:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5] space-y-2">
                <h4 className="font-semibold text-[#102E29] flex items-center gap-2">
                  <FaCheckCircle className="text-[#25D366]" />
                  <span>Recommended Practices</span>
                </h4>
                <ul className="space-y-1.5 text-[#6B6558] list-disc list-inside">
                  <li>Use high-quality fountain pen inks (dye-based or fountain pen certified).</li>
                  <li>Flush feeds periodically using room-temperature clean water.</li>
                  <li>Store the pen horizontally or nib-up when inked in a pen case.</li>
                  <li>Gently buff with a soft microfiber cloth to restore luster.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E5DFD5] space-y-2">
                <h4 className="font-semibold text-[#B91C1C] flex items-center gap-2">
                  <HiX className="text-[#B91C1C]" size={16} />
                  <span>Practices to Avoid</span>
                </h4>
                <ul className="space-y-1.5 text-[#6B6558] list-disc list-inside">
                  <li>Never soak ebonite in hot or boiling water (causes discoloration).</li>
                  <li>Never use alcohol, acetone, or solvent-based sanitizers on hard rubber.</li>
                  <li>Never leave ebonite pens on car dashboards or in direct intense sunlight.</li>
                  <li>Do not use India ink or shellac-based calligraphy inks in fountain pens.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Governing Law & Jurisdiction */}
          <motion.section variants={fadeInUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#102E29] tracking-tight pb-2 border-b border-[#E5DFD5]">
              8. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Service and any contractual agreements for writing instruments or precision feeds shall be governed by and construed in accordance with the substantive laws of the Republic of India.
            </p>
            <p>
              Any legal proceeding, dispute, or claim arising out of or in connection with the purchase of our products shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
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
                <Link href="/terms" className="text-[#102E29] font-bold">Terms of Service</Link>
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
