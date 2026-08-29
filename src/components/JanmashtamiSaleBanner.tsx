"use client";

import Image from "next/image";
import { FaWhatsapp, FaFeatherAlt, FaOm } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { balKrishnaImage } from "@/lib/bannerImage";

export default function JanmashtamiSaleBanner() {
  const greetingWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Wishing the entire RS Writing Instruments family a very Happy and Blessed Shree Krishna Janmashtami Mahotsav! 🙏🪶🪈"
  )}`;

  return (
    <section 
      aria-label="Shree Krishna Janmashtami Festive Greetings"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-4 sm:my-6 z-20 relative"
    >
      <style>{`
        @keyframes floatMedallion {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes divineHaloPulse {
          0%, 100% {
            transform: scale(0.96);
            opacity: 0.5;
            filter: blur(20px);
          }
          50% {
            transform: scale(1.06);
            opacity: 0.85;
            filter: blur(30px);
          }
        }
        @keyframes spectrumSweep {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes starTwinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }
        @keyframes borderAura {
          0%, 100% {
            border-color: rgba(245, 158, 11, 0.35);
            box-shadow: 0 10px 30px -10px rgba(2, 15, 31, 0.7), 0 0 20px rgba(245, 158, 11, 0.12);
          }
          50% {
            border-color: rgba(245, 158, 11, 0.75);
            box-shadow: 0 10px 35px -10px rgba(2, 15, 31, 0.8), 0 0 35px rgba(245, 158, 11, 0.28);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-float-medallion,
          .anim-divine-halo,
          .anim-spectrum-bar,
          .anim-border-aura,
          .anim-twinkle-a,
          .anim-twinkle-b {
            animation: none !important;
            transform: none !important;
          }
        }
        .anim-float-medallion {
          animation: floatMedallion 4.5s ease-in-out infinite;
        }
        .anim-divine-halo {
          animation: divineHaloPulse 3.8s ease-in-out infinite;
        }
        .anim-spectrum-bar {
          background-size: 200% 200%;
          animation: spectrumSweep 5s ease infinite;
        }
        .anim-twinkle-a {
          animation: starTwinkle 2.2s ease-in-out infinite;
        }
        .anim-twinkle-b {
          animation: starTwinkle 3s ease-in-out infinite 0.8s;
        }
        .anim-border-aura {
          animation: borderAura 4s ease-in-out infinite;
        }
      `}</style>

      <div
        className="anim-border-aura relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-[#FDFBF7] shadow-xl border"
        style={{
          background:
            "linear-gradient(135deg, #020E1C 0%, #051931 35%, #072534 70%, #020B15 100%)",
        }}
      >
        {/* Animated Peacock Feather (Mor Pankh) Color Spectrum Trim Bar */}
        <div
          className="anim-spectrum-bar absolute top-0 left-0 right-0 h-2 sm:h-2.5"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0284C7 0%, #0D9488 20%, #F59E0B 40%, #FDE047 50%, #10B981 75%, #3B82F6 100%)",
            boxShadow: "0 2px 12px rgba(245, 158, 11, 0.45)",
          }}
        />

        {/* Ambient Subtle Spiritual Glows */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none bg-[#00B4D8]" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none bg-[#F59E0B]" />

        {/* Subtle Ambient SVG Twinkle Icons (Accessible, non-emoji) */}
        <span className="anim-twinkle-a absolute top-5 left-8 text-[#FDE68A] pointer-events-none select-none">
          <HiSparkles size={16} />
        </span>
        <span className="anim-twinkle-b absolute bottom-6 right-1/4 text-[#38BDF8] pointer-events-none select-none">
          <HiSparkles size={14} />
        </span>
        <span className="anim-twinkle-a absolute top-6 right-12 text-[#FBBF24] pointer-events-none select-none">
          <HiSparkles size={18} />
        </span>

        {/* Inner Content Grid */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-8">
          
          {/* Left Column: Compact Bal Krishna Divine Portrait Medallion */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="anim-float-medallion relative group w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl p-1.5 transition-all duration-300">
              
              {/* Pulsing Divine Halo */}
              <div className="anim-divine-halo absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#F59E0B] via-[#00B4D8] to-[#10B981]" />

              {/* Ornate Gold Fluted Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-[#F59E0B]/90 shadow-lg bg-[#020E1C]">
                <Image
                  src={balKrishnaImage}
                  alt="Bal Krishna playing flute with peacock feather crown beside handcrafted ebonite fountain pen - RS Writing Instruments Janmashtami Greetings"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 144px, 176px"
                  unoptimized
                  priority
                />

                {/* Bottom Hindi Devotional Inscription Tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020E1C] via-[#020E1C]/80 to-transparent pt-3 pb-1 px-1 text-center">
                  <span className="inline-block text-[9px] sm:text-[10px] text-[#FDE68A] font-serif font-semibold tracking-wide">
                    माखन चोर &bull; बंसी बजैया
                  </span>
                </div>
              </div>
            </div>

            <span className="text-[10px] sm:text-[11px] text-[#94A3B8] font-serif italic mt-2 text-center max-w-[170px] leading-tight">
              &ldquo;May divine grace guide your pen&rdquo;
            </span>
          </div>

          {/* Right Column: SEO-Optimized Devotional Greeting & Message */}
          <div className="flex-1 text-center md:text-left space-y-3">
            
            {/* Top Festive Header Ribbon & Invocation */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#F59E0B]/40 text-xs text-[#FDFBF7]">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                <FaOm className="text-[#FDE68A] text-[10px]" />
                <span className="font-serif font-medium text-[11px] sm:text-xs">
                  श्रीकृष्ण जन्माष्टमी महोत्सव &bull; Shubh Janmashtami
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 text-[10px] text-[#BAE6FD] bg-[#00B4D8]/15 px-2.5 py-1 rounded-full border border-[#00B4D8]/30">
                <FaFeatherAlt className="text-[#38BDF8]" size={10} />
                <span className="fable-mono-caps font-bold">Lucknow Artisan Atelier</span>
              </div>
            </div>

            {/* Semantic SEO Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight text-[#FDFBF7]">
              Wishing the entire{" "}
              <span className="font-bold text-[#FDFBF7]">
                RS Writing Instruments <span className="italic text-[#FCD34D] font-serif font-normal">Family</span>
              </span>{" "}
              a Blessed &amp; Joyous Janmashtami!
            </h2>

            {/* Eloquent SEO-Rich Artisanal Paragraph */}
            <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
              On this auspicious occasion of Shree Krishna Janmashtami, RS Writing Instruments extends warm prayers to our global family of fountain pen connoisseurs, master nibsmiths, calligraphers, and writers. Handcrafted in Lucknow from pure natural ebonite with precision hand-cut capillary feeds, each pen celebrates the harmony of timeless craftsmanship. May Lord Krishna&apos;s sacred flute inspire melody in your thoughts and effortless grace in every stroke of your pen.
            </p>

            {/* Key Craftsmanship Pillars / SEO Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] text-[#FDE68A]">
                <HiSparkles size={11} className="text-[#FBBF24]" />
                <strong className="font-medium">Hand-Turned Ebonite Pens</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] text-[#BAE6FD]">
                <FaFeatherAlt size={10} className="text-[#38BDF8]" />
                <strong className="font-medium">Hand-Cut Capillary Feeds</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] text-[#A7F3D0]">
                <FaOm size={10} className="text-[#34D399]" />
                <strong className="font-medium">Timeless Indian Craftsmanship</strong>
              </span>
            </div>

            {/* Footer Signature & Interactive WhatsApp Greeting Button */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block">
                  With Devotion &amp; Best Wishes
                </span>
                <span className="font-serif text-sm font-bold text-[#FDE68A] block">
                  RS Writing Instruments
                </span>
                <span className="text-[10px] text-[#64748B] block">Lucknow, Uttar Pradesh, India</span>
              </div>

              <a
                href={greetingWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fable-pill-btn fable-mono-caps min-h-[44px] py-2.5 px-6 text-xs font-semibold flex items-center justify-center gap-2 bg-[#25D366] text-white shadow-md hover:scale-104 hover:bg-[#1EBE5D] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 focus:ring-offset-[#020E1C] w-full sm:w-auto"
                title="Send Janmashtami Greetings to RS Writing Instruments on WhatsApp"
              >
                <FaWhatsapp size={15} />
                <span>Share Janmashtami Wishes</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
