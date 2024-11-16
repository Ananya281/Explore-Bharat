import React, { useEffect, useState } from 'react';
import './Cuisine.css'; // CSS file for styling
import aboutPattern from '../assets/images/about.svg'; // Decorative background pattern

const Cuisine = ({ stateName }) => {
  const [content, setContent] = useState("Loading cuisine information...");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!stateName) {
      setContent("No state specified.");
      return; // Prevent API call if no stateName is provided
    }

    const fetchCuisine = async () => {
      try {
        // Wikipedia API to fetch cuisine information
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Cuisine_of_${encodeURIComponent(
            stateName
          )}&exintro=&explaintext=&origin=*`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch content from Wikipedia.");
        }

        const data = await response.json();
        const page = Object.values(data.query.pages)[0];
        const extract = page?.extract;

        if (extract) {
          setContent(extract);
        } else {
          setContent(
            `Cuisine information for ${stateName} is currently unavailable.`
          );
        }
      } catch (error) {
        console.error("Error fetching cuisine information:", error);
        setError("Failed to load cuisine information.");
      }
    };

    fetchCuisine();
  }, [stateName]);

  useEffect(() => {
    // Truncate content or show full based on isExpanded
    if (isExpanded) {
      setDisplayedContent(content);
    } else {
      setDisplayedContent(content.substring(0, 300) + (content.length > 300 ? "..." : ""));
    }
  }, [content, isExpanded]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (error) {
    return (
      <section className="cuisine-section relative py-16 bg-[#fff8e1] text-center overflow-hidden">
        <h2 className="text-4xl font-bold text-[#d17b00] mb-8">Cuisine</h2>
        <p className="text-lg text-[#f57c00] max-w-5xl mx-auto text-justify leading-7">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="cuisine-section relative py-16 bg-[#fff8e1] text-center overflow-hidden">
      {/* Decorative Patterns */}
      <div
        className="absolute top-35 left-0 w-40 h-40 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(73%) sepia(35%) saturate(609%) hue-rotate(359deg) brightness(99%) contrast(95%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-20 w-64 h-64 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            'brightness(0) saturate(100%) invert(73%) sepia(35%) saturate(609%) hue-rotate(359deg) brightness(99%) contrast(95%)',
        }}
      ></div>

      {/* Section Content */}
      <h2 className="text-4xl font-bold text-[#d17b00] mb-8">Cuisine</h2>
      <p className="text-lg text-[#f57c00] mb-6 max-w-5xl mx-auto text-justify leading-8">
        {displayedContent}
      </p>
      {content.length > 300 && (
        <button
          onClick={toggleReadMore}
          className="mt-6 px-8 py-3 text-white bg-[#d17b00] rounded-full hover:bg-[#f57c00] transition duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </section>
  );
};

export default Cuisine;
