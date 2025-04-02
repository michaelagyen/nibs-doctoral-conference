import React from 'react';
import { motion } from 'framer-motion';

// Simple wrapper for consistent padding and optional entrance animation
const SectionWrapper = ({ children, id, className = '', animate = true }) => {
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 }, // Trigger when 20% is visible
        transition: { duration: 0.6, ease: 'easeOut' },
      }
    : {};

  return (
    <motion.section
      id={id}
      className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}
      {...animationProps}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;