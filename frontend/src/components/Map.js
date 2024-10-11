import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaStates from "../india_states.json";

// Manually import all images
import biharImage from "../assets/images/states-map/bihar.jpeg";
import gujratImage from "../assets/images/states-map/gujrat.jpg";
import maharashtraImage from "../assets/images/states-map/maharashtra.jpeg";
import keralaImage from "../assets/images/states-map/kerela.jpeg";
// Add all the other imports here

// Create an image mapping object
const imageMapping = {
  bihar: biharImage,
  gujrat: gujratImage,
  maharashtra: maharashtraImage,
  kerala: keralaImage,
  // Map other states here
};

const MapChart = () => {
  const [hoveredData, setHoveredData] = useState({
    stateName: null,
    tagline: null,
    imageUrl: null,
  });
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseEnter = (geo, evt) => {
    const stateName = geo.properties.NAME_1;
    const tagline = geo.properties.tagline;
    const imageName = geo.properties.imageName; // Get imageName from JSON

    // Resolve the image URL using the image mapping
    const imageUrl = imageMapping[imageName] || null;

    console.log(`Image for ${stateName}:`, imageUrl);

    setHoveredData({ stateName, tagline, imageUrl });
    setHoverPosition({ x: evt.clientX, y: evt.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredData({ stateName: null, tagline: null, imageUrl: null });
  };

  const handleStateClick = (stateName) => {
    navigate(`/state/${stateName.replace(/\s+/g, "")}`);
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
                onClick={() => handleStateClick(geo.properties.NAME_1)}
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
            display: "flex", // To position the image and text next to each other
            gap: "10px",
            alignItems: "center", // Align items vertically
          }}
        >
          <div>
            <h4>{hoveredData.stateName}</h4>
            <p>{hoveredData.tagline || "No tagline available"}</p>
          </div>
          {hoveredData.imageUrl ? (
            <img
              src={hoveredData.imageUrl}
              alt={hoveredData.stateName}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%", // Makes the image circular
                objectFit: "cover", // Ensures the image fits well inside the circle
              }}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MapChart;
