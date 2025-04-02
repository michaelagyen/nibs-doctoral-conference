  // src/components/Banner.jsx
  import React from 'react';
  import { motion } from 'framer-motion';
  import Countdown from './Countdown';

  const Banner = () => {
    const textVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.3, ease: 'easeOut' },
      }),
    };

    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDAwMDAwIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-6xl md:text-8xl font-extrabold ]"
          >
            NiBS University Doctoral Conference
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-6 text-2xl md:text-3xl text-gray-200 font-medium tracking-wide"
          >
            Exploring new frontiers in Research
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-4 text-lg md:text-xl text-cyan-300"
          >
            October 15-16, 2025 | Accra, Ghana
          </motion.div>

          {/* Countdown */}
        
            <Countdown />
      

          {/* Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-12 flex justify-center gap-8"
          >
            <motion.a
              href="#registration"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white 
                px-10 py-4 rounded-full font-semibold text-xl shadow-lg 
                hover:bg-cyan-500 transition-all duration-300"
            >
              Register Now
            </motion.a>
            <motion.a
              href="#submissions"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-purple-400 text-purple-400 
                px-10 py-4 rounded-full font-semibold text-xl hover:bg-purple-400 
                hover:text-white transition-all duration-300"
            >
              Submit Abstract
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
            from-transparent via-purple-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.5 }}
        />
      </div>
    );
  };

  export default Banner;