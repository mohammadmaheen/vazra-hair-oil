export interface Product {
  id: string;
  name: string;
  subtitle: string;
  volume: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  isCombo?: boolean;
  badge?: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Ingredient {
  name: string;
  botanicalName?: string;
  commonName?: string;
  image?: string;
  shortRole: string;
  traditionalRole: string;
  icon: string;
  badgeColor?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  verified: boolean;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
