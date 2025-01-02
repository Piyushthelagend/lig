"use client"; // Client component

import React, { useState } from 'react';
import Link from 'next/link';
import { githubSignIn } from '@/app/utils/serverActions'; // Import the server action
// import getSession from '@/app/utils/session';

// const session = await getSession();
// if (session){
//  console.log(session);
 
// }
const LoginForm = () => {
  const [error, setError] = useState('');  // State to manage error messages
  const [isProcessing, setIsProcessing] = useState(false);  // State to manage processing status

  const handleLogin = async (formdata) => {
    const username = formdata.get("username");
    const password = formdata.get("password");

    setIsProcessing(true);  // Set processing state to true when the login process starts

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.message);
        window.location.href = '/';  // Redirect to the homepage on successful login
      } else {
        console.error(data.error);
        setError(data.error);  // Set error message if login fails
      }
    } catch (err) {
      console.error('Failed to login:', err);
      setError('Failed to login. Please try again.');  // Set a general error message for network issues or unexpected errors
    } finally {
      setIsProcessing(false);  // Reset processing state after the login attempt
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full shadow-white">
        {/* GitHub Sign-In Form */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await githubSignIn(); // Use the server action here
          }}
          className="auth-provider flex justify-center items-center mb-6"
        >
          <button
            type='submit'
            className="flex h-10 w-1/2 items-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
          >
            <img
              loading="lazy"
              height="24"
              width="24"
              className="mr-2"
              src="https://authjs.dev/img/providers/github.svg"
              alt="GitHub Logo"
            />
            <span>Sign in with GitHub</span>
          </button>
        </form>

        {/* Username and Password Login Form */}
        <form
          className='column space-y-4'
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(new FormData(e.currentTarget));
          }}
        >
          <h2 className='mx-auto my-2 text-white'>---OR---</h2>
          <h3 className='mb-4 text-white text-center'>Login With</h3>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="username" className='text-white'>Username</label>
            <input
              className='bg-gray-800 text-white rounded-md h-10 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder='Enter your username...'
              name='username'
              required
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="password" className='text-white'>Password</label>
            <input
              className='bg-gray-800 text-white rounded-md h-10 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="password"
              placeholder='Enter your password...'
              name='password'
              required
            />
          </div>
          {error && (
            <div className='text-red-500 text-center mt-2'>
              {error}
            </div>
          )}
          <button
            type="submit"
            className='mt-4 h-12 w-full bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200'
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Login'}
          </button>
          <div className='text-center text-white mt-4'>
            Don't have an account? 
            <span>
              <Link href={"/Auth/signup"} className='underline text-blue-400 hover:text-blue-300 ml-1'>Sign Up Here</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
