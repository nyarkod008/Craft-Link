import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Your newly supplied high-quality slideshow images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';

const HeroSlideshow = () => {
  const settings = {
    dots: false,           // Hide navigation dots
    infinite: true,        // Loop continuously
    speed: 800,            // Fade transition duration: 0.8 seconds
    fade: true,            // Transition effect: fade
    autoplay: true,        // Automatically transition between slides
    autoplaySpeed: 4000,   // Every 4 seconds
    pauseOnHover: true,    // Pause slideshow on hover
    arrows: false,         // Hide left/right arrow controls
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)' // Extremely smooth CSS transitions
  };

  const slides = [
    { id: 1, image: slide1, alt: 'Hero Slide 1' },
    { id: 2, image: slide2, alt: 'Hero Slide 2' },
    { id: 3, image: slide3, alt: 'Hero Slide 3' },
    { id: 4, image: slide4, alt: 'Hero Slide 4' },
  ];

  return (
    <div className="hero-slideshow-container" style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide-wrapper" style={{ outline: 'none' }}>
            <img 
              src={slide.image} 
              alt={slide.alt} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Inline styles for slider overrides to keep the code localized and clean */}
      <style>{`
        .hero-slideshow-container .slick-slider, 
        .hero-slideshow-container .slick-list,
        .hero-slideshow-container .slick-track {
          height: 100%;
        }
        
        /* Navigation Dots Styling */
        .hero-slideshow-container .slick-dots {
          bottom: 30px;
          z-index: 20;
        }
        .hero-slideshow-container .slick-dots li button:before {
          color: white;
          font-size: 14px;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .hero-slideshow-container .slick-dots li.slick-active button:before,
        .hero-slideshow-container .slick-dots li:hover button:before {
          color: white;
          opacity: 1;
        }

        /* Arrows Styling */
        .hero-slideshow-container .slick-prev {
          left: 40px;
          z-index: 20;
          width: 40px;
          height: 40px;
        }
        .hero-slideshow-container .slick-next {
          right: 40px;
          z-index: 20;
          width: 40px;
          height: 40px;
        }
        .hero-slideshow-container .slick-prev:before, 
        .hero-slideshow-container .slick-next:before {
          font-size: 40px;
          opacity: 0.7;
          transition: opacity 0.3s ease;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .hero-slideshow-container .slick-prev:hover:before, 
        .hero-slideshow-container .slick-next:hover:before {
          opacity: 1;
        }

        /* Responsive height adjustments */
        @media (max-width: 768px) {
          .hero-slideshow-container .slick-prev { left: 10px; }
          .hero-slideshow-container .slick-next { right: 10px; }
          .hero-slideshow-container .slick-prev:before, 
          .hero-slideshow-container .slick-next:before { font-size: 30px; }
        }
      `}</style>
    </div>
  );
};

export default HeroSlideshow;
