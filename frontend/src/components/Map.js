import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaStates from "../india_states.json";

// Manually import all images
import andamanImage from "../assets/images/states-map/andaman.jpeg";
import andhrapradeshImage from "../assets/images/states-map/andhrapradesh.webp";
import arunachalpradeshImage from "../assets/images/states-map/arunachalpradesh.jpg";
import assamImage from "../assets/images/states-map/assam.webp";
import biharImage from "../assets/images/states-map/bihar.jpeg";
import chandigarhImage from "../assets/images/states-map/chandigarh.jpeg";
import chattisgarhImage from "../assets/images/states-map/chattisgarh.jpeg";
import dadraandnagarImage from "../assets/images/states-map/dadraandnagar.jpeg";
import damandiuImage from "../assets/images/states-map/damandiu.png";
import delhiImage from "../assets/images/states-map/delhi.avif";
import goaImage from "../assets/images/states-map/goa.jpeg";
import gujaratImage from "../assets/images/states-map/gujarat.jpg";
import haryanaImage from "../assets/images/states-map/haryana.jpg";
import himachalImage from "../assets/images/states-map/himachal.jpeg";
import jharkhandImage from "../assets/images/states-map/jharkhand.webp";
import jkImage from "../assets/images/states-map/jk.jpeg";
import KarnatakaImage from "../assets/images/states-map/Karnataka.webp";
import keralaImage from "../assets/images/states-map/kerela.jpeg";
import lakshdweepImage from "../assets/images/states-map/lakshdweep.jpeg";
import maharashtraImage from "../assets/images/states-map/maharashtra.jpg";
import manipurImage from "../assets/images/states-map/manipur.jpg";
import meghalayaImage from "../assets/images/states-map/meghalaya.jpg";
import mizoramImage from "../assets/images/states-map/mizoram.avif";
import mpImage from "../assets/images/states-map/mp.jpeg";
import nagalandImage from "../assets/images/states-map/nagaland.jpeg";
import orrisaImage from "../assets/images/states-map/orissa.jpeg";
import puducheryImage from "../assets/images/states-map/puduchery.jpeg";
import punjabImage from "../assets/images/states-map/punjab.jpg";
import rajasthanImage from "../assets/images/states-map/rajasthan.jpeg";
import sikkimImage from "../assets/images/states-map/sikkim.jpeg";
import tamilnaduImage from "../assets/images/states-map/tamilnadu.jpeg";
import tripuraImage from "../assets/images/states-map/tripura.jpg";
import upImage from "../assets/images/states-map/up.jpeg";
import uttarakhandImage from "../assets/images/states-map/uttarakhand.jpg";
import westbengalImage from "../assets/images/states-map/westbengal.jpg";
// Add all the other imports here

// Create an image mapping object
const imageMapping = {
  andaman: andamanImage,
  andhrapradesh: andhrapradeshImage,
  arunachalpradesh: arunachalpradeshImage,
  assam: assamImage,
  bihar: biharImage,
  chandigarh: chandigarhImage,
  chattisgarh: chattisgarhImage,
  dadraandnagar: dadraandnagarImage,
  damandiu: damandiuImage,
  delhi: delhiImage,
  goa: goaImage,
  gujarat: gujaratImage,
  haryana: haryanaImage,
  himachal: himachalImage,
  jharkhand: jharkhandImage,
  jk: jkImage,
  Karnataka: KarnatakaImage,
  kerala: keralaImage,
  lakshdweep: lakshdweepImage,
  maharashtra: maharashtraImage,
  manipur: manipurImage,
  meghalaya: meghalayaImage,
  mizoram: mizoramImage,
  mp: mpImage,
  nagaland: nagalandImage,
  orrisa: orrisaImage,
  puduchery: puducheryImage,
  punjab: punjabImage,
  rajasthan: rajasthanImage,
  sikkim: sikkimImage,
  tamilnadu: tamilnaduImage,
  tripura: tripuraImage,
  up: upImage,
  uttarakhand: uttarakhandImage,
  westbengal: westbengalImage,
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
