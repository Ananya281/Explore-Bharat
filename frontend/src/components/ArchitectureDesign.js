import React, { useEffect, useState } from 'react';
import './ArchitectureDesign.css';

const ArchitectureAndDesign = ({ placeName }) => {
  const [content, setContent] = useState("Loading information on architecture and design...");
  const [showFullContent, setShowFullContent] = useState(false); // Track expanded state

  useEffect(() => {
    const fetchArchitectureAndDesign = async () => {
      try {
        // Construct the Wikipedia API URL for the main page of the place
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=&titles=${encodeURIComponent(
            placeName
          )}&format=json&origin=*`
        );

        const data = await response.json();
        
        // Access the 'extract' content from the response
        const page = data.query.pages;
        const pageContent = page[Object.keys(page)[0]].extract;

        // Filter content by keywords "Architecture" or "Design" if available, otherwise show general content
        const architectureAndDesignContent = pageContent.includes("Architecture") || pageContent.includes("Design")
          ? pageContent
          : "No specific information on architecture and design available.";

        setContent(architectureAndDesignContent);
      } catch (error) {
        console.error('Error fetching information on architecture and design:', error);
        setContent("Failed to load information on architecture and design.");
      }
    };

    if (placeName) {
      fetchArchitectureAndDesign();
    }
  }, [placeName]);

  // Function to toggle the content view
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // Determine the content to display based on `showFullContent` state
  const displayedContent = showFullContent ? content : `${content.substring(0, 300)}...`;

  return (
    <div className="architecture-design-section">
      <h2 className="architecture-design-title">Architecture and Design</h2>
      <p className="architecture-design-content">{displayedContent}</p>
      {content.length > 300 && (
        <button onClick={toggleContent} className="toggle-button">
          {showFullContent ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ArchitectureAndDesign;
