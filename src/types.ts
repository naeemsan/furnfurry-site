export enum CommissionType {
  Head = "Head",
  HandPaws = "Hand Paws",
  FeetPaws = "Feet Paws",
  Tail = "Tail",
  Partial = "Partial",
  FullSuit = "Full Suit",
}

export interface PricingTier {
  type: CommissionType;
  startingAt: number;
  description: string;
  popular?: boolean;
  emoji: string;
}

export interface CommissionCard {
  type: CommissionType;
  title: string;
  description: string;
  features: string[];
  emoji: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  label?: string;
}

export type GalleryCategory =
  | "All"
  | "Heads"
  | "Paws"
  | "Partials"
  | "Full Suits"
  | "WIP";

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface FeaturePoint {
  icon: string;
  title: string;
  description: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}
