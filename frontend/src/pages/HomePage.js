import React from 'react';
import Hero from '../components/Hero';
import Map from '../components/Map';
import About from '../components/About';
import Testimonial from '../components/Testimonial'; // Import the Testimonial component

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section
        id="map"
        style={{
          width: "100vw",
          height: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0", // Adjust to control the space above
        }}
      >
        <Map />
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-12">
        <Testimonial />
      </section>
    </div>
  );
}

export default HomePage;
