export interface FountainPen {
  id: string;
  name: string;
  tagline: string;
  category: 'Ebonite Flagship' | 'Gold Nib Series' | 'Limited Edition' | 'Artisan';
  price: number;
  nibOptions: string[];
  material: string;
  feedType: string;
  fillingSystem: string;
  weight: string;
  image: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export const fountainPenCollection: FountainPen[] = [
  {
    id: 'fp-monarch-gold',
    name: 'RS Monarch Ebonite Fountain Pen',
    tagline: 'Hand-Turned Black Ebonite with 18K Solid Gold Nib',
    category: 'Gold Nib Series',
    price: 12500,
    nibOptions: ['18K Fine (0.5mm)', '18K Medium (0.7mm)', '18K Broad (0.9mm)', '18K Stub (1.1mm)'],
    material: 'Premium High-Density Japanese Ebonite & 24K Gold-Plated Trim',
    feedType: 'RS Hand-Cut #6 Ebonite Double Channel Feed',
    fillingSystem: 'Dual (Cartridge & High-Capacity Piston Converter included)',
    weight: '28g (Perfect balance capped & uncapped)',
    image: '/luxury_fountain_pen.jpg',
    description: 'The crowning jewel of RS craftsmanship. Hand-turned from solid black German ebonite, polished with organic oils to a warm sheen, and fitted with our flagship RS #6 ebonite feed for effortless, wet ink delivery.',
    highlights: ['18K Two-Tone Gold Nib', 'Custom Ebonite Feed', '24K Gold Plated Accents', 'Hand-Polished Finish'],
    badge: 'Flagship Edition'
  },
  {
    id: 'fp-heritage-mottled',
    name: 'RS Heritage Red Mottled Ebonite',
    tagline: 'Vintage-Inspired Flame Red Ebonite Body',
    category: 'Ebonite Flagship',
    price: 8900,
    nibOptions: ['EF (0.4mm)', 'F (0.5mm)', 'M (0.7mm)', 'B (0.9mm)', 'Flex Nib'],
    material: 'Natural Hard Rubber Vulcanized Red Mottled Ebonite',
    feedType: 'RS Custom #35 (51mm) Ebonite Feed - Red Ebonite Core',
    fillingSystem: 'Eyedropper Compatible (3.2ml capacity) / Converter',
    weight: '24g',
    image: '/luxury_fountain_pen.jpg',
    description: 'A tribute to early 20th-century writing instruments. Featuring stunning woodgrain swirl patterns unique to every individual pen, matched with a red ebonite feed for exceptional ink saturation.',
    highlights: ['Unique Woodgrain Swirl', 'High-Flow Ebonite Feed', 'Eyedropper Ready', 'Screw-Cap Lock'],
    badge: 'Best Seller'
  },
  {
    id: 'fp-obsidian-stealth',
    name: 'RS Stealth Obsidian Matte Ebonite',
    tagline: 'Tactile Matte Black Finish with Gunmetal Hardware',
    category: 'Limited Edition',
    price: 9800,
    nibOptions: ['Fine (0.5mm)', 'Medium (0.7mm)', 'Broad (0.9mm)', 'Architect Grind'],
    material: 'Matte Sandblasted Hard Ebonite with PVD Gunmetal Trims',
    feedType: 'RS #6 CC Double Channel Ebonite Feed',
    fillingSystem: 'International Standard Cartridge / Converter',
    weight: '30g',
    image: '/luxury_fountain_pen.jpg',
    description: 'Understated elegance for contemporary connoisseurs. The velvet-touch matte ebonite offers incredible grip and tactile warmth, paired with modern stealth styling and handcrafted precision feed.',
    highlights: ['Velvet Matte Texture', 'PVD Gunmetal Trim', 'Precision Feed Channel', 'Ergonomic Grip'],
    badge: 'Limited Release'
  },
  {
    id: 'fp-symphony-music',
    name: 'RS Maestro Symphony Music Pen',
    tagline: 'Triple-Tine Music Nib with Custom Triple-Channel Feed',
    category: 'Artisan',
    price: 14200,
    nibOptions: ['3-Tine Music Stub (1.3mm)', 'Custom Calligraphy Italic (1.5mm)'],
    material: 'Solid Ebonite Body with Sterling Silver Filigree Clip',
    feedType: 'RS #35 Music Flow Triple Channel Ebonite Feed',
    fillingSystem: 'High-Capacity Piston Converter',
    weight: '26g',
    image: '/luxury_fountain_pen.jpg',
    description: 'Designed specifically for calligraphers and music scorers who demand rich, uninterrupted ink flow on wide stroke variations. Engineered with our famous triple-channel ebonite feed.',
    highlights: ['Triple Channel Ink Feed', 'Specialty Calligraphy Nib', 'Sterling Silver Trim', 'Smooth Line Variation'],
    badge: 'Calligraphy Master'
  },
  {
    id: 'fp-artisan-emerald',
    name: 'RS Artisan Emerald Marbled Pen',
    tagline: 'Deep Imperial Emerald Green Swirl Ebonite',
    category: 'Artisan',
    price: 10500,
    nibOptions: ['Fine (0.5mm)', 'Medium (0.7mm)', 'Broad (0.9mm)', 'Flex Nib'],
    material: 'Hand-Turned Emerald Green & Black Vulcanized Ebonite',
    feedType: 'RS #5.5 Ebonite Feed - Shaffer Shape',
    fillingSystem: 'Standard International Converter / Cartridge',
    weight: '25g',
    image: '/luxury_fountain_pen.jpg',
    description: 'Deep jewel tones swirl across a sleek ebony body. Each barrel is turned individually on artisan lathes, ensuring no two pens share the exact same aesthetic motif.',
    highlights: ['Hand-Turned Lathe Work', 'Jewel Tone Finish', 'Shaffer Geometry Feed', 'Balanced Weight'],
  },
  {
    id: 'fp-empress-rosewood',
    name: 'RS Empress Crimson Rose Ebonite',
    tagline: 'Warm Terracotta & Crimson Ebonite with Rose Gold Accents',
    category: 'Gold Nib Series',
    price: 11800,
    nibOptions: ['14K Rose Gold Fine', '14K Rose Gold Medium', '14K Rose Gold Flex'],
    material: 'Crimson Rose Hard Ebonite with 18K Rose Gold Plated Trim',
    feedType: 'RS #6 Custom Ebonite Feed',
    fillingSystem: 'High-Capacity Cartridge & Converter',
    weight: '27g',
    image: '/luxury_fountain_pen.jpg',
    description: 'Warm crimson hues paired with delicate rose gold accents. Features a 14K solid rose gold nib tuned by hand to pair seamlessly with our hand-grooved ebonite feed.',
    highlights: ['14K Solid Rose Gold Nib', 'Rose Gold Plated Trim', 'Hand-Grooved Ebonite Feed', 'Collector Velvet Box'],
    badge: 'New Arrival'
  }
];

export const getFountainPenWhatsAppLink = (penName: string, priceFormatted: string, selectedNib?: string): string => {
  const nibInfo = selectedNib ? `%0A• Preferred Nib: ${selectedNib}` : '';
  const message = `Hello RS Writing Instruments, I am interested in ordering the *${penName}* (${priceFormatted}).${nibInfo}%0APlease let me know the availability and custom crafting options.`;
  return `https://wa.me/919455664795?text=${message}`;
};
