"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export interface NavbarProps {
  activeTab?: "home" | "pens" | "feeds" | "nibs" | "guides" | "about" | "wholesale";
}

interface NavItem {
  id: "home" | "pens" | "feeds" | "nibs" | "guides" | "about" | "wholesale";
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "pens", label: "Handcrafted Pens", href: "/pens" },
  { id: "feeds", label: "Ebonite Feeds", href: "/feeds" },
  { id: "nibs", label: "Precision Nibs", href: "/nibs" },
  { id: "guides", label: "Guides & FAQs", href: "/blog" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "wholesale", label: "B2B Wholesale", href: "/wholesale" },
];

export default function Navbar({ activeTab }: NavbarProps) {
  const pathname = usePathname();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine current active item based on prop or pathname
  const currentTab = (() => {
    if (activeTab) return activeTab;
    if (!pathname || pathname === "/") return "home";
    if (pathname.startsWith("/pens")) return "pens";
    if (pathname.startsWith("/feeds")) return "feeds";
    if (pathname.startsWith("/nibs")) return "nibs";
    if (pathname.startsWith("/blog")) return "guides";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/wholesale")) return "wholesale";
    return undefined;
  })();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setNavScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    "Hello RS Writing Instruments, I am interested in inquiring about your fountain pens, ebonite feeds, and precision nibs."
  )}`;

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        navScrolled
          ? "py-2.5 bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#E5DFD5]/80"
          : "py-4 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5DFD5]"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* ── BRAND LOGO & TITLE ────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 mr-4 xl:mr-8 group py-1"
          aria-label="RS Writing Instruments Home"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-xs">
            <Image
              src="/logo.png"
              alt="RS Writing Instruments Logo"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight leading-none text-[#102E29] transition-colors group-hover:text-[#B8963E]">
              RS WRITING
            </span>
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.32em] font-bold text-[#B8963E] mt-0.5 group-hover:text-[#102E29] transition-colors">
              Instruments
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV TABS (Single Line & Perfectly Aligned) ─────── */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6 text-[11px] xl:text-xs tracking-wider uppercase font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`whitespace-nowrap py-2 px-1 relative transition-colors duration-200 flex items-center leading-none ${
                  isActive
                    ? "text-[#102E29] font-bold"
                    : "text-[#6B6558] hover:text-[#B8963E]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#B8963E] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── RIGHT ACTION: WHATSAPP CONSULTATION ───────────────────── */}
        <div className="hidden lg:flex items-center shrink-0 ml-3 xl:ml-6">
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fable-pill-btn fable-mono-caps text-[11px] xl:text-xs py-2 xl:py-2.5 px-3.5 xl:px-5 font-semibold flex items-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42] whitespace-nowrap shadow-xs transition-all"
            aria-label="Direct WhatsApp Consultation"
          >
            <FaWhatsapp size={15} style={{ color: "#25D366" }} className="shrink-0" />
            <span className="hidden xl:inline">WhatsApp Consultation</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>
        </div>

        {/* ── MOBILE / TABLET MENU TOGGLE ───────────────────────────── */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#102E29] p-2 focus:outline-hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:bg-[#E5DFD5]/40 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE DROPDOWN DRAWER ─────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#E5DFD5] px-6 py-5 space-y-1 shadow-lg animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center min-h-[44px] px-3 rounded-lg text-sm uppercase tracking-wider font-medium transition-colors ${
                  isActive
                    ? "bg-[#B8963E]/10 text-[#102E29] font-bold border-l-4 border-[#B8963E]"
                    : "text-[#6B6558] hover:text-[#102E29] hover:bg-[#FAF8F5]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#E5DFD5] mt-3">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fable-pill-btn fable-mono-caps w-full min-h-[44px] text-center text-xs py-3 font-semibold flex items-center justify-center gap-2 bg-[#102E29] text-[#FDFBF7] hover:bg-[#1A4A42] transition-colors"
            >
              <FaWhatsapp size={16} style={{ color: "#25D366" }} /> WhatsApp Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
