import React from 'react';
import CuisineHero from '../components/CuisineHero';
import CuisineAbout from '../components/CuisineAbout';
import CuisineGrid from '../components/CuisineGrid';
import CuisineRecipy from '../components/CuisineRecipy';
import westIndianCuisineImage from '../assets/images/westIndianCuisine.jpeg';

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
    <div>
      <CuisineHero 
        imageSrc={westIndianCuisineImage} 
        title="West Indian Cuisine"
      />
      <CuisineAbout paragraphs={aboutParagraphs} />
      <CuisineGrid gridItems={gridItems} />
      <CuisineRecipy recipies={recipies} />
    </div>
  );
};

export default WestIndianCuisine;
