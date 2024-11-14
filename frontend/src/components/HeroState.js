import React, { useState, useEffect } from 'react';

const HeroState = ({ stateName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images based on the stateName (assuming images are in src/assets/images/states-back/{stateName} folder)
  const images = [
    require(`../assets/images/states-back/${stateName}/a.jpeg`),
    require(`../assets/images/states-back/${stateName}/b.jpeg`),
    require(`../assets/images/states-back/${stateName}/c.jpeg`),
    require(`../assets/images/states-back/${stateName}/d.jpeg`)
  ];

  // Update the image index at a regular interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <section
      className="hero-section relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Black overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 className="text-6xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>Welcome to {stateName}</h1>
        <p className="mt-4 text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>Explore the rich heritage and culture of {stateName}.</p>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C50,80 100,0 150,40 C200,80 250,0 300,40 C350,80 400,0 450,40 C500,80 550,0 600,40 C650,80 700,0 750,40 C800,80 850,0 900,40 C950,80 1000,0 1050,40 C1100,80 1150,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-[#f3ece4]" // Adjust color to match the design
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroState;
