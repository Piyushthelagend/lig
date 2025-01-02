"use client"
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const CounterNumbers = ({ 
  startWhenVisible = true,
  icon = "smile",
  fadedelay = "500",
  fadeduration = "1000",
  iconType = "bx",
  totalCount = 100,
  initialCount = 0,
  intervalDuration = 100,
  heading = 'Happy Clients',
 
}) => {
  const [count, setCount] = useState(initialCount);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    let observer = null;
    if (counterRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer) {
              observer.unobserve(counterRef.current);
            }
          }
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );

      observer.observe(counterRef.current);
    }

    return () => {
      if (observer && counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startWhenVisible && isVisible) {
      const interval = setInterval(() => {
        if (count < totalCount) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    }
  }, [count, isVisible, startWhenVisible, totalCount, intervalDuration]);

  return (
    <div ref={counterRef} class="count-box" data-aos-delay={fadedelay}  data-aos-duration={fadeduration}>
    <i class="bi bi-emoji-smile"></i>
    <div>
      <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
      <p>Happy Clients</p>
    </div>
  </div>
  );
}

CounterNumbers.propTypes = {
  startWhenVisible: PropTypes.bool,
  icon: PropTypes.string,
  fadedelay: PropTypes.string,
  fadeduration: PropTypes.string,
  iconType: PropTypes.string,
  totalCount: PropTypes.number,
  initialCount: PropTypes.number,
  intervalDuration: PropTypes.number,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
};

export default CounterNumbers;
