import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StateInfoPage from './pages/StateInfoPage';  // Your dynamic state info page
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

const App = () => {
  const location = useLocation(); // Get the current path

  return (
    <>
      {location.pathname === '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Dynamic route for state information */}
        <Route path="/state/:stateName" element={<StateInfoPage />} /> 
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
