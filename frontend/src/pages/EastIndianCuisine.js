import React from 'react';
import CuisineHero from '../components/CuisineHero';
import CuisineAbout from '../components/CuisineAbout';
import CuisineGrid from '../components/CuisineGrid';
import CuisineRecipy from '../components/CuisineRecipy';
import eastIndianCuisineImage from '../assets/images/eastIndianCuisine.jpeg';

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
    <div>
      <CuisineHero 
        imageSrc={eastIndianCuisineImage} 
        title="East Indian Cuisine"
      />
      <CuisineAbout paragraphs={aboutParagraphs} />
      <CuisineGrid gridItems={gridItems} />
      <CuisineRecipy recipies={recipies} />
    </div>
  );
};

export default EastIndianCuisine;
