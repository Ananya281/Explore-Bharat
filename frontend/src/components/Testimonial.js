import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What People Say</h2>
        <div className="mt-8">
          <blockquote className="text-gray-600 italic">
            "Explore Bharat gave me a deeper connection to India's diverse traditions!"
          </blockquote>
          <p className="text-gray-800 mt-4">- User Review</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
