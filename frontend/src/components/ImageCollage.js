// src/components/ImageCollage.js
import React from 'react';
import festivalImage from '../assets/images/holi.jpeg';
import monumentImage from '../assets/images/tajmahal.jpeg';
import danceImage from '../assets/images/kathak.jpeg';
import cuisineImage from '../assets/images/food.jpeg';

const ImageCollage = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 p-6 bg-[#f3ece4] max-w-3xl mx-auto h-screen">
      {/* Top Left - Festival Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg row-span-2 col-span-1 h-48 max-h-48">
        <img src={festivalImage} alt="Festival" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold">Festivals</h3>
        </div>
      </div>

      {/* Top Right - Monument Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg col-span-2 h-48 max-h-48">
        <img src={monumentImage} alt="Monument" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold">Monuments</h3>
        </div>
      </div>

      {/* Middle Right - Dance Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg row-span-2 col-span-1 h-48 max-h-48">
        <img src={danceImage} alt="Traditional Dance" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold">Traditional Dance</h3>
        </div>
      </div>

      {/* Bottom Left - Cuisine Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg col-span-1 h-48 max-h-48">
        <img src={cuisineImage} alt="Cuisine" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white text-lg font-bold">Cuisine</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
