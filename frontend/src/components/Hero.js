import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement the search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <section className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Explore Bharat</h1>
        <p className="text-gray-600 mt-4">Discover India's rich cultural diversity</p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="mt-8 flex justify-center">
          <input 
            type="text" 
            className="px-4 py-3 w-1/2 max-w-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Search for cultural heritage, monuments, festivals..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button 
            type="submit" 
            className="ml-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
