import React from 'react'

const Propertise = () => {
    return (
        <div className="container">  
        
    
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up" className="aos-init aos-animate">Levizr<br/> the hub of tech.</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">Discover the Power of Tech with the Levizr's Impact
                            </h2>
                            <div data-aos="fade-up" data-aos-delay="600" className="aos-init aos-animate">
                                <div className="text-center text-lg-start">
                                    <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Get Started</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                            <img src="http://localhost:8080/main/img/hero-img.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
            
            <main id="main">
 
                <section id="about" className="about">

                    <div className="container aos-init aos-animate" data-aos="fade-up">
                        <div className="row gx-0">

                            <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="content">
                                    <h3>Who We Are</h3>
                                    <h2>We are the team of experts.</h2>
                                    <p>
                                        Embark on a transformative journey with <strong>Levizr</strong>, where innovation meets passion. We are a dynamic team of tech enthusiasts dedicated to crafting digital experiences that leave a lasting impact. From web development to cutting-edge solutions, we thrive on pushing boundaries and delivering excellence every step of the way.
                                    </p>
                                    <div className="text-center text-lg-start">
                                        <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                            <span>Read More</span>
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                                <img src="/img/about.jpg" className="img-fluid" alt=""/>
                            </div>

                        </div>
                    </div>

                </section>
                <section id="values" className="values">

                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Our Values</h2>
                            <p>Our Core Principles</p>
                        </header>

                        <div className="row">

                            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="box">
                                    <img src="/img/values-1.png" className="img-fluid" alt=""/>
                                        <h3>Collaboration</h3>
                                        <p>Collaboration is at the heart of our success. We believe in the power of teamwork and cooperation to achieve common goals and drive collective growth. By fostering an inclusive and supportive environment, we leverage diverse perspectives and talents to tackle challenges, celebrate achievements, and create lasting impact.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <div className="box">
                                    <img src="/img/values-2.png" className="img-fluid" alt=""/>
                                        <h3>Creativity</h3>
                                        <p>Creativity fuels our innovative spirit, driving us to think outside the box and explore new horizons. We embrace curiosity and imagination to solve complex problems and deliver cutting-edge solutions. Our commitment to creativity inspires us to continuously innovate and surpass expectations in everything we do.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                                <div className="box">
                                    <img src="/img/values-3.png" className="img-fluid" alt=""/>
                                        <h3>Integrity</h3>
                                        <p>Integrity is the cornerstone of our ethos. We uphold the highest ethical standards, ensuring honesty, transparency, and accountability in all our interactions. It guides our decisions, actions, and relationships, fostering trust and credibility with our clients, partners, and stakeholders.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <section id="counts" className="counts">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" className="purecounter">232</span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-journal-richtext" style={{color: "#ee6c20"}}></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" className="purecounter">521</span>
                                        <p>Projects</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-headset" style={{color: "#15be56"}}></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" className="purecounter">1463</span>
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-people" style={{color: "#bb0852"}}></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" className="purecounter">15</span>
                                        <p>Hard Workers</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                
   
                <section id="features" className="features">

                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Features</h2>
                            <p>Discover Our Key Features</p>
                        </header>

                        <div className="row">

                            <div className="col-lg-6">
                                <img src="http://localhost/Levizr//img/features.png" className="img-fluid" alt=""/>
                            </div>

                            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                                <div className="row align-self-center gy-4">

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Service Variety</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init aos-animate" data-aos="zoom-out" data-aos-delay="300">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Custom Project Requests</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init" data-aos="zoom-out" data-aos-delay="400">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Transparent Pricing</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init" data-aos="zoom-out" data-aos-delay="500">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Secure Payment Processing</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init" data-aos="zoom-out" data-aos-delay="600">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Project Management Tools</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-6 aos-init" data-aos="zoom-out" data-aos-delay="700">
                                        <div className="feature-box d-flex align-items-center">
                                            <i className="bi bi-check"></i>
                                            <h3>Quality Assurance</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>         <div className="row feature-icons aos-init" data-aos="fade-up">
                            <h3>Trake your project on your phone</h3>

                            <div className="row">

                                <div className="col-xl-4 text-center aos-init" data-aos="fade-right" data-aos-delay="100">
                                    <img src="/img/features-3.png" className="img-fluid p-4" alt=""/>
                                </div>


                            </div>

                        </div>

                    </div>

                </section>

                <section id="faq" className="faq">

                    <div className="container aos-init" data-aos="fade-up">

                        <header className="section-header">
                            <h2>F.A.Q</h2>
                            <p>Frequently Asked Questions</p>
                        </header>

                        <div className="row">
                            <div className="col-lg-6">
                                
                                
                                                      <div className="accordion accordion-flush" id="faqlist1">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
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

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                                                How can I get started with Levizr?
                                            </button>
                                        </h2>
                                        <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                                            <div className="accordion-body">
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
                


                

                <section id="testimonials" className="testimonials">

                    <div className="container aos-init" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Testimonials</h2>
                            <p>What they are saying about us</p>
                        </header>

                        <div className="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events aos-init" data-aos="fade-up" data-aos-delay="200">
                            <div className="swiper-wrapper" id="swiper-wrapper-4fbd9739ebe8395b" aria-live="off" style={{transitionDuration: "600ms", transform: "translate3d(-2544px, 0px, 0px)"}}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 5" style={{width: "424px"}}>
                                <div className="testimonial-item">
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        I couldn't be happier with the service provided by Levizr. From start to finish, they were responsive, creative, and dedicated to delivering a top-notch product."
                                    </p>
                                    <div className="profile mt-auto">
                                        <img src="/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                    </div>
                                </div>
                            </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" role="group" aria-label="4 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Levizr helped bring our vision to life with their exceptional design skills and technical expertise. Their collaborative approach and timely communication made the entire process stress-free.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                                                <h3>Matt Brandon</h3>
                                                <h4>Freelancer</h4>
                                        </div>
                                    </div>
                                </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-Levizr" data-swiper-slide-index="4" role="group" aria-label="5 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Choosing Levizr was the best decision we made for our online presence. Their team went above and beyond to ensure our website not only looked fantastic but also functioned flawlessly. Thank you, Levizr!
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="1 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Levizr transformed my business with their innovative web design. Their attention to detail and commitment to excellence exceeded my expectations. Highly recommend!
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="http://localhost/Levizr//img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                                <h3>Saul Goodman</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                                                <div className="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Working with Levizr was a game-changer for us. Their team's expertise and professionalism ensured a seamless development process. We're thrilled with the results!
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                                                <h3>Sara Wilsson</h3>
                                                <h4>Designer</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                                                <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            I couldn't be happier with the service provided by Levizr. From start to finish, they were responsive, creative, and dedicated to delivering a top-notch product."
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                                <h3>Jena Karlis</h3>
                                                <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                                                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="3" role="group" aria-label="4 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Levizr helped bring our vision to life with their exceptional design skills and technical expertise. Their collaborative approach and timely communication made the entire process stress-free.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                                                <h3>Matt Brandon</h3>
                                                <h4>Freelancer</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                                                <div className="swiper-slide swiper-slide-Levizr" data-swiper-slide-index="4" role="group" aria-label="5 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Choosing Levizr was the best decision we made for our online presence. Their team went above and beyond to ensure our website not only looked fantastic but also functioned flawlessly. Thank you, Levizr!
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Levizr transformed my business with their innovative web design. Their attention to detail and commitment to excellence exceeded my expectations. Highly recommend!
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="http://localhost/Levizr//img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                                <h3>Saul Goodman</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" role="group" aria-label="2 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Working with Levizr was a game-changer for us. Their team's expertise and professionalism ensured a seamless development process. We're thrilled with the results!
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                                                <h3>Sara Wilsson</h3>
                                                <h4>Designer</h4>
                                        </div>
                                    </div>
                                </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 5" style={{width: "424px"}}>
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            I couldn't be happier with the service provided by Levizr. From start to finish, they were responsive, creative, and dedicated to delivering a top-notch product."
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                                <h3>Jena Karlis</h3>
                                                <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                </div></div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 5"></span></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

                    </div>

                </section>
                
           
                <section id="clients" className="clients">

                    <div className="container aos-init" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Our Clients</h2>
                            <p>See the impact of Levizr</p>
                        </header>
                        <div className="clients-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                        <div className="swiper-wrapper align-items-center" id="swiper-wrapper-54ed591065989e1f8" aria-live="off" style={{transitionDuration: "0ms" ,mtransform: "translate3d(-2552px, 0px, 0px)"}}><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-3.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-4.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-5.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-6.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-Levizr" data-swiper-slide-index="6" role="group" aria-label="7 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-7.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" role="group" aria-label="8 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-8.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="1 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-1.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-3.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-4.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-2.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-5.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-6.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide swiper-slide-Levizr" data-swiper-slide-index="6" role="group" aria-label="7 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-7.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide" data-swiper-slide-index="7" role="group" aria-label="8 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-8.png" className="img-fluid" alt=""/></div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-1.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" role="group" aria-label="2 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-2.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="3 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-3.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" role="group" aria-label="4 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-4.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="4" role="group" aria-label="5 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-5.png" className="img-fluid" alt=""/></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style={{width: "112px", marginRight: "120px"}}><img src="/img/clients/client-6.png" className="img-fluid" alt=""/></div></div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 5"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 6" aria-current="true"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 7"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 8"></span></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>

                </section>



                <section id="recent-blog-posts" className="recent-blog-posts">

                    <div className="container aos-init" data-aos="fade-up">

                        <header className="section-header">
                            <h2>Blog</h2>
                            <p>Recent posts form our Blog</p>
                        </header>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="post-box">
                                    <div className="post-img"><img src="http://localhost/Levizr//main/img/blog/blog-1.jpg" className="img-fluid" alt=""/></div>
                                    <span className="post-date">Tue, September 15</span>
                                    <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
                                    <a href="blog-single.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="post-box">
                                    <div className="post-img"><img src="http://localhost/Levizr//main/img/blog/blog-2.jpg" className="img-fluid" alt=""/></div>
                                    <span className="post-date">Fri, August 28</span>
                                    <h3 className="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
                                    <a href="blog-single.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="post-box">
                                    <div className="post-img"><img src="http://localhost/Levizr//main/img/blog/blog-3.jpg" className="img-fluid" alt=""/></div>
                                    <span className="post-date">Mon, July 11</span>
                                    <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                                    <a href="blog-single.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>



            </main></div>
    )
}

export default Propertise
