// src/components/ImageCollage.js
import React from 'react';
import collageImage from '../assets/images/collage.png'; // Update the path as needed

const ImageCollage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#f3ece4] z-2">
      {/* Display the collage image */}
      <div className="relative overflow-hidden max-w-3xl">
        <img
          src={collageImage}
          alt="Vibrant Culture of India"
          className="w-full h-full object-cover z-2"
        />
        {/* Optional Overlay for text
        <div className="absolute inset-0 bg-black  flex items-center justify-center"> */}
          {/* <h3 className="text-white text-3xl font-bold text-center p-4"> */}
            {/* Explore the Vibrant Culture of India */}
          {/* </h3> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ImageCollage;
