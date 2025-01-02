"use client";
import React from "react";

const SciFiLoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Central Loader */}
      <div className="flex flex-col items-center z-10">
        {/* Levizr Logo */}
        <div className="w-20 h-20 mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg"></div>
          <div className="absolute inset-0 bg-black rounded-full border-4 border-cyan-400"></div>
        </div>

        {/* Levizr Text */}
        <h1 className="text-4xl font-bold text-white uppercase tracking-widest mb-4">
          Levizr
        </h1>
        <p className="text-sm text-cyan-400">Image Generator</p>

        {/* Animated Loader Bar */}
        <div className="w-40 h-2 mt-8 bg-gray-700 relative overflow-hidden rounded-full">
          <div className="absolute h-full w-1/3 bg-gradient-to-r from-cyan-400 to-blue-400 animate-load"></div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes twinkle {
          from {
            opacity: 0.3;
          }
          to {
            opacity: 0.8;
          }
        }
        @keyframes load {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SciFiLoadingScreen;
