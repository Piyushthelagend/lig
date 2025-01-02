"use client"
import React from 'react'
import { useEffect } from 'react'
import AOS from "aos";
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="values" className="values">

      <div className="container aos-init aos-animate" data-aos="fade-up">

        <header className="section-header">
          <h2>Our Values</h2>
          <p>Our Core Principles</p>
        </header>

        <div className="row">

          <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src="http://localhost/levizr/main/assets/img/values-1.png" className="img-fluid" alt=""/>
              <h3>Collaboration</h3>
              <p>Collaboration is at the heart of our success. We believe in the power of teamwork and cooperation to achieve common goals and drive collective growth. By fostering an inclusive and supportive environment, we leverage diverse perspectives and talents to tackle challenges, celebrate achievements, and create lasting impact.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <img src="http://localhost/levizr/main/assets/img/values-2.png" className="img-fluid" alt=""/>
              <h3>Creativity</h3>
              <p>Creativity fuels our innovative spirit, driving us to think outside the box and explore new horizons. We embrace curiosity and imagination to solve complex problems and deliver cutting-edge solutions. Our commitment to creativity inspires us to continuously innovate and surpass expectations in everything we do.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <img src="http://localhost/levizr/main/assets/img/values-3.png" className="img-fluid" alt=""/>
              <h3>Integrity</h3>
              <p>Integrity is the cornerstone of our ethos. We uphold the highest ethical standards, ensuring honesty, transparency, and accountability in all our interactions. It guides our decisions, actions, and relationships, fostering trust and credibility with our clients, partners, and stakeholders.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Services
