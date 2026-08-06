"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  productName: string;
  selectedColour: string;
  className?: string;
}

export default function WhatsAppButton({
  productName,
  selectedColour,
  className = "",
}: WhatsAppButtonProps) {
  const message = `Hello, I would like to enquire about:\n\nModel: PRAVAH by RS Writing Instruments\nProduct: ${productName}\nColour / Option: ${selectedColour}`;
  const whatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fable-pill-btn w-full min-h-[44px] py-2.5 px-4 fable-mono-caps text-[11px] font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] transition-all duration-300 hover:bg-[#25D366] hover:text-white shadow-xs ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <FaWhatsapp size={15} className="text-[#25D366] group-hover:text-white shrink-0" />
      <span>Enquire on WhatsApp</span>
    </a>
  );
}
