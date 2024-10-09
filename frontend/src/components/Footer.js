import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Explore Bharat. All Rights Reserved.</p>
        <ul className="mt-4 flex justify-center space-x-6">
          <li><a href="https://facebook.com" className="hover:text-blue-500">Facebook</a></li>
          <li><a href="https://twitter.com" className="hover:text-blue-500">Twitter</a></li>
          <li><a href="https://instagram.com" className="hover:text-blue-500">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
