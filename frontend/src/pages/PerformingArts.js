import React from 'react';
import ArtHero from '../components/ArtHero';
import ArtAbout from '../components/ArtAbout';
import ArtGrid from '../components/ArtGrid';
import ArtVideo from '../components/ArtVideo';
import performingArtsVideo from '../assets/videos/performingArts.mp4';
import performingArtsImage from '../assets/images/performingarts.jpeg';

const PerformingArts = () => {
  const aboutParagraphs = [
    "Performing arts in India include classical dances, traditional music, and theater. These art forms are deeply intertwined with religious and cultural practices.",
    "Each region contributes unique styles, such as Bharatnatyam from Tamil Nadu, Kathak from Northern India, and Kathakali from Kerala, making India's performing arts a vibrant and diverse tradition.",
  ];

  const gridItems = [
    {
      title: "Bharatnatyam",
      description: "A classical dance form from Tamil Nadu, showcasing intricate footwork and expressions.",
      image: "path/to/bharatnatyam.jpeg",
    },
    {
      title: "Kathakali",
      description: "A dramatic art form from Kerala featuring elaborate costumes and storytelling.",
      image: "path/to/kathakali.jpeg",
    },
    {
      title: "Tabla",
      description: "A percussion instrument central to Indian classical music.",
      image: "path/to/tabla.jpeg",
    },
  ];

  return (
    <div>
      <ArtHero 
        imageSrc={performingArtsImage} 
        title="Performing Arts" 
      />
      <ArtAbout paragraphs={aboutParagraphs} />
      <ArtGrid gridItems={gridItems} />
      <ArtVideo videoSrc={performingArtsVideo} />
    </div>
  );
};

export default PerformingArts;
