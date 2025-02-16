import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    features: [
      'Basic analytics dashboard',
      'YouTube optimization',
      'Instagram growth tools',
      'Facebook page optimization',
      'Email support',
      '5 scheduled posts per day',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    features: [
      'Advanced analytics dashboard',
      'All social media platforms',
      'Priority support',
      'AI-powered content suggestions',
      'Custom growth strategy',
      'Unlimited scheduled posts',
      'Monthly strategy call',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Custom analytics solutions',
      'Dedicated account manager',
      'Custom API integration',
      'White-label reports',
      'Advanced AI features',
      'Custom automation rules',
      '24/7 priority support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your social media growth needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'border-2 border-purple-500 dark:border-purple-400'
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-2 text-sm font-medium text-white text-center">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-600 dark:text-gray-400">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#"
                    className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.popular
                        ? 'text-white bg-purple-600 hover:bg-purple-700'
                        : 'text-purple-600 bg-purple-100 hover:bg-purple-200 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};