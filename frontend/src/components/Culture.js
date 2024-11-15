import React, { useEffect, useState } from 'react';
import './Culture.css'; // CSS file for styling
import aboutPattern from '../assets/images/about.svg'; // Decorative background pattern

const Culture = ({ stateName }) => {
  const [content, setContent] = useState("Loading cultural information...");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCulture = async () => {
      try {
        // Wikipedia REST API call to fetch summary
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(stateName)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch content from Wikipedia.");
        }

        const data = await response.json();

        // Check for relevant cultural information
        const culturalContent = data.extract.includes("culture") || data.extract.includes("tradition")
          ? data.extract
          : `Cultural and traditional information for ${stateName} is currently unavailable.`;

        setContent(culturalContent);
      } catch (error) {
        console.error("Error fetching cultural information:", error);
        setError("Failed to load cultural and traditional information.");
      }
    };

    if (stateName) {
      fetchCulture();
    }
  }, [stateName]);

  if (error) {
    return (
      <section className="culture-section py-16 bg-[#f3ece4] text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Culture & Tradition</h2>
        <p className="text-lg text-[#8c6239] max-w-5xl mx-auto text-justify leading-7">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="culture-section py-16 bg-[#f3ece4] text-center relative overflow-hidden">
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
      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">Culture & Tradition</h2>
      <p className="text-lg text-[#8c6239] max-w-5xl mx-auto text-justify leading-7">
        {content}
      </p>
    </section>
  );
};

export default Culture;
