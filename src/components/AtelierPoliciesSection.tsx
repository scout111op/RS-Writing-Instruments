"use client";

import { FaShippingFast, FaAward, FaPenFancy, FaShieldAlt } from "react-icons/fa";

export default function AtelierPoliciesSection() {
  const policies = [
    {
      id: "shipping",
      icon: FaShippingFast,
      title: "All-India & Global Shipping",
      summary: "Complimentary tracked domestic shipping across India. Expedited air freight available for international B2B orders.",
    },
    {
      id: "craftsmanship",
      icon: FaAward,
      title: "100% Hand-Cut Ebonite Guarantee",
      summary: "Every feed is precision machined from natural hard rubber ebonite and hand-adjusted for optimal ink flow regulation.",
    },
    {
      id: "customization",
      icon: FaPenFancy,
      title: "Discount on Name Engraving",
      summary: "Special festive discount on personalized name engraving. Custom feed dimensions & branding available for manufacturers.",
    },
    {
      id: "warranty",
      icon: FaShieldAlt,
      title: "RS Warranty & Replacements",
      summary: "Direct 7-day RS Writing Instruments replacement for manufacturing defects. Dedicated WhatsApp support for technical assistance.",
    },
  ];

  return (
    <section id="policies-section" className="py-10 md:py-16 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E5DFD5] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="fable-mono-caps text-[#B8963E] block mb-2 font-semibold text-[10px]">
            ◆ RS Writing Instruments Commitments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#102E29] tracking-tight mb-4">
            RS Writing Instruments Guarantees
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#6B6558] leading-relaxed">
            Our transparent policies ensure every pen artisan, collector, and retailer receives uncompromising quality and reliable service.
          </p>
        </div>

        {/* 4-Card Policy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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

                <div className="mt-5 pt-3 border-t border-[#F0ECE4]">
                  <span className="fable-mono-caps text-[9px] text-[#B8963E] font-bold">
                    Official Guarantee ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
