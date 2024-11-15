import React from 'react';
import { useParams } from 'react-router-dom';
import HeroState from '../components/HeroState';
import History from '../components/History';
import CultureTradition from '../components/CultureTradition';
import MusicArts from '../components/ArchitectureDesign';
import Weather from '../components/Weather';
import PlacesToVisit from '../components/PlacesToVisit';
import Cuisine from '../components/Cuisine';
import StateMap from '../components/StateMap';

const StateInfoPage = () => {
  const { stateName } = useParams(); // Get the state name from the URL

  return (
    <div>
      {/* Hero Section */}
      <HeroState stateName={stateName} />

      {/* Dynamic State Map Section */}
      <StateMap stateName={stateName} />

      {/* Other Sections */}
      <History stateName={stateName} />
      <CultureTradition stateName={stateName} />
      <MusicArts stateName={stateName} />
      <Weather stateName={stateName} />
      <PlacesToVisit stateName={stateName} />
      <Cuisine stateName={stateName} />
    </div>
  );
};

export default StateInfoPage;
