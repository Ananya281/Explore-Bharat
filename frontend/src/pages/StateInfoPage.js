// src/pages/StateInfoPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import HeroState from '../components/HeroState';
import History from '../components/History';
import CultureTradition from '../components/CultureTradition';
import MusicArts from '../components/ArchitectureDesign';
import Weather from '../components/Weather';
import PlacesToVisit from '../components/PlacesToVisit';
import Cuisine from '../components/Cuisine';
import StateMap from '../components/StateMap'; // Import the StateMap component

const StateInfoPage = () => {
  const { stateName } = useParams(); // Get the state name from the URL

  return (
    <div>
      {/* Hero Section */}
      <HeroState stateName={stateName} />

      {/* Dynamic State Map Section */}
      <StateMap stateName={stateName} />

      {/* Other Sections */}
      <History />
      <CultureTradition />
      <MusicArts />
      <Weather />
      <PlacesToVisit />
      <Cuisine />
    </div>
  );
};

export default StateInfoPage;
