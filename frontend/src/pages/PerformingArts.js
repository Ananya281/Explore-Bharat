import React from 'react';
import ArtHero from '../components/ArtHero'; // Hero component
import ArtAbout from '../components/ArtAbout'; // About section component
import ArtGrid from '../components/ArtGrid'; // Grid component
import performingArtsImage from '../assets/images/performingarts.jpeg'; // Hero image
import artPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const PerformingArts = () => {
  const aboutParagraphs = [
    "Performing arts in India include classical dances, traditional music, and theater. These art forms are deeply intertwined with religious and cultural practices.",
    "Each region contributes unique styles, such as Bharatnatyam from Tamil Nadu, Kathak from Northern India, and Kathakali from Kerala, making India's performing arts a vibrant and diverse tradition.",
  ];

  const gridItems = [
    {
      title: "Bharatnatyam",
      description: "A classical dance form from Tamil Nadu, showcasing intricate footwork and expressions.",
      image: "path/to/bharatnatyam.jpeg",
    },
    {
      title: "Kathakali",
      description: "A dramatic art form from Kerala featuring elaborate costumes and storytelling.",
      image: "path/to/kathakali.jpeg",
    },
    {
      title: "Tabla",
      description: "A percussion instrument central to Indian classical music.",
      image: "path/to/tabla.jpeg",
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
        imageSrc={performingArtsImage} 
        title="Performing Arts" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Performing Arts</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <ArtAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Performing Arts of India
        </h2>
        <ArtGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default PerformingArts;
