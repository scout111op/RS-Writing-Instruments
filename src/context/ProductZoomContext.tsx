"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiZoomIn, HiZoomOut, HiX, HiRefresh } from "react-icons/hi";
import { FaWhatsapp, FaSearchPlus, FaSearchMinus, FaExpand } from "react-icons/fa";

export interface ZoomImagePayload {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  price?: string;
}

interface ProductZoomContextType {
  openZoom: (payload: ZoomImagePayload) => void;
  closeZoom: () => void;
  isOpen: boolean;
}

const ProductZoomContext = createContext<ProductZoomContextType | undefined>(undefined);

export function ProductZoomProvider({ children }: { children: React.ReactNode }) {
  const [currentImage, setCurrentImage] = useState<ZoomImagePayload | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Touch pinch tracking
  const initialDistanceRef = useRef<number | null>(null);
  const initialScaleRef = useRef<number>(1);

  const openZoom = useCallback((payload: ZoomImagePayload) => {
    setCurrentImage(payload);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const closeZoom = useCallback(() => {
    setCurrentImage(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(4.0, Number((prev + 0.35).toFixed(2))));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(1.0, Number((prev - 0.35).toFixed(2)));
      if (next === 1.0) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const toggleZoom = useCallback((e?: React.MouseEvent) => {
    setScale((prev) => {
      if (prev > 1.2) {
        setPosition({ x: 0, y: 0 });
        return 1.0;
      } else {
        return 2.5;
      }
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!currentImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeZoom();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "-") {
        e.preventDefault();
        zoomOut();
      } else if (e.key === "0") {
        e.preventDefault();
        resetZoom();
      } else if (scale > 1) {
        const step = 40;
        if (e.key === "ArrowLeft") setPosition((p) => ({ ...p, x: p.x + step }));
        if (e.key === "ArrowRight") setPosition((p) => ({ ...p, x: p.x - step }));
        if (e.key === "ArrowUp") setPosition((p) => ({ ...p, y: p.y + step }));
        if (e.key === "ArrowDown") setPosition((p) => ({ ...p, y: p.y - step }));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage, scale, zoomIn, zoomOut, resetZoom, closeZoom]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      // scroll up -> zoom in
      zoomIn();
    } else {
      // scroll down -> zoom out
      zoomOut();
    }
  };

  // Mouse Drag to Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile pinch-to-zoom & pan
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch gesture start
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialDistanceRef.current = dist;
      initialScaleRef.current = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      // Pan gesture start
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistanceRef.current !== null) {
      // Pinch zoom in action
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / initialDistanceRef.current;
      const newScale = Math.min(4.0, Math.max(1.0, Number((initialScaleRef.current * ratio).toFixed(2))));
      setScale(newScale);
      if (newScale === 1.0) setPosition({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      // Pan move in action
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    initialDistanceRef.current = null;
    setIsDragging(false);
  };

  const whatsappInquiryUrl = currentImage
    ? `https://wa.me/919455664795?text=${encodeURIComponent(
        `Hello RS Writing Instruments, I am inspecting "${currentImage.title || "Product"}" ${
          currentImage.subtitle ? `(${currentImage.subtitle})` : ""
        } and would like to ask a question.`
      )}`
    : "";

  return (
    <ProductZoomContext.Provider value={{ openZoom, closeZoom, isOpen: !!currentImage }}>
      {children}

      {/* Full-Screen Zoom Lightbox Modal */}
      {currentImage && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/92 backdrop-blur-xl animate-fade-in select-none text-white overflow-hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeZoom();
          }}
          onWheel={handleWheel}
        >
          {/* Top Control Bar */}
          <div className="w-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 bg-gradient-to-b from-black/80 to-transparent z-50">
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4BC72]">
                High-Resolution Product Zoom
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold truncate text-[#FDFBF7]">
                {currentImage.title || "Product Detail"}
              </h3>
              {currentImage.subtitle && (
                <p className="text-xs text-stone-400 truncate">
                  {currentImage.subtitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Reset Zoom Button */}
              <button
                type="button"
                onClick={resetZoom}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono transition-colors"
                title="Reset zoom to 100%"
                aria-label="Reset zoom"
              >
                <HiRefresh size={14} />
                <span className="hidden sm:inline">Reset</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeZoom}
                className="p-2 sm:p-2.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title="Close Zoom (Esc)"
                aria-label="Close modal"
              >
                <HiX size={22} />
              </button>
            </div>
          </div>

          {/* Interactive Zoomable Viewport */}
          <div
            className={`relative flex-1 w-full h-full flex items-center justify-center overflow-hidden ${
              scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={toggleZoom}
          >
            <div
              className="relative w-[88vw] max-w-4xl h-[65vh] transition-transform duration-100 ease-out"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                transformOrigin: "center center",
              }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt || currentImage.title || "Product Image"}
                fill
                priority
                sizes="100vw"
                className="object-contain pointer-events-none drop-shadow-2xl"
                quality={95}
              />
            </div>

            {/* Gesture Hint overlay on 1x */}
            {scale === 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-sans text-stone-300 pointer-events-none flex items-center gap-2">
                <span>Double tap or scroll to zoom in</span>
                <span>•</span>
                <span>Pinch to zoom</span>
              </div>
            )}
          </div>

          {/* Bottom Floating Control Bar */}
          <div className="w-full px-4 sm:px-8 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col sm:flex-row items-center justify-between gap-3 z-50">
            {/* Direct WhatsApp CTA */}
            {whatsappInquiryUrl && (
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs font-bold transition-all shadow-md order-2 sm:order-1"
              >
                <FaWhatsapp size={16} />
                <span>Inquire About This Variant</span>
              </a>
            )}

            {/* Floating Zoom Buttons Dock */}
            <div className="flex items-center gap-2 bg-stone-900/90 border border-stone-700/60 p-1.5 rounded-full shadow-2xl backdrop-blur-lg order-1 sm:order-2">
              {/* Zoom Out Button */}
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= 1.0}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-colors text-white"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <FaSearchMinus size={14} />
              </button>

              {/* Percentage Indicator */}
              <span className="px-3 text-xs font-mono font-semibold min-w-[56px] text-center text-[#D4BC72]">
                {Math.round(scale * 100)}%
              </span>

              {/* Zoom In Button */}
              <button
                type="button"
                onClick={zoomIn}
                disabled={scale >= 4.0}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-colors text-white"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <FaSearchPlus size={14} />
              </button>

              {/* Toggle Fit/2.5x */}
              <button
                type="button"
                onClick={() => toggleZoom()}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                title={scale > 1.2 ? "Fit to Screen" : "Zoom to 250%"}
                aria-label="Toggle Fit"
              >
                <FaExpand size={12} />
              </button>
            </div>
          </div>
        </div>
      )}
    </ProductZoomContext.Provider>
  );
}

export function useProductZoom() {
  const context = useContext(ProductZoomContext);
  if (!context) {
    throw new Error("useProductZoom must be used within a ProductZoomProvider");
  }
  return context;
}
