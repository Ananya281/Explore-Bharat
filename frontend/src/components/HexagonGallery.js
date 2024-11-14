// src/components/HexagonGallery.js
import React from 'react';
import './HexagonGallery.css';

// Import your festival images
import festivalImage1 from '../assets/images/holi.jpeg';
import festivalImage2 from '../assets/images/holi.jpeg';
import festivalImage3 from '../assets/images/holi.jpeg';
import festivalImage4 from '../assets/images/holi.jpeg';
import festivalImage5 from '../assets/images/holi.jpeg';
import festivalImage6 from '../assets/images/holi.jpeg';
import festivalImage7 from '../assets/images/holi.jpeg';

const HexagonGallery = () => {
  const images = [
    festivalImage1,
    festivalImage2,
    festivalImage3,
    festivalImage4,
    festivalImage5,
    festivalImage6,
    festivalImage7,
  ];

  return (
    <div className="hexagon-gallery">
      {images.map((image, index) => (
        <div key={index} className="hexagon">
          <div className="hexagon-inner">
            <div className="hexagon-content" style={{ backgroundImage: `url(${image})` }}>
              {/* Add any overlay text or effects here if needed */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HexagonGallery;
