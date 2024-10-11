// src/components/StateInfoPage/StateMap.js

import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// A function to adjust projection based on the state
const getStateProjectionConfig = (stateName) => {
  switch (stateName.toLowerCase()) {
    case "andamanandnicobar":
          return { scale: 4000, center: [92.6586, 10.5] };
    case "andhrapradesh":
          return { scale: 4000, center: [80.019, 16] };   
    case "arunachalpradesh":
          return { scale: 7000, center: [94.7278, 28] };
    case "assam":
          return { scale: 6000, center: [92.9376, 26] };
    case "bihar":
          return { scale: 6000, center: [85.3131, 25.9] };
    case "chandigarh":
          return { scale: 150000, center: [76.7794, 30.7333] };
    case "chhattisgarh":
          return { scale: 4500, center: [81.8661, 21] };
    case "dadraandnagarhaveli":
          return { scale: 38000, center: [73.0169, 20.1809] };
    case "daman and diu":
          return { scale: 8000, center: [72.8397, 20.3974] };
    case "delhi":
          return { scale: 50000, center: [77.1025, 28.65] };
    case "goa":
          return { scale: 23000, center: [74, 15.2993] };
    case "gujarat":
          return { scale: 5000, center: [71.19, 22.2587] };
    case "haryana":
          return { scale: 7000, center: [76.0856, 29.3] };
    case "himachalpradesh":
          return { scale: 6700, center: [77.1734, 31.7] };
    case "jammuandkashmir":
          return { scale: 7000, center: [74.9, 33.7] };
    case "jharkhand":
          return { scale: 7000, center: [85.2799, 23.6102] };
    case "karnataka":
          return { scale: 4000, center: [75.7139, 15.1] };
    case "kerala":
          return { scale: 5500, center: [76.2711, 10.4] };
    case "ladakh":
          return { scale: 2500, center: [78.9634, 34.2268] };
    case "lakshadweep":
          return { scale: 20000, center: [72.9, 10.5667] };
    case "madhyapradesh":
          return { scale: 4000, center: [77.6, 23.8] };
    case "maharashtra":
          return { scale: 4000, center: [75.7139, 18.8] };
    case "manipur":
          return { scale: 10000, center: [93.9063, 24.6637] };
    case "meghalaya":
          return { scale: 10000, center: [91.3, 25.4670] };
    case "mizoram":
          return { scale: 8000, center: [92.9376, 23.1645] };
    case "nagaland":
          return { scale: 10000, center: [94.5624, 26] };
    case "orissa":
          return { scale: 5000, center: [84, 20] };
    case "puducherry":
          return { scale: 20000, center: [79.8083, 11.4] };
    case "punjab":
          return { scale: 7400, center: [75.3412, 31] };
    case "rajasthan":
          return { scale: 3700, center: [73.78, 26.7] };
    case "sikkim":
          return { scale: 11000, center: [88.5122, 27.5330] };
    case "tamilnadu":
          return { scale: 5000, center: [78.6569, 10.9] };
    case "telangana":
          return { scale: 3500, center: [79.0193, 17.9784] };
    case "tripura":
          return { scale: 15000, center: [91.8, 23.7] };
    case "uttarpradesh":
          return { scale: 4100, center: [80.2, 27] };
    case "uttarakhand":
          return { scale: 7000, center: [79.0193, 30.0668] };
    case "westbengal":
          return { scale: 4200, center: [88.3639, 24.2] };
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
