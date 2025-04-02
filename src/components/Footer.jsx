// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
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
    <footer
      className="w-full py-12 bg-gray-950 text-white relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 90%, rgba(34, 211, 238, 0.1), transparent 50%)`,
      }}
    >
      {/* Subtle tech overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI6MCIgZmlsbD0iIzAwMDAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Conference Info */}
          <motion.div variants={itemVariants} className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              NIBS-U Doctoral Conference
            </h3>
            <p className="text-gray-300 text-base">
              October 15-16, 2025
              <br />
              Accra, Ghana
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-base">
              <li>
                <a
                  href="#overview"
                  className="hover:text-cyan-300 transition-colors duration-300"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#submissions"
                  className="hover:text-cyan-300 transition-colors duration-300"
                >
                  Submissions
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="hover:text-cyan-300 transition-colors duration-300"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  className="hover:text-cyan-300 transition-colors duration-300"
                >
                  Venue
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Us</h3>
            <p className="text-gray-300 text-base">
              Email:{' '}
              <a
                href="2025conference@nibs.edu.gh"
                className="hover:text-cyan-300 transition-colors duration-300"
              >
                2025conference@nibs.edu.gh
              </a>
              <br />
              Phone: +233 XXX XXX XXXX
              <br />
              No.9 Arko Lane off Nelson Mandela Avenue, Near Gulf House, South Legon
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-cyan-500/30 text-center text-gray-400 text-sm"
        >
          <p>
            © {new Date().getFullYear()} NIBS-U Doctoral Conference. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;