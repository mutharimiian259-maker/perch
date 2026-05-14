import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import {
  SEO_DATA,
  BUSINESS_INFO,
  INTERNAL_SYSTEM,
} from '@/lib/constants';

import './globals.css';

// ============================================
// FONT CONFIGURATION
// ============================================

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  title: SEO_DATA.title,

  description: SEO_DATA.description,

  keywords: SEO_DATA.keywords,

  generator: INTERNAL_SYSTEM.framework,

  applicationName: BUSINESS_INFO.name,

  authors: [
    {
      name: BUSINESS_INFO.name,
    },
  ],

  creator: BUSINESS_INFO.name,

  publisher: BUSINESS_INFO.name,

  metadataBase: new URL(
    SEO_DATA.canonicalUrl
  ),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',

    locale: 'en_KE',

    url: SEO_DATA.canonicalUrl,

    title: SEO_DATA.title,

    description: SEO_DATA.description,

    siteName: BUSINESS_INFO.name,

    images: [
      {
        url: SEO_DATA.ogImage,

        width: 1200,

        height: 630,

        alt: `${BUSINESS_INFO.name} - Luxury Restaurant & Lounge`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: SEO_DATA.title,

    description: SEO_DATA.description,

    images: [SEO_DATA.ogImage],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      'max-video-preview': -1,

      'max-image-preview': 'large',

      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',

        media:
          '(prefers-color-scheme: light)',
      },

      {
        url: '/icon-dark-32x32.png',

        media:
          '(prefers-color-scheme: dark)',
      },

      {
        url: '/icon.svg',

        type: 'image/svg+xml',
      },
    ],

    apple: '/apple-icon.png',
  },
};

// ============================================
// VIEWPORT
// ============================================

export const viewport: Viewport = {
  themeColor: '#0A0A0A',

  width: 'device-width',

  initialScale: 1,

  maximumScale: 5,
};

// ============================================
// ROOT LAYOUT
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}

        {process.env.NODE_ENV ===
          'production' && <Analytics />}
      </body>
    </html>
  );
}
