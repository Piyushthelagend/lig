import Login from '@/components/GetStartedForm'
import React from 'react'
import getSession from '../utils/session'

const page = async () => {
  const session = await getSession();
  return <Login session={session}/>
}
 
export default page
