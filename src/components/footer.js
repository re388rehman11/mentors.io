import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Abroad Mentors</h5>
            <p>
               Mentors is your trusted partner for visa consultancy, helping
              students achieve their dreams of studying abroad. Follow us on
              social media to stay updated on the latest opportunities and
              updates.
            </p>
          </div>

          {/* Office Details */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Office Details</h5>
            <p>
              <strong>Address:</strong> D-ground, Faisalabad, Pakistan
            </p>
            <p>
              <strong>Phone:</strong> +923433350139
            </p>
            <p>
              <strong>Email:</strong> abroadmentors.pk@gmail.com
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Connect With Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.facebook.com/abroadmentorspk"
                className="btn btn-outline-light btn-floating m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                className="btn btn-outline-light btn-floating m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@abroadmentors"
                className="btn btn-outline-light btn-floating m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="btn btn-outline-light btn-floating m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@AbroadMentors"
                className="btn btn-outline-light btn-floating m-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark">
        © {new Date().getFullYear()} Abroad Mentors. All Rights Reserved.
      </div>
    </footer>
  );
}
