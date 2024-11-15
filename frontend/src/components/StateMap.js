import React from 'react';

const StateMap = ({ stateName }) => {
  // Update the path to reflect location in `public` folder
  const basePath = `${process.env.PUBLIC_URL}/assets/images/image-inside/`;

  // Dynamically set the image path based on stateName
  const stateImagePath = `${basePath}${stateName}.jpeg`;

  return (
    <div>
      <h2>{stateName} Map</h2>
      <img
        src={stateImagePath}
        alt={`${stateName} map`}
        onError={(e) => {
          // Fallback in case the image is not found
          e.target.src = `${basePath}default-map.jpeg`;
          e.target.alt = "Default map image";
        }}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default StateMap;
