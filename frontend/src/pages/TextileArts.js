import React from 'react';
import ArtHero from '../components/ArtHero'; // Hero component
import ArtAbout from '../components/ArtAbout'; // About section component
import ArtGrid from '../components/ArtGrid'; // Grid component
import textileArtsImage from '../assets/images/textilearts.jpeg'; // Hero image
import artPattern from '../assets/images/about.svg'; // Decorative SVG pattern

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
    <div className="relative bg-[#f3ece4]">
      {/* Decorative Patterns */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${artPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${artPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Hero Section */}
      <ArtHero 
        imageSrc={textileArtsImage} 
        title="Textile Arts" 
      />

      {/* About Section */}
      <section className="py-20 px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif mb-6">
          Explore <span className="italic text-[#8c6239]">Textile Arts</span>
        </h2>
        <div className="flex justify-center mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>
        <ArtAbout paragraphs={aboutParagraphs} />
      </section>

      {/* Grid Section */}
      <section className="py-10 px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-center text-[#6b4226] mb-6">
          Textile Arts of India
        </h2>
        <ArtGrid gridItems={gridItems} />
      </section>
    </div>
  );
};

export default TextileArts;
