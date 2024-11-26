import React from 'react';
import ArtHero from '../components/ArtHero'; // Hero component
import ArtAbout from '../components/ArtAbout'; // About section component
import ArtGrid from '../components/ArtGrid'; // Grid component
import visualArtsImage from '../assets/images/visualarts.jpeg'; // Hero image
import artPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const VisualArts = () => {
  const aboutParagraphs = [
    "Visual arts in India have a deep-rooted history, encompassing painting, sculpture, and architecture. The art forms often reflect religious and cultural themes, showcasing India's heritage.",
    "Styles such as Madhubani, Warli, and Tanjore paintings are not just artistic expressions but also a representation of the regions they come from, carrying forward traditional techniques.",
  ];

  const gridItems = [
    {
      title: "Madhubani Art",
      description: "An intricate art style originating from Bihar.",
      image: "path/to/madhubani.jpeg",
    },
    {
      title: "Warli Art",
      description: "A tribal art form featuring geometric patterns.",
      image: "path/to/warli.jpeg",
    },
    {
      title: "Tanjore Paintings",
      description: "South Indian paintings known for their gold leaf detailing.",
      image: "path/to/tanjore.jpeg",
    },
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${artPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${artPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <ArtHero 
        imageSrc={visualArtsImage} 
        title="Visual Arts" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Visual Arts</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <ArtAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Visual Arts of India
        </h2>
        <ArtGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default VisualArts;
