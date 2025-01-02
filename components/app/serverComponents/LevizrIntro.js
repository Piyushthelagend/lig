import React from 'react';

const LevizrIntro = () => {
  return (
    <section className="container mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">
        About <span style={{fontFamily: 'Acquire Bold'}}>Levizr</span>
      </h2>
      <p className="text-xl mb-6">
        Levizr is dedicated to empowering individuals and businesses to build and grow their online presence. 
        As a forward-thinking company, we strive to provide innovative solutions that simplify the digital 
        landscape for everyone. Our mission is to make high-quality web hosting accessible to all, regardless of their technical expertise.
      </p>
      <p className="text-xl mb-6">
        With a commitment to excellence and a passion for innovation, Levizr is shaping the future of digital 
        experiences, one website at a time. Join us on our journey to create a more connected and accessible internet for all.
      </p>
      <a href="/about" className="inline-block px-8 py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
        <i className='ri-arrow-down-line text-xl'></i >Learn More About Us
      </a>
    </section>
  );
};

export default LevizrIntro;
