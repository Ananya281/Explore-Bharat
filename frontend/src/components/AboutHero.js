import React from 'react';
import aboutBackground from '../assets/images/AboutHero.jpg'; // Replace with the actual path to your image

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white z-10 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          About Explore Bharat
        </h1>
        <p className="mt-4 text-2xl font-light max-w-lg animate-fade-in" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
          Discover India’s diverse cultural heritage, traditions, and stories with us.
        </p>
        
        {/* Optional Button to Learn More */}
        <button
          className="mt-8 px-6 py-2 bg-[#6b4226] text-[#f3ece4] rounded-lg hover:bg-[#e2d7c9] hover:text-[#4a2d18] transition duration-300"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          Learn More
        </button>
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
            className="fill-current text-[#f3ece4]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
