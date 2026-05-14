'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/constants';
import type { MenuCategory } from '@/lib/types';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="bg-charcoal-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          title="Our Menu"
          subtitle="Discover our carefully curated selection of dishes and beverages"
          light
        />

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gold text-charcoal'
                  : 'border border-white/20 text-white/70 hover:border-gold hover:text-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group rounded-2xl border border-white/10 bg-charcoal p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <p className="mt-10 text-center text-sm text-white/40">
          Prices are subject to change. Please contact us for the full menu.
        </p>
      </div>
    </section>
  );
}
