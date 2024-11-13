import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactPattern from '../assets/images/about.svg';
import ContactHero from '../components/ContactHero';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

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
      <ContactHero />

      <section className="bg-[#f3ece4] py-20 relative overflow-hidden">
        {/* Decorative Pattern */}
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

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-5xl font-bold text-[#6b4226] font-serif text-center">
            Contact <span className="italic text-[#8c6239]">Explore Bharat</span>
          </h2>
          <div className="flex justify-center mt-3 mb-6">
            <hr className="border-t-2 border-[#8c6239] w-32" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-12">
            <div className="lg:w-1/2">
              <p className="text-[#8c6239] text-lg leading-relaxed font-light mb-8">
                Have questions or want to share your experience? Reach out to us, and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="max-w-lg mx-auto ml-0">
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

            <div className="lg:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.931238454452!2d76.36355775000001!3d30.352904050000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f534a87b5c5%3A0xda1d3ed337e382b3!2sThapar%20University%2C%20Prem%20Nagar%2C%20Patiala%2C%20Punjab%20147004!5e0!3m2!1sen!2sin!4v1731523811217!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg border border-gray-300"
              ></iframe>
            </div>
          </div>

          {/* Updated Find Us Here Section */}
          <div className="flex items-center mt-20">
            <h3 className="text-3xl font-bold text-[#6b4226]">Find us here!</h3>
            <hr className="flex-grow border-t-2 border-[#6b4226] ml-4" />
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center text-[#8c6239] space-y-6 md:space-y-0 mt-10">
            <div className="flex flex-col items-center">
              <FiPhone className="text-yellow-500 text-3xl mb-2" />
              <p className="text-lg">(000) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <FiMapPin className="text-yellow-500 text-3xl mb-2" />
              <p className="text-lg text-center">
                123 ABC Street, City Name, Country, India
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FiMail className="text-yellow-500 text-3xl mb-2" />
              <p className="text-lg">contact@explorebharat.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
