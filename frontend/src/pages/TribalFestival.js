import React from 'react';
import FestivalHero from '../components/FestivalHero'; // Hero component
import FestivalAbout from '../components/FestivalAbout'; // About section component
import FestivalGrid from '../components/FestivalGrid'; // Grid component
import tribalFestivalImage from '../assets/images/tribalfestival.jpeg'; // Hero image
import festivalPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const TribalFestival = () => {
  const aboutParagraphs = [
    "Tribal festivals celebrate the unique customs, traditions, and art forms of India's indigenous communities. These festivals often include rituals, folk dances, and community feasts, offering a glimpse into the tribal way of life.",
    "Major tribal festivals like Hornbill in Nagaland and Bhagoria in Madhya Pradesh reflect the harmony between nature and culture. They are vibrant and deeply rooted in the tribal communities' connection to their environment.",
  ];

  const gridItems = [
    {
      title: "Hornbill Festival",
      description: "Nagaland's 'Festival of Festivals,' showcasing tribal culture.",
      image: "path/to/hornbill-festival.jpeg",
    },
    {
      title: "Bhagoria Festival",
      description: "A colorful tribal festival of Madhya Pradesh.",
      image: "path/to/bhagoria-festival.jpeg",
    },
    {
      title: "Karam Festival",
      description: "A harvest festival celebrated by tribal communities in Odisha, Bihar, and Jharkhand.",
      image: "path/to/karam-festival.jpeg",
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
        imageSrc={tribalFestivalImage} 
        title="Tribal Festivals of India"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Tribal Festivals</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <FestivalAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Tribal Festivals
        </h2>
        <FestivalGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default TribalFestival;
