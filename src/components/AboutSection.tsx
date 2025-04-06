'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-playfair">
            אודותינו
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="משרד עורכי דין דלתא - מומחים בתחום האופנה"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2"
            ref={textRef}
          >
            <div className="fade-in-element">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 font-heebo">
                משרד עורכי דין דלתא
              </h3>
              <p className="text-xl leading-relaxed mb-6 text-gray-700 font-heebo">
                אנחנו משרד עורכי דין מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-600 font-heebo">
                הצוות המקצועי שלנו מורכב מעורכי דין בעלי ניסיון רב בתחום המשפט המסחרי, קניין רוחני, וזכויות יוצרים - כל מה שעסק בתחום האופנה צריך. אנו מלווים מעצבים, חברות אופנה, ומותגים מובילים בכל שלבי הפעילות העסקית.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secondary-dark transition-all duration-300"
              >
                צור קשר
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;