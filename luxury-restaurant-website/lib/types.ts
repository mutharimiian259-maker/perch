// Type definitions for The Black Perch luxury restaurant template

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  rating: number;
  hours: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
}

export type MenuCategory = 'starters' | 'mains' | 'drinks' | 'desserts';

export interface MenuCategoryInfo {
  id: MenuCategory;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'dining' | 'lounge' | 'nightlife' | 'ambience';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
}
