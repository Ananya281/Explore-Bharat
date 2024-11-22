import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import aboutPattern from '../assets/images/about.svg';

const RegisterPage = ({ setIsLoggedIn }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password validation function
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Email
    if (!validateEmail(email)) {
      toast.error('Invalid email format.', { position: 'top-center' });
      return;
    }

    // Validate Password
    if (!validatePassword(password)) {
      toast.error(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        { position: 'top-center' }
      );
      return;
    }

    const userData = { firstName, lastName, email, password };

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`Welcome ${firstName}! Your account has been created successfully.`, {
          position: 'top-center',
          autoClose: 2000,
        });
        setIsLoggedIn(true);
        navigate('/home');
      } else {
        toast.error(data.message || 'Error registering user. Please try again.', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again later.', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3ece4] relative">
      {/* Decorative Patterns */}
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
        <h2 className="text-3xl font-bold text-center mb-4 text-[#6b4226]">Create New Account</h2>

        <ToastContainer />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c6239]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <small className="text-gray-500">
              Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.
            </small>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6b4226] text-white p-3 rounded-lg hover:bg-[#8c6239] transition duration-300"
          >
            Create a New Account
          </button>
        </form>

        <p className="text-center text-[#6b4226] mt-6">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-[#8c6239] hover:underline">Terms of Service</a> and{' '}
          <a href="#" className="text-[#8c6239] hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-center text-[#6b4226] mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#8c6239] hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
