"use client"
import React, { useEffect } from 'react';

const Scroll2Top = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const TopBtn = document.getElementById('top');
      if (window.scrollY >= 100) {
        TopBtn.style.right = '20px';
      } else {
        TopBtn.style.right = '265rem';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (
    <div>
      <a href='#' className="back-to-top flex justify-center items-center" id="top">
      <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Scroll2Top;
