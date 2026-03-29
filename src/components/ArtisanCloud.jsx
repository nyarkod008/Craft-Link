import React from "react";
import { svgPlaceholder } from "../utils/svgPlaceholder.js";

const profile1 = svgPlaceholder("Artisan Profile 1");
const profile2 = svgPlaceholder("Artisan Profile 2");
const profile3 = svgPlaceholder("Artisan Profile 3");
const profile4 = svgPlaceholder("Artisan Profile 4");
const profile5 = svgPlaceholder("Artisan Profile 5");

const ArtisanCloud = () => {
  const avatars = [
    { src: profile1, size: '80px', top: '20%', left: '10%', delay: '0s' },
    { src: profile2, size: '110px', top: '10%', left: '30%', delay: '0.2s' },
    { src: profile3, size: '140px', top: '0%', left: '50%', delay: '0.4s' },
    { src: profile4, size: '100px', top: '20%', left: '70%', delay: '0.6s' },
    { src: profile5, size: '90px', top: '30%', left: '85%', delay: '0.8s' },
  ];

  return (
    <section className="artisan-cloud-section py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Floating Headshots Cloud */}
        <div className="headshot-cloud relative h-64 mb-16">
          {avatars.map((avatar, index) => (
            <div 
              key={index} 
              className="cloud-avatar absolute rounded-full border-4 border-black shadow-2xl transition-all duration-700 hover:scale-110"
              style={{
                width: avatar.size,
                height: avatar.size,
                top: avatar.top,
                left: avatar.left,
                transform: 'translate(-50%, 0)',
                animation: `float ${3 + index}s infinite ease-in-out ${avatar.delay}`,
                zIndex: index === 2 ? 10 : 1
              }}
            >
              <img 
                src={avatar.src} 
                className="w-full h-full rounded-full object-cover" 
                alt="Artisan"
              />
            </div>
          ))}
        </div>

        {/* Large Testimonial Quote */}
        <div className="testimonial-quote max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
            “Excellent service. They responded much faster than I had anticipated and I was left with a wide range of offers. Brilliant work, CraftLink!”
          </blockquote>
          <cite className="text-xl font-bold text-gold not-italic block mb-2">Sunny Boateng</cite>
          <span className="text-gray-500 uppercase tracking-widest text-sm">Verified Customer</span>
        </div>

      </div>
    </section>
  );
};

export default ArtisanCloud;
