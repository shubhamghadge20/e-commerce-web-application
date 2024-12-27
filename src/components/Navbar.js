import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path ? 'text-yellow-400' : 'text-white';

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/" className="text-white text-2xl font-bold">
            Online Shop
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium ${isActive(item.path)} hover:text-yellow-400`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white p-4 space-y-4 transition-all ease-in-out duration-300`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-lg font-medium block ${isActive(item.path)} hover:text-yellow-400`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
