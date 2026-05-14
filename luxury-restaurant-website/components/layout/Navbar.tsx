'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import {
  BUSINESS_INFO,
  NAV_LINKS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '@/lib/constants';

// ============================================
// NAVBAR COMPONENT
// ============================================

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  const brandParts =
    BUSINESS_INFO.name.split(' ');

  const primaryBrand = brandParts
    .slice(0, 2)
    .join(' ');

  const accentBrand = brandParts
    .slice(2)
    .join(' ');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* ====================================
            LOGO
        ==================================== */}

        <Link
          href="#home"
          className="flex items-center gap-2"
        >
          <span className="text-xl font-bold tracking-wide text-white md:text-2xl">
            {primaryBrand}

            {accentBrand && (
              <span className="text-gold">
                {' '}
                {accentBrand}
              </span>
            )}
          </span>
        </Link>

        {/* ====================================
            DESKTOP NAVIGATION
        ==================================== */}

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={getWhatsAppUrl(
              WHATSAPP_MESSAGES.reservation
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light"
          >
            Reserve Now
          </a>
        </div>

        {/* ====================================
            MOBILE BUTTON
        ==================================== */}

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* ====================================
          MOBILE MENU
      ==================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="overflow-hidden bg-charcoal/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="text-lg font-medium text-white/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={getWhatsAppUrl(
                  WHATSAPP_MESSAGES.reservation
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gold px-6 py-3 text-center font-semibold text-charcoal transition-all hover:bg-gold-light"
              >
                Reserve Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
