'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/constants';
import type { MenuCategory } from '@/lib/types';

export function Menu() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>('starters');

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="menu"
      className="bg-charcoal-light py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          title="Our Menu"
          subtitle="Discover our carefully curated selection of dishes and beverages"
          light
        />

        {/* Category Tabs */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Menu Categories"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`menu-panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`min-h-[48px] rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
                  isActive
                    ? 'bg-gold text-charcoal shadow-lg shadow-gold/20'
                    : 'border border-white/20 text-white/70 hover:border-gold hover:text-gold'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`menu-panel-${activeCategory}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="group rounded-2xl border border-white/10 bg-charcoal p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-gold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full rounded-2xl border border-dashed border-white/10 py-16 text-center">
                <p className="text-white/50">
                  Menu items coming soon.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <p className="mt-10 text-center text-sm leading-relaxed text-white/40">
          Prices are subject to change. Contact us directly for
          special reservations, exclusive dining experiences, and
          the complete menu selection.
        </p>
      </div>
    </section>
  );
}
