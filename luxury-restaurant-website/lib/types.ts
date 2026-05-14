// ============================================
// TYPE DEFINITIONS
// The Black Perch Luxury Restaurant Template
// ============================================

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

// ============================================
// SOCIAL LINKS
// ============================================

export interface SocialLinks {
  instagram: string;

  facebook: string;
}

// ============================================
// MENU TYPES
// ============================================

export type MenuCategory =
  | 'starters'
  | 'mains'
  | 'drinks'
  | 'desserts';

export interface MenuItem {
  id: string;

  name: string;

  description: string;

  price: string;

  category: MenuCategory;
}

export interface MenuCategoryInfo {
  id: MenuCategory;

  name: string;

  description: string;
}

// ============================================
// TESTIMONIALS
// ============================================

export interface Testimonial {
  id: string;

  name: string;

  text: string;

  rating: number;
}

// ============================================
// GALLERY
// ============================================

export type GalleryCategory =
  | 'dining'
  | 'lounge'
  | 'nightlife'
  | 'ambience';

export interface GalleryImage {
  id: string;

  src: string;

  alt: string;

  category: GalleryCategory;
}

// ============================================
// NAVIGATION
// ============================================

export interface NavLink {
  label: string;

  href: string;
}

// ============================================
// SEO
// ============================================

export interface SEOData {
  title: string;

  description: string;

  keywords: string[];

  ogImage: string;

  canonicalUrl: string;
}

// ============================================
// INTERNAL SYSTEM
// ============================================

export interface InternalSystem {
  siteId: string;

  templateVersion: string;

  framework: string;
}

// ============================================
// THEME
// ============================================

export interface ThemeColors {
  background: string;

  surface: string;

  primary: string;

  text: string;

  mutedText: string;

  border: string;
}

export interface ThemeRadius {
  card: string;

  button: string;
}

export interface ThemeConfig {
  colors: ThemeColors;

  radius: ThemeRadius;
}

// ============================================
// CTA
// ============================================

export interface CTAConfig {
  primary: string;

  secondary: string;

  whatsapp: string;

  call: string;
}

// ============================================
// IMAGE CONFIG
// ============================================

export interface ImagePriorityConfig {
  priority: boolean;
}

export interface ImageConfig {
  hero: ImagePriorityConfig;

  gallery: ImagePriorityConfig;
}

// ============================================
// COPYRIGHT
// ============================================

export interface CopyrightConfig {
  owner: string;

  year: string;

  license: string;
}
