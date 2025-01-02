import React from 'react'
const Hero = () => {
  return (
 <section className="hero flex my-5">
      <div className="hero-content z-10">
      <h1 data-aos="fade-down" data-aos-duration="600">Welcome to <span className='.bold' style={{fontFamily: 'Acquire Bold'}}>LEVIZR_HOSTING</span></h1>
      <h2 data-aos="fade-right" data-aos-duration="300">Build Smarter, Host Better.</h2>
      <p data-aos="fade-left" data-aos-duration="200">Levizr Hosting provides free <span className='bold'>subdomains</span>, <span className='bold'>AI chatbot API integration</span> and <span className='bold'>Levizr Ai web builder</span> designed for everyone. Whether you’re starting small or thinking big, we’ve got you covered.</p>
      <button data-aos="fade-up" data-aos-duration="500">Learn More</button>
  </div>
      <img className='mx-6' src={"/img/web-hosting-Hero.gif"} width={720} height={100} data-aos="fade-left" data-aos-duration="800" alt='web-hosting-Hero-image'/>
</section>
  )
}

export default Hero
