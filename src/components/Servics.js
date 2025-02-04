


import React from 'react';
import { Link } from 'react-router-dom';
import visaImage from './assets/Services image/Globle.jpg'; // Adjust the path if needed
import CourseImage from './assets/Services image/course.jpg'; 
import ApplicationImage from './assets/Services image/Application.png'; 
 import TechnologyImage from './assets/Services image/technology.jpg'; 


import touristVisaImg from './assets/Services image/tourist-visa.jpg'; // Replace with actual paths to your images
import businessVisaImg from './assets/Services image/business-Visa.jpg';
import studentVisaImg from './assets/Services image/study-viza.jpg';
import workVisaImg from './assets/Services image/work-visa.jpg';
import spouseVisaImg from './assets/Services image/spouse-visa.jpg';
import familyvisaImg from './assets/Services image/family viza.jpg';
import { Container, Row, Col, Button } from "react-bootstrap";


import { 
  FaGraduationCap, 
  FaUniversity, 
  FaMoneyBillAlt, 
  FaClipboardList, 
  FaChalkboardTeacher, 
  FaPlaneDeparture, 
  FaUser, 
  FaSchool, 
  FaClock 
} from 'react-icons/fa';

export default function Services() {
  return (
    <div>
      {/* Services Section */}
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row text-center">
          {/* Career Counseling */}
          <div className="col-md-4 mb-4">
            <div className="service-box p-4 border rounded shadow service-card">
              <FaGraduationCap size={50} className="mb-3" />
              <h5>Career Counseling</h5>
              <p>Get personalized career guidance to choose the right study path based on your goals and aspirations.</p>
            </div>
          </div>

          {/* Selection of University */}
          <div className="col-md-4 mb-4">
            <div className="service-box p-4 border rounded shadow service-card">
              <FaUniversity size={50} className="mb-3" />
              <h5>Selection of University</h5>
              <p>We help you select the best universities based on your academic preferences and career goals.</p>
            </div>
          </div>

          {/* Scholarships */}
          <div className="col-md-4 mb-4">
            <div className="service-box p-4 border rounded shadow service-card">
              <FaMoneyBillAlt size={50} className="mb-3" />
              <h5>Scholarships</h5>
              <p>We guide you through the scholarship application process to help you secure financial aid for your studies.</p>
            </div>
          </div>
        </div>

        <div className="row text-center">
          {/* Application Handling */}
          <div className="col-md-4 mb-4">
            <div className="service-box p-4 border rounded shadow service-card">
              <FaClipboardList size={50} className="mb-3" />
              <h5>Application Handling</h5>
              <p>We assist with the entire application process, ensuring that your documents are in order for submission.</p>
            </div>
          </div>

          {/* Interview Preparation */}
          <div className="col-md-4 mb-4">
            <div className="service-box p-4 border rounded shadow service-card">
              <FaChalkboardTeacher size={50} className="mb-3" />
              <h5>Interview Preparation</h5>
              <p>Prepare for your university interviews with mock sessions and expert advice to boost your confidence.</p>
            </div>
          </div>

          {/* Pre-Departure Briefing */}
          <div className="col-md-4 mb-4">
            <div className="service-box p-4 border rounded shadow service-card">
              <FaPlaneDeparture size={50} className="mb-3" />
              <h5>Pre-Departure Briefing</h5>
              <p>Get all the information you need before leaving for your studies abroad, including visa requirements and travel tips.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="what-we-offer py-5" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container text-center">
        <h2 className="mb-4">What We Offer</h2>
        <div className="row justify-content-center">
          {/* Tourist Visa */}
          <div className="col-md-4 mb-4">
            <div className="offer-card p-4 border rounded shadow text-center bg-white text-dark">
              <img src={touristVisaImg} alt="Tourist Visa" className="img-fluid mb-3 rounded" />
              <h5>Tourist Visa</h5>
              <p>Explore the world with hassle-free tourist visa processing and expert guidance.</p>
            </div>
          </div>

          {/* Business Visa */}
          <div className="col-md-4 mb-4">
            <div className="offer-card p-4 border rounded shadow text-center bg-white text-dark">
              <img src={businessVisaImg} alt="Business Visa" className="img-fluid mb-3 rounded" />
              <h5>Business Visa</h5>
              <p>Seamlessly travel for work and expand your business opportunities abroad.</p>
            </div>
          </div>

          {/* Student Visa */}
          <div className="col-md-4 mb-4">
            <div className="offer-card p-4 border rounded shadow text-center bg-white text-dark">
              <img src={studentVisaImg} alt="Student Visa" className="img-fluid mb-3 rounded" />
              <h5>Student Visa</h5>
              <p>Pursue your academic dreams with our efficient and reliable student visa services.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Work Visa */}
          <div className="col-md-4 mb-4">
            <div className="offer-card p-4 border rounded shadow text-center bg-white text-dark">
              <img src={workVisaImg} alt="Work Visa" className="img-fluid mb-3 rounded" />
              <h5>Work Visa</h5>
              <p>Secure your future with a work visa tailored to your professional needs.</p>
            </div>
          </div>

          {/* Spouse Visa */}
          <div className="col-md-4 mb-4">
            <div className="offer-card p-4 border rounded shadow text-center bg-white text-dark">
              <img src={spouseVisaImg} alt="Spouse Visa" className="img-fluid mb-3 rounded" />
              <h5>Spouse Visa</h5>
              <p>Stay close to your loved ones with our smooth spouse visa application process.</p>
            </div>
          </div>




          {/* Spouse Visa */}
          <div className="col-md-4 mb-4">
            <div className="offer-card p-4 border rounded shadow text-center bg-white text-dark">
              <img src={familyvisaImg} alt="Spouse Visa" className="img-fluid mb-3 rounded" />
              <h5>Family Visa</h5>
              <p>Reunite with your loved ones through our seamless spouse visa process. We make bringing your partner closer easier and faster.</p>
            </div>
          </div>
        </div>
      </div>
    </section>








<section className="powerful-technology py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Text Content */}
          <Col md={6}>
            <h2 className="fw-bold">Powerful Technology</h2>
            <p className="mb-4">
              Use the Abroad Mentors platform and experience the difference, including an amazing selection of courses and universities/colleges:
            </p>
            <ul>
              <li>A powerful online platform</li>
              <li>End-to-end application submission online</li>
              <li>Access to a huge network of universities and colleges</li>
            </ul>
            <Button variant="primary" className="mt-3">
  <Link to="/contact" className="text-white text-decoration-none">Get Started</Link>
</Button>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} className="text-center">
            <img
              src={TechnologyImage}
              alt="Powerful Technology"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "90%",
                height: "auto",
                border: "1px solid #ddd"
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>





    {/* Fast Application Submission Section */}
<section className="application-submission py-5" style={{ backgroundColor: "#f9f9f9" }}>
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Image */}
      <div className="col-md-6">
        <img
        
        src={ApplicationImage} 
        
    
          alt="Fast Application Submission"
          className="img-fluid rounded shadow"
        />
      </div>
      {/* Right Side Content */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4">Fast Application Submission</h2>
        <p>
          With over a decade of application submission experience, we are ready to work with you to ensure a fast application turnaround time following our application compliance checks.
        </p>
        <ul>
          <li>We have over 12 years of experience in the industry</li>
          <li>A proven track record of application success</li>
          <li>Strong university / college partnerships</li>
        </ul>
      </div>
    </div>
  </div>
</section>





<section className="course-search-opportunities py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <Container>
    <Row className="align-items-center">
      {/* Left Column: Text Content */}
      <Col md={6} className="order-md-1">
        <h2 className="fw-bold">Course Search Opportunities</h2>
        <p className="mb-4">
          We have a powerful course search database that underpins abroad Mentors, allowing you to find the right course for your students:
        </p>
        <ul>
          <li>Tens of thousands of courses</li>
          <li>Easy course search functionality</li>
          <li>Search courses based on student nationality</li>
        </ul>
        <Button variant="primary" className="mt-3">
  <Link to="/contact" className="text-white text-decoration-none">Get Started</Link>
</Button>

      </Col>
      {/* Right Column: Image */}
      <Col md={6} className="text-center order-md-2">
        <img
        
        src={CourseImage} 
        alt="Study Visa Experts" 
          
          className="img-fluid rounded shadow"
          style={{
            maxWidth: "90%",
            height: "auto",
            border: "1px solid #ddd"
          }}
        />
      </Col>
    </Row>
  </Container>
</section>








            {/* Introduction Section */}
<section className="introduction py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Image Section */}
      <div className="col-md-6">
      <img 
              src={visaImage} 
              alt="Study Visa Experts" 
              className="img-fluid rounded shadow" 
            />
      </div>
      {/* Right Text Section */}
      <div className="col-md-6">
        <p className="text-uppercase text-muted fw-bold mb-2">Study Visa Experts</p>
        <h2 className="display-4 fw-bold">Unlock Your Global Education</h2>
        <p className="lead text-muted mt-3">
          Navigate the study visa process with ease. Our dedicated consultants 
          provide personalized guidance to help you study abroad successfully. 
          Let us turn your dreams into reality!
        </p>
        {/* Stats Section */}
        <div className="stats mt-5 d-flex">
          <div className="me-5">
            <p className="h2 fw-bold mb-0">2,000 +</p>
            <p className="text-muted">Students</p>
          </div>
          <div>
            <p className="h2 fw-bold mb-0">14 +</p>
            <p className="text-muted">Countries</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





      




      
</div>
    );
}
