import React from 'react';
import { Link } from 'react-router-dom';
import CardsHero from '../components/CardHero'; // Adjust the path if necessary
import HexagonGallery from '../components/HexagonGallery'; // Import the HexagonGallery component
import artsVideo from '../assets/videos/arts.mp4'; // Import the arts video

// Import images for the art types
import visualArtsImage from '../assets/images/visualarts.jpeg';
import performingArtsImage from '../assets/images/performingarts.jpeg';
import textileArtsImage from '../assets/images/textilearts.jpeg';
import contemporaryArtsImage from '../assets/images/contemporaryarts.jpeg';

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

// Define art categories
const artTypes = [
  {
    title: "Visual Arts",
    description: "Explore the rich visual traditions of India, from Madhubani and Warli paintings to Tanjore and Pattachitra.",
    image: visualArtsImage,
    link: "/visual-arts",
  },
  {
    title: "Performing Arts",
    description: "Experience the elegance of Indian classical dance forms like Kathak and Bharatnatyam, as well as traditional theater.",
    image: performingArtsImage,
    link: "/performing-arts",
  },
  {
    title: "Textile Arts",
    description: "Discover the artistry behind India's textiles, from intricate embroidery to traditional handwoven fabrics.",
    image: textileArtsImage,
    link: "/textile-arts",
  },
  {
    title: "Contemporary Arts",
    description: "Dive into the vibrant world of modern Indian art, blending tradition with innovation.",
    image: contemporaryArtsImage,
    link: "/contemporary-arts",
  },
];

const ArtAndCraftsPage = () => {
  return (
    <div className="bg-[#f3ece4]">
      {/* Hero Section */}
      <CardsHero 
        videoSrc={artsVideo} 
        title="Traditional and Modern Indian Arts" 
        description="Experience the artistic legacy of India through its diverse art forms." 
      />

      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Indian Arts and Crafts</h1>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          India's arts and crafts reflect its cultural diversity and historical depth. From ancient visual arts to vibrant performances, traditional textiles to contemporary expressions, each form showcases the creativity and heritage of the country.
        </p>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          These art forms are not just creative expressions but also a medium to preserve traditions, tell stories, and celebrate India's cultural identity. Explore the categories below to discover the beauty and depth of Indian arts.
        </p>

        {/* Art and Craft Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {artTypes.map((type, index) => (
            <Link 
              to={type.link} 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              <img 
                src={type.image} 
                alt={type.title} 
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">{type.title}</h2>
                <p className="text-sm mt-1">{type.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Hexagonal Image Gallery */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">Gallery of Indian Arts and Crafts</h2>
          <HexagonGallery images={hexagonImages} />
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftsPage;
