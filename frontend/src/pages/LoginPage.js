import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For routing to other pages if needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic (authentication)
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Welcome back!</h2>
        <p className="text-center text-gray-500 mb-6">Enter to get unlimited access to data & information.</p>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password <span className="text-red-500">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Eye icon for showing/hiding password (optional feature) */}
            <div className="absolute right-3 top-10 cursor-pointer">
              👁️
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-blue-600"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="ml-2 text-gray-600">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot your password?</Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>

          {/* Alternative Login Options */}
          <div className="text-center my-4 text-gray-500">Or, Login with</div>
          <button
            type="button"
            className="w-full border border-gray-300 text-gray-800 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          {/* Register Link */}
          <div className="text-center mt-6">
            <span className="text-gray-600">Don’t have an account? </span>
            <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
