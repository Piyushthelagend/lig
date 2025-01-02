"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SetPasswordForm = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/setPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, cpassword }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/");
      } else {
        setError(data.message || "Failed to set the password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to set the password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='column'>
      <h3 className='mb-4'>Set Password</h3>
      <label htmlFor="password">Password</label>
      <input
        className='bg-gray-800 rounded-md h-10 px-2 my-1'
        type="password"
        placeholder='Enter your Password..'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="cpassword">Confirm Password</label>
      <input
        className='bg-gray-800 rounded-md h-10 px-2 my-1'
        type="password"
        placeholder='Confirm your Password..'
        name='cpassword'
        value={cpassword}
        onChange={(e) => setCPassword(e.target.value)}
      />
      <button
        type="submit"
        className='mx-auto my-2 h-10 w-1/2 font-bold rounded-md bg-blue-500'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Setting...' : 'Set Password'}
      </button>
      {error && <div className="text-red-500">{error}</div>}
      <div className=''>Have an Account? <span><Link href={"/Auth/login"} className='underline'> Sign In Here</Link></span></div>
    </form>
  );
};

export default SetPasswordForm;
