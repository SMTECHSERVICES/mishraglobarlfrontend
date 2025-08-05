import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#000] shadow-xl z-[900] border-b border-blue-400/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div 
            className="relative"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div className="absolute inset-0 bg-blue-500/30 blur-lg opacity-50 animate-pulse"></div>
            <div 
              className={`relative w-14 h-14 overflow-hidden transition-all duration-500`}
              style={{
                transformStyle: 'preserve-3d',
                transform: logoHovered 
                  ? 'perspective(1000px) rotateY(15deg) rotateX(5deg) translateZ(10px)' 
                  : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src='/logo.png' alt='logo' className='w-max h-max object-cover' />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `text-blue-100 hover:text-white transition-all duration-300 group ${
                  isActive ? 'text-blue-300 font-semibold' : ''
                }`
              }
            >
              <span className="group-hover:text-blue-300 font-medium">{item.label}</span>
              <div className="h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#000] py-3 px-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  `text-blue-200 hover:text-white py-2 border-b border-blue-500/20 ${
                    isActive ? 'text-white font-semibold' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
