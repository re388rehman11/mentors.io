import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Apply.scss';

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
    <div className="container text-center py-5">
      <motion.h1 
        className="guide-title mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How to Apply with MyConsultant for Studying Abroad
      </motion.h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="guide-card p-3 border rounded shadow-sm h-100">
              <h2 className="h5">{step.title}</h2>
              <p className="small">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.a 
        href="https://wa.me/923426874805" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-primary mt-4 px-4 py-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact on WhatsApp
      </motion.a>
    </div>
  );
};

export default Guide;
