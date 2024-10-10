import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaStates from "../india_states.json"; // path to your json file

const MapChart = () => {
  const [hoveredData, setHoveredData] = useState({ stateName: null, tagline: null }); // Store both state name and tagline
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 }); // Track mouse position

  const handleMouseEnter = (geo, evt) => {
    const stateName = geo.properties.NAME_1; // Get the state name from the JSON file
    const tagline = geo.properties.tagline;  // Get the tagline from JSON file
    setHoveredData({ stateName, tagline });  // Set both stateName and tagline
    setHoverPosition({ x: evt.clientX, y: evt.clientY }); // Set hover position based on mouse
  };

  const handleMouseLeave = () => {
    setHoveredData({ stateName: null, tagline: null }); // Clear hover data when mouse leaves
  };

  return (
    <div className="map-container" style={{ position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000, // Adjust as needed for the map size
          center: [78.9629, 23.5937], // Center the map on India
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={indiaStates}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                onMouseMove={(evt) => setHoverPosition({ x: evt.clientX, y: evt.clientY })} // Update position when moving within the state
                onMouseLeave={handleMouseLeave}
                style={{
                  default: {
                    fill: "#D6D6DA",     // Default state fill color
                    stroke: "black",      // Default black border
                    strokeWidth: 1,       // Adjust for border thickness
                    outline: "none"
                  },
                  hover: {
                    fill: "#F53",         // Only change fill on hover
                    stroke: "black",      // Keep border black on hover
                    strokeWidth: 1,
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",         // Change fill on press
                    stroke: "black",      // Keep border black on press
                    strokeWidth: 1,
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      {/* Show tooltip with both the state name and tagline when hovering over a state */}
      {hoveredData.stateName && (
        <div
          className="hover-info"
          style={{
            position: "absolute",
            top: hoverPosition.y + 20, // Position the tooltip slightly below the mouse
            left: hoverPosition.x + 20, // Position the tooltip slightly right of the mouse
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            pointerEvents: "none", // Ensure the tooltip doesn't interfere with mouse events
          }}
        >
          <h4>{hoveredData.stateName}</h4>
          <p>{hoveredData.tagline || "No tagline available"}</p> {/* Display the tagline */}
        </div>
      )}
    </div>
  );
};

export default MapChart;
