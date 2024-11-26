import React from 'react';
import MonumentHero from '../components/MonumentHero';
import MonumentAbout from '../components/MonumentAbout';
import MonumentGrid from '../components/MonumentGrid';
import MonumentVideo from '../components/MonumentVideo';

import ancientFortsImage from '../assets/images/ancientfort.jpeg';
import ancientFortsVideo from '../assets/videos/ancientforts.mp4';

const AncientForts = () => {
  const aboutParagraphs = [
    "India's ancient forts stand as a testament to its glorious past and military prowess. These structures served as royal residences, military bases, and symbols of power for various dynasties.",
    "From the massive walls of the Red Fort in Delhi to the hilltop grandeur of Mehrangarh Fort in Rajasthan, these forts narrate stories of battles, resilience, and architectural brilliance.",
  ];

  const gridItems = [
    {
      title: "Mehrangarh Fort",
      description: "A majestic fort in Jodhpur with a commanding hilltop view.",
      image: "path/to/mehrangarh-fort.jpeg",
    },
    {
      title: "Red Fort",
      description: "A UNESCO World Heritage Site and a symbol of India's independence.",
      image: "path/to/red-fort.jpeg",
    },
    {
      title: "Golconda Fort",
      description: "A historic fort known for its acoustics and grand architecture.",
      image: "path/to/golconda-fort.jpeg",
    },
  ];

  return (
    <div>
      <MonumentHero 
        imageSrc={ancientFortsImage} 
        title="Ancient Forts"
      />
      <MonumentAbout paragraphs={aboutParagraphs} />
      <MonumentGrid gridItems={gridItems} />
      <MonumentVideo 
        videoSrc={ancientFortsVideo} 
        title="Explore Ancient Forts"
      />
    </div>
  );
};

export default AncientForts;
