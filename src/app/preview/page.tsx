'use client';

/**
 * Preview Page - Shows all components with default values
 * Use this page to preview how your components look before publishing to Builder.io
 */

import { Header } from '@/components/builder/Header';
import { HeroBanner } from '@/components/builder/HeroBanner';
import { FeatureBoxes } from '@/components/builder/FeatureBoxes';
import { WelcomeSection } from '@/components/builder/WelcomeSection';
import { FunFacts } from '@/components/builder/FunFacts';
import { ClassesSection } from '@/components/builder/ClassesSection';
import { WhyChooseUs } from '@/components/builder/WhyChooseUs';
import { GallerySection } from '@/components/builder/GallerySection';
import { EventsSection } from '@/components/builder/EventsSection';
import { TestimonialsSection } from '@/components/builder/TestimonialsSection';
import { CTASection } from '@/components/builder/CTASection';
import { Footer } from '@/components/builder/Footer';

export default function PreviewPage() {
  return (
    <>
      {/* Back to Top */}
      <a href="#0" className="cd-top cd-is-visible cd-fade-out">Top</a>

      {/* Header with Topbar and Navbar */}
      <Header />

      {/* Hero Banner / Slider */}
      <HeroBanner />

      {/* Feature Boxes / Services */}
      <FeatureBoxes />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Fun Facts / Statistics */}
      <FunFacts />

      {/* Classes Section */}
      <ClassesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery Section */}
      <GallerySection />

      {/* Events Section */}
      <EventsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}

