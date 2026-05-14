'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TESTIMONIALS, BUSINESS_INFO } from '@/lib/constants';

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-charcoal-light py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          title="What Our Guests Say"
          subtitle={`Real experiences from ${BUSINESS_INFO.name} visitors`}
          light
        />

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal p-6 transition-all duration-300 hover:border-gold/20 hover:bg-charcoal-light/80"
            >
              {/* Quote Icon */}
              <Quote
                className="mb-4 h-8 w-8 text-gold/30"
                aria-hidden="true"
              />

              {/* Rating */}
              <div
                className="mb-4 flex gap-1"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.id}-${i}`}
                    className={`h-4 w-4 transition-colors ${
                      i < testimonial.rating
                        ? 'fill-gold text-gold'
                        : 'fill-white/10 text-white/10'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="mb-6 flex-1 text-pretty leading-relaxed text-white/70">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-auto">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-white/50">
                  Verified Guest
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-charcoal px-6 py-3">
            <Star
              className="h-5 w-5 fill-gold text-gold"
              aria-hidden="true"
            />
            <span className="font-semibold text-white">
              {BUSINESS_INFO.rating}
            </span>
            <span className="text-white/60">
              on Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
