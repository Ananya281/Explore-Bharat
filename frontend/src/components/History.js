import React, { useEffect, useState } from 'react';
import './History.css'; // Ensure this file matches the styling structure
import aboutPattern from '../assets/images/about.svg'; // For decorative patterns

const History = ({ placeName }) => {
  const [content, setContent] = useState("Loading historical information...");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=${encodeURIComponent(
            placeName
          )}&format=json&origin=*`
        );

        const data = await response.json();
        const page = data.query.pages;
        const pageContent = page[Object.keys(page)[0]].extract;

        setContent(pageContent || "No historical information available.");
      } catch (error) {
        console.error('Error fetching historical information:', error);
        setContent("Failed to load historical information.");
      }
    };

    if (placeName) {
      fetchHistory();
    }
  }, [placeName]);

  useEffect(() => {
    if (isExpanded) {
      setDisplayedContent(content);
    } else {
      setDisplayedContent(content.substring(0, 300) + (content.length > 300 ? "..." : ""));
    }
  }, [content, isExpanded]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative history-section py-16 bg-[#f3ece4] text-center overflow-hidden">
      {/* Decorative Flowers */}
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

      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">History {placeName}</h2>
      <p className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto text-justify">{displayedContent}</p>
      {content.length > 300 && (
        <button
          onClick={toggleReadMore}
          className="mt-4 px-6 py-2 text-white bg-[#6b4226] rounded-full hover:bg-[#8c6239] transition duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </section>
  );
};

export default History;
