import React from 'react';
import { useParams } from 'react-router-dom';
import HeroState from '../components/HeroState';
import StateMapAbout from '../components/StateMapAbout';
import History from '../components/History';
import Geography from '../components/Geography';
import Culture from '../components/Culture';
import Weather from '../components/Weather'; // Import the Weather component
// import Cuisine from '../components/Cuisine';

const StateInfoPage = () => {
  const { stateName } = useParams(); // Get the state name from the URL

  return (
    <div className="state-info-page">
      {/* Hero Section */}
      <div id="hero">
        <HeroState stateName={stateName} />
      </div>

      {/* State Map and About Section */}
      <div id="statemapabout">
        <StateMapAbout stateName={stateName} />
      </div>

      {/* Individual Sections */}
      <div id="history">
        <History stateName={stateName} />
      </div>

      <div id="geography">
        <Geography stateName={stateName} />
      </div>

      <div id="weather">
        <Weather stateName={stateName} /> {/* Add Weather Section */}
      </div>

      <div id="culture">
        <Culture stateName={stateName} />
      </div>

      {/* Uncomment the Cuisine Section if needed */}
      {/* <div id="cuisine">
        <Cuisine stateName={stateName} />
      </div> */}
    </div>
  );
};

export default StateInfoPage;
