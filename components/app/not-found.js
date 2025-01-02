import React from 'react';
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r  from-cyan-300 to-blue-500 text-transparent bg-clip-text">
          404
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 text-sm font-semibold text-gray-900 bg-cyan-500 rounded-lg shadow hover:bg-cyan-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
