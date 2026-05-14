'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  alignment = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? 'text-white/70' : 'text-muted-foreground'
          } ${alignment === 'center' ? '' : 'mx-0'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 bg-gold ${
          alignment === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
