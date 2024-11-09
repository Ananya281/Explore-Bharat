import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define the email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs.send('service_6z8uvqq', 'template_9dpckk4', templateParams, 'SZRrTZ66sAHMTHU3Y')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send message. Please try again.');
      });
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
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-lg">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
