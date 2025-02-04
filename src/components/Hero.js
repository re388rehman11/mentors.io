import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import heroImage from './assets/HomeImage/Hero.jpg';
export default function Hero() {
  return (
    <div
      className="hero-section d-flex align-items-center text-white position-relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-1px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
        }}
      ></div>

      {/* Content */}
      <div className="container text-center position-relative">
        <h1>Abroad Mentors</h1>
        <h1
          className="display-4 fw-bold"
          style={{
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          Overseas Education Consultant
        </h1>
        <p
          className="lead"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Your Guide to Studying Abroad
        </p>
        <a
          href="tel:+923433350139"
          className="btn btn-danger btn-lg d-inline-flex align-items-center"
          style={{
            marginTop: "20px",
            borderRadius: "50px",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          <FaPhoneAlt className="me-2" /> +923433350139
        </a>
      </div>
    </div>
  );
}
