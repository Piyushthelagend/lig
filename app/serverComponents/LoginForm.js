"use client"; // Client component

import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
  const handleLogin = async (formdata) => {
    const username = formdata.get("username");
    const password = formdata.get("password");

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.message);
        // Redirecting on client side
        window.location.href = '/';
      } else {
        console.error(data.error);
        alert(data.error);
      }
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <>
      {/* GitHub Sign-In Form */}
      <form action={async () => { "use server"; await signIn("github"); }} className="auth-provider flex justify-center items-center">
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
      <form className='column' onSubmit={(e) => {
        e.preventDefault();
        handleLogin(new FormData(e.currentTarget));
      }}>
        <h2 className='mx-auto my-2'>---OR---</h2>
        <h3 className='mb-4'>Login With</h3>
        <label htmlFor="username">Username</label>
        <input className='bg-gray-800 rounded-md h-10 px-2 my-1' type="text" placeholder='Enter your username...' name='username' />
        <label htmlFor="password">Password</label>
        <input className='bg-gray-800 rounded-md h-10 px-2 my-1' type="password" placeholder='Enter your password..' name='password' />
        <button type="submit" className='mx-auto my-2 h-10 w-1/2 font-bold rounded-md bg-blue-500'>Login</button>
        <div>Don't have an account?<span><Link href={"/Auth/signup"} className='underline'> Sign Up Here</Link></span></div>
      </form>
    </>
  );
};

export default LoginForm;
