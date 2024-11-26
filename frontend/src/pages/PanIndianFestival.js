import React from 'react';
import FestivalHero from '../components/FestivalHero';
import FestivalAbout from '../components/FestivalAbout';
import FestivalGrid from '../components/FestivalGrid';
import FestivalVideo from '../components/FestivalVideo';
import panFestivalImage from '../assets/images/panfestival.jpeg';
import panFestivalVideo from '../assets/videos/panfestival.mp4';

const PanIndianFestival = () => {
  const aboutParagraphs = [
    "Pan Indian Festivals bring together communities from all over the country. Celebrations such as Diwali, Holi, and Eid exemplify the unity in diversity that India represents. These festivals are celebrated with vibrant colors, grand feasts, and age-old traditions.",
    "From lighting diyas during Diwali to playing with colors during Holi, each festival offers a unique cultural experience. Discover the stories behind these festivals and how they unite millions of people in joy and spirituality.",
  ];

  const gridItems = [
    {
      title: "Diwali",
      description: "The festival of lights celebrated with diyas and fireworks.",
      image: "path/to/diwali-image.jpeg",
    },
    {
      title: "Holi",
      description: "The festival of colors, marking the arrival of spring.",
      image: "path/to/holi-image.jpeg",
    },
    {
      title: "Eid",
      description: "A festival of feasts and prayers celebrated across the country.",
      image: "path/to/eid-image.jpeg",
    },
  ];

  return (
    <div>
      <FestivalHero 
        imageSrc={panFestivalImage} 
        title="Pan Indian Festivals"
      />
      <FestivalAbout paragraphs={aboutParagraphs} />
      <FestivalGrid gridItems={gridItems} />
      <FestivalVideo 
        videoSrc={panFestivalVideo} 
        title="Pan Indian Festivals Celebration"
      />
    </div>
  );
};

export default PanIndianFestival;
