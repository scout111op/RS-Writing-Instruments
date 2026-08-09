"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CatalogProduct, ProductColourOption } from "@/lib/catalogProducts";
import ColourSelector from "@/components/ColourSelector";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ProductCardProps {
  product: CatalogProduct;
  isFeatured?: boolean;
}

export default function ProductCard({ product, isFeatured = false }: ProductCardProps) {
  // Filter out measurement options ("Measure with Cap", "Measure without Cap") from main cards
  const availableColours = product.colours.filter((c) => !c.isMeasurement);
  const displayColours = availableColours.length > 0 ? availableColours : product.colours;

  const [selectedColour, setSelectedColour] = useState<ProductColourOption>(
    displayColours[0]
  );
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  // Compute active colour index based on horizontal hover scrub position
  const activeColourIndex =
    hoverIndex !== null
      ? Math.max(0, Math.min(hoverIndex, displayColours.length - 1))
      : displayColours.findIndex((c) => c.name === selectedColour.name);

  const displayColour =
    displayColours[activeColourIndex >= 0 ? activeColourIndex : 0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageFrameRef.current || displayColours.length <= 1) return;
    const rect = imageFrameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(0.999, x / rect.width));
    const index = Math.floor(ratio * displayColours.length);
    if (index !== hoverIndex) {
      setHoverIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleSelectColour = (colour: ProductColourOption) => {
    setSelectedColour(colour);
    const idx = displayColours.findIndex((c) => c.name === colour.name);
    if (idx >= 0) setHoverIndex(idx);
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl hairline-card overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        isFeatured ? "ring-2 ring-[#B8963E]/40" : ""
      }`}
    >
      {/* Featured Badge for Item #1 */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-20 fable-mono-caps text-[9px] font-semibold bg-[#102E29] text-[#D4BC72] py-1 px-3 rounded-full shadow-xs">
          ★ Featured Arrival
        </div>
      )}

      {/* Variant Name Hover Badge */}
      <div
        className={`absolute top-3 right-3 z-20 fable-mono-caps text-[9px] font-medium bg-[#102E29]/85 text-[#FDFBF7] backdrop-blur-md py-1 px-2.5 rounded-full transition-opacity duration-200 pointer-events-none ${
          hoverIndex !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {displayColour.name}
      </div>

      {/* Product Image Frame with Horizontal Scrubbing & Sticker Background Blend */}
      <div
        ref={imageFrameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-[4/3] bg-[#FAF8F5] overflow-hidden p-4 flex items-center justify-center cursor-ew-resize select-none group/frame"
        title="Move mouse horizontally to view all pen variants"
      >
        <Image
          src={displayColour.image}
          alt={`${product.name} - ${displayColour.name} handcrafted ebonite fountain pen by RS Writing Instruments`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-2 mix-blend-multiply transition-all duration-300 group-hover/frame:scale-105"
          priority={isFeatured}
          loading={isFeatured ? undefined : "lazy"}
        />

        {/* Horizontal Scrub Indicator Dots/Segments */}
        {displayColours.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-full transition-all duration-200">
            {displayColours.map((col, idx) => (
              <span
                key={col.name + idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === (activeColourIndex >= 0 ? activeColourIndex : 0)
                    ? "w-4 bg-[#B8963E]"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
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

          {/* Colour Swatches (Measurement Specs Excluded on Main Cards) */}
          <ColourSelector
            colours={displayColours}
            selectedColour={displayColour}
            onSelect={handleSelectColour}
          />
        </div>

        {/* WhatsApp Single CTA */}
        <div className="pt-3 border-t border-[#E5DFD5]/50 mt-2">
          <WhatsAppButton
            productName={product.name}
            selectedColour={displayColour.name}
          />
        </div>
      </div>
    </div>
  );
}
