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
    basePrice: 28,
    image: "/products/no-5-5-single-ink-channel.jpg"
  },
  { 
    id: 2, 
    name: "Ebonite Feed #5.5 - Double Channel", 
    model: "Ebonite Feed No. #5 or 5.5", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 35,
    image: "/products/no-5-5-double-ink-channel.jpg"
  },
  { 
    id: 3, 
    name: "Ebonite Feed #35 - Single Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 25,
    image: "/products/no-35-single-ink-channel.jpg"
  },
  { 
    id: 4, 
    name: "Ebonite Feed #35 - Double Channel (Classic)", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 38,
    image: "/products/no-35-double-ink-channel-classic.jpg"
  },
  { 
    id: 5, 
    name: "Ebonite Feed #35 - Double Channel (Premium)", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 42,
    image: "/products/no-35-double-ink-channel-premium.jpg"
  },
  { 
    id: 6, 
    name: "Ebonite Feed #35 - Triple Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Triple", 
    type: "Friction fit", 
    basePrice: 45,
    image: "/products/no-35-triple-ink-channel.jpg"
  },
  { 
    id: 7, 
    name: "Ebonite Feed #35 (51mm) - Single Channel (Black)", 
    model: "Ebonite Feed No. #6 or 35 (51mm)", 
    shape: "Parker", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 30,
    image: "/products/no-35-51mm-single-ink-channel-2.jpg"
  },
  { 
    id: 8, 
    name: "Ebonite Feed #35 (51mm) - Single Channel (Red Ebonite)", 
    model: "Ebonite Feed No. #6 or 35 (51mm)", 
    shape: "Parker", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 45,
    image: "/products/no-35-51mm-single-ink-channel-red.jpg"
  },
  { 
    id: 9, 
    name: "Ebonite Feed #35 (51mm) - Double Channel (Black)", 
    model: "Ebonite Feed No. #6 or 35 (51mm)", 
    shape: "Parker", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 38,
    image: "/products/parker-shape-no-35-51mm-double-ink-channel.jpg"
  },
  { 
    id: 10, 
    name: "Ebonite Feed #35 (51mm) - Double Channel (Red Ebonite)", 
    model: "Ebonite Feed No. #6 or 35 (51mm)", 
    shape: "Parker", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 50,
    image: "/products/no-35-51mm-double-ink-channel-red.jpg"
  },
  { 
    id: 11, 
    name: "Ebonite Feed #35 (51mm) - Triple Channel (Black)", 
    model: "Ebonite Feed No. #6 or 35 (51mm)", 
    shape: "Parker", 
    ink: "Triple", 
    type: "Friction fit", 
    basePrice: 48,
    image: "/products/no-35-51mm-triple-ink-channel.jpg"
  },
  { 
    id: 12, 
    name: "Ebonite Feed #35 (51mm) - Triple Channel (Red Ebonite)", 
    model: "Ebonite Feed No. #6 or 35 (51mm)", 
    shape: "Parker", 
    ink: "Triple", 
    type: "Friction fit", 
    basePrice: 60,
    image: "/products/no-35-51mm-triple-ink-channel-red.jpg"
  },
  { 
    id: 13, 
    name: "Ebonite CC Feed #6 - CBYC Double Channel", 
    model: "Ebonite Feed No. #6", 
    shape: "Parker", 
    ink: "Double", 
    type: "Cartridge fit", 
    basePrice: 55,
    image: "/products/no-6-cbyc-double-ink-channel.jpg"
  },
  { 
    id: 14, 
    name: "Ebonite CC Feed #6 - Triple Channel (High Ink Flow)", 
    model: "Ebonite Feed No. #6", 
    shape: "Parker", 
    ink: "Triple", 
    type: "Cartridge fit", 
    basePrice: 65,
    image: "/products/parker-shape-triple-ink-channel-ebonite-cc-feed-6.jpg"
  }
];

export const calculateDisplayPrice = (product: Product): string => {
  return `₹${product.basePrice.toLocaleString('en-IN')}`;
};
