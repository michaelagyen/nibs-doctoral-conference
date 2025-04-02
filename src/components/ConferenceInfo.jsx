// src/components/ConferenceInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ConferenceInfo = () => {
  const sessions = [
    { date: 'October 3, 2022', title: 'Virtual sessions. Eventor LIVE@MAX', img: 'https://via.placeholder.com/300x200' },
    { date: 'October 4, 2022', title: 'Opening', img: 'https://via.placeholder.com/300x200' },
    { date: 'October 12, 2022', title: 'Inspiration Art', img: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <section className="py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-primary-dark">
          The conference on the design, and engineering programming topics
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Eventor Collaborative, brought to you by IBM, Google and AWS, is where the most inventive and forward-thinking nonprofit leaders come together to discover emerging trends in fundraising and technology.
        </p>
      </motion.div>

      {/* Session Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center space-x-6 mt-10"
      >
        {sessions.map((session, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-secondary-light"
          >
            <img src={session.img} alt={session.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-gray-600">{session.date}</p>
              <h3 className="text-lg font-semibold text-primary-dark">{session.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl font-bold text-primary-dark text-center mt-16"
      >
        An environment where participants and experts
      </motion.h2>
    </section>
  );
};

export default ConferenceInfo;