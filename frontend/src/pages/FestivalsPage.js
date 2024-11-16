import React from 'react';
import CardsHero from '../components/CardHero';
import HexagonGallery from '../components/HexagonGallery'; // Import the HexagonGallery component
import festivalsVideo from '../assets/videos/festivals.mp4';

// Import images for the festival cards
import panFestivalImage from '../assets/images/panfestival.jpeg';
import folkFestivalImage from '../assets/images/folkfestival.jpeg';
import tribalFestivalImage from '../assets/images/tribalfestival.jpeg';
import fairFestivalImage from '../assets/images/fairfestival.jpeg';

// Dynamically import images for the HexagonGallery
const hexagonImages = [
  require('../assets/images/image-festivals/fes1.jpeg'),
  require('../assets/images/image-festivals/fes2.jpeg'),
  require('../assets/images/image-festivals/fes3.jpeg'),
  require('../assets/images/image-festivals/fes4.jpeg'),
  require('../assets/images/image-festivals/fes5.jpeg'),
  require('../assets/images/image-festivals/fes6.jpeg'),
  require('../assets/images/image-festivals/fes7.jpeg'),
];

const festivalData = [
  {
    title: "Pan Indian Festivals",
    description: "Discover the vibrant celebrations uniting communities across India",
    image: panFestivalImage,
  },
  {
    title: "Folk Festivals",
    description: "Understand the unique regional customs and festivities of India",
    image: folkFestivalImage,
  },
  {
    title: "Tribal Festivals",
    description: "Explore tales of cultural euphoria associated with nature, ancestors, and deities",
    image: tribalFestivalImage,
  },
  {
    title: "Fairs & Pilgrimages",
    description: "Delve into the festive extravaganzas and sacred pilgrimages",
    image: fairFestivalImage,
  },
];

const FestivalsPage = () => {
  return (
    <div className="bg-[#f3ece4]">
      <CardsHero 
        videoSrc={festivalsVideo} 
        title="Festivals of India" 
        description="Celebrate India's vibrant festivals that bring together culture, traditions, and joy."
      />

      {/* Main Festival Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Festivals of India</h1>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          India is a land of diverse cultures, and each state celebrates its own unique festivals that showcase the region’s traditions, art, and beliefs. From the vibrant colors of Holi to the lights of Diwali, Indian festivals bring people together in joy, unity, and spirituality. These celebrations are a time for families and communities to gather, honor their deities, and partake in a variety of customs that reflect India’s rich cultural tapestry.
        </p>
        <p className="text-lg text-[#8c6239] text-center max-w-6xl mx-auto mb-8">
          Festivals in India are not just events; they are immersive experiences filled with dance, music, rituals, and culinary treats. Each festival provides a glimpse into the local traditions, folklore, and history of the region, making it a cultural journey for anyone who takes part. Explore the diversity of Indian festivals through the categories below to discover the stories, customs, and excitement associated with each celebration.
        </p>

        {/* Festival Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {festivalData.map((festival, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              <img 
                src={festival.image} 
                alt={festival.title} 
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-xl font-semibold">{festival.title}</h2>
                <p className="text-sm mt-1">{festival.description}</p>
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

export default FestivalsPage;
