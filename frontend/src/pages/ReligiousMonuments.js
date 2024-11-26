import React from 'react';
import MonumentHero from '../components/MonumentHero';
import MonumentAbout from '../components/MonumentAbout';
import MonumentGrid from '../components/MonumentGrid';
import MonumentVideo from '../components/MonumentVideo';

import religiousImage from '../assets/images/religiousmonument.jpeg';
import religiousVideo from '../assets/videos/religiousmonuments.mp4';

const ReligiousMonuments = () => {
  const aboutParagraphs = [
    "India's religious monuments are a reflection of its deep spiritual heritage and cultural diversity. From ancient temples and mosques to churches and monasteries, these sites are places of worship, architectural beauty, and historical significance.",
    "Explore iconic sites like the Golden Temple in Amritsar, the Brihadeeswarar Temple in Tamil Nadu, and the Jama Masjid in Delhi. Each monument represents the beliefs, traditions, and artistic excellence of its era.",
  ];

  const gridItems = [
    {
      title: "Golden Temple",
      description: "A stunning Sikh temple in Amritsar, known for its golden architecture.",
      image: "path/to/golden-temple.jpeg",
    },
    {
      title: "Brihadeeswarar Temple",
      description: "A UNESCO World Heritage Site showcasing Dravidian architecture.",
      image: "path/to/brihadeeswarar-temple.jpeg",
    },
    {
      title: "Jama Masjid",
      description: "One of the largest mosques in India, located in Delhi.",
      image: "path/to/jama-masjid.jpeg",
    },
  ];

  return (
    <div>
      <MonumentHero 
        imageSrc={religiousImage} 
        title="Religious Monuments"
      />
      <MonumentAbout paragraphs={aboutParagraphs} />
      <MonumentGrid gridItems={gridItems} />
      <MonumentVideo 
        videoSrc={religiousVideo} 
        title="Discover Religious Monuments"
      />
    </div>
  );
};

export default ReligiousMonuments;
