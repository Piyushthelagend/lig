import React from 'react'

const FandQ = () => {
  return (
    // <!-- ======= F.A.Q Section ======= -->
    <section id="faq" className="faq bg-gray-900">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            {/* <!-- F.A.Q List 1--> */}
            <div className="accordion accordion-flush bg-gray-800" id="faqlist1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    What is Levizr?
                  </button>
                </h2>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Levizr is a dynamic tech platform offering a wide range of digital solutions, including web development, graphic design, app development, and more.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    How can Levizr help me?
                  </button>
                </h2>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Levizr provides tailored services to meet your digital needs, whether you're an individual, business, or organization seeking to enhance your online presence or develop custom software solutions.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    What makes Levizr unique?
                  </button>
                </h2>
                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                  <div className="accordion-body">
                    Levizr stands out for its commitment to innovation, creativity, and client satisfaction. Our team of skilled professionals delivers high-quality results with a personalized approach, ensuring that your vision becomes a reality. </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-6">

            {/* <!-- F.A.Q List 2--> */}
            <div className="accordion accordion-flush" id="faqlist2">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                    What services does Levizr offer?
                  </button>
                </h2>
                <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                    Levizr offers a comprehensive suite of services, including website design and development, e-commerce solutions, branding and logo design, mobile app development, digital marketing, and more.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-gray-800">
                <h2 className="accordion-header bg-gray-800">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                    How can I get started with Levizr?
                  </button>
                </h2>
                <div id="faq2-content-2" className="accordion-collapse collapse bg-gray-800 text-white"  data-bs-parent="#faqlist2">
                  <div className="accordion-body bg-gray-800">
                    Getting started with Levizr is easy! Simply reach out to our team through our website or contact us via email or phone to discuss your project requirements. We'll work closely with you to create a customized plan that aligns with your goals and budget.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                    Does Levizr provide ongoing support?
                  </button>
                </h2>
                <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                  <div className="accordion-body">
                    Yes, Levizr is committed to providing ongoing support to our clients even after the project is complete. We offer maintenance services, updates, and technical assistance to ensure that your digital assets continue to perform optimally over time.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
    // <!-- End F.A.Q Section -->
    
  )
}

export default FandQ
