import React from 'react';
import './ImageGrid.css';
import aboutPattern from '../assets/images/about.svg'; // Import the SVG decoration

// Import images for the grid
import Architecture from '../assets/images/architecture.jpeg';
import Arts from '../assets/images/arts.jpeg';
import Baisakhi from '../assets/images/baisakhi.jpg';
import Cuisine from '../assets/images/cuisine.jpeg';
import Festival from '../assets/images/festival.jpeg';
import Kathak from '../assets/images/kathak.jpeg';
import Kerala from '../assets/images/kerela.jpeg';
import Rajasthan from '../assets/images/rajasthan.jpeg';
import TajMahal from '../assets/images/tajmahal.jpeg'; // Central Image
import Warli from '../assets/images/warli.jpeg';

const ImageGrid = () => {
  const images = [
    { src: Architecture, alt: 'Architecture' },
    { src: Arts, alt: 'Arts' },
    { src: Baisakhi, alt: 'Baisakhi' },
    { src: Cuisine, alt: 'Cuisine' },
    { src: TajMahal, alt: 'Taj Mahal' }, // Central Image
    { src: Festival, alt: 'Festival' },
    { src: Kathak, alt: 'Kathak' },
    { src: Kerala, alt: 'Kerala' },
    { src: Rajasthan, alt: 'Rajasthan' },
    { src: Warli, alt: 'Warli' }
  ];

  return (
    <section className="image-grid-container relative">
      {/* Decorative Flowers at Various Positions */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 opacity-15 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <h2 className="image-grid-title">Explore Cultural Highlights</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className={`image-grid-item item-${index + 1}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
