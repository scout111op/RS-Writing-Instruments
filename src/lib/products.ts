export interface Product {
  id: number;
  name: string;
  model: string;
  shape: string;
  ink: string;
  type: string;
  basePrice: number;
  image: string;
  filterClass?: string;
}

export const rawProducts: Product[] = [
  { 
    id: 1, 
    name: "Ebonite Feed #5.5 - Single Channel", 
    model: "Ebonite Feed No. #5 or 5.5", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 78,
    image: "/products/no-5-5-single-ink-channel.jpg"
  },
  { 
    id: 2, 
    name: "Ebonite Feed #5.5 - Double Channel", 
    model: "Ebonite Feed No. #5 or 5.5", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 85,
    image: "/products/no-5-5-double-ink-channel.jpg"
  },
  { 
    id: 3, 
    name: "Ebonite Feed #35 - Single Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 75,
    image: "/products/no-35-single-ink-channel.jpg"
  },
  { 
    id: 4, 
    name: "Ebonite Feed #35 - Double Channel (Classic)", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 88,
    image: "/products/no-35-double-ink-channel-classic.jpg"
  },
  { 
    id: 5, 
    name: "Ebonite Feed #35 - Double Channel (Premium)", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 90,
    image: "/products/no-35-double-ink-channel-premium.jpg"
  },
  { 
    id: 6, 
    name: "Ebonite Feed #35 - Music Flow Triple", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Triple (Music Flow)", 
    type: "Friction fit", 
    basePrice: 105,
    image: "/products/no-35-triple-ink-channel.jpg"
  },
  { 
    id: 7, 
    name: "Ebonite Feed #6 CC - Double Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Cartridge Compatible", 
    basePrice: 300,
    image: "/products/no-6-cbyc-double-ink-channel.jpg"
  },
  { 
    id: 8, 
    name: "Ebonite Feed #6 CC - Parker Triple", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Parker", 
    ink: "Triple", 
    type: "Cartridge Compatible", 
    basePrice: 325,
    image: "/products/parker-shape-triple-ink-channel-ebonite-cc-feed-6.jpg"
  },
  { 
    id: 9, 
    name: "Ebonite Feed #35 (51mm) - Parker Double", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Parker", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 80,
    image: "/products/parker-shape-no-35-51mm-double-ink-channel.jpg"
  },
  { 
    id: 10, 
    name: "Ebonite Feed #35 (51mm) - Single Channel", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 85,
    image: "/products/no-35-51mm-single-ink-channel-2.jpg"
  },
  { 
    id: 11, 
    name: "Ebonite Feed #35 (51mm) - Single Channel (Red Ebonite)", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 95,
    image: "/products/no-35-51mm-single-ink-channel-red.jpg"
  },
  { 
    id: 12, 
    name: "Ebonite Feed #35 (51mm) - Double Channel (Red Ebonite)", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 105,
    image: "/products/no-35-51mm-double-ink-channel-red.jpg"
  },
  { 
    id: 13, 
    name: "Ebonite Feed #35 (51mm) - Music Flow Triple", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Triple (Music Flow)", 
    type: "Friction fit", 
    basePrice: 115,
    image: "/products/no-35-51mm-triple-ink-channel.jpg"
  },
  { 
    id: 14, 
    name: "Ebonite Feed #35 (51mm) - Music Flow (Red Ebonite)", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Triple (Music Flow)", 
    type: "Friction fit", 
    basePrice: 125,
    image: "/products/no-35-51mm-triple-ink-channel-red.jpg"
  }
];

export const calculateDisplayPrice = (product: Product): string => {
  return `₹${product.basePrice.toLocaleString('en-IN')}`;
};
