import React from 'react';
import ArtHero from '../components/ArtHero'; // Hero component
import ArtAbout from '../components/ArtAbout'; // About section component
import ArtGrid from '../components/ArtGrid'; // Grid component
import contemporaryArtsImage from '../assets/images/contemporaryarts.jpeg'; // Hero image
import artPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const ContemporaryArts = () => {
  const aboutParagraphs = [
    "Dive into the vibrant world of contemporary Indian art, where tradition meets modern innovation. Artists explore new mediums, breaking boundaries to create unique and thought-provoking works.",
    "This art form reflects the cultural, social, and political narratives of modern India, offering a glimpse into the evolving artistic landscape of the country.",
  ];

  const gridItems = [
    {
      title: "Mixed Media Art",
      description: "A blend of materials to create unique visual narratives.",
      image: "path/to/mixed-media.jpeg",
    },
    {
      title: "Abstract Paintings",
      description: "Expressive art focusing on form and color.",
      image: "path/to/abstract.jpeg",
    },
    {
      title: "Digital Art",
      description: "The intersection of technology and creativity.",
      image: "path/to/digital-art.jpeg",
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
        imageSrc={contemporaryArtsImage} 
        title="Contemporary Arts" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Contemporary Arts</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <ArtAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Art Forms of Contemporary India
        </h2>
        <ArtGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default ContemporaryArts;
