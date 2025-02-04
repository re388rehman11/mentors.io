import React from "react";
import "./offer.scss";
import { FaCheckCircle, FaUniversity, FaMoneyBillWave, FaHome, FaFileAlt } from "react-icons/fa";

const NextSteps = () => {
  return (
    <div className="next-steps-container">
      <header className="next-steps-banner">
        <h1>After receiving an offer</h1>
        <p>
          Congratulations! An approved university application means you’re one step closer to 
          achieving your dream to study abroad. We’re here to support you with visas, money transfers, 
          health cover, and accommodation. Take a deep breath and make a confident decision with our guidance.
        </p>
      </header>
      
      <section className="steps-list">
        <div className="step-card" data-aos="fade-up">
          <FaFileAlt className="icon" />
          <h2>Track Your Application</h2>
          <p>Stay informed every step of the way through our ‘Application Tracker’.</p>
        </div>

        <div className="step-card" data-aos="fade-up" data-aos-delay="200">
          <FaUniversity className="icon" />
          <h2>Choosing Between Offers</h2>
          <p>Got multiple offers? Make an informed decision with expert guidance.</p>
        </div>

        <div className="step-card" data-aos="fade-up" data-aos-delay="400">
          <FaMoneyBillWave className="icon" />
          <h2>Pay Admission & Tuition Fees</h2>
          <p>We help you transfer funds seamlessly to secure your place.</p>
        </div>

        <div className="step-card" data-aos="fade-up" data-aos-delay="600">
          <FaHome className="icon" />
          <h2>Access Student Essentials</h2>
          <p>Find accommodation, apply for health insurance, and more.</p>
        </div>
      </section>

      <footer className="cta-section">
        <h2>One Account for All Your Study Abroad Needs</h2>
        <p>Unlock a world of features including personalized recommendations and fast-tracked applications.</p>
        <button className="signup-btn">Sign Up</button>
      </footer>
    </div>
  );
};

export default NextSteps;