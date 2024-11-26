import React from 'react';
import { Link } from 'react-router-dom';
import CardsHero from '../components/CardHero';
import HexagonGallery from '../components/HexagonGallery'; // Import the HexagonGallery component
import cuisineVideo from '../assets/videos/cuisine.mp4';

// Import images for the cuisine regions
import northIndianCuisineImage from '../assets/images/northIndianCuisine.jpeg';
import southIndianCuisineImage from '../assets/images/southIndianCuisine.jpeg';
import eastIndianCuisineImage from '../assets/images/eastIndianCuisine.jpeg';
import westIndianCuisineImage from '../assets/images/westIndianCuisine.jpeg';

// Dynamically import images for HexagonGallery
const hexagonImages = [
  require('../assets/images/image-cuisines/cui1.jpeg'),
  require('../assets/images/image-cuisines/cui2.jpeg'),
  require('../assets/images/image-cuisines/cui3.jpeg'),
  require('../assets/images/image-cuisines/cui4.jpeg'),
  require('../assets/images/image-cuisines/cui5.jpeg'),
  require('../assets/images/image-cuisines/cui6.jpeg'),
  require('../assets/images/image-cuisines/cui7.jpeg'),
];

// Define cuisine categories
const cuisineRegions = [
  {
    title: "North Indian Cuisine",
    description: "Rich curries, buttery naans, and flavorful biryanis make up the essence of North Indian cuisine.",
    image: northIndianCuisineImage,
    link: "/north-indian-cuisine",
  },
  {
    title: "South Indian Cuisine",
    description: "Crispy dosas, tangy sambars, and flavorful coconut-based curries define South Indian cuisine.",
    image: southIndianCuisineImage,
    link: "/south-indian-cuisine",
  },
  {
    title: "East Indian Cuisine",
    description: "Delve into the simplicity of East Indian cuisine with dishes like momos, fish curries, and sweets like rasgulla.",
    image: eastIndianCuisineImage,
    link: "/east-indian-cuisine",
  },
  {
    title: "West Indian Cuisine",
    description: "Explore the spicy curries, tangy chutneys, and coastal seafood flavors of West Indian cuisine.",
    image: westIndianCuisineImage,
    link: "/west-indian-cuisine",
  },
];

const CuisinePage = () => {
  return (
    <div className="bg-[#f3ece4]">
      {/* Hero Section */}
      <CardsHero 
        videoSrc={cuisineVideo} 
        title="Indian Cuisine" 
        description="Discover the diverse flavors of India, rich with spices and regional specialties."
      />

      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Indian Cuisine</h1>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          Indian cuisine is a testament to the country's cultural diversity, with each region offering its own unique flavors, ingredients, and cooking techniques. From spicy curries to savory snacks, Indian food is rich in spices, textures, and aromas that captivate the senses.
        </p>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          Whether it's the indulgent street food of Delhi, the fragrant rice dishes of Hyderabad, the seafood of Kerala, or the sweets of Kolkata, Indian cuisine is a delightful journey for food lovers around the world.
        </p>

        {/* Cuisine Regions Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cuisineRegions.map((region, index) => (
            <Link 
              to={region.link} 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              <img 
                src={region.image} 
                alt={region.title} 
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">{region.title}</h2>
                <p className="text-sm mt-1">{region.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Hexagonal Image Gallery */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">Gallery of Indian Cuisine</h2>
          <HexagonGallery images={hexagonImages} />
        </div>
      </div>
    </div>
  );
};

export default CuisinePage;
