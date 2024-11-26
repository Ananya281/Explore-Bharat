import React from 'react';
import ArtHero from '../components/ArtHero';
import ArtAbout from '../components/ArtAbout';
import ArtGrid from '../components/ArtGrid';
import ArtVideo from '../components/ArtVideo';
import visualArtsVideo from '../assets/videos/visualArts.mp4';
import visualArtsImage from '../assets/images/visualarts.jpeg';

const VisualArts = () => {
  const aboutParagraphs = [
    "Visual arts in India have a deep-rooted history, encompassing painting, sculpture, and architecture. The art forms often reflect religious and cultural themes, showcasing India's heritage.",
    "Styles such as Madhubani, Warli, and Tanjore paintings are not just artistic expressions but also a representation of the regions they come from, carrying forward traditional techniques.",
  ];

  const gridItems = [
    {
      title: "Madhubani Art",
      description: "An intricate art style originating from Bihar.",
      image: "path/to/madhubani.jpeg",
    },
    {
      title: "Warli Art",
      description: "A tribal art form featuring geometric patterns.",
      image: "path/to/warli.jpeg",
    },
    {
      title: "Tanjore Paintings",
      description: "South Indian paintings known for their gold leaf detailing.",
      image: "path/to/tanjore.jpeg",
    },
  ];

  return (
    <div>
      <ArtHero 
        imageSrc={visualArtsImage} 
        title="Visual Arts" 
      />
      <ArtAbout paragraphs={aboutParagraphs} />
      <ArtGrid gridItems={gridItems} />
      <ArtVideo videoSrc={visualArtsVideo} />
    </div>
  );
};

export default VisualArts;
