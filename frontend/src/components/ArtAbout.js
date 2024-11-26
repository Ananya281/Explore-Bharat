import React from 'react';
import flowerPattern from '../assets/images/about.svg'; // Import the flower SVG pattern

const ArtAbout = ({ paragraphs }) => {
  return (
    <section className="relative bg-[#f3ece4] py-20 overflow-hidden">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${flowerPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${flowerPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Text Content */}
      <div className="max-w-6xl mx-auto p-8 relative z-10">
        {paragraphs.map((text, index) => (
          <p 
            key={index} 
            className="text-lg text-[#8c6239] text-center mb-8"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ArtAbout;
