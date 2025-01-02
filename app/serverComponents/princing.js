import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl" data-aos="fade-right" data-aos-duration="500"><i className='ri-price-tag-3-line'></i> Pricing Plans</h2>
            <p className="mt-4 text-lg leading-6 text-gray-400">Choose the plan that’s right for you.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-x-10">
            
            {/* Free Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all cursor-pointer" data-aos="fade-right" data-aos-duration="500">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium"><i className='ri-walk-line'></i>Free</h3>
                <p className="mt-4 text-4xl font-extrabold text-white">$0<span className="text-base font-medium text-gray-400">/month</span></p>
                <p className="mt-4 text-gray-400">Users need to watch 10 ads every day to keep their website active.</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Storage</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Website Creation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Free Subdomain</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Cloud Hosting (PHP Only)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">SSL</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Control Panel</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="#" className="block w-full text-center text-indigo-600 bg-white py-2 rounded-md font-semibold hover:bg-gray-100">Get Started</a>
                </div>
              </div>
            </div>

            {/* Basic Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all cursor-pointer" data-aos="fade-right" data-aos-duration="500">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium"> <i className='ri-motorbike-line'></i>Basic</h3>
                <p className="mt-4 text-4xl font-extrabold text-white">$19<span className="text-base font-medium text-gray-400">/month</span></p>
                <p className="mt-4 text-gray-400">Perfect for small projects and personal use.</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Storage</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Website Creation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Free Subdomain</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Cloud Hosting (PHP, Python)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">1 business Email</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">AI Chatbot API</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">SSL</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Control Panel</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Priority Support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="#" className="block w-full text-center text-indigo-600 bg-white py-2 rounded-md font-semibold hover:bg-gray-100">Get Started</a>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all cursor-pointer" data-aos="fade-right" data-aos-duration="500">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium"><i className='bx bxs-plane'></i>Pro</h3>
                <p className="mt-4 text-4xl font-extrabold text-white">$49<span className="text-base font-medium text-gray-400">/month</span></p>
                <p className="mt-4 text-gray-400">Ideal for professionals and small businesses.</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Storage</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Website Creation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Free Subdomain</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Cloud Hosting (PHP, Python, Node.js)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">AI Chatbot API</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Levizr AI WebBuilder</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">SSL & Custom Domain</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">5 business Email</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Control Panel</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">24/7 Support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="#" className="block w-full text-center text-indigo-600 bg-white py-2 rounded-md font-semibold hover:bg-gray-100">Get Started</a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all cursor-pointer" data-aos="fade-right" data-aos-duration="500">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium"><i className='ri-rocket-line'></i>Premium</h3>
                <p className="mt-4 text-4xl font-extrabold text-white">$99<span className="text-base font-medium text-gray-400">/month</span></p>
                <p className="mt-4 text-gray-400">Perfect for large businesses and heavy traffic websites.</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Storage</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Website Creation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited bandwidth</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Free Subdomain</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Cloud Hosting (PHP, Python, Node.js)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">AI Chatbot API</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Levizr AI WebBuilder</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">SSL & Custom Domain</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Control Panel</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">Unlimited Business Email Accounts</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-3 text-gray-300">24/7 Support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a href="#" className="block w-full text-center text-indigo-600 bg-white py-2 rounded-md font-semibold hover:bg-gray-100">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}

export default WhyChooseUs
