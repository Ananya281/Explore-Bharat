import React from 'react';
import ArtHero from '../components/ArtHero';
import ArtAbout from '../components/ArtAbout';
import ArtGrid from '../components/ArtGrid';
import ArtVideo from '../components/ArtVideo';
import textileArtsVideo from '../assets/videos/textileArts.mp4';
import textileArtsImage from '../assets/images/textilearts.jpeg';

const TextileArts = () => {
  const aboutParagraphs = [
    "Textile arts in India are celebrated globally for their craftsmanship, intricate patterns, and rich heritage. From handwoven sarees to embroidered fabrics, India's textile tradition is unparalleled.",
    "Each region offers unique textile styles, such as Banarasi silk from Varanasi, Pashmina from Kashmir, and Kanjivaram from Tamil Nadu. These textiles tell stories of the culture and tradition of their origin.",
  ];

  const gridItems = [
    {
      title: "Banarasi Silk",
      description: "Luxurious silk sarees with intricate designs from Varanasi.",
      image: "path/to/banarasi.jpeg",
    },
    {
      title: "Pashmina Wool",
      description: "Soft and warm shawls made from fine Kashmiri wool.",
      image: "path/to/pashmina.jpeg",
    },
    {
      title: "Kanjivaram Silk",
      description: "Richly woven silk sarees from Tamil Nadu.",
      image: "path/to/kanjivaram.jpeg",
    },
  ];

  return (
    <div>
      <ArtHero 
        imageSrc={textileArtsImage} 
        title="Textile Arts" 
      />
      <ArtAbout paragraphs={aboutParagraphs} />
      <ArtGrid gridItems={gridItems} />
      <ArtVideo videoSrc={textileArtsVideo} />
    </div>
  );
};

export default TextileArts;
