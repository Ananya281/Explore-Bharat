import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling on HomePage
import { Link as RouterLink, useLocation } from 'react-router-dom';  // For routing and detecting location

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        navbarScrolled ? 'bg-[#f3ece4] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        
        {/* Left Section: Navigation Links */}
        <ul className={`ml-8 flex space-x-6 ${navbarScrolled ? 'text-[#6b4226]' : 'text-white'}`}>
          {isHomePage ? (
            <>
              <li>
                <ScrollLink 
                  to="hero" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[#4a2d18] cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[#4a2d18] cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="map" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[#4a2d18] cursor-pointer"
                >
                  Map
                </ScrollLink>
              </li>
              <li>
                <ScrollLink 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="hover:text-[#4a2d18] cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <RouterLink to="/" className="hover:text-[#4a2d18]">
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/" className="hover:text-[#4a2d18]">
                  About
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/" className="hover:text-[#4a2d18]">
                  Map
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/" className="hover:text-[#4a2d18]">
                  Contact
                </RouterLink>
              </li>
            </>
          )}
        </ul>

        {/* Right Section: Login Button */}
        <RouterLink
          to="/login"
          className={`px-6 py-2 rounded-lg transition duration-300 mr-10 ${
            navbarScrolled 
              ? 'bg-[#6b4226] text-[#f3ece4] hover:bg-[#4a2d18]'
              : 'bg-transparent text-white border border-white hover:bg-white hover:text-[#6b4226]'
          }`}
        >
          Login
        </RouterLink>
      </div>
    </nav>
  );
}

export default Navbar;
