import React from 'react';
import FestivalHero from '../components/FestivalHero'; // Hero component
import FestivalAbout from '../components/FestivalAbout'; // About section component
import FestivalGrid from '../components/FestivalGrid'; // Grid component
import fairFestivalImage from '../assets/images/fairfestival.jpeg'; // Hero image
import festivalPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const FairFestival = () => {
  const aboutParagraphs = [
    "Indian fairs are vibrant gatherings that showcase the culture and traditions of various regions. These fairs are often held during festivals or harvest seasons and feature music, dance, and handicrafts.",
    "From the Pushkar Camel Fair in Rajasthan to the Sonepur Cattle Fair in Bihar, these events bring together people from all walks of life, offering a glimpse into India's rural charm and rich heritage.",
  ];

  const gridItems = [
    {
      title: "Pushkar Camel Fair",
      description: "A grand event showcasing camels and cultural activities.",
      image: "path/to/pushkar-camel-fair.jpeg",
    },
    {
      title: "Sonepur Cattle Fair",
      description: "Asia's largest cattle fair with cultural performances.",
      image: "path/to/sonepur-fair.jpeg",
    },
    {
      title: "Kumbh Mela",
      description: "The world's largest religious gathering.",
      image: "path/to/kumbh-mela.jpeg",
    },
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${festivalPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${festivalPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <FestivalHero 
        imageSrc={fairFestivalImage} 
        title="Fair Festivals of India"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Fair Festivals</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <FestivalAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Fair Festivals
        </h2>
        <FestivalGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default FairFestival;
