import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                SocialGrowth
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              Blog
            </Link>
            <ThemeToggle />
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Blog
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};