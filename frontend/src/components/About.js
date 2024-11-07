import React from 'react';

const About = () => {
  return (
    <section className="bg-[#fdf7f2] py-16 relative">
      {/* Decorative Corner Patterns */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/path/to/decorative-pattern.png')" }}></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/path/to/decorative-pattern.png')" }}></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/path/to/decorative-pattern.png')" }}></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-no-repeat bg-contain" style={{ backgroundImage: "url('/path/to/decorative-pattern.png')" }}></div>

      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#6b4226]">About Explore Bharat</h2>
        <div className="flex justify-center mt-2">
          <hr className="border-t-2 border-[#6b4226] w-24" />
        </div>
        <p className="text-[#8c6239] mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore Bharat is your gateway to discover India’s vibrant culture, from festivals and attire to monuments and regional cuisine. Tailored recommendations ensure your journey through India’s heritage is unique and engaging.
        </p>
      </div>
    </section>
  );
};

export default About;
