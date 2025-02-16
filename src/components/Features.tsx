import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Facebook, Twitter, Linkedin, TrendingUp, BarChart, Bot, Shield } from 'lucide-react';

const features = [
  {
    icon: <Youtube className="w-6 h-6 text-red-500" />,
    title: 'YouTube Growth',
    description: 'Boost subscribers, watch time, and video SEO optimization for better visibility.',
  },
  {
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    title: 'Instagram Growth',
    description: 'Increase followers, engagement, and reach with targeted strategies.',
  },
  {
    icon: <Facebook className="w-6 h-6 text-blue-500" />,
    title: 'Facebook Marketing',
    description: 'Expand your audience and boost engagement on Facebook.',
  },
  {
    icon: <Twitter className="w-6 h-6 text-sky-500" />,
    title: 'Twitter Growth',
    description: 'Build a strong Twitter presence with engaging content strategies.',
  },
  {
    icon: <Linkedin className="w-6 h-6 text-blue-700" />,
    title: 'LinkedIn Optimization',
    description: 'Enhance your professional network and business presence.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: 'Growth Analytics',
    description: 'Track your progress with detailed analytics and insights.',
  },
  {
    icon: <BarChart className="w-6 h-6 text-purple-500" />,
    title: 'Performance Metrics',
    description: 'Monitor key performance indicators across all platforms.',
  },
  {
    icon: <Bot className="w-6 h-6 text-indigo-500" />,
    title: 'AI-Powered Growth',
    description: 'Leverage AI algorithms for optimal content scheduling and engagement.',
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: 'Safe & Secure',
    description: 'All growth is organic and compliant with platform guidelines.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features for Your Growth
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to grow your social media presence across all platforms.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="h-full relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-gray-800 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};