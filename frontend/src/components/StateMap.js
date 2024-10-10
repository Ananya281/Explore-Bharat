// src/components/StateInfoPage/StateMap.js

import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// A function to adjust projection based on the state
const getStateProjectionConfig = (stateName) => {
  switch (stateName.toLowerCase()) {
    case "rajasthan":
      return { scale: 2500, center: [75.78, 27.0238] };
    case "gujarat":
      return { scale: 3000, center: [71.19, 22.2587] };
    case "maharashtra":
      return { scale: 3000, center: [75.7139, 19.7515] };
    case "uttar pradesh":
      return { scale: 3000, center: [80.9462, 26.8467] };
    case "bihar":
      return { scale: 3500, center: [85.3131, 25.0961] };
    case "west bengal":
      return { scale: 3500, center: [88.3639, 22.5726] };
    case "madhya pradesh":
      return { scale: 3000, center: [78.6569, 23.1815] };
    case "tamil nadu":
      return { scale: 3000, center: [78.6569, 11.1271] };
    case "karnataka":
      return { scale: 3000, center: [75.7139, 15.3173] };
    case "andhra pradesh":
      return { scale: 3000, center: [80.019, 15.9129] };
    case "odisha":
      return { scale: 3500, center: [85.0985, 20.9517] };
    case "telangana":
      return { scale: 3500, center: [79.0193, 17.9784] };
    case "kerala":
      return { scale: 4000, center: [76.2711, 10.8505] };
    case "assam":
      return { scale: 3500, center: [92.9376, 26.2006] };
    case "punjab":
      return { scale: 3500, center: [75.3412, 31.1471] };
    case "haryana":
      return { scale: 3500, center: [76.0856, 29.0588] };
    case "chhattisgarh":
      return { scale: 3000, center: [81.8661, 21.2787] };
    case "jharkhand":
      return { scale: 3500, center: [85.2799, 23.6102] };
    case "uttarakhand":
      return { scale: 3500, center: [79.0193, 30.0668] };
    case "himachal pradesh":
      return { scale: 4000, center: [77.1734, 31.1048] };
    case "tripura":
      return { scale: 5000, center: [91.9882, 23.9408] };
    case "meghalaya":
      return { scale: 5000, center: [91.3662, 25.4670] };
    case "manipur":
      return { scale: 5000, center: [93.9063, 24.6637] };
    case "nagaland":
      return { scale: 5000, center: [94.5624, 26.1584] };
    case "mizoram":
      return { scale: 5000, center: [92.9376, 23.1645] };
    case "arunachal pradesh":
      return { scale: 3000, center: [94.7278, 28.2180] };
    case "sikkim":
      return { scale: 5500, center: [88.5122, 27.5330] };
    case "goa":
      return { scale: 7000, center: [74.1240, 15.2993] };
    case "delhi":
      return { scale: 5000, center: [77.1025, 28.7041] };
    case "puducherry":
      return { scale: 5000, center: [79.8083, 11.9416] };
    case "lakshadweep":
      return { scale: 8000, center: [72.6394, 10.5667] };
    case "andaman and nicobar islands":
      return { scale: 2500, center: [92.6586, 11.7401] };
    case "ladakh":
      return { scale: 2500, center: [78.9634, 34.2268] };
    case "jammu and kashmir":
      return { scale: 2500, center: [75.3412, 34.0837] };
    case "chandigarh":
      return { scale: 8000, center: [76.7794, 30.7333] };
    case "daman and diu":
      return { scale: 8000, center: [72.8397, 20.3974] };
    case "dadra and nagar haveli":
      return { scale: 8000, center: [73.0169, 20.1809] };
    default:
      return { scale: 2500, center: [78.9629, 20.5937] }; // Default center for India
  }
};

const StateMap = ({ stateName }) => {
  const [geoJsonData, setGeoJsonData] = useState(null); // State to store GeoJSON data
  const [error, setError] = useState(null); // State to store errors if GeoJSON is not found

  const { scale, center } = getStateProjectionConfig(stateName);

  // Dynamically load the GeoJSON file for the state
  useEffect(() => {
    const loadGeoJson = async () => {
      try {
        const response = await fetch(`/json/${stateName.toLowerCase()}.json`); // Fetch state GeoJSON dynamically
        if (!response.ok) {
          throw new Error("GeoJSON file not found");
        }
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    loadGeoJson();
  }, [stateName]); // Re-run this effect when the stateName changes

  return (
    <div>
      {/* Error handling for missing GeoJSON file */}
      {error && <p>Error loading map: {error}</p>}

      {/* Show map if GeoJSON data is loaded */}
      {geoJsonData ? (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: scale, // Use dynamically determined scale
            center: center, // Use dynamically determined center
          }}
          style={{ width: "100%", height: "400px" }}
        >
          <Geographies geography={geoJsonData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      stroke: "#000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      stroke: "#000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      stroke: "#000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      ) : (
        !error && <p>Loading map of {stateName}...</p>
      )}
    </div>
  );
};

export default StateMap;
