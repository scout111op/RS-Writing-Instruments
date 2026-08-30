"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { rawProducts, calculateDisplayPrice } from '@/lib/products';
import { fountainPenCollection, FountainPen } from '@/lib/fountainPens';
import { getWhatsAppLink } from '@/lib/whatsapp';
import CatalogPdfModal from '@/components/CatalogPdfModal';
import PenDetailModal from '@/components/PenDetailModal';
import { HiSearch, HiOutlineDocumentText, HiFilter, HiZoomIn } from 'react-icons/hi';
import { FaWhatsapp, FaEye } from 'react-icons/fa';
import { useProductZoom } from '@/context/ProductZoomContext';

export default function UnifiedCatalogSection() {
  const { openZoom } = useProductZoom();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedFountainPen, setSelectedFountainPen] = useState<FountainPen | null>(null);

  const filterOptions = [
    'All',
    'Ebonite Feeds',
    'Fountain Pens',
    'Parker Shape',
    'Shaffer Shape',
    'Cartridge Compatible',
  ];

  // Combined Catalog Data
  const feedsAsCatalog = useMemo(() => {
    return rawProducts.map((feed) => ({
      catalogId: `feed-${feed.id}`,
      type: 'feed' as const,
      name: feed.name,
      model: feed.model,
      categoryTag: feed.type,
      shape: feed.shape,
      ink: feed.ink,
      image: feed.image,
      displayPrice: calculateDisplayPrice(feed),
      moq: '250 pcs (Minimum Order)',
      feedData: feed,
    }));
  }, []);

  const pensAsCatalog = useMemo(() => {
    return fountainPenCollection.map((pen) => ({
      catalogId: `pen-${pen.id}`,
      type: 'pen' as const,
      name: pen.name,
      model: pen.tagline,
      categoryTag: pen.category,
      shape: 'Hand-Turned',
      ink: pen.feedType,
      image: pen.image,
      displayPrice: `₹${pen.price.toLocaleString('en-IN')}`,
      moq: '1 pc (Bespoke Order)',
      penData: pen,
    }));
  }, []);

  // Filter & Search Engine
  const filteredCatalog = useMemo(() => {
    let list = [...feedsAsCatalog, ...pensAsCatalog];

    if (selectedFilter === 'Ebonite Feeds') {
      list = list.filter((item) => item.type === 'feed');
    } else if (selectedFilter === 'Fountain Pens') {
      list = list.filter((item) => item.type === 'pen');
    } else if (selectedFilter === 'Parker Shape') {
      list = list.filter((item) => item.shape.toLowerCase().includes('parker'));
    } else if (selectedFilter === 'Shaffer Shape') {
      list = list.filter((item) => item.shape.toLowerCase().includes('shaffer'));
    } else if (selectedFilter === 'Cartridge Compatible') {
      list = list.filter((item) => item.categoryTag.toLowerCase().includes('cartridge'));
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.model.toLowerCase().includes(q) ||
          item.categoryTag.toLowerCase().includes(q) ||
          item.shape.toLowerCase().includes(q)
      );
    }

    return list;
  }, [feedsAsCatalog, pensAsCatalog, selectedFilter, searchTerm]);

  return (
    <section id="catalog-section" className="relative py-20 md:py-32 px-6 md:px-12 z-20" style={{ background: '#F5F1EB' }}>
      
      {/* Top subtle blend gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, #FDFBF7, transparent)' }} />

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold block mb-2" style={{ color: '#B8963E' }}>
              ◆&ensp;B2B Wholesale & Retail Catalog&ensp;◆
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold" style={{ color: '#102E29' }}>
              Product Catalog
            </h2>
            <p className="text-xs md:text-sm mt-2 max-w-xl" style={{ color: '#6B6558' }}>
              Explore our full range of precision ebonite feeds and handcrafted fountain pens. Instant pricing requests via WhatsApp.
            </p>
          </div>

          {/* Download Line Sheet PDF CTA */}
          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="py-3 px-6 rounded-xl uppercase tracking-[0.15em] text-xs font-bold flex items-center gap-2.5 transition-all duration-300 hover:scale-105 shadow-sm"
            style={{
              background: '#102E29',
              color: '#FDFBF7',
              border: '1px solid #102E29',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = '#B8963E';
              el.style.borderColor = '#B8963E';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = '#102E29';
              el.style.borderColor = '#102E29';
            }}
          >
            <HiOutlineDocumentText size={18} /> View Digital PDF Line Sheet
          </button>
        </div>

        {/* Search Bar + Filter Bar Controls */}
        <div className="bg-white rounded-2xl p-4 md:p-6 mb-12 shadow-sm border border-[#E5DFD5] flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Realtime Search Input */}
          <div className="relative w-full md:w-80">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C9588]" size={18} />
            <input
              type="text"
              placeholder="Search by feed #, shape, or pen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl text-xs bg-[#F9F7F3] border border-[#E5DFD5] text-[#102E29] focus:outline-none focus:border-[#B8963E] transition-colors"
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

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            <span className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[#9C9588] mr-2">
              <HiFilter size={14} /> Filter:
            </span>
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setSelectedFilter(opt)}
                  className="py-1.5 px-3.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                  style={{
                    background: isActive ? '#102E29' : '#F5F1EB',
                    color: isActive ? '#FDFBF7' : '#6B6558',
                    border: isActive ? '1px solid #102E29' : '1px solid #E5DFD5',
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-[#6B6558]">
          <span>Showing <strong>{filteredCatalog.length}</strong> catalog items</span>
          {searchTerm && <span>Search results for: &ldquo;{searchTerm}&rdquo;</span>}
        </div>

        {/* Catalog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCatalog.map((item) => {
            const isPen = item.type === 'pen';
            const whatsappUrl = isPen && item.penData
              ? getWhatsAppLink(item.name, item.displayPrice)
              : getWhatsAppLink(item.name, item.displayPrice);

            return (
              <div
                key={item.catalogId}
                className="product-card bg-white rounded-2xl p-6 flex flex-col justify-between border border-[#E5DFD5]"
              >
                {/* Large Preview Frame with Tap to Zoom */}
                <div 
                  className="product-image-frame h-56 mb-5 rounded-xl flex items-center justify-center relative cursor-pointer group/uframe overflow-hidden"
                  style={{ background: '#FAF8F5', border: '1px solid #F0ECE4' }}
                  onClick={() => {
                    if (isPen && item.penData) {
                      setSelectedFountainPen(item.penData);
                    } else {
                      openZoom({
                        src: item.image,
                        alt: item.name,
                        title: item.name,
                        subtitle: `${item.model} • ${item.categoryTag}`,
                        price: item.displayPrice,
                      });
                    }
                  }}
                  title={isPen ? "View specifications or zoom" : "Tap to zoom picture"}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-5 transition-transform duration-700 group-hover/uframe:scale-105"
                  />

                  {/* Dedicated Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openZoom({
                        src: item.image,
                        alt: item.name,
                        title: item.name,
                        subtitle: `${item.model} • ${item.categoryTag}`,
                        price: item.displayPrice,
                      });
                    }}
                    className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-full bg-white/90 hover:bg-white text-[#102E29] hover:text-[#B8963E] shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer border border-[#E5DFD5]/70"
                    title="Tap to zoom in"
                    aria-label={`Zoom in on ${item.name}`}
                  >
                    <HiZoomIn size={15} />
                  </button>
                  
                  {isPen && (
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/uframe:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                      <span className="py-1.5 px-3 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#FDFBF7] text-[#102E29] flex items-center gap-1.5 shadow-md">
                        <FaEye size={12} /> View Specs
                      </span>
                    </div>
                  )}

                  {!isPen && (
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover/uframe:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="py-1 px-3 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#FDFBF7]/95 text-[#102E29] shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                        <HiZoomIn size={13} className="text-[#B8963E]" /> Tap to Zoom
                      </span>
                    </div>
                  )}
                </div>

                {/* Specs Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold" style={{ color: '#B8963E' }}>
                        {item.categoryTag}
                      </span>
                      <span className="text-[9px] font-medium text-[#9C9588]">
                        {item.moq}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold mb-2 text-[#102E29] leading-snug">
                      {item.name}
                    </h3>

                    {/* Specs Details */}
                    <p className="text-xs text-[#6B6558] mb-4 line-clamp-2">
                      {item.model}
                    </p>

                    <div className="text-[11px] space-y-1 mb-6 text-[#9C9588] bg-[#FAF8F5] p-3 rounded-lg border border-[#F0ECE4]">
                      <p><span className="text-[#102E29] font-medium">Shape/Fit:</span> {item.shape}</p>
                      <p><span className="text-[#102E29] font-medium">Ink Channel:</span> {item.ink}</p>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-[#E5DFD5] flex justify-between items-center">
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-[#9C9588] font-semibold">Starting at</span>
                      <span className="text-xl font-bold text-[#102E29]">{item.displayPrice}</span>
                    </div>

                    <div className="flex gap-2">
                      {isPen && item.penData && (
                        <button
                          onClick={() => setSelectedFountainPen(item.penData)}
                          className="py-2.5 px-3 rounded-lg text-[10px] uppercase font-bold tracking-wider bg-[#F5F1EB] text-[#102E29] hover:bg-[#102E29] hover:text-[#FDFBF7] transition-colors"
                        >
                          Specs
                        </button>
                      )}

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-lg text-[10px] uppercase font-bold tracking-wider text-white bg-[#102E29] hover:bg-[#B8963E] transition-colors flex items-center gap-1.5"
                      >
                        <FaWhatsapp size={14} /> Inquire
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* PDF Catalog Modal */}
      <CatalogPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Fountain Pen Specification Modal */}
      <PenDetailModal
        pen={selectedFountainPen}
        onClose={() => setSelectedFountainPen(null)}
      />

    </section>
  );
}
