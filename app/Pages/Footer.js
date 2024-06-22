import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="container-full bg-primary text-light footer wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <p className="section-title text-white h5 mb-4">Address</p>
              <p><i className="fa fa-map-marker-alt me-3"></i>Sheridan, Wyoming, USA</p>
              <p><i className="fa fa-map-marker-alt me-3"></i>Greater Noida, Uttar Pradesh, India</p>
              <p><i className="fa fa-phone-alt me-3"></i>+12672183807</p>
              <p><i className="fa fa-envelope me-3"></i>info@shivsys.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/shivsys/"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/shivsysincorporation"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="section-title text-white h5 mb-4">Quick Link</p>
              <a className="btn btn-link" href="about.html">About Us</a>
              <a className="btn btn-link" href="contact.html">Contact Us</a>
              <a className="btn btn-link" href="about.html">Privacy Policy</a>
              <a className="btn btn-link" href="careerpage.html">Career</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="shivsys.com">ShivSys</a>, All Right Reserved.
              Designed By <a className="border-bottom" href="https://www.shivsys.com">shivsys.com</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* Optional additional content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

