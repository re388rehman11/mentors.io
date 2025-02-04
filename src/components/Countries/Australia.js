import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImg from '../assets/Australia image/hero.jpeg';
import p1Image from '../assets/Australia image/p1.jpeg';
import p2Image from '../assets/Australia image/p2.jpeg';
import p3Img from '../assets/Australia image/p3.jpg';

import backgroundImg from '../assets/Australia image/background.webp';
import sydneyLogo from '../assets/Australia image/sydney-logo.jpg';
import melbourneLogo from '../assets/Australia image/melbourne.png';
import uqLogo from '../assets/Australia image/uq.webp';
import monashLogo from '../assets/Australia image/monash.png';
import unswLogo from '../assets/Australia image/unsw.png';
import uwaLogo from '../assets/Australia image/uwa.avif';
import macquarieLogo from '../assets/Australia image/macquarie.png';
import rmitLogo from '../assets/Australia image/rmit.jpeg';
import anuLogo from '../assets/Australia image/anu.webp';  // Adjust the path as necessary







export default function Australia() {
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
          backgroundImage:
`url(${heroImg})`,          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
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
            Study in Australia
          </h1>
          <p
            className="lead fw-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Explore academic excellence, diverse landscapes, and exciting opportunities in Australia.
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
                    )}&text=Study%20in%20Australia!`}
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
                    )}&title=Study%20in%20Australia`}
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

      




      <section className="container my-5">  
  <div className="row align-items-center">  
    {/* Text Section */}  
    <div className="col-md-7">  
      <h2><strong>Why Study in Australia</strong></h2>  
      <p>Australia is home to world-class universities, offering high-quality education in a safe, diverse, and inclusive environment.</p>  
      <p>Australian universities consistently rank among the best globally, known for their research excellence, innovative teaching methods, and strong industry connections.</p>  
      <p>Students can choose from a wide range of programs, from undergraduate to postgraduate degrees, across various fields of study.</p>  
      <p>Australia provides abundant internship and work placement opportunities, ensuring students gain practical experience and enhance their career prospects.</p>  
      <p>With a strong emphasis on employability, Australian universities offer pathways for students to gain real-world experience through part-time work, internships, and volunteering.</p>  
      <p>Most importantly, Australia’s **Post-Study Work Visa** allows international graduates to stay and work in Australia for up to **four years**, depending on their qualifications, opening doors to long-term career opportunities.</p>  
    </div>  

    {/* Image Section */}  
    <div className="col-md-5">  
      <img  
        src={p1Image} 
        alt="Study in Australia"  
        className="img-fluid rounded shadow"  
        style={{ maxHeight: "500px", objectFit: "cover" }}  
      />  
    </div>  
  </div>  
</section>  




<section className="container my-5">  
  <div className="row align-items-center">  
    {/* Text Section */}  
    <div className="col-md-7 order-md-1 order-2">  
      <h2><strong>High Quality of Life</strong></h2>  
      <p>Australia's standard of living is consistently ranked among the highest globally. The country's welcoming and diverse culture, combined with its safe and friendly environment, fosters both personal and academic growth.</p>  
      <p>Australia’s multicultural society provides students with the opportunity to immerse themselves in a rich tapestry of cultures while enjoying a high quality of life.</p>  

      <h2 className="mt-4"><strong>Prime Study Locations</strong></h2>  
      <p>Two of Australia’s most prominent cities, **Sydney** and **Melbourne**, are consistently ranked among the world’s most liveable cities. These vibrant urban centers offer rich cultural experiences, excellent infrastructure, and diverse recreational activities, making student life exciting and fulfilling.</p>  
      <p>Additionally, these cities serve as key hubs for various industries, providing international students with valuable networking and career opportunities to advance their professional aspirations.</p>  
    </div>  

    {/* Image Section */}  
    <div className="col-md-5 order-md-2 order-1">  
      <img  
        src={p2Image} 
        alt="High Quality of Life in Australia"  
        className="img-fluid rounded shadow"  
        style={{ maxHeight: "500px", objectFit: "cover" }}  
      />  
    </div>  
  </div>  
</section>  


{/* Paragraph Section with Image */}
<section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="display-5 fw-bold mb-4">Pathway to Permanent Residency</h2>
        <p>
          For many international students, studying in Australia is seen as a stepping stone towards permanent residency. 
          Graduates who meet the eligibility criteria may be able to apply for permanent residency through various skilled migration programs. 
          The Australian government recognises the contribution of international students to the country's economy and offers pathways 
          that encourage skilled professionals to remain in Australia.
        </p>
        <h2 className="display-5 fw-bold mt-5 mb-4">A Bright Future Awaits</h2>
        <p>
          In conclusion, Australia's attractiveness as a study destination lies in its top-tier universities, affordable education, 
          high quality of life, and extensive career opportunities. The ability to experience a new culture, connect with a global network, 
          and secure post-study work options further enhances the appeal. Choosing to study in Australia not only provides an excellent education 
          but also opens doors to a bright future filled with potential and opportunities.
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
            backgroundImage:
`url(${p3Img})`,            backgroundSize: "cover",
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
    backgroundImage: `url(${backgroundImg})`, // Use imported background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f8f9fa", // Fallback color
  }}
>
  <h2 className="text-center mb-4 text-white">
    Partner Universities and Colleges in Australia
  </h2>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[
        {
          name: "University of Sydney",
          logo: sydneyLogo, // Use imported logo
          ranking: "1",
          students: 60000,
          englishCourses: "Available",
          feeStructure: "$40,000 - $55,000",
        },
        {
          name: "University of Melbourne",
          logo: melbourneLogo, // Use imported logo
          ranking: "2",
          students: 52000,
          englishCourses: "Available",
          feeStructure: "$42,000 - $58,000",
        },
        {
          name: "Australian National University (ANU)",
          logo: anuLogo, // Use imported logo
          ranking: "3",
          students: 25000,
          englishCourses: "Available",
          feeStructure: "$39,000 - $52,000",
        },
        {
          name: "University of Queensland",
          logo: uqLogo, // Use imported logo
          ranking: "4",
          students: 54000,
          englishCourses: "Available",
          feeStructure: "$38,000 - $50,000",
        },
        {
          name: "Monash University",
          logo: monashLogo, // Use imported logo
          ranking: "5",
          students: 85000,
          englishCourses: "Available",
          feeStructure: "$41,000 - $54,000",
        },
        {
          name: "University of New South Wales (UNSW)",
          logo: unswLogo, // Use imported logo
          ranking: "6",
          students: 63000,
          englishCourses: "Available",
          feeStructure: "$43,000 - $57,000",
        },
        {
          name: "University of Western Australia",
          logo: uwaLogo, // Use imported logo
          ranking: "7",
          students: 25000,
          englishCourses: "Available",
          feeStructure: "$37,000 - $49,000",
        },
        {
          name: "Macquarie University",
          logo: macquarieLogo, // Use imported logo
          ranking: "8",
          students: 44000,
          englishCourses: "Available",
          feeStructure: "$35,000 - $48,000",
        },
        {
          name: "RMIT University",
          logo: rmitLogo, // Use imported logo
          ranking: "9",
          students: 86000,
          englishCourses: "Available",
          feeStructure: "$36,000 - $51,000",
        },
      ].map((university, index) => (
        <div className="col" key={index}>
          <div
            className="card h-100 shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              backdropFilter: "blur(10px)", // Modern blur effect
              border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle styling border
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
                <strong>THE World Ranking:</strong> {university.ranking}
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



