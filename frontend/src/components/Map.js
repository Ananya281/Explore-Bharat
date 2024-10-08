import React from 'react';

const Map = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Explore India’s States</h2>
        <p className="text-gray-600 mt-4">Click on a state to explore its culture and heritage.</p>
        <div className="mt-8">
          {/* Insert interactive map code here */}
          <div className="bg-gray-200 h-64">[Interactive Map]</div>
        </div>
      </div>
    </section>
  );
}

export default Map;
