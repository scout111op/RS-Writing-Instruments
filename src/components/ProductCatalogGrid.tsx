"use client";

import { useState, useMemo } from "react";
import { catalogProducts } from "@/lib/catalogProducts";
import ProductCard from "@/components/ProductCard";
import { HiSearch } from "react-icons/hi";

export default function ProductCatalogGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return catalogProducts;
    const q = searchTerm.toLowerCase();
    return catalogProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.colours.some((c) => c.name.toLowerCase().includes(q))
    );
  }, [searchTerm]);

  return (
    <section id="pen-catalog" className="relative py-10 md:py-16 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <span className="fable-mono-caps text-[#B8963E] block mb-2 font-medium">
              BESPOKE PENS / CATALOGUE DISCOVERY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#102E29]">
              Handcrafted fountain <span className="font-serif italic text-[#B8963E]">pens</span>
            </h2>
            <p className="font-sans text-xs md:text-sm mt-2 max-w-xl text-[#6B6558] font-normal leading-relaxed">
              Select your preferred pen model and colour option to enquire directly with RS Writing Instruments on WhatsApp.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9C9588]" size={16} />
            <input
              type="text"
              placeholder="Search pens or colours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-full text-xs bg-white border border-[#E5DFD5] text-[#102E29] focus:outline-none focus:border-[#B8963E] transition-colors shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#9C9588] hover:text-[#102E29]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="gpu-accelerated"
              suppressHydrationWarning
            >
              <ProductCard
                product={product}
                isFeatured={false}
                showMeasurements={true}
              />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DFD5] mt-6">
            <p className="font-serif text-lg text-[#102E29] mb-1">No pens matched your search</p>
            <p className="font-sans text-xs text-[#9C9588]">Try searching for a different model or colour.</p>
          </div>
        )}

      </div>
    </section>
  );
}
