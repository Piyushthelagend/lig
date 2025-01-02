import React from 'react'

const Features = () => {
  return (
  
    <section id="features" className="features">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Features</h2>
          <p>Discover Our Key Features</p>
        </header>

        <div className="row">

          <div className="col-lg-6">
            <img src="/img/features.png" className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Service Variety</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Custom Project Requests</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Transparent Pricing</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Secure Payment Processing</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Project Management Tools</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Quality Assurance</h3>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Features
