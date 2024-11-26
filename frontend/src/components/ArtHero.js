import React from 'react';

const ArtHero = ({ imageSrc, title }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>

      {/* Title Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-6xl font-extrabold" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h1>
        <p className="mt-4 text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
          Explore the rich heritage and culture of these iconic monuments.
        </p>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
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
    </div>
  );
};

export default ArtHero;
