"use client";

import { useState } from "react";
import Image from "next/image";
import { CatalogProduct, ProductColourOption } from "@/lib/catalogProducts";
import ColourSelector from "@/components/ColourSelector";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ProductCardProps {
  product: CatalogProduct;
  isFeatured?: boolean;
}

export default function ProductCard({ product, isFeatured = false }: ProductCardProps) {
  const [selectedColour, setSelectedColour] = useState<ProductColourOption>(
    product.colours[0]
  );

  return (
    <div
      className={`group relative bg-white rounded-2xl hairline-card overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        isFeatured ? "ring-2 ring-[#B8963E]/40" : ""
      }`}
    >
      {/* Featured Badge for Item #1 */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-10 fable-mono-caps text-[9px] font-semibold bg-[#102E29] text-[#D4BC72] py-1 px-3 rounded-full shadow-xs">
          ★ Featured Arrival
        </div>
      )}

      {/* Product Image Frame */}
      <div className="relative w-full aspect-[4/3] bg-[#FAF8F5] overflow-hidden p-4 flex items-center justify-center">
        <Image
          src={selectedColour.image}
          alt={`${product.name} - ${selectedColour.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Info & Controls */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="fable-mono-caps text-[9px] text-[#B8963E] font-medium block mb-1">
            {product.model}
          </span>
          <h3 className="font-serif text-lg md:text-xl font-normal text-[#102E29] leading-snug tracking-tight mb-1">
            {product.name}
          </h3>
          <p className="font-sans text-xs text-[#6B6558] line-clamp-2 leading-relaxed mb-2 font-normal">
            {product.tagline}
          </p>

          {/* Colour & Measurement Swatches */}
          <ColourSelector
            colours={product.colours}
            selectedColour={selectedColour}
            onSelect={(col) => setSelectedColour(col)}
          />
        </div>

        {/* WhatsApp Single CTA */}
        <div className="pt-3 border-t border-[#E5DFD5]/50 mt-2">
          <WhatsAppButton
            productName={product.name}
            selectedColour={selectedColour.name}
          />
        </div>
      </div>
    </div>
  );
}
