import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';  // For routing to login page

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        
        {/* Left Section: Navigation Links */}
        <ul className="ml-8 flex space-x-6 text-gray-800">
          <li>
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="map" 
              smooth={true} 
              duration={500} 
              className="hover:text-blue-500 cursor-pointer"
            >
              Map
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="hover:text-blue-500 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section: Login Button */}
        <RouterLink to="/login" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mr-10">
          Login
        </RouterLink>
      </div>
    </nav>
  );
}

export default Navbar;
