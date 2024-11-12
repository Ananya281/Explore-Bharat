// src/components/Testimonial.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { text: "Explore Bharat offers an amazing cultural experience! I've learned so much.", author: "User A" },
  { text: "A wonderful platform to explore the rich heritage of India. Highly recommended!", author: "User B" },
  { text: "I love how easy it is to navigate and learn about various states' cultures.", author: "User C" },
  { text: "The platform is so informative and well-designed!", author: "User D" },
  { text: "I've never seen a website this dedicated to Indian culture.", author: "User E" },
  { text: "It's an exceptional tool for learning and exploring.", author: "User F" },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto text-center py-12 px-6 overflow-hidden">
      <h2 className="text-4xl font-bold text-[#f3ece4] mb-8">What Our Users Say</h2> {/* Updated heading color */}
      <motion.div
        className="flex"
        style={{ display: 'flex', width: 'max-content' }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30, // Adjust for slower or faster speed
        }}
      >
        {/* Duplicate testimonials to create a seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-[#f3ece4] rounded-lg shadow-md mx-4"
            style={{ minWidth: '200px', maxWidth: '200px', minHeight: '300px' }}
          >
            <p className="text-lg text-[#8c6239] italic">"{testimonial.text}"</p>
            <p className="mt-4 font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;
