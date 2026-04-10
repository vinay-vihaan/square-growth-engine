import productCropProtection from "@/assets/product-crop-protection.jpg";
import productBio from "@/assets/product-bio.jpg";
import productGrowth from "@/assets/product-growth.jpg";

export interface Product {
  id: string;
  name: string;
  category: "crop-protection" | "bio-products" | "plant-growth";
  shortBenefit: string;
  description: string;
  benefits: string[];
  targetCrops: string[];
  usage: string;
  image: string;
  cropTypes: string[];
  problems: string[];
}

export const categories = [
  {
    id: "crop-protection",
    name: "Crop Protection",
    description: "Powerful solutions to protect crops from pests, diseases, and damage.",
    image: productCropProtection,
  },
  {
    id: "bio-products",
    name: "Bio Products",
    description: "Sustainable, eco-friendly solutions for long-term soil and crop health.",
    image: productBio,
  },
  {
    id: "plant-growth",
    name: "Plant Growth Solutions",
    description: "Boost growth, improve quality, and maximize yield.",
    image: productGrowth,
  },
] as const;

export const products: Product[] = [
  {
    id: "hasmak",
    name: "Hasmak",
    category: "crop-protection",
    shortBenefit: "Advanced insecticide for broad-spectrum pest control",
    description: "Hasmak is a powerful insecticide formulated to protect crops from a wide range of sucking and chewing pests. It provides long-lasting protection with quick knockdown action.",
    benefits: ["Broad-spectrum pest control", "Quick knockdown action", "Long-lasting protection", "Safe for beneficial insects when used as directed"],
    targetCrops: ["Rice", "Cotton", "Vegetables", "Fruits"],
    usage: "Apply 1-2ml per litre of water. Spray during early morning or late evening for best results.",
    image: productCropProtection,
    cropTypes: ["Rice", "Cotton", "Vegetables"],
    problems: ["Pest", "Yield"],
  },
  {
    id: "flora",
    name: "Flora",
    category: "crop-protection",
    shortBenefit: "Effective fungicide for disease management in cotton & vegetables",
    description: "Flora provides excellent protection against fungal diseases. It is formulated for use on cotton, vegetables, and other crops requiring fungal disease management.",
    benefits: ["Controls major fungal diseases", "Systemic action", "Rain-fast formula", "Improves crop health"],
    targetCrops: ["Cotton", "Vegetables", "Chilli", "Tomato"],
    usage: "Mix 2ml per litre of water and spray evenly on the crop canopy.",
    image: productGrowth,
    cropTypes: ["Cotton", "Vegetables"],
    problems: ["Pest", "Growth"],
  },
  {
    id: "punch",
    name: "Punch",
    category: "crop-protection",
    shortBenefit: "High-performance pesticide for tough pest situations",
    description: "Punch delivers powerful pest control with its advanced formulation, tackling the most resistant pest populations effectively.",
    benefits: ["Controls resistant pests", "Fast-acting formula", "Excellent crop safety", "Cost-effective protection"],
    targetCrops: ["Rice", "Cotton", "Soybean", "Groundnut"],
    usage: "Dilute 1.5ml per litre of water. Apply at first signs of pest infestation.",
    image: productCropProtection,
    cropTypes: ["Rice", "Cotton", "Soybean"],
    problems: ["Pest"],
  },
  {
    id: "square-sp",
    name: "Square SP",
    category: "crop-protection",
    shortBenefit: "Specialty pesticide for targeted crop protection",
    description: "Square SP is a specialty formulation designed for targeted pest control in high-value crops with superior efficacy.",
    benefits: ["Targeted pest action", "High-value crop safe", "Superior efficacy", "Easy application"],
    targetCrops: ["Vegetables", "Fruits", "Flowers"],
    usage: "Apply 1ml per litre of water during active pest season.",
    image: productCropProtection,
    cropTypes: ["Vegetables", "Fruits"],
    problems: ["Pest", "Growth"],
  },
  {
    id: "zyme",
    name: "Zyme",
    category: "bio-products",
    shortBenefit: "Natural bio-stimulant for enhanced plant nutrition",
    description: "Zyme is a premium bio-stimulant enriched with natural enzymes and amino acids that enhance nutrient uptake and improve overall plant health.",
    benefits: ["Enhanced nutrient uptake", "Improves soil health", "100% organic formulation", "Boosts natural immunity"],
    targetCrops: ["All Crops"],
    usage: "Mix 2-3ml per litre of water for foliar application or 1L per acre for soil application.",
    image: productBio,
    cropTypes: ["Rice", "Cotton", "Vegetables", "Fruits"],
    problems: ["Growth", "Yield"],
  },
  {
    id: "seabion",
    name: "Seabion",
    category: "bio-products",
    shortBenefit: "Seaweed-based bio-stimulant for superior crop vigor",
    description: "Seabion harnesses the power of seaweed extracts to provide essential growth hormones, minerals, and organic compounds that boost crop vigor and yield.",
    benefits: ["Rich in natural growth hormones", "Improves stress tolerance", "Enhances flowering & fruiting", "Eco-friendly formulation"],
    targetCrops: ["Fruits", "Vegetables", "Flowers", "Paddy"],
    usage: "Apply 2ml per litre of water as foliar spray during critical growth stages.",
    image: productBio,
    cropTypes: ["Fruits", "Vegetables", "Paddy"],
    problems: ["Growth", "Yield"],
  },
  {
    id: "potash",
    name: "Potash",
    category: "bio-products",
    shortBenefit: "Organic potash solution for better fruit quality",
    description: "Potash is a premium organic potash supplement that enhances fruit size, color, and sweetness while improving overall crop quality.",
    benefits: ["Improves fruit quality", "Enhances size & color", "Organic formulation", "Compatible with all sprays"],
    targetCrops: ["Fruits", "Vegetables", "Cotton"],
    usage: "Mix 3ml per litre of water. Apply during fruiting stage.",
    image: productBio,
    cropTypes: ["Fruits", "Vegetables", "Cotton"],
    problems: ["Yield", "Growth"],
  },
  {
    id: "smax",
    name: "S-Max",
    category: "plant-growth",
    shortBenefit: "Growth promoter for maximum vegetative development",
    description: "S-Max is a premium plant growth promoter designed to maximize vegetative development, leading to healthier plants and higher yields.",
    benefits: ["Accelerates vegetative growth", "Improves plant structure", "Increases yield potential", "Compatible with pesticides"],
    targetCrops: ["Rice", "Cotton", "Vegetables", "Fruits"],
    usage: "Apply 1ml per litre of water during vegetative growth stage.",
    image: productGrowth,
    cropTypes: ["Rice", "Cotton", "Vegetables"],
    problems: ["Growth", "Yield"],
  },
  {
    id: "karnival",
    name: "Karnival",
    category: "plant-growth",
    shortBenefit: "Advanced flowering & fruiting enhancer",
    description: "Karnival is specially formulated to enhance flowering and fruit setting, ensuring maximum produce quality and quantity.",
    benefits: ["Boosts flowering", "Improves fruit setting", "Enhances crop quality", "Increases marketable yield"],
    targetCrops: ["Cotton", "Chilli", "Tomato", "Brinjal"],
    usage: "Mix 2ml per litre of water. Apply during pre-flowering and flowering stages.",
    image: productGrowth,
    cropTypes: ["Cotton", "Vegetables"],
    problems: ["Yield", "Growth"],
  },
  {
    id: "champion",
    name: "Champion",
    category: "plant-growth",
    shortBenefit: "Complete plant nutrition for champion-level yields",
    description: "Champion delivers comprehensive plant nutrition with a balanced mix of macro and micronutrients for superior crop performance.",
    benefits: ["Complete nutrition package", "Corrects nutrient deficiencies", "Improves crop vigor", "Higher yields guaranteed"],
    targetCrops: ["All Crops"],
    usage: "Dilute 2ml per litre of water. Spray at 15-day intervals during active growth.",
    image: productGrowth,
    cropTypes: ["Rice", "Cotton", "Vegetables", "Fruits"],
    problems: ["Growth", "Yield"],
  },
  {
    id: "suvarna",
    name: "Suvarna",
    category: "plant-growth",
    shortBenefit: "Golden yield booster for premium crop output",
    description: "Suvarna is the golden standard in yield enhancement, providing the perfect blend of nutrients and growth regulators for premium crop output.",
    benefits: ["Premium yield enhancement", "Golden crop quality", "Balanced growth regulation", "Proven field results"],
    targetCrops: ["Paddy", "Cotton", "Groundnut", "Soybean"],
    usage: "Apply 1.5ml per litre of water during critical growth phases.",
    image: productGrowth,
    cropTypes: ["Paddy", "Cotton", "Soybean"],
    problems: ["Yield"],
  },
  {
    id: "sarkar",
    name: "Sarkar",
    category: "crop-protection",
    shortBenefit: "Premium herbicide for effective weed management",
    description: "Sarkar is a high-performance herbicide that controls a broad range of weeds without harming the crop, ensuring clean fields and maximum productivity.",
    benefits: ["Broad-spectrum weed control", "Crop-safe formula", "Long residual activity", "Cost-effective solution"],
    targetCrops: ["Rice", "Wheat", "Soybean"],
    usage: "Mix as per label directions. Apply pre- or post-emergence as required.",
    image: productCropProtection,
    cropTypes: ["Rice", "Wheat"],
    problems: ["Pest"],
  },
];

export const allCropTypes = [...new Set(products.flatMap(p => p.cropTypes))].sort();
export const allProblems = [...new Set(products.flatMap(p => p.problems))].sort();
