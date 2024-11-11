import React, { useState } from 'react';
import feedbackPattern from '../assets/images/about.svg'; // Import the SVG decoration

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setStatus('Thank you for your feedback!');
    setFeedback(''); // Clear the feedback input
  };

  return (
    <section className="bg-[#f3ece4] py-20 relative overflow-hidden">
      {/* Decorative Pattern similar to About and Contact sections */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${feedbackPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${feedbackPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#6b4226] font-serif">
          We Value Your <span className="italic text-[#8c6239]">Feedback</span>
        </h2>
        <div className="flex justify-center mt-3 mb-6">
          <hr className="border-t-2 border-[#8c6239] w-32" />
        </div>

        <p className="text-[#8c6239] mt-8 max-w-3xl mx-auto text-lg leading-relaxed font-light">
          Your feedback helps us enhance your experience with <span className="font-semibold">Explore Bharat</span>. Share your thoughts with us!
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12">
          <textarea 
            name="feedback" 
            placeholder="Your Feedback" 
            className="w-full p-4 border border-gray-300 rounded-lg mb-4" 
            value={feedback} 
            onChange={handleInputChange} 
            required 
          />
          <button className="bg-[#8c6239] text-white px-8 py-3 rounded-lg hover:bg-[#6b4226] transition duration-300">
            Submit Feedback
          </button>
        </form>
        {status && <p className="mt-4 text-lg text-[#6b4226]">{status}</p>}
      </div>

      <div
        className="mt-10 w-full h-8 bg-repeat-x bg-bottom"
        style={{ backgroundImage: "url('/path/to/border-pattern.png')" }}
      ></div>
    </section>
  );
}

export default Feedback;
