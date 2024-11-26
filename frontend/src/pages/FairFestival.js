import React from 'react';
import FestivalHero from '../components/FestivalHero';
import FestivalAbout from '../components/FestivalAbout';
import FestivalGrid from '../components/FestivalGrid';
import FestivalVideo from '../components/FestivalVideo';
import fairFestivalImage from '../assets/images/fairfestival.jpeg';
import fairFestivalVideo from '../assets/videos/fairfestival.mp4';

const FairFestival = () => {
  const aboutParagraphs = [
    "Indian fairs are vibrant gatherings that showcase the culture and traditions of various regions. These fairs are often held during festivals or harvest seasons and feature music, dance, and handicrafts.",
    "From the Pushkar Camel Fair in Rajasthan to the Sonepur Cattle Fair in Bihar, these events bring together people from all walks of life, offering a glimpse into India's rural charm and rich heritage.",
  ];

  const gridItems = [
    {
      title: "Pushkar Camel Fair",
      description: "A grand event showcasing camels and cultural activities.",
      image: "path/to/pushkar-camel-fair.jpeg",
    },
    {
      title: "Sonepur Cattle Fair",
      description: "Asia's largest cattle fair with cultural performances.",
      image: "path/to/sonepur-fair.jpeg",
    },
    {
      title: "Kumbh Mela",
      description: "The world's largest religious gathering.",
      image: "path/to/kumbh-mela.jpeg",
    },
  ];

  return (
    <div>
      <FestivalHero 
        imageSrc={fairFestivalImage} 
        title="Fair Festivals of India"
      />
      <FestivalAbout paragraphs={aboutParagraphs} />
      <FestivalGrid gridItems={gridItems} />
      <FestivalVideo 
        videoSrc={fairFestivalVideo} 
        title="Fair Festivals Celebration"
      />
    </div>
  );
};

export default FairFestival;
