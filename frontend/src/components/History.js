import React, { useEffect, useState } from 'react';
import './History.css';

const History = ({ placeName }) => {
  const [content, setContent] = useState("Loading historical information...");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Construct the Wikipedia API URL for fetching the introduction of the specified place
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=${encodeURIComponent(
            placeName
          )}&format=json&origin=*`
        );

        const data = await response.json();
        
        // Access the 'extract' content from the response
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
    <div className="history-section">
      <h2 className="history-title">History</h2>
      <p className="history-content">{displayedContent}</p>
      {content.length > 300 && (
        <button onClick={toggleReadMore} className="read-more-button">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default History;
