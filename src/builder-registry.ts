'use client';

import { type RegisteredComponent } from '@builder.io/sdk-react';

// Import all custom components
import { Header, headerInfo } from './components/builder/Header';
import { HeroBanner, heroBannerInfo } from './components/builder/HeroBanner';
import { FeatureBoxes, featureBoxesInfo } from './components/builder/FeatureBoxes';
import { WelcomeSection, welcomeSectionInfo } from './components/builder/WelcomeSection';
import { FunFacts, funFactsInfo } from './components/builder/FunFacts';
import { ClassesSection, classesSectionInfo } from './components/builder/ClassesSection';
import { WhyChooseUs, whyChooseUsInfo } from './components/builder/WhyChooseUs';
import { GallerySection, gallerySectionInfo } from './components/builder/GallerySection';
import { EventsSection, eventsSectionInfo } from './components/builder/EventsSection';
import { TestimonialsSection, testimonialsSectionInfo } from './components/builder/TestimonialsSection';
import { CTASection, ctaSectionInfo } from './components/builder/CTASection';
import { Footer, footerInfo } from './components/builder/Footer';

// Define custom components for Builder.io
export const customComponents: RegisteredComponent[] = [
  {
    component: Header,
    ...headerInfo,
  },
  {
    component: HeroBanner,
    ...heroBannerInfo,
  },
  {
    component: FeatureBoxes,
    ...featureBoxesInfo,
  },
  {
    component: WelcomeSection,
    ...welcomeSectionInfo,
  },
  {
    component: FunFacts,
    ...funFactsInfo,
  },
  {
    component: ClassesSection,
    ...classesSectionInfo,
  },
  {
    component: WhyChooseUs,
    ...whyChooseUsInfo,
  },
  {
    component: GallerySection,
    ...gallerySectionInfo,
  },
  {
    component: EventsSection,
    ...eventsSectionInfo,
  },
  {
    component: TestimonialsSection,
    ...testimonialsSectionInfo,
  },
  {
    component: CTASection,
    ...ctaSectionInfo,
  },
  {
    component: Footer,
    ...footerInfo,
  },
];
