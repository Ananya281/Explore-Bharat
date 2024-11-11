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
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Black overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity here for a darker or lighter overlay
        zIndex: 1,
      }} />

      {/* Content on top of the overlay */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#fff',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>{placeName}</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px' }}>{wikiDescription}</p>
      </div>
    </div>
  );
};

export default Welcome;
