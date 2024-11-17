import React, { useEffect, useState } from "react";
import "./History.css"; // Ensure this file is correctly linked
import aboutPattern from "../assets/images/about.svg"; // Ensure the path and file name are correct

const History = ({ stateName }) => {
  const [content, setContent] = useState("Loading historical information...");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");

  // Helper function to format the state name
  const formatStateName = (name) => {
    return name
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  const formattedStateName = stateName ? formatStateName(stateName) : "";

  useEffect(() => {
    if (!stateName) {
      setContent("No place specified.");
      return;
    }

    const fetchHistorySection = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/html/${encodeURIComponent(
            stateName
          )}`
        );

        if (!response.ok) {
          setContent("Failed to load historical information.");
          return;
        }

        const htmlText = await response.text();

        // Parse the HTML and extract the "History" section
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");
        const historyHeader = Array.from(
          doc.querySelectorAll("h2, h3")
        ).find((header) =>
          header.textContent.toLowerCase().includes("history")
        );

        if (historyHeader) {
          const historyContent = [];
          let nextSibling = historyHeader.nextElementSibling;
          while (nextSibling && nextSibling.tagName !== "H2") {
            historyContent.push(nextSibling.outerHTML);
            nextSibling = nextSibling.nextElementSibling;
          }

          // Join the extracted content
          let fullContent = historyContent.join("");

          // Skip unwanted lines or paragraphs
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = fullContent;

          // Remove the first two lines or paragraphs
          const paragraphs = Array.from(tempDiv.querySelectorAll("p"));
          const filteredContent = paragraphs
            .slice(0) // Skip the first two paragraphs
            .map((el) => el.outerHTML)
            .join("");

          setContent(
            filteredContent || "No detailed historical information available."
          );
        } else {
          setContent("No history section found.");
        }
      } catch (error) {
        console.error("Error fetching historical section:", error);
        setContent("Failed to load historical information.");
      }
    };

    fetchHistorySection();
  }, [stateName]);

  useEffect(() => {
    if (isExpanded) {
      setDisplayedContent(content);
    } else {
      setDisplayedContent(
        content.substring(0, 2400) + (content.length > 200 ? "..." : "")
      );
    }
  }, [content, isExpanded]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative history-section py-16 bg-[#f3ece4] text-center overflow-hidden">
      {/* Decorative Flowers */}
      <div
        className="absolute top-35 left-0 w-40 h-40 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            "brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-20 w-64 h-64 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter:
            "brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)",
        }}
      ></div>

      <h2 className="text-4xl font-bold text-[#6b4226] mb-8">
        History of {formattedStateName}
      </h2>
      <div
        className="text-lg text-[#8c6239] mb-6 max-w-5xl mx-auto text-justify pointer-events-none"
        dangerouslySetInnerHTML={{ __html: displayedContent }}
      ></div>
      {content.length > 300 && (
        <button
          onClick={toggleReadMore}
          className="mt-4 px-6 py-2 text-white bg-[#6b4226] rounded-full hover:bg-[#8c6239] transition duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </section>
  );
};

export default History;
