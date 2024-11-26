import React from 'react';

const ArtGrid = ({ gridItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {gridItems.map((item, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtGrid;
