import React, { useState, useEffect } from 'react';
import './HeroState.css';
import VerticalNavbar from './VerticalNavbar'; // Import the VerticalNavbar component

const HeroState = ({ stateName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Dynamically load images based on stateName
  useEffect(() => {
    const loadImages = () => {
      try {
        setImages([
          require(`../assets/images/states-back/${stateName}/a.jpeg`),
          require(`../assets/images/states-back/${stateName}/b.jpeg`),
          require(`../assets/images/states-back/${stateName}/c.jpeg`),
          require(`../assets/images/states-back/${stateName}/d.jpeg`),
        ]);
      } catch (error) {
        console.error('Error loading images:', error);
        setImages([]); // Fallback to empty array if loading fails
      }
    };

    loadImages();
  }, [stateName]);

  // Update the image index at a regular interval
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [images]);

  return (
    <section
      className="hero-section relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: images.length > 0 ? `url(${images[currentImageIndex]})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Black overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"
      ></div>

      {/* Vertical Navbar */}
      <VerticalNavbar stateName={stateName} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 className="text-6xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>
          Welcome to {stateName}
        </h1>
        <p className="mt-4 text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
          Explore the rich heritage and culture of {stateName}.
        </p>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C50,80 100,0 150,40 C200,80 250,0 300,40 C350,80 400,0 450,40 C500,80 550,0 600,40 C650,80 700,0 750,40 C800,80 850,0 900,40 C950,80 1000,0 1050,40 C1100,80 1150,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-[#f3ece4]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroState;
