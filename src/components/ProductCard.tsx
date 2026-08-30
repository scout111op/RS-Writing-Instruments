"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CatalogProduct, ProductColourOption } from "@/lib/catalogProducts";
import ColourSelector from "@/components/ColourSelector";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HiOutlineHand, HiZoomIn } from "react-icons/hi";
import { useProductZoom } from "@/context/ProductZoomContext";

interface ProductCardProps {
  product: CatalogProduct;
  isFeatured?: boolean;
  showMeasurements?: boolean;
}

export default function ProductCard({
  product,
  isFeatured = false,
  showMeasurements = false,
}: ProductCardProps) {
  // Show measurement options ("Measure with Cap", "Measure without Cap") ONLY when showMeasurements is explicitly true (for Pens Catalogue)
  const availableColours = showMeasurements
    ? product.colours
    : product.colours.filter((c) => !c.isMeasurement);
  const displayColours = availableColours.length > 0 ? availableColours : product.colours;

  const [selectedColour, setSelectedColour] = useState<ProductColourOption>(
    displayColours[0]
  );
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Compute active colour index based on hover position or touch selection
  const activeColourIndex =
    hoverIndex !== null
      ? Math.max(0, Math.min(hoverIndex, displayColours.length - 1))
      : displayColours.findIndex((c) => c.name === selectedColour.name);

  const displayColour =
    displayColours[activeColourIndex >= 0 ? activeColourIndex : 0];

  const tickingRef = useRef(false);

  // Desktop Hover Scrubbing
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageFrameRef.current || displayColours.length <= 1) return;
    const clientX = e.clientX;
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        if (!imageFrameRef.current) return;
        const rect = imageFrameRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const ratio = Math.max(0, Math.min(0.999, x / rect.width));
        const index = Math.floor(ratio * displayColours.length);
        if (index !== hoverIndex) {
          setHoverIndex(index);
        }
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  // Touch Swipe Gesture Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 25; // minimum distance in px to trigger swipe

    if (diffX > minSwipeDistance) {
      // Swiped Left -> Next variant
      const nextIdx = (activeColourIndex + 1) % displayColours.length;
      handleSelectColour(displayColours[nextIdx]);
    } else if (diffX < -minSwipeDistance) {
      // Swiped Right -> Previous variant
      const prevIdx =
        (activeColourIndex - 1 + displayColours.length) % displayColours.length;
      handleSelectColour(displayColours[prevIdx]);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleSelectColour = (colour: ProductColourOption) => {
    setSelectedColour(colour);
    const idx = displayColours.findIndex((c) => c.name === colour.name);
    if (idx >= 0) setHoverIndex(idx);
  };

  const { openZoom } = useProductZoom();

  const handleOpenZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    openZoom({
      src: displayColour.image,
      alt: `${product.name} - ${displayColour.name}`,
      title: product.name,
      subtitle: `${displayColour.name} • ${product.tagline}`,
    });
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl hairline-card overflow-hidden transition-all duration-300 flex flex-col justify-between gpu-accelerated ${
        isFeatured ? "ring-2 ring-[#B8963E]/50 shadow-md" : "shadow-xs hover:shadow-md"
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-20 fable-mono-caps text-[9px] font-semibold bg-[#102E29] text-[#D4BC72] py-1 px-3 rounded-full shadow-xs">
          ★ Featured Arrival
        </div>
      )}

      {/* Touch Swipe Mobile Hint Badge */}
      {displayColours.length > 1 && (
        <div className="md:hidden absolute top-3 left-3 z-20 fable-mono-caps text-[9px] font-medium bg-[#102E29]/80 text-[#FDFBF7] backdrop-blur-md py-1 px-2.5 rounded-full flex items-center gap-1 pointer-events-none">
          <HiOutlineHand size={11} className="text-[#D4BC72] animate-bounce" /> Swipe variants
        </div>
      )}

      {/* Variant Name Hover Badge */}
      <div
        className={`absolute top-3 right-12 z-20 fable-mono-caps text-[9px] font-medium bg-[#102E29]/85 text-[#FDFBF7] backdrop-blur-md py-1 px-2.5 rounded-full transition-opacity duration-200 pointer-events-none ${
          hoverIndex !== null ? "opacity-100" : "opacity-90 md:opacity-0"
        }`}
      >
        {displayColour.name}
      </div>

      {/* Interactive Zoom Trigger Button */}
      <button
        type="button"
        onClick={handleOpenZoom}
        className="absolute top-3 right-3 z-20 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white text-[#102E29] hover:text-[#B8963E] shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer border border-[#E5DFD5]/70"
        title="Tap to zoom in and examine product details"
        aria-label={`Zoom in on ${product.name}`}
      >
        <HiZoomIn size={16} />
      </button>

      {/* Product Image Frame with Touch Swipe & Desktop Hover Scrubbing */}
      <div
        ref={imageFrameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleOpenZoom}
        className="relative w-full aspect-[4/3] bg-[#FAF8F5] overflow-hidden p-3 sm:p-4 flex items-center justify-center cursor-pointer select-none touch-pan-y group/frame"
        title="Tap to zoom picture in full detail • Or swipe horizontally for variants"
      >
        <Image
          src={displayColour.image}
          alt={`${product.name} - ${displayColour.name} handcrafted ebonite fountain pen by RS Writing Instruments`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
          className="object-contain p-2 mix-blend-multiply transition-all duration-300 group-hover/frame:scale-105"
          priority={isFeatured}
          quality={75}
        />

        {/* Quick Tap-To-Zoom Hover Hint Badge */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="py-1.5 px-3.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#FDFBF7]/95 text-[#102E29] shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
            <HiZoomIn size={13} className="text-[#B8963E]" /> Tap to Zoom
          </span>
        </div>

        {/* Horizontal Swipe Indicator Dots */}
        {displayColours.length > 1 && (
          <div 
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/35 backdrop-blur-md rounded-full transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {displayColours.map((col, idx) => (
              <button
                key={col.name + idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectColour(col);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                  idx === (activeColourIndex >= 0 ? activeColourIndex : 0)
                    ? "w-4 bg-[#B8963E]"
                    : "w-1.5 bg-white/60"
                }`}
                aria-label={`Select ${col.name} variant`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info & Controls */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="fable-mono-caps text-[9px] text-[#B8963E] font-medium block mb-1">
            {product.model}
          </span>
          <h3 className="font-serif text-lg md:text-xl font-normal text-[#102E29] leading-snug tracking-tight mb-1">
            {product.name}
          </h3>
          <p className="font-sans text-xs text-[#6B6558] line-clamp-2 leading-relaxed mb-3 font-normal">
            {product.tagline}
          </p>

          {/* Colour Swatches */}
          <ColourSelector
            colours={displayColours}
            selectedColour={displayColour}
            onSelect={handleSelectColour}
          />
        </div>

        {/* WhatsApp Single CTA */}
        <div className="pt-3 border-t border-[#E5DFD5]/50 mt-3">
          <WhatsAppButton
            productName={product.name}
            selectedColour={displayColour.name}
          />
        </div>
      </div>
    </div>
  );
}
