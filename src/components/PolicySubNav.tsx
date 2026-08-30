"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineScale, HiOutlineSparkles } from "react-icons/hi";

export default function PolicySubNav() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Privacy Policy",
      href: "/privacy",
      icon: HiOutlineShieldCheck,
    },
    {
      label: "Terms of Service",
      href: "/terms",
      icon: HiOutlineDocumentText,
    },
    {
      label: "Acceptable Use Policy",
      href: "/acceptable-use",
      icon: HiOutlineScale,
    },
    {
      label: "Atelier Guarantees",
      href: "/#policies-section",
      icon: HiOutlineSparkles,
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] border-y border-[#E5DFD5] py-3 px-4 sm:px-6 sticky top-[72px] sm:top-[80px] z-30 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-[#102E29] text-[#FDFBF7] shadow-xs font-semibold"
                  : "bg-white/80 text-[#6B6558] hover:text-[#102E29] hover:bg-white border border-[#E5DFD5]/70"
              }`}
            >
              <Icon size={15} className={isActive ? "text-[#B8963E]" : "text-[#9C9588]"} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
