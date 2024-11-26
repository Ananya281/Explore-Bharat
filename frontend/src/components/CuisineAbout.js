import React from 'react';

const CuisineAbout = ({ paragraphs }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {paragraphs.map((text, index) => (
        <p 
          key={index} 
          className="text-lg text-[#8c6239] text-center mb-8"
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default CuisineAbout;
