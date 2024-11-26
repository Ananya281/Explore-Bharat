import React from 'react';
import MonumentHero from '../components/MonumentHero';
import MonumentAbout from '../components/MonumentAbout';
import MonumentGrid from '../components/MonumentGrid';
import MonumentVideo from '../components/MonumentVideo';

import architecturalImage from '../assets/images/architecturalwonder.jpeg';
import architecturalVideo from '../assets/videos/architecturalwonders.mp4';

const ArchitecturalWonders = () => {
  const aboutParagraphs = [
    "India's architectural wonders reflect the ingenuity and creativity of ancient civilizations. From intricately carved temples to towering forts, these monuments stand as a testament to India's rich history.",
    "Explore breathtaking structures like the Taj Mahal, Qutub Minar, and the Hampi ruins, each with a unique story to tell and unparalleled beauty to admire.",
  ];

  const gridItems = [
    {
      title: "Taj Mahal",
      description: "An ivory-white marble mausoleum, a symbol of eternal love.",
      image: "path/to/taj-mahal.jpeg",
    },
    {
      title: "Hampi Ruins",
      description: "A UNESCO site with stunning temple architecture.",
      image: "path/to/hampi.jpeg",
    },
    {
      title: "Qutub Minar",
      description: "A towering minaret showcasing Indo-Islamic architecture.",
      image: "path/to/qutub-minar.jpeg",
    },
  ];

  return (
    <div>
      <MonumentHero 
        imageSrc={architecturalImage} 
        title="Architectural Wonders"
      />
      <MonumentAbout paragraphs={aboutParagraphs} />
      <MonumentGrid gridItems={gridItems} />
      <MonumentVideo 
        videoSrc={architecturalVideo} 
        title="Explore Architectural Wonders"
      />
    </div>
  );
};

export default ArchitecturalWonders;
