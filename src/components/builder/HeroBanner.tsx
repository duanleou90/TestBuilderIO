'use client';

import { useState, useEffect } from 'react';

interface SlideItem {
  imageUrl: string;
  supHeading: string;
  heading: string;
  buttonText: string;
  buttonUrl: string;
}

interface HeroBannerProps {
  slides?: SlideItem[];
}

export function HeroBanner({
  slides = [
    {
      imageUrl: '/images/dummy-img-1920x900.jpg',
      supHeading: 'Welcome to Kids',
      heading: 'Best Kindergarten at California',
      buttonText: 'LEARN MORE',
      buttonUrl: '#',
    },
    {
      imageUrl: '/images/dummy-img-1920x900-2.jpg',
      supHeading: 'Welcome to Kids',
      heading: 'Best Kindergarten at California',
      buttonText: 'LEARN MORE',
      buttonUrl: '#',
    },
    {
      imageUrl: '/images/dummy-img-1920x900-3.jpg',
      supHeading: 'Welcome to Kids',
      heading: 'Best Kindergarten at California',
      buttonText: 'LEARN MORE',
      buttonUrl: '#',
    },
  ],
}: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="banner" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="banner-slider" style={{ position: 'relative', height: '600px' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="banner-slide"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
            }}
          >
            <div className="overlay-bg" style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}></div>
            <div 
              className="container d-flex align-items-center"
              style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
              }}
            >
              <div className="wrap-caption" style={{
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-in-out',
              }}>
                <h5 className="caption-supheading" style={{
                  color: '#fff',
                  fontSize: '1.5rem',
                  fontFamily: "'Pacifico', cursive",
                  marginBottom: '1rem',
                }}>{slide.supHeading}</h5>
                <h1 className="caption-heading" style={{
                  color: '#fff',
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                }}>{slide.heading}</h1>
                <a href={slide.buttonUrl} className="btn btn-secondary">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255,255,255,0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Previous slide"
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255,255,255,0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Next slide"
      >
        <i className="fa fa-chevron-right"></i>
      </button>
      {/* Dots Navigation */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '10px',
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: currentSlide === index ? '#ff6b6b' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export const heroBannerInfo = {
  name: 'Hero Banner',
  inputs: [
    {
      name: 'slides',
      type: 'list',
      subFields: [
        { name: 'imageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], required: true },
        { name: 'supHeading', type: 'string', defaultValue: 'Welcome to Kids' },
        { name: 'heading', type: 'string', defaultValue: 'Best Kindergarten at California' },
        { name: 'buttonText', type: 'string', defaultValue: 'LEARN MORE' },
        { name: 'buttonUrl', type: 'url', defaultValue: '#' },
      ],
    },
  ],
};

export default HeroBanner;
