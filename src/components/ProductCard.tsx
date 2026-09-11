"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CatalogProduct, ProductColourOption } from "@/lib/catalogProducts";
import { rawProducts } from "@/lib/products";
import ColourSelector from "@/components/ColourSelector";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HiOutlineHand, HiZoomIn, HiChevronDown } from "react-icons/hi";
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
  const [selectedFeed, setSelectedFeed] = useState<string>("Standard Ebonite Feed");
  const [selectedNib, setSelectedNib] = useState<string>("Jowo - F");
  const [selectedNibColor, setSelectedNibColor] = useState<string>("GOLD");
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
      suppressHydrationWarning
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

          {/* Customization Options Panel */}
          <div className="mt-4 pt-3 border-t border-[#E5DFD5]/60">
            <div className="flex items-center justify-between mb-2.5">
              <span className="fable-mono-caps text-[9px] font-bold text-[#102E29] tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8963E]" />
                Customization Options
              </span>
            </div>

            <div className="space-y-2.5">
              {/* 1. Ebonite Feed */}
              <div>
                <label
                  htmlFor={`feed-select-${product.id}`}
                  className="block fable-mono-caps text-[9px] font-medium text-[#6B6558] mb-1"
                >
                  Ebonite Feed
                </label>
                <div className="relative">
                  <select
                    id={`feed-select-${product.id}`}
                    value={selectedFeed}
                    onChange={(e) => setSelectedFeed(e.target.value)}
                    className="w-full appearance-none bg-[#FAF8F5] hover:bg-white text-[#102E29] border border-[#E5DFD5] hover:border-[#B8963E]/60 focus:border-[#B8963E] focus:bg-white rounded-lg px-2.5 py-1.5 pr-7 text-xs font-medium transition-all duration-200 outline-none cursor-pointer"
                  >
                    <option value="Standard Ebonite Feed">Standard Ebonite Feed (Default)</option>
                    <optgroup label="Atelier Hand-Cut Ebonite Feeds">
                      {rawProducts.map((feed) => (
                        <option key={feed.id} value={feed.name}>
                          {feed.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Other Options">
                      <option value="No">No (Without Feed)</option>
                    </optgroup>
                  </select>
                  <HiChevronDown
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C9588] pointer-events-none"
                    size={14}
                  />
                </div>
              </div>

              {/* 2. Nib Compatibility & Size */}
              <div>
                <label
                  htmlFor={`nib-select-${product.id}`}
                  className="block fable-mono-caps text-[9px] font-medium text-[#6B6558] mb-1"
                >
                  Nib Compatibility &amp; Size
                </label>
                <div className="relative">
                  <select
                    id={`nib-select-${product.id}`}
                    value={selectedNib}
                    onChange={(e) => setSelectedNib(e.target.value)}
                    className="w-full appearance-none bg-[#FAF8F5] hover:bg-white text-[#102E29] border border-[#E5DFD5] hover:border-[#B8963E]/60 focus:border-[#B8963E] focus:bg-white rounded-lg px-2.5 py-1.5 pr-7 text-xs font-medium transition-all duration-200 outline-none cursor-pointer"
                  >
                    <optgroup label="Jowo Housing Compatibility">
                      <option value="Jowo - EEF">Jowo - EEF</option>
                      <option value="Jowo - EF">Jowo - EF</option>
                      <option value="Jowo - F">Jowo - F</option>
                      <option value="Jowo - M">Jowo - M</option>
                      <option value="Jowo - B">Jowo - B</option>
                      <option value="Jowo - DB">Jowo - DB</option>
                    </optgroup>
                    <optgroup label="Bock Housing Compatibility">
                      <option value="Bock - EEF">Bock - EEF</option>
                      <option value="Bock - EF">Bock - EF</option>
                      <option value="Bock - F">Bock - F</option>
                      <option value="Bock - M">Bock - M</option>
                      <option value="Bock - B">Bock - B</option>
                      <option value="Bock - DB">Bock - DB</option>
                    </optgroup>
                  </select>
                  <HiChevronDown
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C9588] pointer-events-none"
                    size={14}
                  />
                </div>
              </div>

              {/* 3. Nib Color */}
              <div>
                <label
                  htmlFor={`nib-color-select-${product.id}`}
                  className="block fable-mono-caps text-[9px] font-medium text-[#6B6558] mb-1"
                >
                  Nib Color
                </label>
                <div className="relative">
                  <select
                    id={`nib-color-select-${product.id}`}
                    value={selectedNibColor}
                    onChange={(e) => setSelectedNibColor(e.target.value)}
                    className="w-full appearance-none bg-[#FAF8F5] hover:bg-white text-[#102E29] border border-[#E5DFD5] hover:border-[#B8963E]/60 focus:border-[#B8963E] focus:bg-white rounded-lg px-2.5 py-1.5 pr-7 text-xs font-medium transition-all duration-200 outline-none cursor-pointer"
                  >
                    <option value="GOLD">GOLD</option>
                    <option value="ROSE GOLD">ROSE GOLD</option>
                    <option value="STEALTH BLACK">STEALTH BLACK</option>
                  </select>
                  <HiChevronDown
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9C9588] pointer-events-none"
                    size={14}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Dynamic CTA */}
        <div className="pt-3 border-t border-[#E5DFD5]/50 mt-3">
          <WhatsAppButton
            productName={product.name}
            selectedColour={displayColour.name}
            selectedFeed={selectedFeed}
            selectedNib={selectedNib}
            selectedNibColor={selectedNibColor}
          />
        </div>
      </div>
    </div>
  );
}
