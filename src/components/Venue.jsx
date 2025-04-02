// src/components/Venue.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="venue"
      className="w-full py-20 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1), transparent 50%)`,
      }}
    >
      {/* Subtle tech overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI6MCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center 
            bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent 
            mb-12 tracking-tight"
        >
          Venue
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10"
          >
            <span className="font-semibold text-purple-300">Hotel Name</span>
            <br />
            Hotel Address - Line 1
            <br />
            Accra, Ghana
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
            className="relative bg-gray-800/70 backdrop-blur-md p-4 rounded-xl 
              border border-cyan-500/30 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="400"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Conference Venue Location"
            ></iframe>
            {/* Subtle overlay for futuristic effect */}
            <div className="absolute inset-0 pointer-events-none 
              bg-gradient-to-br from-transparent via-cyan-500/10 to-purple-500/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;