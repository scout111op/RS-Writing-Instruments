"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FountainPen, getFountainPenWhatsAppLink } from '@/lib/fountainPens';
import { HiX, HiCheck } from 'react-icons/hi';
import { FaWhatsapp, FaFeatherAlt } from 'react-icons/fa';

interface PenDetailModalProps {
  pen: FountainPen | null;
  onClose: () => void;
}

export default function PenDetailModal({ pen, onClose }: PenDetailModalProps) {
  const [selectedNib, setSelectedNib] = useState<string>('');

  useEffect(() => {
    if (pen && pen.nibOptions.length > 0) {
      setSelectedNib(pen.nibOptions[0]);
    }
  }, [pen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pen, onClose]);

  if (!pen) return null;

  const priceFormatted = `₹${pen.price.toLocaleString('en-IN')}`;
  const whatsappUrl = getFountainPenWhatsAppLink(pen.name, priceFormatted, selectedNib);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden my-auto"
        style={{
          background: '#FDFBF7',
          border: '1px solid #E5DFD5',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full transition-colors hover:bg-[#E5DFD5]/50"
          style={{ color: '#102E29' }}
          aria-label="Close modal"
        >
          <HiX size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Image & Quick Badge */}
          <div className="flex flex-col items-center">
            <div 
              className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden flex items-center justify-center p-4"
              style={{ background: '#FAF8F5', border: '1px solid #F0ECE4' }}
            >
              {pen.badge && (
                <span 
                  className="absolute top-3 left-3 z-10 text-[9px] uppercase tracking-[0.2em] font-bold py-1 px-3 rounded-full"
                  style={{ background: '#102E29', color: '#FDFBF7' }}
                >
                  {pen.badge}
                </span>
              )}
              
              <Image
                src={pen.image}
                alt={pen.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="w-full mt-4 flex items-center justify-between text-xs px-1" style={{ color: '#6B6558' }}>
              <span className="flex items-center gap-1.5 font-semibold">
                <FaFeatherAlt style={{ color: '#B8963E' }} /> Hand-Crafted Feed
              </span>
              <span>Weight: <strong style={{ color: '#102E29' }}>{pen.weight}</strong></span>
            </div>
          </div>

          {/* Right Column: Information & Specs */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category */}
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold block mb-1" style={{ color: '#B8963E' }}>
                ◆&ensp;{pen.category}
              </span>

              {/* Pen Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 leading-tight" style={{ color: '#102E29' }}>
                {pen.name}
              </h3>

              {/* Tagline */}
              <p className="text-xs italic font-serif mb-4" style={{ color: '#6B6558' }}>
                &ldquo;{pen.tagline}&rdquo;
              </p>

              {/* Price */}
              <div className="mb-5 pb-4" style={{ borderBottom: '1px solid #E5DFD5' }}>
                <span className="text-2xl font-bold" style={{ color: '#102E29' }}>
                  {priceFormatted}
                </span>
                <span className="text-[10px] uppercase tracking-wider block mt-0.5" style={{ color: '#9C9588' }}>
                  Includes Custom Ebonite Feed & Gift Box
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: '#4A453A' }}>
                {pen.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {pen.highlights.map((h, i) => (\
                  <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: '#102E29' }}>
                    <HiCheck style={{ color: '#B8963E' }} size={14} />
                    <span>{h}</span>
                  </div>\
                ))}
              </div>

              {/* Specifications List */}
              <div className="rounded-lg p-3.5 mb-6 text-xs space-y-1.5" style={{ background: '#F5F1EB', border: '1px solid #E5DFD5' }}>
                <p><span style={{ color: '#9C9588' }}>Body Material:</span> <strong style={{ color: '#102E29' }}>{pen.material}</strong></p>
                <p><span style={{ color: '#9C9588' }}>Feed System:</span> <strong style={{ color: '#102E29' }}>{pen.feedType}</strong></p>
                <p><span style={{ color: '#9C9588' }}>Filling Mechanism:</span> <strong style={{ color: '#102E29' }}>{pen.fillingSystem}</strong></p>
              </div>

              {/* Nib Selector */}
              <div className="mb-6">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#B8963E' }}>
                  Select Preferred Nib Grade:
                </label>\
                <div className="flex flex-wrap gap-2">
                  {pen.nibOptions.map((nib) => {
                    const isSelected = selectedNib === nib;
                    return (
                      <button
                        key={nib}
                        onClick={() => setSelectedNib(nib)}
                        className="py-1.5 px-3 rounded-md text-xs font-medium transition-all duration-200"
                        style={{
                          background: isSelected ? '#102E29' : '#FFFFFF',
                          color: isSelected ? '#FDFBF7' : '#102E29',
                          border: isSelected ? '1px solid #102E29' : '1px solid #E5DFD5',
                          boxShadow: isSelected ? '0 2px 8px rgba(16, 46, 41, 0.2)' : 'none',
                        }}
                      >
                        {nib}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-lg uppercase tracking-[0.15em] text-xs font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: '#102E29',
                color: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(16, 46, 41, 0.2)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = '#B8963E';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = '#102E29';
              }}
            >
              <FaWhatsapp size={18} /> Inquire & Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
