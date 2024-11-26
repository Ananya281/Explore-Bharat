import React from 'react';
import CuisineHero from '../components/CuisineHero';
import CuisineAbout from '../components/CuisineAbout';
import CuisineGrid from '../components/CuisineGrid';
import CuisineRecipy from '../components/CuisineRecipy';
import southIndianCuisineImage from '../assets/images/southIndianCuisine.jpeg';

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
    <div>
      <CuisineHero 
        imageSrc={southIndianCuisineImage} 
        title="South Indian Cuisine"
      />
      <CuisineAbout paragraphs={aboutParagraphs} />
      <CuisineGrid gridItems={gridItems} />
      <CuisineRecipy recipies={recipies} />
    </div>
  );
};

export default SouthIndianCuisine;
