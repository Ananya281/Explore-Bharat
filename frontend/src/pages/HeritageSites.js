import React from 'react';
import MonumentHero from '../components/MonumentHero'; // Hero component
import MonumentAbout from '../components/MonumentAbout'; // About section component
import MonumentGrid from '../components/MonumentGrid'; // Grid component
// import MonumentVideo from '../components/MonumentVideo'; // Video section component
import heritageImage from '../assets/images/heritagesite.jpeg'; // Image for hero
// import ancientFortsVideo from '../assets/videos/heritagesites.mp4'; // Video for footer
import heritagePattern from '../assets/images/about.svg'; // Decorative SVG pattern

const HeritageSites = () => {
  const aboutParagraphs = [
    "India's UNESCO World Heritage Sites are a treasure trove of history and culture. These sites, ranging from natural wonders to man-made marvels, offer a glimpse into the country's rich heritage and diverse landscape.",
    "Visit iconic locations like the Ajanta and Ellora Caves, the Sun Temple at Konark, or the Valley of Flowers, and immerse yourself in the beauty and history that these heritage sites have preserved for generations.",
  ];

  const gridItems = [
    {
      title: "Ajanta Caves",
      description: "Ancient Buddhist rock-cut caves known for stunning murals.",
      image: "path/to/ajanta-caves.jpeg",
    },
    {
      title: "Sun Temple, Konark",
      description: "A 13th-century temple dedicated to the Sun God, showcasing exquisite architecture.",
      image: "path/to/sun-temple.jpeg",
    },
    {
      title: "Valley of Flowers",
      description: "A UNESCO site with vibrant alpine flora in the Himalayas.",
      image: "path/to/valley-of-flowers.jpeg",
    },
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${heritagePattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${heritagePattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <MonumentHero 
        imageSrc={heritageImage} 
        title="Heritage Sites"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Heritage Sites</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <MonumentAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Heritage Sites
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

export default HeritageSites;
