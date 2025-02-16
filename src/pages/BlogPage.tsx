import React from 'react';
import { motion } from 'framer-motion';
import { BlogPreview } from '../components/BlogPreview';
import { Search } from 'lucide-react';

export const BlogPage = () => {
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
              Social Growth
              <span className="block text-purple-600">Blog & Resources</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              Latest insights, tips, and strategies for social media growth
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>
      <BlogPreview />
    </motion.div>
  );
};