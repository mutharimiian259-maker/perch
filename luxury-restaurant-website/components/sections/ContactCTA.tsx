'use client';

import { motion } from 'framer-motion';
import { BUSINESS_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/lib/constants';

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal-dark py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Line */}
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />

          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready for an Unforgettable Experience?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/70">
            Join us at {BUSINESS_INFO.name} for an evening of exceptional dining,
            captivating music, and memories that last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.reservation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-lg font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve Your Table
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="transition-colors hover:text-gold"
            >
              {BUSINESS_INFO.phone}
            </a>
            <span>•</span>
            <span>{BUSINESS_INFO.address}</span>
            <span>•</span>
            <span>{BUSINESS_INFO.hours}</span>
          </div>

          {/* Decorative Line */}
          <div className="mx-auto mt-10 h-px w-16 bg-gold" />
        </motion.div>
      </div>
    </section>
  );
}
