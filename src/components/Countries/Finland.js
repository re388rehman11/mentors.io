import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import helsinkiLogo from '../assets/FinlandImage/Helsinki.jpg'; 
import aaltoLogo from '../assets/FinlandImage/Aalto.png';
import ouluLogo from '../assets/FinlandImage/Oulu.png';
import turkuLogo from '../assets/FinlandImage/Turku.png';
import tampereLogo from '../assets/FinlandImage/Tampere.jpg';
import lutLogo from '../assets/FinlandImage/LUT.webp';
import backgroundImage from '../assets/FinlandImage/background.jpg';
import heroImage from '../assets/FinlandImage/Hero.jpg';
import paraImage from '../assets/FinlandImage/paragraph.jpg';



export default function Finland() {
  const [showShareOptions, setShowShareOptions] = useState(false); // State for toggling share options
  const shareUrl = window.location.href; // Current page URL

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="country-page">
      {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(51, 48, 48, 0.5)",
          }}
        ></div>
        <div
          className="content ms-5"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "left",
          }}
        >
          <h1
            className="display-4 fw-bold"
            style={{
              textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
            }}
          >
            Study in Finland
          </h1>
          <p
            className="lead fw-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Explore Finland's innovative education system, breathtaking landscapes, and rich cultural heritage.
          </p>
          <div className="d-flex align-items-center mt-3">
            <Link to="/contact">
              <button
                className="btn btn-primary me-3 px-4 py-2"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Start Application
              </button>
            </Link>

            {/* Share Button */}
            <div className="position-relative">
              <button
                className="btn btn-outline-light"
                onClick={() => setShowShareOptions(!showShareOptions)}
              >
                <i className="fas fa-share-alt"></i> Share
              </button>
              {showShareOptions && (
                <div
                  className="dropdown-menu show p-3"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    zIndex: 10,
                  }}
                >
                  {/* Twitter */}
                  <a
                    href={`https://twitter.com/share?url=${encodeURIComponent(
                      shareUrl
                    )}&text=Study%20in%20Finland!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    <i className="fab fa-twitter text-primary"></i> Twitter
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      shareUrl
                    )}&title=Study%20in%20Finland`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    <i className="fab fa-linkedin text-primary"></i> LinkedIn
                  </a>

                  {/* Copy Link */}
                  <button
                    className="dropdown-item"
                    onClick={handleCopyLink}
                  >
                    <i className="fas fa-link"></i> Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Paragraph Section with Image */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-5 fw-bold mb-4">
                Exceptional Educational Landscape
              </h2>
              <p>
                Finland is globally recognized for its exceptional education
                system, consistently ranking among the best in the world. The
                Finnish approach emphasizes student-centered learning,
                innovation, and equal access to education. With world-class
                universities offering cutting-edge research opportunities and
                diverse academic programs, Finland equips students with the
                knowledge and skills they need to excel in their careers.
              </p>
              <h2 className="display-5 fw-bold mt-5 mb-4">Affordable Living Costs</h2>
              <p>
                Despite its high standards of living, Finland offers affordable
                living costs for international students. Compared to other
                European countries, the cost of living is reasonable, making it
                accessible for students from diverse backgrounds. Affordable
                housing, free or low-cost healthcare, and student discounts on
                public transport contribute to an economically viable study
                experience.
              </p>
              <Link to="/contact" className="btn btn-primary mt-4">
                Enquire Now
              </Link>
            </div>
            <div className="col-md-6">
              {/* Right Side Image */}
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${paraImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  borderRadius: "8px",
                  minHeight: "600px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>





      {/* Universities Section */}
<section
  className="universities-section container-fluid py-5"
  style={{
    backgroundImage: `url(${backgroundImage})`, // Use imported background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f8f9fa", // Fallback color
  }}
>
  <h2 className="text-center mb-4 text-white">Top Universities in Finland</h2>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[
        {
          name: "University of Helsinki",
          logo: helsinkiLogo, // Use imported logo
          ranking: "Top 100",
          students: 31000,
          englishCourses: "Available",
          feeStructure: "€13,000 - €18,000",
        },
        {
          name: "Aalto University",
          logo: aaltoLogo, // Use imported logo
          ranking: "Top 150",
          students: 17000,
          englishCourses: "Available",
          feeStructure: "€12,000 - €15,000",
        },
        {
          name: "University of Oulu",
          logo: ouluLogo, // Use imported logo
          ranking: "Top 300",
          students: 13000,
          englishCourses: "Available",
          feeStructure: "€10,000 - €13,000",
        },
        {
          name: "University of Turku",
          logo: turkuLogo, // Use imported logo
          ranking: "Top 300",
          students: 20000,
          englishCourses: "Available",
          feeStructure: "€10,000 - €12,000",
        },
        {
          name: "Tampere University",
          logo: tampereLogo, // Use imported logo
          ranking: "Top 400",
          students: 21000,
          englishCourses: "Available",
          feeStructure: "€10,000 - €13,000",
        },
        {
          name: "LUT University",
          logo: lutLogo, // Use imported logo
          ranking: "Top 500",
          students: 6500,
          englishCourses: "Available",
          feeStructure: "€10,000 - €12,000",
        },
      ].map((university, index) => (
        <div className="col" key={index}>
          <div
            className="card h-100 shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              backdropFilter: "blur(10px)", // Add a slight blur effect for modern design
              border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for styling
            }}
          >
            <img
              src={university.logo}
              alt={`${university.name} Logo`}
              className="card-img-top p-3"
              style={{ height: "120px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{university.name}</h5>
              <p className="card-text text-center">
                <strong>World Ranking:</strong> {university.ranking}
                <br />
                <strong>International Students:</strong> {university.students}
                <br />
                <strong>English Courses:</strong> {university.englishCourses}
                <br />
                <strong>Fee Structure:</strong> {university.feeStructure}
              </p>
            </div>
            <div className="card-footer text-center">
              <Link to="/contact">
                <button className="btn btn-dark">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





    </div>
  );
}
