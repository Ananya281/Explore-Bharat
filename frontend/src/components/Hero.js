import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/videos/Welcome to India.mp4'; // Adjust the path if necessary

const Hero = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploadedImage(file);
      setError(null);
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (uploadedImage) {
      const formData = new FormData();
      formData.append('file', uploadedImage);
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const predictedClass = response.data.predicted_class;

        console.log("Predicted Class:", predictedClass);
        navigate('/tourism', { state: { predictedClass } });
      } catch (error) {
        console.error("Prediction error:", error);
        setError("Failed to get prediction. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      navigate('/tourism');
    }
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video in Hero Section */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
          {error && <p className="text-red-500">{error}</p>} {/* Error message */}
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Processing...' : 'Search'}
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
            d="M0,8 C100,48 200,-12 300,8 C400,58 500,-12 600,8 C700,48 800,-12 900,8 C1000,48 1100,-12 1200,8 L1200,120 L0,120 Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
