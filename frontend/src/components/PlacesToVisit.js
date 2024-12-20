import React, { useEffect, useState } from 'react';
import './PlacesToVisit.css'; // CSS file for styling
import aboutPattern from '../assets/images/about.svg'; // Decorative pattern

const PlacesToVisit = ({ stateName }) => {
  const [content, setContent] = useState("Loading places to visit...");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlacesToVisit = async () => {
      try {
        // Fetch content from Wikipedia based on the state name
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(stateName)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch content from Wikipedia.");
        }

        const data = await response.json();

        // Extract content that mentions places to visit
        const placesContent = data.extract.includes("tourism") || data.extract.includes("places")
          ? data.extract
          : `Tourism and places to visit information for ${stateName} is currently unavailable.`;

        setContent(placesContent);
      } catch (error) {
        console.error("Error fetching places to visit information:", error);
        setError("Failed to load places to visit information.");
      }
    };

    if (stateName) {
      fetchPlacesToVisit();
    }
  }, [stateName]);

  if (error) {
    return (
      <section className="places-to-visit-section py-16 bg-[#f3ece4] text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Places to Visit</h2>
        <p className="text-lg text-[#8c6239] max-w-5xl mx-auto text-justify leading-7">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="places-to-visit-section py-16 bg-[#f3ece4] text-center relative overflow-hidden">
      {/* Decorative Patterns */}
      <div
        className="absolute top-35 left-0 w-40 h-40 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-20 w-64 h-64 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      {/* Section Content */}
      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Places to Visit</h2>
      <p className="text-lg text-[#8c6239] max-w-5xl mx-auto text-justify leading-7">
        {content}
      </p>
    </section>
  );
};

export default PlacesToVisit;
