"use client";

import { useState } from "react";
import Image from "next/image";
import { NibProduct, NibPoint, buildNibWhatsAppUrl } from "@/lib/nibs";
import { FaWhatsapp, FaInfoCircle, FaExchangeAlt } from "react-icons/fa";

interface NibCardProps {
  nib: NibProduct;
  priority?: boolean;
}

export default function NibCard({ nib, priority = false }: NibCardProps) {
  // Independent state per card to prevent any cross-card bleed or stale state
  const [selectedPoint, setSelectedPoint] = useState<NibPoint>(nib.defaultPoint);
  const [activeView, setActiveView] = useState<'front' | 'back'>('front');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<boolean>(false);

  const hasBackView = Boolean(nib.secondaryImage);
  const currentImage = (activeView === 'back' && nib.secondaryImage) ? nib.secondaryImage : nib.primaryImage;
  const currentAlt = (activeView === 'back' && nib.secondaryAlt) ? nib.secondaryAlt : nib.primaryAlt;

  const whatsappUrl = buildNibWhatsAppUrl(nib, selectedPoint);

  return (
    <div 
      className="bg-white rounded-2xl border border-[#E5DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
      id={`nib-${nib.id}`}
    >
      {/* ── CARD HEADER / BADGE ──────────────────────────────────── */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between border-b border-[#F4EFEA] bg-[#FAF8F5]/60">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B8963E] bg-[#B8963E]/10 px-2.5 py-0.5 rounded-full">
            {nib.family === 'bock' ? 'Bock #6 Type 250 series' : 'Jowo #6 Type 250 series'}
          </span>
          <span className="text-[10px] font-mono font-medium text-[#6B6558] bg-[#EAE5DF] px-2 py-0.5 rounded-sm">
            Colour: {nib.colorName}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#9C9588] tracking-wider">
          SKU: {nib.sku}
        </span>
      </div>

      {/* ── IMAGE PRESENTATION WITH DUAL-VIEW TOGGLE ─────────────── */}
      <div className="relative w-full aspect-4/3 bg-radial from-[#FAF8F5] to-[#EAE5DF]/60 p-4 flex items-center justify-center overflow-hidden">
        {/* Main Nib Visual */}
        <div className="relative w-full h-full">
          <Image
            src={currentImage}
            alt={currentAlt}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>

        {/* Bock Front/Back View Toggle Controls */}
        {hasBackView && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#102E29]/85 backdrop-blur-md px-2 py-1 rounded-full shadow-md z-10">
            <button
              type="button"
              onClick={() => setActiveView('front')}
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                activeView === 'front'
                  ? 'bg-[#B8963E] text-white shadow-xs'
                  : 'text-[#E5DFD5] hover:text-white'
              }`}
              aria-label="Show front view of nib"
              title="Show Front Face View"
            >
              Front View
            </button>
            <button
              type="button"
              onClick={() => setActiveView('back')}
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                activeView === 'back'
                  ? 'bg-[#B8963E] text-white shadow-xs'
                  : 'text-[#E5DFD5] hover:text-white'
              }`}
              aria-label="Show reverse feed fitment view of nib"
              title="Show Reverse Feed Fitment View"
            >
              <FaExchangeAlt size={9} /> Back View
            </button>
          </div>
        )}
      </div>

      {/* ── PRODUCT CONTENT & HEADING ────────────────────────────── */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-serif text-lg md:text-xl font-bold text-[#102E29] leading-snug tracking-tight mb-2">
          {nib.title}
        </h3>

        <p className="text-xs text-[#6B6558] leading-relaxed mb-4 line-clamp-2">
          {nib.seoDescription}
        </p>

        {/* ── NIB POINT SELECTOR (EEF, EF, FINE, MEDIUM, BROAD, DOUBLE BROAD) ── */}
        <div className="mt-auto pt-3 border-t border-[#F4EFEA]">
          <div className="flex items-center justify-between mb-2">
            <label 
              htmlFor={`nib-point-${nib.id}`} 
              className="text-[11px] uppercase tracking-wider font-bold text-[#102E29]"
            >
              Select Nib Point: <span className="text-[#B8963E] font-semibold">{selectedPoint}</span>
            </label>
            <span className="text-[10px] text-[#9C9588]">German Specification</span>
          </div>

          <div 
            id={`nib-point-${nib.id}`}
            className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-4"
            role="radiogroup" 
            aria-label={`Select point size for ${nib.title}`}
          >
            {nib.pointsAvailable.map((point) => {
              const isSelected = selectedPoint === point;
              return (
                <button
                  key={point}
                  type="button"
                  onClick={() => setSelectedPoint(point)}
                  role="radio"
                  aria-checked={isSelected}
                  className={`min-h-[44px] px-1 py-1.5 rounded-lg text-xs font-mono font-bold tracking-tight transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-[#102E29] text-[#FDFBF7] shadow-xs ring-2 ring-[#B8963E] ring-offset-1 scale-[1.02]'
                      : 'bg-[#FAF8F5] text-[#6B6558] border border-[#E5DFD5] hover:bg-[#EAE5DF] hover:text-[#102E29]'
                  }`}
                  title={`Select ${point} point`}
                >
                  <span>{point}</span>
                  {isSelected && <span className="w-1 h-1 bg-[#B8963E] rounded-full mt-0.5" />}
                </button>
              );
            })}
          </div>

          {/* ── WHATSAPP DEEP-LINK ENQUIRY CTA ────────────────────── */}
          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[46px] py-2.5 px-4 rounded-xl font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              aria-label={`Enquire on WhatsApp about ${nib.title} in ${selectedPoint} point`}
            >
              <FaWhatsapp size={17} className="shrink-0" />
              <span>Enquire Point: {selectedPoint} on WhatsApp</span>
            </a>
            
            <p className="text-[10px] text-center text-[#9C9588]">
              Direct artisan consultation • Pan-India &amp; worldwide delivery • B2B wholesale available
            </p>
          </div>
        </div>

        {/* ── SEO, METADATA & TECHNICAL SPECIFICATIONS BLOCK ───────── */}
        <div className="mt-4 pt-3 border-t border-[#F4EFEA]">
          <button
            type="button"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="w-full flex items-center justify-between text-[11px] font-semibold text-[#6B6558] hover:text-[#102E29] py-1 cursor-pointer"
            aria-expanded={showTechnicalDetails}
          >
            <span className="flex items-center gap-1.5">
              <FaInfoCircle size={12} className="text-[#B8963E]" />
              Technical Specs &amp; SEO Data
            </span>
            <span className="text-[10px] uppercase font-mono text-[#B8963E]">
              {showTechnicalDetails ? 'Hide' : 'Expand'}
            </span>
          </button>

          {showTechnicalDetails && (
            <div className="mt-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]/60 text-[11px] text-[#6B6558] space-y-2">
              <div className="grid grid-cols-2 gap-2 text-[10px] pb-2 border-b border-[#E5DFD5]/50">
                <div>
                  <span className="text-[#9C9588] block">Specification:</span>
                  <span className="font-semibold text-[#102E29]">{nib.size}</span>
                </div>
                <div>
                  <span className="text-[#9C9588] block">Base Metal:</span>
                  <span className="font-semibold text-[#102E29]">{nib.material}</span>
                </div>
                <div>
                  <span className="text-[#9C9588] block">Coating Finish:</span>
                  <span className="font-semibold text-[#102E29]">{nib.coating}</span>
                </div>
                <div>
                  <span className="text-[#9C9588] block">Current Alt Text:</span>
                  <span className="font-mono text-[9px] text-[#102E29] truncate block" title={currentAlt}>{currentAlt}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#9C9588] block font-semibold">Fitment & Ebonite Compatibility:</span>
                <p className="text-[10px] text-[#102E29] leading-tight">{nib.compatibilityNote}</p>
              </div>

              <div>
                <span className="text-[10px] text-[#9C9588] block font-semibold mb-1">Keywords &amp; Search Tags:</span>
                <div className="flex flex-wrap gap-1">
                  {nib.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-mono bg-white px-1.5 py-0.5 rounded-sm border border-[#E5DFD5] text-[#6B6558]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
