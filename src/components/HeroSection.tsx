'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any additional initialization if needed
  }, []);

  return (
    <div 
      ref={heroRef}
      className={`relative h-screen w-full overflow-hidden ${className}`}
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="משרד עורכי דין דלתא" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-secondary/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          {/* Logo or Brand Element */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <div className="text-3xl font-bold font-serif text-white">דלתא</div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg font-heading"
          >
            משרד עורכי דין מוביל בישראל
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-body"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              className="bg-white text-secondary hover:bg-secondary hover:text-white transition-all duration-300 py-4 px-8 rounded-lg font-bold text-lg shadow-lg flex items-center gap-2 group"
            >
              <span>קבע תור עכשיו</span>
              <FaCalendarAlt className="text-primary group-hover:text-white transition-colors duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute top-20 left-10 w-24 h-24 border-2 border-white/20 rounded-full"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-1 h-16 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-white/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;