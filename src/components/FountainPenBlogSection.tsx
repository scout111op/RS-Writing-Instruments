"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaFeatherAlt, 
  FaTint, 
  FaShieldAlt, 
  FaQuestionCircle, 
  FaChevronDown, 
  FaTools,
  FaWhatsapp,
  FaBookOpen
} from 'react-icons/fa';
import { HiSparkles, HiOutlineLightBulb, HiArrowRight } from 'react-icons/hi';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FaqItem[] = [
  {
    category: "Refill & Inks",
    question: "How do I refill my fountain pen using a piston converter or eyedropper?",
    answer: "For a converter, submerge the nib and grip section into the ink bottle, twist the piston end clockwise to draw ink upwards, and wipe the nib with a soft lint-free cloth. For eyedropper filling, apply 100% pure silicone grease to the section threads, fill the solid ebonite barrel 80% full with an eyedropper, and screw tightly for a massive 3.2ml ink capacity."
  },
  {
    category: "Care & Storage",
    question: "How should I store my fountain pen when not in use?",
    answer: "Store your fountain pen horizontally in a pen pouch or pen tray for daily use, or nib-upwards when carrying it in a bag or shirt pocket. Never store a inked fountain pen nib-down, as gravity and temperature fluctuations can cause ink to pool in the cap. If not using for more than 2 weeks, always flush the pen clean with cool water."
  },
  {
    category: "Ebonite Feeds",
    question: "Why are hand-cut ebonite feeds better than modern plastic feeds?",
    answer: "Ebonite (vulcanized hard rubber) is naturally hydrophilic, meaning water-based inks adhere to its microscopic pores effortlessly. Unlike modern plastic feeds which are hydrophobic and rely on chemical surfactants, ebonite feeds maintain consistent capillary ink tension, completely eliminating hard starts, skips, and railroading even on rapid strokes."
  },
  {
    category: "Maintenance",
    question: "How do I fix a dry flow or scratchy fountain pen nib?",
    answer: "A dry or scratchy write is usually caused by slight tine misalignment or an air gap between the nib underside and feed. Because ebonite is thermally responsive, you can heat-set the feed: submerge the nib and feed tip in warm water (80°C–85°C) for 15 seconds, then gently pinch the nib and feed together for 20 seconds as it cools to establish perfect ink contact."
  },
  {
    category: "Inks & Compatibility",
    question: "Can I use calligraphy dipping ink or drawing ink in my fountain pen?",
    answer: "No. Never use dip-pen calligraphy ink, shellac-based drawing ink, or standard India ink in a fountain pen. These inks contain binders and gum arabic that permanently clog capillary channels. Use only fountain pen inks formulated with water-soluble dyes or micro-pigments."
  },
  {
    category: "Nib Selection",
    question: "Which nib size should I choose for daily writing?",
    answer: "Fine (F - 0.5mm) is ideal for compact handwriting, notes, and everyday office papers. Medium (M - 0.7mm) delivers the smoothest gliding feel and brings out ink shading and sheen. Broad (B - 1.0mm) or Double Broad feeds are perfect for signatures, headings, and expressive calligraphy."
  }
];

export default function FountainPenBlogSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'refill' | 'care' | 'ebonite' | 'faq'>('refill');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappInquiryUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Hello RS Writing Instruments, I was reading your fountain pen guide and would like advice on pen care, feed tuning, or custom orders."
  )}`;

  return (
    <section id="fountain-pen-guides" className="py-16 md:py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8963E]/10 border border-[#B8963E]/30 text-[#B8963E] text-xs font-mono tracking-widest uppercase">
            <FaBookOpen size={12} />
            <span>Master Nibsmith Knowledge Base</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#102E29] tracking-tight">
            Fountain Pen <span className="italic text-[#B8963E]">Master Guides &amp; FAQs</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#6B6558] leading-relaxed">
            Essential care instructions, ink refilling techniques, ebonite feed science, and expert troubleshooting answers compiled by master pen artisans.
          </p>
        </div>

        {/* Interactive Guide Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('refill')}
            className={`fable-pill-btn px-5 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'refill'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white text-[#6B6558] border border-[#E5DFD5] hover:bg-[#FDFBF7]'
            }`}
          >
            <FaTint className={activeTab === 'refill' ? 'text-[#25D366]' : 'text-[#B8963E]'} />
            <span>How to Refill</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('care')}
            className={`fable-pill-btn px-5 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'care'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white text-[#6B6558] border border-[#E5DFD5] hover:bg-[#FDFBF7]'
            }`}
          >
            <FaShieldAlt className={activeTab === 'care' ? 'text-[#D4BC72]' : 'text-[#B8963E]'} />
            <span>Storage &amp; Maintenance</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ebonite')}
            className={`fable-pill-btn px-5 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'ebonite'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white text-[#6B6558] border border-[#E5DFD5] hover:bg-[#FDFBF7]'
            }`}
          >
            <FaFeatherAlt className={activeTab === 'ebonite' ? 'text-[#D4BC72]' : 'text-[#B8963E]'} />
            <span>Ebonite Feed Science</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('faq')}
            className={`fable-pill-btn px-5 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-[#102E29] text-[#FDFBF7] shadow-sm'
                : 'bg-white text-[#6B6558] border border-[#E5DFD5] hover:bg-[#FDFBF7]'
            }`}
          >
            <FaQuestionCircle className={activeTab === 'faq' ? 'text-[#25D366]' : 'text-[#B8963E]'} />
            <span>Top Search FAQs</span>
          </button>
        </div>

        {/* Tab 1: How to Refill Guide */}
        {activeTab === 'refill' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {/* Step 1 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-[#102E29] text-[#FDFBF7] font-serif font-bold text-center leading-8 text-sm">
                  1
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102E29]">Piston Converter Method</h3>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  Submerge the nib and feed past the breather hole into the ink bottle. Turn the converter knob counter-clockwise to expel air, then twist clockwise to draw ink upwards. Gently wipe the nib top with a clean tissue.
                </p>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl text-[11px] text-[#102E29] font-medium border border-[#E5DFD5]/60 flex items-center gap-2">
                <HiOutlineLightBulb className="text-[#B8963E] shrink-0" size={16} />
                <span>Tip: Prime feed with 2 drops for instant flow.</span>
              </div>
            </article>

            {/* Step 2 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-[#102E29] text-[#FDFBF7] font-serif font-bold text-center leading-8 text-sm">
                  2
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102E29]">Standard Cartridge</h3>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  Unscrew the barrel from the section. Push the narrow end of an international standard ink cartridge straight into the grip section until the seal punctures. Let the pen sit nib-down for 60 seconds to saturate the ebonite feed.
                </p>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl text-[11px] text-[#102E29] font-medium border border-[#E5DFD5]/60 flex items-center gap-2">
                <HiOutlineLightBulb className="text-[#B8963E] shrink-0" size={16} />
                <span>Convenient for travel &amp; mess-free refills.</span>
              </div>
            </article>

            {/* Step 3 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="inline-block w-8 h-8 rounded-full bg-[#102E29] text-[#FDFBF7] font-serif font-bold text-center leading-8 text-sm">
                  3
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102E29]">Eyedropper Conversion</h3>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  For maximum writing longevity, apply a thin coat of 100% pure silicone grease to the section threads. Use a pipette to fill the ebonite barrel 80% full (3.2ml capacity) and screw the section firmly into place.
                </p>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl text-[11px] text-[#102E29] font-medium border border-[#E5DFD5]/60 flex items-center gap-2">
                <HiOutlineLightBulb className="text-[#B8963E] shrink-0" size={16} />
                <span>Provides 4x longer writing capacity than cartridges.</span>
              </div>
            </article>
          </div>
        )}

        {/* Tab 2: Storage & Care Guide */}
        {activeTab === 'care' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#B8963E]/10 flex items-center justify-center text-[#B8963E]">
                <FaShieldAlt size={18} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#102E29]">Daily Storage Orientation</h3>
              <p className="text-xs text-[#6B6558] leading-relaxed">
                Always store your inked fountain pen horizontally in a pen pouch or with the nib pointing slightly upwards. Storing nib-down in a bag can lead to ink seepage inside the cap during thermal air pressure changes.
              </p>
            </article>

            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#B8963E]/10 flex items-center justify-center text-[#B8963E]">
                <FaTint size={18} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#102E29]">Flushing &amp; Cleaning Cycle</h3>
              <p className="text-xs text-[#6B6558] leading-relaxed">
                Flush your pen with room-temperature tap or distilled water every 4 to 6 weeks, or whenever switching ink colors. Draw water in and out through the converter until the expelled water runs crystal clear.
              </p>
            </article>

            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5DFD5] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#B8963E]/10 flex items-center justify-center text-[#B8963E]">
                <FaTools size={18} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#102E29]">Protecting Hard Rubber (Ebonite)</h3>
              <p className="text-xs text-[#6B6558] leading-relaxed">
                Ebonite is natural vulcanized hard rubber. Never expose it to boiling water, alcohol, or harsh chemical solvents. Avoid leaving ebonite pens in direct sunlight on vehicle dashboards to preserve the deep rich polish.
              </p>
            </article>
          </div>
        )}

        {/* Tab 3: Ebonite Feed Science */}
        {activeTab === 'ebonite' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E5DFD5] shadow-xs space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="fable-mono-caps text-[#B8963E] block font-medium">
                  NATURAL HYDROPHILIC MECHANICS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102E29]">
                  Why Ebonite Feeds Eliminate Hard Starts &amp; Skipping
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6558] leading-relaxed">
                  Modern injection-molded plastic feeds are hydrophobic; they naturally repel liquid ink, requiring artificial chemicals to force fluid flow. When a plastic feed pen sits unused for a day, the surface dries and causes annoying hard starts.
                </p>
                <p className="text-xs sm:text-sm text-[#6B6558] leading-relaxed">
                  Natural vulcanized ebonite hard rubber is hydrophilic. Its microscopic surface pores create a continuous capillary magnetic-like pull for fountain pen ink. Ink stays primed at the nib tip even after days of rest.
                </p>
              </div>

              <div className="space-y-3 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5DFD5]">
                <h4 className="font-serif text-lg font-bold text-[#102E29] mb-2">How to Heat-Set an Ebonite Feed</h4>
                <ol className="list-decimal pl-4 space-y-2 text-xs text-[#6B6558]">
                  <li>Dip the nib and feed tip into warm water (85°C) for 15 seconds.</li>
                  <li>Gently pinch the top of the nib and underside of the feed together using your fingers for 20 seconds.</li>
                  <li>As the ebonite cools, it permanently locks into the nib contour for wet, uninterrupted ink flow.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Top Search FAQs */}
        {activeTab === 'faq' && (
          <div className="space-y-4 max-w-4xl mx-auto animate-fade-in">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/60 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#102E29] flex items-center gap-3">
                    <HiSparkles size={16} className="text-[#B8963E] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <FaChevronDown 
                    size={14} 
                    className={`text-[#B8963E] transition-transform duration-300 shrink-0 ${
                      openFaq === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6B6558] leading-relaxed border-t border-[#E5DFD5]/40 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="bg-[#102E29] text-[#FDFBF7] p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">Have a Custom Tuning or Feed Fitment Question?</h3>
            <p className="text-xs text-[#D4BC72]">Connect directly with our master penmaker for personalized nibsmith consultation.</p>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps min-h-[44px] py-3 px-6 text-xs font-bold flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all shadow-md shrink-0"
          >
            <FaWhatsapp size={16} />
            <span>Consult Master Penmaker</span>
          </a>
        </div>

      </div>
    </section>
  );
}
