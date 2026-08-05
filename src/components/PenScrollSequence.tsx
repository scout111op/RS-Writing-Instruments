"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PenScrollSequenceProps {
  onStepChange: (step: number) => void;
  onProgress: (progress: number) => void;
  onLoaded: () => void;
}

export default function PenScrollSequence({ onStepChange, onProgress, onLoaded }: PenScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Animation state refs for frame lerp
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  
  const [isPreloaded, setIsPreloaded] = useState(false);

  // 1. Preload 241 high-resolution frames with progress updates
  useEffect(() => {
    const totalFrames = 241;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      const frameStr = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameStr}.png`;
      img.onload = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        onProgress(pct);
        if (loadedCount === totalFrames) {
          setIsPreloaded(true);
          onLoaded();
        }
      };
      img.onerror = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        onProgress(pct);
        if (loadedCount === totalFrames) {
          setIsPreloaded(true);
          onLoaded();
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, [onProgress, onLoaded]);

  // 2. Setup Canvas, Frame Interpolation Engine & GSAP ScrollTriggers
  useEffect(() => {
    if (!isPreloaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let lastDrawnFrame = -1;

    // Draw Frame with Contain Fit Ratio
    const drawFrame = (index: number) => {
      const roundedIndex = Math.min(240, Math.max(0, Math.round(index)));
      if (roundedIndex === lastDrawnFrame) return; // avoid redundant canvas draws
      lastDrawnFrame = roundedIndex;

      const img = imagesRef.current[roundedIndex];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let x = 0;
        let y = 0;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.height * imgRatio;
          x = (canvas.width - drawWidth) / 2;
        } else {
          drawHeight = canvas.width / imgRatio;
          y = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      }
    };

    // Resize Handler for crisp High-DPI screens
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR at 2 for performance
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Continuous Lerp Loop via requestAnimationFrame
    const updateLoop = () => {
      // Lerp (Linear Interpolation) factor 0.08 for liquid-smooth frame progression
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.08;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      drawFrame(currentFrameRef.current);
      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    rafIdRef.current = requestAnimationFrame(updateLoop);

    // GSAP ScrollTrigger bound to Hero Section
    const scrollObj = { frame: 0 };
    const frameTrigger = gsap.to(scrollObj, {
      frame: 240,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2, // Smooth inertia scrub
        onUpdate: (self) => {
          targetFrameRef.current = scrollObj.frame;

          const p = self.progress;
          if (p < 0.25) {
            onStepChange(0);
          } else if (p < 0.5) {
            onStepChange(1);
          } else if (p < 0.75) {
            onStepChange(2);
          } else {
            onStepChange(3);
          }
        }
      }
    });

    // Gentle Parallax Background Float Motion
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: 35,
        rotation: 1.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      frameTrigger.scrollTrigger?.kill();
      frameTrigger.kill();
    };
  }, [isPreloaded, onStepChange]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center rounded-2xl overflow-hidden pointer-events-none z-0"
      style={{
        background: 'transparent',
        transform: 'translate3d(0,0,0)',
        willChange: 'transform',
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-contain transition-opacity duration-700"
        style={{ display: isPreloaded ? 'block' : 'none' }}
      />
    </div>
  );
}
