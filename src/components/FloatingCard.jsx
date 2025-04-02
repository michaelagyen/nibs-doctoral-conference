// src/components/FloatingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ title, value, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`absolute ${position} bg-white/10 backdrop-blur-md text-white p-4 rounded-lg shadow-lg`}
    >
      <h3 className="text-lg font-semibold">{value}</h3>
      <p className="text-sm">{title}</p>
    </motion.div>
  );
};

export default FloatingCard;