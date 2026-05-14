'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  HERO_CONTENT,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '@/lib/constants';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_CONTENT.backgroundImage}
          alt="The Black Perch Meru luxury restaurant interior"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-charcoal/90" />

        {/* Luxury Accent Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.12),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-28 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="w-full"
        >
          {/* Decorative Line */}
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />

          {/* Main Headline */}
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            {HERO_CONTENT.headline}
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            {HERO_CONTENT.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.reservation)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reserve a table on WhatsApp"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-charcoal transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 md:text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {HERO_CONTENT.ctaText}

              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            <a
              href="#menu"
              aria-label="View restaurant menu"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-gold hover:text-gold md:text-lg"
            >
              View Menu
            </a>
          </div>

          {/* Decorative Line */}
          <div className="mx-auto mt-12 h-px w-16 bg-gold" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
