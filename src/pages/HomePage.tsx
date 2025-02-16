import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { BlogPreview } from '../components/BlogPreview';
import { motion } from 'framer-motion';

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <BlogPreview />
    </motion.div>
  );
};