import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Youtube, Instagram, Facebook } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Grow Your</span>
                <span className="block text-purple-600">Social Media Presence</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Boost your social media growth with our AI-powered platform. Get more followers, engagement, and reach across all major social platforms.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-10 absolute"></div>
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"
            >
              <Youtube className="w-12 h-12 text-red-500" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"
            >
              <Instagram className="w-12 h-12 text-pink-500" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"
            >
              <Facebook className="w-12 h-12 text-blue-500" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"
            >
              <TrendingUp className="w-12 h-12 text-green-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};