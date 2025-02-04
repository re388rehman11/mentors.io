import React, { useState } from "react";
import heroImage from "../assets/HeroImage.jpg";
import usaImage from "../assets/USAImage.jpg";
import usaLand from "../assets/usaland.jpg"; // Adjust the path as needed
import mitLogo from '../assets/usa image/MIT_logo.png';
import stanfordLogo from '../assets/usa image/stanford-logo.png';
import harvardLogo from '../assets/usa image/harvard-logo.png';
import caltechLogo from '../assets/usa image/caltech-logo.jpg';
import chicagoLogo from '../assets/usa image/cropped-logo.webp';
import yaleLogo from '../assets/usa image/yale-logo.jpeg';
import backgroundImage from '../assets/usa image/background.jpeg';

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function USA() {
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
        backgroundImage: `url(${heroImage})`, // Use imported image
        backgroundSize: "cover",
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
            Study in the USA
          </h1>
          <p
            className="lead fw-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Discover world-class education and vibrant opportunities in the USA.
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
                    )}&text=Study%20in%20the%20USA!`}
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
                    )}&title=Study%20in%20the%20USA`}
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

      



     
      <section
      className="introduction-section d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-lg-6">
            <h1 className="display-6 fw-bold mb-3">The Land of Opportunity</h1>
            <p className="lead">
              The United States stands as a global magnet for international students seeking a world-class education and a truly diverse cultural experience. With its renowned universities, iconic cities, and extensive opportunities, studying in the USA offers an unparalleled journey of academic and personal growth.
            </p>
            <p>
              The USA boasts the largest number of international students globally, attracting learners from various corners of the world. This popularity is rooted in the country's exceptional educational institutions, cutting-edge research facilities, and the dynamic environment that fosters innovation and creativity.
            </p>
            <h2 className="fw-bold mt-4">Educational Excellence</h2>
            <p>
              The US higher education system is known for its rigorous academic standards and innovative teaching methods. Whether pursuing undergraduate, graduate, or doctoral programs, students benefit from a broad spectrum of disciplines, allowing them to explore their interests while gaining valuable skills.
            </p>
            <h2 className="fw-bold mt-4">Diverse Campuses and Vibrant Cities</h2>
            <p>
              From the charming neighborhoods of New Orleans, known as the Big Easy, to the bustling energy of the Big Apple, New York City, the USA is a patchwork of cultures and landscapes. Universities are often nestled in these urban hubs, offering not just quality education but also the chance to experience diverse cultures, cuisines, and lifestyles.
            </p>
            <h2 className="fw-bold mt-4">Cultural Immersion and Community</h2>
            <p>
              Studying in the USA provides students with more than just academics; it's a journey into a multicultural mosaic. Sharing classrooms and experiences with peers from all corners of the globe fosters cross-cultural understanding, tolerance, and the development of a global network.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <div
              style={{
                height: "100%",
                backgroundImage: `url(${usaImage})`, // Use imported image
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                minHeight: "800px",
              }}
              className="shadow"
            ></div>
          </div>
        </div>
      </div>
    </section>



    <section
      className="opportunity-section d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">Cutting-edge Research and Innovation</h1>
            <p className="lead">
              American universities are at the forefront of groundbreaking research and technological advancements. Students have the opportunity to collaborate with leading experts in their fields, engage in pioneering research projects, and contribute to solutions that shape the world.
            </p>
            <h2 className="fw-bold mt-4">Career Opportunities</h2>
            <p>
              The USA offers a multitude of opportunities for personal and professional growth. Its open job market allows international students to gain practical experience during and after their studies. Optional Practical Training (OPT) and Curricular Practical Training (CPT) programs enable students to work in their field of study, gaining invaluable practical skills and building connections that may lead to future employment.
            </p>
            <h2 className="fw-bold mt-4">Support Systems</h2>
            <p>
              American universities provide comprehensive support services to international students, ensuring a smooth transition into campus life. From orientation programs and academic advising to career counseling and cultural events, these resources contribute to a fulfilling and well-rounded student experience.
            </p>
            <h2 className="fw-bold mt-4">Pathway to Success</h2>
            <p>
              Studying in the USA is not just about acquiring knowledge; it's about personal transformation. Students cultivate critical thinking, problem-solving, and communication skills, setting a strong foundation for lifelong learning and career advancement. The diverse environment encourages adaptability, resilience, and an open mindset – qualities highly valued in today's globalized world.
            </p>
            <h2 className="fw-bold mt-4">Embrace the Opportunity</h2>
            <p>
              Studying in the USA is more than an academic pursuit; it's an opportunity to explore, grow, and make lifelong memories. Whether you're drawn by the allure of iconic cities, cutting-edge research, or a multicultural community, the USA has much to offer. So, if you're looking for an education that transcends borders and empowers you for the future, the land of opportunity beckons – your journey awaits.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg mt-3">
              Register Now
            </a>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <div
              style={{
                height: "100%",
                backgroundImage: `url(${usaLand})`, // Use the imported image
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                minHeight: "500px",
              }}
              className="shadow"
            ></div>
          </div>
        </div>
      </div>
    </section>


    <section className="video-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container text-center">
    <h1 className="display-4 fw-bold mb-4">Explore More About Studying in the USA</h1>
    <p className="lead mb-5">
      Watch this video to gain insights into the unparalleled opportunities, culture, and experiences that studying in the USA offers.
    </p>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        {/* Responsive YouTube Embed */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/4Ot0T4iCXfM"  // Use embed URL format
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          ></iframe>
        </div>
      </div>
    </div>
    <a
      href="https://www.youtube.com/watch?v=4Ot0T4iCXfM"  // YouTube link format
      className="btn btn-primary btn-lg mt-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      Watch on YouTube
    </a>
  </div>
</section>




{/* Partner Universities Section */}
<section
  className="partner-universities-section container-fluid py-5"
  style={{ backgroundColor: "#f8f9fa" }}
>
  <h2 className="text-center mb-4">Partner Universities</h2>
  <div className="container">
    <div className="row g-4">
      {/* Texas Universities */}
      <div className="col-12">
        <h3 className="mb-3">Texas</h3>
        <ul className="list-group">
          {[
            "Texas State University",
            "University of North Texas",
            "Southern Methodist University",
            "University of Texas - Arlington",
            "Texas A and M University - Kingsville",
            "Northwest Vista College (Alamo Colleges)",
            "St. Phillip's College (Alamo Colleges)",
            "San Antonio College (Alamo Colleges)",
            "Northeast Lakeview College (Alamo Colleges)",
            "Palo Alto College (Alamo Colleges)",
            "Baylor University",
            "Texas A&M University - Corpus Christi International Study Center (Study Group)",
            "Baylor University - International Study Center (Study Group)",
          ].map((university, index) => (
            <li className="list-group-item" key={index}>
              {university}
            </li>
          ))}
        </ul>
      </div>
      {/* Florida Universities */}
      <div className="col-12">
        <h3 className="mb-3">Florida</h3>
        <ul className="list-group">
          {[
            "Hillsborough Community College",
            "Florida Institute of Technology",
            "University of Tampa",
            "Embry-Riddle Aeronautical University",
            "Florida International University – Shorelight",
            "Nova Southeastern University",
            "University of South Florida - INTO USA",
            "Full Sail University",
            "Nova Southeastern University - Enrollment Advisory Group",
            "Keiser University",
            "Florida Atlantic University - Study Group USA",
            "University of North Florida",
            "Florida Agricultural and Mechanical University",
          ].map((university, index) => (
            <li className="list-group-item" key={index}>
              {university}
            </li>
          ))}
        </ul>
      </div>
    </div>


    {/* California Universities */}
    <div className="col-12">
        <h3 className="mb-3">California</h3>
        <ul className="list-group">
          {[
            "California State University, Fresno",
            "Foothill College",
            "Glendale Community College - California",
            "Humboldt State University (California State University, CSU)",
            "Santa Barbara City College",
            "University of La Verne",
            "National University",
            "Middlebury Institute of International Studies at Monterey",
            "University of California, Riverside",
            "De Anza College",
            "California State University - San Marcos",
            "California State University - Long Beach",
            "California State University - Northridge",
            "San Francisco State University",
            "Peralta Community College District",
            "University of the Pacific – Shorelight",
            "California State University - San Bernardino",
            "California State University, Sacramento",
            "University of California Riverside (UCR) Extension",
            "Claremont Graduate University (CGU)",
            "Golden West College",
            "California State University Bakersfield",
            "Pepperdine Graziadio Business School",
            "Colleges of Contra Costa",
            "San Mateo Colleges of Silicon Valley",
            "University of California, Los Angeles (UCLA Extension)",
            "University of California, Irvine (UCI) Division of Continuing Education",
            "California State University, Chico",
          ].map((university, index) => (
            <li className="list-group-item" key={index}>
              {university}
            </li>
          ))}
        </ul>
      </div>

      {/* Michigan Universities */}
      <div className="col-12">
        <h3 className="mb-3">Michigan</h3>
        <ul className="list-group">
          {[
            "Saginaw Valley State University",
            "Lawrence Technological University",
            "Central Michigan University",
            "Western Michigan University",
            "Eastern Michigan University",
          ].map((university, index) => (
            <li className="list-group-item" key={index}>
              {university}
            </li>
          ))}
        </ul>
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
  <h2 className="text-center mb-4 text-white">Top Universities in the USA</h2>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[
        {
          name: "Massachusetts Institute of Technology (MIT)",
          logo: mitLogo, // Use imported logo
          ranking: "1",
          students: 11454,
          englishCourses: "Available",
          feeStructure: "$53,450 - $60,000",
        },
        {
          name: "Stanford University",
          logo: stanfordLogo, // Use imported logo
          ranking: "3",
          students: 16500,
          englishCourses: "Available",
          feeStructure: "$54,000 - $65,000",
        },
        {
          name: "Harvard University",
          logo: harvardLogo, // Use imported logo
          ranking: "5",
          students: 20100,
          englishCourses: "Available",
          feeStructure: "$50,000 - $70,000",
        },
        {
          name: "California Institute of Technology (Caltech)",
          logo: caltechLogo, // Use imported logo
          ranking: "6",
          students: 2300,
          englishCourses: "Available",
          feeStructure: "$52,000 - $66,000",
        },
        {
          name: "University of Chicago",
          logo: chicagoLogo, // Use imported logo
          ranking: "10",
          students: 15300,
          englishCourses: "Available",
          feeStructure: "$55,000 - $68,000",
        },
        {
          name: "Yale University",
          logo: yaleLogo, // Use imported logo
          ranking: "8",
          students: 12600,
          englishCourses: "Available",
          feeStructure: "$53,000 - $67,000",
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
