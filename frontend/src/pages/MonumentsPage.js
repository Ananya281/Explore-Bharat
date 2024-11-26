import React from 'react';
import { Link } from 'react-router-dom';
import CardsHero from '../components/CardHero'; // Adjust the path if necessary
import HexagonGallery from '../components/HexagonGallery'; // Import the HexagonGallery component
import monumentsVideo from '../assets/videos/monuments.mp4'; // Import the monuments video

// Import images for monument categories
import ancientFortImage from '../assets/images/ancientfort.jpeg';
import religiousMonumentImage from '../assets/images/religiousmonument.jpeg';
import architecturalWonderImage from '../assets/images/architecturalwonder.jpeg';
import heritageSiteImage from '../assets/images/heritagesite.jpeg';

// Dynamically import images for HexagonGallery
const hexagonImages = [
  require('../assets/images/image-monuments/mon1.jpeg'),
  require('../assets/images/image-monuments/mon2.jpeg'),
  require('../assets/images/image-monuments/mon3.jpeg'),
  require('../assets/images/image-monuments/mon4.jpeg'),
  require('../assets/images/image-monuments/mon5.jpeg'),
  require('../assets/images/image-monuments/mon6.jpeg'),
  require('../assets/images/image-monuments/mon7.jpeg'),
];

const monumentTypes = [
  {
    title: "Ancient Forts",
    description: "Explore the grandeur of India's ancient forts that narrate tales of valiant kings and empires.",
    image: ancientFortImage,
    link: "/ancient-forts", // Example link for the category
  },
  {
    title: "Religious Monuments",
    description: "Discover the spiritual essence of India's iconic religious monuments.",
    image: religiousMonumentImage,
    link: "/religious-monuments", // Example link for the category
  },
  {
    title: "Architectural Wonders",
    description: "Marvel at India's architectural wonders, showcasing intricate designs and timeless beauty.",
    image: architecturalWonderImage,
    link: "/architectural-wonders", // Example link for the category
  },
  {
    title: "Heritage Sites",
    description: "Step into the rich history and culture preserved in India's heritage sites.",
    image: heritageSiteImage,
    link: "/heritage-sites", // Example link for the category
  },
];

const MonumentsPage = () => {
  return (
    <div className="bg-[#f3ece4]">
      {/* Banner Section with CardsHero */}
      <CardsHero 
        videoSrc={monumentsVideo} 
        title="Historical Monuments of India" 
        description="Explore India's architectural wonders, showcasing a rich history and culture." 
      />

      {/* Main Monuments Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Historical Monuments of India</h1>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          India is home to many architectural marvels that tell stories of its past. From ancient temples to grand forts and palaces, each monument reflects India's diverse history, culture, and artistry. Explore these iconic structures that are not just historical treasures, but also a source of national pride.
        </p>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          These monuments have stood the test of time, showcasing unique architectural styles and intricate craftsmanship. Each structure holds cultural, spiritual, and historical significance, making them popular tourist destinations for people around the world. Discover India's rich heritage through these remarkable monuments.
        </p>

        {/* Monument Types Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {monumentTypes.map((type, index) => (
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
          <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">Photo Gallery</h2>
          <HexagonGallery images={hexagonImages} />
        </div>
      </div>
    </div>
  );
};

export default MonumentsPage;
