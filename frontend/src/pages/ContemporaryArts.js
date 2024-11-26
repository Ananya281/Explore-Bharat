import React from 'react';
import ArtHero from '../components/ArtHero';
import ArtAbout from '../components/ArtAbout';
import ArtGrid from '../components/ArtGrid';
import ArtVideo from '../components/ArtVideo';
import contemporaryArtsVideo from '../assets/videos/contemporaryArts.mp4';
import contemporaryArtsImage from '../assets/images/contemporaryarts.jpeg';

const ContemporaryArts = () => {
  const aboutParagraphs = [
    "Dive into the vibrant world of contemporary Indian art, where tradition meets modern innovation. Artists explore new mediums, breaking boundaries to create unique and thought-provoking works.",
    "This art form reflects the cultural, social, and political narratives of modern India, offering a glimpse into the evolving artistic landscape of the country.",
  ];

  const gridItems = [
    {
      title: "Mixed Media Art",
      description: "A blend of materials to create unique visual narratives.",
      image: "path/to/mixed-media.jpeg",
    },
    {
      title: "Abstract Paintings",
      description: "Expressive art focusing on form and color.",
      image: "path/to/abstract.jpeg",
    },
    {
      title: "Digital Art",
      description: "The intersection of technology and creativity.",
      image: "path/to/digital-art.jpeg",
    },
  ];

  return (
    <div>
      <ArtHero 
        imageSrc={contemporaryArtsImage} 
        title="Contemporary Arts" 
      />
      <ArtAbout paragraphs={aboutParagraphs} />
      <ArtGrid gridItems={gridItems} />
      <ArtVideo videoSrc={contemporaryArtsVideo} />
    </div>
  );
};

export default ContemporaryArts;
