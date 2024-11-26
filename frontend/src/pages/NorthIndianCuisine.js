import React from 'react';
import CuisineHero from '../components/CuisineHero'; // Hero component
import CuisineAbout from '../components/CuisineAbout'; // About section component
import CuisineGrid from '../components/CuisineGrid'; // Grid component
import CuisineRecipy from '../components/CuisineRecipy'; // Recipe component
import northIndianCuisineImage from '../assets/images/northIndianCuisine.jpeg'; // Hero image
import cuisinePattern from '../assets/images/about.svg'; // Decorative SVG pattern

const NorthIndianCuisine = () => {
  const aboutParagraphs = [
    "North Indian cuisine is known for its rich and robust flavors, characterized by the use of dairy products like ghee, cream, and paneer. Popular dishes include butter chicken, biryani, and naan. Spices such as cumin, coriander, and garam masala are essential in creating the bold tastes of the region.",
    "The cuisine of North India offers a perfect blend of hearty curries, tandoori-grilled items, and indulgent desserts like gulab jamun and kheer. Each dish tells a story of the region's history and culture, making it a favorite among food enthusiasts worldwide.",
  ];

  const gridItems = [
    {
      title: "Butter Chicken",
      description: "A creamy tomato-based chicken curry.",
      image: "path/to/butter-chicken.jpeg",
    },
    {
      title: "Naan",
      description: "Soft and fluffy flatbread cooked in a tandoor.",
      image: "path/to/naan.jpeg",
    },
    {
      title: "Biryani",
      description: "A fragrant rice dish cooked with spices and meat or vegetables.",
      image: "path/to/biryani.jpeg",
    },
  ];

  const recipies = [
    "Paneer Tikka Masala",
    "Chole Bhature",
    "Rogan Josh",
    "Kheer (Rice Pudding)",
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
        imageSrc={northIndianCuisineImage} 
        title="North Indian Cuisine" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">North Indian Cuisine</span>
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

export default NorthIndianCuisine;
