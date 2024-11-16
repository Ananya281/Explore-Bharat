import React from 'react';
import './HexagonGallery.css';

const HexagonGallery = ({ images }) => {
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
