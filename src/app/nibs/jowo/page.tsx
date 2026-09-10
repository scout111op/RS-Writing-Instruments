import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NibCard from '@/components/NibCard';
import Navbar from '@/components/Navbar';
import WhatsAppBanner from '@/components/WhatsAppBanner';
import AtelierPoliciesSection from '@/components/AtelierPoliciesSection';
import { jowoNibs } from '@/lib/nibs';
import { createProductSchema } from '@/lib/schemaHelpers';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rswriting.in'),
  title: 'Jowo #6 Type 250 series Fountain Pen Nibs | RS Writing Instruments',
  description:
    'Precision German-profile Jowo #6 Type 250 series replacement fountain pen nibs in Black, Premium Golden, and Rose Gold. Choice of EEF to Double Broad point sizes.',
  alternates: {
    canonical: 'https://www.rswriting.in/nibs/jowo',
  },
  openGraph: {
    title: 'Jowo #6 Type 250 series Fountain Pen Nibs',
    description: 'Precision Jowo #6 Type 250 series replacement fountain pen nibs in 3 luxury finishes.',
    url: 'https://www.rswriting.in/nibs/jowo',
    siteName: 'RS Writing Instruments',
    images: [{ url: '/nibs/jowo-gold.webp', width: 1200, height: 900, alt: 'Jowo #6 Type 250 series Fountain Pen Nibs' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function JowoNibsPage() {
  const generalWhatsappUrl = `https://wa.me/919455664795?text=${encodeURIComponent(
    'Hello RS Writing Instruments, I am inquiring about your Jowo #6 Type 250 series fountain pen nibs.'
  )}`;

  const productSchemas = jowoNibs.map((nib) =>
    createProductSchema({
      name: nib.title,
      description: nib.seoDescription,
      image: [nib.primaryImage],
      sku: nib.sku,
      mpn: nib.mpn,
      price: '450',
      priceCurrency: 'INR',
      url: 'https://www.rswriting.in/nibs/jowo',
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
            Jowo #6 Type 250 series <span className="italic text-[#B8963E]">Fountain Pen Nibs</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#6B6558] mt-2 max-w-2xl">
            Precision-formed for universal Jowo #6 Type 250 series threaded collars and bespoke pens. Single high-resolution view highlighting tine symmetry and gold, rose gold, and black finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {jowoNibs.map((nib) => (
            <NibCard key={nib.id} nib={nib} />
          ))}
        </div>

        <AtelierPoliciesSection />
      </main>
    </div>
  );
}
