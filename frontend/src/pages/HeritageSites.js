import React from 'react';
import MonumentHero from '../components/MonumentHero';
import MonumentAbout from '../components/MonumentAbout';
import MonumentGrid from '../components/MonumentGrid';
import MonumentVideo from '../components/MonumentVideo';

import heritageImage from '../assets/images/heritagesite.jpeg';
import heritageVideo from '../assets/videos/heritagesite.mp4'; // Example video

const HeritageSites = () => {
  const aboutParagraphs = [
    "India's UNESCO World Heritage Sites are a treasure trove of history and culture. These sites, ranging from natural wonders to man-made marvels, offer a glimpse into the country's rich heritage and diverse landscape.",
    "Visit iconic locations like the Ajanta and Ellora Caves, the Sun Temple at Konark, or the Valley of Flowers, and immerse yourself in the beauty and history that these heritage sites have preserved for generations.",
  ];

  const gridItems = [
    {
      title: "Ajanta Caves",
      description: "Ancient Buddhist rock-cut caves known for stunning murals.",
      image: "path/to/ajanta-caves.jpeg",
    },
    {
      title: "Sun Temple, Konark",
      description: "A 13th-century temple dedicated to the Sun God, showcasing exquisite architecture.",
      image: "path/to/sun-temple.jpeg",
    },
    {
      title: "Valley of Flowers",
      description: "A UNESCO site with vibrant alpine flora in the Himalayas.",
      image: "path/to/valley-of-flowers.jpeg",
    },
  ];

  return (
    <div>
      <MonumentHero 
        imageSrc={heritageImage} 
        title="Heritage Sites"
      />
      <MonumentAbout paragraphs={aboutParagraphs} />
      <MonumentGrid gridItems={gridItems} />
      <MonumentVideo 
        videoSrc={heritageVideo} 
        title="Discover Heritage Sites"
      />
    </div>
  );
};

export default HeritageSites;
