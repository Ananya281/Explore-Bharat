// src/pages/ArtAndCraftsPage.js
import React from 'react';

const ArtAndCraftsPage = () => {
  return (
    <div className="bg-[#f3ece4] p-8">
      <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Traditional Indian Art and Crafts</h1>
      <p className="text-lg text-[#8c6239] text-center max-w-3xl mx-auto mb-8">
        Indian art and crafts are rooted in culture, tradition, and the creative spirit of artisans across the nation.
      </p>

      <div className="space-y-6">
        {/* Example Art and Craft Highlight */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Madhubani Art</h2>
          <p className="text-[#8c6239] mt-2">
            Originating from Bihar, Madhubani paintings are known for their intricate patterns and vibrant colors.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Warli Art</h2>
          <p className="text-[#8c6239] mt-2">
            A traditional tribal art form from Maharashtra, Warli art uses geometric patterns to depict daily life.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Pattachitra</h2>
          <p className="text-[#8c6239] mt-2">
            This ancient folk art from Odisha and West Bengal tells stories of mythology and folklore on cloth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftsPage;
