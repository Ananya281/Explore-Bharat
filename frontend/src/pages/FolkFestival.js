import React from 'react';
import FestivalHero from '../components/FestivalHero'; // Hero component
import FestivalAbout from '../components/FestivalAbout'; // About section component
import FestivalGrid from '../components/FestivalGrid'; // Grid component
import folkFestivalImage from '../assets/images/folkfestival.jpeg'; // Hero image
import festivalPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const FolkFestival = () => {
  const aboutParagraphs = [
    "Folk festivals in India showcase the traditional music, dance, and art forms of different regions. These festivals celebrate the cultural heritage of rural India, often tied to agricultural practices or local folklore.",
    "From the vibrant Bihu in Assam to the soulful Rajasthani folk dances, these festivals highlight the richness of India's folk traditions. Experience the energy and colors of these unique celebrations that keep ancient traditions alive.",
  ];

  const gridItems = [
    {
      title: "Bihu Festival",
      description: "Assam's harvest festival filled with folk music and dance.",
      image: "path/to/bihu-festival.jpeg",
    },
    {
      title: "Lokrang Festival",
      description: "A celebration of folk traditions across India.",
      image: "path/to/lokrang-festival.jpeg",
    },
    {
      title: "Kullu Dussehra",
      description: "A grand procession showcasing Himachal Pradesh's culture.",
      image: "path/to/kullu-dussehra.jpeg",
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
        imageSrc={folkFestivalImage} 
        title="Folk Festivals of India"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Folk Festivals</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <FestivalAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Folk Festivals
        </h2>
        <FestivalGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default FolkFestival;
