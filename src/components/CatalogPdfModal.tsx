"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { rawProducts, calculateDisplayPrice } from '@/lib/products';
import { HiX, HiPrinter } from 'react-icons/hi';
import { FaWhatsapp, FaFilePdf, FaCheckCircle } from 'react-icons/fa';

interface CatalogPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogPdfModal({ isOpen, onClose }: CatalogPdfModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Background Scroll Lock with Layout Shift Prevention & Focus Restoration
  useEffect(() => {
    if (!isOpen) return;

    // Save previously focused element
    if (typeof document !== 'undefined') {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      
      // Calculate scrollbar width to prevent horizontal layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        if (previouslyFocusedRef.current && typeof previouslyFocusedRef.current.focus === 'function') {
          previouslyFocusedRef.current.focus();
        }
      }
    };
  }, [isOpen]);

  // Keyboard Accessibility: Escape key & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalElement) {
        const focusableElements = modalElement.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappCatalogUrl = `https://wa.me/919455664795?text=${encodeURIComponent("Hello RS Writing Instruments, please send me the complete PDF Catalogue and wholesale price list.")}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 md:p-6 transition-opacity animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalog-modal-title"
        aria-describedby="catalog-modal-desc"
        className="relative w-full h-[100dvh] sm:h-[90vh] sm:w-[95vw] lg:w-[90vw] max-w-[1400px] bg-[#FDFBF7] border-0 sm:border border-[#E5DFD5] rounded-none sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E5DFD5] flex items-center justify-between gap-4 z-30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#102E29] text-[#D4BC72] flex items-center justify-center flex-shrink-0 shadow-xs">
              <FaFilePdf size={16} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B8963E] block">
                Official B2B Product Line Sheet
              </span>
              <h2 id="catalog-modal-title" className="font-serif text-base sm:text-2xl font-bold text-[#102E29] leading-tight">
                RS Writing Instruments Specification Catalogue
              </h2>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#F5F1EB] text-[#102E29] border border-[#E5DFD5] hover:bg-[#102E29] hover:text-[#FDFBF7] transition-all shadow-xs"
            >
              <HiPrinter size={16} /> Print / Save
            </button>

            <a
              href={whatsappCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white hover:opacity-90 transition-all shadow-xs"
            >
              <FaWhatsapp size={16} /> WhatsApp Catalogue
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#102E29] hover:bg-[#E5DFD5]/60 transition-colors focus:ring-2 focus:ring-[#B8963E]"
              aria-label="Close catalogue viewer"
            >
              <HiX size={24} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body Content */}
        <div id="catalog-modal-desc" className="flex-1 overflow-y-auto custom-catalog-scrollbar p-4 sm:p-8 space-y-8">
          
          {/* Header Summary Banner */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0">
                <Image src="/logo.png" alt="RS Writing Instruments Logo" fill className="object-contain" sizes="64px" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102E29]">
                  RS Writing Instruments
                </h3>
                <p className="text-xs text-[#6B6558] mt-0.5">
                  Artisan Hand-Cut Ebonite Feeds & Bespoke Fountain Pens — Lucknow, India
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9C9588] mt-2">
                  <span>Tel / WA: +91 94556 64795</span>
                  <span>Email: contact@rswriting.in | fountainpenmechanic@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#102E29]/10 text-[#102E29] border border-[#102E29]/20">
                B2B Wholesale Line Sheet
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#B8963E]/10 text-[#B8963E] border border-[#B8963E]/20">
                MOQ: 250 Pcs
              </span>
            </div>
          </div>

          {/* Core Highlights Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl text-center bg-white border border-[#E5DFD5] shadow-xs">
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-[#102E29]">100%</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B8963E] mt-1 block">Natural Hard Rubber Ebonite</span>
            </div>
            <div className="p-4 rounded-xl text-center bg-white border border-[#E5DFD5] shadow-xs">
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-[#102E29]">3 Channels</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B8963E] mt-1 block">Single, Double & Music Flow</span>
            </div>
            <div className="p-4 rounded-xl text-center bg-white border border-[#E5DFD5] shadow-xs">
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-[#102E29]">₹75 – ₹450</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B8963E] mt-1 block">Wholesale Price Range</span>
            </div>
            <div className="p-4 rounded-xl text-center bg-white border border-[#E5DFD5] shadow-xs">
              <span className="block text-2xl sm:text-3xl font-bold font-serif text-[#102E29]">Parker & Shaffer</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B8963E] mt-1 block">Geometries Supported</span>
            </div>
          </div>

          {/* Table: Ebonite Feeds Line Sheet */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#102E29] flex items-center gap-2">
                <FaCheckCircle className="text-[#B8963E]" size={16} /> Handcrafted Ebonite Feeds Catalogue
              </h3>
              <span className="text-xs font-mono text-[#6B6558]">{rawProducts.length} Models Available</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#E5DFD5] shadow-xs bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#102E29] text-[#FDFBF7] uppercase text-[10px] sm:text-xs tracking-wider">
                  <tr>
                    <th className="p-3.5 sm:p-4">Model / Name</th>
                    <th className="p-3.5 sm:p-4">Shape</th>
                    <th className="p-3.5 sm:p-4">Ink Channel</th>
                    <th className="p-3.5 sm:p-4">Fitment Type</th>
                    <th className="p-3.5 sm:p-4 text-right">Starting Unit Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5DFD5]">
                  {rawProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-[#102E29]">{p.name}</td>
                      <td className="p-3.5 sm:p-4 text-[#6B6558]">{p.shape}</td>
                      <td className="p-3.5 sm:p-4 text-[#6B6558]">{p.ink}</td>
                      <td className="p-3.5 sm:p-4 text-[#6B6558]">{p.type}</td>
                      <td className="p-3.5 sm:p-4 text-right font-bold text-[#102E29]">{calculateDisplayPrice(p)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Document Footer Notice */}
          <div className="p-4 rounded-xl bg-[#F5F1EB] border border-[#E5DFD5] text-center text-xs text-[#6B6558] space-y-1">
            <p className="font-semibold text-[#102E29]">Custom Fitting & OEM Manufacturing Available</p>
            <p>For custom diameter turning, custom channel depth, or bulk OEM orders exceeding 1,000 units, please contact us directly.</p>
          </div>
        </div>

        {/* Mobile Sticky Footer Bar */}
        <div className="flex-none p-3 sm:p-4 bg-[#F5F1EB] border-t border-[#E5DFD5] flex sm:hidden items-center justify-between gap-2.5 z-30">
          <button
            onClick={handlePrint}
            className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#102E29] text-[#FDFBF7] active:scale-95 transition-transform"
          >
            <HiPrinter size={16} /> Print / Save
          </button>
          <a
            href={whatsappCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#25D366] text-white active:scale-95 transition-transform"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
