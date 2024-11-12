import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TourismPage from './pages/TourismPage';
import StateInfoPage from './pages/StateInfoPage';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import AboutPage from './pages/About';
import FestivalsPage from './pages/FestivalsPage';
import MonumentsPage from './pages/MonumentsPage'; // Ensure this matches the file name exactly
import ArtAndCraftsPage from './pages/ArtAndCraftsPage'; // Ensure this matches the file name exactly
import CuisinePage from './pages/CuisinePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();

  const navbarPaths = ['/', '/contact', '/feedback', '/about', '/festivals', '/monuments', '/art-and-crafts', '/cuisine'];

  return (
    <>
      {navbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/state/:stateName" element={<StateInfoPage />} />
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/monuments" element={<MonumentsPage />} />
        <Route path="/art-and-crafts" element={<ArtAndCraftsPage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
      </Routes>

      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
