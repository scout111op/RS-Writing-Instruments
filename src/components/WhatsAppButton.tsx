"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  productName: string;
  selectedColour: string;
  selectedComplimentary?: string;
  selectedFeed?: string;
  selectedNib?: string;
  selectedNibColor?: string;
  className?: string;
}

export default function WhatsAppButton({
  productName,
  selectedColour,
  selectedComplimentary = "Choose an option",
  selectedFeed = "Choose an option",
  selectedNib = "Choose an option",
  selectedNibColor = "Choose an option",
  className = "",
}: WhatsAppButtonProps) {
  const lines = [
    `Hello, I would like to enquire about the *PRAVAH* fountain pen with the following custom options:`,
    `- Complimentary Section: ${selectedComplimentary}`,
    `- Ebonite Feed: ${selectedFeed}`,
    `- Nib (Compatibility & Size): ${selectedNib}`,
    `- Nib & Trim Finish: ${selectedNibColor}`,
  ];

  if (productName && selectedColour) {
    lines.push(`- Model Variant: ${productName} (${selectedColour})`);
  }

  const message = lines.join("\n");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fable-pill-btn w-full min-h-[44px] py-2.5 px-4 fable-mono-caps text-[11px] font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] transition-all duration-300 hover:bg-[#25D366] hover:text-white shadow-xs ${className}`}
      onClick={(e) => e.stopPropagation()}
      title="Open WhatsApp chat with pre-filled customization details"
    >
      <FaWhatsapp size={16} className="text-[#25D366] group-hover:text-white shrink-0" />
      <span>Enquire via WhatsApp</span>
    </a>
  );
}
