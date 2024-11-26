import React from 'react';
import FestivalHero from '../components/FestivalHero'; // Hero component
import FestivalAbout from '../components/FestivalAbout'; // About section component
import FestivalGrid from '../components/FestivalGrid'; // Grid component
import panFestivalImage from '../assets/images/panfestival.jpeg'; // Hero image
import festivalPattern from '../assets/images/about.svg'; // Decorative SVG pattern

const PanIndianFestival = () => {
  const aboutParagraphs = [
    "Pan Indian Festivals bring together communities from all over the country. Celebrations such as Diwali, Holi, and Eid exemplify the unity in diversity that India represents. These festivals are celebrated with vibrant colors, grand feasts, and age-old traditions.",
    "From lighting diyas during Diwali to playing with colors during Holi, each festival offers a unique cultural experience. Discover the stories behind these festivals and how they unite millions of people in joy and spirituality.",
  ];

  const gridItems = [
    {
      title: "Diwali",
      description: "The festival of lights celebrated with diyas and fireworks.",
      image: "path/to/diwali-image.jpeg",
    },
    {
      title: "Holi",
      description: "The festival of colors, marking the arrival of spring.",
      image: "path/to/holi-image.jpeg",
    },
    {
      title: "Eid",
      description: "A festival of feasts and prayers celebrated across the country.",
      image: "path/to/eid-image.jpeg",
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
        imageSrc={panFestivalImage} 
        title="Pan Indian Festivals"
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Pan Indian Festivals</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <FestivalAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Pan Indian Festivals
        </h2>
        <FestivalGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default PanIndianFestival;
