import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactPattern from '../assets/images/about.svg'; // Import the SVG decoration
import ContactHero from '../components/ContactHero'; // Import the ContactHero component


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_6z8uvqq', 'template_9dpckk4', templateParams, 'SZRrTZ66sAHMTHU3Y')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <ContactHero /> {/* Adding the ContactHero component at the top */}

      <section className="bg-[#f3ece4] py-20 relative overflow-hidden">
        {/* Decorative Pattern similar to About section */}
        <div
          className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain mt-5"
          style={{
            backgroundImage: `url(${contactPattern})`,
            filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${contactPattern})`,
            filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
          }}
        ></div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl font-bold text-[#6b4226] font-serif">
            Contact <span className="italic text-[#8c6239]">Explore Bharat</span>
          </h2>
          <div className="flex justify-center mt-3 mb-6">
            <hr className="border-t-2 border-[#8c6239] w-32" />
          </div>

          <p className="text-[#8c6239] mt-8 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            Have questions or want to share your experience? Reach out to us, and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12">
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
            <button className="bg-[#8c6239] text-white px-8 py-3 rounded-lg hover:bg-[#6b4226] transition duration-300">
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-lg text-[#6b4226]">{status}</p>}
        </div>

        {/* Optional Bottom Border Decoration */}
        <div
          className="mt-10 w-full h-8 bg-repeat-x bg-bottom"
          style={{ backgroundImage: "url('/path/to/border-pattern.png')" }}
        ></div>
      </section>
    </>
  );
}

export default Contact;
