import React from 'react';
import CuisineHero from '../components/CuisineHero'; // Hero component
import CuisineAbout from '../components/CuisineAbout'; // About section component
import CuisineGrid from '../components/CuisineGrid'; // Grid component
import CuisineRecipy from '../components/CuisineRecipy'; // Recipe component
import eastIndianCuisineImage from '../assets/images/eastIndianCuisine.jpeg'; // Hero image
import cuisinePattern from '../assets/images/about.svg'; // Decorative SVG pattern

const EastIndianCuisine = () => {
  const aboutParagraphs = [
    "East Indian cuisine is known for its simplicity, with dishes often prepared with mustard oil, panch phoron (five spices), and fresh fish. It combines subtle flavors with wholesome ingredients.",
    "This region is also famous for its sweets like rasgulla and sandesh, showcasing the delicate art of sweet-making. The cuisine has a balance of vegetarian and non-vegetarian dishes, including fish curries and bamboo shoot-based recipes.",
  ];

  const gridItems = [
    {
      title: "Rasgulla",
      description: "Soft and spongy milk-based sweet dumplings.",
      image: "path/to/rasgulla.jpeg",
    },
    {
      title: "Fish Curry",
      description: "Freshwater fish cooked in mustard and tomato-based gravy.",
      image: "path/to/fish-curry.jpeg",
    },
    {
      title: "Pakhala Bhata",
      description: "Fermented rice served with curd and fried vegetables.",
      image: "path/to/pakhala.jpeg",
    },
  ];

  const recipies = [
    "Chingri Malai Curry (Prawn Curry)",
    "Aloo Posto (Potato with Poppy Seeds)",
    "Sandesh (Milk Sweet)",
    "Ilish Maach Bhapa (Steamed Hilsa Fish)",
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
        imageSrc={eastIndianCuisineImage} 
        title="East Indian Cuisine" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">East Indian Cuisine</span>
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

export default EastIndianCuisine;
