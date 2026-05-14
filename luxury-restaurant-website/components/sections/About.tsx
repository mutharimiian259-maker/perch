'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ABOUT_CONTENT, BUSINESS_INFO } from '@/lib/constants';

export function About() {
  return (
    <section id="about" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          title={ABOUT_CONTENT.title}
          subtitle={`Welcome to ${BUSINESS_INFO.name}`}
          light
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-pretty leading-relaxed text-white/70"
              >
                {paragraph}
              </p>
            ))}

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Elegant Dining', icon: '🍽️' },
                { label: 'Live Music', icon: '🎵' },
                { label: 'Premium Lounge', icon: '🛋️' },
                { label: 'Nightlife', icon: '🌙' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-xl" role="img" aria-label={feature.label}>
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '24/7', label: 'Hours Open' },
                { value: '4.3★', label: 'Google Rating' },
                { value: '100+', label: 'Menu Items' },
                { value: '∞', label: 'Memories Made' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-6 text-center"
                >
                  <div className="text-3xl font-bold text-gold md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
