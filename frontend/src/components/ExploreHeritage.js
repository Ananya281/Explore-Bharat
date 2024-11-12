import React from 'react';
import { Link } from 'react-router-dom';
import festivalImage from '../assets/images/festival.jpeg';
import architectureImage from '../assets/images/architecture.jpeg';
import artsImage from '../assets/images/arts.jpeg';
import cuisineImage from '../assets/images/cuisine.jpeg';

const ExploreHeritage = () => {
  return (
    <section className="explore-heritage py-16 bg-[#f3ece4] text-center">
      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Explore India's Heritage</h2>
      <p className="text-lg text-[#8c6239] mb-12 max-w-2xl mx-auto">
        Discover the essence of India through its festivals, architecture, cuisine, and arts. Start your journey through the country’s vibrant culture.
      </p>
      
      <div className="flex justify-center gap-6 px-8">
        {/* Festivals Card */}
        <Link 
          to="/festivals" 
          className="relative w-1/4 h-64 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          style={{ backgroundImage: `url(${festivalImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h3 className="text-xl font-semibold">Festivals</h3>
            <p className="text-sm">Colorful celebrations that unite communities.</p>
          </div>
        </Link>
        
        {/* Monuments Card */}
        <Link 
          to="/monuments" 
          className="relative w-1/4 h-64 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          style={{ backgroundImage: `url(${architectureImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h3 className="text-xl font-semibold">Monuments</h3>
            <p className="text-sm">Ancient sites with stories of India's past.</p>
          </div>
        </Link>

        {/* Art and Crafts Card */}
        <Link 
          to="/art-and-crafts" 
          className="relative w-1/4 h-64 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          style={{ backgroundImage: `url(${artsImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h3 className="text-xl font-semibold">Art and Crafts</h3>
            <p className="text-sm">Timeless crafts that reflect regional uniqueness.</p>
          </div>
        </Link>

        {/* Cuisine Card */}
        <Link 
          to="/cuisine" 
          className="relative w-1/4 h-64 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          style={{ backgroundImage: `url(${cuisineImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h3 className="text-xl font-semibold">Cuisine</h3>
            <p className="text-sm">A journey through diverse flavors and aromas.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ExploreHeritage;
