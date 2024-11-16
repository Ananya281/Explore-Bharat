import React, { useState } from 'react';
import './VerticalNavbar.css';

const VerticalNavbar = ({ stateName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Icon */}
      <div className="navbar-icon" onClick={toggleNavbar}>
        ☰ {/* Hamburger menu icon */}
      </div>

      {/* Vertical Navbar */}
      <div className={`vertical-navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={toggleNavbar}>Home</a></li>
          <li><a href="#map" onClick={toggleNavbar}>Map & About</a></li>
          <li><a href="#history" onClick={toggleNavbar}>History</a></li>
          <li><a href="#geography" onClick={toggleNavbar}>Geography</a></li>
          <li><a href="#weather" onClick={toggleNavbar}>Weather</a></li>
          <li><a href="#culture" onClick={toggleNavbar}>Culture</a></li>
          <li><a href="#cuisine" onClick={toggleNavbar}>Cuisine</a></li>
        </ul>
      </div>
    </>
  );
};

export default VerticalNavbar;
