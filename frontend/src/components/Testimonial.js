import React from 'react';
import './Testimonial.css';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { text: "Explore Bharat offers an amazing cultural experience! I've learned so much.", author: "User A", image: "https://via.placeholder.com/80" },
  { text: "A wonderful platform to explore the rich heritage of India. Highly recommended!", author: "User B", image: "https://via.placeholder.com/80" },
  { text: "I love how easy it is to navigate and learn about various states' cultures.", author: "User C", image: "https://via.placeholder.com/80" },
  { text: "The platform is so informative and well-designed!", author: "User D", image: "https://via.placeholder.com/80" },
  { text: "I've never seen a website this dedicated to Indian culture.", author: "User E", image: "https://via.placeholder.com/80" },
  { text: "It's an exceptional tool for learning and exploring.", author: "User F", image: "https://via.placeholder.com/80" },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="text-4xl font-bold text-[#f3ece4] mb-8">What Our Users Say</h2>
      <div className="testimonial-scroller">W
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-item bg-white rounded-lg shadow-lg p-6"
            style={{ minWidth: '220px', maxWidth: '220px', minHeight: '380px' }}
          >
            {/* Profile Image */}
            <div className="testimonial-image-container">
              <img
                src={testimonial.image}
                alt={`${testimonial.author}'s profile`}
                className="testimonial-image"
              />
            </div>

            {/* Author's Name */}
            <p className="font-semibold text-gray-800 mt-10">{testimonial.author}</p>

            {/* Star Rating */}
            <div className="stars mt-2 mb-2">
              {[...Array(5)].map((star, i) => (
                <FaStar key={i} color="#f39c12" />
              ))}
            </div>

            {/* Quote Icon */}
            <div className="quote-icon">
              <FaQuoteLeft size={24} color="#B03A2E" />
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-[#8c6239] italic mt-2 mb-4">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
