import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-4 border border-gray-300 rounded-lg mb-4" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-4 border border-gray-300 rounded-lg mb-4" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="w-full p-4 border border-gray-300 rounded-lg mb-4" 
            value={formData.message} 
            onChange={handleInputChange} 
            required 
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
