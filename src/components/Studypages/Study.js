import './study.scss'; // Import custom styling
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaWhatsapp } from "react-icons/fa"
const App = () => {
  return (
    <div className="app-container">

      {/* Animated Introduction */}
      <motion.section
        className="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Where and What to Study</h1>
        <p>
          We're here to help you navigate through your study abroad options
          with ease. From choosing a destination through to course advice.
        </p>
      </motion.section>

      {/* Animated Destinations Section with Card-style Button */}
      <motion.section
        className="destinations"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Pick Your Dream Destination and Course</h2>
        <p>
          You've taken a significant step by deciding to study overseas. Now it’s time to choose where and what to study. Navigating through hundreds of course and university options can be overwhelming, plus you’ll have tons of other questions on your mind.
        </p>
        <div className="list-style">
          <Link to="/uk">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              UK
            </motion.div>
          </Link>
          <Link to="/australia">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Australia
            </motion.div>
          </Link>
          <Link to="/newzealand">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              New Zealand
            </motion.div>
          </Link>
          <Link to="/usa">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              USA
            </motion.div>
          </Link>
          <Link to="/canada">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Canada
            </motion.div>
          </Link>
          <Link to="/ireland">
            <motion.div
              className="list-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Ireland
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Other Sections... */}
      <motion.div
        className="whatsapp-btn-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <a
          href="https://wa.me/24323432343" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-btn">
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-text">Chat with Us on WhatsApp</span>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default App;