"use client";

import { FaWhatsapp, FaFeatherAlt, FaOm } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
            opacity: 0.25;
            transform: scale(0.85);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }
        @keyframes borderAura {
          0%, 100% {
            border-color: rgba(245, 158, 11, 0.3);
            box-shadow: 0 10px 30px -10px rgba(2, 15, 31, 0.7), 0 0 20px rgba(245, 158, 11, 0.1);
          }
          50% {
            border-color: rgba(245, 158, 11, 0.65);
            box-shadow: 0 10px 35px -10px rgba(2, 15, 31, 0.8), 0 0 30px rgba(245, 158, 11, 0.22);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-spectrum-bar,
          .anim-border-aura,
          .anim-twinkle-a,
          .anim-twinkle-b {
            animation: none !important;
            transform: none !important;
          }
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
        className="anim-border-aura relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-9 text-[#FDFBF7] shadow-xl border"
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
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none bg-[#00B4D8]" />
        <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none bg-[#F59E0B]" />

        {/* Subtle Ambient SVG Twinkle Icons (Accessible, non-emoji) */}
        <span className="anim-twinkle-a absolute top-6 left-8 text-[#FDE68A] pointer-events-none select-none">
          <HiSparkles size={16} />
        </span>
        <span className="anim-twinkle-b absolute bottom-6 right-1/3 text-[#38BDF8] pointer-events-none select-none">
          <HiSparkles size={14} />
        </span>
        <span className="anim-twinkle-a absolute top-6 right-12 text-[#FBBF24] pointer-events-none select-none">
          <HiSparkles size={18} />
        </span>

        {/* Inner Content */}
        <div className="relative z-10 space-y-4">
          
          {/* Top Festive Header Ribbon & Invocations */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F59E0B]/40 text-xs text-[#FDFBF7]">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                <FaOm className="text-[#FDE68A] text-xs" />
                <span className="font-serif font-semibold text-xs sm:text-sm tracking-wide">
                  श्रीकृष्ण जन्माष्टमी महोत्सव &bull; Shubh Janmashtami
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#BAE6FD] bg-[#00B4D8]/15 px-3 py-1.5 rounded-full border border-[#00B4D8]/30">
                <FaFeatherAlt className="text-[#38BDF8]" size={11} />
                <span className="fable-mono-caps font-bold">Lucknow Artisan Atelier</span>
              </div>
            </div>

            {/* Devotional Subtitle Inscription */}
            <span className="hidden lg:inline-block text-xs text-[#FDE68A] font-serif italic tracking-wide">
              &ldquo;माखन चोर &bull; बंसी बजैया &bull; May divine grace guide your pen&rdquo;
            </span>
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
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#CBD5E1] leading-relaxed max-w-4xl font-normal">
            On this auspicious occasion of Shree Krishna Janmashtami, RS Writing Instruments extends warm prayers to our global family of fountain pen connoisseurs, master nibsmiths, calligraphers, and writers. Handcrafted in Lucknow from pure natural ebonite with precision hand-cut capillary feeds, each pen celebrates the harmony of timeless craftsmanship. May Lord Krishna&apos;s sacred flute inspire melody in your thoughts and effortless grace in every stroke of your pen.
          </p>

          {/* Key Craftsmanship Pillars / SEO Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#FDE68A]">
              <HiSparkles size={13} className="text-[#FBBF24]" />
              <strong className="font-medium">Hand-Turned Ebonite Pens</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#BAE6FD]">
              <FaFeatherAlt size={12} className="text-[#38BDF8]" />
              <strong className="font-medium">Hand-Cut Capillary Feeds</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#A7F3D0]">
              <FaOm size={12} className="text-[#34D399]" />
              <strong className="font-medium">Timeless Indian Craftsmanship</strong>
            </span>
          </div>

          {/* Footer Signature & Interactive WhatsApp Greeting Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] block font-medium">
                With Devotion &amp; Best Wishes
              </span>
              <span className="font-serif text-base font-bold text-[#FDE68A] block">
                RS Writing Instruments
              </span>
              <span className="text-xs text-[#64748B] block">Lucknow, Uttar Pradesh, India</span>
            </div>

            <a
              href={greetingWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn fable-mono-caps min-h-[44px] py-2.5 px-7 text-xs font-semibold flex items-center justify-center gap-2 bg-[#25D366] text-white shadow-md hover:scale-104 hover:bg-[#1EBE5D] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 focus:ring-offset-[#020E1C] w-full sm:w-auto"
              title="Send Janmashtami Greetings to RS Writing Instruments on WhatsApp"
            >
              <FaWhatsapp size={16} />
              <span>Share Janmashtami Wishes</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
