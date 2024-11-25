import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerticalNavbar.css';

const VerticalNavbar = ({ stateName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // React Router navigation function

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    toggleNavbar(); // Close the navbar after navigation
    navigate(path); // Navigate to the specified path
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
          <li>
            <button className="navbar-link" onClick={() => handleNavigation('/home')}>
              Home
            </button>
          </li>
          <li>
            <a href="#statemapabout" onClick={toggleNavbar}>
              Map & About
            </a>
          </li>
          <li>
            <a href="#history" onClick={toggleNavbar}>
              History
            </a>
          </li>
          <li>
            <a href="#geography" onClick={toggleNavbar}>
              Geography
            </a>
          </li>
          <li>
            <a href="#weather" onClick={toggleNavbar}>
              Weather
            </a>
          </li>
          <li>
            <a href="#culture" onClick={toggleNavbar}>
              Culture
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VerticalNavbar;
