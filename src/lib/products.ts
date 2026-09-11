export interface Product {
  id: number;
  name: string;
  model: string;
  shape: string;
  ink: string;
  type: string;
  basePrice: number;
  image: string;
  inStock?: boolean;
  filterClass?: string;
}

export const rawProducts: Product[] = [
  { 
    id: 1, 
    name: "No. 5.5 Single Ink Channel", 
    model: "Ebonite Feed No. #5 or 5.5", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 78,
    image: "/products/no-5-5-single-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 2, 
    name: "No. 5.5 Double Ink Channel", 
    model: "Ebonite Feed No. #5 or 5.5", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 85,
    image: "/products/no-5-5-double-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 3, 
    name: "No. 35 Single Ink Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 75,
    image: "/products/no-35-single-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 4, 
    name: "No. 35 Double Ink Channel (Classic)", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 88,
    image: "/products/no-35-double-ink-channel-classic.jpg",
    inStock: true
  },
  { 
    id: 5, 
    name: "No. 35 Double Ink Channel (Premium)", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 90,
    image: "/products/no-35-double-ink-channel-premium.jpg",
    inStock: true
  },
  { 
    id: 6, 
    name: "No. 35 Triple Ink Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Triple", 
    type: "Friction fit", 
    basePrice: 105,
    image: "/products/no-35-triple-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 7, 
    name: "No. #6 CbyC Double Ink Channel", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Cartridge Compatible", 
    basePrice: 300,
    image: "/products/no-6-cbyc-double-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 8, 
    name: "Parker Shape Triple Ink Channel Ebonite CC Feed #6", 
    model: "Ebonite Feed No. #6 or 35", 
    shape: "Parker", 
    ink: "Triple", 
    type: "Cartridge Compatible", 
    basePrice: 450,
    image: "/products/parker-shape-triple-ink-channel-ebonite-cc-feed-6.jpg",
    inStock: true
  },
  { 
    id: 9, 
    name: "Parker Shape No. 35 51MM Double Ink Channel", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Parker", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 80,
    image: "/products/parker-shape-no-35-51mm-double-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 10, 
    name: "No. 35 51MM Single Ink Channel", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 85,
    image: "/products/no-35-51mm-single-ink-channel-2.jpg",
    inStock: true
  },
  { 
    id: 11, 
    name: "No. 35 51MM Single Ink Channel - Red", 
    model: "Ebonite Feed No. #35 51mm Length (Red Ebonite)", 
    shape: "Shaffer", 
    ink: "Single", 
    type: "Friction fit", 
    basePrice: 95,
    image: "/products/no-35-51mm-single-ink-channel-red.jpg",
    inStock: false
  },
  { 
    id: 12, 
    name: "No. 35 51MM Double Ink Channel - Red", 
    model: "Ebonite Feed No. #35 51mm Length (Red Ebonite)", 
    shape: "Shaffer", 
    ink: "Double", 
    type: "Friction fit", 
    basePrice: 105,
    image: "/products/no-35-51mm-double-ink-channel-red.jpg",
    inStock: false
  },
  { 
    id: 13, 
    name: "No. 35 51MM Triple Ink Channel", 
    model: "Ebonite Feed No. #35 51mm Length", 
    shape: "Shaffer", 
    ink: "Triple", 
    type: "Friction fit", 
    basePrice: 115,
    image: "/products/no-35-51mm-triple-ink-channel.jpg",
    inStock: true
  },
  { 
    id: 14, 
    name: "No. 35 51MM Triple Ink Channel - Red", 
    model: "Ebonite Feed No. #35 51mm Length (Red Ebonite)", 
    shape: "Shaffer", 
    ink: "Triple", 
    type: "Friction fit", 
    basePrice: 125,
    image: "/products/no-35-51mm-triple-ink-channel-red.jpg",
    inStock: false
  }
];

export const calculateDisplayPrice = (product: Product): string => {
  return `₹${product.basePrice.toLocaleString('en-IN')}`;
};
