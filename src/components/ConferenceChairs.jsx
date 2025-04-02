// src/components/ConferenceChairs.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ConferenceChairs = () => {
  const chairs = [
    {
      name: "Dr. Alice Brown",
      role: "Conference Chair",
      organization: "NIBS University",
      committeeRole: "Lead Organizer",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Prof. Bob White",
      role: "Co-Chair",
      organization: "NIBS University",
      committeeRole: "Program Director",
      photo: "https://via.placeholder.com/150",
    },
  ];

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
      id="chairs"
      className="w-full py-20 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 40% 60%, rgba(34, 211, 238, 0.1), transparent 50%)`,
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
          Conference Chairs
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {chairs.map((chair, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 30px rgba(34, 211, 238, 0.3)', 
                borderColor: 'rgba(34, 211, 238, 0.8)' 
              }}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl border 
                border-cyan-500/30 flex items-center space-x-6 
                transition-all duration-300"
            >
              <img
                src={chair.photo}
                alt={chair.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover 
                  border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-2">
                  {chair.name}
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  {chair.role}, {chair.organization}
                </p>
                <p className="italic text-gray-400 text-base md:text-lg mt-1">
                  {chair.committeeRole}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConferenceChairs;