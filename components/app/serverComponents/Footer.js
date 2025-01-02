import React from 'react'
import FooterNewsLater from './FooterNewsLatter'
const Footer = () => {
  return (
    <footer  id="footer" className="footer">
    <FooterNewsLater/>
    <div className="footer-top">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                    <p>Levizr brings your digital dreams to life with cutting-edge solutions tailored to your needs.
                        From stunning website designs to immersive game development and captivating graphics, we empower
                        you to stand out in the digital landscape. Experience innovation, creativity, and reliability
                        with Levizr – your trusted partner in the digital realm.</p>
                    <div className="social-links mt-3">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div className="col-lg-2 col-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                    <h4>Contact Us</h4>
                    <p>
                        Jawan, Aligarh, Uttar Pradesh, 202126, INDIA<br/><br/>
                        <strong>Phone:</strong> +91 6398 0455 13<br/>
                        <strong>Email:</strong> info@Levizr.com<br/>
                    </p>

                </div>

            </div>
        </div>
    </div>

    <div className="container">
        <div className="copyright">
            &copy; Copyright <strong><span style={{fontFamily: "'Acquire Bold', sans-serif"}}
>Levizr</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- Licensing information: https://Levizr.com/license/ --> */}
            Designed by <a href="https://Levizr.com/">Levizr</a>
        </div>
    </div>
</footer>
            )
}

            export default Footer
