import React from 'react'
import Link from 'next/link'
import getSession from '../utils/session'
import { signOut } from '../utils/auth'

const Navbar = async () => {
  let user = "Get Started"
  const session = await getSession();
  if (session){
      user = session.user.username

      console.log(session);
      
  }
  return (
    <nav className=' transition-all'>
        <div className="navBody">
  <div>
    <h1 className='logo'><Link href="/" style={{fontFamily: 'Acquire Bold'}}>LEVIZR_HOSTING</Link></h1>
  </div>
  <ul>
    <li><Link href="/"><i className='bx bx-home'></i> Home</Link></li>
    <li><Link href="about"><i className='ri-team-fill'></i> About</Link></li>
    <li><Link href="services"><i className='bx bx-collection'></i> Services</Link></li>
    <li><Link href="contect"><i className='bi bi-envelope'></i> Contact</Link></li>
  </ul>
   
  <Link href={"/Auth/login"}><button style={{fontFamily: 'Acquire Bold'}}>{user}</button></Link>
  <form action={async () => {
    "use server"
    await signOut()
  }} className='cursor-pointer'><button type="submit">SignOut</button></form>
    </div>
  <hr />
</nav>
  )
}

export default Navbar
