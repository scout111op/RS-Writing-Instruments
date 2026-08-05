"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { FountainPen, fountainPenCollection, getFountainPenWhatsAppLink } from '@/lib/fountainPens';
import PenDetailModal from '@/components/PenDetailModal';
import { HiSearch, HiFilter } from 'react-icons/hi';
import { FaWhatsapp, FaEye, FaFeather } from 'react-icons/fa';

export default function FountainPenCollection() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPen, setSelectedPen] = useState<FountainPen | null>(null);

  const categories = ['All', 'Ebonite Flagship', 'Gold Nib Series', 'Limited Edition', 'Artisan'];

  // Exclusive Fountain Pen Filter & Search
  const filteredPens = useMemo(() => {
    let list = [...fountainPenCollection];

    if (activeCategory !== 'All') {
      list = list.filter((pen) => pen.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (pen) =>
          pen.name.toLowerCase().includes(q) ||
          pen.tagline.toLowerCase().includes(q) ||
          pen.material.toLowerCase().includes(q) ||
          pen.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchTerm]);

  return (
    <section id="fountain-pen-catalog" className="relative py-20 md:py-32 px-6 md:px-12 z-20" style={{ background: '#FDFBF7' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="fable-mono-caps text-[#B8963E] block mb-3 font-medium">
            ◆ Artisan Writing Instruments Catalog
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-normal mb-4 tracking-tight text-[#102E29]">
            Hand-turned fountain <span className="font-serif italic text-[#B8963E]">pens</span>
          </h2>
          <p className="font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-[#6B6558] font-normal">
            Masterfully hand-turned ebonite fountain pens equipped with our signature hand-cut ebonite feeds and custom solid gold nibs.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-6 mb-12 border border-[#E5DFD5] flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C9588]" size={18} />
            <input
              type="text"
              placeholder="Search fountain pens by model or material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl text-xs bg-white border border-[#E5DFD5] text-[#102E29] focus:outline-none focus:border-[#B8963E] transition-colors"
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
            <span className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[#9C9588] mr-1">
              <HiFilter size={14} /> Category:
            </span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="py-1.5 px-3.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
                  style={{
                    background: isActive ? '#102E29' : '#FFFFFF',
                    color: isActive ? '#FDFBF7' : '#6B6558',
                    border: isActive ? '1px solid #102E29' : '1px solid #E5DFD5',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-6 text-xs text-[#6B6558]">
          <span>Showing <strong>{filteredPens.length}</strong> fountain pen models</span>
          {searchTerm && <span>Search results for: &ldquo;{searchTerm}&rdquo;</span>}
        </div>

        {/* Grid of Fountain Pens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPens.map((pen) => {
            const priceFormatted = `₹${pen.price.toLocaleString('en-IN')}`;
            const whatsappUrl = getFountainPenWhatsAppLink(pen.name, priceFormatted);

            return (
              <div
                key={pen.id}
                className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 bg-white border border-[#E5DFD5] shadow-sm hover:shadow-xl hover:border-[#D4BC72]"
              >
                {/* Badge if present */}
                {pen.badge && (
                  <span 
                    className="absolute top-4 left-4 z-10 text-[9px] uppercase tracking-[0.2em] font-bold py-1 px-3 rounded-full bg-[#102E29] text-[#FDFBF7]"
                  >
                    {pen.badge}
                  </span>
                )}

                {/* Pen Image Frame */}
                <div 
                  className="relative h-60 md:h-64 mb-6 rounded-xl overflow-hidden flex items-center justify-center p-4 cursor-pointer bg-[#FAF8F5] border border-[#F0ECE4]"
                  onClick={() => setSelectedPen(pen)}
                >
                  <Image
                    src={pen.image}
                    alt={pen.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span 
                      className="py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg bg-[#FDFBF7] text-[#102E29]"
                    >
                      <FaEye size={14} /> View Specifications
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold block mb-1.5 text-[#B8963E]">
                      {pen.category}
                    </span>

                    {/* Title */}
                    <h3 
                      className="font-serif text-xl md:text-2xl font-bold mb-2 cursor-pointer transition-colors hover:text-[#B8963E] text-[#102E29]"
                      onClick={() => setSelectedPen(pen)}
                    >
                      {pen.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs italic font-serif mb-4 leading-relaxed line-clamp-2 text-[#6B6558]">
                      &ldquo;{pen.tagline}&rdquo;
                    </p>

                    {/* Feed highlight */}
                    <div className="flex items-center gap-2 text-[11px] mb-6 font-medium text-[#6B6558]">
                      <FaFeather className="text-[#B8963E]" />
                      <span className="truncate">{pen.feedType}</span>
                    </div>
                  </div>

                  {/* Footer Row: Price + Actions */}
                  <div className="pt-4 flex justify-between items-center border-t border-[#E5DFD5]">
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest font-semibold text-[#9C9588]">
                        Price
                      </span>
                      <span className="text-xl font-bold text-[#102E29]">
                        {priceFormatted}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedPen(pen)}
                        className="py-2.5 px-3.5 rounded-md text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-300 bg-[#F5F1EB] text-[#102E29] border border-[#E5DFD5] hover:bg-[#102E29] hover:text-[#FDFBF7]"
                      >
                        Specs
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3.5 rounded-md text-[10px] uppercase tracking-[0.15em] font-bold flex items-center gap-1.5 transition-all duration-300 bg-[#102E29] text-white hover:bg-[#B8963E]"
                        aria-label="Order on WhatsApp"
                      >
                        <FaWhatsapp size={14} /> Order
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Specification Detail Modal */}
      <PenDetailModal 
        pen={selectedPen} 
        onClose={() => setSelectedPen(null)} 
      />
    </section>
  );
}
