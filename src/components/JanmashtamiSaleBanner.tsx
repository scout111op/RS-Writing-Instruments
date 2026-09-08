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
        @media (prefers-reduced-motion: reduce) {\n          .anim-spectrum-bar,\n          .anim-border-aura,\n          .anim-twinkle-a,\n          .anim-twinkle-b {\n            animation: none !important;\n            transform: none !important;\n          }\n        }\n        .anim-spectrum-bar {\n          background-size: 200% 200%;\n          animation: spectrumSweep 5s ease infinite;\n        }\n        .anim-twinkle-a {\n          animation: starTwinkle 2.2s ease-in-out infinite;\n        }\n        .anim-twinkle-b {\n          animation: starTwinkle 3s ease-in-out infinite 0.8s;\n        }\n        .anim-border-aura {\n          animation: borderAura 4s ease-in-out infinite;\n        }\n      `}</style>\n\n      <div\n        className=\"anim-border-aura relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-9 text-[#FDFBF7] shadow-xl border\"\n        style={{\n          background:\n            \"linear-gradient(135deg, #020E1C 0%, #051931 35%, #072534 70%, #020B15 100%)\",\n        }}\n      >\n        {/* Animated Peacock Feather (Mor Pankh) Color Spectrum Trim Bar */}\n        <div\n          className=\"anim-spectrum-bar absolute top-0 left-0 right-0 h-2 sm:h-2.5\"\n          style={{\n            backgroundImage:\n              \"linear-gradient(90deg, #0284C7 0%, #0D9488 20%, #F59E0B 40%, #FDE047 50%, #10B981 75%, #3B82F6 100%)\",\n            boxShadow: \"0 2px 12px rgba(245, 158, 11, 0.45)\",\n          }}\n        />\n\n        {/* Ambient Subtle Spiritual Glows */}\n        <div className=\"absolute -right-16 -top-16 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none bg-[#00B4D8]\" />\n        <div className=\"absolute -left-16 -bottom-16 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none bg-[#F59E0B]\" />\n\n        {/* Subtle Ambient SVG Twinkle Icons (Accessible, non-emoji) */}\n        <span className=\"anim-twinkle-a absolute top-6 left-8 text-[#FDE68A] pointer-events-none select-none\">\n          <HiSparkles size={16} />\n        </span>\n        <span className=\"anim-twinkle-b absolute bottom-6 right-1/3 text-[#38BDF8] pointer-events-none select-none\">\n          <HiSparkles size={14} />\n        </span>\n        <span className=\"anim-twinkle-a absolute top-6 right-12 text-[#FBBF24] pointer-events-none select-none\">\n          <HiSparkles size={18} />\n        </span>\n\n        {/* Inner Content */}\n        <div className=\"relative z-10 space-y-4\">\n          \n          {/* Top Festive Header Ribbon & Invocations */}\n          <div className=\"flex flex-wrap items-center justify-between gap-3\">\n            <div className=\"flex flex-wrap items-center gap-2\">\n              <div className=\"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F59E0B]/40 text-xs text-[#FDFBF7]\">\n                <span className=\"w-2 h-2 rounded-full bg-[#F59E0B] animate-ping\" />\n                <FaOm className=\"text-[#FDE68A] text-xs\" />\n                <span className=\"font-serif font-semibold text-xs sm:text-sm tracking-wide\">\n                  श्रीकृष्ण जन्माष्टमी महोत्सव &bull; Shubh Janmashtami\n                </span>\n              </div>\n\n              <div className=\"inline-flex items-center gap-1.5 text-xs text-[#BAE6FD] bg-[#00B4D8]/15 px-3 py-1.5 rounded-full border border-[#00B4D8]/30\">\n                <FaFeatherAlt className=\"text-[#38BDF8]\" size={11} />\n                <span className=\"fable-mono-caps font-bold\">Artisan Pen Atelier</span>\n              </div>\n            </div>\n\n            {/* Devotional Subtitle Inscription */}\n            <span className=\"hidden lg:inline-block text-xs text-[#FDE68A] font-serif italic tracking-wide\">\n              &ldquo;माखन चोर &bull; बंसी बजैया &bull; May divine grace guide your pen&rdquo;\n            </span>\n          </div>\n\n          {/* Semantic SEO Heading */}\n          <h2 className=\"font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight text-[#FDFBF7]\">\n            Wishing the entire{\" \"}\n            <span className=\"font-bold text-[#FDFBF7]\">\n              RS Writing Instruments <span className=\"italic text-[#FCD34D] font-serif font-normal\">Family</span>\n            </span>{\" \"}\n            a Blessed &amp; Joyous Janmashtami!\n          </h2>\n\n          {/* Eloquent SEO-Rich Artisanal Paragraph */}\n          <p className=\"font-sans text-xs sm:text-sm md:text-base text-[#CBD5E1] leading-relaxed max-w-4xl font-normal\">\n            On this auspicious occasion of Shree Krishna Janmashtami, RS Writing Instruments extends warm prayers to our global family of fountain pen connoisseurs, master nibsmiths, calligraphers, and writers. Handcrafted from pure natural ebonite with precision hand-cut capillary feeds, each pen celebrates the harmony of timeless craftsmanship. May Lord Krishna&apos;s sacred flute inspire melody in your thoughts and effortless grace in every stroke of your pen.\n          </p>\n\n          {/* Key Craftsmanship Pillars / SEO Badges */}\n          <div className=\"flex flex-wrap items-center gap-2.5 pt-1\">\n            <span className=\"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#FDE68A]\">\n              <HiSparkles size={13} className=\"text-[#FBBF24]\" />\n              <strong className=\"font-medium\">Hand-Turned Ebonite Pens</strong>\n            </span>\n            <span className=\"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#BAE6FD]\">\n              <FaFeatherAlt size={12} className=\"text-[#38BDF8]\" />\n              <strong className=\"font-medium\">Hand-Cut Capillary Feeds</strong>\n            </span>\n            <span className=\"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#A7F3D0]\">\n              <FaOm size={12} className=\"text-[#34D399]\" />\n              <strong className=\"font-medium\">Timeless Indian Craftsmanship</strong>\n            </span>\n          </div>\n\n          {/* Footer Signature & Interactive WhatsApp Greeting Button */}\n          <div className=\"pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4\">\n            <div className=\"text-center sm:text-left\">\n              <span className=\"text-[11px] uppercase tracking-wider text-[#94A3B8] block font-medium\">\n                With Devotion &amp; Best Wishes\n              </span>\n              <span className=\"font-serif text-base font-bold text-[#FDE68A] block\">\n                RS Writing Instruments\n              </span>\n              <span className=\"text-xs text-[#64748B] block\">Uttar Pradesh, India</span>\n            </div>\n\n            <a\n              href={greetingWhatsappUrl}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              className=\"fable-pill-btn fable-mono-caps min-h-[44px] py-2.5 px-7 text-xs font-semibold flex items-center justify-center gap-2 bg-[#25D366] text-white shadow-md hover:scale-104 hover:bg-[#1EBE5D] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 focus:ring-offset-[#020E1C] w-full sm:w-auto\"\n              title=\"Send Janmashtami Greetings to RS Writing Instruments on WhatsApp\"\n            >\n              <FaWhatsapp size={16} />\n              <span>Share Janmashtami Wishes</span>\n            </a>\n          </div>\n\n        </div>\n      </div>\n    </section>\n  );\n}\n