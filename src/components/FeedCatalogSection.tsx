"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { rawProducts, calculateDisplayPrice } from '@/lib/products';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { HiSearch, HiOutlineDocumentText, HiFilter, HiZoomIn } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { useProductZoom } from '@/context/ProductZoomContext';

const CatalogPdfModal = dynamic(() => import('@/components/CatalogPdfModal'), {
  ssr: false,
});

export default function FeedCatalogSection() {
  const { openZoom } = useProductZoom();
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
      
      {/* Top subtle gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, #FDFBF7, transparent)' }} />

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
          <div>
            <span className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
              EBONITE COMPONENTS / WHOLESALE FEEDS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-normal tracking-tight text-[#102E29]">
              Hand-cut ebonite <span className="font-serif italic text-[#B8963E]">feeds</span>
            </h2>
            <p className="font-sans text-xs md:text-sm mt-2 max-w-xl text-[#6B6558] font-normal leading-relaxed">
              Precision-shaped ebonite feeds for Parker and Sheaffer pen geometries. Engineered with fine capillary channels for consistent ink control.
            </p>
          </div>

          {/* Download Line Sheet PDF CTA */}
          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="fable-pill-btn py-3 px-5 sm:px-6 fable-mono-caps text-xs font-semibold flex items-center justify-center gap-2.5 bg-[#102E29] text-[#FDFBF7] shadow-xs hover:bg-[#B8963E] w-full sm:w-auto"
          >
            <HiOutlineDocumentText size={18} /> View PDF Line Sheet
          </button>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-8 shadow-xs border border-[#E5DFD5] flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C9588]" size={18} />
            <input
              type="text"
              placeholder="Search feed #, shape, or channel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-8 py-2.5 rounded-xl text-xs bg-[#F9F7F3] border border-[#E5DFD5] text-[#102E29] focus:outline-none focus:border-[#B8963E] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9C9588] hover:text-[#102E29]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Mobile Touch-Scrollable Filter Pills */}
          <div className="flex overflow-x-auto no-scrollbar touch-pan-x gap-2 w-full md:w-auto items-center pb-1">
            <span className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[#9C9588] mr-1 shrink-0">
              <HiFilter size={14} /> Filter:
            </span>
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedFilter(opt)}
                  className={`py-2 px-3.5 rounded-xl text-[11px] font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#102E29] text-[#FDFBF7] border border-[#102E29] shadow-xs'
                      : 'bg-[#F5F1EB] text-[#6B6558] border border-[#E5DFD5] hover:border-[#B8963E]'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 text-xs text-[#6B6558]">
          <span>Showing <strong>{filteredFeeds.length}</strong> ebonite feeds</span>
          {searchTerm && <span>Search query: &ldquo;{searchTerm}&rdquo;</span>}
        </div>

        {/* Ebonite Feeds Grid with Balanced Mobile Proportions & GPU Acceleration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
          {filteredFeeds.map((feed) => {
            const displayPrice = calculateDisplayPrice(feed);
            const whatsappUrl = getWhatsAppLink(feed.name, displayPrice);

            return (
              <div
                key={feed.id}
                className="product-card bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between border border-[#E5DFD5] gpu-accelerated"
              >
                {/* Fixed Aspect Ratio Image Frame with Tap to Zoom */}
                <div 
                  className="product-image-frame w-full aspect-[4/3] mb-4 rounded-xl flex items-center justify-center relative cursor-pointer group/feed overflow-hidden"
                  style={{ background: '#FAF8F5', border: '1px solid #F0ECE4' }}
                  onClick={() => openZoom({
                    src: feed.image,
                    alt: `${feed.name} ebonite feed`,
                    title: feed.name,
                    subtitle: `${feed.model} • Shape Fitment: ${feed.shape} • ${feed.ink}`,
                    price: displayPrice,
                  })}
                  title="Tap to zoom picture in full detail"
                >
                  <Image
                    src={feed.image}
                    alt={`${feed.name} hand-cut ebonite fountain pen feed by RS Writing Instruments`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover/feed:scale-105"
                    loading="lazy"
                    quality={75}
                  />

                  {/* Zoom Badge Trigger */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openZoom({
                        src: feed.image,
                        alt: `${feed.name} ebonite feed`,
                        title: feed.name,
                        subtitle: `${feed.model} • Shape Fitment: ${feed.shape} • ${feed.ink}`,
                        price: displayPrice,
                      });
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 hover:bg-white text-[#102E29] hover:text-[#B8963E] shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer border border-[#E5DFD5]/70"
                    title="Tap to zoom in"
                    aria-label={`Zoom in on ${feed.name}`}
                  >
                    <HiZoomIn size={15} />
                  </button>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover/feed:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="py-1 px-3 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#FDFBF7]/95 text-[#102E29] shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                      <HiZoomIn size={13} className="text-[#B8963E]" /> Tap to Zoom
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#B8963E]">
                        {feed.type}
                      </span>
                      <span className="text-[9px] font-medium text-[#9C9588]">
                        MOQ: 250 Pcs
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold mb-1.5 text-[#102E29] leading-snug">
                      {feed.name}
                    </h3>

                    <p className="text-xs text-[#6B6558] mb-3 line-clamp-1">
                      {feed.model}
                    </p>

                    <div className="text-[11px] space-y-1 mb-4 text-[#9C9588] bg-[#FAF8F5] p-3 rounded-lg border border-[#F0ECE4]">
                      <p><span className="text-[#102E29] font-medium">Shape Fitment:</span> {feed.shape}</p>
                      <p><span className="text-[#102E29] font-medium">Ink Channel:</span> {feed.ink}</p>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-[#E5DFD5] flex justify-between items-center gap-2">
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-[#9C9588] font-semibold">Starting at</span>
                      <span className="text-lg sm:text-xl font-bold text-[#102E29]">{displayPrice}</span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fable-pill-btn py-2.5 px-4 text-[10px] uppercase font-bold tracking-wider text-white bg-[#102E29] hover:bg-[#B8963E] transition-colors flex items-center gap-1.5 min-h-[44px] shadow-xs"
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
