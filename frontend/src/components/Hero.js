import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
     
      {/* Background YouTube Video in Hero Section */}
      <iframe
        title="Explore Bharat Background Video"
        src="https://www.youtube.com/embed/35npVaFGHMY?autoplay=1&mute=1&loop=1&playlist=35npVaFGHMY&controls=0&showinfo=0&modestbranding=1"
        className="absolute top-0 left-0 w-screen h-screen z-[-1]"
        frameBorder="0"
        allow="autoplay; loop; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white z-10">
        <h1 className="text-4xl font-bold">Welcome to Explore Bharat</h1>
        <p className="mt-4">Discover India's rich cultural diversity</p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="mt-8 flex justify-center">
          <input 
            type="text" 
            className="px-4 py-3 w-1/2 max-w-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Search for cultural heritage, monuments, festivals..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button 
            type="submit" 
            className="ml-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C100,90 200,30 300,60 C400,90 500,30 600,60 C700,90 800,30 900,60 C1000,90 1100,30 1200,60 L1200,120 L0,120 Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
