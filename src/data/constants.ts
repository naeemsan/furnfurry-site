import {
  type CommissionCard,
  CommissionType,
  type FAQItem,
  type FeaturePoint,
  type GalleryItem,
  type PricingTier,
  type ProcessStep,
  type WhyCard,
} from "../types";

export const COMMISSION_CARDS: CommissionCard[] = [
  {
    type: CommissionType.Head,
    title: "Fursuit Heads",
    description:
      "Custom heads shaped to match your fursona's style, proportions, and expression. Each head is built from scratch to bring your character to life.",
    features: [
      "Custom muzzle and face shape",
      "Toony or semi-realistic styling",
      "Eye and expression customization",
      "Fur color matching from reference",
      "Optional shaving & detail finishing",
    ],
    emoji: "🐾",
    badge: "Most Popular",
  },
  {
    type: CommissionType.HandPaws,
    title: "Hand Paws",
    description:
      "Soft, expressive hand paws crafted to complement your fursuit. Available in follow-me, toony, or realistic styles.",
    features: [
      "Custom claw colors and shape",
      "Fleece or fur palm options",
      "Matching fur to your head or ref",
      "Padded or unpadded fingers",
      "Grip-friendly palm lining",
    ],
    emoji: "✋",
  },
  {
    type: CommissionType.FeetPaws,
    title: "Feet Paws",
    description:
      "Durable, wearable feet paws built for both looks and comfort. Stand-alone or as part of a partial/full suit.",
    features: [
      "Foam-sculpted toe beans",
      "Non-slip sole option",
      "Matches your character design",
      "Digitigrade or plantigrade pad",
      "Custom claw detailing",
    ],
    emoji: "👣",
  },
  {
    type: CommissionType.Tail,
    title: "Tails",
    description:
      "From fluffy fox tails to scaled dragon tails — we build tails that move, swish, and match your fursona perfectly.",
    features: [
      "Custom length and base shape",
      "Wire armature for posing",
      "Multi-color & gradient options",
      "Clip-on or belt attachment",
      "Extra floof on request",
    ],
    emoji: "🦊",
  },
  {
    type: CommissionType.Partial,
    title: "Partials",
    description:
      "Get the head, hands, tail, and feet paws together as a matched set. Perfect for conventions and performers.",
    features: [
      "Head + paws + tail bundle",
      "Consistent color matching",
      "Optional bodysuit add-on",
      "Discounted vs. individual parts",
      "Flexible payment plans available",
    ],
    emoji: "🎭",
    badge: "Flexible Payments",
  },
  {
    type: CommissionType.FullSuit,
    title: "Full Suits",
    description:
      "The full expression of your fursona — head-to-toe craftsmanship with every detail considered, from ear tips to toe beans.",
    features: [
      "Complete head, body, paws & tail",
      "Digitigrade or regular bodysuit",
      "Breathable inner lining",
      "Custom markings & patterns",
      "Cooling fan options available",
    ],
    emoji: "⭐",
    badge: "Made to Order",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    type: CommissionType.Head,
    startingAt: 350,
    description: "Custom sculpted head, follow-me eyes, and fur matching",
    emoji: "🐾",
  },
  {
    type: CommissionType.HandPaws,
    startingAt: 80,
    description: "Soft hand paws with custom claws and padding",
    emoji: "✋",
  },
  {
    type: CommissionType.FeetPaws,
    startingAt: 120,
    description: "Sculpted feet paws with non-slip soles",
    emoji: "👣",
  },
  {
    type: CommissionType.Tail,
    startingAt: 90,
    description: "Fluffy custom tail with poseable wire core",
    emoji: "🦊",
  },
  {
    type: CommissionType.Partial,
    startingAt: 650,
    description: "Head, hand paws, feet paws, and tail as a matched set",
    popular: true,
    emoji: "🎭",
  },
  {
    type: CommissionType.FullSuit,
    startingAt: 1400,
    description: "Complete head-to-toe custom fursuit",
    emoji: "⭐",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Submit Your Quote Request",
    description:
      "Fill out our quote form with your character details, what you want made, and your budget range. No commitment needed.",
    icon: "📋",
  },
  {
    number: 2,
    title: "Share Your Reference Sheet",
    description:
      "Send us your ref sheet or character art. Don't have one? We can help you figure out the details together.",
    icon: "🎨",
  },
  {
    number: 3,
    title: "Discuss Style, Features & Pricing",
    description:
      "We chat through styling options, materials, timeline, and finalize the quote based on your vision and complexity.",
    icon: "💬",
  },
  {
    number: 4,
    title: "Contract + Payment Plan",
    description:
      "We send a simple agreement to protect both of us, then set up a payment plan that works with your timeline.",
    icon: "📝",
  },
  {
    number: 5,
    title: "Build Updates + Final Delivery",
    description:
      "We keep you in the loop with progress photos throughout the build. Once it's perfect, we ship it straight to you!",
    icon: "📦",
  },
];

export const FEATURE_POINTS: FeaturePoint[] = [
  {
    icon: "✨",
    title: "Fully Custom Designs",
    description: "Every suit is built around your character, not a template",
  },
  {
    icon: "🐾",
    title: "Heads, Partials & Full Suits",
    description: "Individual parts or complete suit commissions accepted",
  },
  {
    icon: "💳",
    title: "Flexible Payment Options",
    description: "Installment plans available throughout your build",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    description: "Progress updates and open dialogue from start to finish",
  },
  {
    icon: "📄",
    title: "Contract for Your Safety",
    description: "Simple agreement protects both you and the maker",
  },
  {
    icon: "🎨",
    title: "Built From Your Ref Sheet",
    description: "Your character's colors and traits come first",
  },
];

export const WHY_CARDS: WhyCard[] = [
  {
    icon: "🎯",
    title: "Character-Focused Builds",
    description:
      "Every detail — from eye shape to claw color — is matched to your original character design.",
  },
  {
    icon: "🤝",
    title: "First-Timer Friendly",
    description:
      "Never commissioned a suit before? We walk you through every step so you feel confident and informed.",
  },
  {
    icon: "💬",
    title: "Friendly Communication",
    description:
      "No jargon, no cold emails. Just genuine back-and-forth with someone who loves this craft.",
  },
  {
    icon: "💳",
    title: "Flexible Payment Plans",
    description:
      "We understand big purchases take planning. Installment options make commissioning more accessible.",
  },
  {
    icon: "🎨",
    title: "Design Help Available",
    description:
      "Not sure about your ref sheet? We can help you refine your character's look before the build starts.",
  },
  {
    icon: "📄",
    title: "Safe, Transparent Process",
    description:
      "A clear agreement upfront means no surprises for either party — just trust and great results.",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you make full suits or only heads?",
    answer:
      "We make everything from individual heads and paws to full head-to-toe suits. You can commission individual parts or bundle them into a partial or full suit.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes! We offer flexible payment plans that let you pay over time during the build process. We'll work out a schedule that fits your budget during our initial discussion.",
  },
  {
    question: "Do I need a reference sheet?",
    answer:
      "A ref sheet is really helpful, but it's not required to get started. We can work from character art, written descriptions, or help you refine your design during our consultation.",
  },
  {
    question: "Can you help refine my design?",
    answer:
      "Absolutely. If you have a rough idea but no finalized design, we can discuss options and suggest features that will translate well into a physical suit.",
  },
  {
    question: "How long does a build usually take?",
    answer:
      "Build times vary depending on what's being made and current queue position. Heads typically take 6-10 weeks, partials and full suits can take 3-6 months. We'll give you a timeline estimate upfront.",
  },
  {
    question: "Do you offer partial suits?",
    answer:
      "Yes! Partials are one of our most popular options — typically a head, hand paws, feet paws, and tail all matched to the same character. They're great for cons and events.",
  },
  {
    question: "Can you match a specific expression or style?",
    answer:
      "Yes — we build to your vision. Whether you want a toony smile, a sly smirk, or a semi-realistic serious expression, we'll match the style you're after.",
  },
  {
    question: "What affects the final price?",
    answer:
      "Final pricing depends on character complexity, number of colors and markings, materials chosen, build type (toony vs. realistic), and any optional features like cooling fans or moving jaws.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/assets/generated/hero-fursuit.dim_900x900.png",
    alt: "Teal and pink fox fursuit head",
    category: "Heads",
    label: "Custom",
  },
  {
    id: "g2",
    src: "/assets/generated/gallery-collection.dim_1200x600.jpg",
    alt: "Fursuit parts collection",
    category: "Partials",
    label: "Popular",
  },
  {
    id: "g3",
    src: "/assets/generated/hero-fursuit.dim_900x900.png",
    alt: "Colorful dragon full suit",
    category: "Full Suits",
    label: "Made to Order",
  },
  {
    id: "g4",
    src: "/assets/generated/gallery-collection.dim_1200x600.jpg",
    alt: "Custom hand paws set",
    category: "Paws",
  },
  {
    id: "g5",
    src: "/assets/generated/hero-fursuit.dim_900x900.png",
    alt: "WIP fursuit head progress",
    category: "WIP",
  },
  {
    id: "g6",
    src: "/assets/generated/gallery-collection.dim_1200x600.jpg",
    alt: "Orange and white fox partial",
    category: "Partials",
    label: "Popular",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Commissions", href: "#commissions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
