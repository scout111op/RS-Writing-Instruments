"use client";

import Image from "next/image";
import { FaWhatsapp, FaBolt } from "react-icons/fa";
import { HiZoomIn, HiSparkles } from "react-icons/hi";
import { useProductZoom } from "@/context/ProductZoomContext";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

interface LaserEngravingHeroCardProps {
  className?: string;
}

export default function LaserEngravingHeroCard({ className = "" }: LaserEngravingHeroCardProps) {
  const { openZoom } = useProductZoom();

  const engravingImage = "/custom-laser-engraving.webp";
  const engravingTitle = "Custom Laser Engraving on Nibs & Clips";
  const engravingSubtitle = "Wave Motif on Black Nib & Ornate 'JAI' Filigree on Gold Clip";

  const handleOpenZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    openZoom({
      src: engravingImage,
      alt: "Custom Laser Engraving on Fountain Pen Nib and Clip - RS Writing Instruments",
      title: engravingTitle,
      subtitle: engravingSubtitle,
    });
  };

  const engravingWhatsappMessage = encodeURIComponent(
    "Hello RS Writing Instruments, I am interested in your Custom Laser Engraving service for fountain pen nibs, clips, and pens. Please share details and pricing."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${engravingWhatsappMessage}`;

  return (
    <article
      className={`relative bg-gradient-to-br from-white via-[#FAF8F5] to-[#F5EFEB] rounded-2xl border border-[#E5DFD5] shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 overflow-hidden group ${className}`}
      aria-labelledby="laser-engraving-heading"
    >
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8963E] via-[#D4BC72] to-[#B8963E]" />

      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-5">
        
        {/* Interactive Image Frame with Zoom Overlay */}
        <div
          onClick={handleOpenZoom}
          className="relative w-full lg:w-44 h-48 sm:h-52 lg:h-44 bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#E5DFD5]/80 flex items-center justify-center cursor-pointer select-none group/img shrink-0 shadow-2xs hover:border-[#B8963E]/60 transition-all duration-300"
          title="Click to zoom in high-resolution detail"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              openZoom({
                src: engravingImage,
                alt: "Custom Laser Engraving on Fountain Pen Nib and Clip",
                title: engravingTitle,
                subtitle: engravingSubtitle,
              });
            }
          }}
          aria-label="Zoom in on laser engraved nib and clip samples"
        >
          <Image
            src={engravingImage}
            alt="Custom laser engraving on fountain pen nib and gold clip with custom artwork and monogram"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 200px"
            className="object-contain p-2 transition-transform duration-300 group-hover/img:scale-105"
            quality={90}
          />

          {/* Hover Tap-To-Zoom Badge */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="py-1 px-2.5 rounded-full text-[9px] font-semibold tracking-wider uppercase bg-[#FDFBF7]/95 text-[#102E29] shadow-md flex items-center gap-1 backdrop-blur-xs">
              <HiZoomIn size={12} className="text-[#B8963E]" /> Zoom Sample
            </span>
          </div>

          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-[#102E29] hover:text-[#B8963E] shadow-2xs border border-[#E5DFD5]">
            <HiZoomIn size={13} />
          </div>
        </div>

        {/* Content & Details */}
        <div className="flex-1 flex flex-col justify-between text-left min-w-0">
          <div>
            {/* Top Category Badge */}
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B8963E]/15 text-[#B8963E] fable-mono-caps text-[8px] sm:text-[9px] font-bold tracking-wider">
                <HiSparkles size={10} className="text-[#B8963E]" /> BESPOKE ATELIER SERVICE
              </span>
              <span className="inline-flex items-center gap-0.5 text-[9px] text-[#6B6558] font-mono">
                <FaBolt size={8} className="text-[#B8963E]" /> Fiber Laser Precision
              </span>
            </div>

            {/* Title */}
            <h3
              id="laser-engraving-heading"
              className="font-serif text-base sm:text-lg font-bold text-[#102E29] leading-snug tracking-tight mb-1"
            >
              Custom Laser Engraving on Nibs &amp; Clips
            </h3>

            {/* Description */}
            <p className="font-sans text-[11px] sm:text-xs text-[#6B6558] leading-relaxed mb-2.5 font-normal line-clamp-2 sm:line-clamp-none">
              Transform your fountain pen with bespoke permanent laser engraving. Intricate custom artwork, family crests, monograms, Devanagari script, or company logos etched with micron-level precision on nibs, clips, and ebonite pens.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white text-[#102E29] border border-[#E5DFD5]">
                ✓ Custom Art &amp; Logos
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white text-[#102E29] border border-[#E5DFD5]">
                ✓ Monograms &amp; Scripts
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white text-[#102E29] border border-[#E5DFD5]">
                ✓ #6 Nibs &amp; Gold/Black Trims
              </span>
            </div>
          </div>

          {/* WhatsApp CTA Action Button */}
          <div className="flex items-center gap-2 pt-1 border-t border-[#E5DFD5]/60">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn py-2 px-3.5 fable-mono-caps text-[10px] font-bold inline-flex items-center gap-1.5 bg-[#102E29] text-[#FDFBF7] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-2xs"
              title="Request a custom laser engraving quotation on WhatsApp"
            >
              <FaWhatsapp size={14} className="text-[#25D366] group-hover:text-white" />
              <span>Request Custom Engraving Quote</span>
            </a>
            
            <button
              type="button"
              onClick={handleOpenZoom}
              className="py-2 px-2.5 fable-mono-caps text-[10px] font-semibold inline-flex items-center gap-1 text-[#6B6558] hover:text-[#102E29] transition-colors"
            >
              <HiZoomIn size={13} />
              <span>Inspect Sample</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
