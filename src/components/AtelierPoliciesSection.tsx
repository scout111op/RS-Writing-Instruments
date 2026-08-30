"use client";

import Link from "next/link";
import { FaShippingFast, FaAward, FaPenFancy, FaShieldAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function AtelierPoliciesSection() {
  const policies = [
    {
      id: "shipping",
      icon: FaShippingFast,
      title: "All-India & Global Shipping",
      summary: "Complimentary tracked domestic shipping across India. Expedited air freight available for international B2B orders.",
      linkText: "View Shipping Terms",
      linkHref: "/terms#shipping",
    },
    {
      id: "craftsmanship",
      icon: FaAward,
      title: "100% Hand-Cut Ebonite Guarantee",
      summary: "Every feed is precision machined from natural hard rubber ebonite and hand-adjusted for optimal ink flow regulation.",
      linkText: "Atelier Standards",
      linkHref: "/terms",
    },
    {
      id: "customization",
      icon: FaPenFancy,
      title: "Discount on Name Engraving",
      summary: "Special festive discount on personalized name engraving. Custom feed dimensions & branding available for manufacturers.",
      linkText: "Personalization Terms",
      linkHref: "/terms",
    },
    {
      id: "warranty",
      icon: FaShieldAlt,
      title: "RS Warranty & Replacements",
      summary: "Direct 7-day RS Writing Instruments replacement for manufacturing defects. Dedicated WhatsApp support for technical assistance.",
      linkText: "Warranty Details",
      linkHref: "/terms",
    },
  ];

  return (
    <section id="policies-section" className="py-10 md:py-16 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E5DFD5] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
            ATELIER GUARANTEES / POLICIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#102E29] tracking-tight mb-4">
            Crafted with <span className="font-serif italic text-[#B8963E]">uncompromising</span> standards
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
            Transparent commitments to ensure every pen artisan, collector, and retailer receives reliable service, the best fountain pens, and quality feeds.
          </p>
        </div>

        {/* 4-Card Policy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div
                key={policy.id}
                className="bg-white rounded-2xl p-6 border border-[#E5DFD5] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#B8963E]/40 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] flex items-center justify-center mb-5 text-[#B8963E] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#102E29] mb-2 leading-snug">
                    {policy.title}
                  </h3>
                  <p className="font-sans text-xs text-[#6B6558] leading-relaxed">
                    {policy.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0ECE4] flex items-center justify-between">
                  <span className="fable-mono-caps text-[9px] text-[#B8963E] font-bold">
                    Official Guarantee ✓
                  </span>
                  <Link
                    href={policy.linkHref}
                    className="inline-flex items-center gap-1 text-[11px] text-[#102E29] font-semibold hover:text-[#B8963E] transition-colors"
                  >
                    <span>Read</span>
                    <HiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Footer Links to Full Legal Documents */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#6B6558] text-center sm:text-left">
            <span className="font-serif font-bold text-[#102E29] text-sm">Official Atelier Documentation:</span>
            <span className="hidden sm:inline text-[#9C9588]">Review complete policies governing custom commissions and data handling.</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center font-medium">
            <Link href="/privacy" className="text-[#102E29] hover:text-[#B8963E] hover:underline">
              Privacy Policy
            </Link>
            <span className="text-[#D1C9BE]">•</span>
            <Link href="/terms" className="text-[#102E29] hover:text-[#B8963E] hover:underline">
              Terms of Service
            </Link>
            <span className="text-[#D1C9BE]">•</span>
            <Link href="/acceptable-use" className="text-[#102E29] hover:text-[#B8963E] hover:underline">
              Acceptable Use Policy
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
