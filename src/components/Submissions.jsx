// src/components/Submissions.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Submissions = () => {
  const tracks = ["Strategy", "Governance", "Leadership", "Innovation", "Digital Transformation"];
  const currentDate = new Date();
  const cutoffDate = new Date('2025-06-03');
  const isBeforeJune3 = currentDate <= cutoffDate;

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

  const trackVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="submissions"
      className="w-full py-20 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 50%)`,
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
            bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent 
            mb-10 tracking-tight"
        >
          Abstract & Paper Submissions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 text-center mb-12"
        >
          Open for submissions until <span className="font-semibold text-purple-300">May 21, 2025</span>
        </motion.p>

        {/* Tracks */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
        >
          {tracks.map((track) => (
            <motion.div
              key={track}
              variants={trackVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)' }}
              className="bg-gray-800/70 backdrop-blur-md p-4 rounded-lg border 
                border-purple-500/30 text-center text-gray-200 text-lg font-medium 
                hover:border-purple-400 transition-all duration-300"
            >
              {track}
            </motion.div>
          ))}
        </motion.div>

        {/* Guidelines */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <ul className="space-y-4 text-lg md:text-xl text-gray-200">
            <li>
              Guidelines for Submission of Abstracts:{' '}
              <a
                href="abstract-guidelines.pdf"
                className="text-cyan-400 hover:text-cyan-300 underline 
                  transition-colors duration-300"
              >
                Click HERE
              </a>
            </li>
            <li>
              Guidelines for Paper Submissions:{' '}
              <a
                href="paper-guidelines.pdf"
                className="text-cyan-400 hover:text-cyan-300 underline 
                  transition-colors duration-300"
              >
                Click HERE
              </a>
            </li>
            <li>
              Guidelines for Poster Submissions:{' '}
              <a
                href="poster-guidelines.pdf"
                className="text-cyan-400 hover:text-cyan-300 underline 
                  transition-colors duration-300"
              >
                Click HERE
              </a>
            </li>
            <li>
              Editorial Policy:{' '}
              <a
                href="editorial-policy.pdf"
                className="text-cyan-400 hover:text-cyan-300 underline 
                  transition-colors duration-300"
              >
                Click HERE
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Ethics */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">Ethics</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Authors of conference papers must correctly attribute knowledge or information from the works of other researchers. They must adhere to widely accepted ethical standards on identifying sources to protect against plagiarism. Authors must also disclose data sources, outline how they collected the data for their conference paper, and adhere to recognized ethical research practices.
            <br /><br />
            Authors must list research funding sources in their papers, including direct and indirect financial support and in-kind support. These sources may be listed under an 'Acknowledgments' section or appropriately identified in the main text.
            <br /><br />
            Should reviewers seek clarification on matters such as originality or data sources, authors must promptly provide the required responses.
          </p>
        </motion.div>

        {/* Review Process */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Review Process</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            We will ensure that experts with relevant expertise review papers. The conference's reviewers will carefully read papers, treat authors fairly, and provide constructive feedback. They will consider papers as confidential information and keep their identity from authors. If reviewers need clarification about any aspects or have a conflict of interest, they will immediately consult with the conference chairs.
          </p>
        </motion.div>

        {/* Conditional Submit Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="submission-form"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 
              text-white py-3 px-8 rounded-full font-semibold text-lg 
              shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] 
              transition-all duration-300"
          >
            {isBeforeJune3 ? 'Submit Abstract Now' : 'Submit Paper/Poster Now'}
          </a>
          <p className="text-sm text-gray-400 mt-2">
            Form details will be sent to{' '}
            <a
              href="mailto:info@nibsconference.org"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              info@nibsconference.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Submissions;