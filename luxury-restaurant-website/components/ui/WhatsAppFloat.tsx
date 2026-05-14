'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from '@/lib/constants';

export function WhatsAppFloat() {
  return (
    <motion.a
      href={getWhatsAppUrl(WHATSAPP_MESSAGES.reservation)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact ${BUSINESS_INFO.name} on WhatsApp`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </motion.a>
  );
}
