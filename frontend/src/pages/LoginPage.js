import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import aboutPattern from '../assets/images/about.svg'; // Import SVG decoration

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      toast.error('Invalid email format. Please enter a valid email.', {
        position: 'top-center',
      });
      return;
    }

    // Check password length
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.', {
        position: 'top-center',
      });
      return;
    }

    const userData = { email, password };

    try {
      const response = await fetch('https://backend-navy-two-59.vercel.app//api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log('API Response:', data); // Debugging


      if (response.ok) {
        // Success notification
        toast.success('Login successful! Redirecting...', {
          position: 'top-center',
          autoClose: 2000,
        });

        // Save user session
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('user', JSON.stringify(data));

        setIsLoggedIn(true);

        setTimeout(() => {
          navigate('/home'); // Redirect to HomePage
        }, 2000);
      } else {
        // Error notification
        toast.error(data.message || 'Invalid credentials. Please try again.', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Login Error:', error);
      toast.error('Something went wrong. Please try again later.', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3ece4] relative">
      {/* Background Decoration */}
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

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#6b4226]">Welcome Back!</h2>
        <p className="text-center text-[#8c6239] mb-6">Sign in to access unlimited information.</p>

        <ToastContainer />

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#6b4226] mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-[#6b4226] mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-[#8c6239]"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="ml-2 text-[#6b4226]">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-[#8c6239] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#6b4226] text-white p-3 rounded-lg hover:bg-[#8c6239] transition duration-300"
          >
            Log In
          </button>

          {/* Redirect to Register */}
          <div className="text-center mt-6">
            <span className="text-[#6b4226]">New here? </span>
            <Link to="/register" className="text-[#8c6239] hover:underline">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
