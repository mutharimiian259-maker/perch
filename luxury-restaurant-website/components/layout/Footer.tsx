'use client';

import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';

import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

// ============================================
// FOOTER COMPONENT
// ============================================

export function Footer() {
  const currentYear =
    new Date().getFullYear();

  const brandParts =
    BUSINESS_INFO.name.split(' ');

  const primaryBrand = brandParts
    .slice(0, 2)
    .join(' ');

  const accentBrand = brandParts
    .slice(2)
    .join(' ');

  return (
    <footer className="border-t border-white/10 bg-charcoal-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* ====================================
              BRAND
          ==================================== */}

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {primaryBrand}

              {accentBrand && (
                <span className="text-gold">
                  {' '}
                  {accentBrand}
                </span>
              )}
            </h3>

            <p className="text-sm leading-relaxed text-white/60">
              {BUSINESS_INFO.tagline}
            </p>

            {/* SOCIAL LINKS */}

            <div className="flex gap-4 pt-2">
              <a
                href={
                  BUSINESS_INFO.socialLinks
                    .instagram
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href={
                  BUSINESS_INFO.socialLinks
                    .facebook
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ====================================
              QUICK LINKS
          ==================================== */}

          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ====================================
              CONTACT
          ==================================== */}

          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.phone}
              </a>

              <a
                href={
                  BUSINESS_INFO.googleMapsUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {BUSINESS_INFO.address}
              </a>
            </div>
          </div>

          {/* ====================================
              HOURS
          ==================================== */}

          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              Hours
            </h4>

            <div className="flex items-center gap-2 text-sm text-white/60">
              <Clock className="h-4 w-4" />
              {BUSINESS_INFO.hours}
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-green-400">
                Open Now
              </span>
            </div>
          </div>
        </div>

        {/* ====================================
            BOTTOM BAR
        ==================================== */}

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              © {currentYear}{' '}
              {BUSINESS_INFO.name}. All rights
              reserved.
            </p>

            <div className="flex items-center gap-1 text-sm text-white/40">
              <span>★</span>
              <span>
                {BUSINESS_INFO.rating} on Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
