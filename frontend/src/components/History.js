import React, { useEffect, useState } from 'react';
import './History.css'; // Ensure this file is correctly linked in the component
import aboutPattern from '../assets/images/about.svg'; // Ensure the path and file name are correct

const History = ({ stateName }) => {
  const [content, setContent] = useState("Loading historical information...");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");

  useEffect(() => {
    console.log('stateName:', stateName); // Log to check if stateName is passed correctly

    if (!stateName) {
      setContent("No place specified.");
      return; // Prevent fetch if no stateName is provided
    }

    const formattedStateName = stateName
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camel-case words like TamilNadu
      .replace(/_/g, ' '); // Replace underscores with spaces (if any)

    const fetchHistory = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=History_of_${encodeURIComponent(
            formattedStateName
          )}&exintro=&explaintext=&origin=*`
        );

        if (!response.ok) {
          setContent("Failed to load historical information.");
          return;
        }

        const data = await response.json();
        const page = data.query.pages;
        const historyContent = page[Object.keys(page)[0]]?.extract;

        if (historyContent) {
          setContent(historyContent);
        } else {
          // If "History_of_{stateName}" does not exist, fetch general page
          console.log(`History of ${stateName} not found. Trying ${stateName}.`);
          fetchGeneralInfo(stateName);
        }
      } catch (error) {
        console.error('Error fetching historical information:', error);
        setContent("Failed to load historical information.");
      }
    };

    fetchHistory();
  }, [stateName]); // Re-run effect whenever stateName changes

  const fetchGeneralInfo = async (name) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch general information.");
      }
  
      const data = await response.json();
      setContent(data.extract || "No general information available.");
    } catch (error) {
      console.error('Error fetching general information:', error);
      setContent("Failed to load general information.");
    }
  };

  useEffect(() => {
    // Display truncated or full content based on the expansion state
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

      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">History of {stateName}</h2>
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
