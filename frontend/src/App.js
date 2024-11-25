import React, { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';

const App = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Paths where the Navbar should be displayed
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
    '/state/:stateName',
  ];

  // Paths where the Footer should NOT be displayed
  const noFooterPaths = ['/', '/login', '/register'];

  return (
    <>
      {/* Conditionally render Navbar for specified paths */}
      {navbarPaths.some((path) => location.pathname.startsWith(path)) && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />

        {/* Redirect unauthenticated users trying to access protected routes */}
        {!isLoggedIn ? (
          <>
            <Route path="/home" element={<Navigate to="/login" />} />
            <Route path="/state/:stateName" element={<Navigate to="/login" />} />
            <Route path="/tourism" element={<Navigate to="/login" />} />
            <Route path="/contact" element={<Navigate to="/login" />} />
            <Route path="/feedback" element={<Navigate to="/login" />} />
            <Route path="/about" element={<Navigate to="/login" />} />
            <Route path="/festivals" element={<Navigate to="/login" />} />
            <Route path="/monuments" element={<Navigate to="/login" />} />
            <Route path="/art-and-crafts" element={<Navigate to="/login" />} />
            <Route path="/cuisine" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            {/* Protected Routes */}
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
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>

      {/* Conditionally render Footer */}
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
