import React from 'react';
import FestivalHero from '../components/FestivalHero';
import FestivalAbout from '../components/FestivalAbout';
import FestivalGrid from '../components/FestivalGrid';
import FestivalVideo from '../components/FestivalVideo';
import folkFestivalImage from '../assets/images/folkfestival.jpeg';
import folkFestivalVideo from '../assets/videos/folkfestival.mp4';

const FolkFestival = () => {
  const aboutParagraphs = [
    "Folk festivals in India showcase the traditional music, dance, and art forms of different regions. These festivals celebrate the cultural heritage of rural India, often tied to agricultural practices or local folklore.",
    "From the vibrant Bihu in Assam to the soulful Rajasthani folk dances, these festivals highlight the richness of India's folk traditions. Experience the energy and colors of these unique celebrations that keep ancient traditions alive.",
  ];

  const gridItems = [
    {
      title: "Bihu Festival",
      description: "Assam's harvest festival filled with folk music and dance.",
      image: "path/to/bihu-festival.jpeg",
    },
    {
      title: "Lokrang Festival",
      description: "A celebration of folk traditions across India.",
      image: "path/to/lokrang-festival.jpeg",
    },
    {
      title: "Kullu Dussehra",
      description: "A grand procession showcasing Himachal Pradesh's culture.",
      image: "path/to/kullu-dussehra.jpeg",
    },
  ];

  return (
    <div>
      <FestivalHero 
        imageSrc={folkFestivalImage} 
        title="Folk Festivals of India"
      />
      <FestivalAbout paragraphs={aboutParagraphs} />
      <FestivalGrid gridItems={gridItems} />
      <FestivalVideo 
        videoSrc={folkFestivalVideo} 
        title="Folk Festivals Celebration"
      />
    </div>
  );
};

export default FolkFestival;
