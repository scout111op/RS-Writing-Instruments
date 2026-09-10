export type NibFamily = 'bock' | 'jowo';

export type NibPoint = 'EEF' | 'EF' | 'FINE' | 'MEDIUM' | 'BROAD' | 'DOUBLE BROAD';

export const NIB_POINTS: NibPoint[] = [
  'EEF',
  'EF',
  'FINE',
  'MEDIUM',
  'BROAD',
  'DOUBLE BROAD',
];

export interface NibProduct {
  id: string;
  family: NibFamily;
  familyDisplayName: string;
  colorName: string;
  title: string;
  h2Title: string;
  seoDescription: string;
  metaTitle: string;
  metaDescription: string;
  primaryImage: string;
  primaryAlt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  sku: string;
  mpn: string;
  size: string; // e.g. "#6"
  material: string;
  coating: string;
  compatibilityNote: string;
  tags: string[];
  pointsAvailable: NibPoint[];
  defaultPoint: NibPoint;
}

export const nibProducts: NibProduct[] = [
  // ─── BOCK #6 TYPE 250 SERIES NIBS ─────────────────────────────────
  {
    id: 'bock-compatible-black',
    family: 'bock',
    familyDisplayName: 'Bock #6 Type 250 series Nibs',
    colorName: 'Black',
    title: 'Bock #6 Type 250 series Fountain Pen Nib — Stealth Black Finish',
    h2Title: 'Bock #6 Type 250 series Fountain Pen Nib in PVD Stealth Black',
    seoDescription:
      'Precision-engineered Bock #6 Type 250 series compatible fountain pen nib featuring an ultra-resilient matte black PVD coating, tuned for velvety ink distribution and zero hard-starts.',
    metaTitle: 'Bock #6 Type 250 series Fountain Pen Nib — Black Finish | RS Writing Instruments',
    metaDescription:
      'Explore our Bock #6 Type 250 series replacement nib with tactile black PVD finish. Pairs seamlessly with hand-cut ebonite feeds. Available in EEF to Double Broad.',
    primaryImage: '/nibs/bock-black-front.webp',
    primaryAlt: 'Bock #6 Type 250 series fountain pen nib front face view in PVD stealth black finish',
    secondaryImage: '/nibs/bock-black-back.webp',
    secondaryAlt: 'Bock #6 Type 250 series fountain pen nib reverse feed curvature view showing curvature channel fitment',
    sku: 'RS-NIB-BOCK-BLK',
    mpn: 'RS-NIB-B250-BLK',
    size: 'Bock #6 Type 250 series',
    material: 'Premium German Spring Stainless Steel',
    coating: 'High-Durability PVD Matte Black',
    compatibilityNote:
      'Engineered for standard Bock #6 Type 250 series housing units and bespoke ebonite pen sections with 6.0mm diameter feeds.',
    tags: [
      'Bock #6 Type 250 series',
      'Bock compatible nib',
      'Bock 250 nib replacement',
      'black fountain pen nib',
      '#6 Bock nib',
      'ebonite feed pairing',
      'PVD coated nib',
    ],
    pointsAvailable: NIB_POINTS,
    defaultPoint: 'MEDIUM',
  },
  {
    id: 'bock-compatible-gold',
    family: 'bock',
    familyDisplayName: 'Bock #6 Type 250 series Nibs',
    colorName: 'Premium Golden',
    title: 'Bock #6 Type 250 series Fountain Pen Nib — Premium Golden',
    h2Title: 'Bock #6 Type 250 series Fountain Pen Nib in Premium Golden Finish',
    seoDescription:
      'Lustrous premium golden electroplated Bock #6 Type 250 series nib crafted with balanced tine flex for expressive line modulation and effortless glide across paper.',
    metaTitle: 'Bock #6 Type 250 series Fountain Pen Nib — Premium Golden | RS Writing Instruments',
    metaDescription:
      'Hand-inspected Bock #6 Type 250 series fountain pen nib in brilliant premium golden finish. Precision tipping for unmatched writing softness. Enquire on WhatsApp.',
    primaryImage: '/nibs/bock-gold-front.webp',
    primaryAlt: 'Bock #6 Type 250 series fountain pen nib front view in polished premium golden finish with breather hole detail',
    secondaryImage: '/nibs/bock-gold-back.webp',
    secondaryAlt: 'Bock #6 Type 250 series fountain pen nib reverse underside view showing feed alignment surface',
    sku: 'RS-NIB-BOCK-GLD',
    mpn: 'RS-NIB-B250-GLD',
    size: 'Bock #6 Type 250 series',
    material: 'High-Tensile German Stainless Steel',
    coating: 'Durable Micron Hard Golden Electroplate',
    compatibilityNote:
      'Direct screw-in collar or friction-fit replacement for Bock #6 Type 250 series nib units, custom ebonite pens, and bespoke pen grips.',
    tags: [
      'Bock #6 Type 250 series',
      'Bock golden nib',
      'premium golden fountain pen nib',
      'Bock #6 nib golden',
      'calligraphy nib point',
      'ebonite capillary feed',
      'golden nib replacement',
    ],
    pointsAvailable: NIB_POINTS,
    defaultPoint: 'FINE',
  },
  {
    id: 'bock-compatible-rosegold',
    family: 'bock',
    familyDisplayName: 'Bock #6 Type 250 series Nibs',
    colorName: 'Rose Gold',
    title: 'Bock #6 Type 250 series Fountain Pen Nib — Warm Rose Gold Plated',
    h2Title: 'Bock #6 Type 250 series Fountain Pen Nib in Radiant Rose Gold',
    seoDescription:
      'Distinctive warm copper-tinged rose gold Bock #6 Type 250 series replacement nib with micro-ground iridium tipping for ultra-smooth capillary ink transfer.',
    metaTitle: 'Bock #6 Type 250 series Fountain Pen Nib — Rose Gold Plated | RS Writing Instruments',
    metaDescription:
      'Luxury rose gold plated Bock #6 Type 250 series nib. Designed for fountain pen collectors and writers seeking refined elegance and wet, consistent ink flow.',
    primaryImage: '/nibs/bock-rosegold-front.webp',
    primaryAlt: 'Bock #6 Type 250 series fountain pen nib front view in radiant rose gold plating with engraved scroll flourish',
    secondaryImage: '/nibs/bock-rosegold-back.webp',
    secondaryAlt: 'Bock #6 Type 250 series fountain pen nib back view showing inner curvature and shank fitment',
    sku: 'RS-NIB-BOCK-RGD',
    mpn: 'RS-NIB-B250-RGD',
    size: 'Bock #6 Type 250 series',
    material: 'High-Tensile German Stainless Steel',
    coating: 'Triple-Layer Rose Gold Ion Plating',
    compatibilityNote:
      'Matches Bock #6 Type 250 series geometry perfectly. Exceptional resonance when paired with RS Writing hand-cut ebonite feeds.',
    tags: [
      'Bock #6 Type 250 series',
      'rose gold nib',
      'Bock rose gold nib',
      '#6 fountain pen nib',
      'artisan pen nib',
      'ebonite feed India',
      'smooth writing nib',
    ],
    pointsAvailable: NIB_POINTS,
    defaultPoint: 'MEDIUM',
  },

  // ─── JOWO #6 TYPE 250 SERIES NIBS ─────────────────────────────────
  {
    id: 'jowo-compatible-black',
    family: 'jowo',
    familyDisplayName: 'Jowo #6 Type 250 series Nibs',
    colorName: 'Black',
    title: 'Jowo #6 Type 250 series Fountain Pen Nib — Tactile Black Finish',
    h2Title: 'Jowo #6 Type 250 series Fountain Pen Nib in Modern Stealth Black',
    seoDescription:
      'Precision German-profile Jowo #6 Type 250 series replacement nib with anti-glare satin black coating, shaped for unwavering stability and wet ink saturation.',
    metaTitle: 'Jowo #6 Type 250 series Fountain Pen Nib — Stealth Black | RS Writing Instruments',
    metaDescription:
      'Upgrade your fountain pen with our Jowo #6 Type 250 series stealth black coated nib. Direct drop-in fitment for Jowo housings and custom pens. Available from EEF to Double Broad.',
    primaryImage: '/nibs/jowo-black.webp',
    primaryAlt: 'Jowo #6 Type 250 series fountain pen nib in sleek matte black finish showing slit and breather hole',
    sku: 'RS-NIB-JOWO-BLK',
    mpn: 'RS-NIB-J06-BLK',
    size: 'Jowo #6 Type 250 series',
    material: 'Spring-Tempered Stainless Steel',
    coating: 'Vapor-Deposited Satin Black',
    compatibilityNote:
      'Engineered for Jowo #6 Type 250 series threaded units, Opus 88, Esterbrook, Franklin-Christoph, and all bespoke pens using Jowo 6mm geometry.',
    tags: [
      'Jowo #6 Type 250 series',
      'Jowo compatible nib',
      'Jowo #6 nib black',
      'German nib replacement',
      'Jowo nib India',
      'custom pen nib',
      'stealth black nib',
    ],
    pointsAvailable: NIB_POINTS,
    defaultPoint: 'FINE',
  },
  {
    id: 'jowo-compatible-gold',
    family: 'jowo',
    familyDisplayName: 'Jowo #6 Type 250 series Nibs',
    colorName: 'Premium Golden',
    title: 'Jowo #6 Type 250 series Fountain Pen Nib — Premium Golden',
    h2Title: 'Jowo #6 Type 250 series Fountain Pen Nib in Premium Golden Finish',
    seoDescription:
      'Classic high-sheen premium golden plated Jowo #6 Type 250 series nib delivering frictionless gliding performance and dependable capillary ink pull.',
    metaTitle: 'Jowo #6 Type 250 series Fountain Pen Nib — Premium Golden | RS Writing Instruments',
    metaDescription:
      'Discover premium golden plated Jowo #6 Type 250 series replacement nibs. Hand-tuned tines for instantaneous ink initiation and rich shading. Choose your nib point.',
    primaryImage: '/nibs/jowo-gold.webp',
    primaryAlt: 'Jowo #6 Type 250 series fountain pen nib front face in brilliant mirror-finish premium golden plating',
    sku: 'RS-NIB-JOWO-GLD',
    mpn: 'RS-NIB-J06-GLD',
    size: 'Jowo #6 Type 250 series',
    material: 'Spring-Tempered Stainless Steel',
    coating: 'Durable Brilliant Golden Electroplating',
    compatibilityNote:
      'Standard Jowo #6 Type 250 series curvature. Compatible with standard international 6mm feeds and RS Writing handcrafted ebonite feeds.',
    tags: [
      'Jowo #6 Type 250 series',
      'Jowo golden nib',
      '#6 Jowo golden replacement',
      'premium golden pen nib',
      'fountain pen nib upgrade',
      'Jowo feed fitment',
      'luxury fountain pen nib',
    ],
    pointsAvailable: NIB_POINTS,
    defaultPoint: 'MEDIUM',
  },
  {
    id: 'jowo-compatible-rosegold',
    family: 'jowo',
    familyDisplayName: 'Jowo #6 Type 250 series Nibs',
    colorName: 'Rose Gold',
    title: 'Jowo #6 Type 250 series Fountain Pen Nib — Warm Rose Gold Plated',
    h2Title: 'Jowo #6 Type 250 series Fountain Pen Nib in Elegant Rose Gold',
    seoDescription:
      'Opulent warm rose gold plated Jowo #6 Type 250 series replacement nib crafted to give your bespoke writing instrument a distinguished, sophisticated profile.',
    metaTitle: 'Jowo #6 Type 250 series Fountain Pen Nib — Rose Gold | RS Writing Instruments',
    metaDescription:
      'Exquisite rose gold plated Jowo #6 Type 250 series fountain pen nib with precision ground tipping. Instant WhatsApp inquiry for EEF, EF, Fine, Medium, Broad, Double Broad.',
    primaryImage: '/nibs/jowo-rosegold.webp',
    primaryAlt: 'Jowo #6 Type 250 series fountain pen nib in rich polished rose gold finish highlighting fine tine slit',
    sku: 'RS-NIB-JOWO-RGD',
    mpn: 'RS-NIB-J06-RGD',
    size: 'Jowo #6 Type 250 series',
    material: 'Spring-Tempered Stainless Steel',
    coating: 'Protective Rose Gold Alloy Plating',
    compatibilityNote:
      'Precision engineered for Jowo #6 Type 250 series collars. Seamlessly mounts with standard 6.0mm feeds for steady ink delivery without burping.',
    tags: [
      'Jowo #6 Type 250 series',
      'rose gold Jowo nib',
      'Jowo #6 replacement nib',
      'artisan fountain pen nib',
      'ebonite feed replacement',
      'rose gold writing nib',
    ],
    pointsAvailable: NIB_POINTS,
    defaultPoint: 'MEDIUM',
  },
];

export const bockNibs = nibProducts.filter((n) => n.family === 'bock');
export const jowoNibs = nibProducts.filter((n) => n.family === 'jowo');

export const WHATSAPP_PHONE = '919455664795';

/**
 * Builds the WhatsApp deep link for an inquiry on a specific nib product and selected point.
 * Template: "Hi, I'm interested in [Nib Product Name] with nib point: [Selected Point]. Please share availability and price."
 */
export function buildNibWhatsAppUrl(nib: NibProduct, selectedPoint: NibPoint): string {
  const message = `Hi, I'm interested in ${nib.title} with nib point: ${selectedPoint}. Please share availability and price.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
