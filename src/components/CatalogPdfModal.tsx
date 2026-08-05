"use client";

import { useEffect } from 'react';
import { rawProducts, calculateDisplayPrice } from '@/lib/products';
import { fountainPenCollection } from '@/lib/fountainPens';
import { HiX, HiDownload, HiPrinter } from 'react-icons/hi';
import { FaWhatsapp, FaFilePdf, FaCheckCircle } from 'react-icons/fa';

interface CatalogPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogPdfModal({ isOpen, onClose }: CatalogPdfModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappCatalogUrl = `https://wa.me/919455664795?text=${encodeURIComponent("Hello RS Writing Instruments, please send me the complete PDF Catalog and wholesale price list.")}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
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
          aria-label="Close catalog modal"
        >\
          <HiX size={24} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8 pb-6 border-b border-[#E5DFD5]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 text-[10px] uppercase tracking-[0.2em] font-bold" style={{ background: '#102E29', color: '#D4BC72' }}>
            <FaFilePdf size={12} /> Official B2B Product Line Sheet
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: '#102E29' }}>
            RS Writing Instruments Specification Catalog
          </h2>
          <p className="text-xs sm:text-sm mt-2 max-w-xl mx-auto" style={{ color: '#6B6558' }}>
            Precision-manufactured ebonite feeds and bespoke fountain pens for pen artisans, brands, and repair specialists worldwide.
          </p>
        </div>

        {/* B2B Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl text-center" style={{ background: '#F5F1EB', border: '1px solid #E5DFD5' }}>
            <span className="block text-2xl font-bold font-serif" style={{ color: '#102E29' }}>250 Pcs</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#B8963E' }}>Minimum Order Quantity (Feeds)</span>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ background: '#F5F1EB', border: '1px solid #E5DFD5' }}>
            <span className="block text-2xl font-bold font-serif" style={{ color: '#102E29' }}>100% Hard Rubber</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#B8963E' }}>Natural Ebonite Material</span>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ background: '#F5F1EB', border: '1px solid #E5DFD5' }}>
            <span className="block text-2xl font-bold font-serif" style={{ color: '#102E29' }}>Parker & Shaffer</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#B8963E' }}>Geometries Supported</span>
          </div>
        </div>

        {/* Table 1: Ebonite Feeds Line Sheet */}
        <div className="mb-8">
          <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#102E29' }}>
            <FaCheckCircle className="text-[#B8963E]" size={16} /> Handcrafted Ebonite Feeds Catalog
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#E5DFD5]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#102E29] text-[#FDFBF7] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Model / Name</th>
                  <th className="p-3">Shape</th>
                  <th className="p-3">Ink Channel</th>
                  <th className="p-3">Fitment Type</th>
                  <th className="p-3 text-right">Starting Unit Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5] bg-white">
                {rawProducts.map((p) => (\
                  <tr key={p.id} className="hover:bg-[#FAF8F5]">
                    <td className="p-3 font-semibold" style={{ color: '#102E29' }}>{p.name}</td>
                    <td className="p-3" style={{ color: '#6B6558' }}>{p.shape}</td>
                    <td className="p-3" style={{ color: '#6B6558' }}>{p.ink}</td>
                    <td className="p-3" style={{ color: '#6B6558' }}>{p.type}</td>
                    <td className="p-3 text-right font-bold" style={{ color: '#102E29' }}>{calculateDisplayPrice(p)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Fountain Pen Collection */}
        <div className="mb-8">
          <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#102E29' }}>
            <FaCheckCircle className="text-[#B8963E]" size={16} /> Bespoke Fountain Pen Collection
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#E5DFD5]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#102E29] text-[#FDFBF7] uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Fountain Pen Model</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Body Material</th>
                  <th className="p-3">Feed System</th>
                  <th className="p-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5] bg-white">
                {fountainPenCollection.map((pen) => (
                  <tr key={pen.id} className="hover:bg-[#FAF8F5]">
                    <td className="p-3 font-semibold" style={{ color: '#102E29' }}>{pen.name}</td>
                    <td className="p-3" style={{ color: '#B8963E' }}>{pen.category}</td>
                    <td className="p-3" style={{ color: '#6B6558' }}>{pen.material}</td>
                    <td className="p-3" style={{ color: '#6B6558' }}>{pen.feedType}</td>
                    <td className="p-3 text-right font-bold" style={{ color: '#102E29' }}>₹{pen.price.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#E5DFD5]">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto py-3 px-6 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            style={{ background: '#F5F1EB', color: '#102E29', border: '1px solid #E5DFD5' }}
          >
            <HiPrinter size={16} /> Print / Save Line Sheet
          </button>

          <a
            href={whatsappCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3 px-6 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-105"
            style={{ background: '#25D366', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.25)' }}
          >
            <FaWhatsapp size={18} /> Request PDF Catalog via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
