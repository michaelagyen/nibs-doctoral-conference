import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-10-15T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }); // Runs on every update

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) { // Handle potential initial undefined state
      return;
    }

    timerComponents.push(
      <motion.div
        key={interval}
        className="text-center bg-futuristic-bg-light p-4 md:p-6 rounded-lg shadow-lg mx-1 md:mx-2 min-w-[70px] md:min-w-[90px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 + (Object.keys(timeLeft).indexOf(interval) * 0.1) }}
      >
        <span className="text-3xl md:text-5xl font-bold text-primary block">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm uppercase text-text-dark tracking-wider">{interval}</span>
      </motion.div>
    );
  });

  return (
    <div className="flex justify-center items-center my-8">
      {timerComponents.length ? timerComponents : <span>Loading Countdown...</span>}
    </div>
  );
};

export default Countdown;