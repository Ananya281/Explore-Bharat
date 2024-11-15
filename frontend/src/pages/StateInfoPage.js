import React from 'react';
import { useParams } from 'react-router-dom';
import HeroState from '../components/HeroState';
import StateMapAbout from '../components/StateMapAbout';
import History from '../components/History';
import Geography from '../components/Geography';
import Culture from '../components/Culture';
import Weather from '../components/Weather'; // Import the Weather component

const StateInfoPage = () => {
  const { stateName } = useParams(); // Get the state name from the URL

  return (
    <div className="state-info-page">
      {/* Hero Section */}
      <HeroState stateName={stateName} />

      {/* State Map and About Section */}
      <StateMapAbout stateName={stateName} />

      {/* Individual Sections */}
      <History stateName={stateName} />
      <Geography stateName={stateName} />
      <Weather stateName={stateName} /> {/* Add Weather Section */}
      <Culture stateName={stateName} />
    </div>
  );
};

export default StateInfoPage;
