// src/components/RegistrationFees.jsx
import React from 'react';
import { motion } from 'framer-motion';

const RegistrationFees = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="registration"
      className="w-full py-20 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.1), transparent 50%)`,
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
            bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent 
            mb-12 tracking-tight"
        >
          Registration Fees
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Early Bird */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 15px 30px rgba(34, 211, 238, 0.3)', 
              borderColor: 'rgba(34, 211, 238, 0.8)' 
            }}
            className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl border 
              border-cyan-500/30 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
              Early Bird (Until July 31, 2025)
            </h3>
            <p className="text-gray-300 text-base md:text-lg">
              Conference Only: <span className="font-medium text-cyan-300">GHC xxx</span>
            </p>
            <p className="text-gray-300 text-base md:text-lg">
              Conference + Doctoral Consortium: <span className="font-medium text-cyan-300">GHC xxx</span>
            </p>
          </motion.div>

          {/* Regular Pricing */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 15px 30px rgba(139, 92, 246, 0.3)', 
              borderColor: 'rgba(139, 92, 246, 0.8)' 
            }}
            className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl border 
              border-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">
              Regular Pricing
            </h3>
            <p className="text-gray-300 text-base md:text-lg">
              Conference Only: <span className="font-medium text-purple-300">GHC xxx</span>
            </p>
            <p className="text-gray-300 text-base md:text-lg">
              Conference + Doctoral Consortium: <span className="font-medium text-purple-300">GHC xxx</span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="register"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 
              text-white py-3 px-8 rounded-full font-semibold text-lg 
              shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] 
              transition-all duration-300"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationFees;