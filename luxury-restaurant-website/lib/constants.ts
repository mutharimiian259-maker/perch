import type {
  BusinessInfo,
  MenuItem,
  MenuCategoryInfo,
  Testimonial,
  GalleryImage,
  NavLink,
  SEOData,
} from './types';

// ============================================
// BUSINESS INFORMATION - SINGLE SOURCE OF TRUTH
// ============================================

export const BUSINESS_INFO: BusinessInfo = {
  name: 'The Black Perch Meru',
  tagline: 'Where Elegance Meets the Night',
  description:
    'A premium ambience-focused hospitality experience blending elegant dining, nightlife energy, music, and memorable social experiences in the heart of Meru, Kenya.',
  phone: '+254118688226',
  whatsappNumber: '254118688226',
  address: '3J3R+PHW, Meru, Kenya',
  googleMapsUrl: 'https://maps.google.com/?q=3J3R+PHW,+Meru,+Kenya',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8156!2d37.6499!3d0.0475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDInNTEuMCJOIDM3wrAzOCc1OS42IkU!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske',
  rating: 4.3,
  hours: 'Open 24 Hours',
  socialLinks: {
    instagram: 'https://www.instagram.com/the_blackperch',
    facebook: 'https://www.facebook.com/profile.php?id=100054397995777',
  },
};

// ============================================
// SEO DATA
// ============================================

export const SEO_DATA: SEOData = {
  title: `${BUSINESS_INFO.name} | Luxury Restaurant & Lounge in Meru, Kenya`,
  description: `Experience premium dining and nightlife at ${BUSINESS_INFO.name}. ${BUSINESS_INFO.description}`,
  keywords: [
    'luxury restaurant Meru',
    'fine dining Kenya',
    'nightlife Meru',
    'lounge Meru Kenya',
    'The Black Perch',
    'premium restaurant',
    'elegant dining',
    'nightclub Meru',
  ],
  ogImage: '/gallery/hero.jpg',
  canonicalUrl: 'https://theblackperchmeru.com',
};

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Location', href: '#location' },
];

// ============================================
// WHATSAPP MESSAGES
// ============================================

export const WHATSAPP_MESSAGES = {
  reservation: `Hello! I'd like to make a reservation at ${BUSINESS_INFO.name}. Please assist me with availability.`,
  inquiry: `Hello! I have an inquiry about ${BUSINESS_INFO.name}. Could you please help me?`,
  general: `Hello ${BUSINESS_INFO.name}!`,
};

export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// ============================================
// MENU CATEGORIES
// ============================================

export const MENU_CATEGORIES: MenuCategoryInfo[] = [
  {
    id: 'starters',
    name: 'Starters',
    description: 'Begin your culinary journey',
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Signature dishes crafted with excellence',
  },
  {
    id: 'drinks',
    name: 'Drinks & Cocktails',
    description: 'Premium beverages and signature mixes',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to remember',
  },
];

// ============================================
// MENU ITEMS
// ============================================

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Grilled Prawns',
    description: 'Succulent prawns with garlic butter and herb garnish',
    price: 'KES 1,200',
    category: 'starters',
  },
  {
    id: 's2',
    name: 'Beef Carpaccio',
    description: 'Thinly sliced beef with arugula and parmesan',
    price: 'KES 950',
    category: 'starters',
  },
  {
    id: 's3',
    name: 'Soup of the Day',
    description: 'Chef\'s special daily preparation',
    price: 'KES 450',
    category: 'starters',
  },
  // Mains
  {
    id: 'm1',
    name: 'Prime Ribeye Steak',
    description: 'Aged beef with seasonal vegetables and red wine jus',
    price: 'KES 2,800',
    category: 'mains',
  },
  {
    id: 'm2',
    name: 'Grilled Tilapia',
    description: 'Fresh lake fish with lemon herb sauce',
    price: 'KES 1,600',
    category: 'mains',
  },
  {
    id: 'm3',
    name: 'Lamb Chops',
    description: 'Rosemary-crusted lamb with mint sauce',
    price: 'KES 2,400',
    category: 'mains',
  },
  // Drinks
  {
    id: 'd1',
    name: 'Black Perch Signature',
    description: 'Our house special cocktail blend',
    price: 'KES 800',
    category: 'drinks',
  },
  {
    id: 'd2',
    name: 'Premium Whisky Selection',
    description: 'Curated single malts and blends',
    price: 'KES 600+',
    category: 'drinks',
  },
  {
    id: 'd3',
    name: 'Champagne & Wines',
    description: 'Fine selection of bubbles and wines',
    price: 'KES 500+',
    category: 'drinks',
  },
  // Desserts
  {
    id: 'ds1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with vanilla ice cream',
    price: 'KES 650',
    category: 'desserts',
  },
  {
    id: 'ds2',
    name: 'Crème Brûlée',
    description: 'Classic vanilla custard with caramelized sugar',
    price: 'KES 550',
    category: 'desserts',
  },
];

// ============================================
// TESTIMONIALS (Based on verified review sentiments)
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'James K.',
    text: 'The ambience here is absolutely incredible. Perfect for a special evening out. The atmosphere just hits different.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sarah M.',
    text: 'Amazing music selection and the nightlife experience is unmatched in Meru. This is the place to be!',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Peter N.',
    text: 'Had a business lunch meeting here. The service was impeccable and the food was outstanding. Highly recommend.',
    rating: 4,
  },
  {
    id: 't4',
    name: 'Grace W.',
    text: 'A truly memorable social experience. The staff are professional and the vibe is premium. Love this place!',
    rating: 5,
  },
];

// ============================================
// GALLERY IMAGES
// ============================================

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: '/gallery/dining.jpg',
    alt: 'Elegant dining area at The Black Perch Meru',
    category: 'dining',
  },
  {
    id: 'g2',
    src: '/gallery/lounge.jpg',
    alt: 'Premium lounge seating at The Black Perch Meru',
    category: 'lounge',
  },
  {
    id: 'g3',
    src: '/gallery/nightlife.jpg',
    alt: 'Vibrant nightlife atmosphere at The Black Perch Meru',
    category: 'nightlife',
  },
  {
    id: 'g4',
    src: '/gallery/ambience.jpg',
    alt: 'Luxurious ambience at The Black Perch Meru',
    category: 'ambience',
  },
];

// ============================================
// HERO CONTENT
// ============================================

export const HERO_CONTENT = {
  headline: 'Where Elegance Meets the Night',
  subheadline: 'Experience premium dining, vibrant nightlife, and unforgettable moments',
  ctaText: 'Reserve Your Table',
  backgroundImage: '/gallery/hero.jpg',
};

// ============================================
// ABOUT CONTENT
// ============================================

export const ABOUT_CONTENT = {
  title: 'A Destination Unlike Any Other',
  paragraphs: [
    `Welcome to ${BUSINESS_INFO.name}, Meru\'s premier destination for those who appreciate the finer things in life. We\'ve crafted an experience that seamlessly blends elegant dining with the energy of nightlife.`,
    'From intimate lunch meetings to vibrant evening celebrations, our space transforms to match your mood. Our carefully curated ambience, exceptional music, and attentive service create memories that last long after the night ends.',
    'Whether you\'re here for our exquisite cuisine, signature cocktails, or simply to soak in the atmosphere, every visit promises something extraordinary.',
  ],
};

// ============================================
// LOCATION CONTENT
// ============================================

export const LOCATION_CONTENT = {
  title: 'Find Us',
  subtitle: 'Located in the heart of Meru, Kenya',
  directions: 'Easy to find and always ready to welcome you',
};
