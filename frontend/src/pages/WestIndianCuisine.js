import React from 'react';
import CuisineHero from '../components/CuisineHero'; // Hero component
import CuisineAbout from '../components/CuisineAbout'; // About section component
import CuisineGrid from '../components/CuisineGrid'; // Grid component
import CuisineRecipy from '../components/CuisineRecipy'; // Recipe component
import westIndianCuisineImage from '../assets/images/westIndianCuisine.jpeg'; // Hero image
import cuisinePattern from '../assets/images/about.svg'; // Decorative SVG pattern

const WestIndianCuisine = () => {
  const aboutParagraphs = [
    "West Indian cuisine is diverse and flavorful, with coastal areas offering seafood delights, while interior regions feature spicy curries and traditional breads. Coconut, kokum, and peanuts are common ingredients.",
    "The cuisine also showcases street food favorites like pav bhaji and vada pav, which are loved across the country. Goan dishes like vindaloo and fish curry reflect Portuguese influence on local flavors.",
  ];

  const gridItems = [
    {
      title: "Pav Bhaji",
      description: "A spicy vegetable mash served with buttery bread rolls.",
      image: "path/to/pav-bhaji.jpeg",
    },
    {
      title: "Fish Curry",
      description: "Goan-style coconut fish curry with aromatic spices.",
      image: "path/to/fish-curry.jpeg",
    },
    {
      title: "Vada Pav",
      description: "A spicy potato fritter sandwiched in a bread roll.",
      image: "path/to/vada-pav.jpeg",
    },
  ];

  const recipies = [
    "Bombil Fry (Bombay Duck Fry)",
    "Shrikhand (Sweetened Yogurt Dessert)",
    "Goan Prawn Balchao",
    "Thepla (Spiced Flatbread)",
  ];

  return (
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${cuisinePattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${cuisinePattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <CuisineHero 
        imageSrc={westIndianCuisineImage} 
        title="West Indian Cuisine" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">West Indian Cuisine</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <CuisineAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Signature Dishes
        </h2>
        <CuisineGrid gridItems={gridItems} />
      </section>

      {/* Recipe Section */}
      <section className="py-10 px-6 lg:px-12 bg-[#f8f4ee]">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Famous Recipes
        </h2>
        <CuisineRecipy recipies={recipies} />
      </section>
    </div>
  );
};

export default WestIndianCuisine;
