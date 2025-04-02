import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      className="py-24 bg-gray-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15), transparent 50%)`,
      }}
    >
      {/* Subtle tech overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-start">
        {/* Text Content */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl ml-0 md:ml-16 md:w-2/3"
        >
          <motion.h2
            variants={textVariants}
            className="text-5xl md:text-6xl font-extrabold mb-10 
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
              bg-clip-text text-transparent tracking-tight"
          >
            Conference Overview
          </motion.h2>

          <motion.div
            variants={textVariants}
            className="mb-12 relative pl-6 border-l-4 border-cyan-400 
              hover:border-cyan-300 transition-colors duration-300"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              The <span className="font-bold text-cyan-300">NIBS-U Doctoral Conference</span> stands as Africa’s leading platform for executive practitioner-scholars. Connect with peers, unveil practice-driven research, and dive into thought-leadership dialogues crafted to spark real-world impact across diverse contexts and challenges.
            </p>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mb-12 relative pl-6 border-l-4 border-blue-500 
              hover:border-blue-400 transition-colors duration-300"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Our theme, <span className="italic text-blue-300">“Reimagining Business and Governance in the Digital World,”</span> captures the pulse of today’s digital shift. With <span className="font-bold text-blue-300">90% of organizations</span> in transformation (McKinsey & Company), we tackle AI-driven strategies, digital governance, and beyond.
            </p>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="relative pl-6 border-l-4 border-purple-500 
              hover:border-purple-400 transition-colors duration-300"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              In 2025, we unite academia and industry around <span className="font-bold text-purple-300">Strategy, Governance, Leadership, Innovation, and Digital Transformation</span>. This is where theory meets practice to forge sustainable change in a digital-first future.
            </p>
          </motion.div>
        </motion.div>

        {/* Image Collage */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 md:mt-0 md:w-1/3 md:ml-8 flex flex-col gap-4"
        >
          <motion.img
            variants={imageVariants}
            src="https://picsum.photos/300/200?random=1"
            alt="Conference Scene 1"
            className="rounded-lg shadow-lg object-cover w-full h-40 md:h-48"
          />
          <motion.img
            variants={imageVariants}
            src="https://picsum.photos/300/200?random=2"
            alt="Conference Scene 2"
            className="rounded-lg shadow-lg object-cover w-full h-40 md:h-48"
          />
          <motion.img
            variants={imageVariants}
            src="https://picsum.photos/300/200?random=3"
            alt="Conference Scene 3"
            className="rounded-lg shadow-lg object-cover w-full h-40 md:h-48"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;