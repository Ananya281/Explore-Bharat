import React from 'react';

const CuisineRecipy = ({ recipies }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-[#6b4226] mb-6">Famous Recipes</h2>
      <ul className="list-disc pl-8">
        {recipies.map((recipy, index) => (
          <li key={index} className="text-lg text-[#8c6239] mb-4">
            {recipy}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CuisineRecipy;
