import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Facebook, Twitter, Linkedin, TrendingUp, BarChart, Bot, Shield, Zap, Target, Users } from 'lucide-react';

const features = [
  {
    title: 'Content Creation',
    description: 'AI-powered content suggestions and optimization for each platform.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    platforms: ['YouTube', 'Instagram', 'Facebook', 'Twitter', 'LinkedIn'],
  },
  {
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics dashboard with real-time metrics and growth tracking.',
    icon: <BarChart className="w-6 h-6 text-blue-500" />,
    platforms: ['All Platforms'],
  },
  {
    title: 'Audience Growth',
    description: 'Target and grow your audience with AI-driven strategies.',
    icon: <Target className="w-6 h-6 text-green-500" />,
    platforms: ['All Platforms'],
  },
  {
    title: 'Community Management',
    description: 'Engage with your audience and manage communities effectively.',
    icon: <Users className="w-6 h-6 text-purple-500" />,
    platforms: ['All Platforms'],
  },
];

const platformFeatures = [
  {
    platform: 'YouTube',
    icon: <Youtube className="w-8 h-8 text-red-500" />,
    features: [
      'Video SEO optimization',
      'Thumbnail generation',
      'Engagement analytics',
      'Competitor analysis',
      'Trending topics',
    ],
  },
  {
    platform: 'Instagram',
    icon: <Instagram className="w-8 h-8 text-pink-500" />,
    features: [
      'Content scheduling',
      'Hashtag optimization',
      'Story analytics',
      'Engagement tracking',
      'Growth insights',
    ],
  },
  {
    platform: 'Facebook',
    icon: <Facebook className="w-8 h-8 text-blue-600" />,
    features: [
      'Page optimization',
      'Audience insights',
      'Content calendar',
      'Ad performance',
      'Community management',
    ],
  },
];

export const FeaturesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Powerful Features for
              <span className="block text-purple-600">Social Media Growth</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              Everything you need to grow your social media presence across all platforms
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform-specific Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Platform-Specific Features
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Specialized tools for each social media platform
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {platformFeatures.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center mb-6">
                  {platform.icon}
                  <h3 className="ml-3 text-2xl font-semibold text-gray-900 dark:text-white">
                    {platform.platform}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {platform.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};