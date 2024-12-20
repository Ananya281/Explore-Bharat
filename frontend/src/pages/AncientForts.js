import React from 'react';
import MonumentHero from '../components/MonumentHero'; // Hero component
import MonumentAbout from '../components/MonumentAbout'; // About section component
import MonumentGrid from '../components/MonumentGrid'; // Grid component
// import MonumentVideo from '../components/MonumentVideo'; // Video section component
import ancientFortsImage from '../assets/images/ancientfort.jpeg'; // Image for hero
// import ancientFortsVideo from '../assets/videos/ancientforts.mp4'; // Video for footer
import ancientPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const AncientForts = () => {
  const aboutParagraphs = [
    "India's ancient forts stand as a testament to its glorious past and military prowess. These structures served as royal residences, military bases, and symbols of power for various dynasties.",
    "From the massive walls of the Red Fort in Delhi to the hilltop grandeur of Mehrangarh Fort in Rajasthan, these forts narrate stories of battles, resilience, and architectural brilliance.",
  ];

  const gridItems = [
    {
      title: "Mehrangarh Fort",
      description: "A majestic fort in Jodhpur with a commanding hilltop view.",
      image: "path/to/mehrangarh-fort.jpeg",
    },
    {
      title: "Red Fort",
      description: "A UNESCO World Heritage Site and a symbol of India's independence.",
      image: "path/to/red-fort.jpeg",
    },
    {
      title: "Golconda Fort",
      description: "A historic fort known for its acoustics and grand architecture.",
      image: "path/to/golconda-fort.jpeg",
    },
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${ancientPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${ancientPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <MonumentHero 
        imageSrc={ancientFortsImage} 
        title="Ancient Forts"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Ancient Forts</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <MonumentAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Forts
        </h2>
        <MonumentGrid gridItems={gridItems} />
      </section>

      {/* Monument Video Section */}
      {/* <section className="py-20 px-6 lg:px-12 text-center bg-gray-100">
        
        <MonumentVideo 
          videoSrc={ancientFortsVideo}
          title="Explore Ancient Forts"
        />
      </section> */}
    </div>
  );
};

export default AncientForts;
