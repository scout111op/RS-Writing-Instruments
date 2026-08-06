"use client";

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX, HiSparkles } from 'react-icons/hi';

export default function WhatsAppBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const whatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent("Hello RS Writing Instruments, I have an enquiry regarding product catalogs and custom bulk orders.")}`;

  return (
    <div 
      className="relative z-50 py-2.5 px-4 text-xs sm:text-sm font-medium transition-all duration-500 animate-fade-in"
      style={{
        background: 'linear-gradient(90deg, #102E29 0%, #173E38 50%, #102E29 100%)',
        color: '#FDFBF7',
        borderBottom: '1px solid rgba(184, 150, 62, 0.4)',
        boxShadow: '0 2px 10px rgba(16, 46, 41, 0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 px-2">
        
        {/* Banner Announcement Content */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <HiSparkles className="hidden sm:inline-block text-[#D4BC72] shrink-0" size={16} />
          <span className="font-sans text-[11px] sm:text-xs text-[#FDFBF7]">
            To order or enquiry connect via WhatsApp
          </span>
        </div>

        {/* Action Button & Close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps min-h-[36px] sm:min-h-[40px] py-1.5 px-3.5 text-[10px] font-semibold flex items-center gap-1.5 bg-[#25D366] text-white shadow-sm hover:scale-105"
          >
            <FaWhatsapp size={14} /> Chat with RS Writing Instruments
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="p-2.5 rounded-full text-[#9C9588] hover:text-[#FDFBF7] transition-colors"
            aria-label="Close announcement banner"
          >
            <HiX size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
