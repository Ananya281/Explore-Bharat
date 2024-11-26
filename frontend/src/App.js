import React, { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

// Page Imports
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TourismPage from './pages/TourismPage';
import StateInfoPage from './pages/StateInfoPage';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import AboutPage from './pages/About';
import FestivalsPage from './pages/FestivalsPage';
import MonumentsPage from './pages/MonumentsPage';
import ArtAndCraftsPage from './pages/ArtAndCraftsPage';
import CuisinePage from './pages/CuisinePage';

// Festival-specific pages
import PanIndianFestival from './pages/PanIndianFestival';
import FolkFestival from './pages/FolkFestival';
import TribalFestival from './pages/TribalFestival';
import FairFestival from './pages/FairFestival';

// Monument-specific pages
import AncientForts from './pages/AncientForts';
import ReligiousMonuments from './pages/ReligiousMonuments';
import ArchitecturalWonders from './pages/ArchitecturalWonders';
import HeritageSites from './pages/HeritageSites';

// Art-specific pages
import VisualArts from './pages/VisualArts';
import PerformingArts from './pages/PerformingArts';
import TextileArts from './pages/TextileArts';
import ContemporaryArts from './pages/ContemporaryArts';

// Cuisine-specific pages
import NorthIndianCuisine from './pages/NorthIndianCuisine';
import SouthIndianCuisine from './pages/SouthIndianCuisine';
import EastIndianCuisine from './pages/EastIndianCuisine';
import WestIndianCuisine from './pages/WestIndianCuisine';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';

// Utility function for Navbar visibility
const useNavbarVisibility = (pathname) => {
  // Paths where Navbar should NOT be displayed
  const excludedNavbarPaths = [
    '/state/',
    '/pan-indian-festival',
    '/folk-festival',
    '/tribal-festival',
    '/fair-festival',
    '/ancient-forts',
    '/religious-monuments',
    '/architectural-wonders',
    '/heritage-sites',
    '/visual-arts',
    '/performing-arts',
    '/textile-arts',
    '/contemporary-arts',
    '/north-indian-cuisine',
    '/south-indian-cuisine',
    '/east-indian-cuisine',
    '/west-indian-cuisine',
  ];

  // Check if the current path starts with any of the excluded paths
  if (excludedNavbarPaths.some((path) => pathname.startsWith(path))) {
    return false; // Do not show Navbar
  }

  // Default Navbar visibility logic
  const navbarPaths = [
    '/home',
    '/contact',
    '/feedback',
    '/about',
    '/festivals',
    '/monuments',
    '/art-and-crafts',
    '/cuisine',
    '/tourism',
  ];
  return navbarPaths.some((path) => pathname.startsWith(path));
};

// Utility function for Footer visibility
const useFooterVisibility = (pathname) => {
  const hiddenFooterPaths = ['/', '/login', '/register'];
  return !hiddenFooterPaths.includes(pathname);
};

const App = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showNavbar = useNavbarVisibility(location.pathname);
  const showFooter = useFooterVisibility(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes */}
        {!isLoggedIn ? (
          <>
            {[
              '/home',
              '/state/:stateName',
              '/tourism',
              '/contact',
              '/feedback',
              '/about',
              '/festivals',
              '/monuments',
              '/art-and-crafts',
              '/cuisine',
              '/pan-indian-festival',
              '/folk-festival',
              '/tribal-festival',
              '/fair-festival',
              '/ancient-forts',
              '/religious-monuments',
              '/architectural-wonders',
              '/heritage-sites',
              '/visual-arts',
              '/performing-arts',
              '/textile-arts',
              '/contemporary-arts',
              '/north-indian-cuisine',
              '/south-indian-cuisine',
              '/east-indian-cuisine',
              '/west-indian-cuisine',
            ].map((path) => (
              <Route key={path} path={path} element={<Navigate to="/login" />} />
            ))}
          </>
        ) : (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/state/:stateName" element={<StateInfoPage />} />
            <Route path="/tourism" element={<TourismPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/monuments" element={<MonumentsPage />} />
            <Route path="/art-and-crafts" element={<ArtAndCraftsPage />} />
            <Route path="/cuisine" element={<CuisinePage />} />
            <Route path="/pan-indian-festival" element={<PanIndianFestival />} />
            <Route path="/folk-festival" element={<FolkFestival />} />
            <Route path="/tribal-festival" element={<TribalFestival />} />
            <Route path="/fair-festival" element={<FairFestival />} />
            <Route path="/ancient-forts" element={<AncientForts />} />
            <Route path="/religious-monuments" element={<ReligiousMonuments />} />
            <Route path="/architectural-wonders" element={<ArchitecturalWonders />} />
            <Route path="/heritage-sites" element={<HeritageSites />} />
            <Route path="/visual-arts" element={<VisualArts />} />
            <Route path="/performing-arts" element={<PerformingArts />} />
            <Route path="/textile-arts" element={<TextileArts />} />
            <Route path="/contemporary-arts" element={<ContemporaryArts />} />
            <Route path="/north-indian-cuisine" element={<NorthIndianCuisine />} />
            <Route path="/south-indian-cuisine" element={<SouthIndianCuisine />} />
            <Route path="/east-indian-cuisine" element={<EastIndianCuisine />} />
            <Route path="/west-indian-cuisine" element={<WestIndianCuisine />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>

      {/* Conditionally render Footer */}
      {showFooter && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
