// src/pages/FestivalsPage.js
import React from 'react';

const FestivalsPage = () => {
  return (
    <div className="bg-[#f3ece4] p-8">
      <h1 className="text-4xl font-bold text-[#6b4226] text-center mb-6">Festivals of India</h1>
      <p className="text-lg text-[#8c6239] text-center max-w-3xl mx-auto mb-8">
        India is known for its vibrant festivals, each bringing a unique celebration of culture, traditions, and values.
      </p>

      <div className="space-y-6">
        {/* Example Festival Highlight */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Diwali</h2>
          <p className="text-[#8c6239] mt-2">
            Known as the Festival of Lights, Diwali is celebrated with joy, lights, sweets, and firecrackers. It symbolizes the victory of light over darkness.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Holi</h2>
          <p className="text-[#8c6239] mt-2">
            The Festival of Colors, Holi is celebrated in spring and signifies the end of winter and the victory of good over evil.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6b4226]">Navratri</h2>
          <p className="text-[#8c6239] mt-2">
            Celebrated for nine days, Navratri honors the goddess Durga and includes vibrant dances like Garba and Dandiya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FestivalsPage;
