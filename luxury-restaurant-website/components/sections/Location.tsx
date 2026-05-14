'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  BUSINESS_INFO,
  LOCATION_CONTENT,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from '@/lib/constants';

export function Location() {
  return (
    <section
      id="location"
      className="bg-charcoal py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          title={LOCATION_CONTENT.title}
          subtitle={LOCATION_CONTENT.subtitle}
          light
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light shadow-2xl lg:min-h-[500px]"
          >
            <iframe
              src={BUSINESS_INFO.googleMapsEmbed}
              title={`${BUSINESS_INFO.name} Google Maps Location`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full"
              style={{
                border: 0,
                filter:
                  'grayscale(0.7) contrast(1.05) brightness(0.9)',
              }}
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5">
              {/* Address */}
              <div className="rounded-2xl border border-white/10 bg-charcoal-light p-5 transition-colors hover:border-gold/30">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <MapPin
                      className="h-6 w-6 text-gold"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Address
                    </h3>

                    <p className="mt-1 leading-relaxed text-white/60">
                      {BUSINESS_INFO.address}
                    </p>

                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                      aria-label="Open Google Maps directions"
                    >
                      <Navigation
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-white/10 bg-charcoal-light p-5 transition-colors hover:border-gold/30">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Phone
                      className="h-6 w-6 text-gold"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Phone
                    </h3>

                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="mt-1 inline-block text-white/60 transition-colors hover:text-gold"
                      aria-label={`Call ${BUSINESS_INFO.name}`}
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-white/10 bg-charcoal-light p-5 transition-colors hover:border-gold/30">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Clock
                      className="h-6 w-6 text-gold"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Operating Hours
                    </h3>

                    <p className="mt-1 text-white/60">
                      {BUSINESS_INFO.hours}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                      <span className="text-sm text-green-400">
                        Open Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={getWhatsAppUrl(
                  WHATSAPP_MESSAGES.reservation
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reserve a table via WhatsApp"
                className="flex-1 rounded-full bg-gold px-6 py-4 text-center font-semibold text-charcoal transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Reserve via WhatsApp
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                aria-label={`Call ${BUSINESS_INFO.name}`}
                className="flex-1 rounded-full border border-white/20 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
