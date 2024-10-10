import React from 'react';

const HeroState = ({ stateName }) => {
  return (
    <div className="hero-section" style={{ backgroundColor: '#f8f9fa', padding: '50px', textAlign: 'center' }}>
      <h1>Welcome to {stateName}</h1>
      <p>Explore the rich heritage and culture of {stateName}.</p>
    </div>
  );
};

export default HeroState;
