import React from 'react';
import MonumentHero from '../components/MonumentHero'; // Hero component
import MonumentAbout from '../components/MonumentAbout'; // About section component
import MonumentGrid from '../components/MonumentGrid'; // Grid component
// import MonumentVideo from '../components/MonumentVideo'; // Video section component
import religiousImage from '../assets/images/religiousmonument.jpeg'; // Image for hero
// import ancientFortsVideo from '../assets/videos/religiousmonuments.mp4'; // Video for footer
import religiousPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const ReligiousMonuments = () => {
  const aboutParagraphs = [
    "India's religious monuments are a reflection of its deep spiritual heritage and cultural diversity. From ancient temples and mosques to churches and monasteries, these sites are places of worship, architectural beauty, and historical significance.",
    "Explore iconic sites like the Golden Temple in Amritsar, the Brihadeeswarar Temple in Tamil Nadu, and the Jama Masjid in Delhi. Each monument represents the beliefs, traditions, and artistic excellence of its era.",
  ];

  const gridItems = [
    {
      title: "Golden Temple",
      description: "A stunning Sikh temple in Amritsar, known for its golden architecture.",
      image: "path/to/golden-temple.jpeg",
    },
    {
      title: "Brihadeeswarar Temple",
      description: "A UNESCO World Heritage Site showcasing Dravidian architecture.",
      image: "path/to/brihadeeswarar-temple.jpeg",
    },
    {
      title: "Jama Masjid",
      description: "One of the largest mosques in India, located in Delhi.",
      image: "path/to/jama-masjid.jpeg",
    },
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${religiousPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${religiousPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <MonumentHero 
        imageSrc={religiousImage} 
        title="Religious Monuments"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Religious Monuments</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <MonumentAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Religious Monuments
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

export default ReligiousMonuments;
