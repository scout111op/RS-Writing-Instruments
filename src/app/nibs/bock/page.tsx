import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NibCard from '@/components/NibCard';
import Navbar from '@/components/Navbar';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { bockNibs } from '@/lib/nibs';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Bock #6 Type 250 series Fountain Pen Nibs | RS Writing Instruments',
  description:
    'Triple-inspected Bock #6 Type 250 series fountain pen nibs in Black PVD, Premium Golden, and Rose Gold. Dual-view front and back inspection. Select EEF to Double Broad point size.',
  alternates: {
    canonical: 'https://www.rswriting.in/nibs/bock',
  },
  openGraph: {
    title: 'Bock #6 Type 250 series Fountain Pen Nibs',
    description: 'Precision Bock #6 Type 250 series replacement nibs with dual-view inspection.',
    url: 'https://www.rswriting.in/nibs/bock',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/nibs/bock-gold-front.webp', width: 1200, height: 900, alt: 'Bock #6 Type 250 series Fountain Pen Nibs' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BockNibsPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am inquiring about your Bock #6 Type 250 series fountain pen nibs.'
  )}`;

  const productSchemas = bockNibs.map((nib) =>
    createProductSchema({
      name: nib.title,
      description: nib.seoDescription,
      image: [nib.primaryImage, nib.secondaryImage || ''],
      sku: nib.sku,
      mpn: nib.mpn,
      price: '450',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/nibs/bock',
    })
  );

  return (
    <div className="min-h-screen relative" style={{ background: '#FDFBF7', color: '#1B2A2A' }}>
      {productSchemas.map((s, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <WhatsAppBanner />

      <Navbar activeTab="nibs" />

      <main className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8">
          <Link href="/nibs" className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8963E] hover:underline mb-4">
            <FaArrowLeft size={11} /> Back to All Nibs Collection
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#102E29] tracking-tight">
            Bock #6 Type 250 series <span className="italic text-[#B8963E]">Fountain Pen Nibs</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#6B6558] mt-2 max-w-2xl">
            Triple-inspected #6 fountain pen nibs precision-formed for Bock #6 Type 250 series housings and bespoke pen sections. Every card includes interactive dual-view inspection (front face and reverse feed fitment).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bockNibs.map((nib, index) => (
            <NibCard key={nib.id} nib={nib} priority={index === 0} />
          ))}
        </div>

        <AtelierPoliciesSection />
      </main>
    </div>
  );
}
