import React from 'react';
import CardsHero from '../components/CardHero';
import HexagonGallery from '../components/HexagonGallery'; // Import the HexagonGallery component
import cuisineVideo from '../assets/videos/cuisine.mp4';

// Import images for the cuisine section (example images; replace with actual images)
import biryaniImage from '../assets/images/biryani.jpeg';
import dosaImage from '../assets/images/dosa.jpeg';
import chaatImage from '../assets/images/chaat.jpeg';
import samosaImage from '../assets/images/samosa.jpeg';

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

const cuisineData = [
  {
    title: "Biryani",
    description: "A flavorful rice dish that combines fragrant spices, tender meat, or vegetables. Each region in India has its unique take on Biryani.",
    image: biryaniImage,
  },
  {
    title: "Dosa",
    description: "A popular South Indian dish, dosa is a thin, crispy pancake served with sambar and chutney.",
    image: dosaImage,
  },
  {
    title: "Chaat",
    description: "A popular street food, chaat is a combination of crispy ingredients, tangy tamarind sauce, and spices.",
    image: chaatImage,
  },
  {
    title: "Samosa",
    description: "A deep-fried pastry filled with spiced potatoes and peas, commonly enjoyed as a snack across India.",
    image: samosaImage,
  },
];

const CuisinePage = () => {
  return (
    <div className="bg-[#f3ece4]">
      {/* Banner Section with CardsHero */}
      <CardsHero 
        videoSrc={cuisineVideo} 
        title="Indian Cuisine" 
        description="Discover the diverse flavors of India, rich with spices and regional specialties."
      />

      {/* Main Cuisine Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Indian Cuisine</h1>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          Indian cuisine is a testament to the country's cultural diversity, with each region offering its own unique flavors, ingredients, and cooking techniques. From spicy curries to savory snacks, Indian food is rich in spices, textures, and aromas that captivate the senses.
        </p>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          The essence of Indian food lies in its versatility and variety, making it a cuisine that caters to a wide range of tastes and preferences. Whether it's the indulgent street food of Delhi, the fragrant rice dishes of Hyderabad, or the coastal seafood of Kerala, Indian cuisine is a delightful journey for food lovers around the world.
        </p>

        {/* Cuisine Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cuisineData.map((cuisine, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              <img 
                src={cuisine.image} 
                alt={cuisine.title} 
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">{cuisine.title}</h2>
                <p className="text-sm mt-1">{cuisine.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hexagonal Image Gallery */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">Image Gallery</h2>
          <HexagonGallery images={hexagonImages} />
        </div>
      </div>
    </div>
  );
};

export default CuisinePage;
