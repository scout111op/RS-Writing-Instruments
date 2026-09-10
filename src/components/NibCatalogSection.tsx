"use client";

import { useState } from "react";
import NibCard from "@/components/NibCard";
import { bockNibs, jowoNibs, NibFamily } from "@/lib/nibs";
import { FaCheckCircle, FaTools, FaLayerGroup } from "react-icons/fa";

export default function NibCatalogSection() {
  const [filterFamily, setFilterFamily] = useState<'all' | NibFamily>('all');

  const scrollToFamily = (family: 'all' | NibFamily) => {
    setFilterFamily(family);
    if (family !== 'all') {
      const element = document.getElementById(`section-${family}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      {/* ── FILTER & QUICK-NAVIGATION TABS ───────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5DFD5]">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B8963E] block mb-1">
            Independent Nib Collection
          </span>
          <p className="text-xs text-[#6B6558]">
            Sold separately from pens • Tuned for hand-cut ebonite feeds • Choice of 6 point sizes
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToFamily('all')}
            className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              filterFamily === 'all'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white border border-[#E5DFD5] text-[#6B6558] hover:text-[#102E29]'
            }`}
          >
            All Nibs (6)
          </button>
          <button
            type="button"
            onClick={() => scrollToFamily('bock')}
            className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              filterFamily === 'bock'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white border border-[#E5DFD5] text-[#6B6558] hover:text-[#102E29]'
            }`}
          >
            Bock #6 Type 250 series (3)
          </button>
          <button
            type="button"
            onClick={() => scrollToFamily('jowo')}
            className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              filterFamily === 'jowo'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white border border-[#E5DFD5] text-[#6B6558] hover:text-[#102E29]'
            }`}
          >
            Jowo #6 Type 250 series (3)
          </button>
        </div>
      </div>

      {/* ── BOCK #6 TYPE 250 SERIES NIBS FAMILY ──────────────────── */}
      {(filterFamily === 'all' || filterFamily === 'bock') && (
        <div id="section-bock" className="pt-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5DFD5]/70">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B8963E]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#B8963E] font-bold">
                  Bock #6 Type 250 series
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#102E29] tracking-tight">
                Bock #6 Type 250 series <span className="italic text-[#B8963E]">Fountain Pen Nibs</span>
              </h2>
              <p className="text-xs md:text-sm text-[#6B6558] mt-2 max-w-2xl">
                Triple-inspected #6 fountain pen nibs precision-formed to match standard Bock #6 Type 250 series feed profiles. Featuring dual-view inspection on every card (front face &amp; reverse feed curvature channel).
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3 text-xs text-[#6B6558]">
              <span className="flex items-center gap-1.5 bg-white border border-[#E5DFD5] px-3 py-1.5 rounded-lg">
                <FaCheckCircle className="text-[#25D366]" size={13} /> Dual-View Inspection
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-[#E5DFD5] px-3 py-1.5 rounded-lg">
                <FaTools className="text-[#B8963E]" size={13} /> 6 Point Options
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {bockNibs.map((nib, index) => (
              <NibCard key={nib.id} nib={nib} priority={index === 0} />
            ))}
          </div>
        </div>
      )}

      {/* ── JOWO #6 TYPE 250 SERIES NIBS FAMILY ──────────────────── */}
      {(filterFamily === 'all' || filterFamily === 'jowo') && (
        <div id="section-jowo" className="pt-16 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#E5DFD5]/70">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B8963E]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#B8963E] font-bold">
                  Jowo #6 Type 250 series
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#102E29] tracking-tight">
                Jowo #6 Type 250 series <span className="italic text-[#B8963E]">Fountain Pen Nibs</span>
              </h2>
              <p className="text-xs md:text-sm text-[#6B6558] mt-2 max-w-2xl">
                Engineered for universal Jowo #6 Type 250 series threaded collars and custom lathe-turned fountain pens. Precision slit capillary gap delivers reliable ink flow with zero skipping.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3 text-xs text-[#6B6558]">
              <span className="flex items-center gap-1.5 bg-white border border-[#E5DFD5] px-3 py-1.5 rounded-lg">
                <FaCheckCircle className="text-[#25D366]" size={13} /> German Profile
              </span>
              <span className="flex items-center gap-1.5 bg-white border border-[#E5DFD5] px-3 py-1.5 rounded-lg">
                <FaLayerGroup className="text-[#B8963E]" size={13} /> EEF to Double Broad
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {jowoNibs.map((nib) => (
              <NibCard key={nib.id} nib={nib} />
            ))}
          </div>
        </div>
      )}

      {/* ── ATELIER CRAFTSMANSHIP & PAIRING GUIDE ─────────────────── */}
      <div className="mt-20 p-8 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8963E] font-bold">
            Bespoke Atelier Advisory
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#102E29]">
            Pairing Precision Nibs with <span className="italic text-[#B8963E]">Hand-Cut Ebonite Feeds</span>
          </h3>
          <p className="text-xs md:text-sm text-[#6B6558] leading-relaxed">
            While mass-produced pens rely on standard plastic injection feeds that can starve high-performance broad or flex nibs, our Bock and Jowo compatible nibs achieve their truest potential when paired with RS Writing Instruments hand-cut vulcanised ebonite feeds. Ebonite’s natural capillary wettability ensures wet, instant starts across every point size from Extra Extra Fine (EEF) to expressive Double Broad.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a 
              href="/feeds" 
              className="text-[#102E29] underline hover:text-[#B8963E] transition-colors"
            >
              Browse Ebonite Feeds Collection →
            </a>
            <span className="text-[#D1C9BE]">•</span>
            <a 
              href="/wholesale" 
              className="text-[#102E29] underline hover:text-[#B8963E] transition-colors"
            >
              B2B Wholesale &amp; Bulk Nib Pack Enquiries →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
