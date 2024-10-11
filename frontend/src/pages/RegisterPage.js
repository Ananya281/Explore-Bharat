import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
      firstName,
      lastName,
      email,
      password
    };
  
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
        console.log('User registered successfully:', data);
        // You could display a success message or redirect to login
      } else {
        console.error('Error registering user:', data.message);
        // Show the error message in the UI
        alert(data.message); // Example: Alert the "User already exists" message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };  
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Create New Account</h2>

        {/* Social Sign-up */}
        <button
          type="button"
          className="w-full mb-4 bg-white border border-gray-300 text-gray-800 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>

        <div className="text-center text-gray-500 my-4">OR</div>

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Optional: Eye icon for toggling password visibility */}
            <div className="absolute right-3 top-10 cursor-pointer">
              👁️
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create a New Account
          </button>
        </form>

        {/* Terms of Service and Login Link */}
        <p className="text-center text-gray-600 mt-6">
          By creating, you are agreeing to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
