// src/components/Testimonial.js
import React from 'react';

const Testimonial = () => {
  return (
    <div className="container mx-auto text-center py-12 px-6">
      <h2 className="text-4xl font-bold text-[#6b4226] mb-6">What Our Users Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Testimonials */}
        <div className="p-6 bg-[#f3ece4] rounded-lg shadow-md">
          <p className="text-lg text-[#8c6239]">"Explore Bharat offers an amazing cultural experience! I've learned so much."</p>
          <p className="mt-4 font-semibold">- User A</p>
        </div>
        <div className="p-6 bg-[#f3ece4] rounded-lg shadow-md">
          <p className="text-lg text-[#8c6239]">"A wonderful platform to explore the rich heritage of India. Highly recommended!"</p>
          <p className="mt-4 font-semibold">- User B</p>
        </div>
        <div className="p-6 bg-[#f3ece4] rounded-lg shadow-md">
          <p className="text-lg text-[#8c6239]">"I love how easy it is to navigate and learn about various states' cultures."</p>
          <p className="mt-4 font-semibold">- User C</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
