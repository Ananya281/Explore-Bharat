import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setUploadedImage(e.target.files[0]);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (uploadedImage) {
      const formData = new FormData();
      formData.append('file', uploadedImage);

      try {
        const response = await axios.post('http://localhost:5000/predict', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const predictedClass = response.data.predicted_class;

        // Navigate to TourismPage with the predicted class
        navigate('/tourism', { state: { predictedClass } });
      } catch (error) {
        console.error("Prediction error:", error);
      }
    } else {
      // If no image is uploaded, still redirect to TourismPage without prediction data
      navigate('/tourism');
    }
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background YouTube Video in Hero Section */}
      <iframe
        title="Explore Bharat Background Video"
        src="https://www.youtube.com/embed/35npVaFGHMY?autoplay=1&mute=1&loop=1&playlist=35npVaFGHMY&controls=0&showinfo=0&modestbranding=1"
        className="absolute top-0 left-0 w-screen h-screen z-[-1]"
        frameBorder="0"
        allow="autoplay; loop; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white z-10">
        <h1 className="text-4xl font-bold">Welcome to Explore Bharat</h1>
        <p className="mt-4">Discover India's rich cultural diversity</p>
        
        {/* Image Upload and Submit Button */}
        <form onSubmit={handleSearchSubmit} className="mt-8 flex flex-col items-center">
          <input 
            type="file" 
            onChange={handleImageUpload} 
            className="mb-4"
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C100,90 200,30 300,60 C400,90 500,30 600,60 C700,90 800,30 900,60 C1000,90 1100,30 1200,60 L1200,120 L0,120 Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
