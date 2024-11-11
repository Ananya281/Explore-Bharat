import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import aboutPattern from '../assets/images/about.svg'; // Import the SVG decoration

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = { email, password };
  
    try {
      console.log('Sending login request:', userData);
  
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);
  
      if (response.ok) {
        toast.success(`Welcome back!`, {
          position: 'top-center',
          autoClose: 3000,
        });
  
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.error(data.message || 'Invalid login credentials', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.', {
        position: 'top-center',
      });
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3ece4] relative">
      {/* Decorative Pattern */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${aboutPattern})`,
          filter: 'brightness(0) saturate(100%) invert(58%) sepia(31%) saturate(2164%) hue-rotate(2deg) brightness(92%) contrast(89%)',
        }}
      ></div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#6b4226]">Welcome back!</h2>
        <p className="text-center text-[#8c6239] mb-6">Enter to get unlimited access to data & information.</p>

        <ToastContainer /> {/* For displaying toasts */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#6b4226] mb-2">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Enter your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-[#6b4226] mb-2">Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-[#8c6239]"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="ml-2 text-[#6b4226]">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-[#8c6239] hover:underline">Forgot your password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b4226] text-white p-3 rounded-lg hover:bg-[#8c6239] transition duration-300"
          >
            Log In
          </button>

          <div className="text-center mt-6">
            <span className="text-[#6b4226]">Don’t have an account? </span>
            <Link to="/register" className="text-[#8c6239] hover:underline">Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
