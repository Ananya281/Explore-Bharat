import React from 'react';
import aboutPattern from '../assets/images/about.svg'; // Import the SVG decoration

const Footer = () => {
  return (
    <footer className="relative bg-[#6b4226] text-[#fdf7f2] py-10 overflow-hidden" style={{ minHeight: '200px' }}>
      {/* Decorative Pattern similar to other sections */}
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

      <div className="container mx-auto text-center relative z-10">
        <p className="text-lg">&copy; 2024 <span className="font-semibold">Explore Bharat</span>. All Rights Reserved.</p>
        
        <ul className="mt-6 flex justify-center space-x-8">
          <li>
            <a href="https://facebook.com" className="hover:text-[#8c6239] transition duration-300">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="hover:text-[#8c6239] transition duration-300">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className="hover:text-[#8c6239] transition duration-300">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
