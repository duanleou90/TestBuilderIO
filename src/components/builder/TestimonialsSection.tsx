'use client';

import { useEffect, useRef } from 'react';

interface TestimonialItem {
  quote: string;
  imageUrl: string;
  name: string;
  position: string;
}

interface TestimonialsSectionProps {
  supHeading?: string;
  heading?: string;
  testimonials?: TestimonialItem[];
}

export function TestimonialsSection({
  supHeading = 'Our Testimonials',
  heading = 'What parents say',
  testimonials = [
    {
      quote: 'Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam',
      imageUrl: '/images/dummy-img-400x400.jpg',
      name: 'Johnathan Doel',
      position: 'Businessman',
    },
    {
      quote: 'Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam',
      imageUrl: '/images/dummy-img-400x400.jpg',
      name: 'Johnathan Doel',
      position: 'CEO Buka Kreasi',
    },
  ],
}: TestimonialsSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Initialize Owl Carousel after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && carouselRef.current) {
      // Wait for jQuery and Owl Carousel to be available
      const initCarousel = () => {
        const $ = (window as any).jQuery || (window as any).$;
        if ($ && $.fn.owlCarousel) {
          const $carousel = $(carouselRef.current);
          // Destroy existing instance if any
          if ($carousel.data('owl.carousel')) {
            $carousel.trigger('destroy.owl.carousel');
          }
          // Initialize Owl Carousel
          $carousel.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
          });
        }
      };

      // Try to initialize, with retry if jQuery not loaded yet
      if ((window as any).jQuery) {
        initCarousel();
      } else {
        const timer = setTimeout(initCarousel, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [testimonials]);

  return (
    <div className="section">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="supheading text-center">{supHeading}</p>
              <h2 className="section-heading text-center mb-5">{heading}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-10 offset-md-1">
              <div className="text-center text-secondary mb-3">
                <i className="fa fa-quote-right fa-3x"></i>
              </div>
              
              {/* Carousel - initialized via useEffect */}
              <div ref={carouselRef} className="owl-carousel owl-theme">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="item">
                    <div className="rs-box-testimony">
                      <div className="quote-box">
                        <blockquote>{testimonial.quote}</blockquote>
                        <div className="media">
                          <img
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            className="rounded-circle"
                          />
                        </div>
                        <p className="quote-name">
                          {testimonial.name} <span>{testimonial.position}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const testimonialsSectionInfo = {
  name: 'Testimonials Section',
  inputs: [
    { name: 'supHeading', type: 'string', defaultValue: 'Our Testimonials' },
    { name: 'heading', type: 'string', defaultValue: 'What parents say' },
    {
      name: 'testimonials',
      type: 'list',
      defaultValue: [
        {
          quote: 'Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam',
          imageUrl: '/images/dummy-img-400x400.jpg',
          name: 'Johnathan Doel',
          position: 'Businessman',
        },
        {
          quote: 'Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam',
          imageUrl: '/images/dummy-img-400x400.jpg',
          name: 'Johnathan Doel',
          position: 'CEO Buka Kreasi',
        },
      ],
      subFields: [
        { name: 'quote', type: 'longText', required: true },
        { name: 'imageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], required: true },
        { name: 'name', type: 'string', required: true },
        { name: 'position', type: 'string' },
      ],
    },
  ],
};

export default TestimonialsSection;
