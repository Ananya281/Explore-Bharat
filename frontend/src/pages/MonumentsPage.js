// src/pages/MonumentsPage.js
import React from 'react';

const MonumentsPage = () => {
  return (
    <div className="bg-[#f3ece4] p-8">
      <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Historical Monuments of India</h1>
      <p className="text-lg text-[#8c6239] text-center max-w-3xl mx-auto mb-8">
        India's monuments are a testament to its rich history and architectural genius.
      </p>

      <div className="space-y-6">
        {/* Example Monument Highlight */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Taj Mahal</h2>
          <p className="text-[#8c6239] mt-2">
            Located in Agra, this stunning marble mausoleum is a UNESCO World Heritage site and one of the Seven Wonders of the World.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Hampi</h2>
          <p className="text-[#8c6239] mt-2">
            An ancient village with ruins of magnificent temples and monuments from the Vijayanagara Empire.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Konark Sun Temple</h2>
          <p className="text-[#8c6239] mt-2">
            This 13th-century temple in Odisha is dedicated to the Sun God and known for its architectural brilliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonumentsPage;
