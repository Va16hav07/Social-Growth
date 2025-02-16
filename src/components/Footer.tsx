import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SocialGrowth
            </h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering creators and businesses to grow their social media presence with AI-powered tools and analytics.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Press</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SocialGrowth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};