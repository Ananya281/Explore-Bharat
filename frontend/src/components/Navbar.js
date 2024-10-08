import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-6 py-4 text-gray-800">
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
      </div>
    </nav>
  );
}

export default Navbar;
