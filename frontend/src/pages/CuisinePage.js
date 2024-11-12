// src/pages/CuisinePage.js
import React from 'react';

const CuisinePage = () => {
  return (
    <div className="bg-[#f3ece4] p-8">
      <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Indian Cuisine</h1>
      <p className="text-lg text-[#8c6239] text-center max-w-3xl mx-auto mb-8">
        Indian cuisine is renowned for its use of spices, diverse flavors, and regional dishes that reflect the country’s rich culinary heritage.
      </p>

      <div className="space-y-6">
        {/* Example Cuisine Highlight */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Biryani</h2>
          <p className="text-[#8c6239] mt-2">
            A flavorful rice dish that combines fragrant spices, tender meat, or vegetables. Each region in India has its unique take on Biryani.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Dosa</h2>
          <p className="text-[#8c6239] mt-2">
            A popular South Indian dish, dosa is a thin, crispy pancake served with sambar and chutney.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Chaat</h2>
          <p className="text-[#8c6239] mt-2">
            A popular street food, chaat is a combination of crispy ingredients, tangy tamarind sauce, and spices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CuisinePage;
