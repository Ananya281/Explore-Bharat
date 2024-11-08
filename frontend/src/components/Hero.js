import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/videos/Welcome to India.mp4'; // Adjust the path if necessary

const Hero = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [textSearch, setTextSearch] = useState(''); // State for text input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploadedImage(file);
      setError(null); // Clear any previous error
    } else {
      setUploadedImage(null);
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
    } else if (textSearch.trim()) {
      const predictedClass = textSearch.trim();
      console.log("Predicted Class (from text search):", predictedClass);
      navigate('/tourism', { state: { predictedClass } });
    } else {
      setError("Please upload an image or enter a search term.");
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
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]" // Set position to fixed
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome to Explore Bharat</h1>
        <p className="mt-4">Discover India's rich cultural diversity</p>
        
        {/* Stacked Form Elements */}
        <form onSubmit={handleSearchSubmit} className="mt-8 flex flex-col items-center gap-4 w-full max-w-lg">
          <div className="flex flex-col items-center">
            <label className="file-label">
              <input 
                type="file" 
                onChange={handleImageUpload} 
                className="hidden" 
              />
              <span className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-gray-200">
                Choose File
              </span>
            </label>
            <span className="text-gray-400 mt-1 text-sm">
              {uploadedImage ? uploadedImage.name : 'No file chosen'}
            </span>
          </div>
          <input 
            type="text" 
            placeholder="Search for a place, monument, or cultural element..." 
            value={textSearch} 
            onChange={(e) => setTextSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border text-[#6b4226] bg-[#f3ece4] border-[#6b4226] placeholder-gray-500 hover:bg-[#e2d7c9] focus:outline-none focus:ring-2 focus:ring-[#6b4226] transition duration-300"
            style={{
              color: "#6b4226",
              transition: "color 0.3s ease",
            }}
            onFocus={(e) => e.target.style.color = "#4a2d18"} // Darker color on focus
            onBlur={(e) => e.target.style.color = "#6b4226"} // Original color on blur
          />
          <button 
  type="submit" 
  className="w-full px-6 py-2 bg-[#6b4226] text-[#f3ece4] rounded-lg hover:bg-[#e2d7c9] hover:text-[#4a2d18] transition duration-300"
  disabled={loading} // Disable button while loading
>
  {loading ? 'Processing...' : 'Search'}
</button>

        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>} {/* Error message */}
      </div>

      {/* Curvy SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C50,80 100,0 150,40 C200,80 250,0 300,40 C350,80 400,0 450,40 C500,80 550,0 600,40 C650,80 700,0 750,40 C800,80 850,0 900,40 C950,80 1000,0 1050,40 C1100,80 1150,0 1200,40 L1200,120 L0,120 Z"
            className="fill-current text-[#f3ece4]" // Updated color to match the About section
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
