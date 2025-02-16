import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;