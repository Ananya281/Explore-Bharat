import React from 'react';
import aboutPattern from '../assets/images/about.svg'; // Ensure the path and file name are correct

const IndiaArchitecture = () => {
  return (
    <section className="relative india-architecture py-16 bg-[#f3ece4] text-center overflow-hidden">
      {/* Decorative Flowers at Various Positions */}
      <div
        className="absolute top-35 left-0 w-40 h-40 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-20 w-64 h-64 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute top-16 right-0 w-40 h-40 opacity-10 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">India's Architectural Legacy</h2>
      <p className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto">
        India’s architecture is a fascinating blend of ancient traditions, cultural diversity, and modern innovation. From elaborately carved temples to futuristic urban structures, the country’s architectural story spans millennia.
      </p>
      <p className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto">
        The temples of South India, with their towering gopurams, showcase exquisite craftsmanship and devotion. Meanwhile, the Mughal monuments like the Taj Mahal stand as timeless icons of architectural brilliance.
      </p>
      <p className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto">
        Rajasthan's royal palaces and forts narrate tales of grandeur and strategy, while modern architectural landmarks in cities like Mumbai and Delhi reflect India's evolving skyline and global influence.
      </p>
      <p className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto">
        These architectural wonders form a vivid tapestry of India’s cultural and historical journey, inviting exploration and admiration.
      </p>
    </section>
  );
};

export default IndiaArchitecture;
