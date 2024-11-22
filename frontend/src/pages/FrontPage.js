import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutPattern from '../assets/images/about.svg'; // Import the SVG decoration
import './FrontPage.css'; // CSS file for shared styles

const DecorativePattern = ({ position }) => (
  <div
    className={`absolute ${position} w-48 h-48 opacity-20 bg-no-repeat bg-contain`}
    style={{
      backgroundImage: `url(${aboutPattern})`,
      filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
    }}
  ></div>
);

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3ece4] relative">
      {/* Decorative Patterns */}
      <DecorativePattern position="top-0 left-0" />
      <DecorativePattern position="bottom-0 right-0" />

      <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg relative z-10 min-h-[500px] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#6b4226]">Welcome to Explore Bharat</h1>
        <p className="text-center text-[#8c6239] mb-8">
          Discover the cultural diversity and heritage of India.
        </p>
        <div className="flex w-full justify-center gap-4">
          <button
            className="w-1/2 bg-[#6b4226] text-white py-3 rounded-lg hover:bg-[#8c6239] transition duration-300"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="w-1/2 bg-[#8c6239] text-white py-3 rounded-lg hover:bg-[#6b4226] transition duration-300"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
