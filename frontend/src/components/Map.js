import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaStates from "../india_states.json"; // Path to your GeoJSON file

const MapChart = () => {
  const [hoveredData, setHoveredData] = useState({ stateName: null, tagline: null });
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleMouseEnter = (geo, evt) => {
    const stateName = geo.properties.NAME_1;
    const tagline = geo.properties.tagline;
    setHoveredData({ stateName, tagline });
    setHoverPosition({ x: evt.clientX, y: evt.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredData({ stateName: null, tagline: null });
  };

  const handleStateClick = (stateName) => {
    // Redirect to the dynamic state info page
    navigate(`/state/${stateName.replace(/\s+/g, '')}`); // Remove spaces in state names for URL
  };

  return (
    <div className="map-container" style={{ position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 23.5937],
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
                onMouseMove={(evt) => setHoverPosition({ x: evt.clientX, y: evt.clientY })}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick(geo.properties.NAME_1)} // Redirect on state click
                style={{
                  default: {
                    fill: "#D6D6DA",
                    stroke: "black",
                    strokeWidth: 1,
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    stroke: "black",
                    strokeWidth: 1,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    stroke: "black",
                    strokeWidth: 1,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      {hoveredData.stateName && (
        <div
          className="hover-info"
          style={{
            position: "absolute",
            top: hoverPosition.y + 20,
            left: hoverPosition.x + 20,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            pointerEvents: "none",
          }}
        >
          <h4>{hoveredData.stateName}</h4>
          <p>{hoveredData.tagline || "No tagline available"}</p>
        </div>
      )}
    </div>
  );
};

export default MapChart;
