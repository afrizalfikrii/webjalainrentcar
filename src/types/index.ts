export type CarCategory =
  | "Semua"
  | "City Car"
  | "MPV Keluarga"
  | "Premium"
  | "Van Wisata";

export type CarKey =
  | "innova"
  | "avanza"
  | "calya"
  | "agya"
  | "hiace"
  | "elf"
  | "hiace-premio";

export interface CarSpec {
  key: CarKey;
  name: string;
  shortName: string;
  title: string;
  badge: string;
  tagline: string;
  shortDesc: string;
  category: Exclude<CarCategory, "Semua">;
  colorTag: string;
  colorTagHighlight?: boolean;
  price: string;
  shortPrice: string;
  unit: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  highlights?: { icon: string; label: string }[];
  engine: string[];
  trans: string[];
  fuel: string[];
  dim: string[];
  safety: string[];
}

export interface StepItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  badgeIcon: string;
  badgeText: string;
  numberBgClass: string;
  footerBgClass: string;
}

export interface TestimonialItem {
  initials: string;
  name: string;
  role: string;
  quote: string;
  avatarBgClass: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingSearchState {
  location: string;
  startDate: string;
  endDate: string;
  serviceType: string;
}

