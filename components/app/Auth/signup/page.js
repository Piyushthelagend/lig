"use client"; // Add this to mark it as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setTimeout(() => router.push('/'), 2000); // Redirect after 2 seconds
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error('Failed to sign up:', err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container flex justify-center items-center'>
      <div className='column bg-gray-900 rounded-md w-1/2 p-5 m-5 shadow-emerald-50 shadow-md'>
        <form onSubmit={handleSubmit} className='column'>
          <h3 className='mb-4'>Sign Up</h3>
          {loading && <p>Processing...</p>}
          {success && <p className='text-green-500'>{success}</p>}
          {error && <p className='text-red-500'>{error}</p>}
          <label htmlFor="username">Username</label>
          <input
            className='bg-gray-800 rounded-md h-10 px-2 my-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="text"
            placeholder='Enter your username...'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            className='bg-gray-800 rounded-md h-10 px-2 my-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="email"
            placeholder='Enter your Email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className='bg-gray-800 rounded-md h-10 px-2 my-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="password"
            placeholder='Enter your Password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className='mx-auto my-2 h-10 w-1/2 font-bold rounded-md bg-blue-500'>
            Sign Up
          </button>
          <div>
            Already have an account? <Link href={"/Auth/login"} className='underline'>Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
