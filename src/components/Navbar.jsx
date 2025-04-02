// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Overview', 'Submissions', 'Speakers', 'Venue', 'Registration'];
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 
        bg-gray-900/80 backdrop-blur-lg border-b border-cyan-500/30 text-white"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold flex items-center space-x-2"
      >
        <img
          src="src\assets\nibs_logo_white.png"
          alt="NIBS University Doctoral Conference Logo"
          className="h-10 w-auto"
        />
      </motion.div>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: '#22d3ee' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>

      {/* Register Button (Desktop) */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-500 text-white 
          px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
      >
        <a href="#registration">Register</a>
      </motion.button>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className={`absolute top-16 left-0 right-0 bg-gray-900/90 backdrop-blur-lg md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#22d3ee' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={toggleMenu}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white 
              px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 mt-4"
            onClick={toggleMenu}
          >
            <a href="#registration">Register</a>
          </motion.button>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;