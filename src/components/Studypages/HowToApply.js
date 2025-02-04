import React from "react";
import { motion } from "framer-motion";

import './Apply.scss'

const steps = [
  { title: "Research Programs", description: "Explore different universities and courses that match your goals." },
  { title: "Contact a Consultant", description: "Book a session with a MyConsultant mentor for personalized guidance." },
  { title: "Prepare Documents", description: "Gather transcripts, SOP, LORs, and financial proofs." },
  { title: "Submit Applications", description: "Apply to universities through their official portals with your consultant’s help." },
  { title: "Visa Process", description: "Receive university admission and apply for a student visa." },
  { title: "Prepare for Departure", description: "Book flights, arrange accommodation, and attend pre-departure sessions." },
];

const Guide = () => {
  return (
    <div className="guide-container">
      <motion.h1 
        className="guide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How to Apply with MyConsultant for Studying Abroad
      </motion.h1>
      <div className="guide-steps">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="guide-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="card-content">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.a 
        href="https://wa.me/923426874805" 
        target="_blank" 
        rel="noopener noreferrer"
        className="contact-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact on WhatsApp
      </motion.a>
    </div>
  );
};

export default Guide;