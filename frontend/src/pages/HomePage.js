import React from 'react';
import Hero from '../components/Hero';
import Map from '../components/Map';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="map">
        <Map />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

      <section>
        <Feedback />
      </section>
    </div>
  );
}

export default HomePage;
