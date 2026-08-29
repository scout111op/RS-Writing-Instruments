"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { rawProducts, calculateDisplayPrice } from '@/lib/products';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { HiSearch, HiOutlineDocumentText, HiFilter } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const CatalogPdfModal = dynamic(() => import('@/components/CatalogPdfModal'), {
  ssr: false,
});

export default function FeedCatalogSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const filterOptions = [
    'All',
    'Parker Shape',
    'Shaffer Shape',
    'Cartridge Compatible',
    'Single Channel',
    'Double Channel',
    'Triple (Music Flow)',
  ];

  // Filtering Ebonite Feeds Only
  const filteredFeeds = useMemo(() => {
    let list = [...rawProducts];

    if (selectedFilter === 'Parker Shape') {
      list = list.filter((item) => item.shape.toLowerCase().includes('parker'));
    } else if (selectedFilter === 'Shaffer Shape') {
      list = list.filter((item) => item.shape.toLowerCase().includes('shaffer'));
    } else if (selectedFilter === 'Cartridge Compatible') {
      list = list.filter((item) => item.type.toLowerCase().includes('cartridge'));
    } else if (selectedFilter === 'Single Channel') {
      list = list.filter((item) => item.ink.toLowerCase().includes('single'));
    } else if (selectedFilter === 'Double Channel') {
      list = list.filter((item) => item.ink.toLowerCase().includes('double'));
    } else if (selectedFilter === 'Triple (Music Flow)') {
      list = list.filter((item) => item.ink.toLowerCase().includes('triple') || item.ink.toLowerCase().includes('music'));
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.model.toLowerCase().includes(q) ||
          item.shape.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedFilter, searchTerm]);

  return (
    <section id="feed-catalog" className="relative py-10 md:py-16 px-4 sm:px-6 md:px-12 z-20" style={{ background: '#F5F1EB' }}>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <span className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
              CAPACITIVE FEED ENGINEERING / DIRECT CATALOGUE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#102E29]">
              Hand-Cut Ebonite <span className="font-serif italic text-[#B8963E]">Feeds</span>
            </h2>
            <p className="font-sans text-xs md:text-sm mt-2 max-w-xl text-[#6B6558] font-normal leading-relaxed">
              Wholesale feeds precision-cut from 100% natural vulcanised hard rubber. Compatible with classic Parker, Sheaffer, and modern custom geometries.
            </p>
          </div>

          {/* Quick PDF Catalogue Download Trigger */}
          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="fable-pill-btn fable-mono-caps min-h-[44px] text-xs py-3 px-6 font-semibold flex items-center justify-center gap-2.5 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42] shadow-sm transition-all"
          >
            <HiOutlineDocumentText size={16} className="text-[#D4BC72]" /> View PDF Spec Sheet
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C9588]" size={18} />
            <input
              type="text"
              placeholder="Search feed models (e.g. No. 35, Parker, Triple ink channel)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-xs bg-white border border-[#E5DFD5] text-[#102E29] focus:outline-none focus:border-[#B8963E] transition-colors shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#9C9588] hover:text-[#102E29]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none touch-pan-x">
            <span className="text-[11px] fable-mono-caps text-[#6B6558] shrink-0 flex items-center gap-1">
              <HiFilter size={13} /> Filter:
            </span>
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`fable-pill-btn text-[11px] px-3.5 py-1.5 whitespace-nowrap transition-all ${
                  selectedFilter === f
                    ? 'bg-[#B8963E] text-white font-medium shadow-xs'
                    : 'bg-white text-[#6B6558] border border-[#E5DFD5] hover:border-[#B8963E]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Feeds Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFeeds.map((feed) => {
            const feedPrice = calculateDisplayPrice(feed);
            const feedWhatsappUrl = getWhatsAppLink(feed);

            return (
              <div
                key={feed.id}
                className="bg-white rounded-2xl hairline-card overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Feed Image */}
                <div className="relative w-full aspect-square bg-[#FAF8F5] overflow-hidden p-6 flex items-center justify-center">
                  <Image
                    src={feed.image}
                    alt={`${feed.name} - RS Writing Instruments hand-cut ebonite fountain pen feed`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 fable-mono-caps text-[9px] bg-[#102E29]/80 text-[#FDFBF7] backdrop-blur-xs py-0.5 px-2 rounded-full">
                    {feed.type}
                  </div>
                </div>

                {/* Feed Meta */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="fable-mono-caps text-[9px] text-[#B8963E] block mb-1">
                      {feed.shape} Shape
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#102E29] leading-snug mb-1">
                      {feed.name}
                    </h3>
                    <p className="text-xs text-[#6B6558] mb-3">
                      Model: <span className="font-mono text-[#102E29] font-medium">{feed.model}</span>
                    </p>

                    <div className="space-y-1.5 py-3 border-y border-[#E5DFD5]/50 text-xs text-[#6B6558]">
                      <div className="flex justify-between">
                        <span>Ink Channel:</span>
                        <span className="font-medium text-[#102E29]">{feed.ink}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fitment:</span>
                        <span className="font-medium text-[#102E29]">{feed.shape}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wholesale MOQ:</span>
                        <span className="font-medium text-[#102E29]">250 pcs</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[10px] text-[#9C9588] uppercase tracking-wider">Unit Price</span>
                      <span className="font-serif text-lg font-bold text-[#102E29]">
                        {feedPrice.formattedPrice}
                      </span>
                    </div>

                    <a
                      href={feedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fable-pill-btn fable-mono-caps min-h-[40px] text-[11px] py-2 px-4 font-semibold flex items-center gap-1.5 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42] transition-colors"
                    >
                      <FaWhatsapp size={14} className="text-[#25D366]" /> Request Quote
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* PDF Line Sheet Modal (lazy-loaded on demand) */}
      {isPdfModalOpen && (
        <CatalogPdfModal
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
        />
      )}

    </section>
  );
}
