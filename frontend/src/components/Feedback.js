import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log('Feedback submitted:', feedback);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Give Us Your Feedback</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <textarea 
            name="feedback" 
            placeholder="Your Feedback" 
            className="w-full p-4 border border-gray-300 rounded-lg mb-4" 
            value={feedback} 
            onChange={handleInputChange} 
            required 
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Submit Feedback</button>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
