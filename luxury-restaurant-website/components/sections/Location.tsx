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
    <section id="location" className="bg-charcoal py-20 md:py-28">
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:h-full lg:min-h-[400px]"
          >
            <iframe
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${BUSINESS_INFO.name} location map`}
              className="absolute inset-0"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-charcoal-light p-5">
                <div className="rounded-full bg-gold/10 p-3">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="mt-1 text-white/60">{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-gold hover:underline"
                  >
                    <Navigation className="h-3 w-3" />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-charcoal-light p-5">
                <div className="rounded-full bg-gold/10 p-3">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="mt-1 block text-white/60 transition-colors hover:text-gold"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-charcoal-light p-5">
                <div className="rounded-full bg-gold/10 p-3">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Hours</h3>
                  <p className="mt-1 text-white/60">{BUSINESS_INFO.hours}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-green-400">
                      We&apos;re Open Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.reservation)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-gold px-6 py-3.5 text-center font-semibold text-charcoal transition-all hover:bg-gold-light"
              >
                Reserve via WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 rounded-full border border-white/20 px-6 py-3.5 text-center font-semibold text-white transition-all hover:border-gold hover:text-gold"
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
