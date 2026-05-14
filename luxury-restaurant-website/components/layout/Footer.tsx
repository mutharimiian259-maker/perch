'use client';

import Link from 'next/link';
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {BUSINESS_INFO.name.split(' ').slice(0, 2).join(' ')}
              <span className="text-gold">{' '}{BUSINESS_INFO.name.split(' ').slice(2).join(' ')}</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              {BUSINESS_INFO.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={BUSINESS_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-white/60 transition-colors hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-white/60 transition-colors hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                {BUSINESS_INFO.address}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Hours</h4>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Clock className="h-4 w-4" />
              {BUSINESS_INFO.hours}
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-green-400">We&apos;re Open Now</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-white/40">
              <span>★</span>
              <span>{BUSINESS_INFO.rating} on Google</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
