import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: '10 Tips to Grow Your YouTube Channel in 2025',
    excerpt: 'Learn the latest strategies and techniques to boost your YouTube presence and grow your subscriber base.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'YouTube',
    readTime: '5 min read',
  },
  {
    title: 'Instagram Algorithm: What Changed in 2025',
    excerpt: "Stay ahead of the curve with our comprehensive breakdown of Instagram's latest algorithm changes.",
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Instagram',
    readTime: '4 min read',
  },
  {
    title: 'Leveraging AI for Social Media Growth',
    excerpt: 'Discover how artificial intelligence is revolutionizing social media marketing and content creation.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'AI',
    readTime: '6 min read',
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Latest Growth Insights
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Stay updated with the latest trends and strategies
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            View all articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};