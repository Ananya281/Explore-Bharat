import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import aboutPattern from '../assets/images/about.svg'; // Import the SVG decoration

const Footer = () => {
  return (
    <footer className="relative bg-[#6b4226] text-[#fdf7f2] py-16 px-6 md:px-10 lg:px-16 overflow-hidden" style={{ minHeight: '350px' }}>
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-60 h-60 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-60 h-60 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 text-center md:text-left relative z-10">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-xl mb-4 lg:mb-6">Explore Bharat</h3>
          <p className="text-base leading-relaxed mb-6">
            Discover the cultural heritage of India through Explore Bharat. Learn, explore, and connect with India’s rich traditions.
          </p>
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a href="https://facebook.com" className="icon-circle">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" className="icon-circle">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" className="icon-circle">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://instagram.com" className="icon-circle">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="font-bold text-xl mb-4 lg:mb-6">Useful Links</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:text-[#8c6239] transition duration-300">Home</a></li>
            <li><a href="/About" className="hover:text-[#8c6239] transition duration-300">About</a></li>
            <li><a href="/" className="hover:text-[#8c6239] transition duration-300">Map</a></li>
            <li><a href="/Contact" className="hover:text-[#8c6239] transition duration-300">Contact</a></li>
            <li><a href="/Feedback" className="hover:text-[#8c6239] transition duration-300">Feedback</a></li>
          </ul>
        </div>

        {/* Support Links Section */}
<div>
  <h3 className="font-bold text-xl mb-4 lg:mb-6">Support Links</h3>
  <ul className="space-y-3 text-lg">
    <li><a href="/festivals" className="hover:text-[#8c6239] transition duration-300">Festivals</a></li>
    <li><a href="/monuments" className="hover:text-[#8c6239] transition duration-300">Monuments</a></li>
    <li><a href="/art-and-crafts" className="hover:text-[#8c6239] transition duration-300">Art and Crafts</a></li>
    <li><a href="/cuisine" className="hover:text-[#8c6239] transition duration-300">Cuisine</a></li>
  </ul>
</div>


        {/* Contact Information Section */}
{/* Contact Information Section */}
<div>
  <h3 className="font-bold text-xl mb-4 lg:mb-6">Reach Us</h3>
  <p className="text-lg mb-2">123 ABC Street, City Name, Country, India</p>
  <p className="text-lg mt-4">contact@explorebharat.com</p>
  <p className="text-lg mt-4">(000) 123-4567</p>
</div>


      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-12 lg:mt-16">
        <p className="text-lg">&copy; 2024 <span className="font-semibold">Explore Bharat</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
