import React, { useEffect, useState } from 'react';
import './Geography.css'; // Optional CSS file for styling

const Geography = ({ stateName }) => {
  const [content, setContent] = useState("Loading geographical information...");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGeography = async () => {
      try {
        // Fetch the page content from Wikipedia
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(stateName)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch content from Wikipedia.");
        }

        const data = await response.json();

        // Check for content and filter it to include only geography-related information
        const geographyContent = data.extract.includes("Geography")
          ? data.extract
          : `No specific geographical information found for ${stateName}.`;

        setContent(geographyContent);
      } catch (error) {
        console.error('Error fetching geographical information:', error);
        setError("Failed to load geographical information from Wikipedia.");
      }
    };

    if (stateName) {
      fetchGeography();
    }
  }, [stateName]);

  if (error) {
    return (
      <div className="geography-section">
        <h2>Geography</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="geography-section">
      <h2 className="geography-title">Geography of {stateName}</h2>
      <p className="geography-content">{content}</p>
    </div>
  );
};

export default Geography;
