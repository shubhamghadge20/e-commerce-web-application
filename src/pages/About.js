import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-blue-600">Online Shop</span>! We are a passionate team committed to bringing you the best products at the most affordable prices.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Our mission is to provide exceptional customer service and high-quality items that meet your needs.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for choosing <span className="font-semibold text-blue-600">Online Shop</span> – your one-stop shop for all your needs.
        </p>
        <div className="mt-8">
          <Link to="/products">
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
