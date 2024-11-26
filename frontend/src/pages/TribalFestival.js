import React from 'react';
import FestivalHero from '../components/FestivalHero';
import FestivalAbout from '../components/FestivalAbout';
import FestivalGrid from '../components/FestivalGrid';
import FestivalVideo from '../components/FestivalVideo';
import tribalFestivalImage from '../assets/images/tribalfestival.jpeg';
import tribalFestivalVideo from '../assets/videos/tribalfestival.mp4';

const TribalFestival = () => {
  const aboutParagraphs = [
    "Tribal festivals celebrate the unique customs, traditions, and art forms of India's indigenous communities. These festivals often include rituals, folk dances, and community feasts, offering a glimpse into the tribal way of life.",
    "Major tribal festivals like Hornbill in Nagaland and Bhagoria in Madhya Pradesh reflect the harmony between nature and culture. They are vibrant and deeply rooted in the tribal communities' connection to their environment.",
  ];

  const gridItems = [
    {
      title: "Hornbill Festival",
      description: "Nagaland's 'Festival of Festivals,' showcasing tribal culture.",
      image: "path/to/hornbill-festival.jpeg",
    },
    {
      title: "Bhagoria Festival",
      description: "A colorful tribal festival of Madhya Pradesh.",
      image: "path/to/bhagoria-festival.jpeg",
    },
    {
      title: "Karam Festival",
      description: "A harvest festival celebrated by tribal communities in Odisha, Bihar, and Jharkhand.",
      image: "path/to/karam-festival.jpeg",
    },
  ];

  return (
    <div>
      <FestivalHero 
        imageSrc={tribalFestivalImage} 
        title="Tribal Festivals of India"
      />
      <FestivalAbout paragraphs={aboutParagraphs} />
      <FestivalGrid gridItems={gridItems} />
      <FestivalVideo 
        videoSrc={tribalFestivalVideo} 
        title="Tribal Festivals Celebration"
      />
    </div>
  );
};

export default TribalFestival;
