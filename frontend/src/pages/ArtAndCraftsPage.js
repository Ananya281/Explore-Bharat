import React from 'react';
import CardsHero from '../components/CardHero'; // Adjust the path if necessary
import HexagonGallery from '../components/HexagonGallery'; // Import the HexagonGallery component
import artsVideo from '../assets/videos/arts.mp4'; // Import the arts video

// Import images for the art cards
import madhubaniImage from '../assets/images/madhubani.jpeg';
import warliImage from '../assets/images/warli.jpeg';
import pattachitraImage from '../assets/images/pattachitra.jpeg';
import kathakImage from '../assets/images/kathak.jpeg';

// Dynamically import images for HexagonGallery
const hexagonImages = [
  require('../assets/images/image-arts/art1.jpeg'),
  require('../assets/images/image-arts/art2.jpeg'),
  require('../assets/images/image-arts/art3.jpeg'),
  require('../assets/images/image-arts/art4.jpeg'),
  require('../assets/images/image-arts/art5.jpeg'),
  require('../assets/images/image-arts/art6.jpeg'),
  require('../assets/images/image-arts/art7.jpeg'),
];

const artData = [
  {
    title: "Madhubani Art",
    description: "Known for intricate patterns and vibrant colors, originating from Bihar.",
    image: madhubaniImage,
  },
  {
    title: "Warli Art",
    description: "A traditional tribal art form from Maharashtra, using geometric patterns to depict daily life.",
    image: warliImage,
  },
  {
    title: "Pattachitra",
    description: "Ancient folk art from Odisha and West Bengal that tells stories of mythology and folklore.",
    image: pattachitraImage,
  },
  {
    title: "Kathak Dance",
    description: "A classical Indian dance form that narrates stories through rhythmic foot movements, originating in Northern India.",
    image: kathakImage,
  },
];

const ArtAndCraftsPage = () => {
  return (
    <div className="bg-[#f3ece4]">
      {/* Banner Section with CardsHero */}
      <CardsHero 
        videoSrc={artsVideo} 
        title="Traditional Indian Art and Crafts" 
        description="Experience the artistic heritage of India through traditional crafts and artwork." 
      />

      {/* Main Art and Crafts Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Traditional Indian Art and Crafts</h1>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          India's rich history is reflected in its traditional arts and crafts, which vary by region and are deeply rooted in cultural heritage. From the intricate designs of Madhubani paintings to the expressive Warli art, these art forms tell stories of India's traditions, beliefs, and daily life.
        </p>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          Indian crafts are not merely decorative but are also functional and symbolic, representing the regional identities of the country. These crafts are passed down generations, preserving India's artistic legacy and highlighting the skill and creativity of its artisans.
        </p>

        {/* Art and Craft Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {artData.map((art, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              <img 
                src={art.image} 
                alt={art.title} 
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">{art.title}</h2>
                <p className="text-sm mt-1">{art.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hexagonal Image Gallery */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">Gallery of Indian Art and Crafts</h2>
          <HexagonGallery images={hexagonImages} />
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftsPage;
