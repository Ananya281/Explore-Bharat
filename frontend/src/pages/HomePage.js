import Hero from '../components/Hero';
import ExploreHeritage from '../components/ExploreHeritage';
import Map from '../components/Map';
import Testimonial from '../components/Testimonial';
import ImageCollage from '../components/ImageCollage';


const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="explore-heritage">
        <ExploreHeritage />
      </section>

      <section
  id="map-and-collage"
  style={{
    display: "flex",
    width: "100vw",
    height: "100vh",
  }}
>
  {/* Left Side - Map Component */}
  <div style={{ flex: 1, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <Map />
    </div>
  </div>

  {/* Right Side - Image Collage */}
  <div style={{ flex: 1, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <ImageCollage />
    </div>
  </div>
</section>


      <section id="testimonials" className="py-12">
        <Testimonial />
      </section>
    </div>
  );
};

export default HomePage;
