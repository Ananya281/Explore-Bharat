import React from 'react';
import aboutPattern from '../assets/images/about.svg'; // Import the SVG file

const About = () => {
  return (
    <section className="bg-[#f3ece4] py-10 relative overflow-hidden pt-20">
      {/* Decorative Pattern using SVG as Background Image */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 id="about-heading" className="text-5xl font-bold text-[#6b4226] font-serif">
          About <span className="italic text-[#8c6239]">Explore Bharat</span>
        </h2>
        <div className="flex justify-center mt-3 mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>

        <div className="relative flex justify-center items-center my-4">
          <div
            className="w-10 h-10 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('../assets/images/heritage-icon.png')" }} // Update path if needed
          ></div>
        </div>

        <p className="text-[#8c6239] mt-8 max-w-3xl mx-auto text-lg leading-relaxed font-light">
          <span className="text-xl font-semibold">Explore Bharat</span> is your gateway to discover India’s vibrant culture. Experience the diverse traditions, festivals, attire, monuments, and flavors from every corner of India. Tailored recommendations guide your unique journey through the country’s rich heritage, making each exploration memorable and enlightening.
        </p>
      </div>

      <div
        className="w-full h-8 bg-repeat-x bg-bottom"
        style={{ backgroundImage: "url('../assets/images/border-pattern.png')" }} // Update path if needed
      ></div>
    </section>
  );
};

export default About;
