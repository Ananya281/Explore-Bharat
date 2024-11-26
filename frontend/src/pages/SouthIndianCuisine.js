import React from 'react';
import CuisineHero from '../components/CuisineHero'; // Hero component
import CuisineAbout from '../components/CuisineAbout'; // About section component
import CuisineGrid from '../components/CuisineGrid'; // Grid component
import CuisineRecipy from '../components/CuisineRecipy'; // Recipe component
import southIndianCuisineImage from '../assets/images/southIndianCuisine.jpeg'; // Hero image
import cuisinePattern from '../assets/images/about.svg'; // Decorative SVG pattern

const SouthIndianCuisine = () => {
  const aboutParagraphs = [
    "South Indian cuisine is renowned for its emphasis on rice, lentils, and coconut, complemented by tangy and spicy flavors. Signature dishes like dosa, idli, and sambar have gained worldwide fame.",
    "This cuisine features a variety of chutneys, pickles, and podis (spiced powders) that add depth to meals. Coconut milk and tamarind are commonly used, creating a unique taste that defines South Indian food.",
  ];

  const gridItems = [
    {
      title: "Dosa",
      description: "A crispy rice and lentil pancake served with sambar and chutneys.",
      image: "path/to/dosa.jpeg",
    },
    {
      title: "Idli",
      description: "Soft steamed rice cakes, a breakfast favorite.",
      image: "path/to/idli.jpeg",
    },
    {
      title: "Sambar",
      description: "A tangy lentil-based vegetable stew flavored with tamarind.",
      image: "path/to/sambar.jpeg",
    },
  ];

  const recipies = [
    "Rasam (Spicy Tomato Soup)",
    "Avial (Mixed Vegetable Curry)",
    "Payasam (Sweet Dessert)",
    "Chettinad Chicken Curry",
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
        imageSrc={southIndianCuisineImage} 
        title="South Indian Cuisine" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">South Indian Cuisine</span>
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

export default SouthIndianCuisine;
