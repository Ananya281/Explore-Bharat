import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import aboutPattern from "../assets/images/about.svg"; // Import background pattern for styling

// Function to get the projection configuration based on the state
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
    case "damananddiu":
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
  const [geoJsonData, setGeoJsonData] = useState(null); // State for GeoJSON data
  const [error, setError] = useState(null); // State for error message
  const [hoveredRegion, setHoveredRegion] = useState(null); // State for hovered region
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 }); // Tooltip position

  const { scale, center } = getStateProjectionConfig(stateName);

  // Dynamically load GeoJSON based on the stateName from the URL
  useEffect(() => {
    const loadGeoJson = async () => {
      try {
        const response = await fetch(`/json/${stateName.toLowerCase()}.json`);
        if (!response.ok) {
          throw new Error("GeoJSON file not found");
        }
        const data = await response.json();
        setGeoJsonData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    loadGeoJson();
  }, [stateName]);

  return (
    <div className="relative h-screen bg-[#f3ece4] flex">
      {/* Background patterns for styling */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: "brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: "brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)",
        }}
      ></div>

      {/* Display error message if loading fails */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Render the map if GeoJSON data is available */}
      {geoJsonData ? (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: scale,
            center: center,
          }}
          style={{ width: "100%", height: "400px" }}
        >
          <Geographies geography={geoJsonData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(evt) => {
                    setHoveredRegion(geo.properties.NAME_1);
                    setHoverPosition({ x: evt.clientX, y: evt.clientY });
                  }}
                  onMouseMove={(evt) => setHoverPosition({ x: evt.clientX, y: evt.clientY })}
                  onMouseLeave={() => setHoveredRegion(null)}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      stroke: "#6b4226",
                      strokeWidth: 1,
                      outline: "none",
                    },
                    hover: {
                      fill: "#8c6239",
                      stroke: "#6b4226",
                      strokeWidth: 1,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#6b4226",
                      stroke: "#6b4226",
                      strokeWidth: 1,
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

      {/* Tooltip for hovered region */}
      {hoveredRegion && (
        <div
          className="absolute bg-[#fdf7f2] text-[#6b4226] p-3 rounded-md shadow-lg border border-[#8c6239]"
          style={{
            top: hoverPosition.y + 20,
            left: hoverPosition.x + 20,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <h4 className="text-lg font-bold">{hoveredRegion}</h4>
          <p className="text-sm font-light">Explore more about this region</p>
        </div>
      )}
    </div>
  );
};

export default StateMap;
