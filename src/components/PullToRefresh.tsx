"use client";

import { useEffect, useState, useRef } from "react";
import { HiRefresh } from "react-icons/hi";

export default function PullToRefresh() {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startYRef = useRef(0);
  const isPullingRef = useRef(false);

  const THRESHOLD = 65; // Pull threshold in px to trigger refresh

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleTouchStart = (e: TouchEvent) => {
      // Only initiate pull-down refresh when scrolled to top
      if (window.scrollY <= 5) {
        startYRef.current = e.touches[0].clientY;
        isPullingRef.current = true;
      } else {
        isPullingRef.current = false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPullingRef.current || isRefreshing) return;

      const currentY = e.touches[0].clientY;
      const distance = currentY - startYRef.current;

      if (distance > 0 && window.scrollY <= 5) {
        // Logarithmic resistance curve for smooth touch feel
        const pull = Math.min(Math.pow(distance, 0.85) * 2.2, 90);
        setPullDistance(pull);
      } else {
        setPullDistance(0);
      }
    };

    const handleTouchEnd = () => {
      if (!isPullingRef.current || isRefreshing) return;

      if (pullDistance >= THRESHOLD) {
        setIsRefreshing(true);
        setPullDistance(THRESHOLD);
        setTimeout(() => {
          window.location.reload();
        }, 250);
      } else {
        setPullDistance(0);
      }

      isPullingRef.current = false;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pullDistance, isRefreshing]);

  if (pullDistance <= 0 && !isRefreshing) return null;

  return (
    <div
      className="fixed top-2 left-0 right-0 z-[200] flex justify-center pointer-events-none transition-all duration-75"
      style={{
        transform: `translateY(${Math.min(pullDistance, 70)}px)`,
        opacity: Math.min(pullDistance / 35, 1),
      }}
    >
      <div className="bg-[#102E29] text-[#FDFBF7] border border-[#B8963E]/50 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-semibold backdrop-blur-md">
        <HiRefresh
          className={`text-[#B8963E] ${isRefreshing || pullDistance >= THRESHOLD ? "animate-spin" : ""}`}
          size={16}
          style={{ transform: `rotate(${pullDistance * 4}deg)` }}
        />
        <span>
          {isRefreshing
            ? "Refreshing page..."
            : pullDistance >= THRESHOLD
            ? "Release to refresh"
            : "Pull down to refresh"}
        </span>
      </div>
    </div>
  );
}
