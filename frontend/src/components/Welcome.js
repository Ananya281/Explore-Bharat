import React, { useEffect, useState } from 'react';

const Welcome = ({ placeName, description }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [wikiDescription, setWikiDescription] = useState(description);

  useEffect(() => {
    const fetchWikipediaData = async () => {
      try {
        // Fetching the image URL
        const imageResponse = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&titles=${placeName}&pithumbsize=500&origin=*`
        );
        const imageData = await imageResponse.json();
        const pages = imageData.query.pages;
        const page = Object.values(pages)[0];
        setImageUrl(page.thumbnail ? page.thumbnail.source : '');

        // Fetching the description
        const descriptionResponse = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(placeName)}`
        );
        const descriptionData = await descriptionResponse.json();
        setWikiDescription(descriptionData.extract || description);
      } catch (error) {
        console.error('Error fetching data from Wikipedia:', error);
      }
    };

    if (placeName) {
      fetchWikipediaData();
    }
  }, [placeName, description]);

  return (
    <div
      className="welcome-section"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="overlay">
        <h1>{placeName}</h1>
        <p>{wikiDescription}</p>
      </div>
    </div>
  );
};

export default Welcome;
