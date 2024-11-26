import React from 'react';

const ArtHero = ({ imageSrc, title }) => {
  return (
    <div className="bg-[#f3ece4] p-8">
      <h1 className="text-4xl font-bold text-center text-[#6b4226] mb-6">{title}</h1>
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full max-h-96 object-cover rounded-lg mb-8 shadow-lg"
      />
    </div>
  );
};

export default ArtHero;
