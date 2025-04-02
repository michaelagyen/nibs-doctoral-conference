// src/components/ImportantDates.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ImportantDates = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="dates"
      className="w-full py-20 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.1), transparent 50%)`,
      }}
    >
      {/* Subtle tech overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center 
            bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent 
            mb-10 tracking-tight"
        >
          Important Dates & Deadlines
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 text-center mb-12"
        >
          Mark your calendar for the NIBS-U Doctoral Conference milestones
        </motion.p>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Paper/Poster Submissions */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
            <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Paper/Poster Submissions
              </h3>
              <ul className="space-y-3 text-gray-200 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                  April 15 - Call for Abstracts / Submission Portal Opens
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                  May 21 - Abstract Submission Deadline
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                  October 16 - Day 2: Awards Session
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Conference Registration */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Conference Registration
              </h3>
              <ul className="space-y-3 text-gray-200 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  May 1 - Early Bird Registration Opens
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  July 31 - Early Bird Registration Closes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  October 7 - Conference Registration Closes
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantDates;