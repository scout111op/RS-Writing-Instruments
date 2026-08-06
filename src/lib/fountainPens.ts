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
    weight: '26g',
    image: '/luxury_fountain_pen.jpg',
    description: 'Modern tactile elegance. Stealth matte ebonite surface provides unmatched non-slip ergonomics for long writing sessions without fatigue.',
    highlights: ['Sandblasted Tactile Finish', 'PVD Gunmetal Hardware', 'Resistant to Hand Oils', 'Precision Thread Lock'],
    badge: 'Limited Run'
  },
  {
    id: 'fp-emerald-artisan',
    name: 'RS Emerald Ripple Ebonite Pen',
    tagline: 'Deep Forest Green & Black Swirl Artisan Pen',
    category: 'Artisan',
    price: 7500,
    nibOptions: ['Fine (0.5mm)', 'Medium (0.7mm)', 'Broad (0.9mm)'],
    material: 'Natural Green Swirl Vulcanized Hard Rubber Ebonite',
    feedType: 'RS #5.5 Single Channel Precision Ebonite Feed',
    fillingSystem: 'Piston Converter Included',
    weight: '22g',
    image: '/luxury_fountain_pen.jpg',
    description: 'Designed for daily calligraphers and journal enthusiasts. Features rich deep forest green swirls with a hand-tuned stainless steel German nib.',
    highlights: ['Hand-Swirled Pattern', '#5.5 Ebonite Feed', 'Ergonomic Grip Section', 'Smooth Cap Threading']
  }
];

export const getFountainPenWhatsAppLink = (penName: string, price: string, selectedNib: string) => {
  const text = `Hello RS Writing Instruments, I am interested in placing an inquiry/order for the *${penName}* (${price}) with *${selectedNib}* nib. Please provide availability and shipping details.`;
  return `https://wa.me/919455664795?text=${encodeURIComponent(text)}`;
};
