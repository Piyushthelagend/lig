"use client"
import React from 'react'
import SetPasswordForm from '@/app/serverComponents/setPasswordForm'
import Alerts from '@/app/serverComponents/Alerts'
import { useState } from 'react'
const page = () => {
  const [error, setError] = useState("");

  return (
    <div className=' container flex justify-center items-center'>
      <div className='column bg-gray-900 rounded-md w-1/2 p-5 m-5 shadow-emerald-50 shadow-md' >
      {error && (<Alerts>{error}</Alerts>)}
        <SetPasswordForm />
      </div>
    </div>
  )
}

export default page
