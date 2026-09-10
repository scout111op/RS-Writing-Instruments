"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCookieBite, FaCheck } from "react-icons/fa";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<string | null>("accepted");

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("rswriting_cookie_consent");
      setConsent(stored);
    } catch {
      setConsent(null);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("rswriting_cookie_consent", "accepted");
    } catch {
      // ignore
    }
    setConsent("accepted");
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("rswriting_cookie_consent", "declined");
    } catch {
      // ignore
    }
    setConsent("declined");
  };

  if (!mounted || consent === "accepted" || consent === "declined") {
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-[#FDFBF7] border border-[#E5DFD5] shadow-xl rounded-2xl p-5 backdrop-blur-md animate-fade-in"
      role="region"
      aria-label="Cookie consent notice"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 bg-[#B8963E]/15 rounded-xl text-[#B8963E] shrink-0 mt-0.5">
          <FaCookieBite size={20} />
        </div>
        <div className="flex-1 text-xs text-[#6B6558] space-y-2">
          <p className="font-semibold text-[#102E29]">
            We value your privacy &amp; experience
          </p>
          <p className="leading-relaxed">
            RS Writing Instruments uses functional cookies and anonymous analytics to deliver seamless pen consultations and improve page performance. Learn more in our{" "}
            <Link href="/privacy" className="text-[#B8963E] font-medium hover:underline">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-2 bg-[#102E29] text-[#FDFBF7] text-xs font-semibold rounded-lg hover:bg-[#1A4A42] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FaCheck size={11} /> Accept All
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3 py-2 bg-transparent text-[#6B6558] hover:text-[#102E29] text-xs font-medium rounded-lg hover:bg-[#EAE5DF]/60 transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
