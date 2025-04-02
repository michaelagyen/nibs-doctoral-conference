// src/components/Sponsors.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "https://via.placeholder.com/150x50" },
    { name: "Sponsor 2", logo: "https://via.placeholder.com/150x50" },
    { name: "Sponsor 3", logo: "https://via.placeholder.com/150x50" },
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

  const sponsorVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="sponsors"
      className="w-full py-20 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.1), transparent 50%)`,
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
          Sponsors
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={sponsorVariants}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)', 
                borderColor: 'rgba(34, 211, 238, 0.8)' 
              }}
              className="bg-gray-800/70 backdrop-blur-md p-4 rounded-lg border 
                border-cyan-500/30 transition-all duration-300 flex items-center 
                justify-center h-20 md:h-24"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 md:h-16 object-contain filter drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;