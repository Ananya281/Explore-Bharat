import React from 'react';
import MonumentHero from '../components/MonumentHero'; // Hero component
import MonumentAbout from '../components/MonumentAbout'; // About section component
import MonumentGrid from '../components/MonumentGrid'; // Grid component
// import MonumentVideo from '../components/MonumentVideo'; // Video section component
import architecturalImage from '../assets/images/architecturalwonder.jpeg'; // Image for hero
// import ancientFortsVideo from '../assets/videos/architecturalwonders.mp4'; // Video for footer
import architecturalPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const ArchitecturalWonders = () => {
  const aboutParagraphs = [
    "India's architectural wonders reflect the ingenuity and creativity of ancient civilizations. From intricately carved temples to towering forts, these monuments stand as a testament to India's rich history.",
    "Explore breathtaking structures like the Taj Mahal, Qutub Minar, and the Hampi ruins, each with a unique story to tell and unparalleled beauty to admire.",
  ];

  const gridItems = [
    {
      title: "Taj Mahal",
      description: "An ivory-white marble mausoleum, a symbol of eternal love.",
      image: "path/to/taj-mahal.jpeg",
    },
    {
      title: "Hampi Ruins",
      description: "A UNESCO site with stunning temple architecture.",
      image: "path/to/hampi.jpeg",
    },
    {
      title: "Qutub Minar",
      description: "A towering minaret showcasing Indo-Islamic architecture.",
      image: "path/to/qutub-minar.jpeg",
    },
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${architecturalPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${architecturalPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <MonumentHero 
        imageSrc={architecturalImage} 
        title="Architectural Wonders"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Architectural Wonders</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <MonumentAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Architectural Wonders
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

export default ArchitecturalWonders;
