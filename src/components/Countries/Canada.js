import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from '../assets/CanadaImage/hero.jpeg';  // Adjust the path accordingly
import p1Image from '../assets/CanadaImage/p1.jpeg';  // Adjust the path accordingly
import p2Image from '../assets/CanadaImage/p2.webp';  // Adjust the path accordingly


import backgroundImage from '../assets/CanadaImage/background.jpg'; // Add your background image path
import torontoLogo from '../assets/CanadaImage/toronto.png'; // Add your logo import
import ubcLogo from '../assets/CanadaImage/ubc.png';
import mcgillLogo from '../assets/CanadaImage/mcgill.jpg';
import montrealLogo from '../assets/CanadaImage/Montreal.png';
import mcmasterLogo from '../assets/CanadaImage/McMaster.png';
import albertaLogo from '../assets/CanadaImage/Alberta.png';

export default function Canada() {
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
`url(${heroImage})`,          backgroundSize: "cover",
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
            Study in Canada
          </h1>
          <p
            className="lead fw-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Discover Canada's world-class education system, natural beauty, and vibrant culture.
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
                    )}&text=Study%20in%20Canada!`}
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
                    )}&title=Study%20in%20Canada`}
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
      {/* Text Section */}
      <div className="col-md-6">
        <h2 className="display-5 fw-bold mb-4">
          Exceptional Educational Landscape
        </h2>
        <p>
          Canada has firmly established itself as a global education hub, boasting
          some of the world's most prestigious universities and colleges. Renowned
          institutions such as the University of Toronto, McGill University, and
          the University of British Columbia consistently rank among the top
          universities worldwide. With a focus on cutting-edge research, diverse
          academic programs, and innovative teaching methods, these institutions
          provide students with a world-class education that equips them for success
          in their chosen fields.
        </p>
        <h2 className="display-5 fw-bold mt-5 mb-4">Affordable Living Costs</h2>
        <p>
          In addition to its stellar academic offerings, Canada stands out for its
          reasonable living costs. Compared to other popular study destinations,
          such as the United States and the United Kingdom, the cost of living in
          Canada is relatively affordable. This makes pursuing higher education a
          feasible option for a wide range of international students. From
          affordable housing options to reasonable transportation expenses, Canada's
          commitment to accessible education ensures that financial considerations
          need not be a barrier to achieving one's academic aspirations.
        </p>
       
      </div>

      {/* Right Side Image */}
      <div className="col-md-6">
        <div
          className="image-container"
          style={{
            backgroundImage:
`url(${p1Image})`,            backgroundSize: "cover",
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


{/* Paragraph Section with Right-Sided Image */}
<section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row align-items-center">
      {/* Text Section */}
      <div className="col-md-6">
       

        <h2 className="display-5 fw-bold mt-5 mb-4">
          Quality of Life and Multicultural Experience
        </h2>
        <p>
          Canada's reputation for embracing diversity and fostering a welcoming
          environment is well-deserved. International students find themselves in
          a multicultural mosaic that promotes cultural exchange and understanding.
          This enriching experience goes beyond the classroom, as students have
          the opportunity to engage with peers from around the world, partake in
          various cultural activities, and explore the country's stunning natural
          landscapes. The Canadian lifestyle, characterized by safety,
          inclusivity, and high standards of living, contributes to a holistic and
          fulfilling study abroad journey.
        </p>

        <h2 className="display-5 fw-bold mt-5 mb-4">
          A Bright and Promising Future
        </h2>
        <p>
          Choosing to study in Canada isn't merely a decision about education—
          it's an investment in a bright and promising future. With world-class
          institutions, affordable living costs, unparalleled post-graduate
          opportunities, and a welcoming atmosphere, Canada provides a platform
          for international students to excel academically, professionally, and
          personally. Whether one seeks an advanced degree, research opportunities,
          or an immersive cultural experience, Canada offers all the essential
          ingredients for a successful educational journey and a prosperous future
          on the global stage.
        </p>
        <Link to="/contact" className="btn btn-primary mt-4">
          Enquire Now
        </Link>
      </div>

      {/* Right-Sided Image */}
      <div className="col-md-6">
        <div
          className="image-container"
          style={{
            backgroundImage:
`url(${p2Image})`,            backgroundSize: "cover",
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


<section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Left Column: Documents Checklist */}
          <div className="col-md-6">
            <h3 className="mb-4">Documents Checklist</h3>
            <ul className="list-group list-group-flush">
              {[
                "Original Passport",
                "All Attested Educational Documents",
                "Degree & Transcript Attested Copies",
                "IELTS / PTE / TOEFL Score Card",
                "Experience Certificate",
                "2 Recommendation Letters",
                "GRE / GMAT (Optional)",
              ].map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  {item}
                  <span className="text-primary">+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Why Choose Canada */}
          <div className="col-md-6">
            <h3 className="mb-4">Why Choose To Study In Canada?</h3>
            <ul className="list-unstyled">
              {[
                "Identical Facilities As Residents",
                "3rd Rank In Life Quality Index",
                "7 Canadian Universities rank among the top 200 universities all over the world",
                "Spouses are not the full-time students in Canada",
                "Work permit after graduation",
                "Eligible to apply for permanent residence within 3 years",
                "No language barrier",
                "Submission of GIC (CAD 20,635) allows one to be free from worries about earning",
                "Lower cost of Living (CAD 750 - CAD 1637 monthly)",
                "Pathway to the USA, France, Yukon Territory",
              ].map((benefit, index) => (
                <li key={index} className="mb-2">
                  <span className="text-primary me-2">➤</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Study Visa Requirements */}
        <div className="mt-5">
          <h3 className="mb-4">Study Visa Requirements</h3>
          <p>
            Pakistani students must look into the document checklist provided to understand the visa
            requirements to study in Canada for international students.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Official Transcripts
              <span className="text-primary">+</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              GIC (CAD 20,635)
              <span className="text-primary">+</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  











    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          {/* Left Column: Study Programs */}
          <div className="col-md-6">
            <h3 className="mb-4">Study Programs</h3>
            <div className="card mb-3 shadow-sm" style={{ backgroundColor: "#002D62", color: "white" }}>
              <div className="card-body">
                <h5 className="card-title">International Students</h5>
                <p className="card-text">
                  In Canada, there are numerous educational institutes offering education in Canada for international students. Around 223 public and private universities and 213 public colleges are offering over 8000 programs for international students to study in Canada.
                </p>
              </div>
            </div>
            <div className="card shadow-sm" style={{ backgroundColor: "#002D62", color: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Pakistani Students</h5>
                <p className="card-text">
                  For Pakistani students, visa fees are approximately 80-90 lacs in total. There are certain scholarships available for Pakistani students on various grounds as well.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Application Documents */}
          <div className="col-md-6">
            <h3 className="mb-4">Application Documents</h3>
            <div className="accordion" id="applicationDocumentsAccordion">
              {[
                { title: "Original Passport", description: "Ensure your passport is valid for the duration of your intended stay abroad." },
                { title: "Intermediate Degree & Result Documents" },
                { title: "Matric Degree & Result Documents" },
                { title: "IELTS / PTE Score Card" },
                { title: "Experience Certificate" },
                { title: "BS Degree (If Available)" },
                { title: "Letters of Recommendation" },
                { title: "GRE / GMAT (If Required)" },
              ].map((doc, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {doc.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#applicationDocumentsAccordion"
                  >
                    <div className="accordion-body">
                      {doc.description || "Details will be added here if required."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
  <h2 className="text-center mb-4 text-white">Top Universities in Canada</h2>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[
        {
          name: "University of Toronto",
          logo: torontoLogo, // Use imported logo
          ranking: "Top 30",
          students: 88000,
          englishCourses: "Available",
          feeStructure: "CAD 15,000 - 60,000",
        },
        {
          name: "University of British Columbia (UBC)",
          logo: ubcLogo, // Use imported logo
          ranking: "Top 40",
          students: 67000,
          englishCourses: "Available",
          feeStructure: "CAD 20,000 - 50,000",
        },
        {
          name: "McGill University",
          logo: mcgillLogo, // Use imported logo
          ranking: "Top 50",
          students: 40000,
          englishCourses: "Available",
          feeStructure: "CAD 18,000 - 45,000",
        },
        {
          name: "University of Montreal",
          logo: montrealLogo, // Use imported logo
          ranking: "Top 100",
          students: 67000,
          englishCourses: "Available",
          feeStructure: "CAD 16,000 - 40,000",
        },
        {
          name: "McMaster University",
          logo: mcmasterLogo, // Use imported logo
          ranking: "Top 150",
          students: 25000,
          englishCourses: "Available",
          feeStructure: "CAD 18,000 - 35,000",
        },
        {
          name: "University of Alberta",
          logo: albertaLogo, // Use imported logo
          ranking: "Top 150",
          students: 40000,
          englishCourses: "Available",
          feeStructure: "CAD 14,000 - 38,000",
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
};