'use client';

import { Builder } from '@builder.io/react';

// Import all custom components
import { Header, headerInfo } from './components/builder/Header';
import { PageBanner, pageBannerInfo } from './components/builder/PageBanner';
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

// Event page components
import { EventPageLayout, eventPageLayoutInfo } from './components/builder/EventPageLayout';
import { EventHeader, eventHeaderInfo } from './components/builder/EventHeader';
import { EventSidebar, eventSidebarInfo } from './components/builder/EventSidebar';
import { EventTextBlock, eventTextBlockInfo } from './components/builder/EventTextBlock';
import { EventQuote, eventQuoteInfo } from './components/builder/EventQuote';
import { EventHighlight, eventHighlightInfo } from './components/builder/EventHighlight';
import { EventAccordion, eventAccordionInfo } from './components/builder/EventAccordion';

// Only register components on the client side
if (typeof window !== 'undefined') {
  // Register all custom components with Builder.io (Gen 1 pattern)
  Builder.registerComponent(Header, headerInfo);
  Builder.registerComponent(PageBanner, pageBannerInfo);
  Builder.registerComponent(HeroBanner, heroBannerInfo);
  Builder.registerComponent(FeatureBoxes, featureBoxesInfo);
  Builder.registerComponent(WelcomeSection, welcomeSectionInfo);
  Builder.registerComponent(FunFacts, funFactsInfo);
  Builder.registerComponent(ClassesSection, classesSectionInfo);
  Builder.registerComponent(WhyChooseUs, whyChooseUsInfo);
  Builder.registerComponent(GallerySection, gallerySectionInfo);
  Builder.registerComponent(EventsSection, eventsSectionInfo);
  Builder.registerComponent(TestimonialsSection, testimonialsSectionInfo);
  Builder.registerComponent(CTASection, ctaSectionInfo);
  Builder.registerComponent(Footer, footerInfo);

  // Event page components
  Builder.registerComponent(EventPageLayout, eventPageLayoutInfo);
  Builder.registerComponent(EventHeader, eventHeaderInfo);
  Builder.registerComponent(EventSidebar, eventSidebarInfo);
  Builder.registerComponent(EventTextBlock, eventTextBlockInfo);
  Builder.registerComponent(EventQuote, eventQuoteInfo);
  Builder.registerComponent(EventHighlight, eventHighlightInfo);
  Builder.registerComponent(EventAccordion, eventAccordionInfo);
}
