import React from 'react';
import CuisineHero from '../components/CuisineHero';
import CuisineAbout from '../components/CuisineAbout';
import CuisineGrid from '../components/CuisineGrid';
import CuisineRecipy from '../components/CuisineRecipy';
import northIndianCuisineImage from '../assets/images/northIndianCuisine.jpeg';

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
    <div>
      <CuisineHero 
        imageSrc={northIndianCuisineImage} 
        title="North Indian Cuisine"
      />
      <CuisineAbout paragraphs={aboutParagraphs} />
      <CuisineGrid gridItems={gridItems} />
      <CuisineRecipy recipies={recipies} />
    </div>
  );
};

export default NorthIndianCuisine;
