import Hero from '../components/Hero';
import ExploreHeritage from '../components/ExploreHeritage';
import Map from '../components/Map';
import ImageGrid from '../components/ImageGrid';
import IndiaArchitecture from '../components/IndiaArchitecture';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="explore-heritage">
        <ExploreHeritage />
      </section>

      {/* Full-viewport Map Section */}
      <section
        id="map"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Map />
      </section>

      <section id="image-grid">
        <ImageGrid />
      </section>

      {/* India Architecture Section */}
      <section id="india-architecture">
        <IndiaArchitecture />
      </section>

      <section id="testimonials" className="py-0">
        <Testimonial />
      </section>
    </div>
  );
};

export default HomePage;
