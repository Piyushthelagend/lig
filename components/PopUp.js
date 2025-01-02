"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const SciFiNotification = ({ type, message, duration = 9999000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Dismiss the notification after the specified duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  // Dismiss manually
  const dismissNotification = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const getNotificationStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 border-green-700 text-white';
      case 'error':
        return 'bg-red-500 border-red-700 text-white';
      case 'info':
        return 'bg-blue-500 border-blue-700 text-white';
      default:
        return 'bg-gray-800 border-gray-900 text-white';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <AiOutlineCheckCircle className="text-white text-3xl" />;
      case 'error':
        return <AiOutlineExclamationCircle className="text-white text-6xl" />;
      case 'info':
        return <AiOutlineExclamationCircle className="text-white text-6xl" />;
      default:
        return <AiOutlineExclamationCircle className="text-white text-6xl" />;
    }
  };

  return (
    <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-1/2 p-4 rounded-xl border-4 shadow-xl ${getNotificationStyle()} glow-effect`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {getIcon()}
          <p className="text-lg font-semibold">{message}</p>
        </div>
        <button
          className="text-white text-xl p-1 rounded-full hover:bg-opacity-80"
          onClick={dismissNotification}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default SciFiNotification;

