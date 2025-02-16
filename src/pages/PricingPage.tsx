import React from 'react';
import { motion } from 'framer-motion';
import { Pricing } from '../components/Pricing';

export const PricingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Simple, Transparent
              <span className="block text-purple-600">Pricing Plans</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              Choose the perfect plan for your social media growth needs
            </motion.p>
          </div>
        </div>
      </section>
      <Pricing />
    </motion.div>
  );
};