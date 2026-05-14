import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ============================================
// CLASSNAME MERGE UTILITY
// ============================================

/**
 * Safely merges Tailwind classes with conditional support.
 *
 * Combines:
 * - clsx → conditional class handling
 * - tailwind-merge → Tailwind conflict resolution
 *
 * Example:
 * cn(
 *   'px-4 py-2',
 *   isActive && 'bg-gold',
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
