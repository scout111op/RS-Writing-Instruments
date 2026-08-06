export interface ProductColourOption {
  name: string;
  image: string;
  colorHex: string;
  isMeasurement?: boolean;
}

export interface CatalogProduct {
  id: string;
  name: string;
  model: string;
  tagline: string;
  defaultImage: string;
  colours: ProductColourOption[];
}

const measurementOptions: ProductColourOption[] = [
  { name: "Measure with Cap", image: "/catalog/Mesure with Cap.jpeg", colorHex: "#102E29", isMeasurement: true },
  { name: "Measure without Cap", image: "/catalog/Measure without Cap.jpeg", colorHex: "#B8963E", isMeasurement: true },
];

export const featuredHeroProduct: CatalogProduct = {
  id: "pravah-featured",
  name: "PRAVAH Signature Fountain Pen",
  model: "PRAVAH by RS Writing Instruments",
  tagline: "Featured artisan ebonite fountain pen with precision capillary feed",
  defaultImage: "/catalog/1.jpeg",
  colours: [
    { name: "Classic Heritage", image: "/catalog/1.jpeg", colorHex: "#3D2817" },
    ...measurementOptions,
  ],
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "pravah-forest-green",
    name: "PRAVAH Forest Green Fountain Pen",
    model: "PRAVAH by RS Writing Instruments",
    tagline: "Deep forest green ebonite with precision gold & black trims",
    defaultImage: "/catalog/Forest Green BT.jpeg",
    colours: [
      { name: "Forest Green BT", image: "/catalog/Forest Green BT.jpeg", colorHex: "#102E29" },
      { name: "Forest Green GT", image: "/catalog/Forest Green GT.jpeg", colorHex: "#1E4D43" },
      { name: "Forest Green Demonstrator", image: "/catalog/Forest Green Cap and Section, Demonstrator Barrel.jpeg", colorHex: "#2E7D6E" },
      { name: "Forest Green Demonstrator (Uncapped)", image: "/catalog/Forest Green Cap and Section, Demonstrator Barrel (Uncapped).jpeg", colorHex: "#3CA390" },
      ...measurementOptions,
    ],
  },
  {
    id: "pravah-sparkle-white",
    name: "PRAVAH Sparkle White Fountain Pen",
    model: "PRAVAH by RS Writing Instruments",
    tagline: "Elegant pearl sparkle white cap with demonstrator barrel options",
    defaultImage: "/catalog/Sparkle White.jpeg",
    colours: [
      { name: "Sparkle White", image: "/catalog/Sparkle White.jpeg", colorHex: "#F5F5F5" },
      { name: "Sparkle White (Uncapped)", image: "/catalog/Sparkle White (uncapped).jpeg", colorHex: "#EAEAEA" },
      { name: "Sparkle White Demonstrator", image: "/catalog/Sparkle White Cap, Demostrator Barrel .jpeg", colorHex: "#DCDCDC" },
      { name: "Sparkle White Demonstrator (Uncapped)", image: "/catalog/Sparkle White Cap, Demostrator Barrel (Uncapped).jpeg", colorHex: "#D0D0D0" },
      ...measurementOptions,
    ],
  },
  {
    id: "pravah-[#B8963E]-pure-orange",
    name: "PRAVAH Pure Orange Fountain Pen",
    model: "PRAVAH by RS Writing Instruments",
    tagline: "Vibrant artisan orange cap with demonstrator barrel",
    defaultImage: "/catalog/Pure Orange Cap, Section Black, Demonstrator Barrel.jpeg",
    colours: [
      { name: "Pure Orange Demonstrator", image: "/catalog/Pure Orange Cap, Section Black, Demonstrator Barrel.jpeg", colorHex: "#E65100" },
      { name: "Pure Orange Demonstrator (Uncapped)", image: "/catalog/Pure Orange Cap, Section Black, Demonstrator Barrel (Uncapped).jpeg", colorHex: "#FF6D00" },
      ...measurementOptions,
    ],
  },
  {
    id: "pravah-red-black-swirl",
    name: "PRAVAH Red Black Swirl Fountain Pen",
    model: "PRAVAH by RS Writing Instruments",
    tagline: "Hand-turned red & black swirl ebonite body",
    defaultImage: "/catalog/Red Black Swirl.jpeg",
    colours: [
      { name: "Red Black Swirl", image: "/catalog/Red Black Swirl.jpeg", colorHex: "#8B0000" },
      { name: "Red Black Swirl (Uncapped)", image: "/catalog/Red Black Swirl Uncapped.jpeg", colorHex: "#B22222" },
      ...measurementOptions,
    ],
  },
  {
    id: "pravah-caviar-black",
    name: "PRAVAH Caviar Black Fountain Pen",
    model: "PRAVAH by RS Writing Instruments",
    tagline: "Classic deep caviar black polished ebonite body",
    defaultImage: "/catalog/Caviar Black.jpeg",
    colours: [
      { name: "Caviar Black", image: "/catalog/Caviar Black.jpeg", colorHex: "#111111" },
      ...measurementOptions,
    ],
  },
  {
    id: "pravah-swirl-series",
    name: "PRAVAH Ebonite Swirl Collection",
    model: "PRAVAH by RS Writing Instruments",
    tagline: "Artisan woodgrain swirl patterns in green, brown, and orange ebonite",
    defaultImage: "/catalog/Swirl Green.jpeg",
    colours: [
      { name: "Swirl Green", image: "/catalog/Swirl Green.jpeg", colorHex: "#2E5A44" },
      { name: "Swirl Brown", image: "/catalog/Swirl Brown.jpeg", colorHex: "#5D4037" },
      { name: "Swirl Orange", image: "/catalog/Swirl Orange.jpeg", colorHex: "#D84315" },
      ...measurementOptions,
    ],
  },
];
