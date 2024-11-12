import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TourismPage from './pages/TourismPage';
import StateInfoPage from './pages/StateInfoPage';
import Contact from './pages/Contact'; // Import Contact page
import Feedback from './pages/Feedback'; // Import Feedback page
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

const App = () => {
  const location = useLocation(); // Get the current path

  // Define the paths where the Navbar should be displayed (Home Page, Contact Page, and Feedback Page)
  const navbarPaths = ['/', '/contact', '/feedback'];

  return (
    <>
      {/* Conditionally render Navbar based on the current path */}
      {navbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/state/:stateName" element={<StateInfoPage />} /> 
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        <Route path="/feedback" element={<Feedback />} /> {/* Feedback page route */}
      </Routes>

      {/* Always render Footer */}
      <Footer />
    </>
  );
};

// Wrap App component in Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
