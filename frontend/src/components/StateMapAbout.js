import React from 'react';
import StateMap from './StateMap';
import AboutState from './AboutState';
import './StateMapAbout.css'; // CSS for layout styling

const StateMapAbout = ({ stateName }) => {
  return (
    <section className="state-map-about">
      {/* Left: StateMap */}
      <div className="state-map-container">
        <StateMap stateName={stateName} />
      </div>

      {/* Right: AboutState */}
      <div className="about-state-container">
        <AboutState stateName={stateName} />
      </div>
    </section>
  );
};

export default StateMapAbout;
