import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Menu } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Location } from '@/components/sections/Location';
import { ContactCTA } from '@/components/sections/ContactCTA';

import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

// ============================================
// HOME PAGE
// ============================================

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Menu */}
      <Menu />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Location */}
      <Location />

      {/* Final CTA */}
      <ContactCTA />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />
    </main>
  );
}
