// import React from 'react';
// import { Container, Row, Col } from "react-bootstrap"; // Add this import statement
// import boximage from './assets/box.png'
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import './event.scss'; // Import updated custom styles
// import bgImage from './assets/Students/hero.jpg'; // Adjust the path


// import { Button } from "react-bootstrap";



// // Import images from the src/assets/images folder (or wherever you store your images)
// import ceoImage from './assets/ceo.jpg';


// export const About = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

//   return (
//     <div className="about-page">
//         {/* Hero Section with background image */}
//       <section
//         className="hero-section text-center py-5 text-white"
//         style={{
//           backgroundSize: 'cover',
//           backgroundImage: `url(${bgImage})`,
//           backgroundPosition: 'center',
//           height: '70vh',
//         }}
//       >



//         {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
//         }}
//       ></div>


//         <div className="container">
//           <h1 className="display-4 fw-bold">About Abroad Mentors</h1>
//           <p className="lead">Your Trusted Partner for Study Abroad Opportunities</p>
//         </div>
//       </section>


      








//       <section className="how-we-work">
//       <Container>
//         <div className="text-center">
//           <h2>How We Work</h2>
//           <h4>Our Admission Process</h4>
//           <p>
//             Our admission process includes an online application, required
//             documents, and an interview. We evaluate candidates holistically
//             and notify successful applicants promptly.
//           </p>
//         </div>
//         <Row className="mt-4">
//           <Col md={4} className="step">
//             <div className="icon-container">
//               <i className="fas fa-info-circle"></i> {/* Add your icon */}
//             </div>
//             <h5>Get All Details</h5>
//             <p>
//               Reach out to us to get all details and guidance for studying
//               abroad from our expert education consultants.
//             </p>
//           </Col>
//           <Col md={4} className="step">
//             <div className="icon-container">
//               <i className="fas fa-university"></i>
//             </div>
//             <h5>University Selection</h5>
//             <p>
//               Choose the right university for abroad education according to
//               your choice.
//             </p>
//           </Col>
//           <Col md={4} className="step">
//             <div className="icon-container">
//               <i className="fas fa-check-circle"></i>
//             </div>
//             <h5>Meet Requirements</h5>
//             <p>
//               Our professionals will guide you to meet all requirements for
//               study abroad programs.
//             </p>
//           </Col>
//         </Row>
//         <Row className="mt-4">
//           <Col md={4} className="step">
//             <div className="icon-container">
//               <i className="fas fa-paper-plane"></i>
//             </div>
//             <h5>Apply To University</h5>
//             <p>
//               Apply to your selected foreign university. Our study abroad
//               consultants streamline the student visa application process for a
//               successful submission.
//             </p>
//           </Col>
//           <Col md={4} className="step">
//             <div className="icon-container">
//               <i className="fas fa-user-check"></i>
//             </div>
//             <h5>Interview Preparation</h5>
//             <p>
//               Pass your international university interview with the help of our
//               education counsellor.
//             </p>
//           </Col>
//           <Col md={4} className="step">
//             <div className="icon-container">
//               <i className="fas fa-passport"></i>
//             </div>
//             <h5>Visa Granted</h5>
//             <p>
//               Finally, your visa is granted. Get ready to travel to study
//               abroad!
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </section>


//     <section className="global-stats py-5" ref={ref}>
//   <Container>
//     <Row className="text-center mb-4">
//       <Col>
//         <h3 className="fw-bold">We Serve Around The Globe</h3>
//       </Col>
//     </Row>
//     <Row className="text-center">
//       <Col xs={6} sm={6} md={3} className="stat-item mb-4">
//         <h2 className="display-5 fw-bold">
//           {inView && <CountUp start={0} end={10} duration={2} />}+
//         </h2>
//         <p className="text-muted">Countries</p>
//       </Col>
//       <Col xs={6} sm={6} md={3} className="stat-item mb-4">
//         <h2 className="display-5 fw-bold">
//           {inView && <CountUp start={0} end={14} duration={2} />}+
//         </h2>
//         <p className="text-muted">Branches</p>
//       </Col>
//       <Col xs={6} sm={6} md={3} className="stat-item mb-4">
//         <h2 className="display-5 fw-bold">
//           {inView && <CountUp start={0} end={98} duration={2} />}%
//         </h2>
//         <p className="text-muted">Success Rate</p>
//       </Col>
//       <Col xs={6} sm={6} md={3} className="stat-item mb-4">
//         <h2 className="display-5 fw-bold">
//           {inView && <CountUp start={0} end={1000} duration={2} />}+
//         </h2>
//         <p className="text-muted">Visa Processing</p>
//       </Col>
//     </Row>
//   </Container>
// </section>





//     <div className="why-choose-container">
//       <div className="why-choose-content">
//         <h5>Why Choose</h5>
//         <h2>Abroad Mentors Consultants</h2>
//         <p>
//           We offer free consultation to help students in planning their study abroad journey.
//           Our abroad education consultants provide guidance on selecting the right university
//           and preparing your student visa application.
//         </p>
//         <p>
//           Our experts provide personalized support to make your study overseas experience stress-free
//           and successful. We understand your goals and needs and give the best advice according to your situation.
//         </p>
//       </div>
//       <div className="why-choose-image">
//         <img src={boximage} alt="Consulting" />
//       </div>
//     </div>

   


      

//      {/* CEO & Director Section */}
// <section className="leadership py-5 bg-light">
//   <div className="container">
//     <h2 className="text-center mb-4">Meet Our CEO</h2>
//     <div className="row align-items-center">
      
//       {/* Left Side Image */}
// <div className="col-md-4 text-center">
//   <img
//     src={ceoImage} // Replace this with the correct path or URL for Salman Anwaar's image
//     alt="Salman Anwaar"
//     className="mb-3"
//     style={{ width: '400px', height: '400px', objectFit: 'cover' }}
//   />
// </div>

      
//       {/* Right Side Content */}
//       <div className="col-md-8">
//         <h3 className="fw-bold">I'm Salman Anwaar</h3>
//         <h5 className="text-muted">Chief Executive Officer</h5>
//         <p>
//           Hi, myself Salman Anwaar! I’m the Chief Executive Officer (CEO) of 
//           <strong> Abroad Mentor</strong>, an Educational Consultancy Company located in Pakistan. 
//           I am also the founder of future career hub and a member of the Board of Directors of 
//           <strong> Abroad Mentor</strong>.
//         </p>
//         <p>
//   As an aspiring consultant for students seeking international education, my ambition is to guide and empower individuals in their journey to study abroad. Through my expertise and dedication, I aim to help students achieve their dreams of global education and build a bright future in a diverse and dynamic world.
// </p>

//       </div>
      
//     </div>
//   </div>
// </section>













  



      
// {/* 
// <div className="map-container">
//       <h1 className="map-heading">Our Office Location</h1>
//       <p className="map-description">
//         We are located in the heart of Faisalabad, Pakistan. Visit us at:
//       </p>

      
//       <div className="map">
//         <iframe
//           title="Office Location"
//           src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3405.34570589361!2d73.1078!3d31.4046!3m2!1i1024!2i768!4f13.1!2m1!1sUmar%20FCH!5e0!3m2!1sen!2s!4v1738409160867!5m2!1sen!2s"
//           width="100%"  
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>  */}
  

//     </div>
//   );
// };






import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import boxImage from './assets/box.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './event.scss';
import bgImage from './assets/Students/hero.jpg';
import ceoImage from './assets/ceo.jpg';

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="hero-section text-center py-5 text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          height: '70vh',
        
        }}
      >
        <div className="overlay"></div>
        <div className="container" 
        style={{
        
          marginTop:'10vh'
        }}>
          <h1 className="display-4 fw-bold">About Abroad Mentors</h1>
          <p className="lead">Your Trusted Partner for Study Abroad Opportunities</p>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="how-we-work">
  <Container>
    <div className="text-center">
      <h2>How We Work</h2>
      <h4>Our Admission Process</h4>
      <p>
        Our admission process includes an online application, required documents, and an interview.
        We evaluate candidates holistically and notify successful applicants promptly.
      </p>
    </div>
    <Row className="mt-4">
      <Col md={4} className="step">
        <div className="icon-container">
          <i className="fas fa-info-circle"></i>
        </div>
        <h5>Get All Details</h5>
        <p>Reach out to us to get all details and guidance for studying abroad from our expert consultants.</p>
      </Col>
      <Col md={4} className="step">
        <div className="icon-container">
          <i className="fas fa-university"></i>
        </div>
        <h5>University Selection</h5>
        <p>Choose the right university for abroad education according to your choice.</p>
      </Col>
      <Col md={4} className="step">
        <div className="icon-container">
          <i className="fas fa-check-circle"></i>
        </div>
        <h5>Meet Requirements</h5>
        <p>Our professionals will guide you to meet all requirements for study abroad programs.</p>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md={4} className="step">
        <div className="icon-container">
          <i className="fas fa-file-alt"></i>
        </div>
        <h5>Prepare Documents</h5>
        <p>We assist in preparing and submitting all required documents for a smooth application process.</p>
      </Col>
      <Col md={4} className="step">
        <div className="icon-container">
          <i className="fas fa-comments"></i>
        </div>
        <h5>Attend Interview</h5>
        <p>Our team provides guidance to help you prepare for university and visa interviews.</p>
      </Col>
      <Col md={4} className="step">
        <div className="icon-container">
          <i className="fas fa-plane"></i>
        </div>
        <h5>Fly to Your Destination</h5>
        <p>Once accepted, we help you with visa processing, accommodation, and travel arrangements.</p>
      </Col>
    </Row>
  </Container>
</section>


      {/* Global Stats Section */}
      <section className="global-stats py-5" ref={ref}>
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h3 className="fw-bold">We Serve Around The Globe</h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={6} sm={6} md={3} className="stat-item mb-4">
              <h2 className="display-5 fw-bold">
                {inView && <CountUp start={0} end={10} duration={2} />}+
              </h2>
              <p className="text-muted">Countries</p>
            </Col>
            <Col xs={6} sm={6} md={3} className="stat-item mb-4">
              <h2 className="display-5 fw-bold">
                {inView && <CountUp start={0} end={14} duration={2} />}+
              </h2>
              <p className="text-muted">Branches</p>
            </Col>
            <Col xs={6} sm={6} md={3} className="stat-item mb-4">
              <h2 className="display-5 fw-bold">
                {inView && <CountUp start={0} end={98} duration={2} />}%
              </h2>
              <p className="text-muted">Success Rate</p>
            </Col>
            <Col xs={6} sm={6} md={3} className="stat-item mb-4">
              <h2 className="display-5 fw-bold">
                {inView && <CountUp start={0} end={1000} duration={2} />}+
              </h2>
              <p className="text-muted">Visa Processing</p>
            </Col>
          </Row>
        </Container>
      </section>



      <div className="why-choose-container">
       <div className="why-choose-content">
         <h5>Why Choose</h5>
         <h2>Abroad Mentors Consultants</h2>
         <p>
           We offer free consultation to help students in planning their study abroad journey.
           Our abroad education consultants provide guidance on selecting the right university
          and preparing your student visa application.
        </p>
         <p>
           Our experts provide personalized support to make your study overseas experience stress-free
           and successful. We understand your goals and needs and give the best advice according to your situation.
         </p>
       </div>
       <div className="why-choose-image">
         <img src={boxImage} alt="Consulting" />
      </div>
     </div>

      {/* CEO Section */}
      <section className="leadership py-5 bg-light">
  <Container>
    <h2 className="text-center mb-4">Meet Our CEO</h2>
    <Row className="align-items-center">
      <Col md={4} className="text-center">
        <img
          src={ceoImage}
          alt="Salman Anwaar"
          className="ceo-image"
        />
      </Col>
      <Col md={8}>
        <h3 className="fw-bold">Salman Anwaar</h3>
        <h5 className="text-muted">Chief Executive Officer</h5>
        <p>
          Hi, myself Salman Anwaar! I’m the Chief Executive Officer (CEO) of 
          <strong> Abroad Mentor</strong>, an Educational Consultancy Company located in Pakistan. 
          I am also the founder of Future Career Hub and a member of the Board of Directors of Abroad Mentor.
        </p>
        <p>
          My journey with Abroad Mentor stems from my passion for guiding young minds toward their academic and professional goals. 
          I strongly believe that education is the foundation for success, and my goal is to ensure that every student has access 
          to quality education across the globe. At Abroad Mentor, we emphasize personalized guidance, tailored solutions, and a 
          seamless process to help students achieve their dreams of studying abroad.
        </p>
        <p>
          As a leader, my vision is to establish Abroad Mentor as a trusted name in educational consultancy by maintaining a 
          student-centric approach. My ultimate goal is to empower students with the knowledge, confidence, and resources needed 
          to excel in their careers. Together with my dedicated team, we aim to build a brighter future by connecting students 
          with opportunities that align with their aspirations. Your dreams are our mission, and we are committed to turning 
          them into reality.
        </p>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  );
};

