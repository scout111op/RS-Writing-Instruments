"use client";

import { FaWhatsapp, FaPercent, FaRegCheckCircle } from "react-icons/fa";
import { HiSparkles, HiArrowRight } from "react-icons/hi";

export default function PatrioticSaleBanner() {
  const saleWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Hello RS Writing Instruments, I would like to claim the 15th August Independence Day Special Offer on PRAVAH fountain pens and ebonite feeds."
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 my-6 md:my-8 z-20 relative">
      <div 
        className="relative overflow-hidden rounded-3xl p-6 md:p-10 text-[#FDFBF7] shadow-2xl border border-[#B8963E]/40"
        style={{
          background: "linear-gradient(135deg, #071714 0%, #0D2622 40%, #061A2B 100%)",
        }}
      >
        {/* Prominent Indian Flag Tricolor Banner Bar */}
        <div className="absolute top-0 left-0 right-0 h-2.5 flex">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-[#FFFFFF]" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Ambient Decorative Tricolor Glows */}
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none bg-[#FF9933]" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none bg-[#138808]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none bg-[#000080]" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            
            {/* Indian Flag Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-xs">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#138808]" />
              </div>
              <span className="font-serif text-sm text-[#FDFBF7] font-semibold tracking-wide">
                15th August Independence Day Special Offer
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight mb-4 text-[#FDFBF7]">
              Freedom to Write with <span className="italic font-serif text-[#FF9933]">Patriotic</span> <span className="italic font-serif text-[#138808]">Pride</span>
            </h2>

            <p className="font-sans text-xs md:text-sm text-[#E5DFD5] leading-relaxed mb-7 font-normal max-w-xl">
              Honor the spirit of 15th August Independence Day with our hand-turned ebonite fountain pens. Made in Lucknow, India with precision ebonite feeds.
            </p>

            {/* Feature Badges with Saffron & Green Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 fable-mono-caps text-[10px]">
              <span className="flex items-center gap-2 bg-[#FF9933]/20 text-[#FFD8B3] px-3.5 py-2 rounded-xl border border-[#FF9933]/40 backdrop-blur-xs font-semibold">
                <HiSparkles className="text-[#FF9933]" /> Discount on Name Engraving
              </span>
              <span className="flex items-center gap-2 bg-[#138808]/20 text-[#B3F2B3] px-3.5 py-2 rounded-xl border border-[#138808]/40 backdrop-blur-xs font-semibold">
                <FaPercent className="text-[#138808]" /> Special B2B & Bulk Discounts
              </span>
              <span className="flex items-center gap-2 bg-white/10 text-[#E5DFD5] px-3.5 py-2 rounded-xl border border-white/20 backdrop-blur-xs font-semibold">
                <FaRegCheckCircle className="text-[#000080]" /> Free All-India Express Shipping
              </span>
            </div>

          </div>

          {/* Right Action Graphic & CTA Card */}
          <div className="shrink-0 flex flex-col items-center gap-4 bg-white/10 p-7 rounded-2xl border border-white/20 backdrop-blur-md text-center w-full lg:w-auto shadow-2xl">
            
            {/* Mini Tricolor Pill */}
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mb-1" />

            <div className="text-center">
              <span className="fable-mono-caps text-[9px] text-[#D4BC72] block mb-1 font-bold">Official RS Writing Instruments Offer</span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal italic text-white block leading-snug">
                15th August Independence Day Special Offer
              </h3>
            </div>

            <a
              href={saleWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn fable-mono-caps min-h-[44px] py-3.5 px-8 text-xs font-bold flex items-center justify-center gap-2 bg-[#25D366] text-white shadow-xl hover:scale-105 hover:bg-[#1EBE5D] transition-all w-full sm:w-auto"
            >
              <FaWhatsapp size={18} />
              <span>Claim Offer on WhatsApp</span>
              <HiArrowRight size={14} />
            </a>

            <span className="text-[10px] text-[#9C9588] font-sans">
              Instant quote & personal customization via WhatsApp
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}
