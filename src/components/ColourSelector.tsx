"use client";

import { ProductColourOption } from "@/lib/catalogProducts";

interface ColourSelectorProps {
  colours: ProductColourOption[];
  selectedColour: ProductColourOption;
  onSelect: (colour: ProductColourOption) => void;
}

export default function ColourSelector({
  colours,
  selectedColour,
  onSelect,
}: ColourSelectorProps) {
  if (!colours || colours.length <= 1) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 my-3">
      <span className="fable-mono-caps text-[9px] text-[#9C9588] mr-1 block w-full sm:w-auto">
        Option / Spec:
      </span>
      {colours.map((col) => {
        const isSelected = selectedColour.name === col.name;
        const isSpec = col.isMeasurement;

        return (
          <button
            key={col.name}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(col);
            }}
            title={col.name}
            className={`group relative min-h-[32px] sm:min-h-[36px] py-1.5 px-3 rounded-full text-[10px] font-sans transition-all duration-200 flex items-center gap-1.5 ${
              isSelected
                ? isSpec
                  ? "bg-[#B8963E] text-white shadow-xs font-semibold ring-1 ring-[#B8963E]"
                  : "bg-[#102E29] text-[#FDFBF7] shadow-xs font-semibold ring-1 ring-[#102E29]"
                : isSpec
                ? "bg-[#FAF8F5] text-[#B8963E] border border-[#B8963E]/40 hover:bg-[#B8963E]/10"
                : "bg-[#F5F1EB] text-[#6B6558] hover:bg-[#E5DFD5] hover:text-[#102E29]"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/10"
              style={{ backgroundColor: col.colorHex }}
            />
            <span className="truncate max-w-[140px]">{col.name}</span>
          </button>
        );
      })}
    </div>
  );
}
